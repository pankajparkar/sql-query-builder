"use strict";(self.webpackChunksql_query_builder=self.webpackChunksql_query_builder||[]).push([[319],{3482:(H,b,g)=>{g.d(b,{_:()=>y});var o=g(5963),M=g(3900),O=g(4004),w=g(9646),S=g(7262),p=(()=>{return(s=p||(p={})).Category="category",s.Customer="customer",s.Employee="employee",s.Order="order",s.Product="product",s.Region="region",s.Shipper="shipper",s.Supplier="supplier",p;var s})(),m=g(4650),f=g(529);let E=(()=>{class s{constructor(){}getJSON(a,d="{}"){return JSON.parse(localStorage.getItem(a)??d)}get(a){const d=localStorage.getItem(a);try{return JSON.parse(d)}catch{return d}}set(a,d){let c=d;try{c=JSON.stringify(d)}finally{localStorage.setItem(a,c)}}getByProperty(a,d,c="{}"){return this.getJSON(a,c)[d]}setByProperty(a,d,c,h="{}"){const _=this.getJSON(a,h);_[d]=c??"",this.set(a,_)}remove(a){try{localStorage.removeItem(a)}catch{console.error("Error removing data.")}}removeProperty(a,d){const c=this.getJSON(a);delete c[d],this.set(a,c)}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const P=/Select \* FROM ([a-zA-Z]+)/gi,G="queries";let y=(()=>{class s{constructor(a,d){this.http=a,this.storate=d,this.transforData=(c,h)=>{let _=[];const[C]=c??[];return C&&(_=(0,S.w)(C)),{columns:_,data:c??[],query:h,queryName:h}}}getQueryList(){return this.storate.get(G)}getQuery(a){return this.storate.get(G).find(c=>c.id===a)}saveQuery(a){const d=this.storate.get(G)??[],c=d.find(h=>h.id===a.id);return c?Object.assign(c,a):d.push(a),this.storate.set(G,d),{update:!!c,added:!c}}getData(a){const d=a.replace(/\s\s+/g," ").matchAll(P);let c=[],h=d.next();for(;!h.done;)c=c.concat(h.value.filter(v=>!v.toLowerCase().includes("from"))),h=d.next();const[_]=c,C=Object.values(p).find(v=>v===_?.toLowerCase());return C?(0,o.H)(2e3).pipe((0,M.w)(()=>this.http.get(`assets/json/${C}.json`)),(0,O.U)(v=>this.transforData(v,a))):(0,w.of)({columns:[],data:[],query:a,queryName:a})}}return s.\u0275fac=function(a){return new(a||s)(m.LFG(f.eN),m.LFG(E))},s.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7262:(H,b,g)=>{g.d(b,{X:()=>w,w:()=>S});const o=[].constructor,M={}.constructor;function O(p){return[o,M].includes(p?.constructor)}function w(p){return p.map(m=>({headerName:m.displayName,field:m.colName,sortable:!0,filter:!0,flex:1,valueFormatter:m.isJson?f=>f.value&&JSON.stringify(f.value):void 0}))}function S(p){return Object.keys(p).map(m=>({colName:m,displayName:m,filtering:!1,hidden:!1,sorting:!1,isJson:O(p[m])}))}},5017:(H,b,g)=>{g.d(b,{A8:()=>P,Ov:()=>f});var o=g(7579),M=g(4650);class f{constructor(s=!1,u,a=!0,d){this._multiple=s,this._emitChanges=a,this.compareWith=d,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new o.x,u&&u.length&&(s?u.forEach(c=>this._markSelected(c)):this._markSelected(u[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...s){this._verifyValueAssignment(s),s.forEach(a=>this._markSelected(a));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}deselect(...s){this._verifyValueAssignment(s),s.forEach(a=>this._unmarkSelected(a));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}setSelection(...s){this._verifyValueAssignment(s);const u=this.selected,a=new Set(s);s.forEach(c=>this._markSelected(c)),u.filter(c=>!a.has(c)).forEach(c=>this._unmarkSelected(c));const d=this._hasQueuedChanges();return this._emitChangeEvent(),d}toggle(s){return this.isSelected(s)?this.deselect(s):this.select(s)}clear(s=!0){this._unmarkAll();const u=this._hasQueuedChanges();return s&&this._emitChangeEvent(),u}isSelected(s){if(this.compareWith){for(const u of this._selection)if(this.compareWith(u,s))return!0;return!1}return this._selection.has(s)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(s){this._multiple&&this.selected&&this._selected.sort(s)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(s){this.isSelected(s)||(this._multiple||this._unmarkAll(),this.isSelected(s)||this._selection.add(s),this._emitChanges&&this._selectedToEmit.push(s))}_unmarkSelected(s){this.isSelected(s)&&(this._selection.delete(s),this._emitChanges&&this._deselectedToEmit.push(s))}_unmarkAll(){this.isEmpty()||this._selection.forEach(s=>this._unmarkSelected(s))}_verifyValueAssignment(s){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}let P=(()=>{class y{constructor(){this._listeners=[]}notify(u,a){for(let d of this._listeners)d(u,a)}listen(u){return this._listeners.push(u),()=>{this._listeners=this._listeners.filter(a=>u!==a)}}ngOnDestroy(){this._listeners=[]}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275prov=M.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},4006:(H,b,g)=>{g.d(b,{F:()=>K,Fj:()=>u,JJ:()=>je,JU:()=>f,NI:()=>fe,On:()=>pe,Q7:()=>X,UX:()=>mn,a5:()=>F,kI:()=>v,oH:()=>ge,sg:()=>Z,u5:()=>pn});var o=g(4650),M=g(6895),O=g(2076),w=g(4128),S=g(4004);let p=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends p{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const f=new o.OlP("NgValueAccessor"),G={provide:f,useExisting:(0,o.Gpc)(()=>u),multi:!0},s=new o.OlP("CompositionEventMode");let u=(()=>{class n extends p{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function y(){const n=(0,M.q)()?(0,M.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(s,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},features:[o._Bn([G]),o.qOj]}),n})();function d(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function c(n){return null!=n&&"number"==typeof n.length}const h=new o.OlP("NgValidators"),_=new o.OlP("NgAsyncValidators"),C=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class v{static min(t){return function D(n){return t=>{if(d(t.value)||d(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function N(n){return t=>{if(d(t.value)||d(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return Ae(t)}static requiredTrue(t){return function Me(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function De(n){return d(n.value)||C.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ee(n){return t=>d(t.value)||!c(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function be(n){return t=>c(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Oe(n){if(!n)return j;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(d(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Be(t)}static composeAsync(t){return xe(t)}}function Ae(n){return d(n.value)?{required:!0}:null}function j(n){return null}function Fe(n){return null!=n}function we(n){return(0,o.QGY)(n)?(0,O.D)(n):n}function Se(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ne(n,t){return t.map(e=>e(n))}function Ge(n){return n.map(t=>function At(n){return!n.validate}(t)?t:e=>t.validate(e))}function Be(n){if(!n)return null;const t=n.filter(Fe);return 0==t.length?null:function(e){return Se(Ne(e,t))}}function te(n){return null!=n?Be(Ge(n)):null}function xe(n){if(!n)return null;const t=n.filter(Fe);return 0==t.length?null:function(e){const r=Ne(e,t).map(we);return(0,w.D)(r).pipe((0,S.U)(Se))}}function ne(n){return null!=n?xe(Ge(n)):null}function Pe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ie(n){return n._rawValidators}function ke(n){return n._rawAsyncValidators}function re(n){return n?Array.isArray(n)?n:[n]:[]}function L(n,t){return Array.isArray(n)?n.includes(t):n===t}function Te(n,t){const e=re(t);return re(n).forEach(i=>{L(e,i)||e.push(i)}),e}function Re(n,t){return re(t).filter(e=>!L(n,e))}class Ue{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class A extends Ue{get formDirective(){return null}get path(){return null}}class F extends Ue{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let je=(()=>{class n extends class He{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(F,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const k="VALID",q="INVALID",I="PENDING",T="DISABLED";function ae(n){return(Y(n)?n.validators:n)||null}function We(n){return Array.isArray(n)?te(n):n||null}function le(n,t){return(Y(t)?t.asyncValidators:n)||null}function qe(n){return Array.isArray(n)?ne(n):n||null}function Y(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class ze{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=We(this._rawValidators),this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===k}get invalid(){return this.status===q}get pending(){return this.status==I}get disabled(){return this.status===T}get enabled(){return this.status!==T}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=We(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=qe(t)}addValidators(t){this.setValidators(Te(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Re(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Re(t,this._rawAsyncValidators))}hasValidator(t){return L(this._rawValidators,t)}hasAsyncValidator(t){return L(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=I,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=T,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=k,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===I)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=I,this._hasOwnPendingAsyncValidator=!0;const e=we(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?T:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(I)?I:this._anyControlsHaveStatus(q)?q:k}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Y(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class ue extends ze{constructor(t,e,r){super(ae(e),le(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function $e(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function Ye(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,l)=>{r=e(r,i,l)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}function R(n,t){ce(n,t),t.valueAccessor.writeValue(n.value),n.disabled&&t.valueAccessor.setDisabledState?.(!0),function Gt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Je(n,t)})}(n,t),function xt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Bt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Je(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Nt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function z(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),Q(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function J(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ce(n,t){const e=Ie(n);null!==t.validator?n.setValidators(Pe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=ke(n);null!==t.asyncValidator?n.setAsyncValidators(Pe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();J(t._rawValidators,i),J(t._rawAsyncValidators,i)}function Q(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ie(n);if(Array.isArray(i)&&i.length>0){const l=i.filter(V=>V!==t.validator);l.length!==i.length&&(e=!0,n.setValidators(l))}}if(null!==t.asyncValidator){const i=ke(n);if(Array.isArray(i)&&i.length>0){const l=i.filter(V=>V!==t.asyncValidator);l.length!==i.length&&(e=!0,n.setAsyncValidators(l))}}}const r=()=>{};return J(t._rawValidators,r),J(t._rawAsyncValidators,r),e}function Je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Qe(n,t){ce(n,t)}function de(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function Ze(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function he(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(l=>{l.constructor===u?e=l:function kt(n){return Object.getPrototypeOf(n.constructor)===m}(l)?r=l:i=l}),i||r||e||null}const Rt={provide:A,useExisting:(0,o.Gpc)(()=>K)},U=(()=>Promise.resolve(null))();let K=(()=>{class n extends A{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new ue({},te(e),ne(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){U.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),R(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){U.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){U.then(()=>{const r=this._findContainer(e.path),i=new ue({});Qe(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){U.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){U.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,Ze(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(h,10),o.Y36(_,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Rt]),o.qOj]}),n})();function Xe(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function et(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const fe=class extends ze{constructor(t=null,e,r){super(ae(e),le(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=et(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Xe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Xe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){et(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},jt={provide:F,useExisting:(0,o.Gpc)(()=>pe)},rt=(()=>Promise.resolve(null))();let pe=(()=>{class n extends F{constructor(e,r,i,l,V){super(),this._changeDetectorRef=V,this.control=new fe,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=he(0,l)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),de(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){R(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){rt.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);rt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function $(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(A,9),o.Y36(h,10),o.Y36(_,10),o.Y36(f,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([jt]),o.qOj,o.TTD]}),n})(),it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const me=new o.OlP("NgModelWithFormControlWarning"),zt={provide:F,useExisting:(0,o.Gpc)(()=>ge)};let ge=(()=>{class n extends F{constructor(e,r,i,l){super(),this._ngModelWarningConfig=l,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=he(0,i)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&z(r,this,!1),R(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}de(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&z(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(h,10),o.Y36(_,10),o.Y36(f,10),o.Y36(me,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([zt]),o.qOj,o.TTD]}),n})();const Jt={provide:A,useExisting:(0,o.Gpc)(()=>Z)};let Z=(()=>{class n extends A{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return R(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){z(e.control||null,e,!1),function Tt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,Ze(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(z(r||null,e),(n=>n instanceof fe)(i)&&(R(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);Qe(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Pt(n,t){return Q(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ce(this.form,this),this._oldForm&&Q(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(h,10),o.Y36(_,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Jt]),o.qOj,o.TTD]}),n})(),B=(()=>{class n{constructor(){this._validator=j}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):j,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const ln={provide:h,useExisting:(0,o.Gpc)(()=>X),multi:!0};let X=(()=>{class n extends B{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=e=>Ae}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([ln]),o.qOj]}),n})(),Vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[it]}),n})(),pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Vt]}),n})(),mn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:me,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Vt]}),n})()},4850:(H,b,g)=>{g.d(b,{d:()=>w,t:()=>S});var o=g(4650),M=g(1281),O=g(3238);let w=(()=>{class p{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(f){this._vertical=(0,M.Ig)(f)}get inset(){return this._inset}set inset(f){this._inset=(0,M.Ig)(f)}}return p.\u0275fac=function(f){return new(f||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(f,E){2&f&&(o.uIk("aria-orientation",E.vertical?"vertical":"horizontal"),o.ekj("mat-divider-vertical",E.vertical)("mat-divider-horizontal",!E.vertical)("mat-divider-inset",E.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(f,E){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),p})(),S=(()=>{class p{}return p.\u0275fac=function(f){return new(f||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[O.BQ,O.BQ]}),p})()}}]);