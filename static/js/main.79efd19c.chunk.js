(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),s=a(10),i=a(11),o=a(13),m=a(12),d=a(14),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?l.a.createElement("div",null,l.a.createElement("h2",null,"Something went wrong."),l.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),l.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children?this.props.children:null}}]),t}(l.a.Component),u=a(50),p=a.n(u),E=a(51),v=a.n(E),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSelect=function(e){"1"===e.target.value?(console.log("You selected standard!"),a.setState({units:""})):"2"===e.target.value?(console.log("You selected imperial!"),a.setState({units:"&units=imperial"})):"3"===e.target.value&&(console.log("You selected metric!"),a.setState({units:"&units=metric"}))},a.handleZipChange=function(e){var t=e.target.value;a.setState({zip:t})},a.handleCCChange=function(e){var t=e.target.value;a.setState({cc:t})},a.handleCheckBox=function(e){!0===e.target.checked?(console.log("The textbox is checked!"),a.theinterval=setInterval(function(){console.log("weather fetched again"),a.weatherTrack()},6e4)):!1===e.target.checked&&(console.log("the textbox is unchecked :("),clearInterval(a.theinterval))},a.weatherTrack=function(){fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(a.state.zip,",").concat(a.state.cc,"&APPID=8e44c500eae35929bb2690f0b5c52ac5").concat(a.state.units),{headers:{Accept:"application/json;"}}).then(function(e){return e.json()}).then(function(e){if(a.state.data.length<60){var t=a.state.data.slice();t.push(e);var n=a.state.lineData.slice();n[0].points.push({x:e.wind.deg,y:e.wind.speed}),a.setState({data:t,lineData:n})}else{var l=a.state.data.slice();l.shift(),l.push(e)}})},a.getWeather=function(){console.log("you clicked get weather!!"),fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(a.state.zip,",").concat(a.state.cc,"&APPID=8e44c500eae35929bb2690f0b5c52ac5").concat(a.state.units),{headers:{Accept:"application/json;"}}).then(function(e){return e.json()}).then(function(e){return a.setState({data:[e],temp:e.main.temp,press:e.main.pressure,humid:e.main.humidity,mintemp:e.main.temp_min,maxtemp:e.main.temp_max,windspeed:e.wind.speed,winddeg:e.wind.deg,weathercondit:e.weather[0].main,weatherdescrip:e.weather[0].description,city:e.name,lineData:[{color:"steelblue",points:[{x:0,y:0},{x:e.wind.deg,y:e.wind.speed}]}]})})},a.combineWeather=function(){console.log("you clicked the Get the Weather button"),a.getWeather(),a.updateWeather()},a.state={zip:0,data:[],temp:0,press:0,humid:0,mintemp:0,maxtemp:0,windspeed:0,winddeg:0,weathercondit:"empty",weatherdescrip:"empty",city:"???",cc:"",units:"",lineData:[{color:"steelblue",points:[{x:0,y:0},{x:1.5,y:4}]}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"weather",onClick:function(){return window.open("https://openweathermap.org/api")}},"Weather API"," "),l.a.createElement("div",{className:"powered",onClick:function(){return window.open("https://openweathermap.org/api")}}," ","Powered by OpenWeatherMap"," "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"CenterDiv"},l.a.createElement("div",{className:"Table"},l.a.createElement("div",{className:"Row"},l.a.createElement("div",{className:"Cell1"}," Zip Code: "),l.a.createElement("input",{className:"Cell",onChange:function(t){return e.handleZipChange(t)}})),l.a.createElement("div",{className:"Row"},l.a.createElement("div",{className:"Cell1"}," Country Code: "),l.a.createElement("input",{className:"Cell",onChange:function(t){return e.handleCCChange(t)}}),l.a.createElement("span",{className:"smallLetters"}," Ex: 'us' ")))),l.a.createElement("br",null),l.a.createElement("div",{className:"CenterDiv"},l.a.createElement("div",{className:"Table"},l.a.createElement("div",{className:"Row"},l.a.createElement("span",{className:"Cell2"}," Change Units: "),l.a.createElement("select",{className:"Cell",onChange:this.handleSelect},l.a.createElement("option",{value:"1"}," Standard "),l.a.createElement("option",{value:"2"}," Imperial "),l.a.createElement("option",{value:"3"}," Metric "))),l.a.createElement("div",{className:"Row"},l.a.createElement("div",{className:"Cell2"}," Track: "),l.a.createElement("input",{className:"Cell3",type:"checkbox",onChange:this.handleCheckBox})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{color:"",variant:"contained",className:"Clickable",onClick:this.getWeather}," ","Get the Weather"," "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"bold"}," ","Current Weather Conditions for ",this.state.city," "),l.a.createElement("br",null),l.a.createElement("div",{className:"WeatherData"},l.a.createElement("div",{className:"Table"},l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Temperature:")," ",l.a.createElement("div",{className:"Cell"},this.state.temp)),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Pressure:")," ",l.a.createElement("div",{className:"Cell"},this.state.press)),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Humidity:")," ",l.a.createElement("div",{className:"Cell"},this.state.humid)),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Min Temperature:")," ",l.a.createElement("div",{className:"Cell"},this.state.mintemp)),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Max Temperature:")," ",l.a.createElement("div",{className:"Cell"},this.state.maxtemp)),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Wind:")," ",l.a.createElement("div",{className:"Cell"},this.state.windspeed," at ",this.state.winddeg," degrees")),l.a.createElement("div",{className:"Row"}," ",l.a.createElement("div",{className:"Cell1"},"Weather Conditions:")," ",l.a.createElement("div",{className:"Cell"},this.state.weathercondit," (",this.state.weatherdescrip,")")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{fontWeight:900}}," ","Wind Speed + Degrees Linechart in ",this.state.city,":"," "),l.a.createElement(p.a,{width:window.innerWidth-150,height:400,data:this.state.lineData,yLabel:"Wind Speed",xLabel:"Wind Degrees",interpolate:"cardinal",xMax:this.state.winddeg+200,yMax:this.state.windspeed+5}),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(l.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"App"},l.a.createElement(w,null)))}}]),t}(l.a.Component),b=(a(140),document.getElementById("root"));r.a.render(l.a.createElement(C,null),b)},53:function(e,t,a){e.exports=a(141)}},[[53,1,2]]]);
//# sourceMappingURL=main.79efd19c.chunk.js.map