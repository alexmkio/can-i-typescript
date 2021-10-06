(this["webpackJsonpcan-i-typescript"]=this["webpackJsonpcan-i-typescript"]||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),s=n(4),c=(n(26),n(15)),o=n(9),i=n.n(o),l=n(11),u=n(8),d=n(1),m=n(2),h=n(0),b=function(){return Object(h.jsx)("header",{className:"bg-gray-100 shadow-md sticky top-0 z-50",children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("h1",{className:"text-4xl md:text-5xl text-center p-4 md:p-6 transition duration-300 ease-in-out hover:text-purple-800",children:"Can I go outside?"})})})},j=function(e){var t=e.getForecast,n=Object(d.useState)(50),r=Object(u.a)(n,2),a=r[0],c=r[1],o=Object(d.useState)(90),i=Object(u.a)(o,2),l=i[0],m=i[1],b=Object(d.useState)(10),j=Object(u.a)(b,2),p=j[0],x=j[1],f=Object(d.useState)(50),O=Object(u.a)(f,2),g=O[0],v=O[1];return Object(h.jsx)("section",{className:"flex my-4 md:my-8 text-center items-center justify-center",children:Object(h.jsxs)("section",{className:"flex flex-col w-11/12 sm:w-9/12 md:w-7/12 lg:w-full",children:[Object(h.jsx)("h2",{className:"text-3xl",children:"Select your weather thresholds and find out if you can go outside"}),Object(h.jsxs)("form",{className:"mt-4 flex flex-col items-center",children:[Object(h.jsxs)("label",{className:"flex flex-col items-center my-3",children:[Object(h.jsx)("p",{className:"text-gray-700",children:"Min Temperature"}),Object(h.jsxs)("select",{name:"minTemp",value:a,className:"rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer",onChange:function(e){return c(Number(e.target.value))},children:[Object(h.jsx)("option",{value:40,children:"40"}),Object(h.jsx)("option",{value:50,children:"50"}),Object(h.jsx)("option",{value:60,children:"60"})]})]}),Object(h.jsxs)("label",{className:"flex flex-col items-center my-3",children:[Object(h.jsx)("p",{className:"text-gray-700",children:"Max Temperature"}),Object(h.jsxs)("select",{name:"maxTemp",value:l,className:"rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer",onChange:function(e){return m(Number(e.target.value))},children:[Object(h.jsx)("option",{value:80,children:"80"}),Object(h.jsx)("option",{value:90,children:"90"}),Object(h.jsx)("option",{value:100,children:"100"})]})]}),Object(h.jsxs)("label",{className:"flex flex-col items-center my-3",children:[Object(h.jsx)("p",{className:"text-gray-700",children:"Wind Speed"}),Object(h.jsxs)("select",{name:"wind",value:p,className:"rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer",onChange:function(e){return x(Number(e.target.value))},children:[Object(h.jsx)("option",{value:5,children:"5"}),Object(h.jsx)("option",{value:10,children:"10"}),Object(h.jsx)("option",{value:20,children:"20"}),Object(h.jsx)("option",{value:30,children:"30"})]})]}),Object(h.jsxs)("label",{className:"flex flex-col items-center text-center my-3",children:[Object(h.jsx)("p",{className:"text-gray-700",children:"Probability of Precipitation"}),Object(h.jsxs)("select",{name:"precipProbability",value:g,className:"rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer",onChange:function(e){return v(Number(e.target.value))},children:[Object(h.jsx)("option",{value:30,children:"30"}),Object(h.jsx)("option",{value:50,children:"50"}),Object(h.jsx)("option",{value:70,children:"70"})]})]}),Object(h.jsx)(s.b,{to:"/results",onClick:function(){t({temperature:{low:a,high:l},windSpeed:p,probOfPrecip:g})},children:Object(h.jsx)("button",{className:"uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md py-3 px-6 mt-5 transition duration-500 ease-in-out hover:bg-green-400 transform hover:scale-110",children:"submit"})})]})]})})},p=function(e){var t,n=e.notice;return t=n.nice?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"text-3xl",children:"Good news!"}),Object(h.jsxs)("p",{className:"my-3 text-2xl",children:["You can go outside for ",n.hours," hours!"]})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"text-3xl",children:"Bad news"}),Object(h.jsxs)("p",{className:"my-3 text-2xl",children:["You can't go outside for ",n.hours," hours!"]})]}),Object(h.jsxs)("section",{className:"flex flex-col items-center my-4 md:my-8",children:[t,Object(h.jsx)("p",{className:"mt-6 text-xl",children:"To see all the forcasted hours that satisfy your thresholds"}),Object(h.jsx)(s.b,{to:"/good_weather",children:Object(h.jsx)("button",{className:"uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-red-400 transform hover:scale-110",children:"click here"})})]})},x={months:[{number:1,name:"January"},{number:2,name:"February"},{number:3,name:"March"},{number:4,name:"April"},{number:5,name:"May"},{number:6,name:"June"},{number:7,name:"July"},{number:8,name:"August"},{number:9,name:"September"},{number:10,name:"October"},{number:11,name:"November"},{number:12,name:"December"}],hours:[{number:0,name:"12 AM"},{number:1,name:"1 AM"},{number:2,name:"2 AM"},{number:3,name:"3 AM"},{number:4,name:"4 AM"},{number:5,name:"5 AM"},{number:6,name:"6 AM"},{number:7,name:"7 AM"},{number:8,name:"8 AM"},{number:9,name:"9 AM"},{number:10,name:"10 AM"},{number:11,name:"11 AM"},{number:12,name:"12 PM"},{number:13,name:"1 PM"},{number:14,name:"2 PM"},{number:15,name:"3 PM"},{number:16,name:"4 PM"},{number:17,name:"5 PM"},{number:18,name:"6 PM"},{number:19,name:"7 PM"},{number:20,name:"8 PM"},{number:21,name:"9 PM"},{number:22,name:"10 PM"},{number:23,name:"11 PM"}]},f=function(e){var t,n,r=e.hour,a=e.addToCalendar,s=null===(t=x.months.find((function(e){return e.number===r.month})))||void 0===t?void 0:t.name,c=null===(n=x.hours.find((function(e){return e.number===r.hour})))||void 0===n?void 0:n.name,o=r.inCalendar?"remove":"add";return Object(h.jsxs)("article",{className:"flex flex-col items-center border p-6 rounded-2xl shadow-md bg-gray-50 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105",children:[Object(h.jsx)("label",{children:Object(h.jsx)("button",{className:"material-icons-outlined md-24 bg-yellow-300 rounded-full shadow-md p-3 transition duration-500 ease-in-out transform hover:scale-125",onClick:function(){return a(r)},children:o})}),Object(h.jsxs)("dl",{className:"flex flex-col items-center text-center uppercase",children:[Object(h.jsx)("dt",{className:"mt-4",children:"Date"}),Object(h.jsxs)("dd",{className:"text-xl",children:[c," ",s," ",r.day]}),Object(h.jsx)("dt",{className:"mt-4",children:"Temperature"}),Object(h.jsxs)("dd",{className:"text-xl",children:[r.temperature," ",Object(h.jsx)("span",{children:"\u2109"})]}),Object(h.jsx)("dt",{className:"mt-4",children:"Wind Speed"}),Object(h.jsxs)("dd",{className:"text-xl",children:[r.windSpeed," mph"]}),Object(h.jsx)("dt",{className:"mt-4",children:"Probability of Precipitation"}),Object(h.jsxs)("dd",{className:"text-xl",children:[r.precipProb,"%"]})]})]})},O=function(e){var t=e.suitableHours,n=e.addToCalendar,r=t.map((function(e){return Object(h.jsx)(f,{hour:e,addToCalendar:n},"".concat(e.month).concat(e.day).concat(e.hour))}));return Object(h.jsxs)("section",{className:"flex flex-col items-center my-4 md:my-8",children:[Object(h.jsx)("h2",{className:"text-3xl",children:"Suitable hours to be outside"}),Object(h.jsx)("p",{className:"mt-6 text-xl",children:"Click on an hour to add or delete it from your calendar"}),Object(h.jsx)(s.b,{to:"/calendar",children:Object(h.jsx)("button",{className:"uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:scale-110",children:"Your Calendar"})}),Object(h.jsx)("section",{className:"p-8 grid gap-8 w-11/12 sm:grid-cols-2 sm:gap-6 sm:w-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ",children:r})]})},g=function(e){var t=e.calendar,n=e.addToCalendar,r=t.map((function(e){return Object(h.jsx)(f,{hour:e,addToCalendar:n},"".concat(e.month).concat(e.day).concat(e.hour))}));return t.length?Object(h.jsxs)("section",{className:"flex flex-col items-center my-4 md:my-8",children:[Object(h.jsx)("h2",{className:"text-3xl capitalize",children:"Your calendar"}),Object(h.jsx)("p",{className:"mt-6 text-xl",children:"Click on an hour to delete it from your calendar"}),Object(h.jsx)("section",{className:"p-8 grid gap-8 w-11/12 sm:grid-cols-2 sm:gap-6 sm:w-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ",children:r})]}):Object(h.jsxs)("section",{className:"flex flex-col items-center my-4 md:my-8",children:[Object(h.jsx)("p",{className:"text-3xl capitalize",children:"Your calendar is empty"}),Object(h.jsx)(s.b,{to:"/good_weather",children:Object(h.jsx)("button",{className:"mt-8 uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-indigo-400 transform hover:scale-110",children:"Go back"})})]})},v=[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed\n      permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized",\n      semantically this response means "unauthenticated". That is, the client\n      must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content;\n      that is, it is unauthorized, so the server is refusing to give the\n      requested resource. Unlike 401, the client's identity is known to the\n      server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the\n      browser, this means the URL is not recognized. In an API, this can also\n      mean that the endpoint is valid but the resource itself does not exist.\n      Servers may also send this response instead of 403 to hide the existence\n      of a resource from an unauthorized client. This response code is probably \n      the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some \n      servers, even without any previous request by the client. It means that \n      the server would like to shut down this unused connection. This response \n      is used much more since some browsers, like Chrome, Firefox 27+, or IE9, \n      use HTTP pre-connection mechanisms to speed up surfing. Also note that \n      some servers merely shut down the connection without sending this \n      message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of \n      time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how \n      to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as \n      a gateway to get a response needed to handle the request, got an invalid \n      response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common \n      causes are a server that is down for maintenance or that is overloaded. \n      Note that together with this response, a user-friendly page explaining \n      the problem should be sent. This response should be used for temporary \n      conditions and the Retry-After: HTTP header should, if possible, contain \n      the estimated time before the recovery of the service. The webmaster must \n      also take care about the caching-related headers that are sent along with \n      this response, as these temporary condition responses should usually not \n      be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a \n      gateway and cannot get a response in time."}],y=function(e){var t=e.errorCode,n=e.clearSelected,r=v.find((function(e){return e.code===Number(t)}));return r?Object(h.jsx)("article",{className:"flex flex-col items-center mt-4 md:my-8",children:Object(h.jsxs)("section",{className:"flex flex-col w-11/12 md:w-9/12 lg:w-6/12",children:[Object(h.jsxs)("h2",{className:"text-3xl",children:["Error ",r.code]}),Object(h.jsx)("h3",{className:"text-xl font-medium",children:r.message}),Object(h.jsx)("p",{className:"mt-6 text-xl",children:r.description}),Object(h.jsx)("section",{className:"flex flex-col items-center mt-8",children:Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("button",{onClick:n,className:"uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-pink-400 transform hover:scale-110",children:"Back"})})})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:"No matching error"})})},w=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://github.com/alexmkio/can-i","alexandermartelkio@gmail.com",n={"User-Agent":"(".concat("https://github.com/alexmkio/can-i",", ").concat("alexandermartelkio@gmail.com",")")},r={method:"GET",headers:n},e.next=6,fetch(t,r);case 6:return a=e.sent,e.abrupt("return",N(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=4;break}throw new Error(t.status.toString());case 4:return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=S(e.properties.temperature.values),n=M(e.properties.windSpeed.values),r=k(e.properties.windSpeed.values);return t.reduce((function(e,t){var a=n.find((function(e){return e.month===t.month&&e.day===t.day&&e.hour===t.hour})),s=r.find((function(e){return e.month===t.month&&e.day===t.day&&e.hour===t.hour}));if(a&&s){var c={month:t.month,day:t.day,hour:t.hour,inCalendar:!1,temperature:t.temperature,windSpeed:a.windSpeed,precipProb:s.precipProb};e.push(c)}return e}),[])},S=function(e){return e.reduce((function(e,t){for(var n=t.validTime.split("T"),r=n[0].split("-"),a=Number(r[1]),s=Number(r[2]),c=Number(n[1].split(":")[0]),o=Number(n.join().split("H").join().split(",")[2]),i=0;i<o;i++){var l=s,u=c+i;u>23&&(l++,u-=24);var d={month:a,day:l,hour:u,temperature:1.8*t.value+32};e.push(d)}return e}),[])},M=function(e){return e.reduce((function(e,t){for(var n=t.validTime.split("T"),r=n[0].split("-"),a=Number(r[1]),s=Number(r[2]),c=Number(n[1].split(":")[0]),o=Number(n.join().split("H").join().split(",")[2]),i=0;i<o;i++){var l=s,u=c+i;u>23&&(l++,u-=24);var d={month:a,day:l,hour:u,windSpeed:Math.round(t.value/1.609344)};e.push(d)}return e}),[])},k=function(e){return e.reduce((function(e,t){for(var n=t.validTime.split("T"),r=n[0].split("-"),a=Number(r[1]),s=Number(r[2]),c=Number(n[1].split(":")[0]),o=Number(n.join().split("H").join().split(",")[2]),i=0;i<o;i++){var l=s,u=c+i;u>23&&(l++,u-=24);var d={month:a,day:l,hour:u,precipProb:t.value};e.push(d)}return e}),[])},P=function(e,t,n){var r=A(n);return t.filter((function(t){return 24*t.day+t.hour>=r&&t.temperature<=e.temperature.high&&t.temperature>=e.temperature.low&&t.windSpeed<=e.windSpeed&&t.precipProb<=e.probOfPrecip&&t}))},C=function(e,t){var n=A(t),r=0,a=0,s=n;return e.every((function(e){var t=24*e.day+e.hour;return s===t?(r++,s++,!0):(a=t-n,!1)})),r?{nice:!0,hours:r}:{nice:!1,hours:a}},A=function(e){var t=(new Date).toLocaleString("en-US",{timeZone:e}).split("/").join(":").split(":").join(", ").split(", ").join(" ").split(" "),n=Number(t[3]);return"PM"===t[6]&&(n+=12),24*Number(t[1])+n},z=function(){var e=Object(d.useState)(void 0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(d.useState)([]),s=Object(u.a)(a,2),o=s[0],x=s[1],f=Object(d.useState)(0),v=Object(u.a)(f,2),N=v[0],S=v[1],M=Object(d.useState)([]),k=Object(u.a)(M,2),A=k[0],z=k[1],q=Object(d.useState)({nice:!1,hours:0}),F=Object(u.a)(q,2),H=F[0],I=F[1],U=Object(d.useState)([]),E=Object(u.a)(U,2),_=E[0],G=E[1],R=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"103a0ac5b110412c9a639e3ab5afd99f","&fields=latitude,longitude,time_zone",t="https://api.weather.gov/points/",e.prev=3,e.next=6,w("https://api.ipgeolocation.io/ipgeo?apiKey=".concat("103a0ac5b110412c9a639e3ab5afd99f").concat("&fields=latitude,longitude,time_zone"));case 6:return n=e.sent,e.next=9,w("".concat(t).concat(n.latitude,",").concat(n.longitude));case 9:return a=e.sent,e.next=12,w(a.properties.forecastGridData);case 12:s=e.sent,c=T(s),r(n),x(c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),S(Number(e.t0.message));case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){R()}),[]);var J=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=3,P(t,o,n.time_zone.name);case 3:r=e.sent,a=C(r,n.time_zone.name),I(a),z(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){S(0)},B=function(e){var t=A,n=t.indexOf(e);if(_.includes(e)){var r=_,a=r.indexOf(e);r.splice(a,1),t[n].inCalendar=!1,G(Object(c.a)(r))}else t[n].inCalendar=!0,G([].concat(Object(c.a)(_),[e]));z(Object(c.a)(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)("main",{children:[!N&&Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(j,{getForecast:J})}}),Object(h.jsx)(m.b,{exact:!0,path:"/results",render:function(){return Object(h.jsx)(p,{notice:H})}}),Object(h.jsx)(m.b,{exact:!0,path:"/good_weather",render:function(){return Object(h.jsx)(O,{suitableHours:A,addToCalendar:B})}}),Object(h.jsx)(m.b,{exact:!0,path:"/calendar",render:function(){return Object(h.jsx)(g,{calendar:_,addToCalendar:B})}}),Object(h.jsx)(m.b,{exact:!0,path:"/404",render:function(){return Object(h.jsx)(y,{errorCode:404,clearSelected:Y})}}),Object(h.jsx)(m.a,{to:"/404"})]}),0!==N&&Object(h.jsx)(y,{errorCode:N,clearSelected:Y})]})]})},q=Object(h.jsxs)(s.a,{children:[" ",Object(h.jsx)(z,{})," "]});a.a.render(q,document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ac6db133.chunk.js.map