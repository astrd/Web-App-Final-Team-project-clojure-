// Compiled by ClojureScript 1.10.238 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof client.core._STAR_app_state_STAR_ !== 'undefined'){
} else {
client.core._STAR_app_state_STAR_ = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.PersistentArrayMap.EMPTY], null));
}
client.core.menu_items = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chicken-parm","chicken-parm",29087917),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Chicken Parmesan",new cljs.core.Keyword(null,"description","description",-1428560544),"Breaded chicken breast topped with parmesan cheese and tomato sause atop spaghetti",new cljs.core.Keyword(null,"price","price",22129180),(14)], null),new cljs.core.Keyword(null,"pizza","pizza",-1705513294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Margharita Flatbred Pizza",new cljs.core.Keyword(null,"description","description",-1428560544),"Thin crust pizza with a mix of parmesean and mozzarella chease and sliced tomatoes.",new cljs.core.Keyword(null,"price","price",22129180),(11)], null),new cljs.core.Keyword(null,"chicken-quesadilla","chicken-quesadilla",1392521943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Chicken Quesadilla",new cljs.core.Keyword(null,"description","description",-1428560544),"Tortilla with shredded cheddar, diced tomatos, and strips of chicken.",new cljs.core.Keyword(null,"price","price",22129180),(8)], null),new cljs.core.Keyword(null,"chicken-teriyaki","chicken-teriyaki",249514052),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Chicken Teriyaki",new cljs.core.Keyword(null,"description","description",-1428560544),"Sliced chicken cooked in teriyaki sauce with steamed broccoli and rice",new cljs.core.Keyword(null,"price","price",22129180),(10)], null),new cljs.core.Keyword(null,"salad","salad",-726782374),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Caesar Salad",new cljs.core.Keyword(null,"description","description",-1428560544),"Romane lettuce, crutons, egg, olive oil, parmesean cheese, Dijon mustard, Worchestershire sauce, and choice of black pepper",new cljs.core.Keyword(null,"price","price",22129180),(6)], null)], null);
client.core.cart_incr = (function client$core$cart_incr(id){
return (function (e){
cljs.core.swap_BANG_.call(null,client.core._STAR_app_state_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cart","cart",-119094748),id], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));

return e.preventDefault();
});
});
client.core.cart_decr = (function client$core$cart_decr(id){
return (function (e){
cljs.core.swap_BANG_.call(null,client.core._STAR_app_state_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cart","cart",-119094748),id], null),cljs.core.dec);

return e.preventDefault();
});
});
client.core.cart_clearer = (function client$core$cart_clearer(id){
return (function (e){
cljs.core.swap_BANG_.call(null,client.core._STAR_app_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.dissoc,id);

return e.preventDefault();
});
});
client.core.menu_element = (function client$core$menu_element(id,menu_item){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(menu_item)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(menu_item)," ",new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(menu_item)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),client.core.cart_incr.call(null,id)], null),"Add to Cart"], null)], null);
});
client.core.menu_component = (function client$core$menu_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function client$core$menu_component_$_iter__6118(s__6119){
return (new cljs.core.LazySeq(null,(function (){
var s__6119__$1 = s__6119;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6119__$1);
if(temp__5457__auto__){
var s__6119__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6119__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6119__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6121 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6120 = (0);
while(true){
if((i__6120 < size__4291__auto__)){
var vec__6122 = cljs.core._nth.call(null,c__4290__auto__,i__6120);
var k = cljs.core.nth.call(null,vec__6122,(0),null);
var v = cljs.core.nth.call(null,vec__6122,(1),null);
cljs.core.chunk_append.call(null,b__6121,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.menu_element,k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__6128 = (i__6120 + (1));
i__6120 = G__6128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6121),client$core$menu_component_$_iter__6118.call(null,cljs.core.chunk_rest.call(null,s__6119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6121),null);
}
} else {
var vec__6125 = cljs.core.first.call(null,s__6119__$2);
var k = cljs.core.nth.call(null,vec__6125,(0),null);
var v = cljs.core.nth.call(null,vec__6125,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.menu_element,k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),client$core$menu_component_$_iter__6118.call(null,cljs.core.rest.call(null,s__6119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,client.core.menu_items);
})()], null)], null);
});
client.core.cart_element = (function client$core$cart_element(id,count){
var el = client.core.menu_items.call(null,id);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(el)], null)," ",count," @ $",new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(el).toFixed((2))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),client.core.cart_incr.call(null,id)], null),"+"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),client.core.cart_decr.call(null,id)], null),"-"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),client.core.cart_clearer.call(null,id)], null),"x"], null)], null);
});
client.core.submit_cart = (function client$core$submit_cart(){
return null;
});
client.core.cart_component = (function client$core$cart_component(){
var cart = new cljs.core.Keyword(null,"cart","cart",-119094748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client.core._STAR_app_state_STAR_));
var subtotal = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (cart){
return (function (p__6129){
var vec__6130 = p__6129;
var id = cljs.core.nth.call(null,vec__6130,(0),null);
var c = cljs.core.nth.call(null,vec__6130,(1),null);
return (c * cljs.core.get_in.call(null,client.core.menu_items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)));
});})(cart))
,cart));
var tax = (subtotal * 0.07);
var total = (subtotal + tax);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Cart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = ((function (cart,subtotal,tax,total){
return (function client$core$cart_component_$_iter__6133(s__6134){
return (new cljs.core.LazySeq(null,((function (cart,subtotal,tax,total){
return (function (){
var s__6134__$1 = s__6134;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6134__$1);
if(temp__5457__auto__){
var s__6134__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6134__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6134__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6136 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6135 = (0);
while(true){
if((i__6135 < size__4291__auto__)){
var vec__6137 = cljs.core._nth.call(null,c__4290__auto__,i__6135);
var id = cljs.core.nth.call(null,vec__6137,(0),null);
var count = cljs.core.nth.call(null,vec__6137,(1),null);
if((count > (0))){
cljs.core.chunk_append.call(null,b__6136,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.cart_element,id,count], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__6143 = (i__6135 + (1));
i__6135 = G__6143;
continue;
} else {
var G__6144 = (i__6135 + (1));
i__6135 = G__6144;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6136),client$core$cart_component_$_iter__6133.call(null,cljs.core.chunk_rest.call(null,s__6134__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6136),null);
}
} else {
var vec__6140 = cljs.core.first.call(null,s__6134__$2);
var id = cljs.core.nth.call(null,vec__6140,(0),null);
var count = cljs.core.nth.call(null,vec__6140,(1),null);
if((count > (0))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.cart_element,id,count], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),client$core$cart_component_$_iter__6133.call(null,cljs.core.rest.call(null,s__6134__$2)));
} else {
var G__6145 = cljs.core.rest.call(null,s__6134__$2);
s__6134__$1 = G__6145;
continue;
}
}
} else {
return null;
}
break;
}
});})(cart,subtotal,tax,total))
,null,null));
});})(cart,subtotal,tax,total))
;
return iter__4292__auto__.call(null,cart);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Subtotal: $",subtotal.toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tax: $",tax.toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total: $",total.toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cart,subtotal,tax,total){
return (function (){
return ajax.core.POST.call(null,["/charge?charge=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''));
});})(cart,subtotal,tax,total))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,total,(0))], null),"Submit Cart"], null)], null);
});
client.core.hello_world = (function client$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.menu_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.cart_component], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.hello_world], null),goog.dom.getElement("app"));
client.core.on_js_reload = (function client$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1542213432825
