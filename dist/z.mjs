import*as e from"zod";import{ZodIssueCode as t,defaultErrorMap as r,setErrorMap as a,z as n,addIssueToContext as i,ZodType as s,ZodParsedType as d,INVALID as o,ParseStatus as c}from"zod";export*from"zod";function u(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(e)}function m(e){return t=>{if(!function(e){var t;return"custom"===e.code&&(null==(t=e.params)?void 0:t.isNestJsZod)}(t))return{matched:!1};const r=e(t.params);return r.matched?r:{matched:!1}}}function l(e,r){return a=>{if(a.code!==t.too_small&&a.code!==t.too_big)return{matched:!1};if(a.type!==e)return{matched:!1};const n=r(a);return n.matched?n:{matched:!1}}}const p=m((e=>{if("invalid_date_string"===e.code){return{matched:!0,message:"Invalid string, expected it to be a valid date"}}if("invalid_date_string_format"===e.code){return{matched:!0,message:`Invalid date, expected it to match ${{date:'YYYY-MM-DD (RFC3339 "full-date")',"date-time":'YYYY-MM-DDTHH:mm:ssZ (RFC3339 "date-time")'}[e.expected]}`}}if("invalid_date_string_direction"===e.code){return{matched:!0,message:`Invalid date, expected it to be the ${e.expected}`}}if("invalid_date_string_day"===e.code){return{matched:!0,message:`Invalid date, expected it to be a ${{weekDay:"week day",weekend:"weekend"}[e.expected]}`}}return{matched:!1}})),f=l("date_string_year",(e=>{if(e.code===t.too_small){return{matched:!0,message:`Year must be greater than ${e.inclusive?"or equal to ":""}${e.minimum}`}}if(e.code===t.too_big){return{matched:!0,message:`Year must be less than ${e.inclusive?"or equal to ":""}${e.maximum}`}}return{matched:!1}})),g=m((e=>{if("invalid_password_no_digit"===e.code){return{matched:!0,message:"Password must contain at least one digit"}}if("invalid_password_no_lowercase"===e.code){return{matched:!0,message:"Password must contain at least one lowercase letter"}}if("invalid_password_no_uppercase"===e.code){return{matched:!0,message:"Password must contain at least one uppercase letter"}}if("invalid_password_no_special"===e.code){return{matched:!0,message:"Password must contain at least one special symbol"}}return{matched:!1}})),h=l("password",(e=>{if(e.code===t.too_small){return{matched:!0,message:`Password length must be greater than ${e.inclusive?"or equal to ":""}${e.minimum}`}}if(e.code===t.too_big){return{matched:!0,message:`Password length must be less than ${e.inclusive?"or equal to ":""}${e.maximum}`}}return{matched:!1}})),_=(y=[p,f,g,h],e=>{for(const t of y){const r=t(e);if(r.matched)return r}return{matched:!1}});var y;const v=(e,t)=>{const a=_(e);return a.matched?{message:a.message}:r(e,t)};function k(e){a(e)}function w(e){return e}k(v);const b=n.union([n.string(),n.number(),n.boolean()]),x=(e="Expected value to be a JSON-serializable")=>{const t=n.lazy((()=>n.union([b,n.array(t),n.record(t)],{invalid_type_error:e})));return t};function O(e,t){i(e,t)}function P(e){return"string"==typeof e?{message:e}:e}function D(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:a,description:n}=e;if(t&&(r||a))throw new Error('Can\'t use "invalid" or "required" in conjunction with custom error map.');if(t)return{errorMap:t,description:n};return{errorMap:(t,r)=>"invalid_type"!==t.code?{message:r.defaultError}:void 0===r.data&&a?{message:a}:e.invalid_type_error?{message:e.invalid_type_error}:{message:r.defaultError},description:n}}function Y(e,t){return e.find((e=>e.kind===t))}var j=(e=>(e.ZodDateString="ZodDateString",e.ZodPassword="ZodPassword",e))(j||{}),C=Object.defineProperty,$=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&L(e,r,t[r]);if(E)for(var r of E(t))M.call(t,r)&&L(e,r,t[r]);return e};const I={date:/^\d{4}-\d{2}-\d{2}$/,"date-time":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(|\.\d{3})(Z|[+-]\d{2}:\d{2})$/},z=class extends s{_parse(e){const r=this._getType(e),a=this._getOrReturnCtx(e);if(r!==d.string)return O(a,{code:t.invalid_type,expected:d.string,received:a.parsedType}),o;const n=new Date(e.data);if(Number.isNaN(n.getTime()))return O(a,{code:t.custom,message:"Invalid date string",params:{isNestJsZod:!0,code:"invalid_date_string"}}),o;const i=new c;for(const r of this._def.checks)if("format"===r.kind){if(r.regex.test(e.data))continue;O(a,{code:t.custom,message:r.message,params:{isNestJsZod:!0,code:"invalid_date_string_format",expected:r.value}}),i.dirty()}else if("direction"===r.kind){if({past:n<new Date,future:n>new Date}[r.direction])continue;O(a,{code:t.custom,message:r.message,params:{isNestJsZod:!0,code:"invalid_date_string_direction",expected:r.direction}}),i.dirty()}else if("day-type"===r.kind){const e=n.getDay();if({weekDay:0!==e&&6!==e,weekend:0===e||6===e}[r.type])continue;O(a,{code:t.custom,message:r.message,params:{isNestJsZod:!0,code:"invalid_date_string_day",expected:r.type}}),i.dirty()}else if("minYear"===r.kind){if(n.getFullYear()>=r.value)continue;O(a,{code:t.too_small,type:"date_string_year",minimum:r.value,inclusive:!0,message:r.message}),i.dirty()}else if("maxYear"===r.kind){if(n.getFullYear()<=r.value)continue;O(a,{code:t.too_big,type:"date_string_year",maximum:r.value,inclusive:!0,message:r.message}),i.dirty()}return{status:i.value,value:e.data}}_replaceCheck(e){return new z((t=T({},this._def),r={checks:this._def.checks.filter((t=>t.kind!==e.kind)).concat(e)},$(t,Z(r))));var t,r}format(e,t){return this._replaceCheck(T({kind:"format",value:e,regex:I[e]},P(t)))}past(e){return this._replaceCheck(T({kind:"direction",direction:"past"},P(e)))}future(e){return this._replaceCheck(T({kind:"direction",direction:"future"},P(e)))}weekDay(e){return this._replaceCheck(T({kind:"day-type",type:"weekDay"},P(e)))}weekend(e){return this._replaceCheck(T({kind:"day-type",type:"weekend"},P(e)))}minYear(e,t){return this._replaceCheck(T({kind:"minYear",value:e},P(t)))}maxYear(e,t){return this._replaceCheck(T({kind:"maxYear",value:e},P(t)))}cast(){return this.transform((e=>new Date(e)))}get format_(){return Y(this._def.checks,"format")}get isPast(){var e;return"past"===(null==(e=Y(this._def.checks,"direction"))?void 0:e.direction)}get isFuture(){var e;return"future"===(null==(e=Y(this._def.checks,"direction"))?void 0:e.direction)}get isWeekDay(){var e;return"weekDay"===(null==(e=Y(this._def.checks,"day-type"))?void 0:e.type)}get isWeekend(){var e;return"weekend"===(null==(e=Y(this._def.checks,"day-type"))?void 0:e.type)}get minYear_(){return Y(this._def.checks,"minYear")}get maxYear_(){return Y(this._def.checks,"maxYear")}};let S=z;S.create=e=>new z(T({checks:[{kind:"format",value:"date-time",regex:I["date-time"]}],typeName:j.ZodDateString},D(e)));const F=S.create;var J=Object.defineProperty,q=Object.defineProperties,R=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&B(e,r,t[r]);if(A)for(var r of A(t))W.call(t,r)&&B(e,r,t[r]);return e};const G=["digit","lowercase","uppercase","special"],Q={digit:/\d/,lowercase:/[a-z]/,uppercase:/[A-Z]/,special:/[!?@#$%^&*{};.,:%№"|\\/()-_+=<>`~[\]'"]/};function U(e){return G.includes(e.kind)}const V=class extends s{_parse(e){const r=this._getType(e),a=this._getOrReturnCtx(e);if(r!==d.string)return O(a,{code:t.invalid_type,expected:d.string,received:a.parsedType}),o;const n=new c;for(const r of this._def.checks)if(U(r)){if(Q[r.kind].test(e.data))continue;O(a,{code:t.custom,message:r.message,params:{isNestJsZod:!0,code:`invalid_password_no_${r.kind}`}}),n.dirty()}else if("minLength"===r.kind){if(e.data.length>=r.value)continue;O(a,{code:t.too_small,type:"password",minimum:r.value,inclusive:!0,message:r.message}),n.dirty()}else if("maxLength"===r.kind){if(e.data.length<=r.value)continue;O(a,{code:t.too_big,type:"password",maximum:r.value,inclusive:!0,message:r.message}),n.dirty()}return{status:n.value,value:e.data}}_replaceCheck(e){return new V((t=K({},this._def),r={checks:this._def.checks.filter((t=>t.kind!==e.kind)).concat(e)},q(t,R(r))));var t,r}buildFullRegExp(){const e=[];for(const t of this._def.checks){if(!U(t))continue;const r=Q[t.kind];e.push(`(?=.*${r.source})`)}if(0===e.length)return/^.*$/;const t=e.join("");return new RegExp(`^(?:${t}.*)$`)}atLeastOne(e,t){return this._replaceCheck(K({kind:e},P(t)))}min(e,t){return this._replaceCheck(K({kind:"minLength",value:e},P(t)))}max(e,t){return this._replaceCheck(K({kind:"maxLength",value:e},P(t)))}isAtLeastOne(e){return function(e,t){return Boolean(Y(e,t))}(this._def.checks,e)}get minLength(){return Y(this._def.checks,"minLength")}get maxLength(){return Y(this._def.checks,"maxLength")}};let X=V;X.create=e=>new V(K({checks:[],typeName:j.ZodPassword},D(e)));const ee=X.create;var te=u({__proto__:null,defaultErrorMap:v,setErrorMap:k,addIssueToContext:O,from:w,json:x,ZodDateString:S,dateString:F,ZodPassword:X,password:ee,ZodFirstPartyTypeKindExtended:j},[e]);export{S as ZodDateString,j as ZodFirstPartyTypeKindExtended,X as ZodPassword,O as addIssueToContext,F as dateString,v as defaultErrorMap,w as from,x as json,ee as password,k as setErrorMap,te as z};
