"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[848],{2848:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(2596),o=r(8584),a=r(9680),s=r(1636),i=r(7294),c=r(5893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(){var e=(0,s.qt)().props,t=e.errors,r=e.item,l=m((0,i.useState)({category_name:"",color:"",description:""}),2),f=l[0],g=l[1];function y(e){var t=e.target.id,r=e.target.value;g((function(e){return d(d({},e),{},u({},t,r))}))}return(0,i.useEffect)((function(){r.data&&g({category_name:r.data.name,color:r.data.color,description:r.data.description})}),[]),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.Inertia.patch("/categories/".concat(r.data.id),f)},className:"space-y-8 divide-y divide-gray-200",children:[(0,c.jsx)("div",{className:"space-y-8 divide-y divide-gray-200",children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:["Edit: ",r.data.name]}),(0,c.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"A category may represent a general idea of sectors to cover, such as education, healthcare, rations and food."})]}),(0,c.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[(0,c.jsxs)("div",{className:"sm:col-span-6",children:[(0,c.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"About"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("textarea",{defaultValue:f.description,onChange:y,id:"description",name:"description",rows:3,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"})}),(0,c.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Write a few sentences about this category."}),t.description&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.description})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"category_name",className:"block text-sm font-medium text-gray-700",children:"Category Name"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:f.category_name,onChange:y,type:"text",name:"category_name",id:"category_name",autoComplete:"category_name",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.category_name&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.category_name})]}),(0,c.jsxs)("div",{className:"sm:col-span-3",children:[(0,c.jsx)("label",{htmlFor:"color",className:"block text-sm font-medium text-gray-700",children:"Color"}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)("input",{defaultValue:f.color,onChange:y,type:"text",name:"color",id:"color",autoComplete:"color",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"})}),t.color&&(0,c.jsx)("p",{className:"mt-2 text-sm text-red-500",children:t.color})]})]})]})}),(0,c.jsx)("div",{className:"pt-5",children:(0,c.jsxs)("div",{className:"flex justify-end",children:[(0,c.jsx)(n.Z,{href:route("categories.index")}),(0,c.jsx)(o.Z,{})]})})]})}},2596:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(1636),o=(r(7294),r(5893));function a(e){var t=e.href;return(0,o.jsx)(n.rU,{href:t,className:"bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Cancel"})}},8584:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var n=r(5893);function o(){return(0,n.jsx)("button",{type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})}}}]);