(function(t){function a(a){for(var e,r,c=a[0],l=a[1],o=a[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),i=s.n(e);i.a},"3b05":function(t,a,s){"use strict";var e=s("997c"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Contacts",{attrs:{msg:"Anton"}}),s("OurOffices"),s("ContactUs")],1)},n=[],r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"contacts"},[s("div",{staticClass:"container cont"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12",staticStyle:{"margin-bottom":"1.5em"}},[s("h1",[t._v("Contacts")])]),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[s("h2",{staticStyle:{"margin-bottom":"1em"}},[s("span",[t._v("GMS")]),t._v(" Headquarters")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[s("p",{staticClass:"adress"},[t._v("Global Message Services Ukraine LLC")]),s("p",{staticClass:"adress"},[t._v("Bundesstrasse 5 | 3rd Floor")]),s("p",{staticClass:"adress"},[t._v("6300 Zug")]),s("p",{staticClass:"adress"},[t._v("Switzerland")]),s("br"),s("a",{staticClass:"phone",attrs:{href:"tel:+41415446200"}},[s("h3",[t._v("+41 41 544 62 00")])])]),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[s("p",{staticClass:"adress"},[t._v("Email")]),s("a",{staticClass:"link",attrs:{href:"mailto:info@gms-worldwide.com"}},[t._v("info@gms-worldwide.com")]),s("p",{staticClass:"adress"},[t._v("Send message")]),s("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Viber us")]),s("p",{staticClass:"adress"},[t._v("Send form")]),s("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Contact us")])])])]),s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[s("h2",{staticStyle:{"margin-bottom":"1em"}},[t._v("Technical support "),s("span",[t._v("24/7")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[s("p",{staticClass:"technical-support"},[t._v("GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.")]),s("br"),s("a",{staticClass:"phone",attrs:{href:"tel:+41415446206"}},[s("h3",[t._v("+41 41 544 62 06")])])])])])])])])}],l={name:"HelloWorld",props:{msg:String}},o=l,u=(s("d2d1"),s("2877")),d=Object(u["a"])(o,r,c,!1,null,"8073ae8c",null),v=d.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"our-offices"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6",staticStyle:{"margin-top":"100px"}},[s("h2",{staticStyle:{"margin-bottom":"1em"}},[t._v("Our Offices")]),s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item",on:{click:function(a){t.city="kiev",t.show=[!0,!1,!1,!1]}}},[s("a",{staticClass:"nav-link active",attrs:{"data-toggle":"pill",href:"#kyiv"}},[t._v("KYIV")])]),s("li",{staticClass:"nav-item",on:{click:function(a){t.city="new york",t.show=[!1,!0,!1,!1]}}},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#new"}},[t._v("NEW YORK")])]),s("li",{staticClass:"nav-item",on:{click:function(a){t.city="guangzhou",t.show=[!1,!1,!0,!1]}}},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#gua"}},[t._v("GUANGZHOU")])]),s("li",{staticClass:"nav-item",on:{click:function(a){t.city="barcelona",t.show=[!1,!1,!1,!0]}}},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#bar"}},[t._v("BARCELONA")])])]),t._m(0)]),"kiev"==t.city?s("div",{staticClass:"map",class:{kyiv:t.show[0]}},[s("div",{staticClass:"pin"})]):t._e(),"new york"==t.city?s("div",{staticClass:"map",class:{newyork:t.show[1]}},[s("div",{staticClass:"pin"})]):t._e(),"guangzhou"==t.city?s("div",{staticClass:"map",class:{guangzhou:t.show[2]}},[s("div",{staticClass:"pin"})]):t._e(),"barcelona"==t.city?s("div",{staticClass:"map",class:{barcelona:t.show[3]}},[s("div",{staticClass:"dark"}),s("iframe",{staticClass:"filter",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191555.2453954063!2d2.0086809815888564!3d41.39470509978519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2z0JHQsNGA0YHQtdC70L7QvdCwLCDQmNGB0L_QsNC90LjRjw!5e0!3m2!1sru!2sua!4v1571827816712!5m2!1sru!2sua",width:"100%",height:"500",frameborder:"0",allowfullscreen:""}})]):t._e()])])])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane active tab-active",attrs:{id:"kyiv"}},[s("h3",[t._v("Global Message Services Ukraine LLC")]),s("p",[t._v(" Kuiv, Stepan Bandera, 33 "),s("br"),t._v("02066 "),s("br"),t._v("Ukraine ")])]),s("div",{staticClass:"tab-pane fade tab-active",attrs:{id:"new"}},[s("h3",[t._v("New York")]),s("p",[t._v(" New York, Stepan Bandera, 33 "),s("br"),t._v("03456 "),s("br"),t._v("USA ")])]),s("div",{staticClass:"tab-pane fade tab-active",attrs:{id:"gua"}},[s("h3",[t._v("Guangzhou")]),s("p",[t._v(" Guangzhou, Stepan Bandera, 33 "),s("br"),t._v("07076 "),s("br"),t._v("Chine ")])]),s("div",{staticClass:"tab-pane fade tab-active",attrs:{id:"bar"}},[s("h3",[t._v("Barcelona")]),s("p",[t._v(" Barcelona, Stepan Bandera, 33 "),s("br"),t._v("06786 "),s("br"),t._v("Spanish ")])])])}],m={data:function(){return{cities:["KYIV","NEW YORK","GUANGZHOU","BARCELONA"],city:"kiev",show:[!0,!1,!1,!1]}},props:{msg:String}},h=m,b=(s("3b05"),Object(u["a"])(h,p,f,!1,null,"132b868a",null)),_=b.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",t._l(t.items,(function(a,e){return s("div",{key:e},[t._v(t._s(a))])})),0)},g=[],w={data:function(){return{items:["aaa","sss","ssss","dddd"]}},props:{msg:String}},y=w,k=Object(u["a"])(y,C,g,!1,null,"3d902739",null),O=k.exports,S={name:"app",components:{Contacts:v,OurOffices:_,ContactUs:O}},j=S,x=(s("034f"),Object(u["a"])(j,i,n,!1,null,null,null)),G=x.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(G)}}).$mount("#app")},"85ec":function(t,a,s){},"997c":function(t,a,s){},d2d1:function(t,a,s){"use strict";var e=s("e3a9"),i=s.n(e);i.a},e3a9:function(t,a,s){}});
//# sourceMappingURL=app.c98593a5.js.map