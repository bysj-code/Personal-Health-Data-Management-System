(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"027e":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,u,a,o){try{var c=n[a](o),f=c.value}catch(i){return void t(i)}c.done?e(f):Promise.resolve(f).then(r,u)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function c(n){a(o,r,u,c,f,"next",n)}function f(n){a(o,r,u,c,f,"throw",n)}c(void 0)}))}}var c={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(e){var t=this;return o(r.default.mark((function u(){var a,o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.pid=e.pid,a=n.getStorageSync("nowTable"),r.next=4,t.$api.session(a);case 4:o=r.sent,t.user=o.data,"yonghu"==a&&(t.username=t.user.yonghuzhanghao);case 7:case"end":return r.stop()}}),u)})))()},methods:{onReplyTap:function(){var n=this;return o(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$api.save("forum",{parentid:n.pid,content:n.contont,username:n.username});case 2:n.$utils.msgBack("回复成功");case 3:case"end":return e.stop()}}),e)})))()}}};e.default=c}).call(this,t("543d")["default"])},1741:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"4b7f":function(n,e,t){"use strict";var r=t("757a"),u=t.n(r);u.a},"6fff":function(n,e,t){"use strict";t.r(e);var r=t("1741"),u=t("adb2");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("4b7f");var o,c=t("f0c5"),f=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=f.exports},"757a":function(n,e,t){},adb2:function(n,e,t){"use strict";t.r(e);var r=t("027e"),u=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},cf5c:function(n,e,t){"use strict";(function(n){t("369c");r(t("66fd"));var e=r(t("6fff"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["cf5c","common/runtime","common/vendor"]]]);