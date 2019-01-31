// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__4236 = arguments.length;
switch (G__4236) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async4237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4237 = (function (f,blockable,meta4238){
this.f = f;
this.blockable = blockable;
this.meta4238 = meta4238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4239,meta4238__$1){
var self__ = this;
var _4239__$1 = this;
return (new cljs.core.async.t_cljs$core$async4237(self__.f,self__.blockable,meta4238__$1));
});

cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4239){
var self__ = this;
var _4239__$1 = this;
return self__.meta4238;
});

cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async4237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async4237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta4238","meta4238",-66256012,null)], null);
});

cljs.core.async.t_cljs$core$async4237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4237";

cljs.core.async.t_cljs$core$async4237.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4237");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4237.
 */
cljs.core.async.__GT_t_cljs$core$async4237 = (function cljs$core$async$__GT_t_cljs$core$async4237(f__$1,blockable__$1,meta4238){
return (new cljs.core.async.t_cljs$core$async4237(f__$1,blockable__$1,meta4238));
});

}

return (new cljs.core.async.t_cljs$core$async4237(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__4243 = arguments.length;
switch (G__4243) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__4246 = arguments.length;
switch (G__4246) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__4249 = arguments.length;
switch (G__4249) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4251 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4251);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_4251,ret){
return (function (){
return fn1.call(null,val_4251);
});})(val_4251,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__4253 = arguments.length;
switch (G__4253) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___4255 = n;
var x_4256 = (0);
while(true){
if((x_4256 < n__4376__auto___4255)){
(a[x_4256] = (0));

var G__4257 = (x_4256 + (1));
x_4256 = G__4257;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__4258 = (i + (1));
i = G__4258;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async4259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4259 = (function (flag,meta4260){
this.flag = flag;
this.meta4260 = meta4260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_4261,meta4260__$1){
var self__ = this;
var _4261__$1 = this;
return (new cljs.core.async.t_cljs$core$async4259(self__.flag,meta4260__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_4261){
var self__ = this;
var _4261__$1 = this;
return self__.meta4260;
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4260","meta4260",-2088421934,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async4259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4259";

cljs.core.async.t_cljs$core$async4259.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4259");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4259.
 */
cljs.core.async.__GT_t_cljs$core$async4259 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4259(flag__$1,meta4260){
return (new cljs.core.async.t_cljs$core$async4259(flag__$1,meta4260));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async4259(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async4262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4262 = (function (flag,cb,meta4263){
this.flag = flag;
this.cb = cb;
this.meta4263 = meta4263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4264,meta4263__$1){
var self__ = this;
var _4264__$1 = this;
return (new cljs.core.async.t_cljs$core$async4262(self__.flag,self__.cb,meta4263__$1));
});

cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4264){
var self__ = this;
var _4264__$1 = this;
return self__.meta4263;
});

cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async4262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async4262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4263","meta4263",-1352499368,null)], null);
});

cljs.core.async.t_cljs$core$async4262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4262";

cljs.core.async.t_cljs$core$async4262.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4262");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4262.
 */
cljs.core.async.__GT_t_cljs$core$async4262 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4262(flag__$1,cb__$1,meta4263){
return (new cljs.core.async.t_cljs$core$async4262(flag__$1,cb__$1,meta4263));
});

}

return (new cljs.core.async.t_cljs$core$async4262(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4265_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4266_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4266_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__4267 = (i + (1));
i = G__4267;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___4273 = arguments.length;
var i__4500__auto___4274 = (0);
while(true){
if((i__4500__auto___4274 < len__4499__auto___4273)){
args__4502__auto__.push((arguments[i__4500__auto___4274]));

var G__4275 = (i__4500__auto___4274 + (1));
i__4500__auto___4274 = G__4275;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4270){
var map__4271 = p__4270;
var map__4271__$1 = ((((!((map__4271 == null)))?(((((map__4271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4271):map__4271);
var opts = map__4271__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4268){
var G__4269 = cljs.core.first.call(null,seq4268);
var seq4268__$1 = cljs.core.next.call(null,seq4268);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4269,seq4268__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__4277 = arguments.length;
switch (G__4277) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__4176__auto___4323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___4323){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___4323){
return (function (state_4301){
var state_val_4302 = (state_4301[(1)]);
if((state_val_4302 === (7))){
var inst_4297 = (state_4301[(2)]);
var state_4301__$1 = state_4301;
var statearr_4303_4324 = state_4301__$1;
(statearr_4303_4324[(2)] = inst_4297);

(statearr_4303_4324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (1))){
var state_4301__$1 = state_4301;
var statearr_4304_4325 = state_4301__$1;
(statearr_4304_4325[(2)] = null);

(statearr_4304_4325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (4))){
var inst_4280 = (state_4301[(7)]);
var inst_4280__$1 = (state_4301[(2)]);
var inst_4281 = (inst_4280__$1 == null);
var state_4301__$1 = (function (){var statearr_4305 = state_4301;
(statearr_4305[(7)] = inst_4280__$1);

return statearr_4305;
})();
if(cljs.core.truth_(inst_4281)){
var statearr_4306_4326 = state_4301__$1;
(statearr_4306_4326[(1)] = (5));

} else {
var statearr_4307_4327 = state_4301__$1;
(statearr_4307_4327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (13))){
var state_4301__$1 = state_4301;
var statearr_4308_4328 = state_4301__$1;
(statearr_4308_4328[(2)] = null);

(statearr_4308_4328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (6))){
var inst_4280 = (state_4301[(7)]);
var state_4301__$1 = state_4301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4301__$1,(11),to,inst_4280);
} else {
if((state_val_4302 === (3))){
var inst_4299 = (state_4301[(2)]);
var state_4301__$1 = state_4301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4301__$1,inst_4299);
} else {
if((state_val_4302 === (12))){
var state_4301__$1 = state_4301;
var statearr_4309_4329 = state_4301__$1;
(statearr_4309_4329[(2)] = null);

(statearr_4309_4329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (2))){
var state_4301__$1 = state_4301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4301__$1,(4),from);
} else {
if((state_val_4302 === (11))){
var inst_4290 = (state_4301[(2)]);
var state_4301__$1 = state_4301;
if(cljs.core.truth_(inst_4290)){
var statearr_4310_4330 = state_4301__$1;
(statearr_4310_4330[(1)] = (12));

} else {
var statearr_4311_4331 = state_4301__$1;
(statearr_4311_4331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (9))){
var state_4301__$1 = state_4301;
var statearr_4312_4332 = state_4301__$1;
(statearr_4312_4332[(2)] = null);

(statearr_4312_4332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (5))){
var state_4301__$1 = state_4301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4313_4333 = state_4301__$1;
(statearr_4313_4333[(1)] = (8));

} else {
var statearr_4314_4334 = state_4301__$1;
(statearr_4314_4334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (14))){
var inst_4295 = (state_4301[(2)]);
var state_4301__$1 = state_4301;
var statearr_4315_4335 = state_4301__$1;
(statearr_4315_4335[(2)] = inst_4295);

(statearr_4315_4335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (10))){
var inst_4287 = (state_4301[(2)]);
var state_4301__$1 = state_4301;
var statearr_4316_4336 = state_4301__$1;
(statearr_4316_4336[(2)] = inst_4287);

(statearr_4316_4336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4302 === (8))){
var inst_4284 = cljs.core.async.close_BANG_.call(null,to);
var state_4301__$1 = state_4301;
var statearr_4317_4337 = state_4301__$1;
(statearr_4317_4337[(2)] = inst_4284);

(statearr_4317_4337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___4323))
;
return ((function (switch__4086__auto__,c__4176__auto___4323){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_4318 = [null,null,null,null,null,null,null,null];
(statearr_4318[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_4318[(1)] = (1));

return statearr_4318;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_4301){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4319){if((e4319 instanceof Object)){
var ex__4090__auto__ = e4319;
var statearr_4320_4338 = state_4301;
(statearr_4320_4338[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4339 = state_4301;
state_4301 = G__4339;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_4301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_4301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___4323))
})();
var state__4178__auto__ = (function (){var statearr_4321 = f__4177__auto__.call(null);
(statearr_4321[(6)] = c__4176__auto___4323);

return statearr_4321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___4323))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4340){
var vec__4341 = p__4340;
var v = cljs.core.nth.call(null,vec__4341,(0),null);
var p = cljs.core.nth.call(null,vec__4341,(1),null);
var job = vec__4341;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__4176__auto___4512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results){
return (function (state_4348){
var state_val_4349 = (state_4348[(1)]);
if((state_val_4349 === (1))){
var state_4348__$1 = state_4348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4348__$1,(2),res,v);
} else {
if((state_val_4349 === (2))){
var inst_4345 = (state_4348[(2)]);
var inst_4346 = cljs.core.async.close_BANG_.call(null,res);
var state_4348__$1 = (function (){var statearr_4350 = state_4348;
(statearr_4350[(7)] = inst_4345);

return statearr_4350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4348__$1,inst_4346);
} else {
return null;
}
}
});})(c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results))
;
return ((function (switch__4086__auto__,c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_4351 = [null,null,null,null,null,null,null,null];
(statearr_4351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__);

(statearr_4351[(1)] = (1));

return statearr_4351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1 = (function (state_4348){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4352){if((e4352 instanceof Object)){
var ex__4090__auto__ = e4352;
var statearr_4353_4513 = state_4348;
(statearr_4353_4513[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4514 = state_4348;
state_4348 = G__4514;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = function(state_4348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1.call(this,state_4348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results))
})();
var state__4178__auto__ = (function (){var statearr_4354 = f__4177__auto__.call(null);
(statearr_4354[(6)] = c__4176__auto___4512);

return statearr_4354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___4512,res,vec__4341,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4355){
var vec__4356 = p__4355;
var v = cljs.core.nth.call(null,vec__4356,(0),null);
var p = cljs.core.nth.call(null,vec__4356,(1),null);
var job = vec__4356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___4515 = n;
var __4516 = (0);
while(true){
if((__4516 < n__4376__auto___4515)){
var G__4359_4517 = type;
var G__4359_4518__$1 = (((G__4359_4517 instanceof cljs.core.Keyword))?G__4359_4517.fqn:null);
switch (G__4359_4518__$1) {
case "compute":
var c__4176__auto___4520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4516,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (__4516,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function (state_4372){
var state_val_4373 = (state_4372[(1)]);
if((state_val_4373 === (1))){
var state_4372__$1 = state_4372;
var statearr_4374_4521 = state_4372__$1;
(statearr_4374_4521[(2)] = null);

(statearr_4374_4521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (2))){
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4372__$1,(4),jobs);
} else {
if((state_val_4373 === (3))){
var inst_4370 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4372__$1,inst_4370);
} else {
if((state_val_4373 === (4))){
var inst_4362 = (state_4372[(2)]);
var inst_4363 = process.call(null,inst_4362);
var state_4372__$1 = state_4372;
if(cljs.core.truth_(inst_4363)){
var statearr_4375_4522 = state_4372__$1;
(statearr_4375_4522[(1)] = (5));

} else {
var statearr_4376_4523 = state_4372__$1;
(statearr_4376_4523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (5))){
var state_4372__$1 = state_4372;
var statearr_4377_4524 = state_4372__$1;
(statearr_4377_4524[(2)] = null);

(statearr_4377_4524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (6))){
var state_4372__$1 = state_4372;
var statearr_4378_4525 = state_4372__$1;
(statearr_4378_4525[(2)] = null);

(statearr_4378_4525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4373 === (7))){
var inst_4368 = (state_4372[(2)]);
var state_4372__$1 = state_4372;
var statearr_4379_4526 = state_4372__$1;
(statearr_4379_4526[(2)] = inst_4368);

(statearr_4379_4526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4516,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
;
return ((function (__4516,switch__4086__auto__,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_4380 = [null,null,null,null,null,null,null];
(statearr_4380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__);

(statearr_4380[(1)] = (1));

return statearr_4380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1 = (function (state_4372){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4381){if((e4381 instanceof Object)){
var ex__4090__auto__ = e4381;
var statearr_4382_4527 = state_4372;
(statearr_4382_4527[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4528 = state_4372;
state_4372 = G__4528;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = function(state_4372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1.call(this,state_4372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__;
})()
;})(__4516,switch__4086__auto__,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
})();
var state__4178__auto__ = (function (){var statearr_4383 = f__4177__auto__.call(null);
(statearr_4383[(6)] = c__4176__auto___4520);

return statearr_4383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(__4516,c__4176__auto___4520,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
);


break;
case "async":
var c__4176__auto___4529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4516,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (__4516,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function (state_4396){
var state_val_4397 = (state_4396[(1)]);
if((state_val_4397 === (1))){
var state_4396__$1 = state_4396;
var statearr_4398_4530 = state_4396__$1;
(statearr_4398_4530[(2)] = null);

(statearr_4398_4530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4397 === (2))){
var state_4396__$1 = state_4396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4396__$1,(4),jobs);
} else {
if((state_val_4397 === (3))){
var inst_4394 = (state_4396[(2)]);
var state_4396__$1 = state_4396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4396__$1,inst_4394);
} else {
if((state_val_4397 === (4))){
var inst_4386 = (state_4396[(2)]);
var inst_4387 = async.call(null,inst_4386);
var state_4396__$1 = state_4396;
if(cljs.core.truth_(inst_4387)){
var statearr_4399_4531 = state_4396__$1;
(statearr_4399_4531[(1)] = (5));

} else {
var statearr_4400_4532 = state_4396__$1;
(statearr_4400_4532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4397 === (5))){
var state_4396__$1 = state_4396;
var statearr_4401_4533 = state_4396__$1;
(statearr_4401_4533[(2)] = null);

(statearr_4401_4533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4397 === (6))){
var state_4396__$1 = state_4396;
var statearr_4402_4534 = state_4396__$1;
(statearr_4402_4534[(2)] = null);

(statearr_4402_4534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4397 === (7))){
var inst_4392 = (state_4396[(2)]);
var state_4396__$1 = state_4396;
var statearr_4403_4535 = state_4396__$1;
(statearr_4403_4535[(2)] = inst_4392);

(statearr_4403_4535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4516,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
;
return ((function (__4516,switch__4086__auto__,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_4404 = [null,null,null,null,null,null,null];
(statearr_4404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__);

(statearr_4404[(1)] = (1));

return statearr_4404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1 = (function (state_4396){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4405){if((e4405 instanceof Object)){
var ex__4090__auto__ = e4405;
var statearr_4406_4536 = state_4396;
(statearr_4406_4536[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4537 = state_4396;
state_4396 = G__4537;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = function(state_4396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1.call(this,state_4396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__;
})()
;})(__4516,switch__4086__auto__,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
})();
var state__4178__auto__ = (function (){var statearr_4407 = f__4177__auto__.call(null);
(statearr_4407[(6)] = c__4176__auto___4529);

return statearr_4407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(__4516,c__4176__auto___4529,G__4359_4517,G__4359_4518__$1,n__4376__auto___4515,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4359_4518__$1)].join('')));

}

var G__4538 = (__4516 + (1));
__4516 = G__4538;
continue;
} else {
}
break;
}

var c__4176__auto___4539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___4539,jobs,results,process,async){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___4539,jobs,results,process,async){
return (function (state_4429){
var state_val_4430 = (state_4429[(1)]);
if((state_val_4430 === (1))){
var state_4429__$1 = state_4429;
var statearr_4431_4540 = state_4429__$1;
(statearr_4431_4540[(2)] = null);

(statearr_4431_4540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4430 === (2))){
var state_4429__$1 = state_4429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4429__$1,(4),from);
} else {
if((state_val_4430 === (3))){
var inst_4427 = (state_4429[(2)]);
var state_4429__$1 = state_4429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4429__$1,inst_4427);
} else {
if((state_val_4430 === (4))){
var inst_4410 = (state_4429[(7)]);
var inst_4410__$1 = (state_4429[(2)]);
var inst_4411 = (inst_4410__$1 == null);
var state_4429__$1 = (function (){var statearr_4432 = state_4429;
(statearr_4432[(7)] = inst_4410__$1);

return statearr_4432;
})();
if(cljs.core.truth_(inst_4411)){
var statearr_4433_4541 = state_4429__$1;
(statearr_4433_4541[(1)] = (5));

} else {
var statearr_4434_4542 = state_4429__$1;
(statearr_4434_4542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4430 === (5))){
var inst_4413 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4429__$1 = state_4429;
var statearr_4435_4543 = state_4429__$1;
(statearr_4435_4543[(2)] = inst_4413);

(statearr_4435_4543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4430 === (6))){
var inst_4415 = (state_4429[(8)]);
var inst_4410 = (state_4429[(7)]);
var inst_4415__$1 = cljs.core.async.chan.call(null,(1));
var inst_4416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4417 = [inst_4410,inst_4415__$1];
var inst_4418 = (new cljs.core.PersistentVector(null,2,(5),inst_4416,inst_4417,null));
var state_4429__$1 = (function (){var statearr_4436 = state_4429;
(statearr_4436[(8)] = inst_4415__$1);

return statearr_4436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4429__$1,(8),jobs,inst_4418);
} else {
if((state_val_4430 === (7))){
var inst_4425 = (state_4429[(2)]);
var state_4429__$1 = state_4429;
var statearr_4437_4544 = state_4429__$1;
(statearr_4437_4544[(2)] = inst_4425);

(statearr_4437_4544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4430 === (8))){
var inst_4415 = (state_4429[(8)]);
var inst_4420 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4438 = state_4429;
(statearr_4438[(9)] = inst_4420);

return statearr_4438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4429__$1,(9),results,inst_4415);
} else {
if((state_val_4430 === (9))){
var inst_4422 = (state_4429[(2)]);
var state_4429__$1 = (function (){var statearr_4439 = state_4429;
(statearr_4439[(10)] = inst_4422);

return statearr_4439;
})();
var statearr_4440_4545 = state_4429__$1;
(statearr_4440_4545[(2)] = null);

(statearr_4440_4545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___4539,jobs,results,process,async))
;
return ((function (switch__4086__auto__,c__4176__auto___4539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_4441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__);

(statearr_4441[(1)] = (1));

return statearr_4441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1 = (function (state_4429){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4442){if((e4442 instanceof Object)){
var ex__4090__auto__ = e4442;
var statearr_4443_4546 = state_4429;
(statearr_4443_4546[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4547 = state_4429;
state_4429 = G__4547;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = function(state_4429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1.call(this,state_4429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___4539,jobs,results,process,async))
})();
var state__4178__auto__ = (function (){var statearr_4444 = f__4177__auto__.call(null);
(statearr_4444[(6)] = c__4176__auto___4539);

return statearr_4444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___4539,jobs,results,process,async))
);


var c__4176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto__,jobs,results,process,async){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto__,jobs,results,process,async){
return (function (state_4482){
var state_val_4483 = (state_4482[(1)]);
if((state_val_4483 === (7))){
var inst_4478 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4484_4548 = state_4482__$1;
(statearr_4484_4548[(2)] = inst_4478);

(statearr_4484_4548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (20))){
var state_4482__$1 = state_4482;
var statearr_4485_4549 = state_4482__$1;
(statearr_4485_4549[(2)] = null);

(statearr_4485_4549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (1))){
var state_4482__$1 = state_4482;
var statearr_4486_4550 = state_4482__$1;
(statearr_4486_4550[(2)] = null);

(statearr_4486_4550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (4))){
var inst_4447 = (state_4482[(7)]);
var inst_4447__$1 = (state_4482[(2)]);
var inst_4448 = (inst_4447__$1 == null);
var state_4482__$1 = (function (){var statearr_4487 = state_4482;
(statearr_4487[(7)] = inst_4447__$1);

return statearr_4487;
})();
if(cljs.core.truth_(inst_4448)){
var statearr_4488_4551 = state_4482__$1;
(statearr_4488_4551[(1)] = (5));

} else {
var statearr_4489_4552 = state_4482__$1;
(statearr_4489_4552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (15))){
var inst_4460 = (state_4482[(8)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4482__$1,(18),to,inst_4460);
} else {
if((state_val_4483 === (21))){
var inst_4473 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4490_4553 = state_4482__$1;
(statearr_4490_4553[(2)] = inst_4473);

(statearr_4490_4553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (13))){
var inst_4475 = (state_4482[(2)]);
var state_4482__$1 = (function (){var statearr_4491 = state_4482;
(statearr_4491[(9)] = inst_4475);

return statearr_4491;
})();
var statearr_4492_4554 = state_4482__$1;
(statearr_4492_4554[(2)] = null);

(statearr_4492_4554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (6))){
var inst_4447 = (state_4482[(7)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4482__$1,(11),inst_4447);
} else {
if((state_val_4483 === (17))){
var inst_4468 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
if(cljs.core.truth_(inst_4468)){
var statearr_4493_4555 = state_4482__$1;
(statearr_4493_4555[(1)] = (19));

} else {
var statearr_4494_4556 = state_4482__$1;
(statearr_4494_4556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (3))){
var inst_4480 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4482__$1,inst_4480);
} else {
if((state_val_4483 === (12))){
var inst_4457 = (state_4482[(10)]);
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4482__$1,(14),inst_4457);
} else {
if((state_val_4483 === (2))){
var state_4482__$1 = state_4482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4482__$1,(4),results);
} else {
if((state_val_4483 === (19))){
var state_4482__$1 = state_4482;
var statearr_4495_4557 = state_4482__$1;
(statearr_4495_4557[(2)] = null);

(statearr_4495_4557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (11))){
var inst_4457 = (state_4482[(2)]);
var state_4482__$1 = (function (){var statearr_4496 = state_4482;
(statearr_4496[(10)] = inst_4457);

return statearr_4496;
})();
var statearr_4497_4558 = state_4482__$1;
(statearr_4497_4558[(2)] = null);

(statearr_4497_4558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (9))){
var state_4482__$1 = state_4482;
var statearr_4498_4559 = state_4482__$1;
(statearr_4498_4559[(2)] = null);

(statearr_4498_4559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (5))){
var state_4482__$1 = state_4482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4499_4560 = state_4482__$1;
(statearr_4499_4560[(1)] = (8));

} else {
var statearr_4500_4561 = state_4482__$1;
(statearr_4500_4561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (14))){
var inst_4462 = (state_4482[(11)]);
var inst_4460 = (state_4482[(8)]);
var inst_4460__$1 = (state_4482[(2)]);
var inst_4461 = (inst_4460__$1 == null);
var inst_4462__$1 = cljs.core.not.call(null,inst_4461);
var state_4482__$1 = (function (){var statearr_4501 = state_4482;
(statearr_4501[(11)] = inst_4462__$1);

(statearr_4501[(8)] = inst_4460__$1);

return statearr_4501;
})();
if(inst_4462__$1){
var statearr_4502_4562 = state_4482__$1;
(statearr_4502_4562[(1)] = (15));

} else {
var statearr_4503_4563 = state_4482__$1;
(statearr_4503_4563[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (16))){
var inst_4462 = (state_4482[(11)]);
var state_4482__$1 = state_4482;
var statearr_4504_4564 = state_4482__$1;
(statearr_4504_4564[(2)] = inst_4462);

(statearr_4504_4564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (10))){
var inst_4454 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4505_4565 = state_4482__$1;
(statearr_4505_4565[(2)] = inst_4454);

(statearr_4505_4565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (18))){
var inst_4465 = (state_4482[(2)]);
var state_4482__$1 = state_4482;
var statearr_4506_4566 = state_4482__$1;
(statearr_4506_4566[(2)] = inst_4465);

(statearr_4506_4566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4483 === (8))){
var inst_4451 = cljs.core.async.close_BANG_.call(null,to);
var state_4482__$1 = state_4482;
var statearr_4507_4567 = state_4482__$1;
(statearr_4507_4567[(2)] = inst_4451);

(statearr_4507_4567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto__,jobs,results,process,async))
;
return ((function (switch__4086__auto__,c__4176__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_4508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__);

(statearr_4508[(1)] = (1));

return statearr_4508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1 = (function (state_4482){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4509){if((e4509 instanceof Object)){
var ex__4090__auto__ = e4509;
var statearr_4510_4568 = state_4482;
(statearr_4510_4568[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4569 = state_4482;
state_4482 = G__4569;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__ = function(state_4482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1.call(this,state_4482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto__,jobs,results,process,async))
})();
var state__4178__auto__ = (function (){var statearr_4511 = f__4177__auto__.call(null);
(statearr_4511[(6)] = c__4176__auto__);

return statearr_4511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto__,jobs,results,process,async))
);

return c__4176__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4571 = arguments.length;
switch (G__4571) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4574 = arguments.length;
switch (G__4574) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4577 = arguments.length;
switch (G__4577) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__4176__auto___4626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___4626,tc,fc){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___4626,tc,fc){
return (function (state_4603){
var state_val_4604 = (state_4603[(1)]);
if((state_val_4604 === (7))){
var inst_4599 = (state_4603[(2)]);
var state_4603__$1 = state_4603;
var statearr_4605_4627 = state_4603__$1;
(statearr_4605_4627[(2)] = inst_4599);

(statearr_4605_4627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (1))){
var state_4603__$1 = state_4603;
var statearr_4606_4628 = state_4603__$1;
(statearr_4606_4628[(2)] = null);

(statearr_4606_4628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (4))){
var inst_4580 = (state_4603[(7)]);
var inst_4580__$1 = (state_4603[(2)]);
var inst_4581 = (inst_4580__$1 == null);
var state_4603__$1 = (function (){var statearr_4607 = state_4603;
(statearr_4607[(7)] = inst_4580__$1);

return statearr_4607;
})();
if(cljs.core.truth_(inst_4581)){
var statearr_4608_4629 = state_4603__$1;
(statearr_4608_4629[(1)] = (5));

} else {
var statearr_4609_4630 = state_4603__$1;
(statearr_4609_4630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (13))){
var state_4603__$1 = state_4603;
var statearr_4610_4631 = state_4603__$1;
(statearr_4610_4631[(2)] = null);

(statearr_4610_4631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (6))){
var inst_4580 = (state_4603[(7)]);
var inst_4586 = p.call(null,inst_4580);
var state_4603__$1 = state_4603;
if(cljs.core.truth_(inst_4586)){
var statearr_4611_4632 = state_4603__$1;
(statearr_4611_4632[(1)] = (9));

} else {
var statearr_4612_4633 = state_4603__$1;
(statearr_4612_4633[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (3))){
var inst_4601 = (state_4603[(2)]);
var state_4603__$1 = state_4603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4603__$1,inst_4601);
} else {
if((state_val_4604 === (12))){
var state_4603__$1 = state_4603;
var statearr_4613_4634 = state_4603__$1;
(statearr_4613_4634[(2)] = null);

(statearr_4613_4634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (2))){
var state_4603__$1 = state_4603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4603__$1,(4),ch);
} else {
if((state_val_4604 === (11))){
var inst_4580 = (state_4603[(7)]);
var inst_4590 = (state_4603[(2)]);
var state_4603__$1 = state_4603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4603__$1,(8),inst_4590,inst_4580);
} else {
if((state_val_4604 === (9))){
var state_4603__$1 = state_4603;
var statearr_4614_4635 = state_4603__$1;
(statearr_4614_4635[(2)] = tc);

(statearr_4614_4635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (5))){
var inst_4583 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4584 = cljs.core.async.close_BANG_.call(null,fc);
var state_4603__$1 = (function (){var statearr_4615 = state_4603;
(statearr_4615[(8)] = inst_4583);

return statearr_4615;
})();
var statearr_4616_4636 = state_4603__$1;
(statearr_4616_4636[(2)] = inst_4584);

(statearr_4616_4636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (14))){
var inst_4597 = (state_4603[(2)]);
var state_4603__$1 = state_4603;
var statearr_4617_4637 = state_4603__$1;
(statearr_4617_4637[(2)] = inst_4597);

(statearr_4617_4637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (10))){
var state_4603__$1 = state_4603;
var statearr_4618_4638 = state_4603__$1;
(statearr_4618_4638[(2)] = fc);

(statearr_4618_4638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4604 === (8))){
var inst_4592 = (state_4603[(2)]);
var state_4603__$1 = state_4603;
if(cljs.core.truth_(inst_4592)){
var statearr_4619_4639 = state_4603__$1;
(statearr_4619_4639[(1)] = (12));

} else {
var statearr_4620_4640 = state_4603__$1;
(statearr_4620_4640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___4626,tc,fc))
;
return ((function (switch__4086__auto__,c__4176__auto___4626,tc,fc){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_4621 = [null,null,null,null,null,null,null,null,null];
(statearr_4621[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_4621[(1)] = (1));

return statearr_4621;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_4603){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4622){if((e4622 instanceof Object)){
var ex__4090__auto__ = e4622;
var statearr_4623_4641 = state_4603;
(statearr_4623_4641[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4642 = state_4603;
state_4603 = G__4642;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_4603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_4603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___4626,tc,fc))
})();
var state__4178__auto__ = (function (){var statearr_4624 = f__4177__auto__.call(null);
(statearr_4624[(6)] = c__4176__auto___4626);

return statearr_4624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___4626,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__4176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto__){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto__){
return (function (state_4663){
var state_val_4664 = (state_4663[(1)]);
if((state_val_4664 === (7))){
var inst_4659 = (state_4663[(2)]);
var state_4663__$1 = state_4663;
var statearr_4665_4683 = state_4663__$1;
(statearr_4665_4683[(2)] = inst_4659);

(statearr_4665_4683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (1))){
var inst_4643 = init;
var state_4663__$1 = (function (){var statearr_4666 = state_4663;
(statearr_4666[(7)] = inst_4643);

return statearr_4666;
})();
var statearr_4667_4684 = state_4663__$1;
(statearr_4667_4684[(2)] = null);

(statearr_4667_4684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (4))){
var inst_4646 = (state_4663[(8)]);
var inst_4646__$1 = (state_4663[(2)]);
var inst_4647 = (inst_4646__$1 == null);
var state_4663__$1 = (function (){var statearr_4668 = state_4663;
(statearr_4668[(8)] = inst_4646__$1);

return statearr_4668;
})();
if(cljs.core.truth_(inst_4647)){
var statearr_4669_4685 = state_4663__$1;
(statearr_4669_4685[(1)] = (5));

} else {
var statearr_4670_4686 = state_4663__$1;
(statearr_4670_4686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (6))){
var inst_4643 = (state_4663[(7)]);
var inst_4650 = (state_4663[(9)]);
var inst_4646 = (state_4663[(8)]);
var inst_4650__$1 = f.call(null,inst_4643,inst_4646);
var inst_4651 = cljs.core.reduced_QMARK_.call(null,inst_4650__$1);
var state_4663__$1 = (function (){var statearr_4671 = state_4663;
(statearr_4671[(9)] = inst_4650__$1);

return statearr_4671;
})();
if(inst_4651){
var statearr_4672_4687 = state_4663__$1;
(statearr_4672_4687[(1)] = (8));

} else {
var statearr_4673_4688 = state_4663__$1;
(statearr_4673_4688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (3))){
var inst_4661 = (state_4663[(2)]);
var state_4663__$1 = state_4663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4663__$1,inst_4661);
} else {
if((state_val_4664 === (2))){
var state_4663__$1 = state_4663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4663__$1,(4),ch);
} else {
if((state_val_4664 === (9))){
var inst_4650 = (state_4663[(9)]);
var inst_4643 = inst_4650;
var state_4663__$1 = (function (){var statearr_4674 = state_4663;
(statearr_4674[(7)] = inst_4643);

return statearr_4674;
})();
var statearr_4675_4689 = state_4663__$1;
(statearr_4675_4689[(2)] = null);

(statearr_4675_4689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (5))){
var inst_4643 = (state_4663[(7)]);
var state_4663__$1 = state_4663;
var statearr_4676_4690 = state_4663__$1;
(statearr_4676_4690[(2)] = inst_4643);

(statearr_4676_4690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (10))){
var inst_4657 = (state_4663[(2)]);
var state_4663__$1 = state_4663;
var statearr_4677_4691 = state_4663__$1;
(statearr_4677_4691[(2)] = inst_4657);

(statearr_4677_4691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4664 === (8))){
var inst_4650 = (state_4663[(9)]);
var inst_4653 = cljs.core.deref.call(null,inst_4650);
var state_4663__$1 = state_4663;
var statearr_4678_4692 = state_4663__$1;
(statearr_4678_4692[(2)] = inst_4653);

(statearr_4678_4692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto__))
;
return ((function (switch__4086__auto__,c__4176__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__4087__auto__ = null;
var cljs$core$async$reduce_$_state_machine__4087__auto____0 = (function (){
var statearr_4679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4679[(0)] = cljs$core$async$reduce_$_state_machine__4087__auto__);

(statearr_4679[(1)] = (1));

return statearr_4679;
});
var cljs$core$async$reduce_$_state_machine__4087__auto____1 = (function (state_4663){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4680){if((e4680 instanceof Object)){
var ex__4090__auto__ = e4680;
var statearr_4681_4693 = state_4663;
(statearr_4681_4693[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4694 = state_4663;
state_4663 = G__4694;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__4087__auto__ = function(state_4663){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__4087__auto____1.call(this,state_4663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__4087__auto____0;
cljs$core$async$reduce_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__4087__auto____1;
return cljs$core$async$reduce_$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto__))
})();
var state__4178__auto__ = (function (){var statearr_4682 = f__4177__auto__.call(null);
(statearr_4682[(6)] = c__4176__auto__);

return statearr_4682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto__))
);

return c__4176__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__4176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto__,f__$1){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto__,f__$1){
return (function (state_4700){
var state_val_4701 = (state_4700[(1)]);
if((state_val_4701 === (1))){
var inst_4695 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_4700__$1 = state_4700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4700__$1,(2),inst_4695);
} else {
if((state_val_4701 === (2))){
var inst_4697 = (state_4700[(2)]);
var inst_4698 = f__$1.call(null,inst_4697);
var state_4700__$1 = state_4700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4700__$1,inst_4698);
} else {
return null;
}
}
});})(c__4176__auto__,f__$1))
;
return ((function (switch__4086__auto__,c__4176__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__4087__auto__ = null;
var cljs$core$async$transduce_$_state_machine__4087__auto____0 = (function (){
var statearr_4702 = [null,null,null,null,null,null,null];
(statearr_4702[(0)] = cljs$core$async$transduce_$_state_machine__4087__auto__);

(statearr_4702[(1)] = (1));

return statearr_4702;
});
var cljs$core$async$transduce_$_state_machine__4087__auto____1 = (function (state_4700){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4703){if((e4703 instanceof Object)){
var ex__4090__auto__ = e4703;
var statearr_4704_4706 = state_4700;
(statearr_4704_4706[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4707 = state_4700;
state_4700 = G__4707;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__4087__auto__ = function(state_4700){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__4087__auto____1.call(this,state_4700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__4087__auto____0;
cljs$core$async$transduce_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__4087__auto____1;
return cljs$core$async$transduce_$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto__,f__$1))
})();
var state__4178__auto__ = (function (){var statearr_4705 = f__4177__auto__.call(null);
(statearr_4705[(6)] = c__4176__auto__);

return statearr_4705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto__,f__$1))
);

return c__4176__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4709 = arguments.length;
switch (G__4709) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__4176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto__){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto__){
return (function (state_4734){
var state_val_4735 = (state_4734[(1)]);
if((state_val_4735 === (7))){
var inst_4716 = (state_4734[(2)]);
var state_4734__$1 = state_4734;
var statearr_4736_4757 = state_4734__$1;
(statearr_4736_4757[(2)] = inst_4716);

(statearr_4736_4757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (1))){
var inst_4710 = cljs.core.seq.call(null,coll);
var inst_4711 = inst_4710;
var state_4734__$1 = (function (){var statearr_4737 = state_4734;
(statearr_4737[(7)] = inst_4711);

return statearr_4737;
})();
var statearr_4738_4758 = state_4734__$1;
(statearr_4738_4758[(2)] = null);

(statearr_4738_4758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (4))){
var inst_4711 = (state_4734[(7)]);
var inst_4714 = cljs.core.first.call(null,inst_4711);
var state_4734__$1 = state_4734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4734__$1,(7),ch,inst_4714);
} else {
if((state_val_4735 === (13))){
var inst_4728 = (state_4734[(2)]);
var state_4734__$1 = state_4734;
var statearr_4739_4759 = state_4734__$1;
(statearr_4739_4759[(2)] = inst_4728);

(statearr_4739_4759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (6))){
var inst_4719 = (state_4734[(2)]);
var state_4734__$1 = state_4734;
if(cljs.core.truth_(inst_4719)){
var statearr_4740_4760 = state_4734__$1;
(statearr_4740_4760[(1)] = (8));

} else {
var statearr_4741_4761 = state_4734__$1;
(statearr_4741_4761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (3))){
var inst_4732 = (state_4734[(2)]);
var state_4734__$1 = state_4734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4734__$1,inst_4732);
} else {
if((state_val_4735 === (12))){
var state_4734__$1 = state_4734;
var statearr_4742_4762 = state_4734__$1;
(statearr_4742_4762[(2)] = null);

(statearr_4742_4762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (2))){
var inst_4711 = (state_4734[(7)]);
var state_4734__$1 = state_4734;
if(cljs.core.truth_(inst_4711)){
var statearr_4743_4763 = state_4734__$1;
(statearr_4743_4763[(1)] = (4));

} else {
var statearr_4744_4764 = state_4734__$1;
(statearr_4744_4764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (11))){
var inst_4725 = cljs.core.async.close_BANG_.call(null,ch);
var state_4734__$1 = state_4734;
var statearr_4745_4765 = state_4734__$1;
(statearr_4745_4765[(2)] = inst_4725);

(statearr_4745_4765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (9))){
var state_4734__$1 = state_4734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4746_4766 = state_4734__$1;
(statearr_4746_4766[(1)] = (11));

} else {
var statearr_4747_4767 = state_4734__$1;
(statearr_4747_4767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (5))){
var inst_4711 = (state_4734[(7)]);
var state_4734__$1 = state_4734;
var statearr_4748_4768 = state_4734__$1;
(statearr_4748_4768[(2)] = inst_4711);

(statearr_4748_4768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (10))){
var inst_4730 = (state_4734[(2)]);
var state_4734__$1 = state_4734;
var statearr_4749_4769 = state_4734__$1;
(statearr_4749_4769[(2)] = inst_4730);

(statearr_4749_4769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4735 === (8))){
var inst_4711 = (state_4734[(7)]);
var inst_4721 = cljs.core.next.call(null,inst_4711);
var inst_4711__$1 = inst_4721;
var state_4734__$1 = (function (){var statearr_4750 = state_4734;
(statearr_4750[(7)] = inst_4711__$1);

return statearr_4750;
})();
var statearr_4751_4770 = state_4734__$1;
(statearr_4751_4770[(2)] = null);

(statearr_4751_4770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto__))
;
return ((function (switch__4086__auto__,c__4176__auto__){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_4752 = [null,null,null,null,null,null,null,null];
(statearr_4752[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_4752[(1)] = (1));

return statearr_4752;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_4734){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4753){if((e4753 instanceof Object)){
var ex__4090__auto__ = e4753;
var statearr_4754_4771 = state_4734;
(statearr_4754_4771[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4772 = state_4734;
state_4734 = G__4772;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_4734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_4734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto__))
})();
var state__4178__auto__ = (function (){var statearr_4755 = f__4177__auto__.call(null);
(statearr_4755[(6)] = c__4176__auto__);

return statearr_4755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto__))
);

return c__4176__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async4773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4773 = (function (ch,cs,meta4774){
this.ch = ch;
this.cs = cs;
this.meta4774 = meta4774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4775,meta4774__$1){
var self__ = this;
var _4775__$1 = this;
return (new cljs.core.async.t_cljs$core$async4773(self__.ch,self__.cs,meta4774__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4775){
var self__ = this;
var _4775__$1 = this;
return self__.meta4774;
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4774","meta4774",1235427706,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async4773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4773";

cljs.core.async.t_cljs$core$async4773.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4773");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4773.
 */
cljs.core.async.__GT_t_cljs$core$async4773 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async4773(ch__$1,cs__$1,meta4774){
return (new cljs.core.async.t_cljs$core$async4773(ch__$1,cs__$1,meta4774));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async4773(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__4176__auto___4995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___4995,cs,m,dchan,dctr,done){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___4995,cs,m,dchan,dctr,done){
return (function (state_4910){
var state_val_4911 = (state_4910[(1)]);
if((state_val_4911 === (7))){
var inst_4906 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4912_4996 = state_4910__$1;
(statearr_4912_4996[(2)] = inst_4906);

(statearr_4912_4996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (20))){
var inst_4809 = (state_4910[(7)]);
var inst_4821 = cljs.core.first.call(null,inst_4809);
var inst_4822 = cljs.core.nth.call(null,inst_4821,(0),null);
var inst_4823 = cljs.core.nth.call(null,inst_4821,(1),null);
var state_4910__$1 = (function (){var statearr_4913 = state_4910;
(statearr_4913[(8)] = inst_4822);

return statearr_4913;
})();
if(cljs.core.truth_(inst_4823)){
var statearr_4914_4997 = state_4910__$1;
(statearr_4914_4997[(1)] = (22));

} else {
var statearr_4915_4998 = state_4910__$1;
(statearr_4915_4998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (27))){
var inst_4858 = (state_4910[(9)]);
var inst_4853 = (state_4910[(10)]);
var inst_4778 = (state_4910[(11)]);
var inst_4851 = (state_4910[(12)]);
var inst_4858__$1 = cljs.core._nth.call(null,inst_4851,inst_4853);
var inst_4859 = cljs.core.async.put_BANG_.call(null,inst_4858__$1,inst_4778,done);
var state_4910__$1 = (function (){var statearr_4916 = state_4910;
(statearr_4916[(9)] = inst_4858__$1);

return statearr_4916;
})();
if(cljs.core.truth_(inst_4859)){
var statearr_4917_4999 = state_4910__$1;
(statearr_4917_4999[(1)] = (30));

} else {
var statearr_4918_5000 = state_4910__$1;
(statearr_4918_5000[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (1))){
var state_4910__$1 = state_4910;
var statearr_4919_5001 = state_4910__$1;
(statearr_4919_5001[(2)] = null);

(statearr_4919_5001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (24))){
var inst_4809 = (state_4910[(7)]);
var inst_4828 = (state_4910[(2)]);
var inst_4829 = cljs.core.next.call(null,inst_4809);
var inst_4787 = inst_4829;
var inst_4788 = null;
var inst_4789 = (0);
var inst_4790 = (0);
var state_4910__$1 = (function (){var statearr_4920 = state_4910;
(statearr_4920[(13)] = inst_4789);

(statearr_4920[(14)] = inst_4787);

(statearr_4920[(15)] = inst_4828);

(statearr_4920[(16)] = inst_4790);

(statearr_4920[(17)] = inst_4788);

return statearr_4920;
})();
var statearr_4921_5002 = state_4910__$1;
(statearr_4921_5002[(2)] = null);

(statearr_4921_5002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (39))){
var state_4910__$1 = state_4910;
var statearr_4925_5003 = state_4910__$1;
(statearr_4925_5003[(2)] = null);

(statearr_4925_5003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (4))){
var inst_4778 = (state_4910[(11)]);
var inst_4778__$1 = (state_4910[(2)]);
var inst_4779 = (inst_4778__$1 == null);
var state_4910__$1 = (function (){var statearr_4926 = state_4910;
(statearr_4926[(11)] = inst_4778__$1);

return statearr_4926;
})();
if(cljs.core.truth_(inst_4779)){
var statearr_4927_5004 = state_4910__$1;
(statearr_4927_5004[(1)] = (5));

} else {
var statearr_4928_5005 = state_4910__$1;
(statearr_4928_5005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (15))){
var inst_4789 = (state_4910[(13)]);
var inst_4787 = (state_4910[(14)]);
var inst_4790 = (state_4910[(16)]);
var inst_4788 = (state_4910[(17)]);
var inst_4805 = (state_4910[(2)]);
var inst_4806 = (inst_4790 + (1));
var tmp4922 = inst_4789;
var tmp4923 = inst_4787;
var tmp4924 = inst_4788;
var inst_4787__$1 = tmp4923;
var inst_4788__$1 = tmp4924;
var inst_4789__$1 = tmp4922;
var inst_4790__$1 = inst_4806;
var state_4910__$1 = (function (){var statearr_4929 = state_4910;
(statearr_4929[(13)] = inst_4789__$1);

(statearr_4929[(18)] = inst_4805);

(statearr_4929[(14)] = inst_4787__$1);

(statearr_4929[(16)] = inst_4790__$1);

(statearr_4929[(17)] = inst_4788__$1);

return statearr_4929;
})();
var statearr_4930_5006 = state_4910__$1;
(statearr_4930_5006[(2)] = null);

(statearr_4930_5006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (21))){
var inst_4832 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4934_5007 = state_4910__$1;
(statearr_4934_5007[(2)] = inst_4832);

(statearr_4934_5007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (31))){
var inst_4858 = (state_4910[(9)]);
var inst_4862 = done.call(null,null);
var inst_4863 = cljs.core.async.untap_STAR_.call(null,m,inst_4858);
var state_4910__$1 = (function (){var statearr_4935 = state_4910;
(statearr_4935[(19)] = inst_4862);

return statearr_4935;
})();
var statearr_4936_5008 = state_4910__$1;
(statearr_4936_5008[(2)] = inst_4863);

(statearr_4936_5008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (32))){
var inst_4850 = (state_4910[(20)]);
var inst_4853 = (state_4910[(10)]);
var inst_4851 = (state_4910[(12)]);
var inst_4852 = (state_4910[(21)]);
var inst_4865 = (state_4910[(2)]);
var inst_4866 = (inst_4853 + (1));
var tmp4931 = inst_4850;
var tmp4932 = inst_4851;
var tmp4933 = inst_4852;
var inst_4850__$1 = tmp4931;
var inst_4851__$1 = tmp4932;
var inst_4852__$1 = tmp4933;
var inst_4853__$1 = inst_4866;
var state_4910__$1 = (function (){var statearr_4937 = state_4910;
(statearr_4937[(20)] = inst_4850__$1);

(statearr_4937[(10)] = inst_4853__$1);

(statearr_4937[(12)] = inst_4851__$1);

(statearr_4937[(21)] = inst_4852__$1);

(statearr_4937[(22)] = inst_4865);

return statearr_4937;
})();
var statearr_4938_5009 = state_4910__$1;
(statearr_4938_5009[(2)] = null);

(statearr_4938_5009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (40))){
var inst_4878 = (state_4910[(23)]);
var inst_4882 = done.call(null,null);
var inst_4883 = cljs.core.async.untap_STAR_.call(null,m,inst_4878);
var state_4910__$1 = (function (){var statearr_4939 = state_4910;
(statearr_4939[(24)] = inst_4882);

return statearr_4939;
})();
var statearr_4940_5010 = state_4910__$1;
(statearr_4940_5010[(2)] = inst_4883);

(statearr_4940_5010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (33))){
var inst_4869 = (state_4910[(25)]);
var inst_4871 = cljs.core.chunked_seq_QMARK_.call(null,inst_4869);
var state_4910__$1 = state_4910;
if(inst_4871){
var statearr_4941_5011 = state_4910__$1;
(statearr_4941_5011[(1)] = (36));

} else {
var statearr_4942_5012 = state_4910__$1;
(statearr_4942_5012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (13))){
var inst_4799 = (state_4910[(26)]);
var inst_4802 = cljs.core.async.close_BANG_.call(null,inst_4799);
var state_4910__$1 = state_4910;
var statearr_4943_5013 = state_4910__$1;
(statearr_4943_5013[(2)] = inst_4802);

(statearr_4943_5013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (22))){
var inst_4822 = (state_4910[(8)]);
var inst_4825 = cljs.core.async.close_BANG_.call(null,inst_4822);
var state_4910__$1 = state_4910;
var statearr_4944_5014 = state_4910__$1;
(statearr_4944_5014[(2)] = inst_4825);

(statearr_4944_5014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (36))){
var inst_4869 = (state_4910[(25)]);
var inst_4873 = cljs.core.chunk_first.call(null,inst_4869);
var inst_4874 = cljs.core.chunk_rest.call(null,inst_4869);
var inst_4875 = cljs.core.count.call(null,inst_4873);
var inst_4850 = inst_4874;
var inst_4851 = inst_4873;
var inst_4852 = inst_4875;
var inst_4853 = (0);
var state_4910__$1 = (function (){var statearr_4945 = state_4910;
(statearr_4945[(20)] = inst_4850);

(statearr_4945[(10)] = inst_4853);

(statearr_4945[(12)] = inst_4851);

(statearr_4945[(21)] = inst_4852);

return statearr_4945;
})();
var statearr_4946_5015 = state_4910__$1;
(statearr_4946_5015[(2)] = null);

(statearr_4946_5015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (41))){
var inst_4869 = (state_4910[(25)]);
var inst_4885 = (state_4910[(2)]);
var inst_4886 = cljs.core.next.call(null,inst_4869);
var inst_4850 = inst_4886;
var inst_4851 = null;
var inst_4852 = (0);
var inst_4853 = (0);
var state_4910__$1 = (function (){var statearr_4947 = state_4910;
(statearr_4947[(20)] = inst_4850);

(statearr_4947[(10)] = inst_4853);

(statearr_4947[(27)] = inst_4885);

(statearr_4947[(12)] = inst_4851);

(statearr_4947[(21)] = inst_4852);

return statearr_4947;
})();
var statearr_4948_5016 = state_4910__$1;
(statearr_4948_5016[(2)] = null);

(statearr_4948_5016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (43))){
var state_4910__$1 = state_4910;
var statearr_4949_5017 = state_4910__$1;
(statearr_4949_5017[(2)] = null);

(statearr_4949_5017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (29))){
var inst_4894 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4950_5018 = state_4910__$1;
(statearr_4950_5018[(2)] = inst_4894);

(statearr_4950_5018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (44))){
var inst_4903 = (state_4910[(2)]);
var state_4910__$1 = (function (){var statearr_4951 = state_4910;
(statearr_4951[(28)] = inst_4903);

return statearr_4951;
})();
var statearr_4952_5019 = state_4910__$1;
(statearr_4952_5019[(2)] = null);

(statearr_4952_5019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (6))){
var inst_4842 = (state_4910[(29)]);
var inst_4841 = cljs.core.deref.call(null,cs);
var inst_4842__$1 = cljs.core.keys.call(null,inst_4841);
var inst_4843 = cljs.core.count.call(null,inst_4842__$1);
var inst_4844 = cljs.core.reset_BANG_.call(null,dctr,inst_4843);
var inst_4849 = cljs.core.seq.call(null,inst_4842__$1);
var inst_4850 = inst_4849;
var inst_4851 = null;
var inst_4852 = (0);
var inst_4853 = (0);
var state_4910__$1 = (function (){var statearr_4953 = state_4910;
(statearr_4953[(20)] = inst_4850);

(statearr_4953[(10)] = inst_4853);

(statearr_4953[(30)] = inst_4844);

(statearr_4953[(29)] = inst_4842__$1);

(statearr_4953[(12)] = inst_4851);

(statearr_4953[(21)] = inst_4852);

return statearr_4953;
})();
var statearr_4954_5020 = state_4910__$1;
(statearr_4954_5020[(2)] = null);

(statearr_4954_5020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (28))){
var inst_4850 = (state_4910[(20)]);
var inst_4869 = (state_4910[(25)]);
var inst_4869__$1 = cljs.core.seq.call(null,inst_4850);
var state_4910__$1 = (function (){var statearr_4955 = state_4910;
(statearr_4955[(25)] = inst_4869__$1);

return statearr_4955;
})();
if(inst_4869__$1){
var statearr_4956_5021 = state_4910__$1;
(statearr_4956_5021[(1)] = (33));

} else {
var statearr_4957_5022 = state_4910__$1;
(statearr_4957_5022[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (25))){
var inst_4853 = (state_4910[(10)]);
var inst_4852 = (state_4910[(21)]);
var inst_4855 = (inst_4853 < inst_4852);
var inst_4856 = inst_4855;
var state_4910__$1 = state_4910;
if(cljs.core.truth_(inst_4856)){
var statearr_4958_5023 = state_4910__$1;
(statearr_4958_5023[(1)] = (27));

} else {
var statearr_4959_5024 = state_4910__$1;
(statearr_4959_5024[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (34))){
var state_4910__$1 = state_4910;
var statearr_4960_5025 = state_4910__$1;
(statearr_4960_5025[(2)] = null);

(statearr_4960_5025[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (17))){
var state_4910__$1 = state_4910;
var statearr_4961_5026 = state_4910__$1;
(statearr_4961_5026[(2)] = null);

(statearr_4961_5026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (3))){
var inst_4908 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4910__$1,inst_4908);
} else {
if((state_val_4911 === (12))){
var inst_4837 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4962_5027 = state_4910__$1;
(statearr_4962_5027[(2)] = inst_4837);

(statearr_4962_5027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (2))){
var state_4910__$1 = state_4910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4910__$1,(4),ch);
} else {
if((state_val_4911 === (23))){
var state_4910__$1 = state_4910;
var statearr_4963_5028 = state_4910__$1;
(statearr_4963_5028[(2)] = null);

(statearr_4963_5028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (35))){
var inst_4892 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4964_5029 = state_4910__$1;
(statearr_4964_5029[(2)] = inst_4892);

(statearr_4964_5029[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (19))){
var inst_4809 = (state_4910[(7)]);
var inst_4813 = cljs.core.chunk_first.call(null,inst_4809);
var inst_4814 = cljs.core.chunk_rest.call(null,inst_4809);
var inst_4815 = cljs.core.count.call(null,inst_4813);
var inst_4787 = inst_4814;
var inst_4788 = inst_4813;
var inst_4789 = inst_4815;
var inst_4790 = (0);
var state_4910__$1 = (function (){var statearr_4965 = state_4910;
(statearr_4965[(13)] = inst_4789);

(statearr_4965[(14)] = inst_4787);

(statearr_4965[(16)] = inst_4790);

(statearr_4965[(17)] = inst_4788);

return statearr_4965;
})();
var statearr_4966_5030 = state_4910__$1;
(statearr_4966_5030[(2)] = null);

(statearr_4966_5030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (11))){
var inst_4787 = (state_4910[(14)]);
var inst_4809 = (state_4910[(7)]);
var inst_4809__$1 = cljs.core.seq.call(null,inst_4787);
var state_4910__$1 = (function (){var statearr_4967 = state_4910;
(statearr_4967[(7)] = inst_4809__$1);

return statearr_4967;
})();
if(inst_4809__$1){
var statearr_4968_5031 = state_4910__$1;
(statearr_4968_5031[(1)] = (16));

} else {
var statearr_4969_5032 = state_4910__$1;
(statearr_4969_5032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (9))){
var inst_4839 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4970_5033 = state_4910__$1;
(statearr_4970_5033[(2)] = inst_4839);

(statearr_4970_5033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (5))){
var inst_4785 = cljs.core.deref.call(null,cs);
var inst_4786 = cljs.core.seq.call(null,inst_4785);
var inst_4787 = inst_4786;
var inst_4788 = null;
var inst_4789 = (0);
var inst_4790 = (0);
var state_4910__$1 = (function (){var statearr_4971 = state_4910;
(statearr_4971[(13)] = inst_4789);

(statearr_4971[(14)] = inst_4787);

(statearr_4971[(16)] = inst_4790);

(statearr_4971[(17)] = inst_4788);

return statearr_4971;
})();
var statearr_4972_5034 = state_4910__$1;
(statearr_4972_5034[(2)] = null);

(statearr_4972_5034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (14))){
var state_4910__$1 = state_4910;
var statearr_4973_5035 = state_4910__$1;
(statearr_4973_5035[(2)] = null);

(statearr_4973_5035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (45))){
var inst_4900 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4974_5036 = state_4910__$1;
(statearr_4974_5036[(2)] = inst_4900);

(statearr_4974_5036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (26))){
var inst_4842 = (state_4910[(29)]);
var inst_4896 = (state_4910[(2)]);
var inst_4897 = cljs.core.seq.call(null,inst_4842);
var state_4910__$1 = (function (){var statearr_4975 = state_4910;
(statearr_4975[(31)] = inst_4896);

return statearr_4975;
})();
if(inst_4897){
var statearr_4976_5037 = state_4910__$1;
(statearr_4976_5037[(1)] = (42));

} else {
var statearr_4977_5038 = state_4910__$1;
(statearr_4977_5038[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (16))){
var inst_4809 = (state_4910[(7)]);
var inst_4811 = cljs.core.chunked_seq_QMARK_.call(null,inst_4809);
var state_4910__$1 = state_4910;
if(inst_4811){
var statearr_4978_5039 = state_4910__$1;
(statearr_4978_5039[(1)] = (19));

} else {
var statearr_4979_5040 = state_4910__$1;
(statearr_4979_5040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (38))){
var inst_4889 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4980_5041 = state_4910__$1;
(statearr_4980_5041[(2)] = inst_4889);

(statearr_4980_5041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (30))){
var state_4910__$1 = state_4910;
var statearr_4981_5042 = state_4910__$1;
(statearr_4981_5042[(2)] = null);

(statearr_4981_5042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (10))){
var inst_4790 = (state_4910[(16)]);
var inst_4788 = (state_4910[(17)]);
var inst_4798 = cljs.core._nth.call(null,inst_4788,inst_4790);
var inst_4799 = cljs.core.nth.call(null,inst_4798,(0),null);
var inst_4800 = cljs.core.nth.call(null,inst_4798,(1),null);
var state_4910__$1 = (function (){var statearr_4982 = state_4910;
(statearr_4982[(26)] = inst_4799);

return statearr_4982;
})();
if(cljs.core.truth_(inst_4800)){
var statearr_4983_5043 = state_4910__$1;
(statearr_4983_5043[(1)] = (13));

} else {
var statearr_4984_5044 = state_4910__$1;
(statearr_4984_5044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (18))){
var inst_4835 = (state_4910[(2)]);
var state_4910__$1 = state_4910;
var statearr_4985_5045 = state_4910__$1;
(statearr_4985_5045[(2)] = inst_4835);

(statearr_4985_5045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (42))){
var state_4910__$1 = state_4910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4910__$1,(45),dchan);
} else {
if((state_val_4911 === (37))){
var inst_4878 = (state_4910[(23)]);
var inst_4869 = (state_4910[(25)]);
var inst_4778 = (state_4910[(11)]);
var inst_4878__$1 = cljs.core.first.call(null,inst_4869);
var inst_4879 = cljs.core.async.put_BANG_.call(null,inst_4878__$1,inst_4778,done);
var state_4910__$1 = (function (){var statearr_4986 = state_4910;
(statearr_4986[(23)] = inst_4878__$1);

return statearr_4986;
})();
if(cljs.core.truth_(inst_4879)){
var statearr_4987_5046 = state_4910__$1;
(statearr_4987_5046[(1)] = (39));

} else {
var statearr_4988_5047 = state_4910__$1;
(statearr_4988_5047[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4911 === (8))){
var inst_4789 = (state_4910[(13)]);
var inst_4790 = (state_4910[(16)]);
var inst_4792 = (inst_4790 < inst_4789);
var inst_4793 = inst_4792;
var state_4910__$1 = state_4910;
if(cljs.core.truth_(inst_4793)){
var statearr_4989_5048 = state_4910__$1;
(statearr_4989_5048[(1)] = (10));

} else {
var statearr_4990_5049 = state_4910__$1;
(statearr_4990_5049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___4995,cs,m,dchan,dctr,done))
;
return ((function (switch__4086__auto__,c__4176__auto___4995,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__4087__auto__ = null;
var cljs$core$async$mult_$_state_machine__4087__auto____0 = (function (){
var statearr_4991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4991[(0)] = cljs$core$async$mult_$_state_machine__4087__auto__);

(statearr_4991[(1)] = (1));

return statearr_4991;
});
var cljs$core$async$mult_$_state_machine__4087__auto____1 = (function (state_4910){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_4910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e4992){if((e4992 instanceof Object)){
var ex__4090__auto__ = e4992;
var statearr_4993_5050 = state_4910;
(statearr_4993_5050[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5051 = state_4910;
state_4910 = G__5051;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__4087__auto__ = function(state_4910){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__4087__auto____1.call(this,state_4910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__4087__auto____0;
cljs$core$async$mult_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__4087__auto____1;
return cljs$core$async$mult_$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___4995,cs,m,dchan,dctr,done))
})();
var state__4178__auto__ = (function (){var statearr_4994 = f__4177__auto__.call(null);
(statearr_4994[(6)] = c__4176__auto___4995);

return statearr_4994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___4995,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__5053 = arguments.length;
switch (G__5053) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5065 = arguments.length;
var i__4500__auto___5066 = (0);
while(true){
if((i__4500__auto___5066 < len__4499__auto___5065)){
args__4502__auto__.push((arguments[i__4500__auto___5066]));

var G__5067 = (i__4500__auto___5066 + (1));
i__4500__auto___5066 = G__5067;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5059){
var map__5060 = p__5059;
var map__5060__$1 = ((((!((map__5060 == null)))?(((((map__5060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5060):map__5060);
var opts = map__5060__$1;
var statearr_5062_5068 = state;
(statearr_5062_5068[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__5060,map__5060__$1,opts){
return (function (val){
var statearr_5063_5069 = state;
(statearr_5063_5069[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__5060,map__5060__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_5064_5070 = state;
(statearr_5064_5070[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5055){
var G__5056 = cljs.core.first.call(null,seq5055);
var seq5055__$1 = cljs.core.next.call(null,seq5055);
var G__5057 = cljs.core.first.call(null,seq5055__$1);
var seq5055__$2 = cljs.core.next.call(null,seq5055__$1);
var G__5058 = cljs.core.first.call(null,seq5055__$2);
var seq5055__$3 = cljs.core.next.call(null,seq5055__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5056,G__5057,G__5058,seq5055__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async5071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5071 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta5072){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta5072 = meta5072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5073,meta5072__$1){
var self__ = this;
var _5073__$1 = this;
return (new cljs.core.async.t_cljs$core$async5071(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta5072__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5073){
var self__ = this;
var _5073__$1 = this;
return self__.meta5072;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta5072","meta5072",1467535305,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async5071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5071";

cljs.core.async.t_cljs$core$async5071.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5071");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5071.
 */
cljs.core.async.__GT_t_cljs$core$async5071 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async5071(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5072){
return (new cljs.core.async.t_cljs$core$async5071(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta5072));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async5071(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4176__auto___5235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5175){
var state_val_5176 = (state_5175[(1)]);
if((state_val_5176 === (7))){
var inst_5090 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
var statearr_5177_5236 = state_5175__$1;
(statearr_5177_5236[(2)] = inst_5090);

(statearr_5177_5236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (20))){
var inst_5102 = (state_5175[(7)]);
var state_5175__$1 = state_5175;
var statearr_5178_5237 = state_5175__$1;
(statearr_5178_5237[(2)] = inst_5102);

(statearr_5178_5237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (27))){
var state_5175__$1 = state_5175;
var statearr_5179_5238 = state_5175__$1;
(statearr_5179_5238[(2)] = null);

(statearr_5179_5238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (1))){
var inst_5077 = (state_5175[(8)]);
var inst_5077__$1 = calc_state.call(null);
var inst_5079 = (inst_5077__$1 == null);
var inst_5080 = cljs.core.not.call(null,inst_5079);
var state_5175__$1 = (function (){var statearr_5180 = state_5175;
(statearr_5180[(8)] = inst_5077__$1);

return statearr_5180;
})();
if(inst_5080){
var statearr_5181_5239 = state_5175__$1;
(statearr_5181_5239[(1)] = (2));

} else {
var statearr_5182_5240 = state_5175__$1;
(statearr_5182_5240[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (24))){
var inst_5126 = (state_5175[(9)]);
var inst_5149 = (state_5175[(10)]);
var inst_5135 = (state_5175[(11)]);
var inst_5149__$1 = inst_5126.call(null,inst_5135);
var state_5175__$1 = (function (){var statearr_5183 = state_5175;
(statearr_5183[(10)] = inst_5149__$1);

return statearr_5183;
})();
if(cljs.core.truth_(inst_5149__$1)){
var statearr_5184_5241 = state_5175__$1;
(statearr_5184_5241[(1)] = (29));

} else {
var statearr_5185_5242 = state_5175__$1;
(statearr_5185_5242[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (4))){
var inst_5093 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5093)){
var statearr_5186_5243 = state_5175__$1;
(statearr_5186_5243[(1)] = (8));

} else {
var statearr_5187_5244 = state_5175__$1;
(statearr_5187_5244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (15))){
var inst_5120 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5120)){
var statearr_5188_5245 = state_5175__$1;
(statearr_5188_5245[(1)] = (19));

} else {
var statearr_5189_5246 = state_5175__$1;
(statearr_5189_5246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (21))){
var inst_5125 = (state_5175[(12)]);
var inst_5125__$1 = (state_5175[(2)]);
var inst_5126 = cljs.core.get.call(null,inst_5125__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5127 = cljs.core.get.call(null,inst_5125__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5128 = cljs.core.get.call(null,inst_5125__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5175__$1 = (function (){var statearr_5190 = state_5175;
(statearr_5190[(9)] = inst_5126);

(statearr_5190[(13)] = inst_5127);

(statearr_5190[(12)] = inst_5125__$1);

return statearr_5190;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5175__$1,(22),inst_5128);
} else {
if((state_val_5176 === (31))){
var inst_5157 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5157)){
var statearr_5191_5247 = state_5175__$1;
(statearr_5191_5247[(1)] = (32));

} else {
var statearr_5192_5248 = state_5175__$1;
(statearr_5192_5248[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (32))){
var inst_5134 = (state_5175[(14)]);
var state_5175__$1 = state_5175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5175__$1,(35),out,inst_5134);
} else {
if((state_val_5176 === (33))){
var inst_5125 = (state_5175[(12)]);
var inst_5102 = inst_5125;
var state_5175__$1 = (function (){var statearr_5193 = state_5175;
(statearr_5193[(7)] = inst_5102);

return statearr_5193;
})();
var statearr_5194_5249 = state_5175__$1;
(statearr_5194_5249[(2)] = null);

(statearr_5194_5249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (13))){
var inst_5102 = (state_5175[(7)]);
var inst_5109 = inst_5102.cljs$lang$protocol_mask$partition0$;
var inst_5110 = (inst_5109 & (64));
var inst_5111 = inst_5102.cljs$core$ISeq$;
var inst_5112 = (cljs.core.PROTOCOL_SENTINEL === inst_5111);
var inst_5113 = ((inst_5110) || (inst_5112));
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5113)){
var statearr_5195_5250 = state_5175__$1;
(statearr_5195_5250[(1)] = (16));

} else {
var statearr_5196_5251 = state_5175__$1;
(statearr_5196_5251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (22))){
var inst_5135 = (state_5175[(11)]);
var inst_5134 = (state_5175[(14)]);
var inst_5133 = (state_5175[(2)]);
var inst_5134__$1 = cljs.core.nth.call(null,inst_5133,(0),null);
var inst_5135__$1 = cljs.core.nth.call(null,inst_5133,(1),null);
var inst_5136 = (inst_5134__$1 == null);
var inst_5137 = cljs.core._EQ_.call(null,inst_5135__$1,change);
var inst_5138 = ((inst_5136) || (inst_5137));
var state_5175__$1 = (function (){var statearr_5197 = state_5175;
(statearr_5197[(11)] = inst_5135__$1);

(statearr_5197[(14)] = inst_5134__$1);

return statearr_5197;
})();
if(cljs.core.truth_(inst_5138)){
var statearr_5198_5252 = state_5175__$1;
(statearr_5198_5252[(1)] = (23));

} else {
var statearr_5199_5253 = state_5175__$1;
(statearr_5199_5253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (36))){
var inst_5125 = (state_5175[(12)]);
var inst_5102 = inst_5125;
var state_5175__$1 = (function (){var statearr_5200 = state_5175;
(statearr_5200[(7)] = inst_5102);

return statearr_5200;
})();
var statearr_5201_5254 = state_5175__$1;
(statearr_5201_5254[(2)] = null);

(statearr_5201_5254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (29))){
var inst_5149 = (state_5175[(10)]);
var state_5175__$1 = state_5175;
var statearr_5202_5255 = state_5175__$1;
(statearr_5202_5255[(2)] = inst_5149);

(statearr_5202_5255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (6))){
var state_5175__$1 = state_5175;
var statearr_5203_5256 = state_5175__$1;
(statearr_5203_5256[(2)] = false);

(statearr_5203_5256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (28))){
var inst_5145 = (state_5175[(2)]);
var inst_5146 = calc_state.call(null);
var inst_5102 = inst_5146;
var state_5175__$1 = (function (){var statearr_5204 = state_5175;
(statearr_5204[(15)] = inst_5145);

(statearr_5204[(7)] = inst_5102);

return statearr_5204;
})();
var statearr_5205_5257 = state_5175__$1;
(statearr_5205_5257[(2)] = null);

(statearr_5205_5257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (25))){
var inst_5171 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
var statearr_5206_5258 = state_5175__$1;
(statearr_5206_5258[(2)] = inst_5171);

(statearr_5206_5258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (34))){
var inst_5169 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
var statearr_5207_5259 = state_5175__$1;
(statearr_5207_5259[(2)] = inst_5169);

(statearr_5207_5259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (17))){
var state_5175__$1 = state_5175;
var statearr_5208_5260 = state_5175__$1;
(statearr_5208_5260[(2)] = false);

(statearr_5208_5260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (3))){
var state_5175__$1 = state_5175;
var statearr_5209_5261 = state_5175__$1;
(statearr_5209_5261[(2)] = false);

(statearr_5209_5261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (12))){
var inst_5173 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5175__$1,inst_5173);
} else {
if((state_val_5176 === (2))){
var inst_5077 = (state_5175[(8)]);
var inst_5082 = inst_5077.cljs$lang$protocol_mask$partition0$;
var inst_5083 = (inst_5082 & (64));
var inst_5084 = inst_5077.cljs$core$ISeq$;
var inst_5085 = (cljs.core.PROTOCOL_SENTINEL === inst_5084);
var inst_5086 = ((inst_5083) || (inst_5085));
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5086)){
var statearr_5210_5262 = state_5175__$1;
(statearr_5210_5262[(1)] = (5));

} else {
var statearr_5211_5263 = state_5175__$1;
(statearr_5211_5263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (23))){
var inst_5134 = (state_5175[(14)]);
var inst_5140 = (inst_5134 == null);
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5140)){
var statearr_5212_5264 = state_5175__$1;
(statearr_5212_5264[(1)] = (26));

} else {
var statearr_5213_5265 = state_5175__$1;
(statearr_5213_5265[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (35))){
var inst_5160 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
if(cljs.core.truth_(inst_5160)){
var statearr_5214_5266 = state_5175__$1;
(statearr_5214_5266[(1)] = (36));

} else {
var statearr_5215_5267 = state_5175__$1;
(statearr_5215_5267[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (19))){
var inst_5102 = (state_5175[(7)]);
var inst_5122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5102);
var state_5175__$1 = state_5175;
var statearr_5216_5268 = state_5175__$1;
(statearr_5216_5268[(2)] = inst_5122);

(statearr_5216_5268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (11))){
var inst_5102 = (state_5175[(7)]);
var inst_5106 = (inst_5102 == null);
var inst_5107 = cljs.core.not.call(null,inst_5106);
var state_5175__$1 = state_5175;
if(inst_5107){
var statearr_5217_5269 = state_5175__$1;
(statearr_5217_5269[(1)] = (13));

} else {
var statearr_5218_5270 = state_5175__$1;
(statearr_5218_5270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (9))){
var inst_5077 = (state_5175[(8)]);
var state_5175__$1 = state_5175;
var statearr_5219_5271 = state_5175__$1;
(statearr_5219_5271[(2)] = inst_5077);

(statearr_5219_5271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (5))){
var state_5175__$1 = state_5175;
var statearr_5220_5272 = state_5175__$1;
(statearr_5220_5272[(2)] = true);

(statearr_5220_5272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (14))){
var state_5175__$1 = state_5175;
var statearr_5221_5273 = state_5175__$1;
(statearr_5221_5273[(2)] = false);

(statearr_5221_5273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (26))){
var inst_5135 = (state_5175[(11)]);
var inst_5142 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5135);
var state_5175__$1 = state_5175;
var statearr_5222_5274 = state_5175__$1;
(statearr_5222_5274[(2)] = inst_5142);

(statearr_5222_5274[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (16))){
var state_5175__$1 = state_5175;
var statearr_5223_5275 = state_5175__$1;
(statearr_5223_5275[(2)] = true);

(statearr_5223_5275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (38))){
var inst_5165 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
var statearr_5224_5276 = state_5175__$1;
(statearr_5224_5276[(2)] = inst_5165);

(statearr_5224_5276[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (30))){
var inst_5126 = (state_5175[(9)]);
var inst_5127 = (state_5175[(13)]);
var inst_5135 = (state_5175[(11)]);
var inst_5152 = cljs.core.empty_QMARK_.call(null,inst_5126);
var inst_5153 = inst_5127.call(null,inst_5135);
var inst_5154 = cljs.core.not.call(null,inst_5153);
var inst_5155 = ((inst_5152) && (inst_5154));
var state_5175__$1 = state_5175;
var statearr_5225_5277 = state_5175__$1;
(statearr_5225_5277[(2)] = inst_5155);

(statearr_5225_5277[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (10))){
var inst_5077 = (state_5175[(8)]);
var inst_5098 = (state_5175[(2)]);
var inst_5099 = cljs.core.get.call(null,inst_5098,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5100 = cljs.core.get.call(null,inst_5098,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5101 = cljs.core.get.call(null,inst_5098,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5102 = inst_5077;
var state_5175__$1 = (function (){var statearr_5226 = state_5175;
(statearr_5226[(16)] = inst_5099);

(statearr_5226[(17)] = inst_5100);

(statearr_5226[(7)] = inst_5102);

(statearr_5226[(18)] = inst_5101);

return statearr_5226;
})();
var statearr_5227_5278 = state_5175__$1;
(statearr_5227_5278[(2)] = null);

(statearr_5227_5278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (18))){
var inst_5117 = (state_5175[(2)]);
var state_5175__$1 = state_5175;
var statearr_5228_5279 = state_5175__$1;
(statearr_5228_5279[(2)] = inst_5117);

(statearr_5228_5279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (37))){
var state_5175__$1 = state_5175;
var statearr_5229_5280 = state_5175__$1;
(statearr_5229_5280[(2)] = null);

(statearr_5229_5280[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5176 === (8))){
var inst_5077 = (state_5175[(8)]);
var inst_5095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5077);
var state_5175__$1 = state_5175;
var statearr_5230_5281 = state_5175__$1;
(statearr_5230_5281[(2)] = inst_5095);

(statearr_5230_5281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__4086__auto__,c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__4087__auto__ = null;
var cljs$core$async$mix_$_state_machine__4087__auto____0 = (function (){
var statearr_5231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5231[(0)] = cljs$core$async$mix_$_state_machine__4087__auto__);

(statearr_5231[(1)] = (1));

return statearr_5231;
});
var cljs$core$async$mix_$_state_machine__4087__auto____1 = (function (state_5175){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5232){if((e5232 instanceof Object)){
var ex__4090__auto__ = e5232;
var statearr_5233_5282 = state_5175;
(statearr_5233_5282[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5283 = state_5175;
state_5175 = G__5283;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__4087__auto__ = function(state_5175){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__4087__auto____1.call(this,state_5175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__4087__auto____0;
cljs$core$async$mix_$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__4087__auto____1;
return cljs$core$async$mix_$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__4178__auto__ = (function (){var statearr_5234 = f__4177__auto__.call(null);
(statearr_5234[(6)] = c__4176__auto___5235);

return statearr_5234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__5285 = arguments.length;
switch (G__5285) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__5289 = arguments.length;
switch (G__5289) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__5287_SHARP_){
if(cljs.core.truth_(p1__5287_SHARP_.call(null,topic))){
return p1__5287_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5287_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async5290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5291 = meta5291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5292,meta5291__$1){
var self__ = this;
var _5292__$1 = this;
return (new cljs.core.async.t_cljs$core$async5290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5291__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5292){
var self__ = this;
var _5292__$1 = this;
return self__.meta5291;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5291","meta5291",-37404416,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async5290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5290";

cljs.core.async.t_cljs$core$async5290.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5290");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5290.
 */
cljs.core.async.__GT_t_cljs$core$async5290 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async5290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5291){
return (new cljs.core.async.t_cljs$core$async5290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5291));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async5290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__4176__auto___5410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5410,mults,ensure_mult,p){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5410,mults,ensure_mult,p){
return (function (state_5364){
var state_val_5365 = (state_5364[(1)]);
if((state_val_5365 === (7))){
var inst_5360 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5366_5411 = state_5364__$1;
(statearr_5366_5411[(2)] = inst_5360);

(statearr_5366_5411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (20))){
var state_5364__$1 = state_5364;
var statearr_5367_5412 = state_5364__$1;
(statearr_5367_5412[(2)] = null);

(statearr_5367_5412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (1))){
var state_5364__$1 = state_5364;
var statearr_5368_5413 = state_5364__$1;
(statearr_5368_5413[(2)] = null);

(statearr_5368_5413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (24))){
var inst_5343 = (state_5364[(7)]);
var inst_5352 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5343);
var state_5364__$1 = state_5364;
var statearr_5369_5414 = state_5364__$1;
(statearr_5369_5414[(2)] = inst_5352);

(statearr_5369_5414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (4))){
var inst_5295 = (state_5364[(8)]);
var inst_5295__$1 = (state_5364[(2)]);
var inst_5296 = (inst_5295__$1 == null);
var state_5364__$1 = (function (){var statearr_5370 = state_5364;
(statearr_5370[(8)] = inst_5295__$1);

return statearr_5370;
})();
if(cljs.core.truth_(inst_5296)){
var statearr_5371_5415 = state_5364__$1;
(statearr_5371_5415[(1)] = (5));

} else {
var statearr_5372_5416 = state_5364__$1;
(statearr_5372_5416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (15))){
var inst_5337 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5373_5417 = state_5364__$1;
(statearr_5373_5417[(2)] = inst_5337);

(statearr_5373_5417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (21))){
var inst_5357 = (state_5364[(2)]);
var state_5364__$1 = (function (){var statearr_5374 = state_5364;
(statearr_5374[(9)] = inst_5357);

return statearr_5374;
})();
var statearr_5375_5418 = state_5364__$1;
(statearr_5375_5418[(2)] = null);

(statearr_5375_5418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (13))){
var inst_5319 = (state_5364[(10)]);
var inst_5321 = cljs.core.chunked_seq_QMARK_.call(null,inst_5319);
var state_5364__$1 = state_5364;
if(inst_5321){
var statearr_5376_5419 = state_5364__$1;
(statearr_5376_5419[(1)] = (16));

} else {
var statearr_5377_5420 = state_5364__$1;
(statearr_5377_5420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (22))){
var inst_5349 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
if(cljs.core.truth_(inst_5349)){
var statearr_5378_5421 = state_5364__$1;
(statearr_5378_5421[(1)] = (23));

} else {
var statearr_5379_5422 = state_5364__$1;
(statearr_5379_5422[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (6))){
var inst_5295 = (state_5364[(8)]);
var inst_5345 = (state_5364[(11)]);
var inst_5343 = (state_5364[(7)]);
var inst_5343__$1 = topic_fn.call(null,inst_5295);
var inst_5344 = cljs.core.deref.call(null,mults);
var inst_5345__$1 = cljs.core.get.call(null,inst_5344,inst_5343__$1);
var state_5364__$1 = (function (){var statearr_5380 = state_5364;
(statearr_5380[(11)] = inst_5345__$1);

(statearr_5380[(7)] = inst_5343__$1);

return statearr_5380;
})();
if(cljs.core.truth_(inst_5345__$1)){
var statearr_5381_5423 = state_5364__$1;
(statearr_5381_5423[(1)] = (19));

} else {
var statearr_5382_5424 = state_5364__$1;
(statearr_5382_5424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (25))){
var inst_5354 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5383_5425 = state_5364__$1;
(statearr_5383_5425[(2)] = inst_5354);

(statearr_5383_5425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (17))){
var inst_5319 = (state_5364[(10)]);
var inst_5328 = cljs.core.first.call(null,inst_5319);
var inst_5329 = cljs.core.async.muxch_STAR_.call(null,inst_5328);
var inst_5330 = cljs.core.async.close_BANG_.call(null,inst_5329);
var inst_5331 = cljs.core.next.call(null,inst_5319);
var inst_5305 = inst_5331;
var inst_5306 = null;
var inst_5307 = (0);
var inst_5308 = (0);
var state_5364__$1 = (function (){var statearr_5384 = state_5364;
(statearr_5384[(12)] = inst_5307);

(statearr_5384[(13)] = inst_5305);

(statearr_5384[(14)] = inst_5330);

(statearr_5384[(15)] = inst_5306);

(statearr_5384[(16)] = inst_5308);

return statearr_5384;
})();
var statearr_5385_5426 = state_5364__$1;
(statearr_5385_5426[(2)] = null);

(statearr_5385_5426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (3))){
var inst_5362 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5364__$1,inst_5362);
} else {
if((state_val_5365 === (12))){
var inst_5339 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5386_5427 = state_5364__$1;
(statearr_5386_5427[(2)] = inst_5339);

(statearr_5386_5427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (2))){
var state_5364__$1 = state_5364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5364__$1,(4),ch);
} else {
if((state_val_5365 === (23))){
var state_5364__$1 = state_5364;
var statearr_5387_5428 = state_5364__$1;
(statearr_5387_5428[(2)] = null);

(statearr_5387_5428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (19))){
var inst_5295 = (state_5364[(8)]);
var inst_5345 = (state_5364[(11)]);
var inst_5347 = cljs.core.async.muxch_STAR_.call(null,inst_5345);
var state_5364__$1 = state_5364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5364__$1,(22),inst_5347,inst_5295);
} else {
if((state_val_5365 === (11))){
var inst_5319 = (state_5364[(10)]);
var inst_5305 = (state_5364[(13)]);
var inst_5319__$1 = cljs.core.seq.call(null,inst_5305);
var state_5364__$1 = (function (){var statearr_5388 = state_5364;
(statearr_5388[(10)] = inst_5319__$1);

return statearr_5388;
})();
if(inst_5319__$1){
var statearr_5389_5429 = state_5364__$1;
(statearr_5389_5429[(1)] = (13));

} else {
var statearr_5390_5430 = state_5364__$1;
(statearr_5390_5430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (9))){
var inst_5341 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5391_5431 = state_5364__$1;
(statearr_5391_5431[(2)] = inst_5341);

(statearr_5391_5431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (5))){
var inst_5302 = cljs.core.deref.call(null,mults);
var inst_5303 = cljs.core.vals.call(null,inst_5302);
var inst_5304 = cljs.core.seq.call(null,inst_5303);
var inst_5305 = inst_5304;
var inst_5306 = null;
var inst_5307 = (0);
var inst_5308 = (0);
var state_5364__$1 = (function (){var statearr_5392 = state_5364;
(statearr_5392[(12)] = inst_5307);

(statearr_5392[(13)] = inst_5305);

(statearr_5392[(15)] = inst_5306);

(statearr_5392[(16)] = inst_5308);

return statearr_5392;
})();
var statearr_5393_5432 = state_5364__$1;
(statearr_5393_5432[(2)] = null);

(statearr_5393_5432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (14))){
var state_5364__$1 = state_5364;
var statearr_5397_5433 = state_5364__$1;
(statearr_5397_5433[(2)] = null);

(statearr_5397_5433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (16))){
var inst_5319 = (state_5364[(10)]);
var inst_5323 = cljs.core.chunk_first.call(null,inst_5319);
var inst_5324 = cljs.core.chunk_rest.call(null,inst_5319);
var inst_5325 = cljs.core.count.call(null,inst_5323);
var inst_5305 = inst_5324;
var inst_5306 = inst_5323;
var inst_5307 = inst_5325;
var inst_5308 = (0);
var state_5364__$1 = (function (){var statearr_5398 = state_5364;
(statearr_5398[(12)] = inst_5307);

(statearr_5398[(13)] = inst_5305);

(statearr_5398[(15)] = inst_5306);

(statearr_5398[(16)] = inst_5308);

return statearr_5398;
})();
var statearr_5399_5434 = state_5364__$1;
(statearr_5399_5434[(2)] = null);

(statearr_5399_5434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (10))){
var inst_5307 = (state_5364[(12)]);
var inst_5305 = (state_5364[(13)]);
var inst_5306 = (state_5364[(15)]);
var inst_5308 = (state_5364[(16)]);
var inst_5313 = cljs.core._nth.call(null,inst_5306,inst_5308);
var inst_5314 = cljs.core.async.muxch_STAR_.call(null,inst_5313);
var inst_5315 = cljs.core.async.close_BANG_.call(null,inst_5314);
var inst_5316 = (inst_5308 + (1));
var tmp5394 = inst_5307;
var tmp5395 = inst_5305;
var tmp5396 = inst_5306;
var inst_5305__$1 = tmp5395;
var inst_5306__$1 = tmp5396;
var inst_5307__$1 = tmp5394;
var inst_5308__$1 = inst_5316;
var state_5364__$1 = (function (){var statearr_5400 = state_5364;
(statearr_5400[(12)] = inst_5307__$1);

(statearr_5400[(13)] = inst_5305__$1);

(statearr_5400[(15)] = inst_5306__$1);

(statearr_5400[(16)] = inst_5308__$1);

(statearr_5400[(17)] = inst_5315);

return statearr_5400;
})();
var statearr_5401_5435 = state_5364__$1;
(statearr_5401_5435[(2)] = null);

(statearr_5401_5435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (18))){
var inst_5334 = (state_5364[(2)]);
var state_5364__$1 = state_5364;
var statearr_5402_5436 = state_5364__$1;
(statearr_5402_5436[(2)] = inst_5334);

(statearr_5402_5436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5365 === (8))){
var inst_5307 = (state_5364[(12)]);
var inst_5308 = (state_5364[(16)]);
var inst_5310 = (inst_5308 < inst_5307);
var inst_5311 = inst_5310;
var state_5364__$1 = state_5364;
if(cljs.core.truth_(inst_5311)){
var statearr_5403_5437 = state_5364__$1;
(statearr_5403_5437[(1)] = (10));

} else {
var statearr_5404_5438 = state_5364__$1;
(statearr_5404_5438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5410,mults,ensure_mult,p))
;
return ((function (switch__4086__auto__,c__4176__auto___5410,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5405[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5405[(1)] = (1));

return statearr_5405;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5364){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5406){if((e5406 instanceof Object)){
var ex__4090__auto__ = e5406;
var statearr_5407_5439 = state_5364;
(statearr_5407_5439[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5440 = state_5364;
state_5364 = G__5440;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5410,mults,ensure_mult,p))
})();
var state__4178__auto__ = (function (){var statearr_5408 = f__4177__auto__.call(null);
(statearr_5408[(6)] = c__4176__auto___5410);

return statearr_5408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5410,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__5442 = arguments.length;
switch (G__5442) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__5445 = arguments.length;
switch (G__5445) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__5448 = arguments.length;
switch (G__5448) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__4176__auto___5515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5487){
var state_val_5488 = (state_5487[(1)]);
if((state_val_5488 === (7))){
var state_5487__$1 = state_5487;
var statearr_5489_5516 = state_5487__$1;
(statearr_5489_5516[(2)] = null);

(statearr_5489_5516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (1))){
var state_5487__$1 = state_5487;
var statearr_5490_5517 = state_5487__$1;
(statearr_5490_5517[(2)] = null);

(statearr_5490_5517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (4))){
var inst_5451 = (state_5487[(7)]);
var inst_5453 = (inst_5451 < cnt);
var state_5487__$1 = state_5487;
if(cljs.core.truth_(inst_5453)){
var statearr_5491_5518 = state_5487__$1;
(statearr_5491_5518[(1)] = (6));

} else {
var statearr_5492_5519 = state_5487__$1;
(statearr_5492_5519[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (15))){
var inst_5483 = (state_5487[(2)]);
var state_5487__$1 = state_5487;
var statearr_5493_5520 = state_5487__$1;
(statearr_5493_5520[(2)] = inst_5483);

(statearr_5493_5520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (13))){
var inst_5476 = cljs.core.async.close_BANG_.call(null,out);
var state_5487__$1 = state_5487;
var statearr_5494_5521 = state_5487__$1;
(statearr_5494_5521[(2)] = inst_5476);

(statearr_5494_5521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (6))){
var state_5487__$1 = state_5487;
var statearr_5495_5522 = state_5487__$1;
(statearr_5495_5522[(2)] = null);

(statearr_5495_5522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (3))){
var inst_5485 = (state_5487[(2)]);
var state_5487__$1 = state_5487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5487__$1,inst_5485);
} else {
if((state_val_5488 === (12))){
var inst_5473 = (state_5487[(8)]);
var inst_5473__$1 = (state_5487[(2)]);
var inst_5474 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5473__$1);
var state_5487__$1 = (function (){var statearr_5496 = state_5487;
(statearr_5496[(8)] = inst_5473__$1);

return statearr_5496;
})();
if(cljs.core.truth_(inst_5474)){
var statearr_5497_5523 = state_5487__$1;
(statearr_5497_5523[(1)] = (13));

} else {
var statearr_5498_5524 = state_5487__$1;
(statearr_5498_5524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (2))){
var inst_5450 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5451 = (0);
var state_5487__$1 = (function (){var statearr_5499 = state_5487;
(statearr_5499[(7)] = inst_5451);

(statearr_5499[(9)] = inst_5450);

return statearr_5499;
})();
var statearr_5500_5525 = state_5487__$1;
(statearr_5500_5525[(2)] = null);

(statearr_5500_5525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (11))){
var inst_5451 = (state_5487[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5487,(10),Object,null,(9));
var inst_5460 = chs__$1.call(null,inst_5451);
var inst_5461 = done.call(null,inst_5451);
var inst_5462 = cljs.core.async.take_BANG_.call(null,inst_5460,inst_5461);
var state_5487__$1 = state_5487;
var statearr_5501_5526 = state_5487__$1;
(statearr_5501_5526[(2)] = inst_5462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (9))){
var inst_5451 = (state_5487[(7)]);
var inst_5464 = (state_5487[(2)]);
var inst_5465 = (inst_5451 + (1));
var inst_5451__$1 = inst_5465;
var state_5487__$1 = (function (){var statearr_5502 = state_5487;
(statearr_5502[(10)] = inst_5464);

(statearr_5502[(7)] = inst_5451__$1);

return statearr_5502;
})();
var statearr_5503_5527 = state_5487__$1;
(statearr_5503_5527[(2)] = null);

(statearr_5503_5527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (5))){
var inst_5471 = (state_5487[(2)]);
var state_5487__$1 = (function (){var statearr_5504 = state_5487;
(statearr_5504[(11)] = inst_5471);

return statearr_5504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5487__$1,(12),dchan);
} else {
if((state_val_5488 === (14))){
var inst_5473 = (state_5487[(8)]);
var inst_5478 = cljs.core.apply.call(null,f,inst_5473);
var state_5487__$1 = state_5487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5487__$1,(16),out,inst_5478);
} else {
if((state_val_5488 === (16))){
var inst_5480 = (state_5487[(2)]);
var state_5487__$1 = (function (){var statearr_5505 = state_5487;
(statearr_5505[(12)] = inst_5480);

return statearr_5505;
})();
var statearr_5506_5528 = state_5487__$1;
(statearr_5506_5528[(2)] = null);

(statearr_5506_5528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (10))){
var inst_5455 = (state_5487[(2)]);
var inst_5456 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5487__$1 = (function (){var statearr_5507 = state_5487;
(statearr_5507[(13)] = inst_5455);

return statearr_5507;
})();
var statearr_5508_5529 = state_5487__$1;
(statearr_5508_5529[(2)] = inst_5456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5488 === (8))){
var inst_5469 = (state_5487[(2)]);
var state_5487__$1 = state_5487;
var statearr_5509_5530 = state_5487__$1;
(statearr_5509_5530[(2)] = inst_5469);

(statearr_5509_5530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__4086__auto__,c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5510[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5510[(1)] = (1));

return statearr_5510;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5487){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5511){if((e5511 instanceof Object)){
var ex__4090__auto__ = e5511;
var statearr_5512_5531 = state_5487;
(statearr_5512_5531[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5532 = state_5487;
state_5487 = G__5532;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__4178__auto__ = (function (){var statearr_5513 = f__4177__auto__.call(null);
(statearr_5513[(6)] = c__4176__auto___5515);

return statearr_5513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5515,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5535 = arguments.length;
switch (G__5535) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___5589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5589,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5589,out){
return (function (state_5567){
var state_val_5568 = (state_5567[(1)]);
if((state_val_5568 === (7))){
var inst_5546 = (state_5567[(7)]);
var inst_5547 = (state_5567[(8)]);
var inst_5546__$1 = (state_5567[(2)]);
var inst_5547__$1 = cljs.core.nth.call(null,inst_5546__$1,(0),null);
var inst_5548 = cljs.core.nth.call(null,inst_5546__$1,(1),null);
var inst_5549 = (inst_5547__$1 == null);
var state_5567__$1 = (function (){var statearr_5569 = state_5567;
(statearr_5569[(7)] = inst_5546__$1);

(statearr_5569[(9)] = inst_5548);

(statearr_5569[(8)] = inst_5547__$1);

return statearr_5569;
})();
if(cljs.core.truth_(inst_5549)){
var statearr_5570_5590 = state_5567__$1;
(statearr_5570_5590[(1)] = (8));

} else {
var statearr_5571_5591 = state_5567__$1;
(statearr_5571_5591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (1))){
var inst_5536 = cljs.core.vec.call(null,chs);
var inst_5537 = inst_5536;
var state_5567__$1 = (function (){var statearr_5572 = state_5567;
(statearr_5572[(10)] = inst_5537);

return statearr_5572;
})();
var statearr_5573_5592 = state_5567__$1;
(statearr_5573_5592[(2)] = null);

(statearr_5573_5592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (4))){
var inst_5537 = (state_5567[(10)]);
var state_5567__$1 = state_5567;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5567__$1,(7),inst_5537);
} else {
if((state_val_5568 === (6))){
var inst_5563 = (state_5567[(2)]);
var state_5567__$1 = state_5567;
var statearr_5574_5593 = state_5567__$1;
(statearr_5574_5593[(2)] = inst_5563);

(statearr_5574_5593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (3))){
var inst_5565 = (state_5567[(2)]);
var state_5567__$1 = state_5567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5567__$1,inst_5565);
} else {
if((state_val_5568 === (2))){
var inst_5537 = (state_5567[(10)]);
var inst_5539 = cljs.core.count.call(null,inst_5537);
var inst_5540 = (inst_5539 > (0));
var state_5567__$1 = state_5567;
if(cljs.core.truth_(inst_5540)){
var statearr_5576_5594 = state_5567__$1;
(statearr_5576_5594[(1)] = (4));

} else {
var statearr_5577_5595 = state_5567__$1;
(statearr_5577_5595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (11))){
var inst_5537 = (state_5567[(10)]);
var inst_5556 = (state_5567[(2)]);
var tmp5575 = inst_5537;
var inst_5537__$1 = tmp5575;
var state_5567__$1 = (function (){var statearr_5578 = state_5567;
(statearr_5578[(10)] = inst_5537__$1);

(statearr_5578[(11)] = inst_5556);

return statearr_5578;
})();
var statearr_5579_5596 = state_5567__$1;
(statearr_5579_5596[(2)] = null);

(statearr_5579_5596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (9))){
var inst_5547 = (state_5567[(8)]);
var state_5567__$1 = state_5567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5567__$1,(11),out,inst_5547);
} else {
if((state_val_5568 === (5))){
var inst_5561 = cljs.core.async.close_BANG_.call(null,out);
var state_5567__$1 = state_5567;
var statearr_5580_5597 = state_5567__$1;
(statearr_5580_5597[(2)] = inst_5561);

(statearr_5580_5597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (10))){
var inst_5559 = (state_5567[(2)]);
var state_5567__$1 = state_5567;
var statearr_5581_5598 = state_5567__$1;
(statearr_5581_5598[(2)] = inst_5559);

(statearr_5581_5598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5568 === (8))){
var inst_5546 = (state_5567[(7)]);
var inst_5537 = (state_5567[(10)]);
var inst_5548 = (state_5567[(9)]);
var inst_5547 = (state_5567[(8)]);
var inst_5551 = (function (){var cs = inst_5537;
var vec__5542 = inst_5546;
var v = inst_5547;
var c = inst_5548;
return ((function (cs,vec__5542,v,c,inst_5546,inst_5537,inst_5548,inst_5547,state_val_5568,c__4176__auto___5589,out){
return (function (p1__5533_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5533_SHARP_);
});
;})(cs,vec__5542,v,c,inst_5546,inst_5537,inst_5548,inst_5547,state_val_5568,c__4176__auto___5589,out))
})();
var inst_5552 = cljs.core.filterv.call(null,inst_5551,inst_5537);
var inst_5537__$1 = inst_5552;
var state_5567__$1 = (function (){var statearr_5582 = state_5567;
(statearr_5582[(10)] = inst_5537__$1);

return statearr_5582;
})();
var statearr_5583_5599 = state_5567__$1;
(statearr_5583_5599[(2)] = null);

(statearr_5583_5599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5589,out))
;
return ((function (switch__4086__auto__,c__4176__auto___5589,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5584[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5584[(1)] = (1));

return statearr_5584;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5567){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5585){if((e5585 instanceof Object)){
var ex__4090__auto__ = e5585;
var statearr_5586_5600 = state_5567;
(statearr_5586_5600[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5601 = state_5567;
state_5567 = G__5601;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5589,out))
})();
var state__4178__auto__ = (function (){var statearr_5587 = f__4177__auto__.call(null);
(statearr_5587[(6)] = c__4176__auto___5589);

return statearr_5587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5589,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5603 = arguments.length;
switch (G__5603) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___5648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5648,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5648,out){
return (function (state_5627){
var state_val_5628 = (state_5627[(1)]);
if((state_val_5628 === (7))){
var inst_5609 = (state_5627[(7)]);
var inst_5609__$1 = (state_5627[(2)]);
var inst_5610 = (inst_5609__$1 == null);
var inst_5611 = cljs.core.not.call(null,inst_5610);
var state_5627__$1 = (function (){var statearr_5629 = state_5627;
(statearr_5629[(7)] = inst_5609__$1);

return statearr_5629;
})();
if(inst_5611){
var statearr_5630_5649 = state_5627__$1;
(statearr_5630_5649[(1)] = (8));

} else {
var statearr_5631_5650 = state_5627__$1;
(statearr_5631_5650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (1))){
var inst_5604 = (0);
var state_5627__$1 = (function (){var statearr_5632 = state_5627;
(statearr_5632[(8)] = inst_5604);

return statearr_5632;
})();
var statearr_5633_5651 = state_5627__$1;
(statearr_5633_5651[(2)] = null);

(statearr_5633_5651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (4))){
var state_5627__$1 = state_5627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5627__$1,(7),ch);
} else {
if((state_val_5628 === (6))){
var inst_5622 = (state_5627[(2)]);
var state_5627__$1 = state_5627;
var statearr_5634_5652 = state_5627__$1;
(statearr_5634_5652[(2)] = inst_5622);

(statearr_5634_5652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (3))){
var inst_5624 = (state_5627[(2)]);
var inst_5625 = cljs.core.async.close_BANG_.call(null,out);
var state_5627__$1 = (function (){var statearr_5635 = state_5627;
(statearr_5635[(9)] = inst_5624);

return statearr_5635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5627__$1,inst_5625);
} else {
if((state_val_5628 === (2))){
var inst_5604 = (state_5627[(8)]);
var inst_5606 = (inst_5604 < n);
var state_5627__$1 = state_5627;
if(cljs.core.truth_(inst_5606)){
var statearr_5636_5653 = state_5627__$1;
(statearr_5636_5653[(1)] = (4));

} else {
var statearr_5637_5654 = state_5627__$1;
(statearr_5637_5654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (11))){
var inst_5604 = (state_5627[(8)]);
var inst_5614 = (state_5627[(2)]);
var inst_5615 = (inst_5604 + (1));
var inst_5604__$1 = inst_5615;
var state_5627__$1 = (function (){var statearr_5638 = state_5627;
(statearr_5638[(10)] = inst_5614);

(statearr_5638[(8)] = inst_5604__$1);

return statearr_5638;
})();
var statearr_5639_5655 = state_5627__$1;
(statearr_5639_5655[(2)] = null);

(statearr_5639_5655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (9))){
var state_5627__$1 = state_5627;
var statearr_5640_5656 = state_5627__$1;
(statearr_5640_5656[(2)] = null);

(statearr_5640_5656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (5))){
var state_5627__$1 = state_5627;
var statearr_5641_5657 = state_5627__$1;
(statearr_5641_5657[(2)] = null);

(statearr_5641_5657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (10))){
var inst_5619 = (state_5627[(2)]);
var state_5627__$1 = state_5627;
var statearr_5642_5658 = state_5627__$1;
(statearr_5642_5658[(2)] = inst_5619);

(statearr_5642_5658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5628 === (8))){
var inst_5609 = (state_5627[(7)]);
var state_5627__$1 = state_5627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5627__$1,(11),out,inst_5609);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5648,out))
;
return ((function (switch__4086__auto__,c__4176__auto___5648,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5643[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5643[(1)] = (1));

return statearr_5643;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5627){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5644){if((e5644 instanceof Object)){
var ex__4090__auto__ = e5644;
var statearr_5645_5659 = state_5627;
(statearr_5645_5659[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5660 = state_5627;
state_5627 = G__5660;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5648,out))
})();
var state__4178__auto__ = (function (){var statearr_5646 = f__4177__auto__.call(null);
(statearr_5646[(6)] = c__4176__auto___5648);

return statearr_5646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5648,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5662 = (function (f,ch,meta5663){
this.f = f;
this.ch = ch;
this.meta5663 = meta5663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5664,meta5663__$1){
var self__ = this;
var _5664__$1 = this;
return (new cljs.core.async.t_cljs$core$async5662(self__.f,self__.ch,meta5663__$1));
});

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5664){
var self__ = this;
var _5664__$1 = this;
return self__.meta5663;
});

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async5665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5665 = (function (f,ch,meta5663,_,fn1,meta5666){
this.f = f;
this.ch = ch;
this.meta5663 = meta5663;
this._ = _;
this.fn1 = fn1;
this.meta5666 = meta5666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5667,meta5666__$1){
var self__ = this;
var _5667__$1 = this;
return (new cljs.core.async.t_cljs$core$async5665(self__.f,self__.ch,self__.meta5663,self__._,self__.fn1,meta5666__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5667){
var self__ = this;
var _5667__$1 = this;
return self__.meta5666;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5661_SHARP_){
return f1.call(null,(((p1__5661_SHARP_ == null))?null:self__.f.call(null,p1__5661_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5663","meta5663",1017059344,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5662","cljs.core.async/t_cljs$core$async5662",-1932151558,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5666","meta5666",184346475,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async5665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5665";

cljs.core.async.t_cljs$core$async5665.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5665");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5665.
 */
cljs.core.async.__GT_t_cljs$core$async5665 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5665(f__$1,ch__$1,meta5663__$1,___$2,fn1__$1,meta5666){
return (new cljs.core.async.t_cljs$core$async5665(f__$1,ch__$1,meta5663__$1,___$2,fn1__$1,meta5666));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async5665(self__.f,self__.ch,self__.meta5663,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async5662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5663","meta5663",1017059344,null)], null);
});

cljs.core.async.t_cljs$core$async5662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5662";

cljs.core.async.t_cljs$core$async5662.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5662");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5662.
 */
cljs.core.async.__GT_t_cljs$core$async5662 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5662(f__$1,ch__$1,meta5663){
return (new cljs.core.async.t_cljs$core$async5662(f__$1,ch__$1,meta5663));
});

}

return (new cljs.core.async.t_cljs$core$async5662(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async5668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5668 = (function (f,ch,meta5669){
this.f = f;
this.ch = ch;
this.meta5669 = meta5669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5670,meta5669__$1){
var self__ = this;
var _5670__$1 = this;
return (new cljs.core.async.t_cljs$core$async5668(self__.f,self__.ch,meta5669__$1));
});

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5670){
var self__ = this;
var _5670__$1 = this;
return self__.meta5669;
});

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5668.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async5668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5669","meta5669",-912954170,null)], null);
});

cljs.core.async.t_cljs$core$async5668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5668";

cljs.core.async.t_cljs$core$async5668.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5668");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5668.
 */
cljs.core.async.__GT_t_cljs$core$async5668 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5668(f__$1,ch__$1,meta5669){
return (new cljs.core.async.t_cljs$core$async5668(f__$1,ch__$1,meta5669));
});

}

return (new cljs.core.async.t_cljs$core$async5668(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async5671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5671 = (function (p,ch,meta5672){
this.p = p;
this.ch = ch;
this.meta5672 = meta5672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5673,meta5672__$1){
var self__ = this;
var _5673__$1 = this;
return (new cljs.core.async.t_cljs$core$async5671(self__.p,self__.ch,meta5672__$1));
});

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5673){
var self__ = this;
var _5673__$1 = this;
return self__.meta5672;
});

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async5671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async5671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5672","meta5672",1189512585,null)], null);
});

cljs.core.async.t_cljs$core$async5671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async5671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5671";

cljs.core.async.t_cljs$core$async5671.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async5671");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5671.
 */
cljs.core.async.__GT_t_cljs$core$async5671 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5671(p__$1,ch__$1,meta5672){
return (new cljs.core.async.t_cljs$core$async5671(p__$1,ch__$1,meta5672));
});

}

return (new cljs.core.async.t_cljs$core$async5671(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5675 = arguments.length;
switch (G__5675) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___5715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5715,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5715,out){
return (function (state_5696){
var state_val_5697 = (state_5696[(1)]);
if((state_val_5697 === (7))){
var inst_5692 = (state_5696[(2)]);
var state_5696__$1 = state_5696;
var statearr_5698_5716 = state_5696__$1;
(statearr_5698_5716[(2)] = inst_5692);

(statearr_5698_5716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (1))){
var state_5696__$1 = state_5696;
var statearr_5699_5717 = state_5696__$1;
(statearr_5699_5717[(2)] = null);

(statearr_5699_5717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (4))){
var inst_5678 = (state_5696[(7)]);
var inst_5678__$1 = (state_5696[(2)]);
var inst_5679 = (inst_5678__$1 == null);
var state_5696__$1 = (function (){var statearr_5700 = state_5696;
(statearr_5700[(7)] = inst_5678__$1);

return statearr_5700;
})();
if(cljs.core.truth_(inst_5679)){
var statearr_5701_5718 = state_5696__$1;
(statearr_5701_5718[(1)] = (5));

} else {
var statearr_5702_5719 = state_5696__$1;
(statearr_5702_5719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (6))){
var inst_5678 = (state_5696[(7)]);
var inst_5683 = p.call(null,inst_5678);
var state_5696__$1 = state_5696;
if(cljs.core.truth_(inst_5683)){
var statearr_5703_5720 = state_5696__$1;
(statearr_5703_5720[(1)] = (8));

} else {
var statearr_5704_5721 = state_5696__$1;
(statearr_5704_5721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (3))){
var inst_5694 = (state_5696[(2)]);
var state_5696__$1 = state_5696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5696__$1,inst_5694);
} else {
if((state_val_5697 === (2))){
var state_5696__$1 = state_5696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5696__$1,(4),ch);
} else {
if((state_val_5697 === (11))){
var inst_5686 = (state_5696[(2)]);
var state_5696__$1 = state_5696;
var statearr_5705_5722 = state_5696__$1;
(statearr_5705_5722[(2)] = inst_5686);

(statearr_5705_5722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (9))){
var state_5696__$1 = state_5696;
var statearr_5706_5723 = state_5696__$1;
(statearr_5706_5723[(2)] = null);

(statearr_5706_5723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (5))){
var inst_5681 = cljs.core.async.close_BANG_.call(null,out);
var state_5696__$1 = state_5696;
var statearr_5707_5724 = state_5696__$1;
(statearr_5707_5724[(2)] = inst_5681);

(statearr_5707_5724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (10))){
var inst_5689 = (state_5696[(2)]);
var state_5696__$1 = (function (){var statearr_5708 = state_5696;
(statearr_5708[(8)] = inst_5689);

return statearr_5708;
})();
var statearr_5709_5725 = state_5696__$1;
(statearr_5709_5725[(2)] = null);

(statearr_5709_5725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5697 === (8))){
var inst_5678 = (state_5696[(7)]);
var state_5696__$1 = state_5696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5696__$1,(11),out,inst_5678);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5715,out))
;
return ((function (switch__4086__auto__,c__4176__auto___5715,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5710 = [null,null,null,null,null,null,null,null,null];
(statearr_5710[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5710[(1)] = (1));

return statearr_5710;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5696){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5711){if((e5711 instanceof Object)){
var ex__4090__auto__ = e5711;
var statearr_5712_5726 = state_5696;
(statearr_5712_5726[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5727 = state_5696;
state_5696 = G__5727;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5715,out))
})();
var state__4178__auto__ = (function (){var statearr_5713 = f__4177__auto__.call(null);
(statearr_5713[(6)] = c__4176__auto___5715);

return statearr_5713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5715,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5729 = arguments.length;
switch (G__5729) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__4176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto__){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto__){
return (function (state_5792){
var state_val_5793 = (state_5792[(1)]);
if((state_val_5793 === (7))){
var inst_5788 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
var statearr_5794_5832 = state_5792__$1;
(statearr_5794_5832[(2)] = inst_5788);

(statearr_5794_5832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (20))){
var inst_5758 = (state_5792[(7)]);
var inst_5769 = (state_5792[(2)]);
var inst_5770 = cljs.core.next.call(null,inst_5758);
var inst_5744 = inst_5770;
var inst_5745 = null;
var inst_5746 = (0);
var inst_5747 = (0);
var state_5792__$1 = (function (){var statearr_5795 = state_5792;
(statearr_5795[(8)] = inst_5746);

(statearr_5795[(9)] = inst_5744);

(statearr_5795[(10)] = inst_5745);

(statearr_5795[(11)] = inst_5747);

(statearr_5795[(12)] = inst_5769);

return statearr_5795;
})();
var statearr_5796_5833 = state_5792__$1;
(statearr_5796_5833[(2)] = null);

(statearr_5796_5833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (1))){
var state_5792__$1 = state_5792;
var statearr_5797_5834 = state_5792__$1;
(statearr_5797_5834[(2)] = null);

(statearr_5797_5834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (4))){
var inst_5733 = (state_5792[(13)]);
var inst_5733__$1 = (state_5792[(2)]);
var inst_5734 = (inst_5733__$1 == null);
var state_5792__$1 = (function (){var statearr_5798 = state_5792;
(statearr_5798[(13)] = inst_5733__$1);

return statearr_5798;
})();
if(cljs.core.truth_(inst_5734)){
var statearr_5799_5835 = state_5792__$1;
(statearr_5799_5835[(1)] = (5));

} else {
var statearr_5800_5836 = state_5792__$1;
(statearr_5800_5836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (15))){
var state_5792__$1 = state_5792;
var statearr_5804_5837 = state_5792__$1;
(statearr_5804_5837[(2)] = null);

(statearr_5804_5837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (21))){
var state_5792__$1 = state_5792;
var statearr_5805_5838 = state_5792__$1;
(statearr_5805_5838[(2)] = null);

(statearr_5805_5838[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (13))){
var inst_5746 = (state_5792[(8)]);
var inst_5744 = (state_5792[(9)]);
var inst_5745 = (state_5792[(10)]);
var inst_5747 = (state_5792[(11)]);
var inst_5754 = (state_5792[(2)]);
var inst_5755 = (inst_5747 + (1));
var tmp5801 = inst_5746;
var tmp5802 = inst_5744;
var tmp5803 = inst_5745;
var inst_5744__$1 = tmp5802;
var inst_5745__$1 = tmp5803;
var inst_5746__$1 = tmp5801;
var inst_5747__$1 = inst_5755;
var state_5792__$1 = (function (){var statearr_5806 = state_5792;
(statearr_5806[(8)] = inst_5746__$1);

(statearr_5806[(9)] = inst_5744__$1);

(statearr_5806[(14)] = inst_5754);

(statearr_5806[(10)] = inst_5745__$1);

(statearr_5806[(11)] = inst_5747__$1);

return statearr_5806;
})();
var statearr_5807_5839 = state_5792__$1;
(statearr_5807_5839[(2)] = null);

(statearr_5807_5839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (22))){
var state_5792__$1 = state_5792;
var statearr_5808_5840 = state_5792__$1;
(statearr_5808_5840[(2)] = null);

(statearr_5808_5840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (6))){
var inst_5733 = (state_5792[(13)]);
var inst_5742 = f.call(null,inst_5733);
var inst_5743 = cljs.core.seq.call(null,inst_5742);
var inst_5744 = inst_5743;
var inst_5745 = null;
var inst_5746 = (0);
var inst_5747 = (0);
var state_5792__$1 = (function (){var statearr_5809 = state_5792;
(statearr_5809[(8)] = inst_5746);

(statearr_5809[(9)] = inst_5744);

(statearr_5809[(10)] = inst_5745);

(statearr_5809[(11)] = inst_5747);

return statearr_5809;
})();
var statearr_5810_5841 = state_5792__$1;
(statearr_5810_5841[(2)] = null);

(statearr_5810_5841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (17))){
var inst_5758 = (state_5792[(7)]);
var inst_5762 = cljs.core.chunk_first.call(null,inst_5758);
var inst_5763 = cljs.core.chunk_rest.call(null,inst_5758);
var inst_5764 = cljs.core.count.call(null,inst_5762);
var inst_5744 = inst_5763;
var inst_5745 = inst_5762;
var inst_5746 = inst_5764;
var inst_5747 = (0);
var state_5792__$1 = (function (){var statearr_5811 = state_5792;
(statearr_5811[(8)] = inst_5746);

(statearr_5811[(9)] = inst_5744);

(statearr_5811[(10)] = inst_5745);

(statearr_5811[(11)] = inst_5747);

return statearr_5811;
})();
var statearr_5812_5842 = state_5792__$1;
(statearr_5812_5842[(2)] = null);

(statearr_5812_5842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (3))){
var inst_5790 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5792__$1,inst_5790);
} else {
if((state_val_5793 === (12))){
var inst_5778 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
var statearr_5813_5843 = state_5792__$1;
(statearr_5813_5843[(2)] = inst_5778);

(statearr_5813_5843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (2))){
var state_5792__$1 = state_5792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5792__$1,(4),in$);
} else {
if((state_val_5793 === (23))){
var inst_5786 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
var statearr_5814_5844 = state_5792__$1;
(statearr_5814_5844[(2)] = inst_5786);

(statearr_5814_5844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (19))){
var inst_5773 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
var statearr_5815_5845 = state_5792__$1;
(statearr_5815_5845[(2)] = inst_5773);

(statearr_5815_5845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (11))){
var inst_5758 = (state_5792[(7)]);
var inst_5744 = (state_5792[(9)]);
var inst_5758__$1 = cljs.core.seq.call(null,inst_5744);
var state_5792__$1 = (function (){var statearr_5816 = state_5792;
(statearr_5816[(7)] = inst_5758__$1);

return statearr_5816;
})();
if(inst_5758__$1){
var statearr_5817_5846 = state_5792__$1;
(statearr_5817_5846[(1)] = (14));

} else {
var statearr_5818_5847 = state_5792__$1;
(statearr_5818_5847[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (9))){
var inst_5780 = (state_5792[(2)]);
var inst_5781 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5792__$1 = (function (){var statearr_5819 = state_5792;
(statearr_5819[(15)] = inst_5780);

return statearr_5819;
})();
if(cljs.core.truth_(inst_5781)){
var statearr_5820_5848 = state_5792__$1;
(statearr_5820_5848[(1)] = (21));

} else {
var statearr_5821_5849 = state_5792__$1;
(statearr_5821_5849[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (5))){
var inst_5736 = cljs.core.async.close_BANG_.call(null,out);
var state_5792__$1 = state_5792;
var statearr_5822_5850 = state_5792__$1;
(statearr_5822_5850[(2)] = inst_5736);

(statearr_5822_5850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (14))){
var inst_5758 = (state_5792[(7)]);
var inst_5760 = cljs.core.chunked_seq_QMARK_.call(null,inst_5758);
var state_5792__$1 = state_5792;
if(inst_5760){
var statearr_5823_5851 = state_5792__$1;
(statearr_5823_5851[(1)] = (17));

} else {
var statearr_5824_5852 = state_5792__$1;
(statearr_5824_5852[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (16))){
var inst_5776 = (state_5792[(2)]);
var state_5792__$1 = state_5792;
var statearr_5825_5853 = state_5792__$1;
(statearr_5825_5853[(2)] = inst_5776);

(statearr_5825_5853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5793 === (10))){
var inst_5745 = (state_5792[(10)]);
var inst_5747 = (state_5792[(11)]);
var inst_5752 = cljs.core._nth.call(null,inst_5745,inst_5747);
var state_5792__$1 = state_5792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5792__$1,(13),out,inst_5752);
} else {
if((state_val_5793 === (18))){
var inst_5758 = (state_5792[(7)]);
var inst_5767 = cljs.core.first.call(null,inst_5758);
var state_5792__$1 = state_5792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5792__$1,(20),out,inst_5767);
} else {
if((state_val_5793 === (8))){
var inst_5746 = (state_5792[(8)]);
var inst_5747 = (state_5792[(11)]);
var inst_5749 = (inst_5747 < inst_5746);
var inst_5750 = inst_5749;
var state_5792__$1 = state_5792;
if(cljs.core.truth_(inst_5750)){
var statearr_5826_5854 = state_5792__$1;
(statearr_5826_5854[(1)] = (10));

} else {
var statearr_5827_5855 = state_5792__$1;
(statearr_5827_5855[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto__))
;
return ((function (switch__4086__auto__,c__4176__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____0 = (function (){
var statearr_5828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5828[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__);

(statearr_5828[(1)] = (1));

return statearr_5828;
});
var cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____1 = (function (state_5792){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5829){if((e5829 instanceof Object)){
var ex__4090__auto__ = e5829;
var statearr_5830_5856 = state_5792;
(statearr_5830_5856[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5857 = state_5792;
state_5792 = G__5857;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__ = function(state_5792){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____1.call(this,state_5792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__4087__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto__))
})();
var state__4178__auto__ = (function (){var statearr_5831 = f__4177__auto__.call(null);
(statearr_5831[(6)] = c__4176__auto__);

return statearr_5831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto__))
);

return c__4176__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5859 = arguments.length;
switch (G__5859) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5862 = arguments.length;
switch (G__5862) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5865 = arguments.length;
switch (G__5865) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___5912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5912,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5912,out){
return (function (state_5889){
var state_val_5890 = (state_5889[(1)]);
if((state_val_5890 === (7))){
var inst_5884 = (state_5889[(2)]);
var state_5889__$1 = state_5889;
var statearr_5891_5913 = state_5889__$1;
(statearr_5891_5913[(2)] = inst_5884);

(statearr_5891_5913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (1))){
var inst_5866 = null;
var state_5889__$1 = (function (){var statearr_5892 = state_5889;
(statearr_5892[(7)] = inst_5866);

return statearr_5892;
})();
var statearr_5893_5914 = state_5889__$1;
(statearr_5893_5914[(2)] = null);

(statearr_5893_5914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (4))){
var inst_5869 = (state_5889[(8)]);
var inst_5869__$1 = (state_5889[(2)]);
var inst_5870 = (inst_5869__$1 == null);
var inst_5871 = cljs.core.not.call(null,inst_5870);
var state_5889__$1 = (function (){var statearr_5894 = state_5889;
(statearr_5894[(8)] = inst_5869__$1);

return statearr_5894;
})();
if(inst_5871){
var statearr_5895_5915 = state_5889__$1;
(statearr_5895_5915[(1)] = (5));

} else {
var statearr_5896_5916 = state_5889__$1;
(statearr_5896_5916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (6))){
var state_5889__$1 = state_5889;
var statearr_5897_5917 = state_5889__$1;
(statearr_5897_5917[(2)] = null);

(statearr_5897_5917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (3))){
var inst_5886 = (state_5889[(2)]);
var inst_5887 = cljs.core.async.close_BANG_.call(null,out);
var state_5889__$1 = (function (){var statearr_5898 = state_5889;
(statearr_5898[(9)] = inst_5886);

return statearr_5898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5889__$1,inst_5887);
} else {
if((state_val_5890 === (2))){
var state_5889__$1 = state_5889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5889__$1,(4),ch);
} else {
if((state_val_5890 === (11))){
var inst_5869 = (state_5889[(8)]);
var inst_5878 = (state_5889[(2)]);
var inst_5866 = inst_5869;
var state_5889__$1 = (function (){var statearr_5899 = state_5889;
(statearr_5899[(7)] = inst_5866);

(statearr_5899[(10)] = inst_5878);

return statearr_5899;
})();
var statearr_5900_5918 = state_5889__$1;
(statearr_5900_5918[(2)] = null);

(statearr_5900_5918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (9))){
var inst_5869 = (state_5889[(8)]);
var state_5889__$1 = state_5889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5889__$1,(11),out,inst_5869);
} else {
if((state_val_5890 === (5))){
var inst_5869 = (state_5889[(8)]);
var inst_5866 = (state_5889[(7)]);
var inst_5873 = cljs.core._EQ_.call(null,inst_5869,inst_5866);
var state_5889__$1 = state_5889;
if(inst_5873){
var statearr_5902_5919 = state_5889__$1;
(statearr_5902_5919[(1)] = (8));

} else {
var statearr_5903_5920 = state_5889__$1;
(statearr_5903_5920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (10))){
var inst_5881 = (state_5889[(2)]);
var state_5889__$1 = state_5889;
var statearr_5904_5921 = state_5889__$1;
(statearr_5904_5921[(2)] = inst_5881);

(statearr_5904_5921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5890 === (8))){
var inst_5866 = (state_5889[(7)]);
var tmp5901 = inst_5866;
var inst_5866__$1 = tmp5901;
var state_5889__$1 = (function (){var statearr_5905 = state_5889;
(statearr_5905[(7)] = inst_5866__$1);

return statearr_5905;
})();
var statearr_5906_5922 = state_5889__$1;
(statearr_5906_5922[(2)] = null);

(statearr_5906_5922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5912,out))
;
return ((function (switch__4086__auto__,c__4176__auto___5912,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5907[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5907[(1)] = (1));

return statearr_5907;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5889){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5908){if((e5908 instanceof Object)){
var ex__4090__auto__ = e5908;
var statearr_5909_5923 = state_5889;
(statearr_5909_5923[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5924 = state_5889;
state_5889 = G__5924;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5912,out))
})();
var state__4178__auto__ = (function (){var statearr_5910 = f__4177__auto__.call(null);
(statearr_5910[(6)] = c__4176__auto___5912);

return statearr_5910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5912,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5926 = arguments.length;
switch (G__5926) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___5992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___5992,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___5992,out){
return (function (state_5964){
var state_val_5965 = (state_5964[(1)]);
if((state_val_5965 === (7))){
var inst_5960 = (state_5964[(2)]);
var state_5964__$1 = state_5964;
var statearr_5966_5993 = state_5964__$1;
(statearr_5966_5993[(2)] = inst_5960);

(statearr_5966_5993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (1))){
var inst_5927 = (new Array(n));
var inst_5928 = inst_5927;
var inst_5929 = (0);
var state_5964__$1 = (function (){var statearr_5967 = state_5964;
(statearr_5967[(7)] = inst_5929);

(statearr_5967[(8)] = inst_5928);

return statearr_5967;
})();
var statearr_5968_5994 = state_5964__$1;
(statearr_5968_5994[(2)] = null);

(statearr_5968_5994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (4))){
var inst_5932 = (state_5964[(9)]);
var inst_5932__$1 = (state_5964[(2)]);
var inst_5933 = (inst_5932__$1 == null);
var inst_5934 = cljs.core.not.call(null,inst_5933);
var state_5964__$1 = (function (){var statearr_5969 = state_5964;
(statearr_5969[(9)] = inst_5932__$1);

return statearr_5969;
})();
if(inst_5934){
var statearr_5970_5995 = state_5964__$1;
(statearr_5970_5995[(1)] = (5));

} else {
var statearr_5971_5996 = state_5964__$1;
(statearr_5971_5996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (15))){
var inst_5954 = (state_5964[(2)]);
var state_5964__$1 = state_5964;
var statearr_5972_5997 = state_5964__$1;
(statearr_5972_5997[(2)] = inst_5954);

(statearr_5972_5997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (13))){
var state_5964__$1 = state_5964;
var statearr_5973_5998 = state_5964__$1;
(statearr_5973_5998[(2)] = null);

(statearr_5973_5998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (6))){
var inst_5929 = (state_5964[(7)]);
var inst_5950 = (inst_5929 > (0));
var state_5964__$1 = state_5964;
if(cljs.core.truth_(inst_5950)){
var statearr_5974_5999 = state_5964__$1;
(statearr_5974_5999[(1)] = (12));

} else {
var statearr_5975_6000 = state_5964__$1;
(statearr_5975_6000[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (3))){
var inst_5962 = (state_5964[(2)]);
var state_5964__$1 = state_5964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5964__$1,inst_5962);
} else {
if((state_val_5965 === (12))){
var inst_5928 = (state_5964[(8)]);
var inst_5952 = cljs.core.vec.call(null,inst_5928);
var state_5964__$1 = state_5964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5964__$1,(15),out,inst_5952);
} else {
if((state_val_5965 === (2))){
var state_5964__$1 = state_5964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5964__$1,(4),ch);
} else {
if((state_val_5965 === (11))){
var inst_5944 = (state_5964[(2)]);
var inst_5945 = (new Array(n));
var inst_5928 = inst_5945;
var inst_5929 = (0);
var state_5964__$1 = (function (){var statearr_5976 = state_5964;
(statearr_5976[(7)] = inst_5929);

(statearr_5976[(10)] = inst_5944);

(statearr_5976[(8)] = inst_5928);

return statearr_5976;
})();
var statearr_5977_6001 = state_5964__$1;
(statearr_5977_6001[(2)] = null);

(statearr_5977_6001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (9))){
var inst_5928 = (state_5964[(8)]);
var inst_5942 = cljs.core.vec.call(null,inst_5928);
var state_5964__$1 = state_5964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5964__$1,(11),out,inst_5942);
} else {
if((state_val_5965 === (5))){
var inst_5929 = (state_5964[(7)]);
var inst_5937 = (state_5964[(11)]);
var inst_5932 = (state_5964[(9)]);
var inst_5928 = (state_5964[(8)]);
var inst_5936 = (inst_5928[inst_5929] = inst_5932);
var inst_5937__$1 = (inst_5929 + (1));
var inst_5938 = (inst_5937__$1 < n);
var state_5964__$1 = (function (){var statearr_5978 = state_5964;
(statearr_5978[(12)] = inst_5936);

(statearr_5978[(11)] = inst_5937__$1);

return statearr_5978;
})();
if(cljs.core.truth_(inst_5938)){
var statearr_5979_6002 = state_5964__$1;
(statearr_5979_6002[(1)] = (8));

} else {
var statearr_5980_6003 = state_5964__$1;
(statearr_5980_6003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (14))){
var inst_5957 = (state_5964[(2)]);
var inst_5958 = cljs.core.async.close_BANG_.call(null,out);
var state_5964__$1 = (function (){var statearr_5982 = state_5964;
(statearr_5982[(13)] = inst_5957);

return statearr_5982;
})();
var statearr_5983_6004 = state_5964__$1;
(statearr_5983_6004[(2)] = inst_5958);

(statearr_5983_6004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (10))){
var inst_5948 = (state_5964[(2)]);
var state_5964__$1 = state_5964;
var statearr_5984_6005 = state_5964__$1;
(statearr_5984_6005[(2)] = inst_5948);

(statearr_5984_6005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5965 === (8))){
var inst_5937 = (state_5964[(11)]);
var inst_5928 = (state_5964[(8)]);
var tmp5981 = inst_5928;
var inst_5928__$1 = tmp5981;
var inst_5929 = inst_5937;
var state_5964__$1 = (function (){var statearr_5985 = state_5964;
(statearr_5985[(7)] = inst_5929);

(statearr_5985[(8)] = inst_5928__$1);

return statearr_5985;
})();
var statearr_5986_6006 = state_5964__$1;
(statearr_5986_6006[(2)] = null);

(statearr_5986_6006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___5992,out))
;
return ((function (switch__4086__auto__,c__4176__auto___5992,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_5987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5987[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_5987[(1)] = (1));

return statearr_5987;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_5964){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_5964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e5988){if((e5988 instanceof Object)){
var ex__4090__auto__ = e5988;
var statearr_5989_6007 = state_5964;
(statearr_5989_6007[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6008 = state_5964;
state_5964 = G__6008;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_5964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_5964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___5992,out))
})();
var state__4178__auto__ = (function (){var statearr_5990 = f__4177__auto__.call(null);
(statearr_5990[(6)] = c__4176__auto___5992);

return statearr_5990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___5992,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6010 = arguments.length;
switch (G__6010) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__4176__auto___6080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__4176__auto___6080,out){
return (function (){
var f__4177__auto__ = (function (){var switch__4086__auto__ = ((function (c__4176__auto___6080,out){
return (function (state_6052){
var state_val_6053 = (state_6052[(1)]);
if((state_val_6053 === (7))){
var inst_6048 = (state_6052[(2)]);
var state_6052__$1 = state_6052;
var statearr_6054_6081 = state_6052__$1;
(statearr_6054_6081[(2)] = inst_6048);

(statearr_6054_6081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (1))){
var inst_6011 = [];
var inst_6012 = inst_6011;
var inst_6013 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6052__$1 = (function (){var statearr_6055 = state_6052;
(statearr_6055[(7)] = inst_6013);

(statearr_6055[(8)] = inst_6012);

return statearr_6055;
})();
var statearr_6056_6082 = state_6052__$1;
(statearr_6056_6082[(2)] = null);

(statearr_6056_6082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (4))){
var inst_6016 = (state_6052[(9)]);
var inst_6016__$1 = (state_6052[(2)]);
var inst_6017 = (inst_6016__$1 == null);
var inst_6018 = cljs.core.not.call(null,inst_6017);
var state_6052__$1 = (function (){var statearr_6057 = state_6052;
(statearr_6057[(9)] = inst_6016__$1);

return statearr_6057;
})();
if(inst_6018){
var statearr_6058_6083 = state_6052__$1;
(statearr_6058_6083[(1)] = (5));

} else {
var statearr_6059_6084 = state_6052__$1;
(statearr_6059_6084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (15))){
var inst_6042 = (state_6052[(2)]);
var state_6052__$1 = state_6052;
var statearr_6060_6085 = state_6052__$1;
(statearr_6060_6085[(2)] = inst_6042);

(statearr_6060_6085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (13))){
var state_6052__$1 = state_6052;
var statearr_6061_6086 = state_6052__$1;
(statearr_6061_6086[(2)] = null);

(statearr_6061_6086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (6))){
var inst_6012 = (state_6052[(8)]);
var inst_6037 = inst_6012.length;
var inst_6038 = (inst_6037 > (0));
var state_6052__$1 = state_6052;
if(cljs.core.truth_(inst_6038)){
var statearr_6062_6087 = state_6052__$1;
(statearr_6062_6087[(1)] = (12));

} else {
var statearr_6063_6088 = state_6052__$1;
(statearr_6063_6088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (3))){
var inst_6050 = (state_6052[(2)]);
var state_6052__$1 = state_6052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6052__$1,inst_6050);
} else {
if((state_val_6053 === (12))){
var inst_6012 = (state_6052[(8)]);
var inst_6040 = cljs.core.vec.call(null,inst_6012);
var state_6052__$1 = state_6052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6052__$1,(15),out,inst_6040);
} else {
if((state_val_6053 === (2))){
var state_6052__$1 = state_6052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6052__$1,(4),ch);
} else {
if((state_val_6053 === (11))){
var inst_6016 = (state_6052[(9)]);
var inst_6020 = (state_6052[(10)]);
var inst_6030 = (state_6052[(2)]);
var inst_6031 = [];
var inst_6032 = inst_6031.push(inst_6016);
var inst_6012 = inst_6031;
var inst_6013 = inst_6020;
var state_6052__$1 = (function (){var statearr_6064 = state_6052;
(statearr_6064[(7)] = inst_6013);

(statearr_6064[(11)] = inst_6030);

(statearr_6064[(12)] = inst_6032);

(statearr_6064[(8)] = inst_6012);

return statearr_6064;
})();
var statearr_6065_6089 = state_6052__$1;
(statearr_6065_6089[(2)] = null);

(statearr_6065_6089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (9))){
var inst_6012 = (state_6052[(8)]);
var inst_6028 = cljs.core.vec.call(null,inst_6012);
var state_6052__$1 = state_6052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6052__$1,(11),out,inst_6028);
} else {
if((state_val_6053 === (5))){
var inst_6013 = (state_6052[(7)]);
var inst_6016 = (state_6052[(9)]);
var inst_6020 = (state_6052[(10)]);
var inst_6020__$1 = f.call(null,inst_6016);
var inst_6021 = cljs.core._EQ_.call(null,inst_6020__$1,inst_6013);
var inst_6022 = cljs.core.keyword_identical_QMARK_.call(null,inst_6013,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6023 = ((inst_6021) || (inst_6022));
var state_6052__$1 = (function (){var statearr_6066 = state_6052;
(statearr_6066[(10)] = inst_6020__$1);

return statearr_6066;
})();
if(cljs.core.truth_(inst_6023)){
var statearr_6067_6090 = state_6052__$1;
(statearr_6067_6090[(1)] = (8));

} else {
var statearr_6068_6091 = state_6052__$1;
(statearr_6068_6091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (14))){
var inst_6045 = (state_6052[(2)]);
var inst_6046 = cljs.core.async.close_BANG_.call(null,out);
var state_6052__$1 = (function (){var statearr_6070 = state_6052;
(statearr_6070[(13)] = inst_6045);

return statearr_6070;
})();
var statearr_6071_6092 = state_6052__$1;
(statearr_6071_6092[(2)] = inst_6046);

(statearr_6071_6092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (10))){
var inst_6035 = (state_6052[(2)]);
var state_6052__$1 = state_6052;
var statearr_6072_6093 = state_6052__$1;
(statearr_6072_6093[(2)] = inst_6035);

(statearr_6072_6093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6053 === (8))){
var inst_6016 = (state_6052[(9)]);
var inst_6020 = (state_6052[(10)]);
var inst_6012 = (state_6052[(8)]);
var inst_6025 = inst_6012.push(inst_6016);
var tmp6069 = inst_6012;
var inst_6012__$1 = tmp6069;
var inst_6013 = inst_6020;
var state_6052__$1 = (function (){var statearr_6073 = state_6052;
(statearr_6073[(7)] = inst_6013);

(statearr_6073[(14)] = inst_6025);

(statearr_6073[(8)] = inst_6012__$1);

return statearr_6073;
})();
var statearr_6074_6094 = state_6052__$1;
(statearr_6074_6094[(2)] = null);

(statearr_6074_6094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__4176__auto___6080,out))
;
return ((function (switch__4086__auto__,c__4176__auto___6080,out){
return (function() {
var cljs$core$async$state_machine__4087__auto__ = null;
var cljs$core$async$state_machine__4087__auto____0 = (function (){
var statearr_6075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6075[(0)] = cljs$core$async$state_machine__4087__auto__);

(statearr_6075[(1)] = (1));

return statearr_6075;
});
var cljs$core$async$state_machine__4087__auto____1 = (function (state_6052){
while(true){
var ret_value__4088__auto__ = (function (){try{while(true){
var result__4089__auto__ = switch__4086__auto__.call(null,state_6052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__4089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__4089__auto__;
}
break;
}
}catch (e6076){if((e6076 instanceof Object)){
var ex__4090__auto__ = e6076;
var statearr_6077_6095 = state_6052;
(statearr_6077_6095[(5)] = ex__4090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__4088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6096 = state_6052;
state_6052 = G__6096;
continue;
} else {
return ret_value__4088__auto__;
}
break;
}
});
cljs$core$async$state_machine__4087__auto__ = function(state_6052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__4087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__4087__auto____1.call(this,state_6052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__4087__auto____0;
cljs$core$async$state_machine__4087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__4087__auto____1;
return cljs$core$async$state_machine__4087__auto__;
})()
;})(switch__4086__auto__,c__4176__auto___6080,out))
})();
var state__4178__auto__ = (function (){var statearr_6078 = f__4177__auto__.call(null);
(statearr_6078[(6)] = c__4176__auto___6080);

return statearr_6078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__4178__auto__);
});})(c__4176__auto___6080,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542213432129
