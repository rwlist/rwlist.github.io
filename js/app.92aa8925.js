(function(t){function e(e){for(var c,u,s=e[0],a=e[1],l=e[2],i=0,j=[];i<s.length;i++)u=s[i],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&j.push(o[u][0]),o[u]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);b&&b(e);while(j.length)j.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},o={app:0},r=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var b=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f87":function(t,e,n){},2217:function(t,e,n){"use strict";n("9ec2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("830f"),o=n("5c40"),r=n("9ff4"),u={id:"app"},s={id:"bubble-container"},a={class:"full-message"},l={class:"row-actions"},b={class:"buttons-row"},i=Object(o["h"])("br",null,null,-1),j={id:"control-menu"},d=Object(o["h"])("h1",null,"Control Menu",-1),O=Object(o["h"])("br",null,null,-1),f=Object(o["h"])("br",null,null,-1),p=Object(o["g"])(" JSON content: "),h=Object(o["h"])("br",null,null,-1);function v(t,e){var n=Object(o["r"])("Bubble"),v=Object(o["r"])("InlineButton");return Object(o["n"])(),Object(o["d"])("div",u,[Object(o["h"])("div",s,[(Object(o["n"])(!0),Object(o["d"])(o["b"],null,Object(o["q"])(t.state.messages,(function(e,c){return Object(o["n"])(),Object(o["d"])("div",{key:c},[Object(o["h"])("div",a,[Object(o["h"])(n,{msg:e.text},null,8,["msg"]),(Object(o["n"])(!0),Object(o["d"])(o["b"],null,Object(o["q"])(e.rows,(function(n,c){return Object(o["n"])(),Object(o["d"])("div",{key:c,class:"row-container"},[Object(o["h"])("div",l,[Object(o["h"])("button",{onClick:function(e){return t.addButtonToRow(n)}},"Add button",8,["onClick"]),Object(o["h"])("button",{onClick:function(n){return t.removeRow(e.rows,c)}},"Remove row",8,["onClick"])]),Object(o["h"])("div",b,[(Object(o["n"])(!0),Object(o["d"])(o["b"],null,Object(o["q"])(n,(function(e,n){return Object(o["n"])(),Object(o["d"])(v,{key:n,msg:e.text,onClick:function(n){return t.jumpState(e.state)},class:"button"},null,8,["msg","onClick"])})),128))])])})),128))]),i,Object(o["h"])("button",{onClick:function(n){return t.addRow(e.rows)}},"Add row",8,["onClick"])])})),128))]),Object(o["h"])("div",j,[d,Object(o["h"])("span",null,"Current state: "+Object(r["F"])(t.selected),1),Object(o["x"])(Object(o["h"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.currentState=e})},[(Object(o["n"])(!0),Object(o["d"])(o["b"],null,Object(o["q"])(t.states,(function(t,e){return Object(o["n"])(),Object(o["d"])("option",{key:e,value:e},Object(r["F"])(e),9,["value"])})),128))],512),[[c["b"],t.currentState]]),O,f,p,h,Object(o["x"])(Object(o["h"])("textarea",{class:"json-project","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.jsonProject=e})},null,512),[[c["c"],t.jsonProject]])])])}n("a434");var m=Object(o["y"])("data-v-366ba344");Object(o["p"])("data-v-366ba344");var g={class:"bubble"},w=Object(o["h"])("h4",{class:"text bubble-from"},"Sample bot",-1);Object(o["o"])();var y=m((function(t,e){return Object(o["n"])(),Object(o["d"])("div",g,[w,Object(o["h"])("div",{class:"text",innerHTML:t.msg},null,8,["innerHTML"])])})),x={name:"Bubble",props:{msg:String}};n("b1e4");x.render=y,x.__scopeId="data-v-366ba344";var S=x,k=Object(o["y"])("data-v-33a2a180");Object(o["p"])("data-v-33a2a180");var C={class:"button button-style"},P={class:"vertical-center"};Object(o["o"])();var _=k((function(t,e){return Object(o["n"])(),Object(o["d"])("div",C,[Object(o["h"])("p",P,Object(r["F"])(t.msg),1)])})),B={name:"InlineButton",props:{msg:String}};n("2217");B.render=_,B.__scopeId="data-v-33a2a180";var T=B,M={data:function(){return{states:{state1:{messages:[{text:"This is state 1.\n\nEnjoy.",rows:[[{text:"🤝 Jump to state 2",state:"state2"},{text:"Useless button"}]]}]},state2:{messages:[{text:"This is another state.",rows:[[{text:"Go back",state:"state1"},{text:"Yet another button"}]]}]}},currentState:"state1"}},name:"App",components:{Bubble:S,InlineButton:T},computed:{state:function(){return this.states[this.currentState]},jsonProject:{get:function(){return JSON.stringify(this.states)},set:function(t){try{var e=JSON.parse(t);console.log(e),this.states=e}catch(n){console.log("invalid json")}}}},methods:{jumpState:function(t){t in this.states?this.currentState=t:console.log("state ",t," is not found")},addButtonToRow:function(t){t.push({text:"New button"})},addRow:function(t){t.push([])},removeRow:function(t,e){t.splice(e,1)}}};n("64be");M.render=v;var R=M;Object(c["a"])(R).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},"9ec2":function(t,e,n){},b1e4:function(t,e,n){"use strict";n("1f87")},c894:function(t,e,n){}});
//# sourceMappingURL=app.92aa8925.js.map