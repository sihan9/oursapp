(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=(a(27),a(2)),o=a(3),i=a(5),m=a(4),u=a(6),p=a(9),h=a(11),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentWillUnmount=function(){a.setState=function(e,t){}},a.handleName=function(e){a.setState({user:e.target.value})},a.handlePwd=function(e){a.setState({password:e.target.value})},a.check=function(){for(var e=!1,t=0;t<a.state.data.length;t++)a.state.user===a.state.data[t].username&&a.state.password===a.state.data[t].password&&(e=!0,localStorage.setItem("data",JSON.stringify(a.state.data[t])));e?a.props.history.push("/home/shouye"):alert("\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef\uff01")},a.state={data:[],user:"",password:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.74:8080/manager").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://101.37.172.74:8080/manager").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Login"},c.a.createElement("div",{className:"head"},c.a.createElement("img",{className:"title1",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/title1.png?raw=true"}),c.a.createElement("img",{className:"title2",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/title2.png?raw=true"})),c.a.createElement("div",{className:"middle"},c.a.createElement("img",{className:"header",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/head.png?raw=true"}),c.a.createElement("form",{method:"GET"},c.a.createElement("div",{className:"users"},c.a.createElement("img",{className:"user",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/user.png?raw=true"}),c.a.createElement("input",{className:"username",placeholder:"\u8f93\u5165\u7528\u6237\u540d",onChange:this.handleName})),c.a.createElement("div",{className:"users"},c.a.createElement("img",{className:"user",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/pwd.png?raw=true"}),c.a.createElement("input",{className:"username",placeholder:"\u8f93\u5165\u5bc6\u7801",onChange:this.handlePwd,type:"password"})),c.a.createElement("div",{className:"users"},c.a.createElement("img",{className:"user",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/Edit.png?raw=true"}),c.a.createElement("input",{className:"code",placeholder:"\u9a8c\u8bc1\u7801"}),c.a.createElement("canvas",{id:"canvas",width:"100",height:"30",onClick:this.draw}),c.a.createElement("img",{className:"update",src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/update.png?raw=true"}),c.a.createElement("p",null,"\u6362\u4e00\u5f20")),c.a.createElement("input",{type:"submit",className:"loginbtn",value:"\u767b\u5f55",onClick:this.check}))))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"shouye-1"},c.a.createElement("div",{className:"box-3",style:{marginBottom:"40px"}},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true"}),c.a.createElement("input",{type:"search",placeholder:"\u8bf7\u67e5\u8be2\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u6216\u7528\u6237\u540d",onKeyDown:function(t){return e.search(t)}})),c.a.createElement("div",{className:"shouye-1-2"},"\u4eca\u65e5\u7d2f\u8ba1\u6ce8\u518c\u91cf30000"),c.a.createElement("div",{className:"shouye-1-2",style:{marginLeft:"80px"}},"\u4eca\u65e5\u8bbf\u95ee\u91cf20000"),c.a.createElement("div",{style:{width:"550px",height:"215px",backgroundColor:"green",float:"left"}},"\u56fe\u7247"),c.a.createElement("div",{style:{width:"550px",height:"215px",backgroundColor:"yellow",float:"left"}},"\u56fe\u7247"),c.a.createElement("div",{className:"shouye-1-2",style:{marginLeft:"80px"}},"\u6ce8\u518c\u91cf20000"))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){e.setState=function(e,t){}},e.delete=function(e){console.log(e);var t=localStorage.getItem("data");1==JSON.parse(t).jurisdiction||2==JSON.parse(t).jurisdiction?fetch("http://101.37.172.74:8080/user/delete?phone="+e.phone).then((function(e){return e.json()})).then((function(e){console.log("ok")})):alert("\u6743\u9650\u4e0d\u8db3\uff01")},e.state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.74:8080/user").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://101.37.172.74:8080/user").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"box-3"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true"}),c.a.createElement("input",{type:"search",placeholder:"\u8bf7\u67e5\u8be2\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u6216\u7528\u6237\u540d"})),c.a.createElement("p",{className:"user-1"},"\u7528\u6237\u5217\u8868"),c.a.createElement("div",{className:"user-2"},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",null,"\u7528\u6237ID"),c.a.createElement("p",null,"\u7528\u6237\u540d"),c.a.createElement("p",{style:{paddingLeft:"92px"}},"\u6027\u522b"),c.a.createElement("p",{style:{paddingLeft:"155px"}},"\u5b66\u6821"),c.a.createElement("p",{style:{paddingLeft:"195px"}},"\u64cd\u4f5c")),this.state.data.map((function(t,a){return c.a.createElement("div",{className:"user-3",key:a},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",null,t.phone),c.a.createElement("p",{style:{width:"60px"}},t.name),c.a.createElement("p",null,t.sex),c.a.createElement("p",{style:{width:"160px"}},t.school),c.a.createElement("button",{onClick:function(){return e.delete(t)}},"\u5220\u9664"))})))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){e.setState=function(e,t){}},e.delete=function(e){console.log(e),fetch("http://101.37.172.74:8080/title/delete?phone="+e.phone).then((function(e){return e.json()})).then((function(e){console.log("ok")}))},e.state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.74:8080/title").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://101.37.172.74:8080/title").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"box-3"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true"}),c.a.createElement("input",{type:"search",placeholder:"\u8bf7\u67e5\u8be2\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u6216\u7528\u6237\u540d",onKeyDown:function(t){return e.search(t)}})),c.a.createElement("p",{className:"title-1"},"\u5e16\u5b50\u7ba1\u7406"),c.a.createElement("div",{className:"title-2"},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",null,"\u7528\u6237ID"),c.a.createElement("p",{style:{paddingLeft:"110px"}},"\u6807\u9898"),c.a.createElement("p",{style:{paddingLeft:"220px"}},"\u5185\u5bb9"),c.a.createElement("p",{style:{paddingLeft:"200px"}},"\u65f6\u95f4"),c.a.createElement("p",{style:{paddingLeft:"90px"}},"\u64cd\u4f5c")),this.state.data.map((function(t,a){return c.a.createElement("div",{className:"title-3",key:a},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",{style:{width:"100px"}},t.phone),c.a.createElement("p",{style:{width:"135px"}},t.title),c.a.createElement("p",{style:{width:"330px"}},t.content),c.a.createElement("p",null,t.time),c.a.createElement("button",{onClick:function(){return e.delete(t)}},"\u5220\u9664"))})))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){e.setState=function(e,t){}},e.delete=function(e){console.log(e),fetch("http://101.37.172.74:8080/feedback/delete?phone="+e.phone).then((function(e){return e.json()})).then((function(e){console.log("ok")}))},e.state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.74:8080/FeedBack").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://101.37.172.74:8080/FeedBack").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"box-3"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true"}),c.a.createElement("input",{type:"search",placeholder:"\u8bf7\u67e5\u8be2\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u6216\u7528\u6237\u540d",onKeyDown:function(t){return e.search(t)}})),c.a.createElement("p",{className:"feekback-1"},"\u53cd\u9988\u5217\u8868"),c.a.createElement("div",{className:"feekback-2"},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",{style:{paddingLeft:"60px"}},"\u7528\u6237ID"),c.a.createElement("p",{style:{paddingLeft:"85px"}},"\u53cd\u9988\u7c7b\u578b"),c.a.createElement("p",{style:{paddingLeft:"145px"}},"\u8be6\u7ec6\u4fe1\u606f"),c.a.createElement("p",{style:{paddingLeft:"180px"}},"\u90ae\u7bb1"),c.a.createElement("p",{style:{paddingLeft:"105px"}},"\u64cd\u4f5c")),this.state.data.map((function(t,a){return c.a.createElement("div",{className:"feekback-3",key:a},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",{style:{width:"100px"}},t.phone),c.a.createElement("p",{style:{width:"140px"}},t.type),c.a.createElement("p",{style:{width:"235px"}},t.content),c.a.createElement("p",{style:{width:"160px"}},t.email),c.a.createElement("button",{onClick:function(){return e.delete(t)}},"\u5220\u9664"))})))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){e.setState=function(e,t){}},e.delete=function(e){console.log(e);var t=localStorage.getItem("data");1==JSON.parse(t).jurisdiction?fetch("http://101.37.172.74:8080/manager/delete?id="+e.id).then((function(e){return e.json()})).then((function(e){console.log("ok")})):alert("\u6743\u9650\u4e0d\u591f\uff01")},e.check=function(){var t=localStorage.getItem("data");1==JSON.parse(t).jurisdiction?e.props.history.push("/home/add"):alert("\u6743\u9650\u4e0d\u591f\uff01")},e.state={data:[]},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://101.37.172.74:8080/manager").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"componentDidUpdate",value:function(){var e=this;fetch("http://101.37.172.74:8080/manager").then((function(e){return e.json()})).then((function(t){e.setState({data:t.content})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"box-3"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E6%90%9C%E7%B4%A2.png?raw=true"}),c.a.createElement("input",{type:"search",placeholder:"\u8bf7\u67e5\u8be2\u8981\u67e5\u8be2\u7684\u7528\u6237ID\u6216\u7528\u6237\u540d",onKeyDown:function(t){return e.search(t)}})),c.a.createElement("p",{className:"manager-1"},"\u7528\u6237\u5217\u8868"),c.a.createElement("div",{className:"manager-2"},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",{style:{paddingLeft:"50px"}},"ID"),c.a.createElement("p",{style:{paddingLeft:"45px"}},"\u7528\u6237\u540d"),c.a.createElement("p",{style:{paddingLeft:"85px"}},"\u59d3\u540d"),c.a.createElement("p",{style:{paddingLeft:"50px"}},"\u6027\u522b"),c.a.createElement("p",{style:{paddingLeft:"45px"}},"\u804c\u4f4d"),c.a.createElement("p",{style:{paddingLeft:"70px"}},"\u624b\u673a\u53f7"),c.a.createElement("p",{style:{paddingLeft:"115px"}},"\u90ae\u7bb1"),c.a.createElement("p",{style:{paddingLeft:"90px"}},"\u64cd\u4f5c")),this.state.data.map((function(t,a){return c.a.createElement("div",{className:"manager-3",key:a},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("p",null,t.id),c.a.createElement("p",{style:{width:"90px"}},t.username),c.a.createElement("p",{style:{width:"45px"}},t.name),c.a.createElement("p",null,t.sex),c.a.createElement("p",null,t.work),c.a.createElement("p",{style:{width:"100px"}},t.phone),c.a.createElement("p",{style:{width:"160px",paddingLeft:"35px"}},t.email),c.a.createElement("button",{onClick:function(){return e.delete(t)}},"\u5220\u9664"))})),c.a.createElement("button",{onClick:this.check,className:"manager-4"},"\u6dfb\u52a0\u7ba1\u7406\u5458"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeUser=function(e){a.setState({user:e.target.value})},a.changeId=function(e){a.setState({ID:e.target.value})},a.changeName=function(e){a.setState({name:e.target.value})},a.changeSex=function(e){a.setState({sex:e.target.value})},a.changeWork=function(e){a.setState({work:e.target.value})},a.changePhone=function(e){a.setState({phone:e.target.value})},a.changeEmail=function(e){a.setState({email:e.target.value})},a.changePwd=function(e){a.setState({password:e.target.value})},a.changeJurisdiction=function(e){a.setState({jurisdiction:e.target.value})},a.onSubmit=function(e){e.preventDefault(),console.log(a.state),fetch("http://101.37.172.74:8080/manager",{method:"POST",body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.content&&a.props.history.push("/home/manager")}))},a.check=function(){a.props.history.push("/home/manager")},a.state={ID:"",user:"",name:"",password:"",sex:"",work:"",phone:"",email:"",jurisdiction:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.onSubmit,className:"add-1"},c.a.createElement("div",null,c.a.createElement("p",null,"ID"),c.a.createElement("input",{onChange:this.changeId,type:"text",name:"id"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u7528\u6237\u540d"),c.a.createElement("input",{onChange:this.changeUser,type:"text",name:"username"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u59d3\u540d"),c.a.createElement("input",{onChange:this.changeName,type:"text",name:"name"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u5bc6\u7801"),c.a.createElement("input",{onChange:this.changePwd,type:"text",name:"pwd"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u6027\u522b"),c.a.createElement("input",{onChange:this.changeSex,type:"text",name:"sex"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u804c\u4f4d"),c.a.createElement("input",{onChange:this.changeWork,type:"text",name:"work"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u624b\u673a\u53f7"),c.a.createElement("input",{onChange:this.changePhone,type:"text",name:"phone"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u90ae\u7bb1"),c.a.createElement("input",{onChange:this.changeEmail,type:"text",name:"email"})),c.a.createElement("div",null,c.a.createElement("p",null,"\u6743\u9650"),c.a.createElement("input",{onChange:this.changeJurisdiction,type:"text",name:"jurisdiction"})),c.a.createElement("input",{type:"submit",value:"\u6dfb\u52a0",className:"add-2",onClick:this.onClick}),c.a.createElement("button",{onClick:this.check},"\u8fd4\u56de")))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"box-1-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/title1.png?raw=true"}),c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/title2.png?raw=true",style:{paddingTop:"35px"}}),c.a.createElement(p.b,{to:"/"},c.a.createElement("button",null,"\u9000\u51fa"))),c.a.createElement("div",{className:"box-2"},c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/home,%E9%A6%96%E9%A1%B5,%E4%B8%BB%E9%A1%B5.png?raw=true"}),c.a.createElement(p.b,{to:"/home/shouye"},"\u9996\u9875")),c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/my.png?raw=true"}),c.a.createElement(p.b,{to:"/home/user"},"\u7528\u6237\u7ba1\u7406")),c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86.png?raw=true"}),c.a.createElement(p.b,{to:"/home/post"},"\u5e16\u5b50\u7ba1\u7406")),c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E5%8F%8D%E9%A6%88,%E6%96%B0%E5%BB%BA,%E5%86%99,feedback.png?raw=true"}),c.a.createElement(p.b,{to:"/home/feedback"},"\u53cd\u9988\u7ba1\u7406")),c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/%E5%B9%B3%E5%8F%B0%E7%AE%A1%E7%90%86%E2%80%94%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png?raw=true"}),c.a.createElement(p.b,{to:"/home/manager"},"\u7cfb\u7edf\u7ba1\u7406")),c.a.createElement("div",{className:"box-2-1"},c.a.createElement("img",{src:"https://github.com/sihan9/oursapp/blob/master/images/Backstage/ic_favorite_24px.png?raw=true"}),c.a.createElement(p.b,{to:"/home/recommend"},"\u63a8\u8350\u7ba1\u7406"))),c.a.createElement("div",{className:"component"},c.a.createElement(h.d,null,c.a.createElement(h.b,{path:"/home/shouye",component:E}),c.a.createElement(h.b,{path:"/home/user",component:g}),c.a.createElement(h.b,{path:"/home/post",component:f}),c.a.createElement(h.b,{path:"/home/feedback",component:b}),c.a.createElement(h.b,{path:"/home/manager",component:y}),c.a.createElement(h.b,{path:"/home/add",component:v}),c.a.createElement(h.a,{from:"/",to:"/shouye"}))))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/",component:d}),c.a.createElement(h.b,{path:"/home",component:k})))}}]),t}(n.Component);l.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c71b825b.chunk.js.map