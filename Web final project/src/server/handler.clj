(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.coercions :as coercions]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defn root-route []
  "Hello World!")

(defn post-charge [charge]
  (println (str charge " was earned")))

(defroutes app-routes
  (GET "/" [] (root-route))
  (POST "/charge" [charge] charge)
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false)))
