(this["webpackJsonpcontact-book-using-redux-react"]=this["webpackJsonpcontact-book-using-redux-react"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),r=n.n(a),s=n(7),l=n(2),o=n(4),i=n(8),u=n(6),d=n(1),j=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{addContact:function(t){e({type:"ADD_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.addContact,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],u=r[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(c.useState)(""),f=Object(i.a)(O,2),x=f[0],p=f[1],v=Object(l.e)();return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("h1",{className:"text-center text-dark py-3 display-2",children:"Add Post"}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-6 p-5 mx-auto shadow",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.filter((function(e){return e.email===h?e:null})),a=t.filter((function(e){return e.phone===x?e:null}));if(!h||!s||!x)return o.b.warning("Please fill in all fields!!");if(c.length>0)return o.b.error("This email already exists!!");if(a.length>0)return o.b.error("This phone number already exists!!");var r={id:t.length>0?t[t.length-1].id+1:0,email:h,name:s,phone:x};n(r),o.b.success("Contact added successfully!!"),v.push("/")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Full name",value:s,onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",value:h,onChange:function(e){return m(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"number",placeholder:"Phone",value:x,onChange:function(e){return p(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"btn btn-block btn-dark",type:"submit",value:"Add Student"})})]})})})]})})),b=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{updateContact:function(t){e({type:"UPDATE_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.updateContact,a=Object(l.f)().id,r=Object(l.e)(),s=t.find((function(e){return e.id===parseInt(a)}));Object(c.useEffect)((function(){h(s.name),x(s.email),g(s.phone)}),[s]);var u=Object(c.useState)(""),j=Object(i.a)(u,2),b=j[0],h=j[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),f=O[0],x=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),N=v[0],g=v[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex flex-column",children:[Object(d.jsx)("button",{className:"btn btn-dark ml-auto my-5",onClick:function(){return r.push("/")},children:"Go back"}),Object(d.jsx)("div",{className:"col-md-6 mx-auto shadow p-5",children:s?Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.filter((function(e){return e.email===f&&e.id!==s.id?e:null})),a=t.filter((function(e){return e.phone===N&&e.id!==s.id?e:null}));if(!f||!b||!N)return o.b.warning("Please fill in all fields!!");if(c.length>0)return o.b.error("This email already exists!!");if(a.length>0)return o.b.error("This phone number already exists!!");var l={id:s.id,email:f,name:b,phone:N};n(l),o.b.success("Contact updated successfully!!"),r.push("/")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:b,placeholder:"Name",onChange:function(e){return h(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:f,placeholder:"Email",onChange:function(e){return x(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:N,placeholder:"Phone",onChange:function(e){return g(e.target.value)}})}),Object(d.jsxs)("div",{className:"form-group d-flex align-items-center justify-content-between my-2",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Contact"}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return r.push("/")},children:"cancel"})]})]}):Object(d.jsx)("h1",{className:"text-center",children:"No Contact Found"})})]})})})),h=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{deleteContact:function(t){e({type:"DELETE_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex flex-column",children:[Object(d.jsx)(s.b,{to:"/add",className:"btn btn-outline-dark my-5 ml-auto ",children:"Add Contact"}),Object(d.jsx)("div",{className:"col-md-10 mx-auto my-4",children:Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{className:"table-header bg-dark text-white",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Id"}),Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col"})]})}),Object(d.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsxs)("td",{children:[Object(d.jsx)(s.b,{to:"/edit/".concat(e.id),className:"btn btn-sm btn-primary mr-1",children:"Edit"}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(e.id)},className:"btn btn-sm btn-danger",children:"Delete"})]})]},t)})):Object(d.jsx)("tr",{children:Object(d.jsx)("th",{children:"No contacts found"})})})]})})]})})})),m=function(){return Object(d.jsx)("div",{className:"col-md-12 bg-dark py-2",children:Object(d.jsx)("nav",{className:"navbar bg-dark navbar-dark",children:Object(d.jsx)(s.b,{to:"/",className:"navbar-brand ml-5",children:"React Redux Contact Book"})})})},O=(n(36),function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o.a,{}),Object(d.jsx)(m,{}),Object(d.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/add",component:function(){return Object(d.jsx)(j,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/edit/:id",component:function(){return Object(d.jsx)(b,{})}})]})}),f=(n(37),n(38),n(11)),x=n(25),p=[],v=n(24),N=Object(f.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return e=[].concat(Object(x.a)(e),[t.payload]);case"DELETE_CONTACT":var n=e.filter((function(e){return e.id===t.payload?null:e}));return e=n;case"UPDATE_CONTACT":var c=e.filter((function(e){return e.id===t.payload.id?Object.assign(e,t.payload):e}));return e=c;case"RESET_CONTACT":return e=[{name:null,email:null,phone:null}];default:return e}}),Object(v.composeWithDevTools)()),g=document.getElementById("root");r.a.render(Object(d.jsx)(u.a,{store:N,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(O,{})})}),g)}},[[39,1,2]]]);
//# sourceMappingURL=main.d32fa430.chunk.js.map