(ns client.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [clojure.string :as str])
  (:require [reagent.core :as reagent :refer [atom]]
            [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [ajax.core :as ajax]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce ^:dynamic *app-state* (atom {:cart {}}))

(def menu-items {:chicken-parm {:name "Chicken Parmesan"
                                :description "Breaded chicken breast topped with parmesan cheese and tomato sause atop spaghetti"
                                :price 14}
                 :pizza {:name "Margharita Flatbred Pizza"
                         :description "Thin crust pizza with a mix of parmesean and mozzarella chease and sliced tomatoes."
                         :price 11}
                 :chicken-quesadilla {:name "Chicken Quesadilla"
                                      :description "Tortilla with shredded cheddar, diced tomatos, and strips of chicken."
                                      :price 8}
                 :chicken-teriyaki {:name "Chicken Teriyaki"
                                    :description "Sliced chicken cooked in teriyaki sauce with steamed broccoli and rice"
                                    :price 10}
                 :salad {:name "Caesar Salad"
                         :description "Romane lettuce, crutons, egg, olive oil, parmesean cheese, Dijon mustard, Worchestershire sauce, and choice of black pepper"
                         :price 6}})

(defn cart-incr [id]
  (fn [e] (swap! *app-state* update-in [:cart id] (fnil inc 0)) (.preventDefault e)))
(defn cart-decr [id]
  (fn [e] (swap! *app-state* update-in [:cart id] dec) (.preventDefault e)))
(defn cart-clearer [id]
  (fn [e] (swap! *app-state* update :cart dissoc id) (.preventDefault e)))

(defn menu-element [id menu-item]
  [:li
   [:strong (:name menu-item)]
   [:br]
   [:em
    (:description menu-item) " "
    (:price menu-item)]
   [:br]
   [:button {:class "btn btn-primary"
             :on-click (cart-incr id)}
    "Add to Cart"]])

(defn menu-component []
  [:section {:class "col-md"}
   [:h1 "Menu"]
   [:ul
    (for [[k v] menu-items] ^{:key k} [menu-element k v])]])

(defn cart-element [id count]
  (let [el (menu-items id)]
    [:li
     [:strong (:name el)]
     " " count " @ $" (.toFixed (:price el) 2) " "
     [:a {:href "#" :on-click (cart-incr id)} "+"] " "
     [:a {:href "#" :on-click (cart-decr id)} "-"] " "
     [:a {:href "#" :on-click (cart-clearer id)} "x"]]))

(defn submit-cart []
  )

(defn cart-component []
  (let [cart (:cart @*app-state*)
        subtotal (->> cart
                      (map (fn [[id c]] (* c (get-in menu-items [id :price]))))
                      (reduce +))
        tax (* subtotal 0.07)
        total (+ subtotal tax)]
    [:section {:class "col-md"}
     [:h1 "Cart"]
     [:ul
      (for [[id count] cart
            :when (> count 0)]
        ^{:key id} [cart-element id count])]
     [:p "Subtotal: $" (.toFixed subtotal 2)]
     [:p "Tax: $" (.toFixed tax 2)]
     [:p "Total: $" (.toFixed total 2)]
     [:button {:class "btn btn-primary"
               :on-click #(ajax/POST (str "/charge?charge=" total))
               :disabled (= total 0)}
      "Submit Cart"]]))

(defn hello-world []
  [:div {:class "row"}
   [menu-component]
   [cart-component]])

(reagent/render-component [hello-world]
                          (dom/getElement "app"))

(defn on-js-reload []
  ;; optionally touch your *app-state* to force rerendering depending on
  ;; your application
  ;; (swap! *app-state* update-in [:__figwheel_counter] inc)
)
