(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BM80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var i=n("hosL"),s=n("NWYn"),o=n.n(s);class r extends i.a{constructor(){super(...arguments),this.state={time:Date.now(),count:10},this.updateTime=()=>{this.setState({time:Date.now()})},this.increment=()=>{this.setState({count:this.state.count+1})}}componentDidMount(){this.timer=setInterval(this.updateTime,1e3)}componentWillUnmount(){clearInterval(this.timer)}render(t,e){var{user:n}=t,{time:s,count:r}=e;return Object(i.d)("div",{class:o.a.profile},Object(i.d)("h1",null,"Profile: ",n),Object(i.d)("p",null,"This is the user profile for a user named ",n,"."),Object(i.d)("div",null,"Current time: ",new Date(s).toLocaleString()),Object(i.d)("p",null,Object(i.d)("button",{onClick:this.increment},"Click Me")," ","Clicked ",r," times."))}}},NWYn:function(t){t.exports={profile:"profile__t2Dqz"}}}]);
//# sourceMappingURL=route-profile.chunk.bfcd7.esm.js.map