(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),r=n(5),i=n(7),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(a.useState)(c.NONE),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),b=Object(r.a)(o,2),h=b[0],j=b[1],d=function(t,e){var n=e.sortType,s=e.isReversed,o=Object(i.a)(t);switch(n){case c.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return s&&o.reverse(),o}(l,{sortType:n,isReversed:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info ".concat(n!==c.ALPHABET&&"is-light"),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success ".concat(n!==c.LENGTH&&"is-light"),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button ".concat(!0===h?"is-warning":"is-light"),onClick:function(){return j(!h)},children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(!1),s(c.NONE)},children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8a57182.chunk.js.map