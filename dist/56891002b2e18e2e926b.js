(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,r,e){"use strict";e.d(r,"a",function(){return o});var o=function(t){return"https://webdev-api.loftschool.com/"+t}},409:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"works-form"},[e("div",{staticClass:"works-form__work"},[e("div",{staticClass:"work__thumb"},[e("div",{staticClass:"work__img"},[e("img",{staticClass:"work__img--photo",attrs:{src:t.photoUrl}})]),e("work-tags-list",{attrs:{tags:t.work.techs}})],1),e("div",{staticClass:"work__desc"},[e("div",{staticClass:"work__title"},[t._v(t._s(t.work.title))]),e("div",{staticClass:"work__info"},[t._v(t._s(t.work.description))]),e("a",{staticClass:"work__link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))])])]),e("div",{staticClass:"works-form__btns"},[e("button",{staticClass:"works-form__pencil",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.editUserWork(r)}}},[e("div",{staticClass:"works-form__pencil--text"},[t._v("Править")]),e("div",{staticClass:"works-form__pencil--icon"})]),e("button",{staticClass:"works-form__remove",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.removeUserWork(r)}}},[e("div",{staticClass:"works-form__remove--text"},[t._v("Удалить")]),e("div",{staticClass:"works-form__remove--icon"})])])])};o._withStripped=!0;var s=e(66),n=e(371);function i(t,r,e,o,s,n,i){try{var c=t[n](i),a=c.value}catch(t){return void e(t)}c.done?r(a):Promise.resolve(a).then(o,s)}function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var a={props:{work:{type:Object,default:function(){},required:!0}},components:{workTagsList:function(){return e.e(17).then(e.bind(null,414))}},data:function(){return{photoUrl:Object(n.a)(this.work.photo)}},watch:{work:function(){this.photoUrl=Object(n.a)(this.work.photo)}},methods:function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?Object(arguments[r]):{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(r){c(t,r,e[r])})}return t}({},Object(s.b)("works",["removeWork","getWorks"]),Object(s.d)("works",["SET_CURRENT_WORK"]),Object(s.b)("tooltips",["showTooltip"]),{editUserWork:function(){this.SET_CURRENT_WORK(this.work.id),this.$emit("editUserWork"),this.getWorks()},removeUserWork:function(){var t,r=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.removeWork(this.work.id);case 3:t.sent,this.showTooltip({type:"warning",text:"Работа удалена"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.showTooltip({type:"error",text:t.t0.message});case 10:case"end":return t.stop()}},t,this,[[0,7]])}),function(){var r=this,e=arguments;return new Promise(function(o,s){var n=t.apply(r,e);function c(t){i(n,o,s,c,a,"next",t)}function a(t){i(n,o,s,c,a,"throw",t)}c(void 0)})});return function(){return r.apply(this,arguments)}}()})},u=e(96),l=Object(u.a)(a,o,[],!1,null,null,null);l.options.__file="src/admin/components/workItem.vue";r.default=l.exports}}]);