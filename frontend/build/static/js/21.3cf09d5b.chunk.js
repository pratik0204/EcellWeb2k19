(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,t,a){},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=n?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=o(a(8)),r=o(a(142)),s=o(a(143)),l=o(a(79));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var a,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,n["default"].Component),a=t,(i=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;t.hideNavigation;return!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;t.hideNavigation;return!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,i=t.pageRangeDisplayed,o=t.activePage,u=t.prevPageText,c=t.nextPageText,f=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,g=t.onChange,m=t.activeClass,h=t.itemClass,b=t.itemClassFirst,v=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,_=t.activeLinkClass,P=t.disabledClass,x=(t.hideDisabled,t.hideNavigation,t.linkClass),k=t.linkClassFirst,O=t.linkClassPrev,E=t.linkClassNext,N=t.linkClassLast,w=(t.hideFirstLastPages,t.getPageUrl),j=new r.default(a,i).build(d,o),T=j.first_page;T<=j.last_page;T++)e.push(n.default.createElement(s.default,{isActive:T===o,key:T,href:w(T),pageNumber:T,pageText:T+"",onClick:g,itemClass:h,linkClass:x,activeClass:m,activeLinkClass:_,ariaLabel:"Go to page number ".concat(T)}));return this.isPrevPageVisible(j.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"prev"+j.previous_page,href:w(j.previous_page),pageNumber:j.previous_page,onClick:g,pageText:u,isDisabled:!j.has_previous_page,itemClass:(0,l.default)(h,v),linkClass:(0,l.default)(x,O),disabledClass:P,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(j.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"first",href:w(1),pageNumber:1,onClick:g,pageText:f,isDisabled:!j.has_previous_page,itemClass:(0,l.default)(h,b),linkClass:(0,l.default)(x,k),disabledClass:P,ariaLabel:"Go to first page"})),this.isNextPageVisible(j.has_next_page)&&e.push(n.default.createElement(s.default,{key:"next"+j.next_page,href:w(j.next_page),pageNumber:j.next_page,onClick:g,pageText:c,isDisabled:!j.has_next_page,itemClass:(0,l.default)(h,y),linkClass:(0,l.default)(x,E),disabledClass:P,ariaLabel:"Go to next page"})),this.isLastPageVisible(j.has_next_page)&&e.push(n.default.createElement(s.default,{key:"last",href:w(j.total_pages),pageNumber:j.total_pages,onClick:g,pageText:p,isDisabled:j.current_page===j.total_pages,itemClass:(0,l.default)(h,C),linkClass:(0,l.default)(x,N),disabledClass:P,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&f(a.prototype,i),o&&f(a,o),t}();t.default=h,m(h,"propTypes",{totalItemsCount:i.default.number.isRequired,onChange:i.default.func.isRequired,activePage:i.default.number,itemsCountPerPage:i.default.number,pageRangeDisplayed:i.default.number,prevPageText:i.default.oneOfType([i.default.string,i.default.element]),nextPageText:i.default.oneOfType([i.default.string,i.default.element]),lastPageText:i.default.oneOfType([i.default.string,i.default.element]),firstPageText:i.default.oneOfType([i.default.string,i.default.element]),disabledClass:i.default.string,hideDisabled:i.default.bool,hideNavigation:i.default.bool,innerClass:i.default.string,itemClass:i.default.string,itemClassFirst:i.default.string,itemClassPrev:i.default.string,itemClassNext:i.default.string,itemClassLast:i.default.string,linkClass:i.default.string,activeClass:i.default.string,activeLinkClass:i.default.string,linkClassFirst:i.default.string,linkClassPrev:i.default.string,linkClassNext:i.default.string,linkClassLast:i.default.string,hideFirstLastPages:i.default.bool,getPageUrl:i.default.func}),m(h,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},142:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),i=Math.min(a,t+Math.floor(this.length/2));i-n+1<this.length&&(t<a/2?i=Math.min(a,i+(this.length-(i-n))):n=Math.max(1,n-(this.length-(i-n)))),i-n+1>this.length&&(t>a/2?n++:i--);var r=this.per_page*(t-1);r<0&&(r=0);var s=this.per_page*t-1;return s<0&&(s=0),s>Math.max(e-1,0)&&(s=Math.max(e-1,0)),{total_pages:a,pages:Math.min(i-n+1,a),current_page:t,first_page:n,last_page:i,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(s-r+1,e),first_result:r,last_result:s}}},143:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=n?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(a(0)),i=s(a(8)),r=s(a(79));function s(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,f(t).apply(this,arguments))}var a,i,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n.Component),a=t,(i=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,i=(t.pageNumber,t.activeClass),s=t.itemClass,l=t.linkClass,o=t.activeLinkClass,u=t.disabledClass,c=t.isActive,f=t.isDisabled,p=t.href,g=t.ariaLabel,m=(0,r.default)(s,(d(e={},i,c),d(e,u,f),e)),h=(0,r.default)(l,d({},o,c));return n.default.createElement("li",{className:m,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:h,href:p,"aria-label":g},a))}}])&&u(a.prototype,i),s&&u(a,s),t}();t.default=g,d(g,"propTypes",{pageText:i.default.oneOfType([i.default.string,i.default.element]),pageNumber:i.default.number.isRequired,onClick:i.default.func.isRequired,isActive:i.default.bool.isRequired,isDisabled:i.default.bool,activeClass:i.default.string,activeLinkClass:i.default.string,itemClass:i.default.string,linkClass:i.default.string,disabledClass:i.default.string,href:i.default.string}),d(g,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},172:function(e,t,a){e.exports=a.p+"static/media/no-logo.5fd90280.svg"},51:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(77),i=a.n(n),r=a(35),s="https://ecell.nitrr.ac.in";s="",t.b=function(){var e=void 0,t=r.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),i.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},547:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n=a(10),i=a(11),r=a(13),s=a(12),l=a(14),o=a(0),u=a.n(o),c=a(51),f=(a(114),a(141)),p=a.n(f),d=a(21),g=(a(57),function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={startups:[],activePage:1,totalStartups:1,totalPages:1,loading:!0},a.handlePageChange=function(e){console.log("active page is ".concat(e)),a.setState({loading:!0}),Object(c.b)().get("/iportal/startup/?page=".concat(e,"&idea_approved=true&search=").concat(a.search_box.value)).then(function(t){var n=t.data.results;a.setState({loading:!1,activePage:e,startups:n,totalStartups:t.data.count,totalPages:t.data.total_pages})})},a._search=function(e){e.preventDefault(),a.setState({loading:!0}),Object(c.b)().get("/iportal/startup/?search=".concat(a.search_box.value)).then(function(e){console.log(e);var t=e.data.results;console.log(t),a.setState({loading:!1,startups:t,activePage:e.data.current_page,totalStartups:e.data.count})})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(c.b)().get("/iportal/startup/?idea_approved=true").then(function(t){console.log(t);var a=t.data.results;console.log(a),e.setState({loading:!1,startups:a,activePage:t.data.current_page,totalStartups:t.data.count})})}},{key:"render",value:function(){var e=this,t=a(172),n=this.state.startups.map(function(e){var a=e.jobs;console.log(a);var n=a.map(function(e){return u.a.createElement("div",{className:"",key:e.id},u.a.createElement("div",{className:"font-weight-bold",style:{fontSize:"15px"}},e.name," : ",e.brief))});return 0===a.length&&(n=u.a.createElement("span",{className:"badge badge-light p-2",style:{fontSize:"15px",margin:"0px"}}," ",u.a.createElement("div",{className:"text-danger font-weight-bold"},"No Vacancies")," ")),u.a.createElement("div",{className:"jumbotron text-center hoverable p-4",key:e.id},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3 offset-md-1 mx-3 my-3"},u.a.createElement("div",{className:"view overlay d-flex",style:{alignItems:"center",justifyContent:"center"}},u.a.createElement("img",{width:"300px",height:"300px",src:e.logo?e.logo:t,className:"img-fluid",alt:e.name}),u.a.createElement(d.b,{style:{display:"none"},to:"/internship/jobs/".concat(e.name,"/").concat(e.id)},u.a.createElement("div",{className:"mask rgba-white-slight"}))),""!==e.idea_in_a_nutshell?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"my-3 text-center font-weight-bold"},e.idea_in_a_nut_shell)):null,u.a.createElement(o.Fragment,null,u.a.createElement(d.b,{className:"btn font-weight-bold btn-primary",to:"/internship/jobs/".concat(e.id)},"Read More"))),u.a.createElement("div",{className:"col-lg-8 text-md-left"},u.a.createElement("div",null,u.a.createElement("div",{className:"font-weight-bold mb-4"},"Beneficiaries:"),u.a.createElement("p",null,e.beneficiaries)),u.a.createElement("div",null,u.a.createElement("div",{className:"font-weight-bold"},"Innovation:"),u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.innovation_in_this}})),e.can_hire_interns?u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"my-2"},u.a.createElement("div",{className:"font-weight-bold my-3"},"Job Openings :"),u.a.createElement("div",{className:"d-flex"},n)),u.a.createElement("br",null)):u.a.createElement(o.Fragment,null,u.a.createElement("div",{className:"font-weight-bold"},"Description:"),u.a.createElement("div",null,u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.describe_idea}}))))))});return 0==this.state.startups.length&&0==this.state.loading&&(n=u.a.createElement("h1",{className:"text-center my-5"},"Great startups and ideas comming soon...")),u.a.createElement("div",{id:"outer-container",style:{background:"lightgray"}},u.a.createElement("form",{className:"text-center d-flex mb-5",style:{maxWidth:"1100px",alignItems:"center",justifyContent:"center",margin:"auto"}},u.a.createElement("input",{style:{height:"50px"},className:"form-control m-3",ref:function(t){return e.search_box=t},placeholder:"Search for Startups and Jobs",type:"text"}),u.a.createElement("button",{onClick:this._search,className:"m-3 font-weight-bold btn btn-primary"},"Search")),u.a.createElement("div",{className:"container",style:{paddingTop:"10% 0 0 0"}},this.state.loading?u.a.createElement("div",{className:"my-5 text-center"},u.a.createElement("i",{className:"fa fa-2x fa-spinner fa-spin"})):n),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(p.a,{activePage:this.state.activePage,itemsCountPerPage:14,totalItemsCount:this.state.totalStartups,pageRangeDisplayed:10,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange})))}}]),t}(o.Component))},79:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=i.apply(null,n);s&&e.push(s)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=21.3cf09d5b.chunk.js.map