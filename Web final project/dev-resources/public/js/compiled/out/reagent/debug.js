// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1421__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1422__i = 0, G__1422__a = new Array(arguments.length -  0);
while (G__1422__i < G__1422__a.length) {G__1422__a[G__1422__i] = arguments[G__1422__i + 0]; ++G__1422__i;}
  args = new cljs.core.IndexedSeq(G__1422__a,0,null);
} 
return G__1421__delegate.call(this,args);};
G__1421.cljs$lang$maxFixedArity = 0;
G__1421.cljs$lang$applyTo = (function (arglist__1423){
var args = cljs.core.seq(arglist__1423);
return G__1421__delegate(args);
});
G__1421.cljs$core$IFn$_invoke$arity$variadic = G__1421__delegate;
return G__1421;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1424__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1425__i = 0, G__1425__a = new Array(arguments.length -  0);
while (G__1425__i < G__1425__a.length) {G__1425__a[G__1425__i] = arguments[G__1425__i + 0]; ++G__1425__i;}
  args = new cljs.core.IndexedSeq(G__1425__a,0,null);
} 
return G__1424__delegate.call(this,args);};
G__1424.cljs$lang$maxFixedArity = 0;
G__1424.cljs$lang$applyTo = (function (arglist__1426){
var args = cljs.core.seq(arglist__1426);
return G__1424__delegate(args);
});
G__1424.cljs$core$IFn$_invoke$arity$variadic = G__1424__delegate;
return G__1424;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1542213416580
