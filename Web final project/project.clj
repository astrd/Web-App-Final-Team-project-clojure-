(defproject server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/core.async  "0.4.474"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]
                 [org.clojure/core.match "0.2.2"]
                 [kioo "0.5.0"]
                 [cljs-ajax "0.7.5"]
                 [yesql "0.5.3"]]
  :plugins [[lein-pprint "1.1.2"]
            [lein-ring "0.12.4"]
            [lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
  :hooks [leiningen.cljsbuild]
  :ring {:handler server.handler/app :nrepl {:start? true}}
  :source-paths ["src"]
  :cljsbuild {:builds
              [{:id "min"
                :jar true
                :source-paths ["src-cljs"]
                :compiler {:output-to "resources/public/js/compiled/client.js"
                           :main client.core
                           :optimizations :advanced
                           :pretty-print false}}]}
  :figwheel {:css-dirs ["resources/public/css"] ;; watch and update CSS
             }
  :profiles
  {:dev {:dependencies [[binaryage/devtools "0.9.9"]
                        [figwheel-sidecar "0.5.16"]
                        [org.clojure/tools.nrepl "0.2.13" :exclusions [org.clojure/clojure]]
                        [cider/piggieback "0.3.8"]
                        [com.billpiel/sayid "0.0.16"]
                        [javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]
         :cljsbuild ^:replace {:builds [{:id "dev"
                                         :source-paths ["src-cljs"]

                                         ;; The presence of a :figwheel configuration here
                                         ;; will cause figwheel to inject the figwheel client
                                         ;; into your build
                                         :figwheel {:on-jsload "client.core/on-js-reload"}
                                         :compiler {:main client.core
                                                    :asset-path "js/compiled/out"
                                                    :output-to "dev-resources/public/js/compiled/client.js"
                                                    :output-dir "dev-resources/public/js/compiled/out"
                                                    :source-map-timestamp true
                                                    ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                                                    ;; https://github.com/binaryage/cljs-devtools
                                                    :preloads [devtools.preload]}}]}
         :source-paths ["dev"]
         :plugins [[cider/cider-nrepl "0.18.0"]
                   [refactor-nrepl "2.4.0"]]
         :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
         ;; need to add the compliled assets to the :clean-targets
         :clean-targets ^{:protect false} ["dev-resources/public/js/compiled" "resources/public/js/compiled" :target-path]}})
