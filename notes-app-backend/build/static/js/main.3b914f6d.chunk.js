(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var o=e(2),c=e(15),r=e.n(c),i=e(4),u=e(6),a=e(3),s=e.n(a),d="/api/notes",l=e(0),f=function(t){var n=t.content,e=t.id,o=t.important,c=t.notes,r=t.setNotes,i=function(t){return c.find((function(n){return n.id===t}))?function(t){return s.a.delete("".concat(d,"/").concat(t)).then((function(){return console.log("note deleted")}))}(t).then((function(){r(c.filter((function(n){return n.id!==t?n:null})))})).catch((function(){console.log("error: cannot delete this note"),r(c.filter((function(n){return n.id!==t})))})):(r(c.filter((function(n){return n.id!==t}))),console.log("this note does not exist"))},a=function(t){var n=c.find((function(n){return n.id===t}));if(n){var e=Object(u.a)(Object(u.a)({},n),{},{important:!n.important});return function(t,n){return s.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))}(t,e).then((function(n){return r(c.map((function(e){return e.id!==t?e:n})))})).catch((function(){console.log("fail"),r(c.filter((function(n){return n.id!==t})))}))}return r(c.filter((function(n){return n.id!==t}))),console.log("this note no longer exists")},f=o?" mark not important":"important";return Object(l.jsxs)("p",{noteid:e,children:[n,Object(l.jsxs)("span",{children:[Object(l.jsx)("button",{onClick:function(t){return a(e)},children:f}),Object(l.jsx)("button",{onClick:function(t){return i(e)},children:"delete"})]})]})},j=function(t){var n=t.newNote,e=t.setNewNote,o=t.notes,c=t.setNotes;return Object(l.jsx)("div",{children:Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault();var r={content:n,important:!1,date:(new Date).toISOString()};if(""===r.content)return console.log("note cannot be blank!");(function(t){return s.a.post("".concat(d),t).then((function(t){return t.data}))})(r).then((function(t){return c(o.concat(t))})).then((function(){return e("")})).catch((function(){return console.log("something went wrong couldnt add note")}))},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",id:"new_note",value:n,onChange:function(t){return e(t.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"add note"})]})})})},h=function(){var t=Object(o.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1];Object(o.useEffect)((function(){return s.a.get("".concat(d)).then((function(t){return t.data})).then((function(t){return c(t)})).catch((function(){console.log("Could not fetch data")}))}),[]);var r=Object(o.useState)(!0),u=Object(i.a)(r,2),a=u[0],h=u[1],b=Object(o.useState)("add a note.."),p=Object(i.a)(b,2),O=p[0],x=p[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Notes App"}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(t){return h(!a)},children:a?"show important":"show all"})}),Object(l.jsx)("div",{children:e.length?(a?e:e.filter((function(t){return!0===t.important}))).map((function(t){return Object(l.jsx)(f,{note:t,content:t.content,id:t.id,important:t.important,notes:e,setNotes:c},t.id)})):Object(l.jsx)("p",{children:"Fetching your notes..."})}),Object(l.jsx)("div",{children:Object(l.jsx)(j,{notes:e,setNotes:c,newNote:O,setNewNote:x})})]})};r.a.render(Object(l.jsx)(o.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3b914f6d.chunk.js.map