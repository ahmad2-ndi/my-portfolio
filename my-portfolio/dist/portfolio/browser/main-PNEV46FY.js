var gw=Object.defineProperty,vw=Object.defineProperties;var yw=Object.getOwnPropertyDescriptors;var K_=Object.getOwnPropertySymbols;var _w=Object.prototype.hasOwnProperty,xw=Object.prototype.propertyIsEnumerable;var Q_=(n,e,t)=>e in n?gw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ae=(n,e)=>{for(var t in e||={})_w.call(e,t)&&Q_(n,t,e[t]);if(K_)for(var t of K_(e))xw.call(e,t)&&Q_(n,t,e[t]);return n},et=(n,e)=>vw(n,yw(e));var hn=null,Xl=!1,Np=1,Mw=null,pn=Symbol("SIGNAL");function je(n){let e=hn;return hn=n,e}function Kl(){return hn}var gs={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function vs(n){if(Xl)throw new Error("");if(hn===null)return;hn.consumerOnSignalRead(n);let e=hn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=hn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:hn.producers,t!==void 0&&t.producer===n)){hn.producersTail=t,t.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===hn&&(!i||Sw(r,hn)))return;let o=_s(hn),s={producer:n,consumer:hn,nextProducer:t,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};hn.producersTail=s,e!==void 0?e.nextProducer=s:hn.producers=s,o&&i0(n,s)}function e0(){Np++}function Ql(n){if(!(_s(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Np)){if(!n.producerMustRecompute(n)&&!eu(n)){Jl(n);return}n.producerRecomputeValue(n),Jl(n)}}function Pp(n){if(n.consumers===void 0)return;let e=Xl;Xl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||bw(i)}}finally{Xl=e}}function Op(){return hn?.consumerAllowSignalWrites!==!1}function bw(n){n.dirty=!0,Pp(n),n.consumerMarkedDirty?.(n)}function Jl(n){n.dirty=!1,n.lastCleanEpoch=Np}function ys(n){return n&&t0(n),je(n)}function t0(n){n.producersTail=void 0,n.recomputing=!0}function Ha(n,e){je(e),n&&n0(n)}function n0(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(_s(n))do t=Fp(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function eu(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(Ql(t),i!==t.version))return!0}return!1}function za(n){if(_s(n)){let e=n.producers;for(;e!==void 0;)e=Fp(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function i0(n,e){let t=n.consumersTail,i=_s(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)i0(r.producer,r)}function Fp(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!_s(e)){let o=e.producers;for(;o!==void 0;)o=Fp(o)}return t}function _s(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function tu(n){Mw?.(n)}function Sw(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function nu(n,e){return Object.is(n,e)}function iu(n,e){let t=Object.create(Ew);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(Ql(t),vs(t),t.value===Va)throw t.error;return t.value};return i[pn]=t,tu(t),i}var Yl=Symbol("UNSET"),Zl=Symbol("COMPUTING"),Va=Symbol("ERRORED"),Ew=et(ae({},gs),{value:Yl,dirty:!0,error:null,equal:nu,kind:"computed",producerMustRecompute(n){return n.value===Yl||n.value===Zl},producerRecomputeValue(n){if(n.value===Zl)throw new Error("");let e=n.value;n.value=Zl;let t=ys(n),i,r=!1;try{i=n.computation(),je(null),r=e!==Yl&&e!==Va&&i!==Va&&n.equal(e,i)}catch(o){i=Va,n.error=o}finally{Ha(n,t)}if(r){n.value=e;return}n.value=i,n.version++}});function Cw(){throw new Error}var r0=Cw;function o0(n){r0(n)}function Lp(n){r0=n}var ww=null;function kp(n,e){let t=Object.create(ru);t.value=n,e!==void 0&&(t.equal=e);let i=()=>s0(t);return i[pn]=t,tu(t),[i,s=>xs(t,s),s=>Up(t,s)]}function s0(n){return vs(n),n.value}function xs(n,e){Op()||o0(n),n.equal(n.value,e)||(n.value=e,Dw(n))}function Up(n,e){Op()||o0(n),xs(n,e(n.value))}var ru=et(ae({},gs),{equal:nu,value:void 0,kind:"signal"});function Dw(n){n.version++,e0(),Pp(n),ww?.(n)}function ze(n){return typeof n=="function"}function Ms(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ou=Ms(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ga(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var nn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(ze(i))try{i()}catch(o){e=o instanceof ou?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{a0(o)}catch(s){e=e??[],s instanceof ou?e=[...e,...s.errors]:e.push(s)}}if(e)throw new ou(e)}}add(e){var t;if(e&&e!==this)if(this.closed)a0(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ga(t,e)}remove(e){let{_finalizers:t}=this;t&&Ga(t,e),e instanceof n&&e._removeParent(this)}};nn.EMPTY=(()=>{let n=new nn;return n.closed=!0,n})();var Bp=nn.EMPTY;function su(n){return n instanceof nn||n&&"closed"in n&&ze(n.remove)&&ze(n.add)&&ze(n.unsubscribe)}function a0(n){ze(n)?n():n.unsubscribe()}var di={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var bs={setTimeout(n,e,...t){let{delegate:i}=bs;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=bs;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function au(n){bs.setTimeout(()=>{let{onUnhandledError:e}=di;if(e)e(n);else throw n})}function ja(){}var c0=Vp("C",void 0,void 0);function l0(n){return Vp("E",void 0,n)}function u0(n){return Vp("N",n,void 0)}function Vp(n,e,t){return{kind:n,value:e,error:t}}var vo=null;function Ss(n){if(di.useDeprecatedSynchronousErrorHandling){let e=!vo;if(e&&(vo={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vo;if(vo=null,t)throw i}}else n()}function d0(n){di.useDeprecatedSynchronousErrorHandling&&vo&&(vo.errorThrown=!0,vo.error=n)}var yo=class extends nn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,su(e)&&e.add(this)):this.destination=Iw}static create(e,t,i){return new Es(e,t,i)}next(e){this.isStopped?zp(u0(e),this):this._next(e)}error(e){this.isStopped?zp(l0(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?zp(c0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Tw=Function.prototype.bind;function Hp(n,e){return Tw.call(n,e)}var Gp=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){cu(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){cu(i)}else cu(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){cu(t)}}},Es=class extends yo{constructor(e,t,i){super();let r;if(ze(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let o;this&&di.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Hp(e.next,o),error:e.error&&Hp(e.error,o),complete:e.complete&&Hp(e.complete,o)}):r=e}this.destination=new Gp(r)}};function cu(n){di.useDeprecatedSynchronousErrorHandling?d0(n):au(n)}function Aw(n){throw n}function zp(n,e){let{onStoppedNotification:t}=di;t&&bs.setTimeout(()=>t(n,e))}var Iw={closed:!0,next:ja,error:Aw,complete:ja};var Cs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function fi(n){return n}function jp(...n){return Wp(n)}function Wp(n){return n.length===0?fi:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var st=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let o=Nw(t)?t:new Es(t,i,r);return Ss(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=f0(i),new i((r,o)=>{let s=new Es({next:a=>{try{t(a)}catch(c){o(c),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Cs](){return this}pipe(...t){return Wp(t)(this)}toPromise(t){return t=f0(t),new t((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return n.create=e=>new n(e),n})();function f0(n){var e;return(e=n??di.Promise)!==null&&e!==void 0?e:Promise}function Rw(n){return n&&ze(n.next)&&ze(n.error)&&ze(n.complete)}function Nw(n){return n&&n instanceof yo||Rw(n)&&su(n)}function Pw(n){return ze(n?.lift)}function ht(n){return e=>{if(Pw(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function pt(n,e,t,i,r){return new $p(n,e,t,i,r)}var $p=class extends yo{constructor(e,t,i,r,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var h0=Ms(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var jt=(()=>{class n extends st{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new lu(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new h0}next(t){Ss(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Ss(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Ss(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Bp:(this.currentObservers=null,o.push(t),new nn(()=>{this.currentObservers=null,Ga(o,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:o}=this;i?t.error(r):o&&t.complete()}asObservable(){let t=new st;return t.source=this,t}}return n.create=(e,t)=>new lu(e,t),n})(),lu=class extends jt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Bp}};var rn=class extends jt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new st(n=>n.complete());function p0(n){return n&&ze(n.schedule)}function m0(n){return n[n.length-1]}function uu(n){return ze(m0(n))?n.pop():void 0}function Ar(n){return p0(m0(n))?n.pop():void 0}function v0(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(u){try{l(i.next(u))}catch(f){s(f)}}function c(u){try{l(i.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function g0(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _o(n){return this instanceof _o?(this.v=n,this):new _o(n)}function y0(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,f)}}function a(h,g){i[h]&&(r[h]=function(x){return new Promise(function(m,p){o.push([h,x,m,p])>1||c(h,x)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(x){d(o[0][3],x)}}function l(h){h.value instanceof _o?Promise.resolve(h.value.v).then(u,f):d(o[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function d(h,g){h(g),o.shift(),o.length&&c(o[0][0],o[0][1])}}function _0(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof g0=="function"?g0(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(o){t[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var du=n=>n&&typeof n.length=="number"&&typeof n!="function";function fu(n){return ze(n?.then)}function hu(n){return ze(n[Cs])}function pu(n){return Symbol.asyncIterator&&ze(n?.[Symbol.asyncIterator])}function mu(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ow(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var gu=Ow();function vu(n){return ze(n?.[gu])}function yu(n){return y0(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield _o(t.read());if(r)return yield _o(void 0);yield yield _o(i)}}finally{t.releaseLock()}})}function _u(n){return ze(n?.getReader)}function Ht(n){if(n instanceof st)return n;if(n!=null){if(hu(n))return Fw(n);if(du(n))return Lw(n);if(fu(n))return kw(n);if(pu(n))return x0(n);if(vu(n))return Uw(n);if(_u(n))return Bw(n)}throw mu(n)}function Fw(n){return new st(e=>{let t=n[Cs]();if(ze(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Lw(n){return new st(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function kw(n){return new st(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,au)})}function Uw(n){return new st(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function x0(n){return new st(e=>{Vw(n,e).catch(t=>e.error(t))})}function Bw(n){return x0(yu(n))}function Vw(n,e){var t,i,r,o;return v0(this,void 0,void 0,function*(){try{for(t=_0(n);i=yield t.next(),!i.done;){let s=i.value;if(e.next(s),e.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=t.return)&&(yield o.call(t))}finally{if(r)throw r.error}}e.complete()})}function Nn(n,e,t,i=0,r=!1){let o=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function xu(n,e=0){return ht((t,i)=>{t.subscribe(pt(i,r=>Nn(i,n,()=>i.next(r),e),()=>Nn(i,n,()=>i.complete(),e),r=>Nn(i,n,()=>i.error(r),e)))})}function Mu(n,e=0){return ht((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function M0(n,e){return Ht(n).pipe(Mu(e),xu(e))}function b0(n,e){return Ht(n).pipe(Mu(e),xu(e))}function S0(n,e){return new st(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function E0(n,e){return new st(t=>{let i;return Nn(t,e,()=>{i=n[gu](),Nn(t,e,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){t.error(s);return}o?t.complete():t.next(r)},0,!0)}),()=>ze(i?.return)&&i.return()})}function bu(n,e){if(!n)throw new Error("Iterable cannot be null");return new st(t=>{Nn(t,e,()=>{let i=n[Symbol.asyncIterator]();Nn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function C0(n,e){return bu(yu(n),e)}function w0(n,e){if(n!=null){if(hu(n))return M0(n,e);if(du(n))return S0(n,e);if(fu(n))return b0(n,e);if(pu(n))return bu(n,e);if(vu(n))return E0(n,e);if(_u(n))return C0(n,e)}throw mu(n)}function Ot(n,e){return e?w0(n,e):Ht(n)}function tt(...n){let e=Ar(n);return Ot(n,e)}function qp(n,e){let t=ze(n)?n:()=>n,i=r=>r.error(t());return new st(e?r=>e.schedule(i,0,r):i)}function Su(n){return!!n&&(n instanceof st||ze(n.lift)&&ze(n.subscribe))}var xo=Ms(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function It(n,e){return ht((t,i)=>{let r=0;t.subscribe(pt(i,o=>{i.next(n.call(e,o,r++))}))})}var{isArray:Hw}=Array;function zw(n,e){return Hw(e)?n(...e):n(e)}function Eu(n){return It(e=>zw(n,e))}var{isArray:Gw}=Array,{getPrototypeOf:jw,prototype:Ww,keys:$w}=Object;function Cu(n){if(n.length===1){let e=n[0];if(Gw(e))return{args:e,keys:null};if(qw(e)){let t=$w(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function qw(n){return n&&typeof n=="object"&&jw(n)===Ww}function wu(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Xp(...n){let e=Ar(n),t=uu(n),{args:i,keys:r}=Cu(n);if(i.length===0)return Ot([],e);let o=new st(Xw(i,e,r?s=>wu(r,s):fi));return t?o.pipe(Eu(t)):o}function Xw(n,e,t=fi){return i=>{D0(e,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)D0(e,()=>{let l=Ot(n[c],e),u=!1;l.subscribe(pt(i,f=>{o[c]=f,u||(u=!0,a--),a||i.next(t(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function D0(n,e,t){n?Nn(t,n,e):e()}function T0(n,e,t,i,r,o,s,a){let c=[],l=0,u=0,f=!1,d=()=>{f&&!c.length&&!l&&e.complete()},h=x=>l<i?g(x):c.push(x),g=x=>{o&&e.next(x),l++;let m=!1;Ht(t(x,u++)).subscribe(pt(e,p=>{r?.(p),o?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();s?Nn(e,s,()=>g(p)):g(p)}d()}catch(p){e.error(p)}}))};return n.subscribe(pt(e,h,()=>{f=!0,d()})),()=>{a?.()}}function bn(n,e,t=1/0){return ze(e)?bn((i,r)=>It((o,s)=>e(i,o,r,s))(Ht(n(i,r))),t):(typeof e=="number"&&(t=e),ht((i,r)=>T0(i,r,n,t)))}function A0(n=1/0){return bn(fi,n)}function I0(){return A0(1)}function ws(...n){return I0()(Ot(n,Ar(n)))}function Wa(n){return new st(e=>{Ht(n()).subscribe(e)})}function Yp(...n){let e=uu(n),{args:t,keys:i}=Cu(n),r=new st(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let f=!1;Ht(t[u]).subscribe(pt(o,d=>{f||(f=!0,l--),a[u]=d},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?wu(i,a):a),o.complete())}))}});return e?r.pipe(Eu(e)):r}function er(n,e){return ht((t,i)=>{let r=0;t.subscribe(pt(i,o=>n.call(e,o,r++)&&i.next(o)))})}function $a(n){return ht((e,t)=>{let i=null,r=!1,o;i=e.subscribe(pt(t,void 0,void 0,s=>{o=Ht(n(s,$a(n)(e))),i?(i.unsubscribe(),i=null,o.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(t))})}function Du(n,e){return ze(e)?bn(n,e,1):bn(n,1)}function R0(n){return ht((e,t)=>{let i=!1;e.subscribe(pt(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function tr(n){return n<=0?()=>on:ht((e,t)=>{let i=0;e.subscribe(pt(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function N0(n=Yw){return ht((e,t)=>{let i=!1;e.subscribe(pt(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Yw(){return new xo}function Zp(n){return ht((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function nr(n,e){let t=arguments.length>=2;return i=>i.pipe(n?er((r,o)=>n(r,o,i)):fi,tr(1),t?R0(e):N0(()=>new xo))}function Tu(n){return n<=0?()=>on:ht((e,t)=>{let i=[];e.subscribe(pt(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Jp(...n){let e=Ar(n);return ht((t,i)=>{(e?ws(n,t,e):ws(n,t)).subscribe(i)})}function hi(n,e){return ht((t,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();t.subscribe(pt(i,c=>{r?.unsubscribe();let l=0,u=o++;Ht(n(c,u)).subscribe(r=pt(i,f=>i.next(e?e(c,f,u,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function qa(n){return ht((e,t)=>{Ht(n).subscribe(pt(t,()=>t.complete(),ja)),!t.closed&&e.subscribe(t)})}function Kn(n,e,t){let i=ze(n)||e||t?{next:n,error:e,complete:t}:n;return i?ht((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(pt(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):fi}var Kp;function Au(){return Kp}function Ni(n){let e=Kp;return Kp=n,e}var P0=Symbol("NotFound");function Ds(n){return n===P0||n?.name==="\u0275NotFound"}function O0(n){let e=je(null);try{return n()}finally{je(e)}}var Ou="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",we=class extends Error{code;constructor(e,t){super(Qa(e,t)),this.code=e}};function Kw(n){return`NG0${Math.abs(n)}`}function Qa(n,e){return`${Kw(n)}${e?": "+e:""}`}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("")}function B0(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function ec(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ec).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function hm(n,e){return n?e?`${n} ${e}`:n:e||""}var Qw=mt({__forward_ref__:mt});function or(n){return n.__forward_ref__=or,n}function sn(n){return pm(n)?n():n}function pm(n){return typeof n=="function"&&n.hasOwnProperty(Qw)&&n.__forward_ref__===or}function Oe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function sr(n){return{providers:n.providers||[],imports:n.imports||[]}}function tc(n){return eD(n,Fu)}function mm(n){return tc(n)!==null}function eD(n,e){return n.hasOwnProperty(e)&&n[e]||null}function tD(n){let e=n?.[Fu]??null;return e||null}function em(n){return n&&n.hasOwnProperty(Ru)?n[Ru]:null}var Fu=mt({\u0275prov:mt}),Ru=mt({\u0275inj:mt}),Re=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Oe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function gm(n){return n&&!!n.\u0275providers}var vm=mt({\u0275cmp:mt}),ym=mt({\u0275dir:mt}),_m=mt({\u0275pipe:mt}),xm=mt({\u0275mod:mt}),Ya=mt({\u0275fac:mt}),wo=mt({__NG_ELEMENT_ID__:mt}),F0=mt({__NG_ENV_ID__:mt});function Mm(n){return Lu(n,"@NgModule"),n[xm]||null}function Rr(n){return Lu(n,"@Component"),n[vm]||null}function bm(n){return Lu(n,"@Directive"),n[ym]||null}function V0(n){return Lu(n,"@Pipe"),n[_m]||null}function Lu(n,e){if(n==null)throw new we(-919,!1)}function ku(n){return typeof n=="string"?n:n==null?"":String(n)}var H0=mt({ngErrorCode:mt}),nD=mt({ngErrorMessage:mt}),iD=mt({ngTokenPath:mt});function Sm(n,e){return z0("",-200,e)}function Uu(n,e){throw new we(-201,!1)}function z0(n,e,t){let i=new we(e,n);return i[H0]=e,i[nD]=n,t&&(i[iD]=t),i}function rD(n){return n[H0]}var tm;function G0(){return tm}function Bn(n){let e=tm;return tm=n,e}function Em(n,e,t){let i=tc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Uu(n,"")}var oD={},Mo=oD,sD="__NG_DI_FLAG__",nm=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=bo(t)||0;try{return this.injector.get(e,i&8?null:Mo,i)}catch(r){if(Ds(r))return r;throw r}}};function aD(n,e=0){let t=Au();if(t===void 0)throw new we(-203,!1);if(t===null)return Em(n,void 0,e);{let i=cD(e),r=t.retrieve(n,i);if(Ds(r)){if(i.optional)return null;throw r}return r}}function Xe(n,e=0){return(G0()||aD)(sn(n),e)}function ie(n,e){return Xe(n,bo(e))}function bo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function cD(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function im(n){let e=[];for(let t=0;t<n.length;t++){let i=sn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new we(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=lD(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}e.push(Xe(r,o))}else e.push(Xe(i))}return e}function lD(n){return n[sD]}function So(n,e){let t=n.hasOwnProperty(Ya);return t?n[Ya]:null}function j0(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(t&&(r=t(r),o=t(o)),o!==r)return!1}return!0}function W0(n){return n.flat(Number.POSITIVE_INFINITY)}function Bu(n,e){n.forEach(t=>Array.isArray(t)?Bu(t,e):e(t))}function Cm(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function nc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function $0(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let o=r-2;n[r]=n[o],r--}n[e]=t,n[e+1]=i}}function q0(n,e,t){let i=Is(n,e);return i>=0?n[i|1]=t:(i=~i,$0(n,i,e,t)),i}function Vu(n,e){let t=Is(n,e);if(t>=0)return n[t|1]}function Is(n,e){return uD(n,e,1)}function uD(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<t];if(e===s)return o<<t;s>e?r=o:i=o+1}return~(r<<t)}var Nr={},Vn=[],Do=new Re(""),wm=new Re("",-1),Dm=new Re(""),Za=class{get(e,t=Mo){if(t===Mo){let r=z0("",-201);throw r.name="\u0275NotFound",r}return t}};function Rs(n){return{\u0275providers:n}}function X0(n){return Rs([{provide:Do,multi:!0,useValue:n}])}function Y0(...n){return{\u0275providers:Tm(!0,n),\u0275fromNgModule:!0}}function Tm(n,...e){let t=[],i=new Set,r,o=s=>{t.push(s)};return Bu(e,s=>{let a=s;Nu(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Z0(r,o),t}function Z0(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Am(r,o=>{e(o,i)})}}function Nu(n,e,t,i){if(n=sn(n),!n)return!1;let r=null,o=em(n),s=!o&&Rr(n);if(!o&&!s){let c=n.ngModule;if(o=em(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Nu(l,e,t,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Bu(o.imports,u=>{Nu(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&Z0(l,e)}if(!a){let l=So(r)||(()=>new r);e({provide:r,useFactory:l,deps:Vn},r),e({provide:Dm,useValue:r,multi:!0},r),e({provide:Do,useValue:()=>Xe(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Am(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Am(n,e){for(let t of n)gm(t)&&(t=t.\u0275providers),Array.isArray(t)?Am(t,e):e(t)}var dD=mt({provide:String,useValue:mt});function J0(n){return n!==null&&typeof n=="object"&&dD in n}function fD(n){return!!(n&&n.useExisting)}function hD(n){return!!(n&&n.useFactory)}function Eo(n){return typeof n=="function"}function K0(n){return!!n.useClass}var ic=new Re(""),Iu={},L0={},Qp;function rc(){return Qp===void 0&&(Qp=new Za),Qp}var Wt=class{},Co=class extends Wt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,om(e,s=>this.processProvider(s)),this.records.set(wm,Ts(void 0,this)),r.has("environment")&&this.records.set(Wt,Ts(void 0,this));let o=this.records.get(ic);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Dm,Vn,{self:!0}))}retrieve(e,t){let i=bo(t)||0;try{return this.get(e,Mo,i)}catch(r){if(Ds(r))return r;throw r}}destroy(){Xa(this),this._destroyed=!0;let e=je(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),je(e)}}onDestroy(e){return Xa(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Xa(this);let t=Ni(this),i=Bn(void 0),r;try{return e()}finally{Ni(t),Bn(i)}}get(e,t=Mo,i){if(Xa(this),e.hasOwnProperty(F0))return e[F0](this);let r=bo(i),o,s=Ni(this),a=Bn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=yD(e)&&tc(e);u&&this.injectableDefInScope(u)?l=Ts(rm(e),Iu):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?rc():this.parent;return t=r&8&&t===Mo?null:t,c.get(e,t)}catch(c){let l=rD(c);throw l===-200||l===-201?new we(l,null):c}finally{Bn(a),Ni(s)}}resolveInjectorInitializers(){let e=je(null),t=Ni(this),i=Bn(void 0),r;try{let o=this.get(Do,Vn,{self:!0});for(let s of o)s()}finally{Ni(t),Bn(i),je(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=sn(e);let t=Eo(e)?e:sn(e&&e.provide),i=mD(e);if(!Eo(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ts(void 0,Iu,!0),r.factory=()=>im(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=je(null);try{if(t.value===L0)throw Sm("");return t.value===Iu&&(t.value=L0,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&vD(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{je(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=sn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function rm(n){let e=tc(n),t=e!==null?e.factory:So(n);if(t!==null)return t;if(n instanceof Re)throw new we(-204,!1);if(n instanceof Function)return pD(n);throw new we(-204,!1)}function pD(n){if(n.length>0)throw new we(-204,!1);let t=tD(n);return t!==null?()=>t.factory(n):()=>new n}function mD(n){if(J0(n))return Ts(void 0,n.useValue);{let e=Im(n);return Ts(e,Iu)}}function Im(n,e,t){let i;if(Eo(n)){let r=sn(n);return So(r)||rm(r)}else if(J0(n))i=()=>sn(n.useValue);else if(hD(n))i=()=>n.useFactory(...im(n.deps||[]));else if(fD(n))i=(r,o)=>Xe(sn(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=sn(n&&(n.useClass||n.provide));if(gD(n))i=()=>new r(...im(n.deps));else return So(r)||rm(r)}return i}function Xa(n){if(n.destroyed)throw new we(-205,!1)}function Ts(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function gD(n){return!!n.deps}function vD(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function yD(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function om(n,e){for(let t of n)Array.isArray(t)?om(t,e):t&&gm(t)?om(t.\u0275providers,e):e(t)}function mn(n,e){let t;n instanceof Co?(Xa(n),t=n):t=new nm(n);let i,r=Ni(t),o=Bn(void 0);try{return e()}finally{Ni(r),Bn(o)}}function Q0(){return G0()!==void 0||Au()!=null}var mi=0,ke=1,Ve=2,Jt=3,Qn=4,ei=5,oc=6,Ns=7,Sn=8,Pr=9,gi=10,Ft=11,Ps=12,Rm=13,Os=14,ti=15,Or=16,To=17,Pi=18,Fr=19,Nm=20,ir=21,Hu=22,sc=23,zn=24,zu=25,Fs=26,En=27,ex=1;var Lr=7,ac=8,Ao=9,Cn=10;function ar(n){return Array.isArray(n)&&typeof n[ex]=="object"}function vi(n){return Array.isArray(n)&&n[ex]===!0}function Pm(n){return(n.flags&4)!==0}function cr(n){return n.componentOffset>-1}function cc(n){return(n.flags&1)===1}function Oi(n){return!!n.template}function Ls(n){return(n[Ve]&512)!==0}function Io(n){return(n[Ve]&256)===256}var Om="svg",tx="math";function ni(n){for(;Array.isArray(n);)n=n[mi];return n}function Fm(n,e){return ni(e[n])}function yi(n,e){return ni(e[n.index])}function Lm(n,e){return n.data[e]}function nx(n,e){return n[e]}function ii(n,e){let t=e[n];return ar(t)?t:t[mi]}function ix(n){return(n[Ve]&4)===4}function Gu(n){return(n[Ve]&128)===128}function rx(n){return vi(n[Jt])}function Ro(n,e){return e==null?null:n[e]}function km(n){n[To]=0}function Um(n){n[Ve]&1024||(n[Ve]|=1024,Gu(n)&&uc(n))}function lc(n){return!!(n[Ve]&9216||n[zn]?.dirty)}function ju(n){n[gi].changeDetectionScheduler?.notify(8),n[Ve]&64&&(n[Ve]|=1024),lc(n)&&uc(n)}function uc(n){n[gi].changeDetectionScheduler?.notify(0);let e=Ir(n);for(;e!==null&&!(e[Ve]&8192||(e[Ve]|=8192,!Gu(e)));)e=Ir(e)}function Bm(n,e){if(Io(n))throw new we(911,!1);n[ir]===null&&(n[ir]=[]),n[ir].push(e)}function ox(n,e){if(n[ir]===null)return;let t=n[ir].indexOf(e);t!==-1&&n[ir].splice(t,1)}function Ir(n){let e=n[Jt];return vi(e)?e[Jt]:e}function Vm(n){return n[Ns]??=[]}function Hm(n){return n.cleanup??=[]}function sx(n,e,t,i){let r=Vm(e);r.push(t),n.firstCreatePass&&Hm(n).push(i,r.length-1)}var Qe={lFrame:Mx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var sm=!1;function ax(){return Qe.lFrame.elementDepthCount}function cx(){Qe.lFrame.elementDepthCount++}function zm(){Qe.lFrame.elementDepthCount--}function Gm(){return Qe.bindingsEnabled}function lx(){return Qe.skipHydrationRootTNode!==null}function jm(n){return Qe.skipHydrationRootTNode===n}function Wm(){Qe.skipHydrationRootTNode=null}function lt(){return Qe.lFrame.lView}function wn(){return Qe.lFrame.tView}function No(n){return Qe.lFrame.contextLView=n,n[Sn]}function Po(n){return Qe.lFrame.contextLView=null,n}function Pn(){let n=$m();for(;n!==null&&n.type===64;)n=n.parent;return n}function $m(){return Qe.lFrame.currentTNode}function ux(){let n=Qe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function ks(n,e){let t=Qe.lFrame;t.currentTNode=n,t.isParent=e}function qm(){return Qe.lFrame.isParent}function dx(){Qe.lFrame.isParent=!1}function fx(){return Qe.lFrame.contextLView}function Xm(){return sm}function Ym(n){let e=sm;return sm=n,e}function hx(){let n=Qe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function px(n){return Qe.lFrame.bindingIndex=n}function dc(){return Qe.lFrame.bindingIndex++}function mx(n){let e=Qe.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function gx(){return Qe.lFrame.inI18n}function vx(n,e){let t=Qe.lFrame;t.bindingIndex=t.bindingRootIndex=n,Wu(e)}function yx(){return Qe.lFrame.currentDirectiveIndex}function Wu(n){Qe.lFrame.currentDirectiveIndex=n}function _x(n){let e=Qe.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Zm(){return Qe.lFrame.currentQueryIndex}function $u(n){Qe.lFrame.currentQueryIndex=n}function _D(n){let e=n[ke];return e.type===2?e.declTNode:e.type===1?n[ei]:null}function Jm(n,e,t){if(t&4){let r=e,o=n;for(;r=r.parent,r===null&&!(t&1);)if(r=_D(o),r===null||(o=o[Os],r.type&10))break;if(r===null)return!1;e=r,n=o}let i=Qe.lFrame=xx();return i.currentTNode=e,i.lView=n,!0}function qu(n){let e=xx(),t=n[ke];Qe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function xx(){let n=Qe.lFrame,e=n===null?null:n.child;return e===null?Mx(n):e}function Mx(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function bx(){let n=Qe.lFrame;return Qe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Km=bx;function Xu(){let n=bx();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Oo(){return Qe.lFrame.selectedIndex}function kr(n){Qe.lFrame.selectedIndex=n}function Yu(){let n=Qe.lFrame;return Lm(n.tView,n.selectedIndex)}function Zu(){Qe.lFrame.currentNamespace=Om}function Ju(){xD()}function xD(){Qe.lFrame.currentNamespace=null}function Sx(){return Qe.lFrame.currentNamespace}var Ex=!0;function Ku(){return Ex}function Qu(n){Ex=n}function am(n,e=null,t=null,i){let r=Qm(n,e,t,i);return r.resolveInjectorInitializers(),r}function Qm(n,e=null,t=null,i,r=new Set){let o=[t||Vn,Y0(n)],s;return new Co(o,e||rc(),s||null,r)}var pi=class n{static THROW_IF_NOT_FOUND=Mo;static NULL=new Za;static create(e,t){if(Array.isArray(e))return am({name:""},t,e,"");{let i=e.name??"";return am({name:i},e.parent,e.providers,i)}}static \u0275prov=Oe({token:n,providedIn:"any",factory:()=>Xe(wm)});static __NG_ELEMENT_ID__=-1},$t=new Re(""),lr=(()=>{class n{static __NG_ELEMENT_ID__=MD;static __NG_ENV_ID__=t=>t}return n})(),cm=class extends lr{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Io(this._lView)}onDestroy(e){let t=this._lView;return Bm(t,e),()=>ox(t,e)}};function MD(){return new cm(lt())}var Cx=!1,wx=new Re(""),Ur=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new rn(!1);debugTaskTracker=ie(wx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new st(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new n})}return n})(),lm=class extends jt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Q0()&&(this.destroyRef=ie(lr,{optional:!0})??void 0,this.pendingTasks=ie(Ur,{optional:!0})??void 0)}emit(e){let t=je(null);try{super.next(e)}finally{je(t)}}subscribe(e,t,i){let r=e,o=t||(()=>null),s=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return e instanceof nn&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},zt=lm;function Pu(...n){}function eg(n){let e,t;function i(){n=Pu;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Dx(n){return queueMicrotask(()=>n()),()=>{n=Pu}}var tg="isAngularZone",Ja=tg+"_ID",bD=0,Hn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new zt(!1);onMicrotaskEmpty=new zt(!1);onStable=new zt(!1);onError=new zt(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Cx}=e;if(typeof Zone>"u")throw new we(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,CD(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(tg)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new we(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new we(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,e,SD,Pu,Pu);try{return o.runTask(s,t,i)}finally{o.cancelTask(s)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},SD={};function ng(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function ED(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){eg(()=>{n.callbackScheduled=!1,um(n),n.isCheckStableRunning=!0,ng(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),um(n)}function CD(n){let e=()=>{ED(n)},t=bD++;n._inner=n._inner.fork({name:"angular",properties:{[tg]:!0,[Ja]:t,[Ja+t]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(wD(c))return i.invokeTask(o,s,a,c);try{return k0(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),U0(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return k0(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!DD(c)&&e(),U0(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,um(n),ng(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function um(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function k0(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function U0(n){n._nesting--,ng(n)}var Ka=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new zt;onMicrotaskEmpty=new zt;onStable=new zt;onError=new zt;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function wD(n){return Tx(n,"__ignore_ng_zone__")}function DD(n){return Tx(n,"__scheduler_tick__")}function Tx(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var rr=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Fi=new Re("",{factory:()=>{let n=ie(Hn),e=ie(Wt),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(rr),t.handleError(i))})}}}),Ax={provide:Do,useValue:()=>{let n=ie(rr,{optional:!0})},multi:!0},TD=new Re("",{factory:()=>{let n=ie($t).defaultView;if(!n)return;let e=ie(Fi),t=o=>{e(o.reason),o.preventDefault()},i=o=>{o.error?e(o.error):e(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),ie(lr).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function ig(){return Rs([X0(()=>{ie(TD)})])}function _i(n,e){let[t,i,r]=kp(n,e?.equal),o=t,s=o[pn];return o.set=i,o.update=r,o.asReadonly=Ix.bind(o),o}function Ix(){let n=this[pn];if(n.readonlyFn===void 0){let e=()=>this();e[pn]=n,n.readonlyFn=e}return n.readonlyFn}var As=class{},fc=new Re("",{factory:()=>!0});var rg=new Re("");var og=(()=>{class n{static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new dm})}return n})(),dm=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},fm=class{[pn];constructor(e){this[pn]=e}destroy(){this[pn].destroy()}};function xc(n){return{toString:n}.toString()}function kD(n){return typeof n=="function"}function aM(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var od=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}},Vo=(()=>{let n=()=>cM;return n.ngInherit=!0,n})();function cM(n){return n.type.prototype.ngOnChanges&&(n.setInput=BD),UD}function UD(){let n=uM(this),e=n?.current;if(e){let t=n.previous;if(t===Nr)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function BD(n,e,t,i,r){let o=this.declaredInputs[i],s=uM(n)||VD(n,{previous:Nr,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new od(l&&l.currentValue,t,c===Nr),aM(n,e,r,t)}var lM="__ngSimpleChanges__";function uM(n){return n[lM]||null}function VD(n,e){return n[lM]=e}var Rx=[];var bt=function(n,e=null,t){for(let i=0;i<Rx.length;i++){let r=Rx[i];r(n,e,t)}},ut=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(ut||{});function HD(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=e.type.prototype;if(i){let s=cM(e);(t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s)}r&&(t.preOrderHooks??=[]).push(0-n,r),o&&((t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o))}function dM(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let o=n.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=o;s&&(n.contentHooks??=[]).push(-t,s),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function td(n,e,t){fM(n,e,3,t)}function nd(n,e,t,i){(n[Ve]&3)===t&&fM(n,e,t,i)}function sg(n,e){let t=n[Ve];(t&3)===e&&(t&=16383,t+=1,n[Ve]=t)}function fM(n,e,t,i){let r=i!==void 0?n[To]&65535:0,o=i??-1,s=e.length-1,a=0;for(let c=r;c<s;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[To]+=65536),(a<o||o==-1)&&(zD(n,t,e,c),n[To]=(n[To]&4294901760)+c+2),c++}function Nx(n,e){bt(ut.LifecycleHookStart,n,e);let t=je(null);try{e.call(n)}finally{je(t),bt(ut.LifecycleHookEnd,n,e)}}function zD(n,e,t,i){let r=t[i]<0,o=t[i+1],s=r?-t[i]:t[i],a=n[s];r?n[Ve]>>14<n[To]>>16&&(n[Ve]&3)===e&&(n[Ve]+=16384,Nx(a,o)):Nx(a,o)}var Bs=-1,Lo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function GD(n){return(n.flags&8)!==0}function jD(n){return(n.flags&16)!==0}function WD(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let o=t[i++],s=t[i++],a=t[i++];n.setAttribute(e,s,a,o)}else{let o=r,s=t[++i];qD(o)?n.setProperty(e,o,s):n.setAttribute(e,o,s),i++}}return i}function $D(n){return n===3||n===4||n===6}function qD(n){return n.charCodeAt(0)===64}function Vs(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Px(n,t,r,null,e[++i]):Px(n,t,r,null,null))}}return n}function Px(n,e,t,i,r){let o=0,s=n.length;if(e===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===t){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,e),o=s+1),n.splice(o++,0,t),r!==null&&n.splice(o++,0,r)}function hM(n){return n!==Bs}function sd(n){return n&32767}function XD(n){return n>>16}function ad(n,e){let t=XD(n),i=e;for(;t>0;)i=i[Os],t--;return i}var gg=!0;function Ox(n){let e=gg;return gg=n,e}var YD=256,pM=YD-1,mM=5,ZD=0,Li={};function JD(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(wo)&&(i=t[wo]),i==null&&(i=t[wo]=ZD++);let r=i&pM,o=1<<r;e.data[n+(r>>mM)]|=o}function cd(n,e){let t=gM(n,e);if(t!==-1)return t;let i=e[ke];i.firstCreatePass&&(n.injectorIndex=e.length,ag(i.data,n),ag(e,null),ag(i.blueprint,null));let r=Bg(n,e),o=n.injectorIndex;if(hM(r)){let s=sd(r),a=ad(r,e),c=a[ke].data;for(let l=0;l<8;l++)e[o+l]=a[s+l]|c[s+l]}return e[o+8]=r,o}function ag(n,e){n.push(0,0,0,0,0,0,0,0,e)}function gM(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Bg(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=MM(r),i===null)return Bs;if(t++,r=r[Os],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Bs}function vg(n,e,t){JD(n,e,t)}function vM(n,e,t){if(t&8||n!==void 0)return n;Uu(e,"NodeInjector")}function yM(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[Pr],o=Bn(void 0);try{return r?r.get(e,i,t&8):Em(e,i,t&8)}finally{Bn(o)}}return vM(i,e,t)}function _M(n,e,t,i=0,r){if(n!==null){if(e[Ve]&2048&&!(i&2)){let s=tT(n,e,t,i,Li);if(s!==Li)return s}let o=xM(n,e,t,i,Li);if(o!==Li)return o}return yM(e,t,i,r)}function xM(n,e,t,i,r){let o=QD(t);if(typeof o=="function"){if(!Jm(e,n,i))return i&1?vM(r,t,i):yM(e,t,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Uu(t);else return s}finally{Km()}}else if(typeof o=="number"){let s=null,a=gM(n,e),c=Bs,l=i&1?e[ti][ei]:null;for((a===-1||i&4)&&(c=a===-1?Bg(n,e):e[a+8],c===Bs||!Lx(i,!1)?a=-1:(s=e[ke],a=sd(c),e=ad(c,e)));a!==-1;){let u=e[ke];if(Fx(o,a,u.data)){let f=KD(a,e,t,s,i,l);if(f!==Li)return f}c=e[a+8],c!==Bs&&Lx(i,e[ke].data[a+8]===l)&&Fx(o,a,e)?(s=u,a=sd(c),e=ad(c,e)):a=-1}}return r}function KD(n,e,t,i,r,o){let s=e[ke],a=s.data[n+8],c=i==null?cr(a)&&gg:i!=s&&(a.type&3)!==0,l=r&1&&o===a,u=id(a,s,t,c,l);return u!==null?gc(e,s,u,a,r):Li}function id(n,e,t,i,r){let o=n.providerIndexes,s=e.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,u=o>>20,f=i?a:a+u,d=r?a+u:l;for(let h=f;h<d;h++){let g=s[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=s[c];if(h&&Oi(h)&&h.type===t)return c}return null}function gc(n,e,t,i,r){let o=n[t],s=e.data;if(o instanceof Lo){let a=o;if(a.resolving)throw Sm("");let c=Ox(a.canSeeViewProviders);a.resolving=!0;let l=s[t].type||s[t],u,f=a.injectImpl?Bn(a.injectImpl):null,d=Jm(n,i,0);try{o=n[t]=a.factory(void 0,r,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&HD(t,s[t],e)}finally{f!==null&&Bn(f),Ox(c),a.resolving=!1,Km()}}return o}function QD(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(wo)?n[wo]:void 0;return typeof e=="number"?e>=0?e&pM:eT:e}function Fx(n,e,t){let i=1<<n;return!!(t[e+(n>>mM)]&i)}function Lx(n,e){return!(n&2)&&!(n&1&&e)}var Fo=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return _M(this._tNode,this._lView,e,bo(i),t)}};function eT(){return new Fo(Pn(),lt())}function Vr(n){return xc(()=>{let e=n.prototype.constructor,t=e[Ya]||yg(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let o=r[Ya]||yg(r);if(o&&o!==t)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function yg(n){return pm(n)?()=>{let e=yg(sn(n));return e&&e()}:So(n)}function tT(n,e,t,i,r){let o=n,s=e;for(;o!==null&&s!==null&&s[Ve]&2048&&!Ls(s);){let a=xM(o,s,t,i|2,Li);if(a!==Li)return a;let c=o.parent;if(!c){let l=s[Nm];if(l){let u=l.get(t,Li,i&-5);if(u!==Li)return u}c=MM(s),s=s[Os]}o=c}return r}function MM(n){let e=n[ke],t=e.type;return t===2?e.declTNode:t===1?n[ei]:null}function nT(){return $s(Pn(),lt())}function $s(n,e){return new ki(yi(n,e))}var ki=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=nT}return n})();function iT(n){return n instanceof ki?n.nativeElement:n}function rT(){return this._results[Symbol.iterator]()}var ld=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new jt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=W0(e);(this._changesDetected=!j0(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=rT};function bM(n){return(n.flags&128)===128}var Vg=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Vg||{}),SM=new Map,oT=0;function sT(){return oT++}function aT(n){SM.set(n[Fr],n)}function _g(n){SM.delete(n[Fr])}var kx="__ngContext__";function Hs(n,e){ar(e)?(n[kx]=e[Fr],aT(e)):n[kx]=e}function EM(n){return wM(n[Ps])}function CM(n){return wM(n[Qn])}function wM(n){for(;n!==null&&!vi(n);)n=n[Qn];return n}var cT;function Hg(n){cT=n}var _d=new Re("",{factory:()=>lT}),lT="ng";var xd=new Re(""),Mc=new Re("",{providedIn:"platform",factory:()=>"unknown"});var Md=new Re("",{factory:()=>ie($t).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var DM=!1,TM=new Re("",{factory:()=>DM});var uT=(n,e,t,i)=>{};function dT(n,e,t,i){uT(n,e,t,i)}function zg(n){return(n.flags&32)===32}var fT=()=>null;function AM(n,e,t=!1){return fT(n,e,t)}function IM(n,e){let t=n.contentQueries;if(t!==null){let i=je(null);try{for(let r=0;r<t.length;r+=2){let o=t[r],s=t[r+1];if(s!==-1){let a=n.data[s];$u(o),a.contentQueries(2,e[s],s)}}}finally{je(i)}}}function xg(n,e,t){$u(0);let i=je(null);try{e(n,t)}finally{je(i)}}function RM(n,e,t){if(Pm(e)){let i=je(null);try{let r=e.directiveStart,o=e.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=t[s];a.contentQueries(1,c,s)}}}finally{je(i)}}}var Mi=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(Mi||{});var ud=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ou})`}};function Gg(n){return n instanceof ud?n.changingThisBreaksApplicationSecurity:n}function NM(n,e){let t=PM(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Ou})`)}return t===e}function PM(n){return n instanceof ud&&n.getTypeName()||null}var hT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function OM(n){return n=String(n),n.match(hT)?n:"unsafe:"+n}function pT(n,e){return n.createText(e)}function mT(n,e,t){n.setValue(e,t)}function FM(n,e,t){return n.createElement(e,t)}function dd(n,e,t,i,r){n.insertBefore(e,t,i,r)}function LM(n,e,t){n.appendChild(e,t)}function Ux(n,e,t,i,r){i!==null?dd(n,e,t,i,r):LM(n,e,t)}function gT(n,e,t,i){n.removeChild(null,e,t,i)}function vT(n,e,t){n.setAttribute(e,"style",t)}function yT(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function kM(n,e,t){let{mergedAttrs:i,classes:r,styles:o}=t;i!==null&&WD(n,e,i),r!==null&&yT(n,e,r),o!==null&&vT(n,e,o)}var jg=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(jg||{});function Wg(n){let e=_T();return e?e.sanitize(jg.URL,n)||"":NM(n,"URL")?Gg(n):OM(ku(n))}function _T(){let n=lt();return n&&n[gi].sanitizer}function $g(n){return n.ownerDocument.defaultView}function UM(n){return n instanceof Function?n():n}function xT(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=e.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}t=r+1}}var BM="ng-template";function MT(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&xT(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(qg(n))return!1;if(r=e.indexOf(1,r),r>-1){let o;for(;++r<e.length&&typeof(o=e[r])=="string";)if(o.toLowerCase()===t)return!0}return!1}function qg(n){return n.type===4&&n.value!==BM}function bT(n,e,t){let i=n.type===4&&!t?BM:n.value;return e===i}function ST(n,e,t){let i=4,r=n.attrs,o=r!==null?wT(r):0,s=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!s&&!xi(i)&&!xi(c))return!1;if(s&&xi(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!bT(n,c,t)||c===""&&e.length===1){if(xi(i))return!1;s=!0}}else if(i&8){if(r===null||!MT(n,r,c,t)){if(xi(i))return!1;s=!0}}else{let l=e[++a],u=ET(c,r,qg(n),t);if(u===-1){if(xi(i))return!1;s=!0;continue}if(l!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&l!==f){if(xi(i))return!1;s=!0}}}}return xi(i)||s}function xi(n){return(n&1)===0}function ET(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let o=!1;for(;r<e.length;){let s=e[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return DT(e,n)}function CT(n,e,t=!1){for(let i=0;i<e.length;i++)if(ST(n,e[i],t))return!0;return!1}function wT(n){for(let e=0;e<n.length;e++){let t=n[e];if($D(t))return e}return n.length}function DT(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Bx(n,e){return n?":not("+e.trim()+")":e}function TT(n){let e=n[0],t=1,i=2,r="",o=!1;for(;t<n.length;){let s=n[t];if(typeof s=="string")if(i&2){let a=n[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!xi(s)&&(e+=Bx(o,r),r=""),i=s,o=o||!xi(i);t++}return r!==""&&(e+=Bx(o,r)),e}function AT(n){return n.map(TT).join(",")}function IT(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&e.push(o,n[++i]):r===8&&t.push(o);else{if(!xi(r))break;r=o}i++}return t.length&&e.push(1,...t),e}var dr={};function Xg(n,e,t,i,r,o,s,a,c,l,u){let f=En+i,d=f+r,h=RT(f,d),g=typeof l=="function"?l():l;return h[ke]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function RT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:dr);return t}function NT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Xg(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Yg(n,e,t,i,r,o,s,a,c,l,u){let f=e.blueprint.slice();return f[mi]=r,f[Ve]=i|4|128|8|64|1024,(l!==null||n&&n[Ve]&2048)&&(f[Ve]|=2048),km(f),f[Jt]=f[Os]=n,f[Sn]=t,f[gi]=s||n&&n[gi],f[Ft]=a||n&&n[Ft],f[Pr]=c||n&&n[Pr]||null,f[ei]=o,f[Fr]=sT(),f[oc]=u,f[Nm]=l,f[ti]=e.type==2?n[ti]:f,f}function PT(n,e,t){let i=yi(e,n),r=NT(t),o=n[gi].rendererFactory,s=Zg(n,Yg(n,r,null,VM(t),i,e,null,o.createRenderer(i,t),null,null,null));return n[e.index]=s}function VM(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function HM(n,e,t,i){if(t===0)return-1;let r=e.length;for(let o=0;o<t;o++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Zg(n,e){return n[Ps]?n[Rm][Qn]=e:n[Ps]=e,n[Rm]=e,e}function _t(n=1){zM(wn(),lt(),Oo()+n,!1)}function zM(n,e,t,i){if(!i)if((e[Ve]&3)===3){let o=n.preOrderCheckHooks;o!==null&&td(e,o,t)}else{let o=n.preOrderHooks;o!==null&&nd(e,o,0,t)}kr(t)}var bd=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(bd||{});function Mg(n,e,t,i){let r=je(null);try{let[o,s,a]=n.inputs[t],c=null;(s&bd.SignalBased)!==0&&(c=e[o][pn]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,o):aM(e,c,o,i)}finally{je(r)}}var ur=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(ur||{}),OT;function Jg(n,e){return OT(n,e)}var VG=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var bg=new WeakMap,hc=new WeakSet;function FT(n,e){let t=bg.get(n);if(!t||t.length===0)return;let i=e.parentNode,r=e.previousSibling;for(let o=t.length-1;o>=0;o--){let s=t[o],a=s.parentNode;s===e?(t.splice(o,1),hc.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(t.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function LT(n,e){let t=bg.get(n);t?t.includes(e)||t.push(e):bg.set(n,[e])}var zs=new Set,Kg=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Kg||{}),qs=new Re(""),Vx=new Set;function Qg(n){Vx.has(n)||(Vx.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var GM=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new n})}return n})();var kT=new Re("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:ie(Wt)})});function jM(n,e,t){let i=n.get(kT);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function UT(n,e){for(let[t,i]of e)jM(n,i.animateFns)}function Hx(n,e,t,i){let r=n?.[Fs]?.enter;e!==null&&r&&r.has(t.index)&&UT(i,r)}function Us(n,e,t,i,r,o,s,a){if(r!=null){let c,l=!1;vi(r)?c=r:ar(r)&&(l=!0,r=r[mi]);let u=ni(r);n===0&&i!==null?(Hx(a,i,o,t),s==null?LM(e,i,u):dd(e,i,u,s||null,!0)):n===1&&i!==null?(Hx(a,i,o,t),dd(e,i,u,s||null,!0),FT(o,u)):n===2?(a?.[Fs]?.leave?.has(o.index)&&LT(o,u),hc.delete(u),zx(a,o,t,f=>{if(hc.has(u)){hc.delete(u);return}gT(e,u,l,f)})):n===3&&(hc.delete(u),zx(a,o,t,()=>{e.destroyNode(u)})),c!=null&&JT(e,n,t,c,o,i,s)}}function BT(n,e){WM(n,e),e[mi]=null,e[ei]=null}function VT(n,e,t,i,r,o){i[mi]=r,i[ei]=e,Sd(n,i,t,1,r,o)}function WM(n,e){e[gi].changeDetectionScheduler?.notify(9),Sd(n,e,e[Ft],2,null,null)}function HT(n){let e=n[Ps];if(!e)return cg(n[ke],n);for(;e;){let t=null;if(ar(e))t=e[Ps];else{let i=e[Cn];i&&(t=i)}if(!t){for(;e&&!e[Qn]&&e!==n;)ar(e)&&cg(e[ke],e),e=e[Jt];e===null&&(e=n),ar(e)&&cg(e[ke],e),t=e&&e[Qn]}e=t}}function ev(n,e){let t=n[Ao],i=t.indexOf(e);t.splice(i,1)}function $M(n,e){if(Io(e))return;let t=e[Ft];t.destroyNode&&Sd(n,e,t,3,null,null),HT(e)}function cg(n,e){if(Io(e))return;let t=je(null);try{e[Ve]&=-129,e[Ve]|=256,e[zn]&&za(e[zn]),jT(n,e),GT(n,e),e[ke].type===1&&e[Ft].destroy();let i=e[Or];if(i!==null&&vi(e[Jt])){i!==e[Jt]&&ev(i,e);let r=e[Pi];r!==null&&r.detachView(n)}_g(e)}finally{je(t)}}function zx(n,e,t,i){let r=n?.[Fs];if(r==null||r.leave==null||!r.leave.has(e.index))return i(!1);n&&zs.add(n[Fr]),jM(t,()=>{if(r.leave&&r.leave.has(e.index)){let s=r.leave.get(e.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),zT(n,i)}else n&&zs.delete(n[Fr]),i(!1)},r)}function zT(n,e){let t=n[Fs]?.running;if(t){t.then(()=>{n[Fs].running=void 0,zs.delete(n[Fr]),e(!0)});return}e(!1)}function GT(n,e){let t=n.cleanup,i=e[Ns];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[t[s+1]];t[s].call(a)}i!==null&&(e[Ns]=null);let r=e[ir];if(r!==null){e[ir]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=e[sc];if(o!==null){e[sc]=null;for(let s of o)s.destroy()}}function jT(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Lo)){let o=t[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];bt(ut.LifecycleHookStart,a,c);try{c.call(a)}finally{bt(ut.LifecycleHookEnd,a,c)}}else{bt(ut.LifecycleHookStart,r,o);try{o.call(r)}finally{bt(ut.LifecycleHookEnd,r,o)}}}}}function WT(n,e,t){return $T(n,e.parent,t)}function $T(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[mi];if(cr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===Mi.None||r===Mi.Emulated)return null}return yi(i,t)}function qT(n,e,t){return YT(n,e,t)}function XT(n,e,t){return n.type&40?yi(n,t):null}var YT=XT,Gx;function tv(n,e,t,i){let r=WT(n,i,e),o=e[Ft],s=i.parent||e[ei],a=qT(s,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Ux(o,r,t[c],a,!1);else Ux(o,r,t,a,!1);Gx!==void 0&&Gx(o,i,e,t,r)}function pc(n,e){if(e!==null){let t=e.type;if(t&3)return yi(e,n);if(t&4)return Sg(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return pc(n,i);{let r=n[e.index];return vi(r)?Sg(-1,r):ni(r)}}else{if(t&128)return pc(n,e.next);if(t&32)return Jg(e,n)()||ni(n[e.index]);{let i=qM(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Ir(n[ti]);return pc(r,i)}else return pc(n,e.next)}}}return null}function qM(n,e){if(e!==null){let i=n[ti][ei],r=e.projection;return i.projection[r]}return null}function Sg(n,e){let t=Cn+n+1;if(t<e.length){let i=e[t],r=i[ke].firstChild;if(r!==null)return pc(i,r)}return e[Lr]}function nv(n,e,t,i,r,o,s){for(;t!=null;){let a=i[Pr];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(s&&e===0&&(c&&Hs(ni(c),i),t.flags|=2),!zg(t))if(l&8)nv(n,e,t.child,i,r,o,!1),Us(e,n,a,r,c,t,o,i);else if(l&32){let u=Jg(t,i),f;for(;f=u();)Us(e,n,a,r,f,t,o,i);Us(e,n,a,r,c,t,o,i)}else l&16?ZT(n,e,i,t,r,o):Us(e,n,a,r,c,t,o,i);t=s?t.projectionNext:t.next}}function Sd(n,e,t,i,r,o){nv(t,i,n.firstChild,e,r,o,!1)}function ZT(n,e,t,i,r,o){let s=t[ti],c=s[ei].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Us(e,n,t[Pr],r,u,i,o,t)}else{let l=c,u=s[Jt];bM(i)&&(l.flags|=128),nv(n,e,l,u,r,o,!0)}}function JT(n,e,t,i,r,o,s){let a=i[Lr],c=ni(i);a!==c&&Us(e,n,t,o,a,r,s);for(let l=Cn;l<i.length;l++){let u=i[l];Sd(u[ke],u,n,e,o,a)}}function KT(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let o=i.indexOf("-")===-1?void 0:ur.DashCase;r==null?n.removeStyle(t,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ur.Important),n.setStyle(t,i,r,o))}}function XM(n,e,t,i,r){let o=Oo(),s=i&2;try{kr(-1),s&&e.length>En&&zM(n,e,En,!1);let a=s?ut.TemplateUpdateStart:ut.TemplateCreateStart;bt(a,r,t),t(i,r)}finally{kr(o);let a=s?ut.TemplateUpdateEnd:ut.TemplateCreateEnd;bt(a,r,t)}}function iv(n,e,t){oA(n,e,t),(t.flags&64)===64&&sA(n,e,t)}function rv(n,e,t=yi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?t(e,n):n[s];n[r++]=a}}}function QT(n,e,t,i){let o=i.get(TM,DM)||t===Mi.ShadowDom||t===Mi.ExperimentalIsolatedShadowDom,s=n.selectRootElement(e,o);return eA(s),s}function eA(n){tA(n)}var tA=()=>null;function nA(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function YM(n,e,t,i,r,o){let s=e[ke];if(ov(n,s,e,t,i)){cr(n)&&rA(e,n.index);return}n.type&3&&(t=nA(t)),iA(n,e,t,i,r,o)}function iA(n,e,t,i,r,o){if(n.type&3){let s=yi(n,e);i=o!=null?o(i,n.value||"",t):i,r.setProperty(s,t,i)}else n.type&12}function rA(n,e){let t=ii(e,n);t[Ve]&16||(t[Ve]|=64)}function oA(n,e,t){let i=t.directiveStart,r=t.directiveEnd;cr(t)&&PT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||cd(t,e);let o=t.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=gc(e,n,s,t);if(Hs(c,e),o!==null&&uA(e,s-i,c,a,t,o),Oi(a)){let l=ii(t.index,e);l[Sn]=gc(e,n,s,t)}}}function sA(n,e,t){let i=t.directiveStart,r=t.directiveEnd,o=t.index,s=yx();try{kr(o);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Wu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&aA(c,l)}}finally{kr(-1),Wu(s)}}function aA(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function ZM(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let o=t[r];CT(e,o.selectors,!1)&&(i??=[],Oi(o)?i.unshift(o):i.push(o))}return i}function cA(n,e,t,i,r,o){let s=yi(n,e);lA(e[Ft],s,o,n.value,t,i,r)}function lA(n,e,t,i,r,o,s){if(o==null)n.removeAttribute(e,r,t);else{let a=s==null?ku(o):s(o,i||"",r);n.setAttribute(e,r,a,t)}}function uA(n,e,t,i,r,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];Mg(i,t,c,l)}}function JM(n,e,t,i,r){let o=En+t,s=e[ke],a=r(s,e,n,i,t);e[o]=a,ks(n,!0);let c=n.type===2;return c?(kM(e[Ft],a,n),(ax()===0||cc(n))&&Hs(a,e),cx()):Hs(a,e),Ku()&&(!c||!zg(n))&&tv(s,e,a,n),n}function KM(n){let e=n;return qm()?dx():(e=e.parent,ks(e,!1)),e}function dA(n,e){let t=n[Pr];if(!t)return;let i;try{i=t.get(Fi,null)}catch{i=null}i?.(e)}function ov(n,e,t,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],f=e.data[l];Mg(f,t[l],u,r),a=!0}if(o)for(let c of o){let l=t[c],u=e.data[c];Mg(u,l,i,r),a=!0}return a}function fA(n,e){let t=ii(e,n),i=t[ke];hA(i,t);let r=t[mi];r!==null&&t[oc]===null&&(t[oc]=AM(r,t[Pr])),bt(ut.ComponentStart);try{sv(i,t,t[Sn])}finally{bt(ut.ComponentEnd,t[Sn])}}function hA(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function sv(n,e,t){qu(e);try{let i=n.viewQuery;i!==null&&xg(1,i,t);let r=n.template;r!==null&&XM(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Pi]?.finishViewCreation(n),n.staticContentQueries&&IM(n,e),n.staticViewQueries&&xg(2,n.viewQuery,t);let o=n.components;o!==null&&pA(e,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ve]&=-5,Xu()}}function pA(n,e){for(let t=0;t<e.length;t++)fA(n,e[t])}function mA(n,e,t,i){let r=je(null);try{let o=e.tView,a=n[Ve]&4096?4096:16,c=Yg(n,o,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Or]=l;let u=n[Pi];return u!==null&&(c[Pi]=u.createEmbeddedView(o)),sv(o,c,t),c}finally{je(r)}}function jx(n,e){return!e||e.firstChild===null||bM(n)}function vc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let o=e[t.index];o!==null&&i.push(ni(o)),vi(o)&&QM(o,i);let s=t.type;if(s&8)vc(n,e,t.child,i);else if(s&32){let a=Jg(t,e),c;for(;c=a();)i.push(c)}else if(s&16){let a=qM(e,t);if(Array.isArray(a))i.push(...a);else{let c=Ir(e[ti]);vc(c[ke],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function QM(n,e){for(let t=Cn;t<n.length;t++){let i=n[t],r=i[ke].firstChild;r!==null&&vc(i[ke],i,r,e)}n[Lr]!==n[mi]&&e.push(n[Lr])}function eb(n){if(n[zu]!==null){for(let e of n[zu])e.impl.addSequence(e);n[zu].length=0}}var tb=[];function gA(n){return n[zn]??vA(n)}function vA(n){let e=tb.pop()??Object.create(_A);return e.lView=n,e}function yA(n){n.lView[zn]!==n&&(n.lView=null,tb.push(n))}var _A=et(ae({},gs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{uc(n.lView)},consumerOnSignalRead(){this.lView[zn]=this}});function xA(n){let e=n[zn]??Object.create(MA);return e.lView=n,e}var MA=et(ae({},gs),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Ir(n.lView);for(;e&&!nb(e[ke]);)e=Ir(e);e&&Um(e)},consumerOnSignalRead(){this.lView[zn]=this}});function nb(n){return n.type!==2}function ib(n){if(n[sc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[sc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ve]&8192)}}var bA=100;function rb(n,e=0){let i=n[gi].rendererFactory,r=!1;r||i.begin?.();try{SA(n,e)}finally{r||i.end?.()}}function SA(n,e){let t=Xm();try{Ym(!0),Eg(n,e);let i=0;for(;lc(n);){if(i===bA)throw new we(103,!1);i++,Eg(n,1)}}finally{Ym(t)}}function EA(n,e,t,i){if(Io(e))return;let r=e[Ve],o=!1,s=!1;qu(e);let a=!0,c=null,l=null;o||(nb(n)?(l=gA(e),c=ys(l)):Kl()===null?(a=!1,l=xA(e),c=ys(l)):e[zn]&&(za(e[zn]),e[zn]=null));try{km(e),px(n.bindingStartIndex),t!==null&&XM(n,e,t,2,i);let u=(r&3)===3;if(!o)if(u){let h=n.preOrderCheckHooks;h!==null&&td(e,h,null)}else{let h=n.preOrderHooks;h!==null&&nd(e,h,0,null),sg(e,0)}if(s||CA(e),ib(e),ob(e,0),n.contentQueries!==null&&IM(n,e),!o)if(u){let h=n.contentCheckHooks;h!==null&&td(e,h)}else{let h=n.contentHooks;h!==null&&nd(e,h,1),sg(e,1)}DA(n,e);let f=n.components;f!==null&&ab(e,f,0);let d=n.viewQuery;if(d!==null&&xg(2,d,i),!o)if(u){let h=n.viewCheckHooks;h!==null&&td(e,h)}else{let h=n.viewHooks;h!==null&&nd(e,h,2),sg(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Hu]){for(let h of e[Hu])h();e[Hu]=null}o||(eb(e),e[Ve]&=-73)}catch(u){throw o||uc(e),u}finally{l!==null&&(Ha(l,c),a&&yA(l)),Xu()}}function ob(n,e){for(let t=EM(n);t!==null;t=CM(t))for(let i=Cn;i<t.length;i++){let r=t[i];sb(r,e)}}function CA(n){for(let e=EM(n);e!==null;e=CM(e)){if(!(e[Ve]&2))continue;let t=e[Ao];for(let i=0;i<t.length;i++){let r=t[i];Um(r)}}}function wA(n,e,t){bt(ut.ComponentStart);let i=ii(e,n);try{sb(i,t)}finally{bt(ut.ComponentEnd,i[Sn])}}function sb(n,e){Gu(n)&&Eg(n,e)}function Eg(n,e){let i=n[ke],r=n[Ve],o=n[zn],s=!!(e===0&&r&16);if(s||=!!(r&64&&e===0),s||=!!(r&1024),s||=!!(o?.dirty&&eu(o)),s||=!1,o&&(o.dirty=!1),n[Ve]&=-9217,s)EA(i,n,i.template,n[Sn]);else if(r&8192){let a=je(null);try{ib(n),ob(n,1);let c=i.components;c!==null&&ab(n,c,1),eb(n)}finally{je(a)}}}function ab(n,e,t){for(let i=0;i<e.length;i++)wA(n,e[i],t)}function DA(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)kr(~r);else{let o=r,s=t[++i],a=t[++i];vx(s,o);let c=e[o];bt(ut.HostBindingsUpdateStart,c);try{a(2,c)}finally{bt(ut.HostBindingsUpdateEnd,c)}}}}finally{kr(-1)}}function av(n,e){let t=Xm()?64:1088;for(n[gi].changeDetectionScheduler?.notify(e);n;){n[Ve]|=t;let i=Ir(n);if(Ls(n)&&!i)return n;n=i}return null}function cb(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function TA(n,e,t,i=!0){let r=e[ke];if(AA(r,e,n,t),i){let s=Sg(t,n),a=e[Ft],c=a.parentNode(n[Lr]);c!==null&&VT(r,n[ei],a,e,c,s)}let o=e[oc];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Cg(n,e){if(n.length<=Cn)return;let t=Cn+e,i=n[t];if(i){let r=i[Or];r!==null&&r!==n&&ev(r,i),e>0&&(n[t-1][Qn]=i[Qn]);let o=nc(n,Cn+e);BT(i[ke],i);let s=o[Pi];s!==null&&s.detachView(o[ke]),i[Jt]=null,i[Qn]=null,i[Ve]&=-129}return i}function AA(n,e,t,i){let r=Cn+i,o=t.length;i>0&&(t[r-1][Qn]=e),i<o-Cn?(e[Qn]=t[r],Cm(t,Cn+i,e)):(t.push(e),e[Qn]=null),e[Jt]=t;let s=e[Or];s!==null&&t!==s&&lb(s,e);let a=e[Pi];a!==null&&a.insertView(n),ju(e),e[Ve]|=128}function lb(n,e){let t=n[Ao],i=e[Jt];if(ar(i))n[Ve]|=2;else{let r=i[Jt][ti];e[ti]!==r&&(n[Ve]|=2)}t===null?n[Ao]=[e]:t.push(e)}var Br=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[ke];return vc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Sn]}set context(e){this._lView[Sn]=e}get destroyed(){return Io(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Jt];if(vi(e)){let t=e[ac],i=t?t.indexOf(this):-1;i>-1&&(Cg(e,i),nc(t,i))}this._attachedToViewContainer=!1}$M(this._lView[ke],this._lView)}onDestroy(e){Bm(this._lView,e)}markForCheck(){av(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ve]&=-129}reattach(){ju(this._lView),this._lView[Ve]|=128}detectChanges(){this._lView[Ve]|=1024,rb(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new we(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Ls(this._lView),t=this._lView[Or];t!==null&&!e&&ev(t,this._lView),WM(this._lView[ke],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new we(902,!1);this._appRef=e;let t=Ls(this._lView),i=this._lView[Or];i!==null&&!t&&lb(i,this._lView),ju(this._lView)}};var ko=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=IA;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let o=mA(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new Br(o)}}return n})();function IA(){return cv(Pn(),lt())}function cv(n,e){return n.type&4?new ko(e,n,$s(n,e)):null}function Ed(n,e,t,i,r){let o=n.data[e];if(o===null)o=RA(n,e,t,i,r),gx()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=i,o.attrs=r;let s=ux();o.injectorIndex=s===null?-1:s.injectorIndex}return ks(o,!0),o}function RA(n,e,t,i,r){let o=$m(),s=qm(),a=s?o:o&&o.parent,c=n.data[e]=PA(n,a,t,e,i,r);return NA(n,c,o,s),c}function NA(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function PA(n,e,t,i,r,o){let s=e?e.injectorIndex:-1,a=0;return lx()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var OA=()=>null;function Wx(n,e){return OA(n,e)}var ub=class{},Cd=class{},wg=class{resolveComponentFactory(e){throw new we(917,!1)}},bc=class{static NULL=new wg},Uo=class{},Xs=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>FA()}return n})();function FA(){let n=lt(),e=Pn(),t=ii(e.index,n);return(ar(t)?t:n)[Ft]}var db=(()=>{class n{static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>null})}return n})();var rd={},Dg=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,rd,i);return r!==rd||t===rd?r:this.parentInjector.get(e,t,i)}};function fd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)r=hm(r,a);else if(o==2){let c=a,l=e[++s];i=hm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Ct(n,e=0){let t=lt();if(t===null)return Xe(n,e);let i=Pn();return _M(i,t,sn(n),e)}function fb(n,e,t,i,r){let o=i===null?null:{"":-1},s=r(n,t);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}UA(n,e,t,a,o,c,l)}o!==null&&i!==null&&LA(t,i,o)}function LA(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let o=t[e[r+1]];if(o==null)throw new we(-301,!1);i.push(e[r],o)}}function kA(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function UA(n,e,t,i,r,o,s){let a=i.length,c=null;for(let d=0;d<a;d++){let h=i[d];c===null&&Oi(h)&&(c=h,kA(n,t,d)),vg(cd(t,e),n,h.type)}jA(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let d=0;d<a;d++){let h=i[d];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,f=HM(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let d=0;d<a;d++){let h=i[d];if(t.mergedAttrs=Vs(t.mergedAttrs,h.hostAttrs),VA(n,t,e,f,h),GA(f,h,r),s!==null&&s.has(h)){let[x,m]=s.get(h);t.directiveToIndex.set(h.type,[f,x+t.directiveStart,m+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),f++}BA(n,t,o)}function BA(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))$x(0,e,r,i),$x(1,e,r,i),Xx(e,i,!1);else{let o=t.get(r);qx(0,e,o,i),qx(1,e,o,i),Xx(e,i,!0)}}}function $x(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=e.inputs??={}:s=e.outputs??={},s[o]??=[],s[o].push(i),hb(e,o)}}function qx(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),hb(e,s)}}function hb(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Xx(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!t&&r===null||t&&o===null||qg(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){s??=[],s.push(c,i[a+1]);break}}else if(t&&o.hasOwnProperty(c)){let l=o[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){s??=[],s.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function VA(n,e,t,i,r){n.data[i]=r;let o=r.factory||(r.factory=So(r.type,!0)),s=new Lo(o,Oi(r),Ct,null);n.blueprint[i]=s,t[i]=s,HA(n,e,i,HM(n,t,r.hostVars,dr),r)}function HA(n,e,t,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~e.index;zA(s)!=a&&s.push(a),s.push(t,i,o)}}function zA(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function GA(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Oi(e)&&(t[""]=n)}}function jA(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function pb(n,e,t,i,r,o,s,a){let c=e[ke],l=c.consts,u=Ro(l,s),f=Ed(c,n,t,i,u);return o&&fb(c,e,f,Ro(l,a),r),f.mergedAttrs=Vs(f.mergedAttrs,f.attrs),f.attrs!==null&&fd(f,f.attrs,!1),f.mergedAttrs!==null&&fd(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function mb(n,e){dM(n,e),Pm(e)&&n.queries.elementEnd(e)}function WA(n,e,t,i,r,o){let s=e.consts,a=Ro(s,r),c=Ed(e,n,t,i,a);if(c.mergedAttrs=Vs(c.mergedAttrs,c.attrs),o!=null){let l=Ro(s,o);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&fd(c,c.attrs,!1),c.mergedAttrs!==null&&fd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function lv(n){return vb(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function gb(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function vb(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function $A(n,e,t){return n[e]=t}function Ys(n,e,t){if(t===dr)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function lg(n,e,t){return function i(r){let o=cr(n)?ii(n.index,e):e;av(o,5);let s=e[Sn],a=Yx(e,s,t,r),c=i.__ngNextListenerFn__;for(;c;)a=Yx(e,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function Yx(n,e,t,i){let r=je(null);try{return bt(ut.OutputStart,e,t),t(i)!==!1}catch(o){return dA(n,o),!1}finally{bt(ut.OutputEnd,e,t),je(r)}}function qA(n,e,t,i,r,o,s,a){let c=cc(n),l=!1,u=null;if(!i&&c&&(u=YA(e,t,o,n.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let f=yi(n,t),d=i?i(f):f;dT(t,d,o,a);let h=r.listen(d,o,a);if(!XA(o)){let g=i?x=>i(ni(x[n.index])):n.index;yb(g,e,t,o,a,h,!1)}}return l}function XA(n){return n.startsWith("animation")||n.startsWith("transition")}function YA(n,e,t,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===t&&r[o+1]===i){let a=e[Ns],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function yb(n,e,t,i,r,o,s){let a=e.firstCreatePass?Hm(e):null,c=Vm(t),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function Zx(n,e,t,i,r,o){let s=e[t],a=e[ke],l=a.data[t].outputs[i],f=s[l].subscribe(o);yb(n.index,a,e,r,o,f,!0)}var Tg=Symbol("BINDING");function _b(n){return n.debugInfo?.className||n.type.name||null}var hd=class extends bc{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Rr(e);return new Gs(t,this.ngModule)}};function ZA(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],o={propName:t,templateName:e,isSignal:(i&bd.SignalBased)!==0};return r&&(o.transform=r),o})}function JA(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function KA(n,e,t){let i=e instanceof Wt?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Dg(t,i):t}function QA(n){let e=n.get(Uo,null);if(e===null)throw new we(407,!1);let t=n.get(db,null),i=n.get(As,null),r=n.get(qs,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function eI(n,e){let t=xb(n);return FM(e,t,t==="svg"?Om:t==="math"?tx:null)}function xb(n){return(n.selectors[0][0]||"div").toLowerCase()}var Gs=class extends Cd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=ZA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=JA(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=AT(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,o,s){bt(ut.DynamicComponentStart);let a=je(null);try{let c=this.componentDef,l=KA(c,r||this.ngModule,e),u=QA(l),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(_b(c),()=>this.createComponentRef(u,l,t,i,o,s)):this.createComponentRef(u,l,t,i,o,s)}finally{je(a)}}createComponentRef(e,t,i,r,o,s){let a=this.componentDef,c=tI(r,a,s,o),l=e.rendererFactory.createRenderer(null,a),u=r?QT(l,r,a.encapsulation,t):eI(a,l),f=s?.some(Jx)||o?.some(g=>typeof g!="function"&&g.bindings.some(Jx)),d=Yg(null,c,null,512|VM(a),null,null,e,l,t,null,AM(u,t,!0));d[En]=u,qu(d);let h=null;try{let g=pb(En,d,2,"#host",()=>c.directiveRegistry,!0,0);kM(l,u,g),Hs(u,d),iv(c,d,g),RM(c,g,d),mb(c,g),i!==void 0&&iI(g,this.ngContentSelectors,i),h=ii(g.index,d),d[Sn]=h[Sn],sv(c,d,null)}catch(g){throw h!==null&&_g(h),_g(d),g}finally{bt(ut.DynamicComponentEnd),Xu()}return new pd(this.componentType,d,!!f)}};function tI(n,e,t,i){let r=n?["ng-version","21.2.6"]:IT(e.selectors[0]),o=null,s=null,a=0;if(t)for(let u of t)a+=u[Tg].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let d of f.bindings){a+=d[Tg].requiredVars;let h=u+1;d.create&&(d.targetIdx=h,(o??=[]).push(d)),d.update&&(d.targetIdx=h,(s??=[]).push(d))}}let c=[e];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,d=bm(f);c.push(d)}return Xg(0,null,nI(o,s),1,a,c,null,null,null,[r],null)}function nI(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function Jx(n){let e=n[Tg].kind;return e==="input"||e==="twoWay"}var pd=class extends ub{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Lm(t[ke],En),this.location=$s(this._tNode,t),this.instance=ii(this._tNode.index,t)[Sn],this.hostView=this.changeDetectorRef=new Br(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,o=ov(i,r[ke],r,e,t);this.previousInputValues.set(e,t);let s=ii(i.index,r);av(s,1)}get injector(){return new Fo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function iI(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let o=t[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Hr=(()=>{class n{static __NG_ELEMENT_ID__=rI}return n})();function rI(){let n=Pn();return Mb(n,lt())}var Ag=class n extends Hr{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return $s(this._hostTNode,this._hostLView)}get injector(){return new Fo(this._hostTNode,this._hostLView)}get parentInjector(){let e=Bg(this._hostTNode,this._hostLView);if(hM(e)){let t=ad(e,this._hostLView),i=sd(e),r=t[ke].data[i+8];return new Fo(r,t)}else return new Fo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Kx(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Cn}createEmbeddedView(e,t,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Wx(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,r,jx(this._hostTNode,s)),a}createComponent(e,t,i,r,o,s,a){let c=e&&!kD(e),l;if(c)l=t;else{let m=t||{};l=m.index,i=m.injector,r=m.projectableNodes,o=m.environmentInjector||m.ngModuleRef,s=m.directives,a=m.bindings}let u=c?e:new Gs(Rr(e)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let p=(c?f:this.parentInjector).get(Wt,null);p&&(o=p)}let d=Rr(u.componentType??{}),h=Wx(this._lContainer,d?.id??null),g=h?.firstChild??null,x=u.create(f,r,g,o,s,a);return this.insertImpl(x.hostView,l,jx(this._hostTNode,h)),x}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(rx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Jt],l=new n(c,c[ei],c[Jt]);l.detach(l.indexOf(e))}}let o=this._adjustIndex(t),s=this._lContainer;return TA(s,r,o,i),e.attachToViewContainerRef(),Cm(ug(s),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Kx(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Cg(this._lContainer,t);i&&(nc(ug(this._lContainer),t),$M(i[ke],i))}detach(e){let t=this._adjustIndex(e,-1),i=Cg(this._lContainer,t);return i&&nc(ug(this._lContainer),t)!=null?new Br(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Kx(n){return n[ac]}function ug(n){return n[ac]||(n[ac]=[])}function Mb(n,e){let t,i=e[n.index];return vi(i)?t=i:(t=cb(i,e,null,n),e[n.index]=t,Zg(e,t)),sI(t,e,n,i),new Ag(t,n,e)}function oI(n,e){let t=n[Ft],i=t.createComment(""),r=yi(e,n),o=t.parentNode(r);return dd(t,o,i,t.nextSibling(r),!1),i}var sI=lI,aI=()=>!1;function cI(n,e,t){return aI(n,e,t)}function lI(n,e,t,i){if(n[Lr])return;let r;t.type&8?r=ni(i):r=oI(e,t),n[Lr]=r}var Ig=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Rg=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let o=0;o<i;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)uv(e,t).matches!==null&&this.queries[t].setDirty()}},Ng=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=vI(e):this.predicate=e}},Pg=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,o=this.getByIndex(i).embeddedTView(e,r);o&&(o.indexInDeclarationView=i,t!==null?t.push(o):t=[o])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Og=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(e,t,uI(t,o)),this.matchTNodeWithReadOption(e,t,id(t,e,o,!1,!1))}else i===ko?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,id(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===ki||r===Hr||r===ko&&t.type&4)this.addMatch(t.index,-2);else{let o=id(t,e,r,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function uI(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function dI(n,e){return n.type&11?$s(n,e):n.type&4?cv(n,e):null}function fI(n,e,t,i){return t===-1?dI(e,n):t===-2?hI(n,e,i):gc(n,n[ke],t,e)}function hI(n,e,t){if(t===ki)return $s(e,n);if(t===ko)return cv(e,n);if(t===Hr)return Mb(e,n)}function bb(n,e,t,i){let r=e[Pi].queries[i];if(r.matches===null){let o=n.data,s=t.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let u=o[l];a.push(fI(e,u,s[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Fg(n,e,t,i){let r=n.queries.getByIndex(t),o=r.matches;if(o!==null){let s=bb(n,e,r,t);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],u=e[-c];for(let f=Cn;f<u.length;f++){let d=u[f];d[Or]===d[Jt]&&Fg(d[ke],d,l,i)}if(u[Ao]!==null){let f=u[Ao];for(let d=0;d<f.length;d++){let h=f[d];Fg(h[ke],h,l,i)}}}}}return i}function pI(n,e){return n[Pi].queries[e].queryList}function mI(n,e,t){let i=new ld((t&4)===4);return sx(n,e,i,i.destroy),(e[Pi]??=new Rg).queries.push(new Ig(i))-1}function gI(n,e,t){let i=wn();return i.firstCreatePass&&(yI(i,new Ng(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),mI(i,lt(),e)}function vI(n){return n.split(",").map(e=>e.trim())}function yI(n,e,t){n.queries===null&&(n.queries=new Pg),n.queries.track(new Og(e,t))}function uv(n,e){return n.queries.getByIndex(e)}function _I(n,e){let t=n[ke],i=uv(t,e);return i.crossesNgTemplate?Fg(t,n,e,[]):bb(t,n,i,e)}var js=class{},wd=class{};var md=class extends js{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new hd(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let o=Mm(e);this._bootstrapComponents=UM(o.bootstrap),this._r3Injector=Qm(e,t,[{provide:js,useValue:this},{provide:bc,useValue:this.componentFactoryResolver},...i],ec(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},gd=class extends wd{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new md(this.moduleType,e,[])}};var yc=class extends js{injector;componentFactoryResolver=new hd(this);instance=null;constructor(e){super();let t=new Co([...e.providers,{provide:js,useValue:this},{provide:bc,useValue:this.componentFactoryResolver}],e.parent||rc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Sc(n,e,t=null){return new yc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var xI=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Tm(!1,t.type),r=i.length>0?Sc([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Oe({token:n,providedIn:"environment",factory:()=>new n(Xe(Wt))})}return n})();function an(n){return xc(()=>{let e=Sb(n),t=et(ae({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Vg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(xI).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Mi.Emulated,styles:n.styles||Vn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Qg("NgStandalone"),Eb(t);let i=n.dependencies;return t.directiveDefs=Qx(i,MI),t.pipeDefs=Qx(i,V0),t.id=EI(t),t})}function MI(n){return Rr(n)||bm(n)}function zr(n){return xc(()=>({type:n.type,bootstrap:n.bootstrap||Vn,declarations:n.declarations||Vn,imports:n.imports||Vn,exports:n.exports||Vn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function bI(n,e){if(n==null)return Nr;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=bd.None,c=null),t[o]=[i,a,c],e[o]=s}return t}function SI(n){if(n==null)return Nr;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function cn(n){return xc(()=>{let e=Sb(n);return Eb(e),e})}function Sb(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Nr,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Vn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:bI(n.inputs,e),outputs:SI(n.outputs),debugInfo:null}}function Eb(n){n.features?.forEach(e=>e(n))}function Qx(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let o=e(r);o!==null&&i.push(o)}return i}:null}function EI(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))e=Math.imul(31,e)+o.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function CI(n){return Object.getPrototypeOf(n.prototype).constructor}function Ui(n){let e=CI(n.type),t=!0,i=[n];for(;e;){let r;if(Oi(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new we(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let s=n;s.inputs=dg(n.inputs),s.declaredInputs=dg(n.declaredInputs),s.outputs=dg(n.outputs);let a=r.hostBindings;a&&II(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&TI(n,c),l&&AI(n,l),wI(n,r),B0(n.outputs,r.outputs),Oi(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(n),a===Ui&&(t=!1)}}e=Object.getPrototypeOf(e)}DI(i)}function wI(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function DI(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=Vs(r.hostAttrs,t=Vs(t,r.hostAttrs))}}function dg(n){return n===Nr?{}:n===Vn?[]:n}function TI(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function AI(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,o)=>{e(i,r,o),t(i,r,o)}:n.contentQueries=e}function II(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function RI(n,e,t,i,r,o,s,a){if(t.firstCreatePass){n.mergedAttrs=Vs(n.mergedAttrs,n.attrs);let u=n.tView=Xg(2,n,r,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),ks(n,!1);let c=PI(t,e,n,i);Ku()&&tv(t,e,c,n),Hs(c,e);let l=cb(c,e,c,n);e[i+En]=l,Zg(e,l),cI(l,n,e)}function NI(n,e,t,i,r,o,s,a,c,l,u){let f=t+En,d;return e.firstCreatePass?(d=Ed(e,f,4,s||null,a||null),Gm()&&fb(e,n,d,Ro(e.consts,l),ZM),dM(e,d)):d=e.data[f],RI(d,n,e,t,i,r,o,c),cc(d)&&iv(e,n,d),l!=null&&rv(n,d,u),d}function bi(n,e,t,i,r,o,s,a){let c=lt(),l=wn(),u=Ro(l.consts,o);return NI(c,l,n,e,t,i,r,u,void 0,s,a),bi}var PI=OI;function OI(n,e,t,i){return Qu(!0),e[Ft].createComment("")}var dv=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function Cb(n){return typeof n=="function"&&n[pn]!==void 0}function fv(n){return Cb(n)&&typeof n.set=="function"}var hv=new Re("");function Ho(n){return!!n&&typeof n.then=="function"}function wb(n){return!!n&&typeof n.subscribe=="function"}var Db=new Re("");var pv=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(Db,{optional:!0})??[];injector=ie(pi);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let o=mn(this.injector,r);if(Ho(o))t.push(o);else if(wb(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});t.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dd=new Re("");function Tb(){Lp(()=>{let n="";throw new we(600,n)})}function Ab(n){return n.isBoundToModule}var FI=10;var zo=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(Fi);afterRenderManager=ie(GM);zonelessEnabled=ie(fc);rootEffectScheduler=ie(og);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new jt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ie(Ur);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(It(t=>!t))}constructor(){ie(qs,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Wt);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=pi.NULL){return this._injector.get(Hn).run(()=>{bt(ut.BootstrapComponentStart);let s=t instanceof Cd;if(!this._injector.get(pv).done){let g="";throw new we(405,g)}let c;s?c=t:c=this._injector.get(bc).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=Ab(c)?void 0:this._injector.get(js),u=i||c.selector,f=c.create(r,[],u,l),d=f.location.nativeElement,h=f.injector.get(hv,null);return h?.registerApplication(d),f.onDestroy(()=>{this.detachView(f.hostView),mc(this.components,f),h?.unregisterApplication(d)}),this._loadComponent(f),bt(ut.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){bt(ut.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Kg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw bt(ut.ChangeDetectionEnd),new we(101,!1);let t=je(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,je(t),this.afterTick.next(),bt(ut.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Uo,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<FI;){bt(ut.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{bt(ut.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!lc(r))continue;let o=i&&!this.zonelessEnabled?0:1;rb(r,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>lc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;mc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(Dd,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>mc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new we(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function mc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Td(n,e,t,i){let r=lt(),o=dc();if(Ys(r,o,e)){let s=wn(),a=Yu();cA(a,r,n,e,t,i)}return Td}function ln(n,e,t){let i=lt(),r=dc();if(Ys(i,r,e)){let o=wn(),s=Yu();YM(s,i,n,e,i[Ft],t)}return ln}function eM(n,e,t,i,r){ov(e,n,t,r?"class":"style",i)}function pe(n,e,t,i){let r=lt(),o=r[ke],s=n+En,a=o.firstCreatePass?pb(s,r,2,e,ZM,Gm(),t,i):o.data[s];if(cr(a)){let c=r[gi].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(_b(l),()=>(tM(n,e,r,a,i),pe))}}return tM(n,e,r,a,i),pe}function tM(n,e,t,i,r){if(JM(i,t,n,e,Ib),cc(i)){let o=t[ke];iv(o,t,i),RM(o,i,t)}r!=null&&rv(t,i)}function Se(){let n=wn(),e=Pn(),t=KM(e);return n.firstCreatePass&&mb(n,t),jm(t)&&Wm(),zm(),t.classesWithoutHost!=null&&GD(t)&&eM(n,t,lt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&jD(t)&&eM(n,t,lt(),t.stylesWithoutHost,!1),Se}function Dn(n,e,t,i){return pe(n,e,t,i),Se(),Dn}function Gn(n,e,t,i){let r=lt(),o=r[ke],s=n+En,a=o.firstCreatePass?WA(s,o,2,e,t,i):o.data[s];return JM(a,r,n,e,Ib),i!=null&&rv(r,a),Gn}function Si(){let n=Pn(),e=KM(n);return jm(e)&&Wm(),zm(),Si}function Go(n,e,t,i){return Gn(n,e,t,i),Si(),Go}var Ib=(n,e,t,i,r)=>(Qu(!0),FM(e[Ft],i,Sx()));function mv(){return lt()}var Ec="en-US";var LI=Ec;function Rb(n){typeof n=="string"&&(LI=n.toLowerCase().replace(/_/g,"-"))}function Bt(n,e,t){let i=lt(),r=wn(),o=Pn();return Nb(r,i,i[Ft],o,n,e,t),Bt}function Nb(n,e,t,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=lg(i,e,o),qA(i,n,e,s,t,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let d=u[f],h=u[f+1];c??=lg(i,e,o),Zx(i,e,d,h,r,c)}if(l&&l.length)for(let f of l)c??=lg(i,e,o),Zx(i,e,f,r,r,c)}}function Ad(n,e,t){return gI(n,e,t),Ad}function gv(n){let e=lt(),t=wn(),i=Zm();$u(i+1);let r=uv(t,i);if(n.dirty&&ix(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=_I(e,i);n.reset(o,iT),n.notifyOnChanges()}return!0}return!1}function vv(){return pI(lt(),Zm())}function yv(n){let e=fx();return nx(e,En+n)}function ed(n,e){return n<<17|e<<2}function Bo(n){return n>>17&32767}function kI(n){return(n&2)==2}function UI(n,e){return n&131071|e<<17}function Lg(n){return n|2}function Ws(n){return(n&131068)>>2}function fg(n,e){return n&-131069|e<<2}function BI(n){return(n&1)===1}function kg(n){return n|1}function VI(n,e,t,i,r,o){let s=o?e.classBindings:e.styleBindings,a=Bo(s),c=Ws(s);n[i]=t;let l=!1,u;if(Array.isArray(t)){let f=t;u=f[1],(u===null||Is(f,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let d=Bo(n[a+1]);n[i+1]=ed(d,a),d!==0&&(n[d+1]=fg(n[d+1],i)),n[a+1]=UI(n[a+1],i)}else n[i+1]=ed(a,0),a!==0&&(n[a+1]=fg(n[a+1],i)),a=i;else n[i+1]=ed(c,0),a===0?a=i:n[c+1]=fg(n[c+1],i),c=i;l&&(n[i+1]=Lg(n[i+1])),nM(n,u,i,!0),nM(n,u,i,!1),HI(e,u,n,i,o),s=ed(a,c),o?e.classBindings=s:e.styleBindings=s}function HI(n,e,t,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof e=="string"&&Is(o,e)>=0&&(t[i+1]=kg(t[i+1]))}function nM(n,e,t,i){let r=n[t+1],o=e===null,s=i?Bo(r):Ws(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];zI(c,e)&&(a=!0,n[s+1]=i?kg(l):Lg(l)),s=i?Bo(l):Ws(l)}a&&(n[t+1]=i?Lg(r):kg(r))}function zI(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Is(n,e)>=0:!1}function Id(n,e,t){return Pb(n,e,t,!1),Id}function Cc(n,e){return Pb(n,e,null,!0),Cc}function Pb(n,e,t,i){let r=lt(),o=wn(),s=mx(2);if(o.firstUpdatePass&&jI(o,n,s,i),e!==dr&&Ys(r,s,e)){let a=o.data[Oo()];YI(o,a,r,r[Ft],n,r[s+1]=ZI(e,t),i,s)}}function GI(n,e){return e>=n.expandoStartIndex}function jI(n,e,t,i){let r=n.data;if(r[t+1]===null){let o=r[Oo()],s=GI(n,t);JI(o,i)&&e===null&&!s&&(e=!1),e=WI(r,o,e,i),VI(r,o,e,t,s,i)}}function WI(n,e,t,i){let r=_x(n),o=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=hg(null,n,e,t,i),t=_c(t,e.attrs,i),o=null);else{let s=e.directiveStylingLast;if(s===-1||n[s]!==r)if(t=hg(r,n,e,t,i),o===null){let c=$I(n,e,i);c!==void 0&&Array.isArray(c)&&(c=hg(null,n,e,c[1],i),c=_c(c,e.attrs,i),qI(n,e,i,c))}else o=XI(n,e,i)}return o!==void 0&&(i?e.residualClasses=o:e.residualStyles=o),t}function $I(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ws(i)!==0)return n[Bo(i)]}function qI(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Bo(r)]=i}function XI(n,e,t){let i,r=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=_c(i,s,t)}return _c(i,e.attrs,t)}function hg(n,e,t,i,r){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=e[a],i=_c(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function _c(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),q0(n,s,t?!0:e[++o]))}return n===void 0?null:n}function YI(n,e,t,i,r,o,s,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=BI(l)?iM(c,e,t,r,Ws(l),s):void 0;if(!vd(u)){vd(o)||kI(l)&&(o=iM(c,null,t,r,a,s));let f=Fm(Oo(),t);KT(i,s,f,r,o)}}function iM(n,e,t,i,r,o){let s=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,f=u===null,d=t[r+1];d===dr&&(d=f?Vn:void 0);let h=f?Vu(d,i):u===i?d:void 0;if(l&&!vd(h)&&(h=Vu(c,i)),vd(h)&&(a=h,s))return a;let g=n[r+1];r=s?Bo(g):Ws(g)}if(e!==null){let c=o?e.residualClasses:e.residualStyles;c!=null&&(a=Vu(c,i))}return a}function vd(n){return n!==void 0}function ZI(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ec(Gg(n)))),n}function JI(n,e){return(n.flags&(e?8:16))!==0}function Te(n,e=""){let t=lt(),i=wn(),r=n+En,o=i.firstCreatePass?Ed(i,r,1,e,null):i.data[r],s=KI(i,t,o,e);t[r]=s,Ku()&&tv(i,t,s,o),ks(o,!1)}var KI=(n,e,t,i)=>(Qu(!0),pT(e[Ft],i));function QI(n,e,t,i=""){return Ys(n,dc(),t)?e+ku(t)+i:dr}function ri(n){return Gr("",n),ri}function Gr(n,e,t){let i=lt(),r=QI(i,n,e,t);return r!==dr&&eR(i,Oo(),r),Gr}function eR(n,e,t){let i=Fm(e,n);mT(n[Ft],i,t)}function jo(n,e,t){fv(e)&&(e=e());let i=lt(),r=dc();if(Ys(i,r,e)){let o=wn(),s=Yu();YM(s,i,n,e,i[Ft],t)}return jo}function Zs(n,e){let t=fv(n);return t&&n.set(e),t}function Wo(n,e){let t=lt(),i=wn(),r=Pn();return Nb(i,t,t[Ft],r,n,e),Wo}function rM(n,e,t){let i=wn();i.firstCreatePass&&Ob(e,i.data,i.blueprint,Oi(n),t)}function Ob(n,e,t,i,r){if(n=sn(n),Array.isArray(n))for(let o=0;o<n.length;o++)Ob(n[o],e,t,i,r);else{let o=wn(),s=lt(),a=Pn(),c=Eo(n)?n:sn(n.provide),l=Im(n),u=a.providerIndexes&1048575,f=a.directiveStart,d=a.providerIndexes>>20;if(Eo(n)||!n.multi){let h=new Lo(l,r,Ct,null),g=mg(c,e,r?u:u+d,f);g===-1?(vg(cd(a,s),o,c),pg(o,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),s.push(h)):(t[g]=h,s[g]=h)}else{let h=mg(c,e,u+d,f),g=mg(c,e,u,u+d),x=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!x){vg(cd(a,s),o,c);let p=iR(r?nR:tR,t.length,r,i,l,n);!r&&m&&(t[g].providerFactory=p),pg(o,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),s.push(p)}else{let p=Fb(t[r?g:h],l,!r&&i);pg(o,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function pg(n,e,t,i){let r=Eo(e),o=K0(e);if(r||o){let c=(o?sn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Fb(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function mg(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function tR(n,e,t,i,r){return Ug(this.multi,[])}function nR(n,e,t,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=gc(i,i[ke],this.providerFactory.index,r);s=c.slice(0,a),Ug(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],Ug(o,s);return s}function Ug(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function iR(n,e,t,i,r,o){let s=new Lo(n,t,Ct,null);return s.multi=[],s.index=e,s.componentProviders=0,Fb(s,r,i&&!t),s}function Js(n,e){return t=>{t.providersResolver=(i,r)=>rM(i,r?r(n):n,!1),e&&(t.viewProvidersResolver=(i,r)=>rM(i,r?r(e):e,!0))}}function wc(n,e,t){return oR(lt(),hx(),n,e,t)}function rR(n,e){let t=n[e];return t===dr?void 0:t}function oR(n,e,t,i,r,o){let s=e+t;return Ys(n,s,r)?$A(n,s+1,o?i.call(o,r):i(r)):rR(n,s+1)}var yd=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},_v=(()=>{class n{compileModuleSync(t){return new gd(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Mm(t),o=UM(r.declarations).reduce((s,a)=>{let c=Rr(a);return c&&s.push(new Gs(c)),s},[]);return new yd(i,o)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Lb=(()=>{class n{applicationErrorHandler=ie(Fi);appRef=ie(zo);taskService=ie(Ur);ngZone=ie(Hn);zonelessEnabled=ie(fc);tracing=ie(qs,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new nn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ja):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(rg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Dx:eg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ja+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function kb(){return[{provide:As,useExisting:Lb},{provide:Hn,useClass:Ka},{provide:fc,useValue:!0}]}function sR(){return typeof $localize<"u"&&$localize.locale||Ec}var xv=new Re("",{factory:()=>ie(xv,{optional:!0,skipSelf:!0})||sR()});function gn(n){return O0(n)}function jr(n,e){return iu(n,e?.equal)}var Hb=Symbol("InputSignalNode#UNSET"),_R=et(ae({},ru),{transformFn:void 0,applyValueToInputSignal(n,e){xs(n,e)}});function zb(n,e){let t=Object.create(_R);t.value=n,t.transformFn=e?.transform;function i(){if(vs(t),t.value===Hb){let r=null;throw new we(-950,r)}return t.value}return i[pn]=t,i}function Ub(n,e){return zb(n,e)}function xR(n){return zb(Hb,n)}var Gb=(Ub.required=xR,Ub);var Mv=new Re(""),MR=new Re("");function Dc(n){return!n.moduleRef}function bR(n){let e=Dc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Hn);return t.run(()=>{Dc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Fi),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),Dc(n)){let o=()=>e.destroy(),s=n.platformInjector.get(Mv);s.add(o),e.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(Mv);s.add(o),n.moduleRef.onDestroy(()=>{mc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return ER(i,t,()=>{let o=e.get(Ur),s=o.add(),a=e.get(pv);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(xv,Ec);if(Rb(c||Ec),!e.get(MR,!0))return Dc(n)?e.get(zo):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Dc(n)){let u=e.get(zo);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return SR?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var SR;function ER(n,e,t){try{let i=t();return Ho(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var Rd=null;function CR(n=[],e){return pi.create({name:e,providers:[{provide:ic,useValue:"platform"},{provide:Mv,useValue:new Set([()=>Rd=null])},...n]})}function wR(n=[]){if(Rd)return Rd;let e=CR(n);return Rd=e,Tb(),DR(e),e}function DR(n){let e=n.get(xd,null);mn(n,()=>{e?.forEach(t=>t())})}var TR=1e4;var I6=TR-1e3;var Tc=(()=>{class n{static __NG_ELEMENT_ID__=AR}return n})();function AR(n){return IR(Pn(),lt(),(n&16)===16)}function IR(n,e,t){if(cr(n)&&!t){let i=ii(n.index,e);return new Br(i,i)}else if(n.type&175){let i=e[ti];return new Br(i,e)}return null}var bv=class{supports(e){return lv(e)}create(e){return new Sv(e)}},RR=(n,e)=>e,Sv=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||RR}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,o=null;for(;t||i;){let s=!i||t&&t.currentIndex<Bb(i,r,o)?t:i,a=Bb(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(t=t._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,u=c-r;if(l!=u){for(let d=0;d<l;d++){let h=d<o.length?o[d]:o[d]=0,g=h+d;u<=g&&g<l&&(o[d]=h+1)}let f=s.previousIndex;o[f]=u-l}}a!==c&&e(s,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!lv(e))throw new we(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,o,s;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)o=e[a],s=this._trackByFn(a,o),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,o,s,a),i=!0):(i&&(t=this._verifyReinsertion(t,o,s,a)),Object.is(t.item,o)||this._addIdentityChange(t,o)),t=t._next}else r=0,gb(e,a=>{s=this._trackByFn(r,a),t===null||!Object.is(t.trackById,s)?(t=this._mismatch(t,a,s,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,s,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let o;return e===null?o=this._itTail:(o=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):e=this._addAfter(new Ev(t,i),o,r)),e}_verifyReinsertion(e,t,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,o=e._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Nd),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Nd),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Ev=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},Cv=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Nd=class{map=new Map;put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Cv,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Bb(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Vb(){return new Dv([new bv])}var Dv=(()=>{class n{factories;static \u0275prov=Oe({token:n,providedIn:"root",factory:Vb});constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:()=>{let i=ie(n,{optional:!0,skipSelf:!0});return n.create(t,i||Vb())}}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new we(901,!1)}}return n})();function jb(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;bt(ut.BootstrapApplicationStart);try{let o=r?.injector??wR(i),s=[kb(),Ax,...t||[]],a=new yc({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return bR({r3Injector:a.injector,platformInjector:o,rootComponent:e})}catch(o){return Promise.reject(o)}finally{bt(ut.BootstrapApplicationEnd)}}function Pd(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var Wb=null;function oi(){return Wb}function Tv(n){Wb??=n}var Ac=class{},Od=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie($b),providedIn:"platform"})}return n})();var $b=(()=>{class n extends Od{_location;_history;_doc=ie($t);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return oi().getBaseHref(this._doc)}onPopState(t){let i=oi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=oi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Yb(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function qb(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Wr(n){return n&&n[0]!=="?"?`?${n}`:n}var Fd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie(PR),providedIn:"root"})}return n})(),NR=new Re(""),PR=(()=>{class n extends Fd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie($t).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Yb(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Wr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let s=this.prepareExternalUrl(r+Wr(o));this._platformLocation.pushState(t,i,s)}replaceState(t,i,r,o){let s=this.prepareExternalUrl(r+Wr(o));this._platformLocation.replaceState(t,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Xe(Od),Xe(NR,8))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ks=(()=>{class n{_subject=new jt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=LR(qb(Xb(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Wr(i))}normalize(t){return n.stripTrailingSlash(FR(this._basePath,Xb(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Wr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Wr;static joinWithSlash=Yb;static stripTrailingSlash=qb;static \u0275fac=function(i){return new(i||n)(Xe(Fd))};static \u0275prov=Oe({token:n,factory:()=>OR(),providedIn:"root"})}return n})();function OR(){return new Ks(Xe(Fd))}function FR(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Xb(n){return n.replace(/\/index.html$/,"")}function LR(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Av=/\s+/,Zb=[],Iv=(()=>{class n{_ngEl;_renderer;initialClasses=Zb;rawClass;stateMap=new Map;constructor(t,i){this._ngEl=t,this._renderer=i}set klass(t){this.initialClasses=t!=null?t.trim().split(Av):Zb}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(Av):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(Av).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||n)(Ct(ki),Ct(Xs))};static \u0275dir=cn({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var Ld=class{$implicit;ngForOf;index;count;constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Bi=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,o,s)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Ld(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)i.remove(o===null?void 0:o);else if(o!==null){let a=i.get(o);i.move(a,s),Jb(a,r)}});for(let r=0,o=i.length;r<o;r++){let a=i.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Jb(o,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||n)(Ct(Hr),Ct(ko),Ct(Dv))};static \u0275dir=cn({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Jb(n,e){n.context.$implicit=e.item}var vn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=zr({type:n});static \u0275inj=sr({})}return n})();function Rv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,o]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(o)}return null}var Ic=class{};var Kb="browser";var Nc=class{_doc;constructor(e){this._doc=e}manager},kd=(()=>{class n extends Nc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,o){return t.addEventListener(i,r,o),()=>this.removeEventListener(t,i,r,o)}removeEventListener(t,i,r,o){return t.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(Xe($t))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Vd=new Re(""),Fv=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(s=>{s.manager=this});let r=t.filter(s=>!(s instanceof kd));this._plugins=r.slice().reverse();let o=t.find(s=>s instanceof kd);o&&this._plugins.push(o)}addEventListener(t,i,r,o){return this._findPluginFor(i).addEventListener(t,i,r,o)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(o=>o.supports(t)),!i)throw new we(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Xe(Vd),Xe(Hn))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Nv="ng-app-id";function Qb(n){for(let e of n)e.remove()}function eS(n,e){let t=e.createElement("style");return t.textContent=n,t}function kR(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Nv}="${e}"],link[${Nv}="${e}"]`);if(r)for(let o of r)o.removeAttribute(Nv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Ov(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Lv=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,o={}){this.doc=t,this.appId=i,this.nonce=r,kR(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,eS);i?.forEach(r=>this.addUsage(r,this.external,Ov))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let o=i.get(t);o?o.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Qb(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Qb(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,eS(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Ov(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Xe($t),Xe(_d),Xe(Md,8),Xe(Mc))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Pv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},kv=/%COMP%/g;var nS="%COMP%",UR=`_nghost-${nS}`,BR=`_ngcontent-${nS}`,VR=!0,HR=new Re("",{factory:()=>VR});function zR(n){return BR.replace(kv,n)}function GR(n){return UR.replace(kv,n)}function iS(n,e){return e.map(t=>t.replace(kv,n))}var Uv=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,r,o,s,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new Pc(t,s,a,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof Bd?r.applyToHost(t):r instanceof Oc&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Mi.Emulated:o=new Bd(c,l,i,this.appId,u,s,a,f);break;case Mi.ShadowDom:return new Ud(c,t,i,s,a,this.nonce,f,l);case Mi.ExperimentalIsolatedShadowDom:return new Ud(c,t,i,s,a,this.nonce,f);default:o=new Oc(c,l,i,u,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Xe(Fv),Xe(Lv),Xe(_d),Xe(HR),Xe($t),Xe(Hn),Xe(Md),Xe(qs,8))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Pc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Pv[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(tS(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(tS(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new we(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let o=Pv[r];o?e.setAttributeNS(o,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Pv[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ur.DashCase|ur.Important)?e.style.setProperty(t,i,r&ur.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ur.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=oi().getGlobalEventTarget(this.doc,e),!e))throw new we(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(e,t,o)),this.eventManager.addEventListener(e,t,o,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function tS(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ud=class extends Pc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,o,s,a,c){super(e,r,o,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=iS(i.id,l);for(let f of l){let d=document.createElement("style");s&&d.setAttribute("nonce",s),d.textContent=f,this.shadowRoot.appendChild(d)}let u=i.getExternalStyles?.();if(u)for(let f of u){let d=Ov(f,r);s&&d.setAttribute("nonce",s),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Oc=class extends Pc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,o,s,a,c){super(e,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?iS(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&zs.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Bd=class extends Oc{contentAttr;hostAttr;constructor(e,t,i,r,o,s,a,c){let l=r+"-"+i.id;super(e,t,i,o,s,a,c,l),this.contentAttr=zR(l),this.hostAttr=GR(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Hd=class n extends Ac{supportsDOMEvents=!0;static makeCurrent(){Tv(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=jR();return t==null?null:WR(t)}resetBaseElement(){Fc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Rv(document.cookie,e)}},Fc=null;function jR(){return Fc=Fc||document.head.querySelector("base"),Fc?Fc.getAttribute("href"):null}function WR(n){return new URL(n,document.baseURI).pathname}var $R=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),rS=["alt","control","meta","shift"],qR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},XR={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},oS=(()=>{class n extends Nc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oi().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),rS.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(t,i){let r=qR[t.key]||t.key,o="";return i.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),rS.forEach(s=>{if(s!==r){let a=XR[s];a(t)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(t,i,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>i(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Xe($t))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})();async function Bv(n,e,t){let i=ae({rootComponent:n},YR(e,t));return jb(i)}function YR(n,e){return{platformRef:e?.platformRef,appProviders:[...e1,...n?.providers??[]],platformProviders:QR}}function ZR(){Hd.makeCurrent()}function JR(){return new rr}function KR(){return Hg(document),document}var QR=[{provide:Mc,useValue:Kb},{provide:xd,useValue:ZR,multi:!0},{provide:$t,useFactory:KR}];var e1=[{provide:ic,useValue:"root"},{provide:rr,useFactory:JR},{provide:Vd,useClass:kd,multi:!0},{provide:Vd,useClass:oS,multi:!0},Uv,Lv,Fv,{provide:Uo,useExisting:Uv},{provide:Ic,useClass:$R},[]];var sS=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Xe($t))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var He="primary",Yc=Symbol("RouteTitle"),jv=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Xo(n){return new jv(n)}function Vv(n,e,t){for(let i=0;i<n.length;i++){let r=n[i],o=e[i];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function pS(n,e,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let c={},l=n.slice(0,i.length);return Vv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>n.length||t.pathMatch==="full"&&e.hasChildren()&&t.path!=="**")return null;let a={};return!Vv(o,n.slice(0,o.length),a)||!Vv(s,n.slice(n.length-s.length),a)?null:{consumed:n,posParams:a}}function qd(n){return new Promise((e,t)=>{n.pipe(nr()).subscribe({next:i=>e(i),error:i=>t(i)})})}function n1(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Vi(n[t],e[t]))return!1;return!0}function Vi(n,e){let t=n?Wv(n):void 0,i=e?Wv(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!mS(n[r],e[r]))return!1;return!0}function Wv(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function mS(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,o)=>i[o]===r)}else return n===e}function i1(n){return n.length>0?n[n.length-1]:null}function Jo(n){return Su(n)?n:Ho(n)?Ot(Promise.resolve(n)):tt(n)}function gS(n){return Su(n)?qd(n):Promise.resolve(n)}var r1={exact:_S,subset:xS},vS={exact:o1,subset:s1,ignored:()=>!0},yS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$v={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function aS(n,e,t){return r1[t.paths](n.root,e.root,t.matrixParams)&&vS[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function o1(n,e){return Vi(n,e)}function _S(n,e,t){if(!qo(n.segments,e.segments)||!jd(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!_S(n.children[i],e.children[i],t))return!1;return!0}function s1(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>mS(n[t],e[t]))}function xS(n,e,t){return MS(n,e,e.segments,t)}function MS(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!qo(r,t)||e.hasChildren()||!jd(r,t,i))}else if(n.segments.length===t.length){if(!qo(n.segments,t)||!jd(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!xS(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!qo(n.segments,r)||!jd(n.segments,r,i)||!n.children[He]?!1:MS(n.children[He],e,o,i)}}function jd(n,e,t){return e.every((i,r)=>vS[t](n[r].parameters,i.parameters))}var ai=class{root;queryParams;fragment;_queryParamMap;constructor(e=new dt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){return l1.serialize(this)}},dt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Wd(this)}},$r=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Xo(this.parameters),this._parameterMap}toString(){return SS(this)}};function a1(n,e){return qo(n,e)&&n.every((t,i)=>Vi(t.parameters,e[i].parameters))}function qo(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function c1(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===He&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==He&&(t=t.concat(e(r,i)))}),t}var Zc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>new qr,providedIn:"root"})}return n})(),qr=class{parse(e){let t=new Xv(e);return new ai(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Lc(e.root,!0)}`,i=f1(e.queryParams),r=typeof e.fragment=="string"?`#${u1(e.fragment)}`:"";return`${t}${i}${r}`}},l1=new qr;function Wd(n){return n.segments.map(e=>SS(e)).join("/")}function Lc(n,e){if(!n.hasChildren())return Wd(n);if(e){let t=n.children[He]?Lc(n.children[He],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==He&&i.push(`${r}:${Lc(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=c1(n,(i,r)=>r===He?[Lc(n.children[He],!1)]:[`${r}:${Lc(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[He]!=null?`${Wd(n)}/${t[0]}`:`${Wd(n)}/(${t.join("//")})`}}function bS(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zd(n){return bS(n).replace(/%3B/gi,";")}function u1(n){return encodeURI(n)}function qv(n){return bS(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function $d(n){return decodeURIComponent(n)}function cS(n){return $d(n.replace(/\+/g,"%20"))}function SS(n){return`${qv(n.path)}${d1(n.parameters)}`}function d1(n){return Object.entries(n).map(([e,t])=>`;${qv(e)}=${qv(t)}`).join("")}function f1(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${zd(t)}=${zd(r)}`).join("&"):`${zd(t)}=${zd(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var h1=/^[^\/()?;#]+/;function Hv(n){let e=n.match(h1);return e?e[0]:""}var p1=/^[^\/()?;=#]+/;function m1(n){let e=n.match(p1);return e?e[0]:""}var g1=/^[^=?&#]+/;function v1(n){let e=n.match(g1);return e?e[0]:""}var y1=/^[^&#]+/;function _1(n){let e=n.match(y1);return e?e[0]:""}var Xv=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new dt([],{}):new dt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(e=0){if(e>50)throw new we(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,e));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,e)),(t.length>0||Object.keys(i).length>0)&&(r[He]=new dt(t,i)),r}parseSegment(){let e=Hv(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new we(4009,!1);return this.capture(e),new $r($d(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=m1(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Hv(this.remaining);r&&(i=r,this.capture(i))}e[$d(t)]=$d(i)}parseQueryParam(e){let t=v1(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let s=_1(this.remaining);s&&(i=s,this.capture(i))}let r=cS(t),o=cS(i);if(e.hasOwnProperty(r)){let s=e[r];Array.isArray(s)||(s=[s],e[r]=s),s.push(o)}else e[r]=o}parseParens(e,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Hv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new we(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=He);let a=this.parseChildren(t+1);i[s??He]=Object.keys(a).length===1&&a[He]?a[He]:new dt([],a),this.consumeOptional("//")}return i}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new we(4011,!1)}};function ES(n){return n.segments.length>0?new dt([],{[He]:n}):n}function CS(n){let e={};for(let[i,r]of Object.entries(n.children)){let o=CS(r);if(i===He&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[i]=o)}let t=new dt(n.segments,e);return x1(t)}function x1(n){if(n.numberOfChildren===1&&n.children[He]){let e=n.children[He];return new dt(n.segments.concat(e.segments),e.children)}return n}function na(n){return n instanceof ai}function wS(n,e,t=null,i=null,r=new qr){let o=DS(n);return TS(o,e,t,i,r)}function DS(n){let e;function t(o){let s={};for(let c of o.children){let l=t(c);s[c.outlet]=l}let a=new dt(o.url,s);return o===n&&(e=a),a}let i=t(n.root),r=ES(i);return e??r}function TS(n,e,t,i,r){let o=n;for(;o.parent;)o=o.parent;if(e.length===0)return zv(o,o,o,t,i,r);let s=M1(e);if(s.toRoot())return zv(o,o,new dt([],{}),t,i,r);let a=b1(s,o,n),c=a.processChildren?Uc(a.segmentGroup,a.index,s.commands):IS(a.segmentGroup,a.index,s.commands);return zv(o,a.segmentGroup,c,t,i,r)}function Xd(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Hc(n){return typeof n=="object"&&n!=null&&n.outlets}function lS(n,e,t){n||="\u0275";let i=new ai;return i.queryParams={[n]:e},t.parse(t.serialize(i)).queryParams[n]}function zv(n,e,t,i,r,o){let s={};for(let[l,u]of Object.entries(i??{}))s[l]=Array.isArray(u)?u.map(f=>lS(l,f,o)):lS(l,u,o);let a;n===e?a=t:a=AS(n,e,t);let c=ES(CS(a));return new ai(c,s,r)}function AS(n,e,t){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===e?i[r]=t:i[r]=AS(o,e,t)}),new dt(n.segments,i)}var Yd=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Xd(i[0]))throw new we(4003,!1);let r=i.find(Hc);if(r&&r!==i1(i))throw new we(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function M1(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Yd(!0,0,n);let e=0,t=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Yd(t,e,i)}var ea=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function b1(n,e,t){if(n.isAbsolute)return new ea(e,!0,0);if(!t)return new ea(e,!1,NaN);if(t.parent===null)return new ea(t,!0,0);let i=Xd(n.commands[0])?0:1,r=t.segments.length-1+i;return S1(t,r,n.numberOfDoubleDots)}function S1(n,e,t){let i=n,r=e,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new we(4005,!1);r=i.segments.length}return new ea(i,!1,r-o)}function E1(n){return Hc(n[0])?n[0].outlets:{[He]:n}}function IS(n,e,t){if(n??=new dt([],{}),n.segments.length===0&&n.hasChildren())return Uc(n,e,t);let i=C1(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new dt(n.segments.slice(0,i.pathIndex),{});return o.children[He]=new dt(n.segments.slice(i.pathIndex),n.children),Uc(o,0,r)}else return i.match&&r.length===0?new dt(n.segments,{}):i.match&&!n.hasChildren()?Yv(n,e,t):i.match?Uc(n,0,r):Yv(n,e,t)}function Uc(n,e,t){if(t.length===0)return new dt(n.segments,{});{let i=E1(t),r={};if(Object.keys(i).some(o=>o!==He)&&n.children[He]&&n.numberOfChildren===1&&n.children[He].segments.length===0){let o=Uc(n.children[He],e,t);return new dt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=IS(n.children[o],e,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new dt(n.segments,r)}}function C1(n,e,t){let i=0,r=e,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return o;let s=n.segments[r],a=t[i];if(Hc(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!dS(c,l,s))return o;i+=2}else{if(!dS(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Yv(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let o=t[r];if(Hc(o)){let c=w1(o.outlets);return new dt(i,c)}if(r===0&&Xd(t[0])){let c=n.segments[e];i.push(new $r(c.path,uS(t[0]))),r++;continue}let s=Hc(o)?o.outlets[He]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&Xd(a)?(i.push(new $r(s,uS(a))),r+=2):(i.push(new $r(s,{})),r++)}return new dt(i,{})}function w1(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Yv(new dt([],{}),0,i))}),e}function uS(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function dS(n,e,t){return n==t.path&&Vi(e,t.parameters)}var Bc="imperative",Kt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Kt||{}),Wn=class{id;url;constructor(e,t){this.id=e,this.url=t}},Yo=class extends Wn{type=Kt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},hr=class extends Wn{urlAfterRedirects;type=Kt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yn=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(yn||{}),zc=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(zc||{}),si=class extends Wn{reason;code;type=Kt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function RS(n){return n instanceof si&&(n.code===yn.Redirect||n.code===yn.SupersededByNewNavigation)}var pr=class extends Wn{reason;code;type=Kt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},Zo=class extends Wn{error;target;type=Kt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Gc=class extends Wn{urlAfterRedirects;state;type=Kt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zd=class extends Wn{urlAfterRedirects;state;type=Kt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jd=class extends Wn{urlAfterRedirects;state;shouldActivate;type=Kt.GuardsCheckEnd;constructor(e,t,i,r,o){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Kd=class extends Wn{urlAfterRedirects;state;type=Kt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qd=class extends Wn{urlAfterRedirects;state;type=Kt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ef=class{route;type=Kt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},tf=class{route;type=Kt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},nf=class{snapshot;type=Kt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rf=class{snapshot;type=Kt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},of=class{snapshot;type=Kt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sf=class{snapshot;type=Kt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ia=class{},jc=class{},ra=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function D1(n){return!(n instanceof ia)&&!(n instanceof ra)&&!(n instanceof jc)}var af=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ca(this.rootInjector)}},ca=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new af(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Xe(Wt))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cf=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Zv(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Zv(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Jv(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Jv(e,this._root).map(t=>t.value)}};function Zv(n,e){if(n===e.value)return e;for(let t of e.children){let i=Zv(n,t);if(i)return i}return null}function Jv(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Jv(n,t);if(i.length)return i.unshift(e),i}return[]}var jn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Qs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Wc=class extends cf{snapshot;constructor(e,t){super(e),this.snapshot=t,sy(this,e)}toString(){return this.snapshot.toString()}};function NS(n,e){let t=T1(n,e),i=new rn([new $r("",{})]),r=new rn({}),o=new rn({}),s=new rn({}),a=new rn(""),c=new Xr(i,r,s,a,o,He,n,t.root);return c.snapshot=t.root,new Wc(new jn(c,[]),t)}function T1(n,e){let t={},i={},r={},s=new oa([],t,r,"",i,He,n,null,{},e);return new $c("",new jn(s,[]))}var Xr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,o,s,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(It(l=>l[Yc]))??tt(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(It(e=>Xo(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(It(e=>Xo(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function oy(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ae(ae({},e.params),n.params),data:ae(ae({},e.data),n.data),resolve:ae(ae(ae(ae({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ae({},n.params),data:ae({},n.data),resolve:ae(ae({},n.data),n._resolvedData??{})},r&&OS(r)&&(i.resolve[Yc]=r.title),i}var oa=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Yc]}constructor(e,t,i,r,o,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},$c=class extends cf{url;constructor(e,t){super(t),this.url=e,sy(this,t)}toString(){return PS(this._root)}};function sy(n,e){e.value._routerState=n,e.children.forEach(t=>sy(n,t))}function PS(n){let e=n.children.length>0?` { ${n.children.map(PS).join(", ")} } `:"";return`${n.value}${e}`}function Gv(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Vi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Vi(e.params,t.params)||n.paramsSubject.next(t.params),n1(e.url,t.url)||n.urlSubject.next(t.url),Vi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Kv(n,e){let t=Vi(n.params,e.params)&&a1(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Kv(n.parent,e.parent))}function OS(n){return typeof n.title=="string"||n.title===null}var FS=new Re(""),Jc=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=He;activateEvents=new zt;deactivateEvents=new zt;attachEvents=new zt;detachEvents=new zt;routerOutletData=Gb();parentContexts=ie(ca);location=ie(Hr);changeDetector=ie(Tc);inputBinder=ie(ff,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new we(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new we(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new we(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new we(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Qv(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=cn({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Vo]})}return n})(),Qv=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Xr?this.route:e===ca?this.childContexts:e===FS?this.outletData:this.parent.get(e,t)}},ff=new Re("");var ay=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=an({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Dn(0,"router-outlet")},dependencies:[Jc],encapsulation:2})}return n})();function cy(n){let e=n.children&&n.children.map(cy),t=e?et(ae({},n),{children:e}):ae({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==He&&(t.component=ay),t}function A1(n,e,t){let i=qc(n,e._root,t?t._root:void 0);return new Wc(i,e)}function qc(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=I1(n,e,t);return new jn(i,r)}else{if(n.shouldAttach(e.value)){let o=n.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>qc(n,a)),s}}let i=R1(e.value),r=e.children.map(o=>qc(n,o));return new jn(i,r)}}function I1(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return qc(n,i,r);return qc(n,i)})}function R1(n){return new Xr(new rn(n.url),new rn(n.params),new rn(n.queryParams),new rn(n.fragment),new rn(n.data),n.outlet,n.component,n)}var sa=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},LS="ngNavigationCancelingError";function lf(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=na(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=kS(!1,yn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function kS(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[LS]=!0,t.cancellationCode=e,t}function N1(n){return US(n)&&na(n.url)}function US(n){return!!n&&n[LS]}var ey=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Gv(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Qs(t);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(e,t,s.children)}else this.deactivateChildRoutes(e,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Qs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,o=Qs(e);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Qs(t);e.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new sf(o.value.snapshot))}),e.children.length&&this.forwardEvent(new rf(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,o=t?t.value:null;if(Gv(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,s.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Gv(a.route.value),this.activateChildRoutes(e,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(e,null,s.children)}else this.activateChildRoutes(e,null,i)}},uf=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ta=class{component;route;constructor(e,t){this.component=e,this.route=t}};function P1(n,e,t){let i=n._root,r=e?e._root:null;return kc(i,r,t,[i.value])}function O1(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function la(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!mm(n)?n:e.get(n):i}function kc(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Qs(e);return n.children.forEach(s=>{F1(s,o[s.value.outlet],t,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Vc(a,t.getContext(s),r)),r}function F1(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=L1(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new uf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?kc(n,e,a?a.children:null,i,r):kc(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ta(a.outlet.component,s))}else s&&Vc(e,a,r),r.canActivateChecks.push(new uf(i)),o.component?kc(n,null,a?a.children:null,i,r):kc(n,null,t,i,r);return r}function L1(n,e,t){if(typeof t=="function")return mn(e._environmentInjector,()=>t(n,e));switch(t){case"pathParamsChange":return!qo(n.url,e.url);case"pathParamsOrQueryParamsChange":return!qo(n.url,e.url)||!Vi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Kv(n,e)||!Vi(n.queryParams,e.queryParams);default:return!Kv(n,e)}}function Vc(n,e,t){let i=Qs(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?e?Vc(s,e.children.getContext(o),t):Vc(s,null,t):Vc(s,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ta(e.outlet.component,r)):t.canDeactivateChecks.push(new ta(null,r)):t.canDeactivateChecks.push(new ta(null,r))}function Kc(n){return typeof n=="function"}function k1(n){return typeof n=="boolean"}function U1(n){return n&&Kc(n.canLoad)}function B1(n){return n&&Kc(n.canActivate)}function V1(n){return n&&Kc(n.canActivateChild)}function H1(n){return n&&Kc(n.canDeactivate)}function z1(n){return n&&Kc(n.canMatch)}function BS(n){return n instanceof xo||n?.name==="EmptyError"}var Gd=Symbol("INITIAL_VALUE");function aa(){return hi(n=>Xp(n.map(e=>e.pipe(tr(1),Jp(Gd)))).pipe(It(e=>{for(let t of e)if(t!==!0){if(t===Gd)return Gd;if(t===!1||G1(t))return t}return!0}),er(e=>e!==Gd),tr(1)))}function G1(n){return na(n)||n instanceof sa}function VS(n){return n.aborted?tt(void 0).pipe(tr(1)):new st(e=>{let t=()=>{e.next(),e.complete()};return n.addEventListener("abort",t),()=>n.removeEventListener("abort",t)})}function HS(n){return qa(VS(n))}function j1(n){return bn(e=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=e;return o.length===0&&r.length===0?tt(et(ae({},e),{guardsResult:!0})):W1(o,t,i).pipe(bn(s=>s&&k1(s)?$1(t,r,n):tt(s)),It(s=>et(ae({},e),{guardsResult:s})))})}function W1(n,e,t){return Ot(n).pipe(bn(i=>J1(i.component,i.route,t,e)),nr(i=>i!==!0,!0))}function $1(n,e,t){return Ot(e).pipe(Du(i=>ws(X1(i.route.parent,t),q1(i.route,t),Z1(n,i.path),Y1(n,i.route))),nr(i=>i!==!0,!0))}function q1(n,e){return n!==null&&e&&e(new of(n)),tt(!0)}function X1(n,e){return n!==null&&e&&e(new nf(n)),tt(!0)}function Y1(n,e){let t=e.routeConfig?e.routeConfig.canActivate:null;if(!t||t.length===0)return tt(!0);let i=t.map(r=>Wa(()=>{let o=e._environmentInjector,s=la(r,o),a=B1(s)?s.canActivate(e,n):mn(o,()=>s(e,n));return Jo(a).pipe(nr())}));return tt(i).pipe(aa())}function Z1(n,e){let t=e[e.length-1],r=e.slice(0,e.length-1).reverse().map(o=>O1(o)).filter(o=>o!==null).map(o=>Wa(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,l=la(a,c),u=V1(l)?l.canActivateChild(t,n):mn(c,()=>l(t,n));return Jo(u).pipe(nr())});return tt(s).pipe(aa())}));return tt(r).pipe(aa())}function J1(n,e,t,i){let r=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!r||r.length===0)return tt(!0);let o=r.map(s=>{let a=e._environmentInjector,c=la(s,a),l=H1(c)?c.canDeactivate(n,e,t,i):mn(a,()=>c(n,e,t,i));return Jo(l).pipe(nr())});return tt(o).pipe(aa())}function K1(n,e,t,i,r){let o=e.canLoad;if(o===void 0||o.length===0)return tt(!0);let s=o.map(a=>{let c=la(a,n),l=U1(c)?c.canLoad(e,t):mn(n,()=>c(e,t)),u=Jo(l);return r?u.pipe(HS(r)):u});return tt(s).pipe(aa(),zS(i))}function zS(n){return jp(Kn(e=>{if(typeof e!="boolean")throw lf(n,e)}),It(e=>e===!0))}function Q1(n,e,t,i,r,o){let s=e.canMatch;if(!s||s.length===0)return tt(!0);let a=s.map(c=>{let l=la(c,n),u=z1(l)?l.canMatch(e,t,r):mn(n,()=>l(e,t,r));return Jo(u).pipe(HS(o))});return tt(a).pipe(aa(),zS(i))}var fr=class n extends Error{segmentGroup;constructor(e){super(),this.segmentGroup=e||null,Object.setPrototypeOf(this,n.prototype)}},Xc=class n extends Error{urlTree;constructor(e){super(),this.urlTree=e,Object.setPrototypeOf(this,n.prototype)}};function eN(n){throw new we(4e3,!1)}function tN(n){throw kS(!1,yn.GuardRejected)}var ty=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}async lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[He])throw eN(`${e.redirectTo}`);r=r.children[He]}}async applyRedirectCommands(e,t,i,r,o){let s=await nN(t,r,o);if(s instanceof ai)throw new Xc(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),e,i);if(s[0]==="/")throw new Xc(a);return a}applyRedirectCreateUrlTree(e,t,i,r){let o=this.createSegmentGroup(e,t.root,i,r);return new ai(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=t[a]}else i[r]=o}),i}createSegmentGroup(e,t,i,r){let o=this.createSegments(e,t.segments,i,r),s={};return Object.entries(t.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(e,c,i,r)}),new dt(o,s)}createSegments(e,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(e,o,r):this.findOrReturn(o,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new we(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}};function nN(n,e,t){if(typeof n=="string")return Promise.resolve(n);let i=n;return qd(Jo(mn(t,()=>i(e))))}function iN(n,e){return n.providers&&!n._injector&&(n._injector=Sc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Hi(n){return n.outlet||He}function rN(n,e){let t=n.filter(i=>Hi(i)===e);return t.push(...n.filter(i=>Hi(i)!==e)),t}var ny={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function GS(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function oN(n,e,t,i,r,o,s){let a=jS(n,e,t);if(!a.matched)return tt(a);let c=GS(o(a));return i=iN(e,i),Q1(i,e,t,r,c,s).pipe(It(l=>l===!0?a:ae({},ny)))}function jS(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ae({},ny):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||pS)(t,n,e);if(!r)return ae({},ny);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?ae(ae({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function fS(n,e,t,i){return t.length>0&&cN(n,t,i)?{segmentGroup:new dt(e,aN(i,new dt(t,n.children))),slicedSegments:[]}:t.length===0&&lN(n,t,i)?{segmentGroup:new dt(n.segments,sN(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new dt(n.segments,n.children),slicedSegments:t}}function sN(n,e,t,i){let r={};for(let o of t)if(hf(n,e,o)&&!i[Hi(o)]){let s=new dt([],{});r[Hi(o)]=s}return ae(ae({},i),r)}function aN(n,e){let t={};t[He]=e;for(let i of n)if(i.path===""&&Hi(i)!==He){let r=new dt([],{});t[Hi(i)]=r}return t}function cN(n,e,t){return t.some(i=>hf(n,e,i)&&Hi(i)!==He)}function lN(n,e,t){return t.some(i=>hf(n,e,i))}function hf(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function uN(n,e,t){return e.length===0&&!n.children[t]}var iy=class{};async function dN(n,e,t,i,r,o,s="emptyOnly",a){return new ry(n,e,t,i,r,s,o,a).recognize()}var fN=31,ry=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,o,s,a,c){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new ty(this.urlSerializer,this.urlTree)}noMatchError(e){return new we(4002,`'${e.segmentGroup}'`)}async recognize(){let e=fS(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(e),r=new jn(i,t),o=new $c("",r),s=wS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(e){let t=new oa([],Object.freeze({}),Object.freeze(ae({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),He,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,e,He,t),rootSnapshot:t}}catch(i){if(i instanceof Xc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof fr?this.noMatchError(i):i}}async processSegmentGroup(e,t,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(e,t,i,o);let s=await this.processSegment(e,t,i,i.segments,r,!0,o);return s instanceof jn?[s]:[]}async processChildren(e,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],u=rN(t,c),f=await this.processSegmentGroup(e,u,l,c,r);s.push(...f)}let a=WS(s);return hN(a),a}async processSegment(e,t,i,r,o,s,a){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,o,s,a)}catch(l){if(l instanceof fr||BS(l))continue;throw l}if(uN(i,r,o))return new iy;throw new fr(i)}async processSegmentAgainstRoute(e,t,i,r,o,s,a,c){if(Hi(i)!==s&&(s===He||!hf(r,o,i)))throw new fr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(e,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,o,s,c);throw new fr(r)}async expandSegmentAgainstRouteUsingRedirect(e,t,i,r,o,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:f,remainingSegments:d}=jS(t,r,o);if(!c)throw new fr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>fN&&(this.allowRedirects=!1));let h=this.createSnapshot(e,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,GS(h),e),x=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(e,i,t,x.concat(d),s,!1,a)}createSnapshot(e,t,i,r,o){let s=new oa(i,r,Object.freeze(ae({},this.urlTree.queryParams)),this.urlTree.fragment,mN(t),Hi(t),t.component??t._loadedComponent??null,t,gN(t),e),a=oy(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(e,t,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=C=>this.createSnapshot(e,i,C.consumedSegments,C.parameters,s),c=await qd(oN(t,i,r,e,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new fr(t);e=i._injector??e;let{routes:l}=await this.getChildConfig(e,i,r),u=i._loadedInjector??e,{parameters:f,consumedSegments:d,remainingSegments:h}=c,g=this.createSnapshot(e,i,d,f,s),{segmentGroup:x,slicedSegments:m}=fS(t,d,h,l);if(m.length===0&&x.hasChildren()){let C=await this.processChildren(u,l,x,g);return new jn(g,C)}if(l.length===0&&m.length===0)return new jn(g,[]);let p=Hi(i)===o,M=await this.processSegment(u,l,x,m,p?He:o,!0,g);return new jn(g,M instanceof jn?[M]:[])}async getChildConfig(e,t,i){if(t.children)return{routes:t.children,injector:e};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(e).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await qd(K1(e,t,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(e,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw tN(t)}return{routes:[],injector:e}}};function hN(n){n.sort((e,t)=>e.value.outlet===He?-1:t.value.outlet===He?1:e.value.outlet.localeCompare(t.value.outlet))}function pN(n){let e=n.value.routeConfig;return e&&e.path===""}function WS(n){let e=[],t=new Set;for(let i of n){if(!pN(i)){e.push(i);continue}let r=e.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=WS(i.children);e.push(new jn(i.value,r))}return e.filter(i=>!t.has(i))}function mN(n){return n.data||{}}function gN(n){return n.resolve||{}}function vN(n,e,t,i,r,o,s){return bn(async a=>{let{state:c,tree:l}=await dN(n,e,t,i,a.extractedUrl,r,o,s);return et(ae({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function yN(n){return bn(e=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=e;if(!i.length)return tt(e);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of $S(a))o.add(c);let s=0;return Ot(o).pipe(Du(a=>r.has(a)?_N(a,t,n):(a.data=oy(a,a.parent,n).resolve,tt(void 0))),Kn(()=>s++),Tu(1),bn(a=>s===o.size?tt(e):on))})}function $S(n){let e=n.children.map(t=>$S(t)).flat();return[n,...e]}function _N(n,e,t){let i=n.routeConfig,r=n._resolve;return i?.title!==void 0&&!OS(i)&&(r[Yc]=i.title),Wa(()=>(n.data=oy(n,n.parent,t).resolve,xN(r,n,e).pipe(It(o=>(n._resolvedData=o,n.data=ae(ae({},n.data),o),null)))))}function xN(n,e,t){let i=Wv(n);if(i.length===0)return tt({});let r={};return Ot(i).pipe(bn(o=>MN(n[o],e,t).pipe(nr(),Kn(s=>{if(s instanceof sa)throw lf(new qr,s);r[o]=s}))),Tu(1),It(()=>r),$a(o=>BS(o)?on:qp(o)))}function MN(n,e,t){let i=e._environmentInjector,r=la(n,i),o=r.resolve?r.resolve(e,t):mn(i,()=>r(e,t));return Jo(o)}function hS(n){return hi(e=>{let t=n(e);return t?Ot(t).pipe(It(()=>e)):tt(e)})}var ly=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===He);return i}getResolvedTitleForRoute(t){return t.data[Yc]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie(qS),providedIn:"root"})}return n})(),qS=(()=>{class n extends ly{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Xe(sS))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qc=new Re("",{factory:()=>({})}),el=new Re(""),XS=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(_v);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await gS(mn(t,()=>i.loadComponent())),s=await JS(ZS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await YS(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function YS(n,e,t,i){let r=await gS(mn(t,()=>n.loadChildren())),o=await JS(ZS(r)),s;o instanceof wd||Array.isArray(o)?s=o:s=await e.compileModuleAsync(o),i&&i(n);let a,c,l=!1,u;return Array.isArray(s)?(c=s,l=!0):(a=s.create(t).injector,u=s,c=a.get(el,[],{optional:!0,self:!0}).flat()),{routes:c.map(cy),injector:a,factory:u}}function bN(n){return n&&typeof n=="object"&&"default"in n}function ZS(n){return bN(n)?n.default:n}async function JS(n){return n}var pf=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie(SN),providedIn:"root"})}return n})(),SN=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),KS=new Re("");var EN=()=>{},QS=new Re(""),eE=(()=>{class n{currentNavigation=_i(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=_i(null);events=new jt;transitionAbortWithErrorSubject=new jt;configLoader=ie(XS);environmentInjector=ie(Wt);destroyRef=ie(lr);urlSerializer=ie(Zc);rootContexts=ie(ca);location=ie(Ks);inputBindingEnabled=ie(ff,{optional:!0})!==null;titleStrategy=ie(ly);options=ie(Qc,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(pf);createViewTransition=ie(KS,{optional:!0});navigationErrorHandler=ie(QS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>tt(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new ef(r)),i=r=>this.events.next(new tf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;gn(()=>{this.transitions?.next(et(ae({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new rn(null),this.transitions.pipe(er(i=>i!==null),hi(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return tt(i).pipe(hi(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),on;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?et(ae({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new pr(a.id,this.urlSerializer.serialize(a.rawUrl),"",zc.IgnoredSameUrlNavigation)),a.resolve(!1),on;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return tt(a).pipe(hi(f=>(this.events.next(new Yo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?on:Promise.resolve(f))),vN(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Kn(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(d=>(d.finalUrl=f.urlAfterRedirects,d)),this.events.next(new jc)}),hi(f=>Ot(i.routesRecognizeHandler.deferredHandle??tt(void 0)).pipe(It(()=>f))),Kn(()=>{let f=new Gc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:d,source:h,restoredState:g,extras:x}=a,m=new Yo(f,this.urlSerializer.serialize(d),h,g);this.events.next(m);let p=NS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=et(ae({},a),{targetSnapshot:p,urlAfterRedirects:d,extras:et(ae({},x),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(M=>(M.finalUrl=d,M)),tt(i)}else return this.events.next(new pr(a.id,this.urlSerializer.serialize(a.extractedUrl),"",zc.IgnoredByUrlHandlingStrategy)),a.resolve(!1),on}),It(a=>{let c=new Zd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=i=et(ae({},a),{guards:P1(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),j1(a=>this.events.next(a)),hi(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw lf(this.urlSerializer,a.guardsResult);let c=new Jd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!s())return on;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",yn.GuardRejected),on;if(a.guards.canActivateChecks.length===0)return tt(a);let l=new Kd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!s())return on;let u=!1;return tt(a).pipe(yN(this.paramsInheritanceStrategy),Kn({next:()=>{u=!0;let f=new Qd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(a,"",yn.NoDataFromResolver)}}))}),hS(a=>{let c=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let d=u._environmentInjector;f.push(this.configLoader.loadComponent(d,u.routeConfig).then(h=>{u.component=h}))}for(let d of u.children)f.push(...c(d));return f},l=c(a.targetSnapshot.root);return l.length===0?tt(a):Ot(Promise.all(l).then(()=>a))}),hS(()=>this.afterPreactivation()),hi(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?Ot(l).pipe(It(()=>i)):tt(i)}),tr(1),hi(a=>{let c=A1(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=et(ae({},a),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new ia);let l=i.beforeActivateHandler.deferredHandle;return l?Ot(l.then(()=>a)):tt(a)}),Kn(a=>{new ey(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(c=>(c.abort=EN,c)),this.lastSuccessfulNavigation.set(gn(this.currentNavigation)),this.events.next(new hr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),qa(VS(o.signal).pipe(er(()=>!r&&!i.targetRouterState),Kn(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",yn.Aborted)}))),Kn({complete:()=>{r=!0}}),qa(this.transitionAbortWithErrorSubject.pipe(Kn(a=>{throw a}))),Zp(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$a(a=>{if(r=!0,this.destroyed)return i.resolve(!1),on;if(US(a))this.events.next(new si(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),N1(a)?this.events.next(new ra(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Zo(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let l=mn(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof sa){let{message:u,cancellationCode:f}=lf(this.urlSerializer,l);this.events.next(new si(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new ra(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return on}))}))}cancelNavigationTransition(t,i,r){let o=new si(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=gn(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function CN(n){return n!==Bc}var tE=new Re("");var nE=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie(wN),providedIn:"root"})}return n})(),df=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}shouldDestroyInjector(e){return!0}},wN=(()=>{class n extends df{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Vr(n)))(r||n)}})();static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uy=(()=>{class n{urlSerializer=ie(Zc);options=ie(Qc,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(Ks);urlHandlingStrategy=ie(pf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ai;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,s=r??o;return s instanceof ai?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=NS(null,ie(Wt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>ie(DN),providedIn:"root"})}return n})(),DN=(()=>{class n extends uy{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Yo?this.updateStateMemento():t instanceof pr?this.commitTransition(i):t instanceof Gc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof ia?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof si&&!RS(t)?this.restoreHistory(i):t instanceof Zo?this.restoreHistory(i,!0):t instanceof hr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,c=ae(ae({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=ae(ae({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Vr(n)))(r||n)}})();static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dy(n,e){n.events.pipe(er(t=>t instanceof hr||t instanceof si||t instanceof Zo||t instanceof pr),It(t=>t instanceof hr||t instanceof pr?0:(t instanceof si?t.code===yn.Redirect||t.code===yn.SupersededByNewNavigation:!1)?2:1),er(t=>t!==2),tr(1)).subscribe(()=>{e()})}var mf=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(dv);stateManager=ie(uy);options=ie(Qc,{optional:!0})||{};pendingTasks=ie(Ur);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie(eE);urlSerializer=ie(Zc);location=ie(Ks);urlHandlingStrategy=ie(pf);injector=ie(Wt);_events=new jt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(nE);injectorCleanup=ie(tE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(el,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(ff,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new nn;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=gn(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof si&&i.code!==yn.Redirect&&i.code!==yn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof hr)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof ra){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ae({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||CN(r.source)},s);this.scheduleNavigation(a,Bc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}D1(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Bc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,o)=>{this.navigateToSyncWithBrowser(t,r,i,o)})}navigateToSyncWithBrowser(t,i,r,o){let s=r?.navigationId?r:null;if(r){let c=ae({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,s,o).catch(c=>{this.disposed||this.injector.get(Fi)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return gn(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(cy),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ae(ae({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let d=r?r.snapshot:this.routerState.snapshot.root;f=DS(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),f=this.currentUrlTree.root}return TS(f,t,u,l??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=na(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Bc,null,i)}navigate(t,i={skipLocationChange:!1}){return TN(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Qa(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ae({},yS):i===!1?r=ae({},$v):r=ae(ae({},$v),i),na(t))return aS(this.currentUrlTree,t,r);let o=this.parseUrl(t);return aS(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((f,d)=>{a=f,c=d});let u=this.pendingTasks.add();return dy(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function TN(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new we(4008,!1)}var RN=new Re("");function fy(n,...e){return Rs([{provide:el,multi:!0,useValue:n},[],{provide:Xr,useFactory:NN},{provide:Dd,multi:!0,useFactory:PN},e.map(t=>t.\u0275providers)])}function NN(){return ie(mf).routerState.root}function PN(){let n=ie(pi);return e=>{let t=n.get(zo);if(e!==t.components[0])return;let i=n.get(mf),r=n.get(ON);n.get(FN)===1&&i.initialNavigation(),n.get(LN,null,{optional:!0})?.setUpPreloading(),n.get(RN,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ON=new Re("",{factory:()=>new jt}),FN=new Re("",{factory:()=>1});var LN=new Re("");var iE=[];var rE={providers:[ig(),fy(iE)]};var UN=n=>({scrolled:n}),oE=n=>({open:n}),gf=class n{isScrolled=!1;isMobileMenuOpen=!1;ngOnInit(){}onWindowScroll(){this.isScrolled=window.scrollY>50}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}scrollToSection(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"}),this.isMobileMenuOpen=!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-navbar"]],hostBindings:function(t,i){t&1&&Bt("scroll",function(){return i.onWindowScroll()},$g)},decls:42,vars:9,consts:[[1,"navbar",3,"ngClass"],[1,"container","nav-container"],[1,"nav-logo",3,"click"],[1,"text-gradient"],[1,"nav-links"],[3,"click"],[1,"nav-cta",3,"click"],[1,"mobile-menu-btn",3,"click","ngClass"],[1,"mobile-menu",3,"ngClass"],[1,"mobile-nav-links"],[1,"mobile-nav-cta",3,"click"]],template:function(t,i){t&1&&(pe(0,"nav",0)(1,"div",1)(2,"div",2),Bt("click",function(){return i.scrollToSection("hero")}),pe(3,"span",3),Te(4,"Portfolio."),Se()(),pe(5,"ul",4)(6,"li")(7,"a",5),Bt("click",function(){return i.scrollToSection("hero")}),Te(8,"Home"),Se()(),pe(9,"li")(10,"a",5),Bt("click",function(){return i.scrollToSection("about")}),Te(11,"About"),Se()(),pe(12,"li")(13,"a",5),Bt("click",function(){return i.scrollToSection("skills")}),Te(14,"Skills"),Se()(),pe(15,"li")(16,"a",5),Bt("click",function(){return i.scrollToSection("projects")}),Te(17,"Projects"),Se()(),pe(18,"li")(19,"a",6),Bt("click",function(){return i.scrollToSection("contact")}),Te(20,"Hire Me"),Se()()(),pe(21,"div",7),Bt("click",function(){return i.toggleMobileMenu()}),Dn(22,"span")(23,"span")(24,"span"),Se()(),pe(25,"div",8)(26,"ul",9)(27,"li")(28,"a",5),Bt("click",function(){return i.scrollToSection("hero")}),Te(29,"Home"),Se()(),pe(30,"li")(31,"a",5),Bt("click",function(){return i.scrollToSection("about")}),Te(32,"About"),Se()(),pe(33,"li")(34,"a",5),Bt("click",function(){return i.scrollToSection("skills")}),Te(35,"Skills"),Se()(),pe(36,"li")(37,"a",5),Bt("click",function(){return i.scrollToSection("projects")}),Te(38,"Projects"),Se()(),pe(39,"li")(40,"a",10),Bt("click",function(){return i.scrollToSection("contact")}),Te(41,"Hire Me"),Se()()()()()),t&2&&(ln("ngClass",wc(3,UN,i.isScrolled)),_t(21),ln("ngClass",wc(5,oE,i.isMobileMenuOpen)),_t(4),ln("ngClass",wc(7,oE,i.isMobileMenuOpen)))},dependencies:[vn,Iv],styles:[".navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:80px;display:flex;align-items:center;z-index:1000;transition:var(--transition-smooth);background:transparent;border-bottom:1px solid transparent}.navbar.scrolled[_ngcontent-%COMP%]{height:64px;background:#05070acc;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--glass-border)}.nav-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.nav-logo[_ngcontent-%COMP%]{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;cursor:pointer}.nav-links[_ngcontent-%COMP%]{display:flex;list-style:none;gap:2.5rem;align-items:center}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--font-heading);font-weight:500;font-size:.95rem;color:var(--text-secondary);text-decoration:none;cursor:pointer;transition:var(--transition-smooth)}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-primary)}.nav-cta[_ngcontent-%COMP%]{background:var(--accent-primary);color:#fff!important;padding:8px 20px;border-radius:50px;box-shadow:0 10px 15px -3px #6366f14d}.nav-cta[_ngcontent-%COMP%]:hover{background:var(--accent-secondary)!important;transform:translateY(-2px)}.mobile-menu-btn[_ngcontent-%COMP%]{display:none;width:30px;height:20px;position:relative;cursor:pointer;z-index:1001}.mobile-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%;height:2px;background:var(--text-primary);position:absolute;transition:var(--transition-smooth)}.mobile-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:9px}.mobile-menu-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){top:18px}.mobile-menu-btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg);top:9px}.mobile-menu-btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){opacity:0}.mobile-menu-btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg);top:9px}.mobile-menu[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100vh;background:var(--bg-dark);display:flex;align-items:center;justify-content:center;transform:translateY(-100%);transition:var(--transition-smooth);z-index:1000}.mobile-menu.open[_ngcontent-%COMP%]{transform:translateY(0)}.mobile-nav-links[_ngcontent-%COMP%]{list-style:none;text-align:center;display:flex;flex-direction:column;gap:2rem}.mobile-nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--text-primary);text-decoration:none}@media(max-width:768px){.nav-links[_ngcontent-%COMP%]{display:none}.mobile-menu-btn[_ngcontent-%COMP%]{display:block}}"]})};var DE=0,Xy=1,TE=2;var Tl=1,AE=2,Ra=3,Mr=0,Rn=1,qi=2,Xi=0,rs=1,Al=2,Yy=3,Zy=4,IE=5;var no=100,RE=101,NE=102,PE=103,OE=104,FE=200,LE=201,kE=202,UE=203,Vf=204,Hf=205,BE=206,VE=207,HE=208,zE=209,GE=210,jE=211,WE=212,$E=213,qE=214,zf=0,Gf=1,jf=2,os=3,Wf=4,$f=5,qf=6,Xf=7,vh=0,XE=1,YE=2,Ti=0,Jy=1,Ky=2,Qy=3,e_=4,t_=5,n_=6,i_=7;var ky=300,lo=301,cs=302,yh=303,_h=304,Il=306,Yf=1e3,ji=1001,Zf=1002,en=1003,ZE=1004;var Rl=1005;var dn=1006,xh=1007;var uo=1008;var kn=1009,r_=1010,o_=1011,Na=1012,Mh=1013,Ai=1014,Ii=1015,Yi=1016,bh=1017,Sh=1018,Pa=1020,s_=35902,a_=35899,c_=1021,l_=1022,li=1023,Wi=1026,fo=1027,u_=1028,Eh=1029,ls=1030,Ch=1031;var wh=1033,Nl=33776,Pl=33777,Ol=33778,Fl=33779,Dh=35840,Th=35841,Ah=35842,Ih=35843,Rh=36196,Nh=37492,Ph=37496,Oh=37488,Fh=37489,Lh=37490,kh=37491,Uh=37808,Bh=37809,Vh=37810,Hh=37811,zh=37812,Gh=37813,jh=37814,Wh=37815,$h=37816,qh=37817,Xh=37818,Yh=37819,Zh=37820,Jh=37821,Kh=36492,Qh=36494,ep=36495,tp=36283,np=36284,ip=36285,rp=36286;var sl=2300,Jf=2301,Bf=2302,Uy=2303,By=2400,Vy=2401,Hy=2402;var JE=3200;var d_=0,KE=1,Er="",Xn="srgb",ss="srgb-linear",al="linear",gt="srgb";var ns=7680;var zy=519,QE=512,eC=513,tC=514,op=515,nC=516,iC=517,sp=518,rC=519,Gy=35044;var f_="300 es",Di=2e3,Sa=2001;function BN(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function VN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oC(){let n=cl("canvas");return n.style.display="block",n}var sE={},Ea=null;function h_(...n){let e="THREE."+n.shift();Ea?Ea("log",e,...n):console.log(e,...n)}function sC(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=sC(n);let e="THREE."+n.shift();if(Ea)Ea("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){n=sC(n);let e="THREE."+n.shift();if(Ea)Ea("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ll(...n){let e=n.join(" ");e in sE||(sE[e]=!0,Le(...n))}function aC(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var cC={[zf]:Gf,[jf]:qf,[Wf]:Xf,[os]:$f,[Gf]:zf,[qf]:jf,[Xf]:Wf,[$f]:os},br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hy=Math.PI/180,Kf=180/Math.PI;function Ll(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function HN(n,e){return(n%e+e)%e}function py(n,e,t){return(1-t)*n+t*e}function tl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function On(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ct=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$i=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s+0],h=o[s+1],g=o[s+2],x=o[s+3];if(f!==x||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),C=Math.sin(M);p=Math.sin(p*M)/C,a=Math.sin(a*M)/C,c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+d*a,l=l*p+h*a,u=u*p+g*a,f=f*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=o[s],d=o[s+1],h=o[s+2],g=o[s+3];return e[t]=a*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-a*h,e[t+2]=l*g+u*h+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(o/2),d=c(i/2),h=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(o-l)*h,this._z=(s-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(o-l)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(s-r)/h,this._x=(o+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aE.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aE.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),f=2*(o*i-s*t);return this.x=t+c*l+s*f-a*u,this.y=i+c*u+a*l-o*f,this.z=r+c*f+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return my.copy(this).projectOnVector(e),this.sub(my)}reflect(e){return this.sub(my.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},my=new L,aE=new $i,We=class n{constructor(e,t,i,r,o,s,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],M=r[1],C=r[4],E=r[7],T=r[2],D=r[5],I=r[8];return o[0]=s*x+a*M+c*T,o[3]=s*m+a*C+c*D,o[6]=s*p+a*E+c*I,o[1]=l*x+u*M+f*T,o[4]=l*m+u*C+f*D,o[7]=l*p+u*E+f*I,o[2]=d*x+h*M+g*T,o[5]=d*m+h*C+g*D,o[8]=d*p+h*E+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*s-a*l,d=a*c-u*o,h=l*o-s*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*o-a*t)*x,e[6]=h*x,e[7]=(i*c-l*t)*x,e[8]=(s*t-i*o)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gy.makeScale(e,t)),this}rotate(e){return this.premultiply(gy.makeRotation(-e)),this}translate(e,t){return this.premultiply(gy.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gy=new We,cE=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lE=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zN(){let n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===gt&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===gt&&(r.r=ba(r.r),r.g=ba(r.g),r.b=ba(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?al:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ss]:{primaries:e,whitePoint:i,transfer:al,toXYZ:cE,fromXYZ:lE,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:cE,fromXYZ:lE,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}var rt=zN();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ua,Qf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ua===void 0&&(ua=cl("canvas")),ua.width=e.width,ua.height=e.height;let r=ua.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ua}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=xr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},GN=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GN++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vy(r[s].image)):o.push(vy(r[s]))}else o=vy(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function vy(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var jN=0,yy=new L,Cr=(()=>{class n extends br{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ji,o=ji,s=dn,a=uo,c=li,l=kn,u=n.DEFAULT_ANISOTROPY,f=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jN++}),this.uuid=Ll(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yy).x}get height(){return this.source.getSize(yy).y}get depth(){return this.source.getSize(yy).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Le(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ky)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yf:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Zf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yf:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Zf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ky,n.DEFAULT_ANISOTROPY=1,n})(),Nt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,E=(h+1)/2,T=(p+1)/2,D=(u+d)/4,I=(f+x)/4,y=(g+m)/4;return C>E&&C>T?C<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(C),r=D/i,o=I/i):E>T?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=D/r,o=y/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=I/o,r=y/o),this.set(i,r,o,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new Cr(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ul=class extends Cr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends Cr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class n{constructor(e,t,i,r,o,s,a,c,l,u,f,d,h,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,f,d,h,g,x,m)}set(e,t,i,r,o,s,a,c,l,u,f,d,h,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/da.setFromMatrixColumn(e,0).length(),o=1/da.setFromMatrixColumn(e,1).length(),s=1/da.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){let d=s*u,h=s*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+h*l,t[10]=s*c}else if(e.order==="YXZ"){let d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d+x*a,t[4]=g*a-h,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=h*a-g,t[6]=x+d*a,t[10]=s*c}else if(e.order==="ZXY"){let d=c*u,h=c*f,g=l*u,x=l*f;t[0]=d-x*a,t[4]=-s*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*u,t[9]=x-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let d=s*u,h=s*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let d=s*c,h=s*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*f,t[8]=g*f+h,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=s*c,h=s*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=s*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WN,e,$N)}lookAt(e,t,i){let r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Yr.crossVectors(i,$n),Yr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Yr.crossVectors(i,$n)),Yr.normalize(),vf.crossVectors($n,Yr),r[0]=Yr.x,r[4]=vf.x,r[8]=$n.x,r[1]=Yr.y,r[5]=vf.y,r[9]=$n.y,r[2]=Yr.z,r[6]=vf.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],C=i[7],E=i[11],T=i[15],D=r[0],I=r[4],y=r[8],S=r[12],q=r[1],w=r[5],U=r[9],V=r[13],j=r[2],B=r[6],H=r[10],O=r[14],Q=r[3],Z=r[7],de=r[11],ve=r[15];return o[0]=s*D+a*q+c*j+l*Q,o[4]=s*I+a*w+c*B+l*Z,o[8]=s*y+a*U+c*H+l*de,o[12]=s*S+a*V+c*O+l*ve,o[1]=u*D+f*q+d*j+h*Q,o[5]=u*I+f*w+d*B+h*Z,o[9]=u*y+f*U+d*H+h*de,o[13]=u*S+f*V+d*O+h*ve,o[2]=g*D+x*q+m*j+p*Q,o[6]=g*I+x*w+m*B+p*Z,o[10]=g*y+x*U+m*H+p*de,o[14]=g*S+x*V+m*O+p*ve,o[3]=M*D+C*q+E*j+T*Q,o[7]=M*I+C*w+E*B+T*Z,o[11]=M*y+C*U+E*H+T*de,o[15]=M*S+C*V+E*O+T*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=c*h-l*d,C=a*h-l*f,E=a*d-c*f,T=s*h-l*u,D=s*d-c*u,I=s*f-a*u;return t*(x*M-m*C+p*E)-i*(g*M-m*T+p*D)+r*(g*C-x*T+p*I)-o*(g*E-x*D+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*a-i*s,C=t*c-r*s,E=t*l-o*s,T=i*c-r*a,D=i*l-o*a,I=r*l-o*c,y=u*x-f*g,S=u*m-d*g,q=u*p-h*g,w=f*m-d*x,U=f*p-h*x,V=d*p-h*m,j=M*V-C*U+E*w+T*q-D*S+I*y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/j;return e[0]=(a*V-c*U+l*w)*B,e[1]=(r*U-i*V-o*w)*B,e[2]=(x*I-m*D+p*T)*B,e[3]=(d*D-f*I-h*T)*B,e[4]=(c*q-s*V-l*S)*B,e[5]=(t*V-r*q+o*S)*B,e[6]=(m*E-g*I-p*C)*B,e[7]=(u*I-d*E+h*C)*B,e[8]=(s*U-a*q+l*y)*B,e[9]=(i*q-t*U-o*y)*B,e[10]=(g*D-x*E+p*M)*B,e[11]=(f*E-u*D-h*M)*B,e[12]=(a*S-s*w-c*y)*B,e[13]=(t*w-i*S+r*y)*B,e[14]=(x*C-g*T-m*M)*B,e[15]=(u*T-f*C+d*M)*B,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,f=a+a,d=o*l,h=o*u,g=o*f,x=s*u,m=s*f,p=a*f,M=c*l,C=c*u,E=c*f,T=i.x,D=i.y,I=i.z;return r[0]=(1-(x+p))*T,r[1]=(h+E)*T,r[2]=(g-C)*T,r[3]=0,r[4]=(h-E)*D,r[5]=(1-(d+p))*D,r[6]=(m+M)*D,r[7]=0,r[8]=(g+C)*I,r[9]=(m-M)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let s=da.set(r[0],r[1],r[2]).length(),a=da.set(r[4],r[5],r[6]).length(),c=da.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Ei.copy(this);let l=1/s,u=1/a,f=1/c;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=f,Ei.elements[9]*=f,Ei.elements[10]*=f,t.setFromRotationMatrix(Ei),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,s,a=Di,c=!1){let l=this.elements,u=2*o/(t-e),f=2*o/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),g,x;if(c)g=o/(s-o),x=s*o/(s-o);else if(a===Di)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Sa)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Di,c=!1){let l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r),g,x;if(c)g=1/(s-o),x=s/(s-o);else if(a===Di)g=-2/(s-o),x=-(s+o)/(s-o);else if(a===Sa)g=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},da=new L,Ei=new Rt,WN=new L(0,0,0),$N=new L(1,1,1),Yr=new L,vf=new L,$n=new L,uE=new Rt,dE=new $i,io=(()=>{class n{constructor(t=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,o=this._order){return this._x=t,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let o=t.elements,s=o[0],a=o[4],c=o[8],l=o[1],u=o[5],f=o[9],d=o[2],h=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return uE.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uE,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return dE.setFromEuler(this),this.setFromQuaternion(dE,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),dl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qN=0,fE=new L,fa=new $i,mr=new Rt,yf=new L,nl=new L,XN=new L,YN=new $i,hE=new L(1,0,0),pE=new L(0,1,0),mE=new L(0,0,1),gE={type:"added"},ZN={type:"removed"},ha={type:"childadded",child:null},_y={type:"childremoved",child:null},wr=(()=>{class n extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qN++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,i=new io,r=new $i,o=new L(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rt},normalMatrix:{value:new We}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fa.setFromAxisAngle(t,i),this.quaternion.multiply(fa),this}rotateOnWorldAxis(t,i){return fa.setFromAxisAngle(t,i),this.quaternion.premultiply(fa),this}rotateX(t){return this.rotateOnAxis(hE,t)}rotateY(t){return this.rotateOnAxis(pE,t)}rotateZ(t){return this.rotateOnAxis(mE,t)}translateOnAxis(t,i){return fE.copy(t).applyQuaternion(this.quaternion),this.position.add(fE.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(hE,t)}translateY(t){return this.translateOnAxis(pE,t)}translateZ(t){return this.translateOnAxis(mE,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yf.copy(t):yf.set(t,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(nl,yf,this.up):mr.lookAt(yf,nl,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),fa.setFromRotationMatrix(mr),this.quaternion.premultiply(fa.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gE),ha.child=t,this.dispatchEvent(ha),ha.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZN),_y.child=t,this.dispatchEvent(_y),_y.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gE),ha.child=t,this.dispatchEvent(ha),ha.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,t,XN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,YN,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,o=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*o,s[13]+=r-s[1]*i-s[5]*r-s[9]*o,s[14]+=o-s[2]*i-s[6]*r-s[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>et(ae({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>ae({},c)),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(t.materials,this.material[l]));o.material=c}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];o.animations.push(s(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),h=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=o,r;function a(c){let l=[];for(let u in c){let f=c[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let o=t.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new L(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),is=class extends wr{constructor(){super(),this.isGroup=!0,this.type="Group"}},JN={type:"move"},wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},lC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},_f={h:0,s:0,l:0};function xy(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=HN(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=xy(s,o,e+1/3),this.g=xy(s,o,e),this.b=xy(s,o,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xn){function i(o){o!==void 0&&parseFloat(o)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){let i=lC[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return rt.workingToColorSpace(xn.copy(this),e),Math.round(it(xn.r*255,0,255))*65536+Math.round(it(xn.g*255,0,255))*256+Math.round(it(xn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(xn.copy(this),t);let i=xn.r,r=xn.g,o=xn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,u=(a+s)/2;if(a===s)c=0,l=0;else{let f=s-a;switch(l=u<=.5?f/(s+a):f/(2-s-a),s){case i:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-i)/f+2;break;case o:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Xn){rt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,r=xn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(_f);let i=py(Zr.h,_f.h,t),r=py(Zr.s,_f.s,t),o=py(Zr.l,_f.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new nt;nt.NAMES=lC;var fl=class extends wr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new io,this.environmentIntensity=1,this.environmentRotation=new io,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new L,gr=new L,My=new L,vr=new L,pa=new L,ma=new L,vE=new L,by=new L,Sy=new L,Ey=new L,Cy=new Nt,wy=new Nt,Dy=new Nt,to=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ci.subVectors(e,t),r.cross(Ci);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Ci.subVectors(r,t),gr.subVectors(i,t),My.subVectors(e,t);let s=Ci.dot(Ci),a=Ci.dot(gr),c=Ci.dot(My),l=gr.dot(gr),u=gr.dot(My),f=s*l-a*a;if(f===0)return o.set(0,0,0),null;let d=1/f,h=(l*c-a*u)*d,g=(s*u-a*c)*d;return o.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,vr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,vr.x),c.addScaledVector(s,vr.y),c.addScaledVector(a,vr.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return Cy.setScalar(0),wy.setScalar(0),Dy.setScalar(0),Cy.fromBufferAttribute(e,t),wy.fromBufferAttribute(e,i),Dy.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Cy,o.x),s.addScaledVector(wy,o.y),s.addScaledVector(Dy,o.z),s}static isFrontFacing(e,t,i,r){return Ci.subVectors(i,t),gr.subVectors(e,t),Ci.cross(gr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ci.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;pa.subVectors(r,i),ma.subVectors(o,i),by.subVectors(e,i);let c=pa.dot(by),l=ma.dot(by);if(c<=0&&l<=0)return t.copy(i);Sy.subVectors(e,r);let u=pa.dot(Sy),f=ma.dot(Sy);if(u>=0&&f<=u)return t.copy(r);let d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(pa,s);Ey.subVectors(e,o);let h=pa.dot(Ey),g=ma.dot(Ey);if(g>=0&&h<=g)return t.copy(o);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ma,a);let m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return vE.subVectors(o,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(vE,a);let p=1/(m+x+d);return s=x*p,a=d*p,t.copy(i).addScaledVector(pa,s).addScaledVector(ma,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ro=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,wi):wi.fromBufferAttribute(o,s),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xf.copy(i.boundingBox)),xf.applyMatrix4(e.matrixWorld),this.union(xf)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Mf.subVectors(this.max,il),ga.subVectors(e.a,il),va.subVectors(e.b,il),ya.subVectors(e.c,il),Jr.subVectors(va,ga),Kr.subVectors(ya,va),Ko.subVectors(ga,ya);let t=[0,-Jr.z,Jr.y,0,-Kr.z,Kr.y,0,-Ko.z,Ko.y,Jr.z,0,-Jr.x,Kr.z,0,-Kr.x,Ko.z,0,-Ko.x,-Jr.y,Jr.x,0,-Kr.y,Kr.x,0,-Ko.y,Ko.x,0];return!Ty(t,ga,va,ya,Mf)||(t=[1,0,0,0,1,0,0,0,1],!Ty(t,ga,va,ya,Mf))?!1:(bf.crossVectors(Jr,Kr),t=[bf.x,bf.y,bf.z],Ty(t,ga,va,ya,Mf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yr=[new L,new L,new L,new L,new L,new L,new L,new L],wi=new L,xf=new ro,ga=new L,va=new L,ya=new L,Jr=new L,Kr=new L,Ko=new L,il=new L,Mf=new L,bf=new L,Qo=new L;function Ty(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Qo.fromArray(n,o);let a=r.x*Math.abs(Qo.x)+r.y*Math.abs(Qo.y)+r.z*Math.abs(Qo.z),c=e.dot(Qo),l=t.dot(Qo),u=i.dot(Qo);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Gt=new L,Sf=new ct,KN=0,An=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KN++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gy,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sf.fromBufferAttribute(this,t),Sf.applyMatrix3(e),this.setXY(t,Sf.x,Sf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tl(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tl(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tl(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),i=On(i,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gy&&(e.usage=this.usage),e}};var hl=class extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pl=class extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var In=class extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}},QN=new ro,rl=new L,Ay=new L,as=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):QN.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);let t=rl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(rl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ay.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(Ay)),this.expandByPoint(rl.copy(e.center).sub(Ay))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eP=0,ci=new Rt,Iy=new wr,_a=new L,qn=new ro,ol=new ro,Qt=new L,Fn=class n extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eP++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BN(e)?pl:hl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Iy.lookAt(e),Iy.updateMatrix(),this.applyMatrix4(Iy.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new In(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];ol.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(qn.min,ol.min),qn.expandByPoint(Qt),Qt.addVectors(qn.max,ol.max),qn.expandByPoint(Qt)):(qn.expandByPoint(ol.min),qn.expandByPoint(ol.max))}qn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Qt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(_a.fromBufferAttribute(e,l),Qt.add(_a)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<i.count;y++)a[y]=new L,c[y]=new L;let l=new L,u=new L,f=new L,d=new ct,h=new ct,g=new ct,x=new L,m=new L;function p(y,S,q){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,q),d.fromBufferAttribute(o,y),h.fromBufferAttribute(o,S),g.fromBufferAttribute(o,q),u.sub(l),f.sub(l),h.sub(d),g.sub(d);let w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),a[y].add(x),a[S].add(x),a[q].add(x),c[y].add(m),c[S].add(m),c[q].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,S=M.length;y<S;++y){let q=M[y],w=q.start,U=q.count;for(let V=w,j=w+U;V<j;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let C=new L,E=new L,T=new L,D=new L;function I(y){T.fromBufferAttribute(r,y),D.copy(T);let S=a[y];C.copy(S),C.sub(T.multiplyScalar(T.dot(S))).normalize(),E.crossVectors(D,S);let w=E.dot(c[y])<0?-1:1;s.setXYZW(y,C.x,C.y,C.z,w)}for(let y=0,S=M.length;y<S;++y){let q=M[y],w=q.start,U=q.count;for(let V=w,j=w+U;V<j;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new L,o=new L,s=new L,a=new L,c=new L,l=new L,u=new L,f=new L;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u),h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new An(d,u,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let u=0,f=l.length;u<f;u++){let d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){let h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let o=e.morphAttributes;for(let l in o){let u=[],f=o[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,u=s.length;l<u;l++){let f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tP=0,Sr=class extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=rs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Hf,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vf&&(i.blendSrc=this.blendSrc),this.blendDst!==Hf&&(i.blendDst=this.blendDst),this.blendEquation!==no&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var _r=new L,Ry=new L,Ef=new L,Qr=new L,Ny=new L,Cf=new L,Py=new L,ml=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ry.copy(e).add(t).multiplyScalar(.5),Ef.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Ry);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Ef),a=Qr.dot(this.direction),c=-Qr.dot(Ef),l=Qr.lengthSq(),u=Math.abs(1-s*s),f,d,h,g;if(u>0)if(f=s*c-a,d=s*a-c,g=o*u,f>=0)if(d>=-g)if(d<=g){let x=1/u;f*=x,d*=x,h=f*(f+s*d+2*a)+d*(s*f+d+2*c)+l}else d=o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;else d=-o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-c),o),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-o,-c),o),h=d*(d+2*c)+l):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-c),o),h=-f*f+d*(d+2*c)+l);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ry).addScaledVector(Ef,d),h}intersectSphere(e,t){_r.subVectors(e.center,this.origin);let i=_r.dot(this.direction),r=_r.dot(_r)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,r,o){Ny.subVectors(t,e),Cf.subVectors(i,e),Py.crossVectors(Ny,Cf);let s=this.direction.dot(Py),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Qr.subVectors(this.origin,e);let c=a*this.direction.dot(Cf.crossVectors(Qr,Cf));if(c<0)return null;let l=a*this.direction.dot(Ny.cross(Qr));if(l<0||c+l>s)return null;let u=-a*Qr.dot(Py);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gl=class extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new io,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yE=new Rt,es=new ml,wf=new as,_E=new L,Df=new L,Tf=new L,Af=new L,Oy=new L,If=new L,xE=new L,Rf=new L,Ln=class extends wr{constructor(e=new Fn,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){If.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let u=a[c],f=o[c];u!==0&&(Oy.fromBufferAttribute(f,e),s?If.addScaledVector(Oy,u):If.addScaledVector(Oy.sub(t),u))}t.add(If)}return t}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wf.copy(i.boundingSphere),wf.applyMatrix4(o),es.copy(e.ray).recast(e.near),!(wf.containsPoint(es.origin)===!1&&(es.intersectSphere(wf,_E)===null||es.origin.distanceToSquared(_E)>(e.far-e.near)**2))&&(yE.copy(o).invert(),es.copy(e.ray).applyMatrix4(yE),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),C=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=M,T=C;E<T;E+=3){let D=a.getX(E),I=a.getX(E+1),y=a.getX(E+2);r=Nf(this,p,e,i,l,u,f,D,I,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),C=a.getX(m+1),E=a.getX(m+2);r=Nf(this,s,e,i,l,u,f,M,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),C=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=M,T=C;E<T;E+=3){let D=E,I=E+1,y=E+2;r=Nf(this,p,e,i,l,u,f,D,I,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=m,C=m+1,E=m+2;r=Nf(this,s,e,i,l,u,f,M,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function nP(n,e,t,i,r,o,s,a){let c;if(e.side===Rn?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Mr,a),c===null)return null;Rf.copy(a),Rf.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Rf);return l<t.near||l>t.far?null:{distance:l,point:Rf.clone(),object:n}}function Nf(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,Df),n.getVertexPosition(c,Tf),n.getVertexPosition(l,Af);let u=nP(n,e,t,i,Df,Tf,Af,xE);if(u){let f=new L;to.getBarycoord(xE,Df,Tf,Af,f),r&&(u.uv=to.getInterpolatedAttribute(r,a,c,l,f,new ct)),o&&(u.uv1=to.getInterpolatedAttribute(o,a,c,l,f,new ct)),s&&(u.normal=to.getInterpolatedAttribute(s,a,c,l,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};to.getNormal(Df,Tf,Af,d.normal),u.face=d,u.barycoord=f}return u}var nh=class extends Cr{constructor(e=null,t=1,i=1,r,o,s,a,c,l=en,u=en,f,d){super(null,s,a,c,l,u,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fy=new L,iP=new L,rP=new We,Gi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Fy.subVectors(i,t).cross(iP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Fy),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rP.getNormalMatrix(e),r=this.coplanarPoint(Fy).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new as,oP=new ct(.5,.5),Pf=new L,Da=class{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,o=new Gi,s=new Gi){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],u=o[4],f=o[5],d=o[6],h=o[7],g=o[8],x=o[9],m=o[10],p=o[11],M=o[12],C=o[13],E=o[14],T=o[15];if(r[0].setComponents(l-s,h-u,p-g,T-M).normalize(),r[1].setComponents(l+s,h+u,p+g,T+M).normalize(),r[2].setComponents(l+a,h+f,p+x,T+C).normalize(),r[3].setComponents(l-a,h-f,p-x,T-C).normalize(),i)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,h-d,p-m,T-E).normalize();else if(r[4].setComponents(l-c,h-d,p-m,T-E).normalize(),t===Di)r[5].setComponents(l+c,h+d,p+m,T+E).normalize();else if(t===Sa)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=oP.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Pf.x=r.normal.x>0?e.max.x:e.min.x,Pf.y=r.normal.y>0?e.max.y:e.min.y,Pf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pf)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ta=class extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ME=new Rt,jy=new ml,Of=new as,Ff=new L,vl=class extends wr{constructor(e=new Fn,t=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Of.copy(i.boundingSphere),Of.applyMatrix4(r),Of.radius+=o,e.ray.intersectsSphere(Of)===!1)return;ME.copy(r).invert(),jy.copy(e.ray).applyMatrix4(ME);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let g=d,x=h;g<x;g++){let m=l.getX(g);Ff.fromBufferAttribute(f,m),bE(Ff,m,c,r,e,t,this)}}else{let d=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let g=d,x=h;g<x;g++)Ff.fromBufferAttribute(f,g),bE(Ff,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function bE(n,e,t,i,r,o,s){let a=jy.distanceSqToPoint(n);if(a<t){let c=new L;jy.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var yl=class extends Cr{constructor(e=[],t=lo,i,r,o,s,a,c,l,u){super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var oo=class extends Cr{constructor(e,t,i=Ai,r,o,s,a=en,c=en,l,u=Wi,f=1){if(u!==Wi&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ih=class extends oo{constructor(e,t=Ai,i=lo,r,o,s=en,a=en,c,l=Wi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,o,s,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_l=class extends Cr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Aa=class n extends Fn{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(f,2));function g(x,m,p,M,C,E,T,D,I,y,S){let q=E/I,w=T/y,U=E/2,V=T/2,j=D/2,B=I+1,H=y+1,O=0,Q=0,Z=new L;for(let de=0;de<H;de++){let ve=de*w-V;for(let he=0;he<B;he++){let qe=he*q-U;Z[x]=qe*M,Z[m]=ve*C,Z[p]=j,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=D>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(he/I),f.push(1-de/y),O+=1}}for(let de=0;de<y;de++)for(let ve=0;ve<I;ve++){let he=d+ve+B*de,qe=d+ve+B*(de+1),At=d+(ve+1)+B*(de+1),Tt=d+(ve+1)+B*de;c.push(he,qe,Tt),c.push(qe,At,Tt),Q+=6}a.addGroup(h,Q,S),h+=Q,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xl=class n extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*d-s;for(let C=0;C<l;C++){let E=C*f-o;g.push(E,-M,0),x.push(0,0,1),m.push(C/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let C=M+l*p,E=M+l*(p+1),T=M+1+l*(p+1),D=M+1+l*p;h.push(C,E,D),h.push(E,T,D)}this.setIndex(h),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ml=class n extends Fn{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+a,Math.PI),l=0,u=[],f=new L,d=new L,h=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let M=[],C=p/i,E=0;p===0&&s===0?E=.5/t:p===i&&c===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){let D=T/t;f.x=-e*Math.cos(r+D*o)*Math.sin(s+C*a),f.y=e*Math.cos(s+C*a),f.z=e*Math.sin(r+D*o)*Math.sin(s+C*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(D+E,1-C),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let C=u[p][M+1],E=u[p][M],T=u[p+1][M],D=u[p+1][M+1];(p!==0||s>0)&&h.push(C,E,D),(p!==i-1||c<Math.PI)&&h.push(E,T,D)}this.setIndex(h),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function us(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=us(n[t]);for(let r in i)e[r]=i[r]}return e}function sP(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function p_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var uC={clone:us,merge:Mn},aP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aP,this.fragmentShader=cP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=sP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rh=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bl=class extends Sr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d_,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new io,this.combine=vh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var oh=class extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sh=class extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lf(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var so=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],o=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(i=2,o=a);for(let c=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=o,o=t[--i-1],e>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;e<t[a]?s=a:i=a+1}if(r=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=i[o+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends so{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:By,endingEnd:By}}intervalChanged_(e,t,i){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Vy:o=e,a=2*t-i;break;case Hy:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vy:s=e,c=2*i-t;break;case Hy:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,C=(-1-h)*m+(1.5+h)*x+.5*g,E=h*m-h*x;for(let T=0;T!==a;++T)o[T]=p*s[u+T]+M*s[l+T]+C*s[c+T]+E*s[f+T];return o}},ch=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)o[d]=s[l+d]*f+s[c+d]*u;return o}},lh=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},uh=class extends so{interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,d=u.outTangents;if(!f||!d){let x=(i-t)/(r-t),m=1-x;for(let p=0;p!==a;++p)o[p]=s[l+p]*m+s[c+p]*x;return o}let h=a*2,g=e-1;for(let x=0;x!==a;++x){let m=s[l+x],p=s[c+x],M=g*h+x*2,C=d[M],E=d[M+1],T=e*h+x*2,D=f[T],I=f[T+1],y=(i-t)/(r-t),S,q,w,U,V;for(let j=0;j<8;j++){S=y*y,q=S*y,w=1-y,U=w*w,V=U*w;let H=V*t+3*U*y*C+3*w*S*D+q*r-i;if(Math.abs(H)<1e-10)break;let O=3*U*(C-t)+6*w*y*(D-C)+3*S*(r-D);if(Math.abs(O)<1e-10)break;y=y-H/O,y=Math.max(0,Math.min(1,y))}o[x]=V*m+3*U*y*E+3*w*S*I+q*p}return o}},Jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lf(t,this.TimeBufferType),this.values=Lf(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Lf(e.times,Array),values:Lf(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case sl:t=this.InterpolantFactoryMethodDiscrete;break;case Jf:t=this.InterpolantFactoryMethodLinear;break;case Bf:t=this.InterpolantFactoryMethodSmooth;break;case Uy:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return Jf;case this.InterpolantFactoryMethodSmooth:return Bf;case this.InterpolantFactoryMethodBezier:return Uy}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<e;)++o;for(;s!==-1&&i[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,o=i.length;o===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){Fe("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&VN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bf,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[h+g]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let f=a*i,d=s*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++s}}if(o>0){e[s]=e[o];for(let a=o*i,c=s*i,l=0;l!==i;++l)t[c+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Jf;var ao=class extends Jn{constructor(e,t,i){super(e,t,i)}};ao.prototype.ValueTypeName="bool";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=sl;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;var dh=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};dh.prototype.ValueTypeName="color";var fh=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};fh.prototype.ValueTypeName="number";var hh=class extends so{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)$i.slerpFlat(o,0,s,l-a,s,l,c);return o}},Sl=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};Sl.prototype.ValueTypeName="quaternion";Sl.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Jn{constructor(e,t,i){super(e,t,i)}};co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=sl;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};ph.prototype.ValueTypeName="vector";var El=class extends wr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ly=new Rt,SE=new L,EE=new L,Wy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;SE.setFromMatrixPosition(e.matrixWorld),t.position.copy(SE),EE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(EE),t.updateMatrixWorld(),Ly.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ly,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Sa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ly)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kf=new L,Uf=new $i,zi=new L,Cl=class extends wr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kf,Uf,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Uf,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kf,Uf,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kf,Uf,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},eo=new L,CE=new ct,wE=new ct,un=class extends Cl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hy*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(hy*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){eo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(eo.x,eo.y).multiplyScalar(-e/eo.z),eo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(eo.x,eo.y).multiplyScalar(-e/eo.z)}getViewSize(e,t){return this.getViewBounds(e,CE,wE),t.subVectors(wE,CE)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hy*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $y=class extends Wy{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Ia=class extends El{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wl=class extends Cl{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Dl=class extends El{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var xa=-90,Ma=1,mh=class extends wr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(xa,Ma,e,t);r.layers=this.layers,this.add(r);let o=new un(xa,Ma,e,t);o.layers=this.layers,this.add(o);let s=new un(xa,Ma,e,t);s.layers=this.layers,this.add(s);let a=new un(xa,Ma,e,t);a.layers=this.layers,this.add(a);let c=new un(xa,Ma,e,t);c.layers=this.layers,this.add(c);let l=new un(xa,Ma,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},gh=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var m_="\\[\\]\\.:\\/",lP=new RegExp("["+m_+"]","g"),g_="[^"+m_+"]",uP="[^"+m_.replace("\\.","")+"]",dP=/((?:WC+[\/:])*)/.source.replace("WC",g_),fP=/(WCOD+)?/.source.replace("WCOD",uP),hP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",g_),pP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",g_),mP=new RegExp("^"+dP+fP+hP+pP+"$"),gP=["material","materials","bones","map"],qy=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lP,"")}static parseTrackName(t){let i=mP.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);gP.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(s){for(let a=0;a<s.length;a++){let c=s[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},o=r(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)t[i++]=r[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[o];if(a===void 0){let u=i.nodeName;Fe("PropertyBinding: Trying to update property for track: "+u+"."+o+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=qy,n})();Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X7=new Float32Array(1);function v_(n,e,t,i){let r=vP(i);switch(t){case c_:return n*e;case u_:return n*e/r.components*r.byteLength;case Eh:return n*e/r.components*r.byteLength;case ls:return n*e*2/r.components*r.byteLength;case Ch:return n*e*2/r.components*r.byteLength;case l_:return n*e*3/r.components*r.byteLength;case li:return n*e*4/r.components*r.byteLength;case wh:return n*e*4/r.components*r.byteLength;case Nl:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ih:return Math.max(n,16)*Math.max(e,8)/4;case Dh:case Ah:return Math.max(n,8)*Math.max(e,8)/2;case Rh:case Nh:case Oh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ph:case Lh:case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ip:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vP(n){switch(n){case kn:case r_:return{byteLength:1,components:1};case Na:case o_:case Yi:return{byteLength:2,components:1};case bh:case Sh:return{byteLength:2,components:4};case Ai:case Mh:case Ii:return{byteLength:4,components:1};case s_:case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function PC(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function _P(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let x=f[h];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var xP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$P=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZP="gl_FragColor = linearToOutputTexel( gl_FragColor );",JP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dO=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fO=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gO=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vO=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yO=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_O=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xO=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MO=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bO=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SO=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EO=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CO=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wO=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DO=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TO=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AO=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IO=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RO=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NO=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PO=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OO=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FO=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LO=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kO=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UO=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VO=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zO=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$O=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XO=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tF=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nF=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rF=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cF=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hF=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_F=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$F=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:xP,alphahash_pars_fragment:MP,alphamap_fragment:bP,alphamap_pars_fragment:SP,alphatest_fragment:EP,alphatest_pars_fragment:CP,aomap_fragment:wP,aomap_pars_fragment:DP,batching_pars_vertex:TP,batching_vertex:AP,begin_vertex:IP,beginnormal_vertex:RP,bsdfs:NP,iridescence_fragment:PP,bumpmap_pars_fragment:OP,clipping_planes_fragment:FP,clipping_planes_pars_fragment:LP,clipping_planes_pars_vertex:kP,clipping_planes_vertex:UP,color_fragment:BP,color_pars_fragment:VP,color_pars_vertex:HP,color_vertex:zP,common:GP,cube_uv_reflection_fragment:jP,defaultnormal_vertex:WP,displacementmap_pars_vertex:$P,displacementmap_vertex:qP,emissivemap_fragment:XP,emissivemap_pars_fragment:YP,colorspace_fragment:ZP,colorspace_pars_fragment:JP,envmap_fragment:KP,envmap_common_pars_fragment:QP,envmap_pars_fragment:eO,envmap_pars_vertex:tO,envmap_physical_pars_fragment:fO,envmap_vertex:nO,fog_vertex:iO,fog_pars_vertex:rO,fog_fragment:oO,fog_pars_fragment:sO,gradientmap_pars_fragment:aO,lightmap_pars_fragment:cO,lights_lambert_fragment:lO,lights_lambert_pars_fragment:uO,lights_pars_begin:dO,lights_toon_fragment:hO,lights_toon_pars_fragment:pO,lights_phong_fragment:mO,lights_phong_pars_fragment:gO,lights_physical_fragment:vO,lights_physical_pars_fragment:yO,lights_fragment_begin:_O,lights_fragment_maps:xO,lights_fragment_end:MO,logdepthbuf_fragment:bO,logdepthbuf_pars_fragment:SO,logdepthbuf_pars_vertex:EO,logdepthbuf_vertex:CO,map_fragment:wO,map_pars_fragment:DO,map_particle_fragment:TO,map_particle_pars_fragment:AO,metalnessmap_fragment:IO,metalnessmap_pars_fragment:RO,morphinstance_vertex:NO,morphcolor_vertex:PO,morphnormal_vertex:OO,morphtarget_pars_vertex:FO,morphtarget_vertex:LO,normal_fragment_begin:kO,normal_fragment_maps:UO,normal_pars_fragment:BO,normal_pars_vertex:VO,normal_vertex:HO,normalmap_pars_fragment:zO,clearcoat_normal_fragment_begin:GO,clearcoat_normal_fragment_maps:jO,clearcoat_pars_fragment:WO,iridescence_pars_fragment:$O,opaque_fragment:qO,packing:XO,premultiplied_alpha_fragment:YO,project_vertex:ZO,dithering_fragment:JO,dithering_pars_fragment:KO,roughnessmap_fragment:QO,roughnessmap_pars_fragment:eF,shadowmap_pars_fragment:tF,shadowmap_pars_vertex:nF,shadowmap_vertex:iF,shadowmask_pars_fragment:rF,skinbase_vertex:oF,skinning_pars_vertex:sF,skinning_vertex:aF,skinnormal_vertex:cF,specularmap_fragment:lF,specularmap_pars_fragment:uF,tonemapping_fragment:dF,tonemapping_pars_fragment:fF,transmission_fragment:hF,transmission_pars_fragment:pF,uv_pars_fragment:mF,uv_pars_vertex:gF,uv_vertex:vF,worldpos_vertex:yF,background_vert:_F,background_frag:xF,backgroundCube_vert:MF,backgroundCube_frag:bF,cube_vert:SF,cube_frag:EF,depth_vert:CF,depth_frag:wF,distance_vert:DF,distance_frag:TF,equirect_vert:AF,equirect_frag:IF,linedashed_vert:RF,linedashed_frag:NF,meshbasic_vert:PF,meshbasic_frag:OF,meshlambert_vert:FF,meshlambert_frag:LF,meshmatcap_vert:kF,meshmatcap_frag:UF,meshnormal_vert:BF,meshnormal_frag:VF,meshphong_vert:HF,meshphong_frag:zF,meshphysical_vert:GF,meshphysical_frag:jF,meshtoon_vert:WF,meshtoon_frag:$F,points_vert:qF,points_frag:XF,shadow_vert:YF,shadow_frag:ZF,sprite_vert:JF,sprite_frag:KF},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ji={basic:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Mn([ce.points,ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Mn([ce.common,ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Mn([ce.sprite,ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Mn([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Mn([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ji.physical={uniforms:Mn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ap={r:0,b:0,g:0},ds=new io,QF=new Rt;function eL(n,e,t,i,r,o){let s=new nt(0),a=r===!0?0:1,c,l,u=null,f=0,d=null;function h(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let E=M.backgroundBlurriness>0;C=e.get(C,E)}return C}function g(M){let C=!1,E=h(M);E===null?m(s,a):E&&E.isColor&&(m(E,1),C=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,C){let E=h(C);E&&(E.isCubeTexture||E.mapping===Il)?(l===void 0&&(l=new Ln(new Aa(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:us(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),ds.copy(C.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(QF.makeRotationFromEuler(ds)),l.material.toneMapped=rt.getTransfer(E.colorSpace)!==gt,(u!==E||f!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ln(new xl(2,2),new Zn({name:"BackgroundMaterial",uniforms:us(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,C){M.getRGB(ap,p_(n)),t.buffers.color.setClear(ap.r,ap.g,ap.b,C,o)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,C=1){s.set(M),a=C,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(s,a)},render:g,addToRenderList:x,dispose:p}}function tL(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),o=r,s=!1;function a(w,U,V,j,B){let H=!1,O=f(w,j,V,U);o!==O&&(o=O,l(o.object)),H=h(w,j,V,B),H&&g(w,j,V,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,E(w,U,V,j),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function f(w,U,V,j){let B=j.wireframe===!0,H=i[U.id];H===void 0&&(H={},i[U.id]=H);let O=w.isInstancedMesh===!0?w.id:0,Q=H[O];Q===void 0&&(Q={},H[O]=Q);let Z=Q[V.id];Z===void 0&&(Z={},Q[V.id]=Z);let de=Z[B];return de===void 0&&(de=d(c()),Z[B]=de),de}function d(w){let U=[],V=[],j=[];for(let B=0;B<t;B++)U[B]=0,V[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:j,object:w,attributes:{},index:null}}function h(w,U,V,j){let B=o.attributes,H=U.attributes,O=0,Q=V.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let ve=B[Z],he=H[Z];if(he===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),ve===void 0||ve.attribute!==he||he&&ve.data!==he.data)return!0;O++}return o.attributesNum!==O||o.index!==j}function g(w,U,V,j){let B={},H=U.attributes,O=0,Q=V.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let ve=H[Z];ve===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));let he={};he.attribute=ve,ve&&ve.data&&(he.data=ve.data),B[Z]=he,O++}o.attributes=B,o.attributesNum=O,o.index=j}function x(){let w=o.newAttributes;for(let U=0,V=w.length;U<V;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){let V=o.newAttributes,j=o.enabledAttributes,B=o.attributeDivisors;V[w]=1,j[w]===0&&(n.enableVertexAttribArray(w),j[w]=1),B[w]!==U&&(n.vertexAttribDivisor(w,U),B[w]=U)}function M(){let w=o.newAttributes,U=o.enabledAttributes;for(let V=0,j=U.length;V<j;V++)U[V]!==w[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function C(w,U,V,j,B,H,O){O===!0?n.vertexAttribIPointer(w,U,V,B,H):n.vertexAttribPointer(w,U,V,j,B,H)}function E(w,U,V,j){x();let B=j.attributes,H=V.getAttributes(),O=U.defaultAttributeValues;for(let Q in H){let Z=H[Q];if(Z.location>=0){let de=B[Q];if(de===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){let ve=de.normalized,he=de.itemSize,qe=e.get(de);if(qe===void 0)continue;let At=qe.buffer,Tt=qe.type,X=qe.bytesPerElement,ne=Tt===n.INT||Tt===n.UNSIGNED_INT||de.gpuType===Mh;if(de.isInterleavedBufferAttribute){let se=de.data,$e=se.stride,Ne=de.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Z.locationSize;Ue++)p(Z.location+Ue,se.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)m(Z.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Ue=0;Ue<Z.locationSize;Ue++)C(Z.location+Ue,he/Z.locationSize,Tt,ve,$e*X,(Ne+he/Z.locationSize*Ue)*X,ne)}else{if(de.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)p(Z.location+se,de.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<Z.locationSize;se++)m(Z.location+se);n.bindBuffer(n.ARRAY_BUFFER,At);for(let se=0;se<Z.locationSize;se++)C(Z.location+se,he/Z.locationSize,Tt,ve,he*X,he/Z.locationSize*se*X,ne)}}else if(O!==void 0){let ve=O[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Z.location,ve);break;case 3:n.vertexAttrib3fv(Z.location,ve);break;case 4:n.vertexAttrib4fv(Z.location,ve);break;default:n.vertexAttrib1fv(Z.location,ve)}}}}M()}function T(){S();for(let w in i){let U=i[w];for(let V in U){let j=U[V];for(let B in j){let H=j[B];for(let O in H)u(H[O].object),delete H[O];delete j[B]}}delete i[w]}}function D(w){if(i[w.id]===void 0)return;let U=i[w.id];for(let V in U){let j=U[V];for(let B in j){let H=j[B];for(let O in H)u(H[O].object),delete H[O];delete j[B]}}delete i[w.id]}function I(w){for(let U in i){let V=i[U];for(let j in V){let B=V[j];if(B[w.id]===void 0)continue;let H=B[w.id];for(let O in H)u(H[O].object),delete H[O];delete B[w.id]}}}function y(w){for(let U in i){let V=i[U],j=w.isInstancedMesh===!0?w.id:0,B=V[j];if(B!==void 0){for(let H in B){let O=B[H];for(let Q in O)u(O[Q].object),delete O[Q];delete B[H]}delete V[j],Object.keys(V).length===0&&delete i[U]}}}function S(){q(),s=!0,o!==r&&(o=r,l(o.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:q,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function nL(n,e,t){let i;function r(l){i=l}function o(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function s(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function c(l,u,f,d){if(f===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)s(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function iL(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(I){return!(I!==li&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ii&&!y)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:E,maxSamples:T,samples:D}}function rL(n){let e=this,t=null,i=0,r=!1,o=!1,s=new Gi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{let M=o?0:i,C=M*4,E=p.clippingState||null;c.value=E,E=u(g,d,C,h);for(let T=0;T!==C;++T)E[T]=t[T];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=h+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,E=h;C!==x;++C,E+=4)s.copy(f[C]).applyMatrix4(M,a),s.normal.toArray(m,E),m[E+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ho=4,dC=[.125,.215,.35,.446,.526,.582],hs=20,oL=256,kl=new wl,fC=new nt,y_=null,__=0,x_=0,M_=!1,sL=new L,lp=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=sL}=o;y_=this._renderer.getRenderTarget(),__=this._renderer.getActiveCubeFace(),x_=this._renderer.getActiveMipmapLevel(),M_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mC(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pC(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(y_,__,x_),this._renderer.xr.enabled=M_,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),y_=this._renderer.getRenderTarget(),__=this._renderer.getActiveCubeFace(),x_=this._renderer.getActiveMipmapLevel(),M_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Yi,format:li,colorSpace:ss,depthBuffer:!1},r=hC(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hC(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aL(o)),this._blurMaterial=lL(o,e,t),this._ggxMaterial=cL(o,e,t)}return r}_compileMaterial(e){let t=new Ln(new Fn,e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,i,r,o){let c=new un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(fC),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new Aa,new gl({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(fC),p=!0);for(let C=0;C<6;C++){let E=C%3;E===0?(c.up.set(0,l[C],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+u[C],o.y,o.z)):E===1?(c.up.set(0,0,l[C]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+u[C],o.z)):(c.up.set(0,l[C],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+u[C]));let T=this._cubeSize;Oa(r,E*T,C>2?T:0,T,T),f.setRenderTarget(r),p&&f.render(x,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===lo||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mC()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pC());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;Oa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,kl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-ho?i-g+ho:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,Oa(o,m,p,3*x,2*x),r.setRenderTarget(o),r.render(a,kl),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=g-i,Oa(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,kl)}_blur(e,t,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){let c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=l;let d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*hs-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):hs;m>hs&&Le(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);let p=[],M=0;for(let I=0;I<hs;++I){let y=I/x,S=Math.exp(-y*y/2);p.push(S),I===0?M+=S:I<m&&(M+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:C}=this;d.dTheta.value=g,d.mipInt.value=C-i;let E=this._sizeLods[r],T=3*E*(r>C-ho?r-C+ho:0),D=4*(this._cubeSize-E);Oa(t,T,D,3*E,2*E),c.setRenderTarget(t),c.render(f,kl)}};function aL(n){let e=[],t=[],i=[],r=n,o=n-ho+1+dC.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let c=1/a;s>n-ho?c=dC[s-n+ho-1]:s===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),C=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let D=0;D<h;D++){let I=D%3*2/3-1,y=D>2?0:-1,S=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];M.set(S,x*g*D),C.set(d,m*g*D);let q=[D,D,D,D,D,D];E.set(q,p*g*D)}let T=new Fn;T.setAttribute("position",new An(M,x)),T.setAttribute("uv",new An(C,m)),T.setAttribute("faceIndex",new An(E,p)),i.push(new Ln(T,null)),r>ho&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hC(n,e,t){let i=new Yn(n,e,t);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cL(n,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function lL(n,e,t){let i=new Float32Array(hs),r=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function pC(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mC(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var up=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),o=new Zn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Xi});o.uniforms.tEquirect.value=t;let s=new Ln(r,o),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=dn),new mh(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};function uL(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?s(d):o(d)}function o(d){if(d&&d.isTexture){let h=d.mapping;if(h===yh||h===_h)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new up(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let h=d.mapping,g=h===yh||h===_h,x=h===lo||h===cs;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new lp(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new lp(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===yh?d.mapping=lo:h===_h&&(d.mapping=cs),d}function c(d){let h=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function l(d){let h=d.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function dL(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ll("WebGLRenderer: "+i+" extension not supported."),r}}}function fL(n,e,t,i){let r={},o=new WeakMap;function s(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete r[d.id];let h=o.get(d);h&&(e.remove(h),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){let d=[],h=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(h!==null){let M=h.array;x=h.version;for(let C=0,E=M.length;C<E;C+=3){let T=M[C+0],D=M[C+1],I=M[C+2];d.push(T,D,D,I,I,T)}}else{let M=g.array;x=g.version;for(let C=0,E=M.length/3-1;C<E;C+=3){let T=C+0,D=C+1,I=C+2;d.push(T,D,D,I,I,T)}}let m=new(g.count>=65535?pl:hl)(d,1);m.version=x;let p=o.get(f);p&&e.remove(p),o.set(f,m)}function u(f){let d=o.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function hL(n,e,t){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function c(d,h){n.drawElements(i,h,o,d*s),t.update(h,i,1)}function l(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,o,d*s,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/s,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pL(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:Fe("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mL(n,e,t){let i=new WeakMap,r=new Nt;function o(s,a,c){let l=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let q=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",q)};var h=q;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let T=a.attributes.position.count*E,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let I=new Float32Array(T*D*4*f),y=new ul(I,T,D,f);y.type=Ii,y.needsUpdate=!0;let S=E*4;for(let w=0;w<f;w++){let U=p[w],V=M[w],j=C[w],B=T*D*4*w;for(let H=0;H<U.count;H++){let O=H*S;g===!0&&(r.fromBufferAttribute(U,H),I[B+O+0]=r.x,I[B+O+1]=r.y,I[B+O+2]=r.z,I[B+O+3]=0),x===!0&&(r.fromBufferAttribute(V,H),I[B+O+4]=r.x,I[B+O+5]=r.y,I[B+O+6]=r.z,I[B+O+7]=0),m===!0&&(r.fromBufferAttribute(j,H),I[B+O+8]=r.x,I[B+O+9]=r.y,I[B+O+10]=r.z,I[B+O+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new ct(T,D)},i.set(a,d),a.addEventListener("dispose",q)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function gL(n,e,t,i,r){let o=new WeakMap;function s(l){let u=r.render.frame,f=l.geometry,d=e.get(l,f);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return d}function a(){o=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}var vL={[Jy]:"LINEAR_TONE_MAPPING",[Ky]:"REINHARD_TONE_MAPPING",[Qy]:"CINEON_TONE_MAPPING",[e_]:"ACES_FILMIC_TONE_MAPPING",[n_]:"AGX_TONE_MAPPING",[i_]:"NEUTRAL_TONE_MAPPING",[t_]:"CUSTOM_TONE_MAPPING"};function yL(n,e,t,i,r){let o=new Yn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new Yn(e,t,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),a=new Fn;a.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new In([0,2,0,0,2,0],2));let c=new rh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ln(a,c),u=new wl(-1,1,1,-1,0,1),f=null,d=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(M,C){o.setSize(M,C),s.setSize(M,C);for(let E=0;E<m.length;E++){let T=m[E];T.setSize&&T.setSize(M,C)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;let C=o.width,E=o.height;for(let T=0;T<m.length;T++){let D=m[T];D.setSize&&D.setSize(C,E)}},this.begin=function(M,C){if(h||M.toneMapping===Ti&&m.length===0)return!1;if(x=C,C!==null){let E=C.width,T=C.height;(o.width!==E||o.height!==T)&&this.setSize(E,T)}return p===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Ti,!0},this.hasRenderPass=function(){return p},this.end=function(M,C){M.toneMapping=g,h=!0;let E=o,T=s;for(let D=0;D<m.length;D++){let I=m[D];if(I.enabled!==!1&&(I.render(M,T,E,C),I.needsSwap!==!1)){let y=E;E=T,T=y}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,c.defines={},rt.getTransfer(f)===gt&&(c.defines.SRGB_TRANSFER="");let D=vL[d];D&&(c.defines[D]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(x),M.render(l,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),c.dispose()}}var OC=new Cr,E_=new oo(1,1),FC=new ul,LC=new th,kC=new yl,gC=[],vC=[],yC=new Float32Array(16),_C=new Float32Array(9),xC=new Float32Array(4);function La(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=gC[r];if(o===void 0&&(o=new Float32Array(r),gC[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hp(n,e){let t=vC[e];t===void 0&&(t=new Int32Array(e),vC[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _L(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function ML(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function bL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function SL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;xC.set(i),n.uniformMatrix2fv(this.addr,!1,xC),Xt(t,i)}}function EL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;_C.set(i),n.uniformMatrix3fv(this.addr,!1,_C),Xt(t,i)}}function CL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;yC.set(i),n.uniformMatrix4fv(this.addr,!1,yC),Xt(t,i)}}function wL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function TL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function AL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function IL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function NL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function PL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function OL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(E_.compareFunction=t.isReversedDepthBuffer()?sp:op,o=E_):o=OC,t.setTexture2D(e||o,r)}function FL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||LC,r)}function LL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kC,r)}function kL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||FC,r)}function UL(n){switch(n){case 5126:return _L;case 35664:return xL;case 35665:return ML;case 35666:return bL;case 35674:return SL;case 35675:return EL;case 35676:return CL;case 5124:case 35670:return wL;case 35667:case 35671:return DL;case 35668:case 35672:return TL;case 35669:case 35673:return AL;case 5125:return IL;case 36294:return RL;case 36295:return NL;case 36296:return PL;case 35678:case 36198:case 36298:case 36306:case 35682:return OL;case 35679:case 36299:case 36307:return FL;case 35680:case 36300:case 36308:case 36293:return LL;case 36289:case 36303:case 36311:case 36292:return kL}}function BL(n,e){n.uniform1fv(this.addr,e)}function VL(n,e){let t=La(e,this.size,2);n.uniform2fv(this.addr,t)}function HL(n,e){let t=La(e,this.size,3);n.uniform3fv(this.addr,t)}function zL(n,e){let t=La(e,this.size,4);n.uniform4fv(this.addr,t)}function GL(n,e){let t=La(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jL(n,e){let t=La(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WL(n,e){let t=La(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $L(n,e){n.uniform1iv(this.addr,e)}function qL(n,e){n.uniform2iv(this.addr,e)}function XL(n,e){n.uniform3iv(this.addr,e)}function YL(n,e){n.uniform4iv(this.addr,e)}function ZL(n,e){n.uniform1uiv(this.addr,e)}function JL(n,e){n.uniform2uiv(this.addr,e)}function KL(n,e){n.uniform3uiv(this.addr,e)}function QL(n,e){n.uniform4uiv(this.addr,e)}function ek(n,e,t){let i=this.cache,r=e.length,o=hp(t,r);qt(i,o)||(n.uniform1iv(this.addr,o),Xt(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=E_:s=OC;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function tk(n,e,t){let i=this.cache,r=e.length,o=hp(t,r);qt(i,o)||(n.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||LC,o[s])}function nk(n,e,t){let i=this.cache,r=e.length,o=hp(t,r);qt(i,o)||(n.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||kC,o[s])}function ik(n,e,t){let i=this.cache,r=e.length,o=hp(t,r);qt(i,o)||(n.uniform1iv(this.addr,o),Xt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||FC,o[s])}function rk(n){switch(n){case 5126:return BL;case 35664:return VL;case 35665:return HL;case 35666:return zL;case 35674:return GL;case 35675:return jL;case 35676:return WL;case 5124:case 35670:return $L;case 35667:case 35671:return qL;case 35668:case 35672:return XL;case 35669:case 35673:return YL;case 5125:return ZL;case 36294:return JL;case 36295:return KL;case 36296:return QL;case 35678:case 36198:case 36298:case 36306:case 35682:return ek;case 35679:case 36299:case 36307:return tk;case 35680:case 36300:case 36308:case 36293:return nk;case 36289:case 36303:case 36311:case 36292:return ik}}var C_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UL(t.type)}},w_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rk(t.type)}},D_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},b_=/(\w+)(\])?(\[|\.)?/g;function MC(n,e){n.seq.push(e),n.map[e.id]=e}function ok(n,e,t){let i=n.name,r=i.length;for(b_.lastIndex=0;;){let o=b_.exec(i),s=b_.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){MC(t,l===void 0?new C_(a,n,e):new w_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new D_(a),MC(t,f)),t=f}}}var Fa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);ok(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function bC(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sk=37297,ak=0;function ck(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var SC=new We;function lk(n){rt._getMatrix(SC,rt.workingColorSpace,n);let e=`mat3( ${SC.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case al:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function EC(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+ck(n.getShaderSource(e),a)}else return o}function uk(n,e){let t=lk(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dk={[Jy]:"Linear",[Ky]:"Reinhard",[Qy]:"Cineon",[e_]:"ACESFilmic",[n_]:"AgX",[i_]:"Neutral",[t_]:"Custom"};function fk(n,e){let t=dk[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cp=new L;function hk(){rt.getLuminanceCoefficients(cp);let n=cp.x.toFixed(4),e=cp.y.toFixed(4),t=cp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pk(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function mk(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gk(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Bl(n){return n!==""}function CC(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wC(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vk=/^[ \t]*#include +<([\w\d./]+)>/gm;function T_(n){return n.replace(vk,_k)}var yk=new Map;function _k(n,e){let t=Ye[e];if(t===void 0){let i=yk.get(e);if(i!==void 0)t=Ye[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return T_(t)}var xk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DC(n){return n.replace(xk,Mk)}function Mk(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function TC(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bk={[Tl]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function Sk(n){return bk[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ek={[lo]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Il]:"ENVMAP_TYPE_CUBE_UV"};function Ck(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ek[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var wk={[cs]:"ENVMAP_MODE_REFRACTION"};function Dk(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wk[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tk={[vh]:"ENVMAP_BLENDING_MULTIPLY",[XE]:"ENVMAP_BLENDING_MIX",[YE]:"ENVMAP_BLENDING_ADD"};function Ak(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Tk[n.combine]||"ENVMAP_BLENDING_NONE"}function Ik(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Rk(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=Sk(t),l=Ck(t),u=Dk(t),f=Ak(t),d=Ik(t),h=pk(t),g=mk(o),x=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bl).join(`
`),p.length>0&&(p+=`
`)):(m=[TC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),p=[TC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?fk("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,uk("linearToOutputTexel",t.outputColorSpace),hk(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bl).join(`
`)),s=T_(s),s=CC(s,t),s=wC(s,t),a=T_(a),a=CC(a,t),a=wC(a,t),s=DC(s),a=DC(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=M+m+s,E=M+p+a,T=bC(r,r.VERTEX_SHADER,C),D=bC(r,r.FRAGMENT_SHADER,E);r.attachShader(x,T),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(w){if(n.debug.checkShaderErrors){let U=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(D)||"",B=U.trim(),H=V.trim(),O=j.trim(),Q=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,D);else{let de=EC(r,T,"vertex"),ve=EC(r,D,"fragment");Fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+de+`
`+ve)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(H===""||O==="")&&(Z=!1);Z&&(w.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(T),r.deleteShader(D),y=new Fa(r,x),S=gk(r,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(x,sk)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ak++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=D,this}var Nk=0,A_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new I_(e),t.set(e,i)),i}},I_=class{constructor(e){this.id=Nk++,this.code=e,this.usedTimes=0}};function Pk(n,e,t,i,r,o){let s=new dl,a=new A_,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,S,q,w,U){let V=w.fog,j=U.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?w.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||B,H),Q=O&&O.mapping===Il?O.image.height:null,Z=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=de!==void 0?de.length:0,he=0;j.morphAttributes.position!==void 0&&(he=1),j.morphAttributes.normal!==void 0&&(he=2),j.morphAttributes.color!==void 0&&(he=3);let qe,At,Tt,X;if(Z){let yt=Ji[Z];qe=yt.vertexShader,At=yt.fragmentShader}else qe=y.vertexShader,At=y.fragmentShader,a.update(y),Tt=a.getVertexShaderID(y),X=a.getFragmentShaderID(y);let ne=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),$e=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,Ue=!!y.map,Yt=!!y.matcap,ot=!!O,vt=!!y.aoMap,St=!!y.lightMap,Ze=!!y.bumpMap,kt=!!y.normalMap,A=!!y.displacementMap,Vt=!!y.emissiveMap,ft=!!y.metalnessMap,wt=!!y.roughnessMap,Ee=y.anisotropy>0,b=y.clearcoat>0,v=y.dispersion>0,N=y.iridescence>0,$=y.sheen>0,Y=y.transmission>0,W=Ee&&!!y.anisotropyMap,ye=b&&!!y.clearcoatMap,re=b&&!!y.clearcoatNormalMap,Ie=b&&!!y.clearcoatRoughnessMap,Pe=N&&!!y.iridescenceMap,J=N&&!!y.iridescenceThicknessMap,ee=$&&!!y.sheenColorMap,_e=$&&!!y.sheenRoughnessMap,Me=!!y.specularMap,fe=!!y.specularColorMap,Je=!!y.specularIntensityMap,R=Y&&!!y.transmissionMap,oe=Y&&!!y.thicknessMap,te=!!y.gradientMap,ge=!!y.alphaMap,K=y.alphaTest>0,G=!!y.alphaHash,xe=!!y.extensions,Be=Ti;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=n.toneMapping);let Dt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:At,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:$e,instancingColor:$e&&U.instanceColor!==null,instancingMorph:$e&&U.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ss,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:Yt,envMap:ot,envMapMode:ot&&O.mapping,envMapCubeUVHeight:Q,aoMap:vt,lightMap:St,bumpMap:Ze,normalMap:kt,displacementMap:A,emissiveMap:Vt,normalMapObjectSpace:kt&&y.normalMapType===KE,normalMapTangentSpace:kt&&y.normalMapType===d_,metalnessMap:ft,roughnessMap:wt,anisotropy:Ee,anisotropyMap:W,clearcoat:b,clearcoatMap:ye,clearcoatNormalMap:re,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:N,iridescenceMap:Pe,iridescenceThicknessMap:J,sheen:$,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:fe,specularIntensityMap:Je,transmission:Y,transmissionMap:R,thicknessMap:oe,gradientMap:te,opaque:y.transparent===!1&&y.blending===rs&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:K,alphaHash:G,combine:y.combine,mapUv:Ue&&g(y.map.channel),aoMapUv:vt&&g(y.aoMap.channel),lightMapUv:St&&g(y.lightMap.channel),bumpMapUv:Ze&&g(y.bumpMap.channel),normalMapUv:kt&&g(y.normalMap.channel),displacementMapUv:A&&g(y.displacementMap.channel),emissiveMapUv:Vt&&g(y.emissiveMap.channel),metalnessMapUv:ft&&g(y.metalnessMap.channel),roughnessMapUv:wt&&g(y.roughnessMap.channel),anisotropyMapUv:W&&g(y.anisotropyMap.channel),clearcoatMapUv:ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(y.sheenRoughnessMap.channel),specularMapUv:Me&&g(y.specularMap.channel),specularColorMapUv:fe&&g(y.specularColorMap.channel),specularIntensityMapUv:Je&&g(y.specularIntensityMap.channel),transmissionMapUv:R&&g(y.transmissionMap.channel),thicknessMapUv:oe&&g(y.thicknessMap.channel),alphaMapUv:ge&&g(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(kt||Ee),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(Ue||ge),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||j.attributes.normal===void 0&&kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qi,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let q in y.defines)S.push(q),S.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(p(S,y),M(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),y.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),y.push(s.mask)}function C(y){let S=h[y.type],q;if(S){let w=Ji[S];q=uC.clone(w.uniforms)}else q=y.uniforms;return q}function E(y,S){let q=u.get(S);return q!==void 0?++q.usedTimes:(q=new Rk(n,S,y,r),l.push(q),u.set(S,q)),q}function T(y){if(--y.usedTimes===0){let S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function D(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:D,programs:l,dispose:I}}function Ok(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function Fk(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function AC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function IC(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,m,p){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:s(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},n[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=s(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function c(d,h,g,x,m,p){let M=a(d,h,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):t.push(M)}function l(d,h,g,x,m,p){let M=a(d,h,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function u(d,h){t.length>1&&t.sort(d||Fk),i.length>1&&i.sort(h||AC),r.length>1&&r.sort(h||AC)}function f(){for(let d=e,h=n.length;d<h;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:f,sort:u}}function Lk(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new IC,n.set(i,[s])):r>=o.length?(s=new IC,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function kk(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new nt};break;case"SpotLight":t={position:new L,direction:new L,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Uk(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Bk=0;function Vk(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hk(n){let e=new kk,t=Uk(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let r=new L,o=new Rt,s=new Rt;function a(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,C=0,E=0,T=0,D=0,I=0;l.sort(Vk);for(let S=0,q=l.length;S<q;S++){let w=l[S],U=w.color,V=w.intensity,j=w.distance,B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ls?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=U.r*V,f+=U.g*V,d+=U.b*V;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],V);I++}else if(w.isDirectionalLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let O=w.shadow,Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.directionalShadow[h]=Q,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=w.shadow.matrix,M++}i.directional[h]=H,h++}else if(w.isSpotLight){let H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(U).multiplyScalar(V),H.distance=j,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[x]=H;let O=w.shadow;if(w.map&&(i.spotLightMap[T]=w.map,T++,O.updateMatrices(w),w.castShadow&&D++),i.spotLightMatrix[x]=O.matrix,w.castShadow){let Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=B,E++}x++}else if(w.isRectAreaLight){let H=e.get(w);H.color.copy(U).multiplyScalar(V),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let O=w.shadow,Q=t.get(w);Q.shadowIntensity=O.intensity,Q.shadowBias=O.bias,Q.shadowNormalBias=O.normalBias,Q.shadowRadius=O.radius,Q.shadowMapSize=O.mapSize,Q.shadowCameraNear=O.camera.near,Q.shadowCameraFar=O.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=w.shadow.matrix,C++}i.point[g]=H,g++}else if(w.isHemisphereLight){let H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(V),H.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==M||y.numPointShadows!==C||y.numSpotShadows!==E||y.numSpotMaps!==T||y.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,y.directionalLength=h,y.pointLength=g,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=M,y.numPointShadows=C,y.numSpotShadows=E,y.numSpotMaps=T,y.numLightProbes=I,i.version=Bk++)}function c(l,u){let f=0,d=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let C=l[p];if(C.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(C.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(C.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),s.identity(),o.copy(C.matrixWorld),o.premultiply(m),s.extractRotation(o),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(C.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function RC(n){let e=new Hk(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function o(u){t.push(u)}function s(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:s}}function zk(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new RC(n),e.set(r,[a])):o>=s.length?(a=new RC(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Gk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jk=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wk=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],$k=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],NC=new Rt,Ul=new L,S_=new L;function qk(n,e,t){let i=new Da,r=new ct,o=new ct,s=new Nt,a=new oh,c=new sh,l={},u=t.maxTextureSize,f={[Mr]:Rn,[Rn]:Mr,[qi]:qi},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Gk,fragmentShader:jk}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new Fn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ln(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(D,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===AE&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tl);let S=n.getRenderTarget(),q=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Xi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&I.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(B=>B.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,B=D.length;j<B;j++){let H=D[j],O=H.shadow;if(O===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let Q=O.getFrameExtents();r.multiply(Q),o.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/Q.x),r.x=o.x*Q.x,O.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/Q.y),r.y=o.y*Q.y,O.mapSize.y=o.y));let Z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Z,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ra){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yn(r.x,r.y,{format:ls,type:Yi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new oo(r.x,r.y,Ii),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Wi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=en,O.map.depthTexture.magFilter=en}else H.isPointLight?(O.map=new up(r.x),O.map.depthTexture=new ih(r.x,Ai)):(O.map=new Yn(r.x,r.y),O.map.depthTexture=new oo(r.x,r.y,Ai)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Wi,this.type===Tl?(O.map.depthTexture.compareFunction=Z?sp:op,O.map.depthTexture.minFilter=dn,O.map.depthTexture.magFilter=dn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=en,O.map.depthTexture.magFilter=en);O.camera.updateProjectionMatrix()}let de=O.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<de;ve++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(O.map),n.clear());let he=O.getViewport(ve);s.set(o.x*he.x,o.y*he.y,o.x*he.z,o.y*he.w),U.viewport(s)}if(H.isPointLight){let he=O.camera,qe=O.matrix,At=H.distance||he.far;At!==he.far&&(he.far=At,he.updateProjectionMatrix()),Ul.setFromMatrixPosition(H.matrixWorld),he.position.copy(Ul),S_.copy(he.position),S_.add(Wk[ve]),he.up.copy($k[ve]),he.lookAt(S_),he.updateMatrixWorld(),qe.makeTranslation(-Ul.x,-Ul.y,-Ul.z),NC.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(NC,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(H);i=O.getFrustum(),E(I,y,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Ra&&M(O,y),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,q,w)};function M(D,I){let y=e.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yn(r.x,r.y,{format:ls,type:Yi})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,y,d,x,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,y,h,x,null)}function C(D,I,y,S){let q=null,w=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(w!==void 0)q=w;else if(q=y.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=q.uuid,V=I.uuid,j=l[U];j===void 0&&(j={},l[U]=j);let B=j[V];B===void 0&&(B=q.clone(),j[V]=B,I.addEventListener("dispose",T)),q=B}if(q.visible=I.visible,q.wireframe=I.wireframe,S===Ra?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:f[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,y.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let U=n.properties.get(q);U.light=y}return q}function E(D,I,y,S,q){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&q===Ra)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);let V=e.update(D),j=D.material;if(Array.isArray(j)){let B=V.groups;for(let H=0,O=B.length;H<O;H++){let Q=B[H],Z=j[Q.materialIndex];if(Z&&Z.visible){let de=C(D,Z,S,q);D.onBeforeShadow(n,D,I,y,V,de,Q),n.renderBufferDirect(y,null,V,de,D,Q),D.onAfterShadow(n,D,I,y,V,de,Q)}}}else if(j.visible){let B=C(D,j,S,q);D.onBeforeShadow(n,D,I,y,V,B,null),n.renderBufferDirect(y,null,V,B,D,null),D.onAfterShadow(n,D,I,y,V,B,null)}}let U=D.children;for(let V=0,j=U.length;V<j;V++)E(U[V],I,y,S,q)}function T(D){D.target.removeEventListener("dispose",T);for(let y in l){let S=l[y],q=D.target.uuid;q in S&&(S[q].dispose(),delete S[q])}}}function Xk(n,e){function t(){let R=!1,oe=new Nt,te=null,ge=new Nt(0,0,0,0);return{setMask:function(K){te!==K&&!R&&(n.colorMask(K,K,K,K),te=K)},setLocked:function(K){R=K},setClear:function(K,G,xe,Be,Dt){Dt===!0&&(K*=Be,G*=Be,xe*=Be),oe.set(K,G,xe,Be),ge.equals(oe)===!1&&(n.clearColor(K,G,xe,Be),ge.copy(oe))},reset:function(){R=!1,te=null,ge.set(-1,0,0,0)}}}function i(){let R=!1,oe=!1,te=null,ge=null,K=null;return{setReversed:function(G){if(oe!==G){let xe=e.get("EXT_clip_control");G?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),oe=G;let Be=K;K=null,this.setClear(Be)}},getReversed:function(){return oe},setTest:function(G){G?ne(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(G){te!==G&&!R&&(n.depthMask(G),te=G)},setFunc:function(G){if(oe&&(G=cC[G]),ge!==G){switch(G){case zf:n.depthFunc(n.NEVER);break;case Gf:n.depthFunc(n.ALWAYS);break;case jf:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case Wf:n.depthFunc(n.EQUAL);break;case $f:n.depthFunc(n.GEQUAL);break;case qf:n.depthFunc(n.GREATER);break;case Xf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=G}},setLocked:function(G){R=G},setClear:function(G){K!==G&&(K=G,oe&&(G=1-G),n.clearDepth(G))},reset:function(){R=!1,te=null,ge=null,K=null,oe=!1}}}function r(){let R=!1,oe=null,te=null,ge=null,K=null,G=null,xe=null,Be=null,Dt=null;return{setTest:function(yt){R||(yt?ne(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(yt){oe!==yt&&!R&&(n.stencilMask(yt),oe=yt)},setFunc:function(yt,Ki,Qi){(te!==yt||ge!==Ki||K!==Qi)&&(n.stencilFunc(yt,Ki,Qi),te=yt,ge=Ki,K=Qi)},setOp:function(yt,Ki,Qi){(G!==yt||xe!==Ki||Be!==Qi)&&(n.stencilOp(yt,Ki,Qi),G=yt,xe=Ki,Be=Qi)},setLocked:function(yt){R=yt},setClear:function(yt){Dt!==yt&&(n.clearStencil(yt),Dt=yt)},reset:function(){R=!1,oe=null,te=null,ge=null,K=null,G=null,xe=null,Be=null,Dt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,C=null,E=null,T=null,D=null,I=new nt(0,0,0),y=0,S=!1,q=null,w=null,U=null,V=null,j=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,O=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=O>=2);let Z=null,de={},ve=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),qe=new Nt().fromArray(ve),At=new Nt().fromArray(he);function Tt(R,oe,te,ge){let K=new Uint8Array(4),G=n.createTexture();n.bindTexture(R,G),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<te;xe++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(oe+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return G}let X={};X[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),s.setFunc(os),Ze(!1),kt(Xy),ne(n.CULL_FACE),vt(Xi);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function se(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function $e(R,oe){return f[R]!==oe?(n.bindFramebuffer(R,oe),f[R]=oe,R===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=oe),R===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ne(R,oe){let te=h,ge=!1;if(R){te=d.get(oe),te===void 0&&(te=[],d.set(oe,te));let K=R.textures;if(te.length!==K.length||te[0]!==n.COLOR_ATTACHMENT0){for(let G=0,xe=K.length;G<xe;G++)te[G]=n.COLOR_ATTACHMENT0+G;te.length=K.length,ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ge=!0);ge&&n.drawBuffers(te)}function Ue(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let Yt={[no]:n.FUNC_ADD,[RE]:n.FUNC_SUBTRACT,[NE]:n.FUNC_REVERSE_SUBTRACT};Yt[PE]=n.MIN,Yt[OE]=n.MAX;let ot={[FE]:n.ZERO,[LE]:n.ONE,[kE]:n.SRC_COLOR,[Vf]:n.SRC_ALPHA,[GE]:n.SRC_ALPHA_SATURATE,[HE]:n.DST_COLOR,[BE]:n.DST_ALPHA,[UE]:n.ONE_MINUS_SRC_COLOR,[Hf]:n.ONE_MINUS_SRC_ALPHA,[zE]:n.ONE_MINUS_DST_COLOR,[VE]:n.ONE_MINUS_DST_ALPHA,[jE]:n.CONSTANT_COLOR,[WE]:n.ONE_MINUS_CONSTANT_COLOR,[$E]:n.CONSTANT_ALPHA,[qE]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(R,oe,te,ge,K,G,xe,Be,Dt,yt){if(R===Xi){x===!0&&(se(n.BLEND),x=!1);return}if(x===!1&&(ne(n.BLEND),x=!0),R!==IE){if(R!==m||yt!==S){if((p!==no||E!==no)&&(n.blendEquation(n.FUNC_ADD),p=no,E=no),yt)switch(R){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case Yy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zy:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",R);break}else switch(R){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yy:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zy:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",R);break}M=null,C=null,T=null,D=null,I.set(0,0,0),y=0,m=R,S=yt}return}K=K||oe,G=G||te,xe=xe||ge,(oe!==p||K!==E)&&(n.blendEquationSeparate(Yt[oe],Yt[K]),p=oe,E=K),(te!==M||ge!==C||G!==T||xe!==D)&&(n.blendFuncSeparate(ot[te],ot[ge],ot[G],ot[xe]),M=te,C=ge,T=G,D=xe),(Be.equals(I)===!1||Dt!==y)&&(n.blendColor(Be.r,Be.g,Be.b,Dt),I.copy(Be),y=Dt),m=R,S=!1}function St(R,oe){R.side===qi?se(n.CULL_FACE):ne(n.CULL_FACE);let te=R.side===Rn;oe&&(te=!te),Ze(te),R.blending===rs&&R.transparent===!1?vt(Xi):vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),o.setMask(R.colorWrite);let ge=R.stencilWrite;a.setTest(ge),ge&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Vt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(R){q!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),q=R)}function kt(R){R!==DE?(ne(n.CULL_FACE),R!==w&&(R===Xy?n.cullFace(n.BACK):R===TE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),w=R}function A(R){R!==U&&(H&&n.lineWidth(R),U=R)}function Vt(R,oe,te){R?(ne(n.POLYGON_OFFSET_FILL),(V!==oe||j!==te)&&(V=oe,j=te,s.getReversed()&&(oe=-oe),n.polygonOffset(oe,te))):se(n.POLYGON_OFFSET_FILL)}function ft(R){R?ne(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function wt(R){R===void 0&&(R=n.TEXTURE0+B-1),Z!==R&&(n.activeTexture(R),Z=R)}function Ee(R,oe,te){te===void 0&&(Z===null?te=n.TEXTURE0+B-1:te=Z);let ge=de[te];ge===void 0&&(ge={type:void 0,texture:void 0},de[te]=ge),(ge.type!==R||ge.texture!==oe)&&(Z!==te&&(n.activeTexture(te),Z=te),n.bindTexture(R,oe||X[R]),ge.type=R,ge.texture=oe)}function b(){let R=de[Z];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function $(){try{n.texSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function Y(){try{n.texSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function re(){try{n.texStorage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function Ie(){try{n.texStorage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function Pe(){try{n.texImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ee(R){qe.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),qe.copy(R))}function _e(R){At.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),At.copy(R))}function Me(R,oe){let te=l.get(oe);te===void 0&&(te=new WeakMap,l.set(oe,te));let ge=te.get(R);ge===void 0&&(ge=n.getUniformBlockIndex(oe,R.name),te.set(R,ge))}function fe(R,oe){let ge=l.get(oe).get(R);c.get(oe)!==ge&&(n.uniformBlockBinding(oe,ge,R.__bindingPointIndex),c.set(oe,ge))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,de={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,C=null,E=null,T=null,D=null,I=new nt(0,0,0),y=0,S=!1,q=null,w=null,U=null,V=null,j=null,qe.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ne,disable:se,bindFramebuffer:$e,drawBuffers:Ne,useProgram:Ue,setBlending:vt,setMaterial:St,setFlipSided:Ze,setCullFace:kt,setLineWidth:A,setPolygonOffset:Vt,setScissorTest:ft,activeTexture:wt,bindTexture:Ee,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Pe,texImage3D:J,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:Ie,texSubImage2D:$,texSubImage3D:Y,compressedTexSubImage2D:W,compressedTexSubImage3D:ye,scissor:ee,viewport:_e,reset:Je}}function Yk(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):cl("canvas")}function x(b,v,N){let $=1,Y=Ee(b);if((Y.width>N||Y.height>N)&&($=N/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let W=Math.floor($*Y.width),ye=Math.floor($*Y.height);f===void 0&&(f=g(W,ye));let re=v?g(W,ye):f;return re.width=W,re.height=ye,re.getContext("2d").drawImage(b,0,0,W,ye),Le("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+ye+")."),re}else return"data"in b&&Le("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(b,v,N,$,Y=!1){if(b!==null){if(n[b]!==void 0)return n[b];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===n.RED&&(N===n.FLOAT&&(W=n.R32F),N===n.HALF_FLOAT&&(W=n.R16F),N===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.R8UI),N===n.UNSIGNED_SHORT&&(W=n.R16UI),N===n.UNSIGNED_INT&&(W=n.R32UI),N===n.BYTE&&(W=n.R8I),N===n.SHORT&&(W=n.R16I),N===n.INT&&(W=n.R32I)),v===n.RG&&(N===n.FLOAT&&(W=n.RG32F),N===n.HALF_FLOAT&&(W=n.RG16F),N===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RG8UI),N===n.UNSIGNED_SHORT&&(W=n.RG16UI),N===n.UNSIGNED_INT&&(W=n.RG32UI),N===n.BYTE&&(W=n.RG8I),N===n.SHORT&&(W=n.RG16I),N===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGB8UI),N===n.UNSIGNED_SHORT&&(W=n.RGB16UI),N===n.UNSIGNED_INT&&(W=n.RGB32UI),N===n.BYTE&&(W=n.RGB8I),N===n.SHORT&&(W=n.RGB16I),N===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),N===n.UNSIGNED_INT&&(W=n.RGBA32UI),N===n.BYTE&&(W=n.RGBA8I),N===n.SHORT&&(W=n.RGBA16I),N===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){let ye=Y?al:rt.getTransfer($);N===n.FLOAT&&(W=n.RGBA32F),N===n.HALF_FLOAT&&(W=n.RGBA16F),N===n.UNSIGNED_BYTE&&(W=ye===gt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(b,v){let N;return b?v===null||v===Ai||v===Pa?N=n.DEPTH24_STENCIL8:v===Ii?N=n.DEPTH32F_STENCIL8:v===Na&&(N=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ai||v===Pa?N=n.DEPTH_COMPONENT24:v===Ii?N=n.DEPTH_COMPONENT32F:v===Na&&(N=n.DEPTH_COMPONENT16),N}function T(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function D(b){let v=b.target;v.removeEventListener("dispose",D),y(v),v.isVideoTexture&&u.delete(v)}function I(b){let v=b.target;v.removeEventListener("dispose",I),q(v)}function y(b){let v=i.get(b);if(v.__webglInit===void 0)return;let N=b.source,$=d.get(N);if($){let Y=$[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(b),Object.keys($).length===0&&d.delete(N)}i.remove(b)}function S(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let N=b.source,$=d.get(N);delete $[v.__cacheKey],s.memory.textures--}function q(b){let v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Y=0;Y<v.__webglFramebuffer[$].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[$][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=b.textures;for(let $=0,Y=N.length;$<Y;$++){let W=i.get(N[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(N[$])}i.remove(b)}let w=0;function U(){w=0}function V(){let b=w;return b>=r.maxTextures&&Le("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function j(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function B(b,v){let N=i.get(b);if(b.isVideoTexture&&ft(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let $=b.image;if($===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,b,v);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function H(b,v){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,v);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function O(b,v){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){X(N,b,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function Q(b,v){let N=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&N.__version!==b.version){ne(N,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}let Z={[Yf]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[Zf]:n.MIRRORED_REPEAT},de={[en]:n.NEAREST,[ZE]:n.NEAREST_MIPMAP_NEAREST,[Rl]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[xh]:n.LINEAR_MIPMAP_NEAREST,[uo]:n.LINEAR_MIPMAP_LINEAR},ve={[QE]:n.NEVER,[rC]:n.ALWAYS,[eC]:n.LESS,[op]:n.LEQUAL,[tC]:n.EQUAL,[sp]:n.GEQUAL,[nC]:n.GREATER,[iC]:n.NOTEQUAL};function he(b,v){if(v.type===Ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===xh||v.magFilter===Rl||v.magFilter===uo||v.minFilter===dn||v.minFilter===xh||v.minFilter===Rl||v.minFilter===uo)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Z[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==Rl&&v.minFilter!==uo||v.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function qe(b,v){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",D));let $=v.source,Y=d.get($);Y===void 0&&(Y={},d.set($,Y));let W=j(v);if(W!==b.__cacheKey){Y[W]===void 0&&(Y[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Y[W].usedTimes++;let ye=Y[b.__cacheKey];ye!==void 0&&(Y[b.__cacheKey].usedTimes--,ye.usedTimes===0&&S(v)),b.__cacheKey=W,b.__webglTexture=Y[W].texture}return N}function At(b,v,N){return Math.floor(Math.floor(b/N)/v)}function Tt(b,v,N,$){let W=b.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,N,$,v.data);else{W.sort((J,ee)=>J.start-ee.start);let ye=0;for(let J=1;J<W.length;J++){let ee=W[ye],_e=W[J],Me=ee.start+ee.count,fe=At(_e.start,v.width,4),Je=At(ee.start,v.width,4);_e.start<=Me+1&&fe===Je&&At(_e.start+_e.count-1,v.width,4)===fe?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ye,W[ye]=_e)}W.length=ye+1;let re=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let J=0,ee=W.length;J<ee;J++){let _e=W[J],Me=Math.floor(_e.start/4),fe=Math.ceil(_e.count/4),Je=Me%v.width,R=Math.floor(Me/v.width),oe=fe,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,Je,R,oe,te,N,$,v.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function X(b,v,N){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Y=qe(b,v),W=v.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+N);let ye=i.get(W);if(W.version!==ye.__version||Y===!0){t.activeTexture(n.TEXTURE0+N);let re=rt.getPrimaries(rt.workingColorSpace),Ie=v.colorSpace===Er?null:rt.getPrimaries(v.colorSpace),Pe=v.colorSpace===Er||re===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let J=x(v.image,!1,r.maxTextureSize);J=wt(v,J);let ee=o.convert(v.format,v.colorSpace),_e=o.convert(v.type),Me=C(v.internalFormat,ee,_e,v.colorSpace,v.isVideoTexture);he($,v);let fe,Je=v.mipmaps,R=v.isVideoTexture!==!0,oe=ye.__version===void 0||Y===!0,te=W.dataReady,ge=T(v,J);if(v.isDepthTexture)Me=E(v.format===fo,v.type),oe&&(R?t.texStorage2D(n.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,ee,_e,null));else if(v.isDataTexture)if(Je.length>0){R&&oe&&t.texStorage2D(n.TEXTURE_2D,ge,Me,Je[0].width,Je[0].height);for(let K=0,G=Je.length;K<G;K++)fe=Je[K],R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,fe.width,fe.height,ee,_e,fe.data):t.texImage2D(n.TEXTURE_2D,K,Me,fe.width,fe.height,0,ee,_e,fe.data);v.generateMipmaps=!1}else R?(oe&&t.texStorage2D(n.TEXTURE_2D,ge,Me,J.width,J.height),te&&Tt(v,J,ee,_e)):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,ee,_e,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Me,Je[0].width,Je[0].height,J.depth);for(let K=0,G=Je.length;K<G;K++)if(fe=Je[K],v.format!==li)if(ee!==null)if(R){if(te)if(v.layerUpdates.size>0){let xe=v_(fe.width,fe.height,v.format,v.type);for(let Be of v.layerUpdates){let Dt=fe.data.subarray(Be*xe/fe.data.BYTES_PER_ELEMENT,(Be+1)*xe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Be,fe.width,fe.height,1,ee,Dt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,J.depth,ee,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Me,fe.width,fe.height,J.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,J.depth,ee,_e,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Me,fe.width,fe.height,J.depth,0,ee,_e,fe.data)}else{R&&oe&&t.texStorage2D(n.TEXTURE_2D,ge,Me,Je[0].width,Je[0].height);for(let K=0,G=Je.length;K<G;K++)fe=Je[K],v.format!==li?ee!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,fe.width,fe.height,ee,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Me,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,fe.width,fe.height,ee,_e,fe.data):t.texImage2D(n.TEXTURE_2D,K,Me,fe.width,fe.height,0,ee,_e,fe.data)}else if(v.isDataArrayTexture)if(R){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Me,J.width,J.height,J.depth),te)if(v.layerUpdates.size>0){let K=v_(J.width,J.height,v.format,v.type);for(let G of v.layerUpdates){let xe=J.data.subarray(G*K/J.data.BYTES_PER_ELEMENT,(G+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,G,J.width,J.height,1,ee,_e,xe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ee,_e,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,ee,_e,J.data);else if(v.isData3DTexture)R?(oe&&t.texStorage3D(n.TEXTURE_3D,ge,Me,J.width,J.height,J.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ee,_e,J.data)):t.texImage3D(n.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,ee,_e,J.data);else if(v.isFramebufferTexture){if(oe)if(R)t.texStorage2D(n.TEXTURE_2D,ge,Me,J.width,J.height);else{let K=J.width,G=J.height;for(let xe=0;xe<ge;xe++)t.texImage2D(n.TEXTURE_2D,xe,Me,K,G,0,ee,_e,null),K>>=1,G>>=1}}else if(Je.length>0){if(R&&oe){let K=Ee(Je[0]);t.texStorage2D(n.TEXTURE_2D,ge,Me,K.width,K.height)}for(let K=0,G=Je.length;K<G;K++)fe=Je[K],R?te&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ee,_e,fe):t.texImage2D(n.TEXTURE_2D,K,Me,ee,_e,fe);v.generateMipmaps=!1}else if(R){if(oe){let K=Ee(J);t.texStorage2D(n.TEXTURE_2D,ge,Me,K.width,K.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,_e,J)}else t.texImage2D(n.TEXTURE_2D,0,Me,ee,_e,J);m(v)&&p($),ye.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ne(b,v,N){if(v.image.length!==6)return;let $=qe(b,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let W=i.get(Y);if(Y.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+N);let ye=rt.getPrimaries(rt.workingColorSpace),re=v.colorSpace===Er?null:rt.getPrimaries(v.colorSpace),Ie=v.colorSpace===Er||ye===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let G=0;G<6;G++)!Pe&&!J?ee[G]=x(v.image[G],!0,r.maxCubemapSize):ee[G]=J?v.image[G].image:v.image[G],ee[G]=wt(v,ee[G]);let _e=ee[0],Me=o.convert(v.format,v.colorSpace),fe=o.convert(v.type),Je=C(v.internalFormat,Me,fe,v.colorSpace),R=v.isVideoTexture!==!0,oe=W.__version===void 0||$===!0,te=Y.dataReady,ge=T(v,_e);he(n.TEXTURE_CUBE_MAP,v);let K;if(Pe){R&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,_e.width,_e.height);for(let G=0;G<6;G++){K=ee[G].mipmaps;for(let xe=0;xe<K.length;xe++){let Be=K[xe];v.format!==li?Me!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe,0,0,Be.width,Be.height,Me,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe,Je,Be.width,Be.height,0,Be.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe,0,0,Be.width,Be.height,Me,fe,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe,Je,Be.width,Be.height,0,Me,fe,Be.data)}}}else{if(K=v.mipmaps,R&&oe){K.length>0&&ge++;let G=Ee(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,G.width,G.height)}for(let G=0;G<6;G++)if(J){R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ee[G].width,ee[G].height,Me,fe,ee[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Je,ee[G].width,ee[G].height,0,Me,fe,ee[G].data);for(let xe=0;xe<K.length;xe++){let Dt=K[xe].image[G].image;R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe+1,0,0,Dt.width,Dt.height,Me,fe,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe+1,Je,Dt.width,Dt.height,0,Me,fe,Dt.data)}}else{R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Me,fe,ee[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Je,Me,fe,ee[G]);for(let xe=0;xe<K.length;xe++){let Be=K[xe];R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe+1,0,0,Me,fe,Be.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe+1,Je,Me,fe,Be.image[G])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function se(b,v,N,$,Y,W){let ye=o.convert(N.format,N.colorSpace),re=o.convert(N.type),Ie=C(N.internalFormat,ye,re,N.colorSpace),Pe=i.get(v),J=i.get(N);if(J.__renderTarget=v,!Pe.__hasExternalTextures){let ee=Math.max(1,v.width>>W),_e=Math.max(1,v.height>>W);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,W,Ie,ee,_e,v.depth,0,ye,re,null):t.texImage2D(Y,W,Ie,ee,_e,0,ye,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Y,J.__webglTexture,0,A(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Y,J.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(b,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){let $=v.depthTexture,Y=$&&$.isDepthTexture?$.type:null,W=E(v.stencilBuffer,Y),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(v),W,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(v),W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,b)}else{let $=v.textures;for(let Y=0;Y<$.length;Y++){let W=$[Y],ye=o.convert(W.format,W.colorSpace),re=o.convert(W.type),Ie=C(W.internalFormat,ye,re,W.colorSpace);Vt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(v),Ie,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(v),Ie,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,v,N){let $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),he(n.TEXTURE_CUBE_MAP,v.depthTexture);let Pe=o.convert(v.depthTexture.format),J=o.convert(v.depthTexture.type),ee;v.depthTexture.format===Wi?ee=n.DEPTH_COMPONENT24:v.depthTexture.format===fo&&(ee=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,v.width,v.height,0,Pe,J,null)}}else B(v.depthTexture,0);let W=Y.__webglTexture,ye=A(v),re=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Ie=v.depthTexture.format===fo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wi)Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,re,W,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,re,W,0);else if(v.depthTexture.format===fo)Vt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,re,W,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,re,W,0);else throw new Error("Unknown depthTexture format")}function Ue(b){let v=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let $=0;$<6;$++)Ne(v.__webglFramebuffer[$],b,$);else{let $=b.texture.mipmaps;$&&$.length>0?Ne(v.__webglFramebuffer[0],b,0):Ne(v.__webglFramebuffer,b,0)}else if(N){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),$e(v.__webglDepthbuffer[$],b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,W)}}else{let $=b.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),$e(v.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(b,v,N){let $=i.get(b);v!==void 0&&se($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ue(b)}function ot(b){let v=b.texture,N=i.get(b),$=i.get(v);b.addEventListener("dispose",I);let Y=b.textures,W=b.isWebGLCubeRenderTarget===!0,ye=Y.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,s.memory.textures++),W){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)N.__webglFramebuffer[re][Ie]=n.createFramebuffer()}else N.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)N.__webglFramebuffer[re]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ye)for(let re=0,Ie=Y.length;re<Ie;re++){let Pe=i.get(Y[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),s.memory.textures++)}if(b.samples>0&&Vt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){let Ie=Y[re];N.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[re]);let Pe=o.convert(Ie.format,Ie.colorSpace),J=o.convert(Ie.type),ee=C(Ie.internalFormat,Pe,J,Ie.colorSpace,b.isXRRenderTarget===!0),_e=A(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,N.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),he(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)se(N.__webglFramebuffer[re][Ie],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie);else se(N.__webglFramebuffer[re],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let re=0,Ie=Y.length;re<Ie;re++){let Pe=Y[re],J=i.get(Pe),ee=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),he(ee,Pe),se(N.__webglFramebuffer,b,Pe,n.COLOR_ATTACHMENT0+re,ee,0),m(Pe)&&p(ee)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),he(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)se(N.__webglFramebuffer[Ie],b,v,n.COLOR_ATTACHMENT0,re,Ie);else se(N.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}b.depthBuffer&&Ue(b)}function vt(b){let v=b.textures;for(let N=0,$=v.length;N<$;N++){let Y=v[N];if(m(Y)){let W=M(b),ye=i.get(Y).__webglTexture;t.bindTexture(W,ye),p(W),t.unbindTexture()}}}let St=[],Ze=[];function kt(b){if(b.samples>0){if(Vt(b)===!1){let v=b.textures,N=b.width,$=b.height,Y=n.COLOR_BUFFER_BIT,W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(b),re=v.length>1;if(re)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let Ie=b.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Pe]);let J=i.get(v[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,Y,n.NEAREST),c===!0&&(St.length=0,Ze.length=0,St.push(n.COLOR_ATTACHMENT0+Pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(St.push(W),Ze.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Pe]);let J=i.get(v[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function A(b){return Math.min(r.maxSamples,b.samples)}function Vt(b){let v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(b){let v=s.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function wt(b,v){let N=b.colorSpace,$=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==ss&&N!==Er&&(rt.getTransfer(N)===gt?($!==li||Y!==kn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",N)),v}function Ee(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Yt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zk(n,e){function t(i,r=Er){let o,s=rt.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===bh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===s_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===r_)return n.BYTE;if(i===o_)return n.SHORT;if(i===Na)return n.UNSIGNED_SHORT;if(i===Mh)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Ii)return n.FLOAT;if(i===Yi)return n.HALF_FLOAT;if(i===c_)return n.ALPHA;if(i===l_)return n.RGB;if(i===li)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===fo)return n.DEPTH_STENCIL;if(i===u_)return n.RED;if(i===Eh)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===Ch)return n.RG_INTEGER;if(i===wh)return n.RGBA_INTEGER;if(i===Nl||i===Pl||i===Ol||i===Fl)if(s===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Nl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Nl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Th||i===Ah||i===Ih)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ih)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Nh||i===Ph||i===Oh||i===Fh||i===Lh||i===kh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Rh||i===Nh)return s===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ph)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oh)return o.COMPRESSED_R11_EAC;if(i===Fh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Lh)return o.COMPRESSED_RG11_EAC;if(i===kh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uh||i===Bh||i===Vh||i===Hh||i===zh||i===Gh||i===jh||i===Wh||i===$h||i===qh||i===Xh||i===Yh||i===Zh||i===Jh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Uh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return s===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kh||i===Qh||i===ep)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Kh)return s===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ep)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===np||i===ip||i===rp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===tp)return o.COMPRESSED_RED_RGTC1_EXT;if(i===np)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Jk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kk=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,R_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:Jk,fragmentShader:Kk,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new xl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},N_=class extends br{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new R_,p={},M=t.getContextAttributes(),C=null,E=null,T=[],D=[],I=new ct,y=null,S=new un;S.viewport=new Nt;let q=new un;q.viewport=new Nt;let w=[S,q],U=new gh,V=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=T[X];return ne===void 0&&(ne=new wa,T[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=T[X];return ne===void 0&&(ne=new wa,T[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=T[X];return ne===void 0&&(ne=new wa,T[X]=ne),ne.getHandSpace()};function B(X){let ne=D.indexOf(X.inputSource);if(ne===-1)return;let se=T[ne];se!==void 0&&(se.update(X.inputSource,X.frame,l||s),se.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",O);for(let X=0;X<T.length;X++){let ne=D[X];ne!==null&&(D[X]=null,T[X].disconnect(ne))}V=null,j=null,m.reset();for(let X in p)delete p[X];e.setRenderTarget(C),h=null,d=null,f=null,r=null,E=null,Tt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,$e=null,Ne=null;M.depth&&(Ne=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=M.stencil?fo:Wi,$e=M.stencil?Pa:Ai);let Ue={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:o};f=this.getBinding(),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Yn(d.textureWidth,d.textureHeight,{format:li,type:kn,depthTexture:new oo(d.textureWidth,d.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Yn(h.framebufferWidth,h.framebufferHeight,{format:li,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(X){for(let ne=0;ne<X.removed.length;ne++){let se=X.removed[ne],$e=D.indexOf(se);$e>=0&&(D[$e]=null,T[$e].disconnect(se))}for(let ne=0;ne<X.added.length;ne++){let se=X.added[ne],$e=D.indexOf(se);if($e===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=D.length){D.push(se),$e=Ue;break}else if(D[Ue]===null){D[Ue]=se,$e=Ue;break}if($e===-1)break}let Ne=T[$e];Ne&&Ne.connect(se)}}let Q=new L,Z=new L;function de(X,ne,se){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);let $e=Q.distanceTo(Z),Ne=ne.projectionMatrix.elements,Ue=se.projectionMatrix.elements,Yt=Ne[14]/(Ne[10]-1),ot=Ne[14]/(Ne[10]+1),vt=(Ne[9]+1)/Ne[5],St=(Ne[9]-1)/Ne[5],Ze=(Ne[8]-1)/Ne[0],kt=(Ue[8]+1)/Ue[0],A=Yt*Ze,Vt=Yt*kt,ft=$e/(-Ze+kt),wt=ft*-Ze;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(wt),X.translateZ(ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ee=Yt+ft,b=ot+ft,v=A-wt,N=Vt+($e-wt),$=vt*ot/b*Ee,Y=St*ot/b*Ee;X.projectionMatrix.makePerspective(v,N,$,Y,Ee,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ve(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,se=X.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(se=m.depthFar)),U.near=q.near=S.near=ne,U.far=q.far=S.far=se,(V!==U.near||j!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,j=U.far),U.layers.mask=X.layers.mask|6,S.layers.mask=U.layers.mask&-5,q.layers.mask=U.layers.mask&-3;let $e=X.parent,Ne=U.cameras;ve(U,$e);for(let Ue=0;Ue<Ne.length;Ue++)ve(Ne[Ue],$e);Ne.length===2?de(U,S,q):U.projectionMatrix.copy(S.projectionMatrix),he(X,U,$e)};function he(X,ne,se){se===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Kf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(X){return p[X]};let qe=null;function At(X,ne){if(u=ne.getViewerPose(l||s),g=ne,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let $e=!1;se.length!==U.cameras.length&&(U.cameras.length=0,$e=!0);for(let ot=0;ot<se.length;ot++){let vt=se[ot],St=null;if(h!==null)St=h.getViewport(vt);else{let kt=f.getViewSubImage(d,vt);St=kt.viewport,ot===0&&(e.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(E))}let Ze=w[ot];Ze===void 0&&(Ze=new un,Ze.layers.enable(ot),Ze.viewport=new Nt,w[ot]=Ze),Ze.matrix.fromArray(vt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(vt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(St.x,St.y,St.width,St.height),ot===0&&(U.matrix.copy(Ze.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),$e===!0&&U.cameras.push(Ze)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let ot=f.getDepthInformation(se[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,r.renderState)}if(Ne&&Ne.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ot=0;ot<se.length;ot++){let vt=se[ot].camera;if(vt){let St=p[vt];St||(St=new _l,p[vt]=St);let Ze=f.getCameraImage(vt);St.sourceTexture=Ze}}}}for(let se=0;se<T.length;se++){let $e=D[se],Ne=T[se];$e!==null&&Ne!==void 0&&Ne.update($e,ne,l||s)}qe&&qe(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Tt=new PC;Tt.setAnimationLoop(At),this.setAnimationLoop=function(X){qe=X},this.dispose=function(){}}},fs=new io,Qk=new Rt;function e2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,p_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,C,E){p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,C):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),C=M.envMap,E=M.envMapRotation;C&&(m.envMap.value=C,fs.copy(E),fs.x*=-1,fs.y*=-1,fs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Qk.makeRotationFromEuler(fs)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function t2(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,C){let E=C.program;i.uniformBlockBinding(M,E)}function l(M,C){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",m));let T=C.program;i.updateUBOMapping(M,T);let D=e.render.frame;o[M.id]!==D&&(d(M),o[M.id]=D)}function u(M){let C=f();M.__bindingPointIndex=C;let E=n.createBuffer(),T=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,E),E}function f(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let C=r[M.id],E=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let D=0,I=E.length;D<I;D++){let y=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,q=y.length;S<q;S++){let w=y[S];if(h(w,D,S,T)===!0){let U=w.__offset,V=Array.isArray(w.value)?w.value:[w.value],j=0;for(let B=0;B<V.length;B++){let H=V[B],O=x(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+j,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,C,E,T){let D=M.value,I=C+"_"+E;if(T[I]===void 0)return typeof D=="number"||typeof D=="boolean"?T[I]=D:T[I]=D.clone(),!0;{let y=T[I];if(typeof D=="number"||typeof D=="boolean"){if(y!==D)return T[I]=D,!0}else if(y.equals(D)===!1)return y.copy(D),!0}return!1}function g(M){let C=M.uniforms,E=0,T=16;for(let I=0,y=C.length;I<y;I++){let S=Array.isArray(C[I])?C[I]:[C[I]];for(let q=0,w=S.length;q<w;q++){let U=S[q],V=Array.isArray(U.value)?U.value:[U.value];for(let j=0,B=V.length;j<B;j++){let H=V[j],O=x(H),Q=E%T,Z=Q%O.boundary,de=Q+Z;E+=Z,de!==0&&T-de<O.storage&&(E+=T-de),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=O.storage}}}let D=E%T;return D>0&&(E+=T-D),M.__size=E,M.__cache={},this}function x(M){let C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",M),C}function m(M){let C=M.target;C.removeEventListener("dispose",m);let E=s.indexOf(C.__bindingPointIndex);s.splice(E,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete o[C.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:c,update:l,dispose:p}}var n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function i2(){return Zi===null&&(Zi=new nh(n2,16,16,ls,Yi),Zi.name="DFG_LUT",Zi.minFilter=dn,Zi.magFilter=dn,Zi.wrapS=ji,Zi.wrapT=ji,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var dp=class{constructor(e={}){let{canvas:t=oC(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=kn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;let x=h,m=new Set([wh,Ch,Eh]),p=new Set([kn,Ai,Na,Pa,bh,Sh]),M=new Uint32Array(4),C=new Int32Array(4),E=null,T=null,D=[],I=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,q=!1;this._outputColorSpace=Xn;let w=0,U=0,V=null,j=-1,B=null,H=new Nt,O=new Nt,Q=null,Z=new nt(0),de=0,ve=t.width,he=t.height,qe=1,At=null,Tt=null,X=new Nt(0,0,ve,he),ne=new Nt(0,0,ve,he),se=!1,$e=new Da,Ne=!1,Ue=!1,Yt=new Rt,ot=new L,vt=new Nt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function kt(){return V===null?qe:1}let A=i;function Vt(_,P){return t.getContext(_,P)}try{let _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),A===null){let P="webgl2";if(A=Vt(P,_),A===null)throw Vt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Fe("WebGLRenderer: "+_.message),_}let ft,wt,Ee,b,v,N,$,Y,W,ye,re,Ie,Pe,J,ee,_e,Me,fe,Je,R,oe,te,ge;function K(){ft=new dL(A),ft.init(),oe=new Zk(A,ft),wt=new iL(A,ft,e,oe),Ee=new Xk(A,ft),wt.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),b=new pL(A),v=new Ok,N=new Yk(A,ft,Ee,v,wt,oe,b),$=new uL(S),Y=new _P(A),te=new tL(A,Y),W=new fL(A,Y,b,te),ye=new gL(A,W,Y,te,b),fe=new mL(A,wt,N),ee=new rL(v),re=new Pk(S,$,ft,wt,te,ee),Ie=new e2(S,v),Pe=new Lk,J=new zk(ft),Me=new eL(S,$,Ee,ye,g,c),_e=new qk(S,ye,wt),ge=new t2(A,b,wt,Ee),Je=new nL(A,ft,b),R=new hL(A,ft,b),b.programs=re.programs,S.capabilities=wt,S.extensions=ft,S.properties=v,S.renderLists=Pe,S.shadowMap=_e,S.state=Ee,S.info=b}K(),x!==kn&&(y=new yL(x,t.width,t.height,r,o));let G=new N_(S,A);this.xr=G,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=ft.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ft.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(_){_!==void 0&&(qe=_,this.setSize(ve,he,!1))},this.getSize=function(_){return _.set(ve,he)},this.setSize=function(_,P,z=!0){if(G.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=_,he=P,t.width=Math.floor(_*qe),t.height=Math.floor(P*qe),z===!0&&(t.style.width=_+"px",t.style.height=P+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,_,P)},this.getDrawingBufferSize=function(_){return _.set(ve*qe,he*qe).floor()},this.setDrawingBufferSize=function(_,P,z){ve=_,he=P,qe=z,t.width=Math.floor(_*z),t.height=Math.floor(P*z),this.setViewport(0,0,_,P)},this.setEffects=function(_){if(x===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let P=0;P<_.length;P++)if(_[P].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(H)},this.getViewport=function(_){return _.copy(X)},this.setViewport=function(_,P,z,k){_.isVector4?X.set(_.x,_.y,_.z,_.w):X.set(_,P,z,k),Ee.viewport(H.copy(X).multiplyScalar(qe).round())},this.getScissor=function(_){return _.copy(ne)},this.setScissor=function(_,P,z,k){_.isVector4?ne.set(_.x,_.y,_.z,_.w):ne.set(_,P,z,k),Ee.scissor(O.copy(ne).multiplyScalar(qe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(_){Ee.setScissorTest(se=_)},this.setOpaqueSort=function(_){At=_},this.setTransparentSort=function(_){Tt=_},this.getClearColor=function(_){return _.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(_=!0,P=!0,z=!0){let k=0;if(_){let F=!1;if(V!==null){let le=V.texture.format;F=m.has(le)}if(F){let le=V.texture.type,me=p.has(le),ue=Me.getClearColor(),be=Me.getClearAlpha(),De=ue.r,Ge=ue.g,Ke=ue.b;me?(M[0]=De,M[1]=Ge,M[2]=Ke,M[3]=be,A.clearBufferuiv(A.COLOR,0,M)):(C[0]=De,C[1]=Ge,C[2]=Ke,C[3]=be,A.clearBufferiv(A.COLOR,0,C))}else k|=A.COLOR_BUFFER_BIT}P&&(k|=A.DEPTH_BUFFER_BIT),z&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Me.dispose(),Pe.dispose(),J.dispose(),v.dispose(),$.dispose(),ye.dispose(),te.dispose(),ge.dispose(),re.dispose(),G.dispose(),G.removeEventListener("sessionstart",j_),G.removeEventListener("sessionend",W_),mo.stop()};function xe(_){_.preventDefault(),h_("WebGLRenderer: Context Lost."),q=!0}function Be(){h_("WebGLRenderer: Context Restored."),q=!1;let _=b.autoReset,P=_e.enabled,z=_e.autoUpdate,k=_e.needsUpdate,F=_e.type;K(),b.autoReset=_,_e.enabled=P,_e.autoUpdate=z,_e.needsUpdate=k,_e.type=F}function Dt(_){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function yt(_){let P=_.target;P.removeEventListener("dispose",yt),Ki(P)}function Ki(_){Qi(_),v.remove(_)}function Qi(_){let P=v.get(_).programs;P!==void 0&&(P.forEach(function(z){re.releaseProgram(z)}),_.isShaderMaterial&&re.releaseShaderCache(_))}this.renderBufferDirect=function(_,P,z,k,F,le){P===null&&(P=St);let me=F.isMesh&&F.matrixWorld.determinant()<0,ue=uw(_,P,z,k,F);Ee.setMaterial(k,me);let be=z.index,De=1;if(k.wireframe===!0){if(be=W.getWireframeAttribute(z),be===void 0)return;De=2}let Ge=z.drawRange,Ke=z.attributes.position,Ae=Ge.start*De,xt=(Ge.start+Ge.count)*De;le!==null&&(Ae=Math.max(Ae,le.start*De),xt=Math.min(xt,(le.start+le.count)*De)),be!==null?(Ae=Math.max(Ae,0),xt=Math.min(xt,be.count)):Ke!=null&&(Ae=Math.max(Ae,0),xt=Math.min(xt,Ke.count));let Ut=xt-Ae;if(Ut<0||Ut===1/0)return;te.setup(F,k,ue,z,be);let Pt,Mt=Je;if(be!==null&&(Pt=Y.get(be),Mt=R,Mt.setIndex(Pt)),F.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*kt()),Mt.setMode(A.LINES)):Mt.setMode(A.TRIANGLES);else if(F.isLine){let fn=k.linewidth;fn===void 0&&(fn=1),Ee.setLineWidth(fn*kt()),F.isLineSegments?Mt.setMode(A.LINES):F.isLineLoop?Mt.setMode(A.LINE_LOOP):Mt.setMode(A.LINE_STRIP)}else F.isPoints?Mt.setMode(A.POINTS):F.isSprite&&Mt.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let fn=F._multiDrawStarts,Ce=F._multiDrawCounts,Un=F._multiDrawCount,at=be?Y.get(be).bytesPerElement:1,ui=v.get(k).currentProgram.getUniforms();for(let Ri=0;Ri<Un;Ri++)ui.setValue(A,"_gl_DrawID",Ri),Mt.render(fn[Ri]/at,Ce[Ri])}else if(F.isInstancedMesh)Mt.renderInstances(Ae,Ut,F.count);else if(z.isInstancedBufferGeometry){let fn=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,fn);Mt.renderInstances(Ae,Ut,Ce)}else Mt.render(Ae,Ut)};function G_(_,P,z){_.transparent===!0&&_.side===qi&&_.forceSinglePass===!1?(_.side=Rn,_.needsUpdate=!0,ql(_,P,z),_.side=Mr,_.needsUpdate=!0,ql(_,P,z),_.side=qi):ql(_,P,z)}this.compile=function(_,P,z=null){z===null&&(z=_),T=J.get(z),T.init(P),I.push(T),z.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),_!==z&&_.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights();let k=new Set;return _.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let le=F.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){let ue=le[me];G_(ue,z,F),k.add(ue)}else G_(le,z,F),k.add(le)}),T=I.pop(),k},this.compileAsync=function(_,P,z=null){let k=this.compile(_,P,z);return new Promise(F=>{function le(){if(k.forEach(function(me){v.get(me).currentProgram.isReady()&&k.delete(me)}),k.size===0){F(_);return}setTimeout(le,10)}ft.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ip=null;function lw(_){Ip&&Ip(_)}function j_(){mo.stop()}function W_(){mo.start()}let mo=new PC;mo.setAnimationLoop(lw),typeof self<"u"&&mo.setContext(self),this.setAnimationLoop=function(_){Ip=_,G.setAnimationLoop(_),_===null?mo.stop():mo.start()},G.addEventListener("sessionstart",j_),G.addEventListener("sessionend",W_),this.render=function(_,P){if(P!==void 0&&P.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;let z=G.enabled===!0&&G.isPresenting===!0,k=y!==null&&(V===null||z)&&y.begin(S,V);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,P,V),T=J.get(_,I.length),T.init(P),I.push(T),Yt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$e.setFromProjectionMatrix(Yt,Di,P.reversedDepth),Ue=this.localClippingEnabled,Ne=ee.init(this.clippingPlanes,Ue),E=Pe.get(_,D.length),E.init(),D.push(E),G.enabled===!0&&G.isPresenting===!0){let me=S.xr.getDepthSensingMesh();me!==null&&Rp(me,P,-1/0,S.sortObjects)}Rp(_,P,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(At,Tt),Ze=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ze&&Me.addToRenderList(E,_),this.info.render.frame++,Ne===!0&&ee.beginShadows();let F=T.state.shadowsArray;if(_e.render(F,_,P),Ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&y.hasRenderPass())===!1){let me=E.opaque,ue=E.transmissive;if(T.setupLights(),P.isArrayCamera){let be=P.cameras;if(ue.length>0)for(let De=0,Ge=be.length;De<Ge;De++){let Ke=be[De];q_(me,ue,_,Ke)}Ze&&Me.render(_);for(let De=0,Ge=be.length;De<Ge;De++){let Ke=be[De];$_(E,_,Ke,Ke.viewport)}}else ue.length>0&&q_(me,ue,_,P),Ze&&Me.render(_),$_(E,_,P)}V!==null&&U===0&&(N.updateMultisampleRenderTarget(V),N.updateRenderTargetMipmap(V)),k&&y.end(S),_.isScene===!0&&_.onAfterRender(S,_,P),te.resetDefaultState(),j=-1,B=null,I.pop(),I.length>0?(T=I[I.length-1],Ne===!0&&ee.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?E=D[D.length-1]:E=null};function Rp(_,P,z,k){if(_.visible===!1)return;if(_.layers.test(P.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(P);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||$e.intersectsSprite(_)){k&&vt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Yt);let me=ye.update(_),ue=_.material;ue.visible&&E.push(_,me,ue,z,vt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||$e.intersectsObject(_))){let me=ye.update(_),ue=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),vt.copy(_.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),vt.copy(me.boundingSphere.center)),vt.applyMatrix4(_.matrixWorld).applyMatrix4(Yt)),Array.isArray(ue)){let be=me.groups;for(let De=0,Ge=be.length;De<Ge;De++){let Ke=be[De],Ae=ue[Ke.materialIndex];Ae&&Ae.visible&&E.push(_,me,Ae,z,vt.z,Ke)}}else ue.visible&&E.push(_,me,ue,z,vt.z,null)}}let le=_.children;for(let me=0,ue=le.length;me<ue;me++)Rp(le[me],P,z,k)}function $_(_,P,z,k){let{opaque:F,transmissive:le,transparent:me}=_;T.setupLightsView(z),Ne===!0&&ee.setGlobalState(S.clippingPlanes,z),k&&Ee.viewport(H.copy(k)),F.length>0&&$l(F,P,z),le.length>0&&$l(le,P,z),me.length>0&&$l(me,P,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function q_(_,P,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ae=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:Ae?Yi:kn,minFilter:uo,samples:Math.max(4,wt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let le=T.state.transmissionRenderTarget[k.id],me=k.viewport||H;le.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);let ue=S.getRenderTarget(),be=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(le),S.getClearColor(Z),de=S.getClearAlpha(),de<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&Me.render(z);let Ge=S.toneMapping;S.toneMapping=Ti;let Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Ne===!0&&ee.setGlobalState(S.clippingPlanes,k),$l(_,z,k),N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let xt=0,Ut=P.length;xt<Ut;xt++){let Pt=P[xt],{object:Mt,geometry:fn,material:Ce,group:Un}=Pt;if(Ce.side===qi&&Mt.layers.test(k.layers)){let at=Ce.side;Ce.side=Rn,Ce.needsUpdate=!0,X_(Mt,z,k,fn,Ce,Un),Ce.side=at,Ce.needsUpdate=!0,Ae=!0}}Ae===!0&&(N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le))}S.setRenderTarget(ue,be,De),S.setClearColor(Z,de),Ke!==void 0&&(k.viewport=Ke),S.toneMapping=Ge}function $l(_,P,z){let k=P.isScene===!0?P.overrideMaterial:null;for(let F=0,le=_.length;F<le;F++){let me=_[F],{object:ue,geometry:be,group:De}=me,Ge=me.material;Ge.allowOverride===!0&&k!==null&&(Ge=k),ue.layers.test(z.layers)&&X_(ue,P,z,be,Ge,De)}}function X_(_,P,z,k,F,le){_.onBeforeRender(S,P,z,k,F,le),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(S,P,z,k,_,le),F.transparent===!0&&F.side===qi&&F.forceSinglePass===!1?(F.side=Rn,F.needsUpdate=!0,S.renderBufferDirect(z,P,k,F,_,le),F.side=Mr,F.needsUpdate=!0,S.renderBufferDirect(z,P,k,F,_,le),F.side=qi):S.renderBufferDirect(z,P,k,F,_,le),_.onAfterRender(S,P,z,k,F,le)}function ql(_,P,z){P.isScene!==!0&&(P=St);let k=v.get(_),F=T.state.lights,le=T.state.shadowsArray,me=F.state.version,ue=re.getParameters(_,F.state,le,P,z),be=re.getProgramCacheKey(ue),De=k.programs;k.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;let Ge=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;k.envMap=$.get(_.envMap||k.environment,Ge),k.envMapRotation=k.environment!==null&&_.envMap===null?P.environmentRotation:_.envMapRotation,De===void 0&&(_.addEventListener("dispose",yt),De=new Map,k.programs=De);let Ke=De.get(be);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===me)return Z_(_,ue),Ke}else ue.uniforms=re.getUniforms(_),_.onBeforeCompile(ue,S),Ke=re.acquireProgram(ue,be),De.set(be,Ke),k.uniforms=ue.uniforms;let Ae=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ae.clippingPlanes=ee.uniform),Z_(_,ue),k.needsLights=fw(_),k.lightsStateVersion=me,k.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ke,k.uniformsList=null,Ke}function Y_(_){if(_.uniformsList===null){let P=_.currentProgram.getUniforms();_.uniformsList=Fa.seqWithValue(P.seq,_.uniforms)}return _.uniformsList}function Z_(_,P){let z=v.get(_);z.outputColorSpace=P.outputColorSpace,z.batching=P.batching,z.batchingColor=P.batchingColor,z.instancing=P.instancing,z.instancingColor=P.instancingColor,z.instancingMorph=P.instancingMorph,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function uw(_,P,z,k,F){P.isScene!==!0&&(P=St),N.resetTextureUnits();let le=P.fog,me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,ue=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ss,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,De=$.get(k.envMap||me,be),Ge=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!z.morphAttributes.position,xt=!!z.morphAttributes.normal,Ut=!!z.morphAttributes.color,Pt=Ti;k.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let Mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fn=Mt!==void 0?Mt.length:0,Ce=v.get(k),Un=T.state.lights;if(Ne===!0&&(Ue===!0||_!==B)){let Zt=_===B&&k.id===j;ee.setState(k,_,Zt)}let at=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Un.state.version||Ce.outputColorSpace!==ue||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==De||k.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Ge||Ce.vertexTangents!==Ke||Ce.morphTargets!==Ae||Ce.morphNormals!==xt||Ce.morphColors!==Ut||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==fn)&&(at=!0):(at=!0,Ce.__version=k.version);let ui=Ce.currentProgram;at===!0&&(ui=ql(k,P,F));let Ri=!1,go=!1,ps=!1,Et=ui.getUniforms(),tn=Ce.uniforms;if(Ee.useProgram(ui.program)&&(Ri=!0,go=!0,ps=!0),k.id!==j&&(j=k.id,go=!0),Ri||B!==_){Ee.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Et.setValue(A,"projectionMatrix",_.projectionMatrix),Et.setValue(A,"viewMatrix",_.matrixWorldInverse);let Tr=Et.map.cameraPosition;Tr!==void 0&&Tr.setValue(A,ot.setFromMatrixPosition(_.matrixWorld)),wt.logarithmicDepthBuffer&&Et.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),B!==_&&(B=_,go=!0,ps=!0)}if(Ce.needsLights&&(Un.state.directionalShadowMap.length>0&&Et.setValue(A,"directionalShadowMap",Un.state.directionalShadowMap,N),Un.state.spotShadowMap.length>0&&Et.setValue(A,"spotShadowMap",Un.state.spotShadowMap,N),Un.state.pointShadowMap.length>0&&Et.setValue(A,"pointShadowMap",Un.state.pointShadowMap,N)),F.isSkinnedMesh){Et.setOptional(A,F,"bindMatrix"),Et.setOptional(A,F,"bindMatrixInverse");let Zt=F.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Et.setValue(A,"boneTexture",Zt.boneTexture,N))}F.isBatchedMesh&&(Et.setOptional(A,F,"batchingTexture"),Et.setValue(A,"batchingTexture",F._matricesTexture,N),Et.setOptional(A,F,"batchingIdTexture"),Et.setValue(A,"batchingIdTexture",F._indirectTexture,N),Et.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(A,"batchingColorTexture",F._colorsTexture,N));let Dr=z.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&fe.update(F,z,ui),(go||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,Et.setValue(A,"receiveShadow",F.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(tn.envMapIntensity.value=P.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=i2()),go&&(Et.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&dw(tn,ps),le&&k.fog===!0&&Ie.refreshFogUniforms(tn,le),Ie.refreshMaterialUniforms(tn,k,qe,he,T.state.transmissionRenderTarget[_.id]),Fa.upload(A,Y_(Ce),tn,N)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Fa.upload(A,Y_(Ce),tn,N),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(A,"center",F.center),Et.setValue(A,"modelViewMatrix",F.modelViewMatrix),Et.setValue(A,"normalMatrix",F.normalMatrix),Et.setValue(A,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Zt=k.uniformsGroups;for(let Tr=0,ms=Zt.length;Tr<ms;Tr++){let J_=Zt[Tr];ge.update(J_,ui),ge.bind(J_,ui)}}return ui}function dw(_,P){_.ambientLightColor.needsUpdate=P,_.lightProbe.needsUpdate=P,_.directionalLights.needsUpdate=P,_.directionalLightShadows.needsUpdate=P,_.pointLights.needsUpdate=P,_.pointLightShadows.needsUpdate=P,_.spotLights.needsUpdate=P,_.spotLightShadows.needsUpdate=P,_.rectAreaLights.needsUpdate=P,_.hemisphereLights.needsUpdate=P}function fw(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(_,P,z){let k=v.get(_);k.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),v.get(_.texture).__webglTexture=P,v.get(_.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,P){let z=v.get(_);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0};let hw=A.createFramebuffer();this.setRenderTarget=function(_,P=0,z=0){V=_,w=P,U=z;let k=null,F=!1,le=!1;if(_){let ue=v.get(_);if(ue.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(A.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(_.viewport),O.copy(_.scissor),Q=_.scissorTest,Ee.viewport(H),Ee.scissor(O),Ee.setScissorTest(Q),j=-1;return}else if(ue.__webglFramebuffer===void 0)N.setupRenderTarget(_);else if(ue.__hasExternalTextures)N.rebindTextures(_,v.get(_.texture).__webglTexture,v.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ge=_.depthTexture;if(ue.__boundDepthTexture!==Ge){if(Ge!==null&&v.has(Ge)&&(_.width!==Ge.image.width||_.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(_)}}let be=_.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);let De=v.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(De[P])?k=De[P][z]:k=De[P],F=!0):_.samples>0&&N.useMultisampledRTT(_)===!1?k=v.get(_).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[z]:k=De,H.copy(_.viewport),O.copy(_.scissor),Q=_.scissorTest}else H.copy(X).multiplyScalar(qe).floor(),O.copy(ne).multiplyScalar(qe).floor(),Q=se;if(z!==0&&(k=hw),Ee.bindFramebuffer(A.FRAMEBUFFER,k)&&Ee.drawBuffers(_,k),Ee.viewport(H),Ee.scissor(O),Ee.setScissorTest(Q),F){let ue=v.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+P,ue.__webglTexture,z)}else if(le){let ue=P;for(let be=0;be<_.textures.length;be++){let De=v.get(_.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,De.__webglTexture,z,ue)}}else if(_!==null&&z!==0){let ue=v.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,z)}j=-1},this.readRenderTargetPixels=function(_,P,z,k,F,le,me,ue=0){if(!(_&&_.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=v.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Ee.bindFramebuffer(A.FRAMEBUFFER,be);try{let De=_.textures[ue],Ge=De.format,Ke=De.type;if(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ue),!wt.textureFormatReadable(Ge)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ke)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=_.width-k&&z>=0&&z<=_.height-F&&A.readPixels(P,z,k,F,oe.convert(Ge),oe.convert(Ke),le)}finally{let De=V!==null?v.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(_,P,z,k,F,le,me,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=v.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be)if(P>=0&&P<=_.width-k&&z>=0&&z<=_.height-F){Ee.bindFramebuffer(A.FRAMEBUFFER,be);let De=_.textures[ue],Ge=De.format,Ke=De.type;if(_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ue),!wt.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ae),A.bufferData(A.PIXEL_PACK_BUFFER,le.byteLength,A.STREAM_READ),A.readPixels(P,z,k,F,oe.convert(Ge),oe.convert(Ke),0);let xt=V!==null?v.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,xt);let Ut=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await aC(A,Ut,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ae),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,le),A.deleteBuffer(Ae),A.deleteSync(Ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,P=null,z=0){let k=Math.pow(2,-z),F=Math.floor(_.image.width*k),le=Math.floor(_.image.height*k),me=P!==null?P.x:0,ue=P!==null?P.y:0;N.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,me,ue,F,le),Ee.unbindTexture()};let pw=A.createFramebuffer(),mw=A.createFramebuffer();this.copyTextureToTexture=function(_,P,z=null,k=null,F=0,le=0){let me,ue,be,De,Ge,Ke,Ae,xt,Ut,Pt=_.isCompressedTexture?_.mipmaps[le]:_.image;if(z!==null)me=z.max.x-z.min.x,ue=z.max.y-z.min.y,be=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Ge=z.min.y,Ke=z.isBox3?z.min.z:0;else{let tn=Math.pow(2,-F);me=Math.floor(Pt.width*tn),ue=Math.floor(Pt.height*tn),_.isDataArrayTexture?be=Pt.depth:_.isData3DTexture?be=Math.floor(Pt.depth*tn):be=1,De=0,Ge=0,Ke=0}k!==null?(Ae=k.x,xt=k.y,Ut=k.z):(Ae=0,xt=0,Ut=0);let Mt=oe.convert(P.format),fn=oe.convert(P.type),Ce;P.isData3DTexture?(N.setTexture3D(P,0),Ce=A.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(N.setTexture2DArray(P,0),Ce=A.TEXTURE_2D_ARRAY):(N.setTexture2D(P,0),Ce=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);let Un=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ui=A.getParameter(A.UNPACK_SKIP_PIXELS),Ri=A.getParameter(A.UNPACK_SKIP_ROWS),go=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Pt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,De),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ke);let ps=_.isDataArrayTexture||_.isData3DTexture,Et=P.isDataArrayTexture||P.isData3DTexture;if(_.isDepthTexture){let tn=v.get(_),Dr=v.get(P),Zt=v.get(tn.__renderTarget),Tr=v.get(Dr.__renderTarget);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let ms=0;ms<be;ms++)ps&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,v.get(_).__webglTexture,F,Ke+ms),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,v.get(P).__webglTexture,le,Ut+ms)),A.blitFramebuffer(De,Ge,me,ue,Ae,xt,me,ue,A.DEPTH_BUFFER_BIT,A.NEAREST);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(F!==0||_.isRenderTargetTexture||v.has(_)){let tn=v.get(_),Dr=v.get(P);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,pw),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,mw);for(let Zt=0;Zt<be;Zt++)ps?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tn.__webglTexture,F,Ke+Zt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,tn.__webglTexture,F),Et?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dr.__webglTexture,le,Ut+Zt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dr.__webglTexture,le),F!==0?A.blitFramebuffer(De,Ge,me,ue,Ae,xt,me,ue,A.COLOR_BUFFER_BIT,A.NEAREST):Et?A.copyTexSubImage3D(Ce,le,Ae,xt,Ut+Zt,De,Ge,me,ue):A.copyTexSubImage2D(Ce,le,Ae,xt,De,Ge,me,ue);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Et?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(Ce,le,Ae,xt,Ut,me,ue,be,Mt,fn,Pt.data):P.isCompressedArrayTexture?A.compressedTexSubImage3D(Ce,le,Ae,xt,Ut,me,ue,be,Mt,Pt.data):A.texSubImage3D(Ce,le,Ae,xt,Ut,me,ue,be,Mt,fn,Pt):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,le,Ae,xt,me,ue,Mt,fn,Pt.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,le,Ae,xt,Pt.width,Pt.height,Mt,Pt.data):A.texSubImage2D(A.TEXTURE_2D,le,Ae,xt,me,ue,Mt,fn,Pt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Un),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ui),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ri),A.pixelStorei(A.UNPACK_SKIP_IMAGES,go),le===0&&P.generateMipmaps&&A.generateMipmap(Ce),Ee.unbindTexture()},this.initRenderTarget=function(_){v.get(_).__webglFramebuffer===void 0&&N.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?N.setTextureCube(_,0):_.isData3DTexture?N.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?N.setTexture2DArray(_,0):N.setTexture2D(_,0),Ee.unbindTexture()},this.resetState=function(){w=0,U=0,V=null,Ee.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var o2=["canvasContainer"],pp=class n{canvasContainer;scene;camera;renderer;points;sphere;animationFrameId;ngOnInit(){}ngAfterViewInit(){this.initThree(),this.animate(),window.addEventListener("resize",this.onWindowResize.bind(this))}ngOnDestroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.points.geometry.dispose(),this.points.material.dispose(),this.sphere.geometry.dispose(),this.sphere.material.dispose(),this.renderer.dispose()}initThree(){let e=this.canvasContainer.nativeElement,t=e.clientWidth,i=e.clientHeight;this.scene=new fl,this.camera=new un(75,t/i,.1,1e3),this.camera.position.z=5,this.renderer=new dp({antialias:!0,alpha:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement);let r=new Fn,o=2e3,s=new Float32Array(o*3);for(let h=0;h<o*3;h++)s[h]=(Math.random()-.5)*15;r.setAttribute("position",new An(s,3));let a=new Ta({size:.015,color:"#6366f1",transparent:!0,opacity:.6,blending:Al});this.points=new vl(r,a),this.scene.add(this.points);let c=new Ml(1.5,64,64),l=new bl({color:16777215,emissive:6514417,emissiveIntensity:.2,shininess:100,transparent:!0,opacity:.2,flatShading:!1});this.sphere=new Ln(c,l),this.scene.add(this.sphere);let u=new Dl(16777215,.5);this.scene.add(u);let f=new Ia(11032055,2);f.position.set(2,3,4),this.scene.add(f);let d=new Ia(15485081,2);d.position.set(-2,-3,4),this.scene.add(d)}animate(){this.animationFrameId=requestAnimationFrame(this.animate.bind(this)),this.points.rotation.y+=.001,this.points.rotation.x+=5e-4;let e=Date.now()*.001;this.sphere.position.y=Math.sin(e*.5)*.2,this.sphere.rotation.y+=.002,this.sphere.rotation.z+=.001,this.renderer.render(this.scene,this.camera)}onWindowResize(){let e=this.canvasContainer.nativeElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-hero"]],viewQuery:function(t,i){if(t&1&&Ad(o2,7),t&2){let r;gv(r=vv())&&(i.canvasContainer=r.first)}},decls:25,vars:0,consts:[["canvasContainer",""],[1,"hero-section"],[1,"canvas-container"],[1,"container","hero-content"],[1,"content-wrapper"],[1,"hero-label","fade-in"],[1,"hero-title","fade-in"],[1,"text-gradient"],[1,"hero-description","fade-in"],[1,"hero-actions","fade-in"],[1,"btn-premium"],["width","20","height","20","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5 12H19M19 12L12 5M19 12L12 19","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"btn-premium","btn-outline"],[1,"scroll-indicator"],[1,"mouse"],[1,"wheel"]],template:function(t,i){t&1&&(Gn(0,"section",1),Go(1,"div",2,0),Gn(3,"div",3)(4,"div",4)(5,"span",5),Te(6,"Creative Developer & Designer"),Si(),Gn(7,"h1",6),Te(8," Building "),Gn(9,"span",7),Te(10,"3D Experiences"),Si(),Go(11,"br"),Te(12," For the Next-Gen Web. "),Si(),Gn(13,"p",8),Te(14," Crafting immersive digital journeys with high-performance code and stunning aesthetics. "),Si(),Gn(15,"div",9)(16,"button",10),Te(17," View Projects "),Zu(),Gn(18,"svg",11),Go(19,"path",12),Si()(),Ju(),Gn(20,"button",13),Te(21,"Let's Talk"),Si()()()(),Gn(22,"div",14)(23,"div",15),Go(24,"div",16),Si()()())},dependencies:[vn],styles:[".hero-section[_ngcontent-%COMP%]{height:100vh;width:100%;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:var(--bg-dark)}.canvas-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center}.content-wrapper[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.hero-label[_ngcontent-%COMP%]{display:inline-block;font-family:var(--font-heading);font-weight:500;font-size:.875rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent-primary);margin-bottom:1.5rem;opacity:0;animation:_ngcontent-%COMP%_slideDown .8s forwards}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.5rem,8vw,4.5rem);line-height:1.1;margin-bottom:2rem;font-weight:800;opacity:0;animation:_ngcontent-%COMP%_fadeInUp .8s .2s forwards}.hero-description[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.25rem);color:var(--text-secondary);max-width:600px;margin:0 auto 3rem;opacity:0;animation:_ngcontent-%COMP%_fadeInUp .8s .4s forwards}.hero-actions[_ngcontent-%COMP%]{display:flex;gap:1.5rem;justify-content:center;opacity:0;animation:_ngcontent-%COMP%_fadeInUp .8s .6s forwards}.scroll-indicator[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:50%;transform:translate(-50%);z-index:2}.mouse[_ngcontent-%COMP%]{width:25px;height:40px;border:2px solid var(--text-secondary);border-radius:15px;position:relative}.wheel[_ngcontent-%COMP%]{width:4px;height:8px;background:var(--accent-primary);border-radius:2px;position:absolute;top:8px;left:50%;transform:translate(-50%);animation:_ngcontent-%COMP%_scrollMouse 2s infinite}@keyframes _ngcontent-%COMP%_slideDown{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_scrollMouse{0%{transform:translate(-50%);opacity:0}20%{opacity:1}80%{transform:translate(-50%,20px);opacity:0}to{opacity:0}}@media(max-width:768px){.hero-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:1rem}}"]})};function s2(n,e){if(n&1&&(pe(0,"div",15)(1,"h3",16),Te(2),Se(),pe(3,"p",17),Te(4),Se()()),n&2){let t=e.$implicit;_t(2),ri(t.value),_t(2),ri(t.label)}}var mp=class n{stats=[{label:"Years Experience",value:"5+"},{label:"Projects Completed",value:"40+"},{label:"Satisfied Clients",value:"30+"},{label:"Awards Won",value:"12"}];ngOnInit(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-about"]],decls:25,vars:1,consts:[["id","about",1,"about-section"],[1,"container"],[1,"about-grid"],[1,"about-visual"],[1,"visual-container","glass-card"],[1,"glass-overlay"],[1,"about-decoration"],[1,"about-image-placeholder"],[1,"text-gradient"],[1,"about-content"],[1,"section-title"],[1,"about-text"],[1,"stats-grid"],["class","stat-item",4,"ngFor","ngForOf"],[1,"btn-premium"],[1,"stat-item"],[1,"stat-value","text-gradient"],[1,"stat-label"]],template:function(t,i){t&1&&(pe(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),Dn(5,"div",5)(6,"div",6),pe(7,"div",7)(8,"span",8),Te(9,"3D ARTIST & "),Dn(10,"br"),Te(11," DEVELOPER"),Se()()()(),pe(12,"div",9)(13,"h2",10),Te(14,"Passion for "),pe(15,"span",8),Te(16,"Innovation"),Se()(),pe(17,"p",11),Te(18," I'm a creative developer specialized in building immersive 3D experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality. "),Se(),pe(19,"p",11),Te(20," My goal is to create digital products that don't just work, but inspire. I believe the future of the web is interactive, three-dimensional, and deeply engaging. "),Se(),pe(21,"div",12),bi(22,s2,5,2,"div",13),Se(),pe(23,"button",14),Te(24,"Download CV"),Se()()()()()),t&2&&(_t(22),ln("ngForOf",i.stats))},dependencies:[vn,Bi],styles:[".about-section[_ngcontent-%COMP%]{padding:120px 0;background:var(--bg-dark)}.about-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center}.about-visual[_ngcontent-%COMP%]{position:relative}.visual-container[_ngcontent-%COMP%]{aspect-ratio:1;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center}.about-decoration[_ngcontent-%COMP%]{position:absolute;top:-20px;right:-20px;width:100px;height:100px;background:var(--accent-primary);filter:blur(60px);opacity:.5;z-index:1}.about-image-placeholder[_ngcontent-%COMP%]{z-index:2;font-family:var(--font-heading);font-weight:900;font-size:2.5rem;line-height:1}.about-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.section-title[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:.5rem}.about-text[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--text-secondary)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;margin:2rem 0}.stat-item[_ngcontent-%COMP%]{padding:24px;background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:16px;transition:var(--transition-smooth)}.stat-item[_ngcontent-%COMP%]:hover{border-color:var(--accent-primary);transform:translateY(-5px)}.stat-value[_ngcontent-%COMP%]{font-size:2rem;font-weight:800;margin-bottom:.25rem}.stat-label[_ngcontent-%COMP%]{font-size:.875rem;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.1em}@media(max-width:992px){.about-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:60px}.about-visual[_ngcontent-%COMP%]{order:2;max-width:500px;margin:0 auto}}@media(max-width:576px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};function a2(n,e){if(n&1&&(pe(0,"div",12)(1,"div",13)(2,"span",14),Te(3),Se(),pe(4,"span",15),Te(5),Se()(),pe(6,"div",16),Dn(7,"div",17),Se()()),n&2){let t=e.$implicit;_t(3),ri(t.name),_t(2),Gr("",t.level,"%"),_t(2),Id("width",t.level,"%")}}function c2(n,e){if(n&1&&(pe(0,"div",8)(1,"h3",9),Te(2),Se(),pe(3,"div",10),bi(4,a2,8,4,"div",11),Se()()),n&2){let t=e.$implicit;_t(2),ri(t.name),_t(2),ln("ngForOf",t.skills)}}var gp=class n{skillCategories=[{name:"Frontend",skills:[{name:"Angular",level:90},{name:"TypeScript",level:85},{name:"Three.js",level:80},{name:"GSAP",level:75}]},{name:"Design",skills:[{name:"Figma",level:85},{name:"Adobe XD",level:70},{name:"Blender",level:65},{name:"Spline",level:75}]},{name:"Backend & Tools",skills:[{name:"Node.js",level:70},{name:"Firebase",level:75},{name:"Git",level:90},{name:"Agile",level:80}]}];ngOnInit(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-skills"]],decls:11,vars:1,consts:[["id","skills",1,"skills-section"],[1,"container"],[1,"section-header"],[1,"section-title","text-center"],[1,"text-gradient"],[1,"section-subtitle","text-center"],[1,"skills-grid"],["class","skill-category glass-card",4,"ngFor","ngForOf"],[1,"skill-category","glass-card"],[1,"category-name"],[1,"skill-list"],["class","skill-item",4,"ngFor","ngForOf"],[1,"skill-item"],[1,"skill-info"],[1,"skill-name"],[1,"skill-percentage"],[1,"skill-bar-container"],[1,"skill-bar"]],template:function(t,i){t&1&&(pe(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),Te(4,"My "),pe(5,"span",4),Te(6,"Expertise"),Se()(),pe(7,"p",5),Te(8,"A comprehensive look at the tools and technologies I use to bring ideas to life."),Se()(),pe(9,"div",6),bi(10,c2,5,2,"div",7),Se()()()),t&2&&(_t(10),ln("ngForOf",i.skillCategories))},dependencies:[vn,Bi],styles:[".skills-section[_ngcontent-%COMP%]{padding:120px 0;background:var(--bg-dark)}.section-header[_ngcontent-%COMP%]{margin-bottom:80px}.section-title[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:1rem}.section-subtitle[_ngcontent-%COMP%]{color:var(--text-secondary);max-width:600px;margin:0 auto}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:40px}.skill-category[_ngcontent-%COMP%]{padding:40px}.category-name[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:2rem;color:var(--accent-primary)}.skill-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.skill-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:.5rem}.skill-name[_ngcontent-%COMP%]{font-weight:500;color:var(--text-primary)}.skill-percentage[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:.875rem}.skill-bar-container[_ngcontent-%COMP%]{width:100%;height:6px;background:#ffffff0d;border-radius:3px;overflow:hidden}.skill-bar[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent-primary),var(--accent-secondary));border-radius:3px;transition:width 1.5s ease-in-out}@media(max-width:1200px){.skills-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.skills-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.section-title[_ngcontent-%COMP%]{font-size:2.5rem}}"]})};var $C=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(Ct(Xs),Ct(ki))};static \u0275dir=cn({type:n})}return n})(),l2=(()=>{class n extends $C{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Vr(n)))(r||n)}})();static \u0275dir=cn({type:n,features:[Ui]})}return n})(),qC=new Re("");var u2={provide:qC,useExisting:or(()=>Cp),multi:!0};function d2(){let n=oi()?oi().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var f2=new Re(""),Cp=(()=>{class n extends $C{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!d2())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(Ct(Xs),Ct(ki),Ct(f2,8))};static \u0275dir=cn({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Bt("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Js([u2]),Ui]})}return n})();function h2(n){return n==null||p2(n)===0}function p2(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var F_=new Re(""),XC=new Re("");function m2(n){return h2(n.value)?{required:!0}:null}function UC(n){return null}function YC(n){return n!=null}function ZC(n){return Ho(n)?Ot(n):n}function JC(n){let e={};return n.forEach(t=>{e=t!=null?ae(ae({},e),t):e}),Object.keys(e).length===0?null:e}function KC(n,e){return e.map(t=>t(n))}function g2(n){return!n.validate}function QC(n){return n.map(e=>g2(e)?e:t=>e.validate(t))}function v2(n){if(!n)return null;let e=n.filter(YC);return e.length==0?null:function(t){return JC(KC(t,e))}}function L_(n){return n!=null?v2(QC(n)):null}function y2(n){if(!n)return null;let e=n.filter(YC);return e.length==0?null:function(t){let i=KC(t,e).map(ZC);return Yp(i).pipe(It(JC))}}function k_(n){return n!=null?y2(QC(n)):null}function BC(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function _2(n){return n._rawValidators}function x2(n){return n._rawAsyncValidators}function P_(n){return n?Array.isArray(n)?n:[n]:[]}function yp(n,e){return Array.isArray(n)?n.includes(e):n===e}function VC(n,e){let t=P_(e);return P_(n).forEach(r=>{yp(t,r)||t.push(r)}),t}function HC(n,e){return P_(e).filter(t=>!yp(n,t))}var _p=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=L_(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=k_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Ba=class extends _p{name;get formDirective(){return null}get path(){return null}},Wl=class extends _p{_parent=null;name=null;valueAccessor=null},xp=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ew=(()=>{class n extends xp{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(Ct(Wl,2))};static \u0275dir=cn({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Cc("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ui]})}return n})(),tw=(()=>{class n extends xp{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(Ct(Ba,10))};static \u0275dir=cn({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Cc("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ui]})}return n})();var Vl="VALID",vp="INVALID",ka="PENDING",Hl="DISABLED",po=class{},Mp=class extends po{value;source;constructor(e,t){super(),this.value=e,this.source=t}},Gl=class extends po{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},jl=class extends po{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Ua=class extends po{status;source;constructor(e,t){super(),this.status=e,this.source=t}},O_=class extends po{source;constructor(e){super(),this.source=e}},bp=class extends po{source;constructor(e){super(),this.source=e}};function nw(n){return(wp(n)?n.validators:n)||null}function M2(n){return Array.isArray(n)?L_(n):n||null}function iw(n,e){return(wp(e)?e.asyncValidators:n)||null}function b2(n){return Array.isArray(n)?k_(n):n||null}function wp(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function S2(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new we(1e3,"");if(!i[t])throw new we(1001,"")}function E2(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new we(1002,"")})}var Sp=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return gn(this.statusReactive)}set status(e){gn(()=>this.statusReactive.set(e))}_status=jr(()=>this.statusReactive());statusReactive=_i(void 0);get valid(){return this.status===Vl}get invalid(){return this.status===vp}get pending(){return this.status==ka}get disabled(){return this.status===Hl}get enabled(){return this.status!==Hl}errors;get pristine(){return gn(this.pristineReactive)}set pristine(e){gn(()=>this.pristineReactive.set(e))}_pristine=jr(()=>this.pristineReactive());pristineReactive=_i(!0);get dirty(){return!this.pristine}get touched(){return gn(this.touchedReactive)}set touched(e){gn(()=>this.touchedReactive.set(e))}_touched=jr(()=>this.touchedReactive());touchedReactive=_i(!1);get untouched(){return!this.touched}_events=new jt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(VC(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(VC(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(HC(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(HC(e,this._rawAsyncValidators))}hasValidator(e){return yp(this._rawValidators,e)}hasAsyncValidator(e){return yp(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(et(ae({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new jl(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new jl(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(et(ae({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new Gl(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new Gl(!0,i))}markAsPending(e={}){this.status=ka;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Ua(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(et(ae({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Hl,this.errors=null,this._forEachChild(r=>{r.disable(et(ae({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Mp(this.value,i)),this._events.next(new Ua(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(et(ae({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Vl,this._forEachChild(i=>{i.enable(et(ae({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(et(ae({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vl||this.status===ka)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Mp(this.value,t)),this._events.next(new Ua(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(et(ae({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Hl:Vl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=ka,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=ZC(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new Ua(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new zt,this.statusChanges=new zt}_calculateStatus(){return this._allControlsDisabled()?Hl:this.errors?vp:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ka)?ka:this._anyControlsHaveStatus(vp)?vp:Vl}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new Gl(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new jl(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){wp(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=M2(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=b2(this._rawAsyncValidators)}},Ep=class extends Sp{constructor(e,t,i){super(nw(t),iw(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){E2(this,!0,e),Object.keys(e).forEach(i=>{S2(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,et(ae({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new bp(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var U_=new Re("",{factory:()=>B_}),B_="always";function C2(n,e){return[...e.path,n]}function rw(n,e,t=B_){ow(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),D2(n,e),A2(n,e),T2(n,e),w2(n,e)}function zC(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function w2(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ow(n,e){let t=_2(n);e.validator!==null?n.setValidators(BC(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=x2(n);e.asyncValidator!==null?n.setAsyncValidators(BC(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();zC(e._rawValidators,r),zC(e._rawAsyncValidators,r)}function D2(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&sw(n,e)})}function T2(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&sw(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function sw(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function A2(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function I2(n,e){n==null,ow(n,e)}function R2(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function N2(n){return Object.getPrototypeOf(n.constructor)===l2}function P2(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function O2(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Cp?t=o:N2(o)?i=o:r=o}),r||i||t||null}var F2={provide:Ba,useExisting:or(()=>V_)},zl=Promise.resolve(),V_=(()=>{class n extends Ba{callSetDisabledState;get submitted(){return gn(this.submittedReactive)}_submitted=jr(()=>this.submittedReactive());submittedReactive=_i(!1);_directives=new Set;form;ngSubmit=new zt;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new Ep({},L_(t),k_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){zl.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),rw(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){zl.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){zl.then(()=>{let i=this._findContainer(t.path),r=new Ep({});I2(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){zl.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){zl.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),P2(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new O_(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(Ct(F_,10),Ct(XC,10),Ct(U_,8))};static \u0275dir=cn({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&Bt("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Js([F2]),Ui]})}return n})();function GC(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function jC(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var L2=class extends Sp{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(nw(t),iw(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),wp(t)&&(t.nonNullable||t.initialValueIsDefault)&&(jC(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new bp(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){GC(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){GC(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){jC(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var k2={provide:Wl,useExisting:or(()=>H_)},WC=Promise.resolve(),H_=(()=>{class n extends Wl{_changeDetectorRef;callSetDisabledState;control=new L2;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new zt;constructor(t,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=O2(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),R2(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){rw(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){WC.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Pd(i);WC.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?C2(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(Ct(Ba,9),Ct(F_,10),Ct(XC,10),Ct(qC,10),Ct(Tc,8),Ct(U_,8))};static \u0275dir=cn({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Js([k2]),Ui,Vo]})}return n})();var aw=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=cn({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var U2=(()=>{class n{_validator=UC;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):UC,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=cn({type:n,features:[Vo]})}return n})();var B2={provide:F_,useExisting:or(()=>z_),multi:!0};var z_=(()=>{class n extends U2{required;inputName="required";normalizeInput=Pd;createValidator=t=>m2;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Vr(n)))(r||n)}})();static \u0275dir=cn({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&Td("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Js([B2]),Ui]})}return n})();var V2=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=zr({type:n});static \u0275inj=sr({})}return n})();var cw=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:U_,useValue:t.callSetDisabledState??B_}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=zr({type:n});static \u0275inj=sr({imports:[V2]})}return n})();function z2(n,e){if(n&1&&(pe(0,"div",23)(1,"div",24)(2,"span",25),Te(3),Se()(),pe(4,"div",26)(5,"h4",27),Te(6),Se(),pe(7,"p",28),Te(8),Se()()()),n&2){let t=e.$implicit;_t(3),ri(t.icon),_t(3),ri(t.label),_t(2),ri(t.value)}}var Dp=class n{contactInfo=[{icon:"email",label:"Email",value:"hello@portfolio.com"},{icon:"phone",label:"Phone",value:"+1 (234) 567-890"},{icon:"location",label:"Location",value:"San Francisco, CA"}];formData={name:"",email:"",subject:"",message:""};ngOnInit(){}onSubmit(){console.log("Form submitted:",this.formData),alert("Thank you for your message! (Demo Only)"),this.formData={name:"",email:"",subject:"",message:""}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-contact"]],decls:34,vars:6,consts:[["contactForm","ngForm"],["id","contact",1,"contact-section"],[1,"container"],[1,"section-header"],[1,"section-title","text-center"],[1,"text-gradient"],[1,"section-subtitle","text-center"],[1,"contact-grid"],[1,"contact-info"],["class","info-card glass-card",4,"ngFor","ngForOf"],[1,"contact-form-container","glass-card"],[3,"ngSubmit"],[1,"form-row"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","","placeholder","Your Name",3,"ngModelChange","ngModel"],["for","email"],["type","email","id","email","name","email","required","","placeholder","Your Email",3,"ngModelChange","ngModel"],["for","subject"],["type","text","id","subject","name","subject","required","","placeholder","Project Subject",3,"ngModelChange","ngModel"],["for","message"],["id","message","name","message","rows","5","required","","placeholder","Your Message",3,"ngModelChange","ngModel"],["type","submit",1,"btn-premium",3,"disabled"],[1,"info-card","glass-card"],[1,"info-icon"],[1,"material-icons"],[1,"info-text"],[1,"info-label"],[1,"info-value"]],template:function(t,i){if(t&1){let r=mv();pe(0,"section",1)(1,"div",2)(2,"div",3)(3,"h2",4),Te(4,"Get in "),pe(5,"span",5),Te(6,"Touch"),Se()(),pe(7,"p",6),Te(8,"Have a project in mind or just want to say hi? I'd love to hear from you!"),Se()(),pe(9,"div",7)(10,"div",8),bi(11,z2,9,3,"div",9),Se(),pe(12,"div",10)(13,"form",11,0),Bt("ngSubmit",function(){return i.onSubmit()}),pe(15,"div",12)(16,"div",13)(17,"label",14),Te(18,"Name"),Se(),pe(19,"input",15),Wo("ngModelChange",function(s){return No(r),Zs(i.formData.name,s)||(i.formData.name=s),Po(s)}),Se()(),pe(20,"div",13)(21,"label",16),Te(22,"Email"),Se(),pe(23,"input",17),Wo("ngModelChange",function(s){return No(r),Zs(i.formData.email,s)||(i.formData.email=s),Po(s)}),Se()()(),pe(24,"div",13)(25,"label",18),Te(26,"Subject"),Se(),pe(27,"input",19),Wo("ngModelChange",function(s){return No(r),Zs(i.formData.subject,s)||(i.formData.subject=s),Po(s)}),Se()(),pe(28,"div",13)(29,"label",20),Te(30,"Message"),Se(),pe(31,"textarea",21),Wo("ngModelChange",function(s){return No(r),Zs(i.formData.message,s)||(i.formData.message=s),Po(s)}),Se()(),pe(32,"button",22),Te(33," Send Message "),Se()()()()()()}if(t&2){let r=yv(14);_t(11),ln("ngForOf",i.contactInfo),_t(8),jo("ngModel",i.formData.name),_t(4),jo("ngModel",i.formData.email),_t(4),jo("ngModel",i.formData.subject),_t(4),jo("ngModel",i.formData.message),_t(),ln("disabled",!r.form.valid)}},dependencies:[vn,Bi,cw,aw,Cp,ew,tw,z_,H_,V_],styles:[".contact-section[_ngcontent-%COMP%]{padding:120px 0;background:var(--bg-dark)}.section-header[_ngcontent-%COMP%]{margin-bottom:80px}.section-title[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:1rem}.section-subtitle[_ngcontent-%COMP%]{color:var(--text-secondary);max-width:600px;margin:0 auto}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:60px}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.info-card[_ngcontent-%COMP%]{padding:30px;display:flex;align-items:center;gap:20px;transition:var(--transition-smooth)}.info-card[_ngcontent-%COMP%]:hover{border-color:var(--accent-primary);transform:translate(10px)}.info-icon[_ngcontent-%COMP%]{width:54px;height:54px;background:var(--glass-bg);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--accent-primary)}.info-label[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;margin-bottom:.25rem}.info-value[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:.95rem}.contact-form-container[_ngcontent-%COMP%]{padding:50px}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem}.form-group[_ngcontent-%COMP%]{margin-bottom:2rem;display:flex;flex-direction:column;gap:.75rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:var(--font-heading);font-weight:500;font-size:.9rem;color:var(--text-secondary)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:12px;padding:14px 18px;color:var(--text-primary);font-family:var(--font-main);transition:var(--transition-smooth)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--accent-primary);background:#ffffff0d}.form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;justify-content:center}@media(max-width:1100px){.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:768px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};function G2(n,e){if(n&1&&(pe(0,"a",13),Te(1),Se()),n&2){let t=e.$implicit;ln("href",t.url,Wg),_t(),Gr(" ",t.name," ")}}var Tp=class n{currentYear=new Date().getFullYear();socialLinks=[{name:"GitHub",url:"https://github.com"},{name:"LinkedIn",url:"https://linkedin.com"},{name:"Twitter",url:"https://twitter.com"},{name:"Dribbble",url:"https://dribbble.com"}];ngOnInit(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-footer"]],decls:19,vars:2,consts:[[1,"footer"],[1,"container"],[1,"footer-top"],[1,"footer-brand"],[1,"footer-logo"],[1,"text-gradient"],[1,"footer-tagline"],[1,"footer-socials"],["target","_blank","class","social-link",3,"href",4,"ngFor","ngForOf"],[1,"footer-bottom"],[1,"copyright"],[1,"footer-meta"],["href","#"],["target","_blank",1,"social-link",3,"href"]],template:function(t,i){t&1&&(pe(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4)(5,"span",5),Te(6,"Portfolio."),Se()(),pe(7,"p",6),Te(8,"Building the future of the web, one pixel at a time."),Se()(),pe(9,"div",7),bi(10,G2,2,2,"a",8),Se()(),pe(11,"div",9)(12,"p",10),Te(13),Se(),pe(14,"div",11)(15,"a",12),Te(16,"Privacy Policy"),Se(),pe(17,"a",12),Te(18,"Terms of Service"),Se()()()()()),t&2&&(_t(10),ln("ngForOf",i.socialLinks),_t(3),Gr("\xA9 ",i.currentYear," Personal Portfolio. All rights reserved."))},dependencies:[vn,Bi],styles:[".footer[_ngcontent-%COMP%]{padding:80px 0 40px;background:var(--bg-dark);border-top:1px solid var(--glass-border)}.footer-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:60px}.footer-brand[_ngcontent-%COMP%]{max-width:300px}.footer-logo[_ngcontent-%COMP%]{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;margin-bottom:1rem}.footer-tagline[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:.95rem}.footer-socials[_ngcontent-%COMP%]{display:flex;gap:2rem}.social-link[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:none;font-family:var(--font-heading);font-weight:500;transition:var(--transition-smooth)}.social-link[_ngcontent-%COMP%]:hover{color:var(--accent-primary)}.footer-bottom[_ngcontent-%COMP%]{padding-top:40px;border-top:1px solid var(--glass-border);display:flex;justify-content:space-between;align-items:center;color:var(--text-secondary);font-size:.875rem}.footer-meta[_ngcontent-%COMP%]{display:flex;gap:2rem}.footer-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:none;transition:var(--transition-smooth)}.footer-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-primary)}@media(max-width:768px){.footer-top[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:40px}.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;text-align:center;gap:20px}}"]})};var Ap=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=an({type:n,selectors:[["app-root"]],decls:8,vars:0,consts:[["id","hero"],["id","about"],["id","skills"],["id","contact"]],template:function(t,i){t&1&&(Dn(0,"app-navbar"),pe(1,"main"),Dn(2,"app-hero",0)(3,"app-about",1)(4,"app-skills",2)(5,"app-contact",3),Se(),Dn(6,"app-footer")(7,"router-outlet"))},dependencies:[vn,Jc,gf,pp,mp,gp,Dp,Tp],encapsulation:2})};Bv(Ap,rE).catch(n=>console.error(n));
