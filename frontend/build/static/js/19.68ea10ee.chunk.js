(window.webpackJsonp=window.webpackJsonp||[]).push([[19,24],{51:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(77),r=n.n(a),o=n(35),i="https://ecell.nitrr.ac.in";i="",t.b=function(){var e=void 0,t=o.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),r.a.create({baseURL:i,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},530:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),o=n(13),i=n(12),s=n(14),c=n(0),l=n.n(c),u=n(51),d=(n(89),n(69),n(57)),p=n(22),m=n(74),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).isEdit=n.props.location.pathname.indexOf("edit_idea")>-1,n.state={uploading:!1,progress:0,errors:{},requesting:!1,success:!1,startup:{},pfsn:""},n._register_idea=function(e){e.preventDefault(),n.setState({requesting:!1});var t=Object(u.b)().post,a="/iportal/startup/";n.props.auth.startup_id&&(t=Object(u.b)().put,a="/iportal/startup/".concat(n.props.auth.startup_id,"/")),t(a,{idea_in_a_nut_shell:n.idea.value,beneficiaries:n.benef.value,describe_idea:n.description.get_value(),ideator_designation:"Student"===n.sector.value?"student":"faculty",end_product:n.ep.value,mentor_name:"Student"===n.state.pfsn?n.mn.value:"",mentor_designation:"Student"===n.state.pfsn?n.dg.value:"",innovation_in_this:n.innovation.get_value(),user:n.props.auth.id}).then(function(e){var t=e.data;console.log(t),n.isEdit?n.props.history.goBack():n.setState({success:!0,requesting:!1})}).catch(function(e){var t=e.response.data;console.log(t),n.setState({errors:t,requesting:!1}),t.user&&(alert("your startup is already registered"),n.props.history.push("/startups"))})},n._reset_form=function(e){e.preventDefault(),n.idea.value="",n.benef.value="",n.sector.value="",n.description.set_value(""),n.innovation.set_value(""),n.ep.value="",n.mn.value="",n.dg.value=""},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.isEdit&&Object(u.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){var n=t.data;console.log(n,"running"),e.idea.value=n.idea_in_a_nut_shell,e.benef.value=n.beneficiaries,"student"===n.ideator_designation?e.sector.value="Student":"faculty"===n.ideator_designation?e.sector.value="Faculty":e.sector.value="Select",e.description.set_value(n.describe_idea),e.ep.value=n.end_product,e.mn.value=n.mentor_name,e.dg.value=n.mentor_designation,e.innovation=n.innovation_in_this})}},{key:"render",value:function(){var e=this,t=d.d.map(function(e){return l.a.createElement("option",{value:e},e)});if(this.state.success)return l.a.createElement("div",null,l.a.createElement("h2",{className:"mt-5 text-center"},"Successfully submited the idea for verification"),l.a.createElement("h4",{className:"text-center mt-3"},"You will receive confirmation by E-mail and SMS once the verification is complete."),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary mt-5",onClick:function(){return e.props.history.push("/startups")}},"Go to homepage")));var n={};return Object.keys(this.state.errors).forEach(function(t){n[t]=e.state.errors[t].map(function(e,t){return l.a.createElement("div",{key:t,className:"text-danger"},e)})}),l.a.createElement("div",{className:"reg-pad"},l.a.createElement("div",{className:"container hoverable jumbotron"},l.a.createElement("div",{className:""},l.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn font-weight-bold btn-primary"},"Go Back")),l.a.createElement("div",null,l.a.createElement("h1",{className:"open text-center font-weight-bold my-5"},this.isEdit?"Edit Idea":"Submit Idea"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Idea in a Nutshell"),l.a.createElement("input",{type:"text",ref:function(t){return e.idea=t},required:!0,maxLength:"40",className:"form-control"}),n.name),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Describe Your Idea"),n.description,l.a.createElement(m.a,{onRef:function(t){return e.description=t}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Innovation in this"),n.innovation,l.a.createElement(m.a,{onRef:function(t){return e.innovation=t}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"End Product"),l.a.createElement("input",{type:"text",ref:function(t){return e.ep=t},required:!0,className:"form-control"}),n.contact),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Beneficiaries"),l.a.createElement("input",{type:"text",ref:function(t){return e.benef=t},required:!0,className:"form-control"}),n.brief),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("span",{className:"font-weight-bold"},"Registration Ideator"),"*\xa0"),l.a.createElement("select",{className:"form-control",onChange:function(t){return e.setState({pfsn:t.target.value})},ref:function(t){return e.sector=t}},t),n.sector),"Student"===this.state.pfsn?l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Mentor Name"),l.a.createElement("input",{type:"text",ref:function(t){return e.mn=t},required:!0,maxLength:"40",className:"form-control"}),n.name),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Designation of Mentor"),l.a.createElement("input",{type:"text",ref:function(t){return e.dg=t},required:!0,maxLength:"40",className:"form-control"}),n.name)):l.a.createElement("div",null),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{disabled:this.state.requesting||this.state.success,onClick:this._register_idea,className:"btn font-weight-bold btn-primary"},this.state.requesting?l.a.createElement("i",{className:"fa fa-spinner fa-spin"}):"submit"),l.a.createElement("button",{onClick:this._reset_form,className:"btn font-weight-bold btn-danger"},"reset"))))))}}]),t}(c.Component);t.default=Object(p.b)(function(e){return e})(f)},55:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"===typeof clearTimeout?clearTimeout:i}catch(e){a=i}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&m())}function m(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||s(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},57:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return l});var a,r=n(24),o=(a={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},Object(r.a)(a,"CAB","Campus Ambassador"),Object(r.a)(a,"DRT","Director"),a),i={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"},s=function(e){try{return e=(e=new Date(e)).toISOString(),"".concat(e.slice(8,10),"-").concat(e.slice(5,7),"-").concat(e.slice(0,4))}catch(t){return"invalid-format"}},c=["Accountancy","Banking","Finance","Business","Consulting","Management","Charity","Design","Engineering","Agriculture","Healthcare","Hospitality","IT","Law","Security","Leisure","Sport","Tourism","Marketing","Advertising","PR","Media","Construction","Public Services","Administration","Retail","Sales","Science","Social Care","Teacher Training","Education","Transport","Logistics","Others"],l=["Select","Student","Faculty"]},69:function(e,t,n){},74:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(10),r=n(11),o=n(13),i=n(12),s=n(14),c=n(0),l=n.n(c),u=(n(75),n(97),n(98)),d=n(86),p=n(99),m=n.n(p),f=n(100),g=n.n(f),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={editorState:d.EditorState.createEmpty()},n.set_value=function(e){var t=g()(e);if(t){var a=d.ContentState.createFromBlockArray(t.contentBlocks),r=d.EditorState.createWithContent(a);n.setState({editorState:r})}},n.get_value=function(){return m()(Object(d.convertToRaw)(n.state.editorState.getCurrentContent()))},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"wysiwyg"},l.a.createElement(u.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),t}(c.Component)},75:function(e,t,n){},82:function(e,t,n){e.exports=n.p+"static/media/no_pic.67edcff8.svg"},89:function(e,t,n){"use strict";var a=n(124),r=n.n(a),o=n(25),i=n(125),s=n(10),c=n(11),l=n(13),u=n(12),d=n(14),p=n(0),m=n.n(p),f=n(51),g=n(22),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={progress:0,uploading:!1,startup:{}},n._upload_logo=function(){var e=Object(i.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.state.startup.logo_id){e.next=4;break}return e.next=4,Object(f.b)().delete("/iportal/logo/".concat(n.state.startup.logo_id,"/")).then(function(e){n.setState({startup:Object(o.a)({},n.state.startup,{logo_id:null,logo:null})})});case 4:(a=document.createElement("input")).type="file",a.accept="image/x-png,image/gif,image/jpeg,image/svg+xml",a.click(),a.addEventListener("change",function(e){var t=e.target.files,a=new FileReader;a.readAsDataURL(t[0]),a.addEventListener("load",function(e){n.setState({startup:Object(o.a)({},n.state.startup,{logo:a.result})});var r=new FormData,i=new XMLHttpRequest;r.append("logo",t[0]),r.append("startup",n.props.auth.startup_id),i.addEventListener("load",function(e){var t=JSON.parse(e.target.response);console.log(t),n.setState({uploading:!1,progress:0,startup:Object(o.a)({},n.state.startup,{logo:t.logo,logo_id:t.id})})}),i.upload.addEventListener("progress",function(e){var t=Math.round(e.loaded/e.total*100);console.log({progress:t}),n.setState({progress:t})}),i.open("post",f.a+"/iportal/logo/"),i.setRequestHeader("Authorization",n.props.auth.token),i.send(r),n.setState({uploading:!0})})});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){if(!this.props.auth.startup_id)return null;var e=this.state.startup.logo?this.state.startup.logo:n(82);return m.a.createElement("div",null,m.a.createElement("img",{style:{outline:"4px solid #57C952",outlineOffset:"12px",maxWidth:"300px",maxHeight:"250px"},className:"logo_img",src:e,alt:""}),m.a.createElement("div",null,m.a.createElement("button",{disabled:this.state.uploading,onClick:this._upload_logo,className:"btn font-weight-bold btn-success"},this.state.uploading?"uploading":"Change logo",this.state.uploading?m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-spinner fa-spin"}),this.state.progress?this.state.progress:null):null)))}}]),t}(p.Component);t.a=Object(g.b)(function(e){return e})(h)}}]);
//# sourceMappingURL=19.68ea10ee.chunk.js.map