(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/logo.1e991bda.png"},38:function(e,t,a){e.exports=a(79)},43:function(e,t,a){},45:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),s=a.n(r),c=(a(43),a(1)),i=a(2),o=a(4),m=a(3),u=a(8),h=a(5),d=(a(44),a(6)),p=a(13),b=(a(45),a(34)),E={duration:3e3,transitionDuration:700,infinite:!0,indicators:!0,arrows:!0},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={img:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return 0===this.state.img.length&&fetch("./images.txt").then(function(e){return e.text()}).then(function(t){e.setState({img:t.split("\n")})}),l.a.createElement("div",null,l.a.createElement(b.Slide,E,this.state.img.map(function(e,t){return l.a.createElement("div",{className:"each-slide"},l.a.createElement("div",{style:{backgroundImage:"url(".concat(e,")")}},l.a.createElement("span",null,"Slide ",t+1)))})))}}]),t}(n.Component),g=a(16),f=a(20),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).expandedStateEvent=function(e){return a.state.expandedEvents.findIndex(function(t){return t===e.name})>-1},a.expandEvent=function(e){var t=Object(g.a)(a.state.expandedEvents),n=t.findIndex(function(t){return t===e.name});n>-1?t.splice(n,1):t.push(e.name),a.setState({expandedEvents:Object(g.a)(t)})},a.getSportsRows=function(e,t){console.log(e);var a=[],n=l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.category));return a.push(n),a},a.getEventRows=function(e){var t=[],n=l.a.createElement("tr",{onClick:function(){return a.expandEvent(e)}},l.a.createElement("td",null,l.a.createElement("button",null,a.expandedStateEvent(e)?"-":"+")),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.st_date.toString().substring(0,10)),l.a.createElement("td",null,e.en_date.toString().substring(0,10)),l.a.createElement("td",null,e.info));if(t.push(n),a.expandedStateEvent(e)){var r=e.sports.map(function(t){return a.getSportsRows(e.name,t)}),s=l.a.createElement("tr",null,l.a.createElement("td",{className:"sports_details",colSpan:"5"},l.a.createElement("br",null),l.a.createElement("table",{className:"tab-sports",style:{width:"100%"}},l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Sports Name"),l.a.createElement("th",null,"Sports Category")),r),l.a.createElement("br",null)));t.push(s)}return t},a.getTable=function(){var e=a.state.events.map(function(e){return a.getEventRows(e)});return l.a.createElement("table",{className:"tab",style:{width:"100%"}},l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Start Date"),l.a.createElement("th",null,"End Date"),l.a.createElement("th",null,"Info")),e)},a.state={events:[],expandedEvents:[],expandedSports:{}},a.getData=a.getData.bind(Object(u.a)(a)),a.getData(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getData",value:function(){var e=this;f.get("http://localhost:8080/api/events").then(function(t){for(var a in console.log("RESPONSE"),t.data)e.state.events.push({name:t.data[a].name,st_date:t.data[a].start_date,en_date:t.data[a].end_date,info:t.data[a].info,sports:t.data[a].sports});e.forceUpdate()}).catch(function(e){console.log("Error"),console.log(e.response)})}},{key:"render",value:function(){return 0===this.state.events.length?l.a.createElement("div",{style:{textAlign:"center"}},"Fetching"):l.a.createElement("div",null,this.getTable())}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Player View Scores"))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Player View Upcoming"))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Player Registration"))}}]),t}(n.Component),S=a(17),w=a(20),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={msg:"",ev_name:"",st_date:"",en_date:"",info:"",sports:[{name:"",category:""}]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.addSports=a.addSports.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){"sports_name"===e.target.name?(this.state.sports[e.target.id].name=e.target.value,this.forceUpdate()):"sports_cat"===e.target.name?(this.state.sports[e.target.id].category=e.target.value,this.forceUpdate()):this.setState(Object(S.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.ev_name,start_date:new Date(this.state.st_date),end_date:new Date(this.state.en_date),info:this.state.info,sports:this.state.sports};w.post("http://localhost:8080/api/events",{params:a}).then(function(e){console.log("RESPONSE"),t.setState({msg:"Success"}),setTimeout(function(){this.setState({msg:""})}.bind(t),3e3),t.setState({ev_name:"",st_date:"",en_date:"",info:"",sports:[{name:"",category:""}]})}).catch(function(e){console.log("ERROR"),console.log(e.response),t.setState({msg:"Error: ".concat(e.response)})})}},{key:"addSports",value:function(e){if(e.preventDefault(),"+"===e.target.value)this.setState({sports:[].concat(Object(g.a)(this.state.sports),[{name:"",category:""}])});else{var t=this.state.sports.length-1;0!==t&&this.setState({sports:this.state.sports.filter(function(e,a){return a!==t})})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container",style:{textAlign:"center",height:"100%",width:"100%",overflow:"hidden"}},l.a.createElement("form",{id:"create",onSubmit:this.handleSubmit},l.a.createElement("div",{style:{float:"left",width:"40%"}},l.a.createElement("label",{style:{width:"500px",height:"9px",display:"block"}}),l.a.createElement("br",null),l.a.createElement("label",null,"Event Name:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"ev_name",value:this.state.ev_name,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Starting Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",id:"st_date",value:this.state.st_date,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Ending Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",id:"en_date",value:this.state.en_date,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Description (Optional):"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"5",id:"info",value:this.state.info,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{style:{float:"left",width:"10%"}},l.a.createElement("label",{style:{display:"block"}},this.state.msg),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,"Create")),l.a.createElement("div",{style:{float:"left",width:"50%"}},l.a.createElement("label",{style:{width:"500px",height:"9px",display:"block"}}),l.a.createElement("br",null),l.a.createElement("label",null,"Sport(s):"),l.a.createElement("br",null),this.state.sports.map(function(t,a){return e.state.sports.length===a+1?l.a.createElement("div",null,l.a.createElement("input",{type:"text",id:a,name:"sports_name",value:t.name,onChange:e.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:a,name:"sports_cat",value:t.category,onChange:e.handleChange,placeholder:"Category"}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",style:{width:"25px"},value:"+",onClick:e.addSports}),l.a.createElement("input",{type:"button",style:{width:"25px"},value:"-",onClick:e.addSports})):l.a.createElement("div",null,l.a.createElement("input",{type:"text",id:a,name:"sports_name",value:t.name,onChange:e.handleChange,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:a,name:"sports_cat",value:t.category,onChange:e.handleChange,placeholder:"Category"}),l.a.createElement("br",null),l.a.createElement("br",null))}))))}}]),t}(n.Component),k=a(20),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={msg:"",ev_name:"",st_date:"",en_date:"",info:"",sports:[{name:"",category:""}]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.fetchEvent=a.fetchEvent.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){"search"===e.target.name&&(this.state.ev_name=e.target.value,this.forceUpdate())}},{key:"fetchEvent",value:function(e){var t=this;"search"===e.target.value&&(this.state.ev_name=e.target.value,this.forceUpdate()),k.get("http://localhost:8080/api/events").then(function(e){console.log("RESPONSE"),console.log(e.data),t.setState({msg:"Success"}),setTimeout(function(){this.setState({msg:""})}.bind(t),3e3)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"search-container"},l.a.createElement("input",{type:"text",placeholder:"Search an event to modify/delete",value:this.ev_name,name:"search",onChange:this.handleChange}),l.a.createElement("button",{type:"submit",value:"Search",onClick:this.fetchEvent},l.a.createElement("i",{class:"fa fa-search"})))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Admin Update Scores"))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Admin Register Teams"))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={logged_in:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){"undefined"===typeof this.props.location.state?this.props.history.push("/"):this.setState({logged_in:this.props.location.state.login_status})}},{key:"render",value:function(){return"Login"===this.state.logged_in?l.a.createElement(d.a,null,l.a.createElement("div",{className:"container",style:{height:"100%",width:"100%",overflow:"hidden"}},l.a.createElement("div",{id:"event-nav",style:{float:"left",width:"18%",height:"100%"}},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("ul",{className:"navbar-nav nav-pills flex-column"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/view",className:"nav-link"},"View All Events")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/scores",className:"nav-link"},"View Scores")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/upcoming",className:"nav-link"},"Upcoming Events")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/register",className:"nav-link"},"Register for Event")),l.a.createElement("span",{style:{height:"300px"}})))),l.a.createElement("div",{style:{float:"left",width:"2%",height:"100%"}},l.a.createElement("span",{style:{height:"700px",display:"block"}})),l.a.createElement("div",{style:{float:"left",width:"80%",height:"100%"}},l.a.createElement("br",null),l.a.createElement(p.a,{path:"/events/view",component:y}),l.a.createElement(p.a,{path:"/events/scores",component:O}),l.a.createElement(p.a,{path:"/events/upcoming",component:j}),l.a.createElement(p.a,{path:"/events/register",component:_})))):l.a.createElement(d.a,null,l.a.createElement("div",{className:"container",style:{height:"100%",width:"100%",overflow:"hidden",display:"block"}},l.a.createElement("div",{id:"event-nav",style:{float:"left",width:"18%"}},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("ul",{className:"navbar-nav nav-pills flex-column"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/view",className:"nav-link"},"View All Events")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/create_event",className:"nav-link"},"Create Event")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/modify_event",className:"nav-link"},"Modify/Delete Event")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/update_scores",className:"nav-link"},"Update Match Score")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/events/register_teams",className:"nav-link"},"Register Teams")),l.a.createElement("span",{style:{height:"300px"}})))),l.a.createElement("div",{style:{float:"left",width:"2%",height:"100%"}},l.a.createElement("span",{style:{height:"700px",display:"block"}})),l.a.createElement("div",{style:{float:"left",width:"80%"}},l.a.createElement("br",null),l.a.createElement(p.a,{path:"/events/view",component:y}),l.a.createElement(p.a,{path:"/events/create_event",component:N}),l.a.createElement(p.a,{path:"/events/modify_event",component:C}),l.a.createElement(p.a,{path:"/events/update_scores",component:x}),l.a.createElement(p.a,{path:"/events/register_teams",component:D}))))}}]),t}(n.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Sports"))}}]),t}(n.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Matches"))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"About Us"))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={login_status:"",login_state_func:e.login_button,username:"",password:"",login_msg:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){"undefined"===typeof this.props.location.state?this.props.history.push("/"):this.setState({login_status:this.props.location.state.login_status})}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.setState({login_msg:""}),"login"===e.target.id){console.log(this.state.username),console.log(this.state.password);var t=!1;"admin"===this.state.username&&"123"===this.state.password&&(t=!0),t?(this.state.login_state_func("Logout",this.state.username),this.setState({password:"",login_status:"Logout"}),this.props.history.push("/")):this.setState({login_msg:"Invalid Username or Password, try again"})}else"logout"===e.target.id&&(this.state.login_state_func("Login",""),this.setState({password:"",username:"",login_status:"Login"}),this.props.history.push("/"))}},{key:"render",value:function(){return"Login"===this.state.login_status?l.a.createElement("div",{className:"Login",style:{textAlign:"center"}},l.a.createElement("form",{id:"login",onSubmit:this.handleSubmit},l.a.createElement("label",{style:{width:"500px",height:"9px",display:"block"}},this.state.login_msg),l.a.createElement("br",null),l.a.createElement("label",null,"Username:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Password:"),l.a.createElement("br",null),l.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,"Log In"))):l.a.createElement("div",{className:"Logout",style:{textAlign:"center"}},l.a.createElement("form",{id:"logout",onSubmit:this.handleSubmit},l.a.createElement("label",{style:{width:"500px",height:"9px"}}),l.a.createElement("br",null),l.a.createElement("label",null,"Are you sure you want to logout?"),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Log Out"})))}}]),t}(n.Component),I=a(37),M=a.n(I),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).login_button=a.login_button.bind(Object(u.a)(a)),a.state={login_status:"Login",username:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"login_button",value:function(e,t){"Login"===e?this.setState({login_status:e,username:""}):"Logout"===e&&this.setState({login_status:e,username:"Logged in as "+t})}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{id:"main_nav",className:"navbar navbar-expand-lg navbar-light"},l.a.createElement("a",{className:"navbar-brand"},l.a.createElement("img",{src:M.a,width:"80",height:"116",alt:""})),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:{pathname:"/events",state:{login_status:this.state.login_status}},className:"nav-link"},"Events")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/sports",className:"nav-link"},"Sports")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/matches",className:"nav-link"},"Matches")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(d.b,{to:"/aboutus",className:"nav-link"},"About Us"))),l.a.createElement("ul",{className:"navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("label",{className:"navbar-brand"},this.state.username)),l.a.createElement("li",{className:"navbar-item active"},l.a.createElement(d.b,{to:{pathname:"/login",state:{login_status:this.state.login_status}},className:"nav-link"},this.state.login_status)))),l.a.createElement(p.a,{path:"/",exact:!0,component:v}),l.a.createElement(p.a,{path:"/events",component:L}),l.a.createElement(p.a,{path:"/sports",component:R}),l.a.createElement(p.a,{path:"/matches",component:U}),l.a.createElement(p.a,{path:"/aboutus",component:A}),l.a.createElement(p.a,{path:"/login",render:function(t){return l.a.createElement(P,Object.assign({},t,{login_button:e.login_button}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.c0936d4c.chunk.js.map