(this["webpackJsonpandela-challenge4"]=this["webpackJsonpandela-challenge4"]||[]).push([[0],[,function(e,a,t){e.exports={Display:"Display_Display__MSwjf",Results:"Display_Results__L6i6R",Impact:"Display_Impact__2_-Ct",Title:"Display_Title__3y-73"}},,,function(e,a,t){e.exports={Heading:"App_Heading__2J-0I",Loading:"App_Loading__1HeUi"}},,,,,function(e,a,t){e.exports={Header:"Header_Header__2C_Ub"}},function(e,a,t){e.exports={Form:"Form_Form__2boAo"}},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),i=t.n(r),s=(t(18),t(2)),o=t(3),c=t(7),m=t(8),u=t(12),d=t(11),p=t(9),E=t.n(p),v=function(e){var a=e.heading;return l.a.createElement("div",{className:E.a.Header},l.a.createElement("h1",{className:a},"ESTIMATOR"))},g=t(10),h=t.n(g),y=function(e){var a=e.regionDataChanged,t=e.otherInputChanged,n=e.clicked;return l.a.createElement("div",{className:h.a.Form},l.a.createElement("h2",{className:"heading2"},"Enter Data"),l.a.createElement("form",{className:"MyForm"},l.a.createElement("div",{className:"div"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"regionName"},"Region Name"),l.a.createElement("input",{onChange:a,required:!0,"data-region-name":!0,type:"text",name:"name",id:"regionName",placeholder:"Example... Africa"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"avgAge"},"Average Age"),l.a.createElement("input",{onChange:a,required:!0,"data-avg-age":!0,type:"text",name:"avgAge",id:"avgAge",placeholder:"Example... 19.7"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"avgDailyIncomeInUSD"},"Average Daily Income In US Dollar"),l.a.createElement("input",{onChange:a,required:!0,"data-avg-daily-income-in-usd":!0,type:"text",name:"avgDailyIncomeInUSD",id:"avgDailyIncomeInUSD",placeholder:"Example... 5"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"avgDailyIncomePopulation"},"Average Daily Income Population"),l.a.createElement("input",{onChange:a,required:!0,"data-avg-daily-income-population":!0,type:"text",name:"avgDailyIncomePopulation",id:"avgDailyIncomePopulation",placeholder:"Example... 0.71"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"population"},"Population"),l.a.createElement("input",{onChange:t,required:!0,"data-population":!0,type:"text",name:"population",id:"population",placeholder:"Example... 66622705"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"timeToElapse"},"Time to elapse"),l.a.createElement("input",{onChange:t,required:!0,"data-time-to-elapse":!0,type:"text",name:"timeToElapse",id:"timeToElapse",placeholder:"Example... 58"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"reportedCases"},"Reported Cases"),l.a.createElement("input",{onChange:t,required:!0,"data-reported-cases":!0,type:"text",name:"reportedCases",placeholder:"Example... 674",id:"reportedCases"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"totalHospitalBeds"},"Total Hospital Beds"),l.a.createElement("input",{onChange:t,required:!0,"data-total-hospital-beds":!0,type:"text",name:"totalHospitalBeds",placeholder:"Example... 1380614",id:"totalHospitalBeds"})),l.a.createElement("div",{className:"selection"},l.a.createElement("label",{htmlFor:"periodType"},"Period Type"),l.a.createElement("select",{onChange:t,required:!0,"data-period-type":!0,name:"periodType",id:"periodType"},l.a.createElement("option",{defaultValue:!0,value:null},"Select Period Type"),l.a.createElement("option",{value:"days"},"days"),l.a.createElement("option",{value:"weeks"},"weeks"),l.a.createElement("option",{value:"months"},"months")))),l.a.createElement("input",{onClick:n,"data-go-estimate":!0,type:"submit",value:"Estimate"})))},f=t(1),T=t.n(f),I=function(e){var a=e.results,t=e.format,n=a.impact,r=a.severeImpact;return l.a.createElement("div",{className:T.a.Display},l.a.createElement("h2",null,"Estimated Results"),l.a.createElement("div",{className:T.a.Results},l.a.createElement("div",{className:T.a.Impact},l.a.createElement("h3",null,"Impact"),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Currently Infected: "),l.a.createElement("span",null,t(n.currentlyInfected)||t(6740))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Infections By Requested Time: "),l.a.createElement("span",null,t(n.infectionsByRequestedTime)||t(3533701120))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Severe Cases By Requested Time: "),l.a.createElement("span",null,t(n.severeCasesByRequestedTime)||t(530055168))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Hospital Beds By Requested Time: "),l.a.createElement("span",null,t(n.hospitalBedsByRequestedTime)||t(-529571953))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Cases For ICU By Requested Time: "),l.a.createElement("span",null,t(n.casesForICUByRequestedTime)||t(176685056))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Cases For Ventilators By Requested Time: "),l.a.createElement("span",null,t(n.casesForVentilatorsByRequestedTime)||t(70674022))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Dollars InFlight: "),l.a.createElement("span",null,t(n.dollarsInFlight)||t(727589060608)))),l.a.createElement("div",{className:T.a.Impact},l.a.createElement("h3",null,"Severe Impact"),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Currently Infected: "),l.a.createElement("span",null,t(r.currentlyInfected)||t(33700))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Infections By Requested Time: "),l.a.createElement("span",null,t(r.infectionsByRequestedTime)||t(17668505600))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Severe Cases By Requested Time: "),l.a.createElement("span",null,t(r.severeCasesByRequestedTime)||t(2650275840))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Hospital Beds By Requested Time: "),l.a.createElement("span",null,t(r.hospitalBedsByRequestedTime)||t(-2649792625))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Cases For ICU By Requested Time: "),l.a.createElement("span",null,t(r.casesForICUByRequestedTime)||t(883425280))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Cases For Ventilators By Requested Time: "),l.a.createElement("span",null,t(r.casesForVentilatorsByRequestedTime)||t(353370112))),l.a.createElement("div",null,l.a.createElement("span",{className:T.a.Title},"Dollars InFlight: "),l.a.createElement("span",null,t(r.dollarsInFlight)||t(3637945303040))))))},C=t(4),b=t.n(C),N=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).formatNumber=function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e},n.regionalInputHandler=function(e){var a=n.getInputValues(e),t=a.name,l=a.value;n.setState((function(e){var a=e.data,n=a.region;return n=Object(o.a)({},n,{},Object(s.a)({},t,l)),{data:a=Object(o.a)({},a,{region:n})}}))},n.otherInputHandler=function(e){var a=n.getInputValues(e),t=a.name,l=a.value;n.setState((function(e){var a=e.data;return{data:a=Object(o.a)({},a,{},Object(s.a)({},t,l))}}))},n.estimate=function(){n.setState({input:!1})},n.state={input:!0,data:{region:{name:null,avgAge:null,avgDailyIncomeInUSD:null,avgDailyIncomePopulation:null},periodType:null,timeToElapse:null,reportedCases:null,population:null,totalHospitalBeds:null},results:{data:{},impact:{},severeImpact:{}}},n}return Object(m.a)(t,[{key:"getInputValues",value:function(e){return{name:e.target.getAttribute("name"),value:Number.parseFloat(e.target.value)||e.target.value}}},{key:"render",value:function(){var e=this.state.input,a=this.state.results,t=e?l.a.createElement(y,{regionDataChanged:this.regionalInputHandler,otherInputChanged:this.otherInputHandler,clicked:this.estimate}):l.a.createElement(I,{format:this.formatNumber,results:a});return l.a.createElement("div",{className:b.a.App},l.a.createElement(v,{heading:b.a.Heading}),t)}}]),t}(n.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/andela-challenge4",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/andela-challenge4","/service-worker.js");B?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(a,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.5c87a730.chunk.js.map