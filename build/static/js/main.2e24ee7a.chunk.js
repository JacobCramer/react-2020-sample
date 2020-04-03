(this["webpackJsonpreact-debt-calc"]=this["webpackJsonpreact-debt-calc"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=(n(17),n(3)),i=n(6);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createElement("g",null,r.a.createElement("g",{id:"close"},r.a.createElement("polygon",{points:"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3  214.2,178.5  "}))),d=r.a.createElement("g",null),f=r.a.createElement("g",null),p=r.a.createElement("g",null),E=r.a.createElement("g",null),h=r.a.createElement("g",null),g=r.a.createElement("g",null),v=r.a.createElement("g",null),b=r.a.createElement("g",null),y=r.a.createElement("g",null),w=r.a.createElement("g",null),O=r.a.createElement("g",null),N=r.a.createElement("g",null),R=r.a.createElement("g",null),x=r.a.createElement("g",null),P=r.a.createElement("g",null),I=function(e){var t=e.svgRef,n=e.title,a=m(e,["svgRef","title"]);return r.a.createElement("svg",u({id:"Capa_1",x:"0px",y:"0px",width:"357px",height:"357px",viewBox:"0 0 357 357",style:{enableBackground:"new 0 0 357 357"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,s,d,f,p,E,h,g,v,b,y,w,O,N,R,x,P)},j=r.a.forwardRef((function(e,t){return r.a.createElement(I,u({svgRef:t},e))}));n.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=r.a.createElement("g",null,r.a.createElement("g",{id:"swap-vert"},r.a.createElement("path",{d:"M331.5,357V178.5h-51V357H204l102,102l102-102H331.5z M153,0L51,102h76.5v178.5h51V102H255L153,0z"}))),A=r.a.createElement("g",null),D=r.a.createElement("g",null),_=r.a.createElement("g",null),M=r.a.createElement("g",null),H=r.a.createElement("g",null),C=r.a.createElement("g",null),L=r.a.createElement("g",null),z=r.a.createElement("g",null),B=r.a.createElement("g",null),F=r.a.createElement("g",null),W=r.a.createElement("g",null),G=r.a.createElement("g",null),V=r.a.createElement("g",null),Y=r.a.createElement("g",null),$=r.a.createElement("g",null),q=function(e){var t=e.svgRef,n=e.title,a=T(e,["svgRef","title"]);return r.a.createElement("svg",S({id:"Capa_1",x:"0px",y:"0px",width:"459px",height:"459px",viewBox:"0 0 459 459",style:{enableBackground:"new 0 0 459 459"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,k,A,D,_,M,H,C,L,z,B,F,W,G,V,Y,$)},J=r.a.forwardRef((function(e,t){return r.a.createElement(q,S({svgRef:t},e))})),K=(n.p,n(5)),Q=n(27);function U(){return{uid:Object(Q.a)(),owed:"",apr:"",monthly:""}}var X=Object(K.b)({name:"debts",initialState:[U()],reducers:{addDebt:function(e){e.push(U())},deleteDebt:function(e,t){e.splice(e.findIndex((function(e){return e.uid===t.payload.uid})),1)},changeDebt:function(e,t){e[e.findIndex((function(e){return e.uid===t.payload.uid}))][t.payload.key]=t.payload.value},moveDebt:function(e,t){e.splice(t.payload.destination,0,e.splice(t.payload.source,1)[0])}}}),Z=X.actions,ee=Z.addDebt,te=Z.deleteDebt,ne=Z.changeDebt,ae=Z.moveDebt,re=function(e){return e.debts},le=X.reducer;function oe(){var e=Object(c.d)(re),t=Object(c.c)(),n=e.map((function(e,n){var a=e.uid,l=e.owed,o=e.apr,c=e.monthly,u=function(e){return function(n){return t(ne({uid:a,key:e,value:n.target.value}))}};return r.a.createElement(i.b,{draggableId:a,index:n,key:a},(function(e){return r.a.createElement("div",Object.assign({className:"debt-grid-column",id:a,key:a,ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement("input",{type:"number",placeholder:"Owed",onChange:u("owed"),value:l}),r.a.createElement("input",{type:"number",placeholder:"APR",onChange:u("apr"),value:o}),r.a.createElement("input",{type:"number",placeholder:"Monthly",onChange:u("monthly"),value:c}),r.a.createElement("div",{className:"debt-actions"},r.a.createElement("div",Object.assign({className:"button"},e.dragHandleProps),r.a.createElement(J,null)),r.a.createElement("button",{className:"button delete-button",onClick:function(){return t(te({uid:a}))}},r.a.createElement(j,null))))}))})),a=e.reduce((function(e,t){return e+Number(t.owed)}),0);return r.a.createElement("div",null,r.a.createElement("div",{className:"debts-container"},r.a.createElement("div",{className:"debt-grid-column"},r.a.createElement("div",{className:"debt-grid-header"},"Owed"),r.a.createElement("div",{className:"debt-grid-header"},"APR"),r.a.createElement("div",{className:"debt-grid-header"},"Monthly"),r.a.createElement("div",{className:"debt-grid-header"})),r.a.createElement(i.a,{onDragEnd:function(e){e.destination&&e.destination.index!==e.source.index&&t(ae({source:e.source.index,destination:e.destination.index}))}},r.a.createElement(i.c,{droppableId:"list"},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),n,e.placeholder)}))),r.a.createElement("button",{className:"button add-button",onClick:function(){return t(ee())}},"Add More Debt")),r.a.createElement("p",{className:"total"},r.a.createElement("span",null,"Total owed:"),r.a.createElement("span",null,"$".concat(a.toFixed(2)))))}var ce=Object(K.b)({name:"payment",initialState:{amount:"",allocation:"PRIORITY_FIRST",prioritization:"HIGHEST_APR"},reducers:{changeAmount:function(e,t){e.amount=t.payload},changeAllocation:function(e,t){e.allocation=t.payload},changePrioritization:function(e,t){e.prioritization=t.payload}}}),ie=ce.actions,ue=ie.changeAmount,me=ie.changeAllocation,se=ie.changePrioritization,de=function(e){return e.payment},fe=ce.reducer;function pe(){var e=Object(c.d)(de),t=Object(c.c)();return r.a.createElement("div",null,r.a.createElement("div",{className:"surplus-settings ".concat("PRIORITY_FIRST"==e.allocation?"uses-priority":"")},r.a.createElement("div",{className:"allocation"},r.a.createElement("p",null,"Allocation"),r.a.createElement("select",{onChange:function(e){return t(me(e.target.value))},value:e.allocation},r.a.createElement("option",{value:"PRIORITY_FIRST"},"Priority first"),r.a.createElement("option",{value:"EVEN_SPLIT"},"Even split"),r.a.createElement("option",{value:"PROPORTIONAL_SPLIT"},"Proportional split"))),r.a.createElement("div",{className:"prioritization"},r.a.createElement("p",null,"Prioritization"),r.a.createElement("select",{onChange:function(e){return t(se(e.target.value))},value:e.prioritization},r.a.createElement("option",{value:"HIGHEST_APR"},"Highest APR"),r.a.createElement("option",{value:"LOWEST_OWED"},"Lowest owed"),r.a.createElement("option",{value:"AS_ENTERED"},"As listed")))),r.a.createElement("div",{className:"payment"},r.a.createElement("p",null,"Monthly Payments"),r.a.createElement("input",{type:"number",placeholder:"Enter Here",onChange:function(e){return t(ue(e.target.value))},value:e.amount})))}function Ee(e){return Math.round(100*e)/100}function he(e){return e.reduce((function(e,t){return e+Number(t.monthly)}),0)}function ge(e){return e.every((function(e){return e.owed>0}))?e:e.filter((function(e){return e.owed>0}))}function ve(e){var t=e.apr/12/100;e.owed=e.owed+e.owed*t,e.owed=Ee(e.owed)}function be(e,t,n){switch(n){case"EVEN_SPLIT":return function(e,t){var n=function(){var n=Ee(t/e.length);t=0,e.forEach((function(e){t+=Math.max(n-e.owed,0),e.owed=Math.max(e.owed-n,0)})),e=ge(e)};for(;t>0&&e.length;)n();return e}(e,t);case"PRIORITY_FIRST":return function(e,t){for(;t>0&&e.length;)e.forEach((function(e){var n=t;t=0,t+=Math.max(n-e.owed,0),e.owed=Math.max(e.owed-n,0)})),e=ge(e);return e}(e,t);case"PROPORTIONAL_SPLIT":return function(e,t){var n=function(){var n=t,a=t;t=0;var r=e.reduce((function(e,t){return e+t.owed}),0);e.forEach((function(e){var l=n*(e.owed/r);l=Ee(l),l=Math.min(l,a),a-=l,t+=Math.max(l-e.owed,0),e.owed=Math.max(e.owed-l,0)})),e=ge(e)};for(;t>0&&e.length;)n();return e}(e,t)}}function ye(e,t){if(""===t.amount)return"";var n=he(e);if(Number(t.amount)<n)return"Be sure to enter an amount at least as high as the total\n    minimum monthly payment of ".concat(n.toFixed(2),".");var a=function(e,t){var n=Number(t.amount),a=he(e);if(0===n)return 0;if(n<a)return 1/0;for(var r=e.map((function(e){return{owed:Number(e.owed),apr:Number(e.apr),monthly:Number(e.monthly)}})).filter((function(e){return e.owed>0})).sort(function(e){switch(e.prioritization){case"HIGHEST_APR":return function(e,t){return t.apr-e.apr};case"LOWEST_OWED":return function(e,t){return e.owed-t.owed};case"AS_ENTERED":default:return function(){return-1}}}(t)),l=0;r.length&&l<=1200;){l++,r.forEach(ve);var o=n-he(r);r.forEach((function(e){e.owed<e.monthly&&(o+=e.monthly-e.owed),e.owed=Math.max(e.owed-e.monthly,0)})),r=be(r=ge(r),o,t.allocation)}return l}(e,t);if(0===a)return"Be sure to enter amounts owed for your debts.";if(a>1200)return"By paying $".concat(t.amount," every month, it will take over\n    100 years to pay off all of your debts!");var r=[],l=Math.floor(a/12),o=a%12;return r.push("By paying $".concat(t.amount," every month, it will take\n    roughly ")),l>0&&r.push("".concat(l," year").concat(l>1?"s":""," ")),l>0&&o>0&&r.push("and "),o>0&&r.push("".concat(o," month").concat(o>1?"s":""," ")),r.push("to pay off all of your debts."),r.join("")}function we(){var e=Object(c.d)(re),t=Object(c.d)(de);return r.a.createElement("p",{className:"projection"},ye(e,t))}n(24);var Oe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"information-header"},"Heads up!"),r.a.createElement("p",{className:"information"},"The following is a quick sample of code that was quickly put together over\n        the course of about two days, as most of my larger projects are stuck behind\n        unspoken NDAs."),r.a.createElement("header",{className:"app-header"},"Debt Repayment Calculator"),r.a.createElement("p",{className:"instructions"},"Enter the amount owed, APR, and minimum monthly payment for each debt."),r.a.createElement(oe,null),r.a.createElement(pe,null),r.a.createElement(we,null),r.a.createElement("p",{className:"disclaimer"},"Disclaimer: Every loan is different. While this tool provides a\n          reasonable estimation, it can not account for all fees, charges,\n          policies, and other possibilities. For a full debt repayment\n          analysis, consult a financial planner."),r.a.createElement("p",{className:"credit"},"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/google",title:"Google"},"Google")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com")))},Ne=Object(K.a)({reducer:{debts:le,payment:fe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:Ne},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2e24ee7a.chunk.js.map