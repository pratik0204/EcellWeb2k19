(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{171:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),o=n(14),l=n(13),c=n(15),i=n(0),s=n.n(i),u=n(24),m=(n(67),n(61)),f=n(52),p=n(51),b=n(27),y=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).axios=Object(p.b)(),n.state={spons_years:[],loading:!0},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/spons_years/").then(function(t){var n=t.data.spons_year;console.log(n),e.setState({spons_years:n,loading:!1})})}},{key:"render",value:function(){console.log(this.state);var e=this.state.spons_years.map(function(e){return s.a.createElement("div",{key:e},s.a.createElement(u.b,{to:"/sponsors/".concat(e)},s.a.createElement("button",{className:"btn"},"Sponsors ",e)))});return s.a.createElement("div",{className:"sponsors"},s.a.createElement(m.a,null),s.a.createElement("div",{className:"header1"},"OUR SPONSORS"),s.a.createElement("div",{className:"container-fluid ctn11"},s.a.createElement("div",null,this.state.loading?s.a.createElement(b.a,null):e)),s.a.createElement(f.a,null))}}]),t}(i.Component);t.default=y},52:function(e,t,n){"use strict";var a=n(59),r=n(0),o=n.n(r),l=n(24),c=(n(53),n(60)),i=n.n(c);t.a=function(){return o.a.createElement("div",{className:"footer",style:{background:"#0A0908",textAlign:"center",marginTop:"50px",position:"relative",bottom:"0"}},o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1500px",padding:"50px"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-lg-4 col5"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800",padding:"8px",background:"#0A0908"}},"Quick Links"),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/events"},"Events")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/speakers"},"Speakers")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/sponsors"},"Sponsors")),o.a.createElement("div",{className:"f-links"},o.a.createElement(l.b,{to:"/team"},"Team"))),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col6"},o.a.createElement("img",{alt:"E-Cell Logo",style:{height:"80px",width:"80px"},src:i.a}),o.a.createElement("p",{style:{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}},"E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions."),o.a.createElement("p",{style:{color:"white",marginTop:"5px"}},"\xa9 All Rights Reserved")),o.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4"},o.a.createElement("h3",{style:{color:"white",fontWeight:"800"}},"E-SUMMIT'19"),o.a.createElement("p",{style:{color:"white",fontWeight:"600"}},"Follow us online on-"),o.a.createElement("p",{style:{fontSize:"40px"}},o.a.createElement("a",{href:"https://www.facebook.com/ecellnitrr/",target:"_blank"},o.a.createElement("i",{className:"fab fa-facebook-square"})),o.a.createElement("a",{href:"https://www.instagram.com/ecell.nitraipur/",target:"_blank"},o.a.createElement("i",{className:"fab fa-instagram"})),o.a.createElement("a",{href:"https://twitter.com/ecellnitrr?lang=en",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter-square"})),o.a.createElement("a",{href:"https://in.linkedin.com/company/entrepreneurship-cell-nit-raipur",target:"_blank"},o.a.createElement("i",{className:"fab fa-linkedin"}))),o.a.createElement("div",null,o.a.createElement("a",Object(a.a)({href:"#",style:{color:"white"}},"href","tel:8094966697"),"+91 80949 66697")),o.a.createElement("div",null,o.a.createElement("a",Object(a.a)({href:"#",style:{color:"white"}},"href","tel:8839579796"),"+91 88395 79796")),o.a.createElement("br",null),o.a.createElement(l.b,{style:{color:"white"},to:"/terms"},"Terms and Conditions"),o.a.createElement("br",null),o.a.createElement(l.b,{style:{color:"white"},to:"/policy"},"Private Policy")))))}},53:function(e,t,n){},54:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return a})},55:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",function(){return r})},56:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},57:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}var o=n(25);function l(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return l})},58:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return r})},67:function(e,t,n){}}]);
//# sourceMappingURL=18.28f724ba.chunk.js.map