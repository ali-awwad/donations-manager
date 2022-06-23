"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[221],{8221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(3987),a=r(2596),s=r(8584),o=r(9680),i=r(1636),l=r(7294),c=r(5893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,s=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(){var e=(0,i.qt)().props,t=e.errors,r=e.item,d=e.can,p=f((0,l.useState)(),2),h=p[0],x=p[1],g=f((0,l.useState)([{id:"admin",name:"Admin"},{id:"member",name:"Member"}]),2),b=g[0],y=(g[1],f((0,l.useState)({name:"",email:"",password:"",password_confirmation:""}),2)),w=y[0],v=y[1];function j(e){var t=e.target.id,r=e.target.value;v((function(e){return m(m({},e),{},u({},t,r))}))}return(0,l.useEffect)((function(){r.data&&(v({name:r.data.name,email:r.data.email}),x("admin"==r.data.user_type?{id:"admin",name:"Admin"}:{id:"member",name:"Member"}))}),[]),(0,l.useEffect)((function(){h&&v(m(m({},w),{},{user_type:h.id}))}),[h]),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.Inertia.patch("/users/".concat(r.data.id),w)},className:"space-y-8 divide-y divide-gray-200",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:r.data.name}),(0,c.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Update user data"})]}),(0,c.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:w.name,onChange:j,type:"text",name:"name",id:"name",autoComplete:"name",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.name&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.name})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:w.email,onChange:j,type:"email",name:"email",id:"email",autoComplete:"email",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.email&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.email})]}),(0,c.jsxs)("div",{className:"sm:col-span-2",children:[(0,c.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:w.password,onChange:j,type:"password",name:"password",id:"password",autoComplete:"password",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.password&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.password})]}),(0,c.jsxs)("div",{className:"sm:col-span-2",children:[(0,c.jsx)("label",{htmlFor:"password_confirmation",className:"block text-sm font-medium text-gray-700",children:"Confirmation"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:w.password_confirmation,onChange:j,type:"password",name:"password_confirmation",id:"password_confirmation",autoComplete:"password_confirmation",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.password_confirmation&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.password_confirmation})]}),d.isAdmin&&(0,c.jsxs)("div",{className:"sm:col-span-2",children:[(0,c.jsx)("label",{htmlFor:"user_type",className:"block text-sm font-medium text-gray-700",children:"User Type"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)(n.Z,{items:b,selectedItem:h,setSelectedItem:x})}),t.user_type&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.user_type})]})]})]}),(0,c.jsx)("div",{className:"pt-5",children:(0,c.jsxs)("div",{className:"flex justify-end",children:[(0,c.jsx)(a.Z,{href:route("users.index")}),(0,c.jsx)(s.Z,{})]})})]})}},3987:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294),a=r(1013),s=r(8057),o=r(6727),i=r(5893);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,s=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function m(e){var t=e.items,r=e.label,c=e.selectedItem,m=e.setSelectedItem,u=l((0,n.useState)(""),2),f=u[0],p=u[1],h=""===f?t:t.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return(0,i.jsxs)(o.hQ,{as:"div",value:c,onChange:m,children:[r&&(0,i.jsx)(o.hQ.Label,{className:"block text-sm font-medium text-gray-700",children:r}),(0,i.jsxs)("div",{className:"relative mt-1",children:[(0,i.jsx)(o.hQ.Input,{autoComplete:"off",className:"w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",onChange:function(e){return p(e.target.value)},displayValue:function(e){return e.name}}),(0,i.jsx)(o.hQ.Button,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,i.jsx)(a.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),h.length>0&&(0,i.jsx)(o.hQ.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:h.map((function(e){return(0,i.jsx)(o.hQ.Option,{value:e,className:function(e){return d("relative cursor-default select-none py-2 pl-8 pr-4",e.active?"bg-indigo-600 text-white":"text-gray-900")},children:function(t){var r=t.active,n=t.selected;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:d("block truncate",n&&"font-semibold"),children:e.name}),n&&(0,i.jsx)("span",{className:d("absolute inset-y-0 left-0 flex items-center pl-1.5",r?"text-white":"text-indigo-600"),children:(0,i.jsx)(s.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e.id)}))})]})]})}},2596:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1636),a=(r(7294),r(5893));function s(e){var t=e.href;return(0,a.jsx)(n.rU,{href:t,className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cancel"})}},8584:(e,t,r)=>{r.d(t,{Z:()=>a});r(7294);var n=r(5893);function a(){return(0,n.jsx)("button",{type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})}},8057:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}))},1013:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}))}))}}]);