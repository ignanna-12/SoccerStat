(this.webpackJsonpsendbox=this.webpackJsonpsendbox||[]).push([[0],{122:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),c=a.n(s),r=a(34),o=a.n(r),i=(a(122),a.p,a(93),a(123),a(83)),u=a.n(i),l=a.p+"static/media/header1.bf29f148.jpg",d=function(){return Object(n.jsxs)("div",{className:u.a.block,children:[Object(n.jsxs)("h1",{className:u.a.h1,children:["SOCCER",Object(n.jsx)("br",{}),"STAT"]}),Object(n.jsx)("img",{src:l,className:u.a.img})]})},m=a(55),h=a.n(m),j=a(35),p=function(e){var t=e.season,a=e.filterValueL;return Object(n.jsxs)("div",{className:h.a.block_buttons,children:[Object(n.jsx)(j.b,{to:"/Leagues/"+t+"/"+a,children:Object(n.jsx)("button",{className:h.a.button,children:"\u0421\u041f\u0418\u0421\u041e\u041a \u041b\u0418\u0413"})}),Object(n.jsx)(j.b,{to:"/Teams",children:Object(n.jsx)("button",{className:h.a.button,children:"\u0421\u041f\u0418\u0421\u041e\u041a \u041a\u041e\u041c\u0410\u041d\u0414"})}),Object(n.jsx)(j.b,{to:"/LeagueCalendar",children:Object(n.jsx)("button",{className:h.a.button,children:"\u041a\u0410\u041b\u0415\u041d\u0414\u0410\u0420\u042c \u041b\u0418\u0413\u0418"})}),Object(n.jsx)(j.b,{to:"/TeamCalendar",children:Object(n.jsx)("button",{className:h.a.button,children:"\u041a\u0410\u041b\u0415\u041d\u0414\u0410\u0420\u042c \u041a\u041e\u041c\u0410\u041d\u0414\u042b"})})]})},b=a(17),_=a(27),O=a(28),T=a(32),E=a(31),f=a(24),g=a(18),S=a(39),v=a.n(S),C=a(49),x=a(7),D=a(104).create({baseURL:"https://api.football-data.org/v2/",headers:{"X-Auth-Token":"405fb14cdc2b47eca10a85b6f6d1a87e"}}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return D.get("competitions/"+e+"/matches?dateFrom="+t+"&dateTo="+a).then((function(e){return e.data}))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return D.get("teams/"+e+"/matches?dateFrom="+t+"&dateTo="+a).then((function(e){return e.data}))},y=a(26),F=a.n(y),N={matches:[],competitions:{},name:"",area:{},utcDate:"",homeTeam:"",awayTeam:"",status:"",selectedTeam:"57",selectedDateFrom:F()().subtract(1,"years").format("YYYY-MM-DD"),selectedDateTo:F()().subtract(-1,"years").format("YYYY-MM-DD"),nameSelectedTeam:"Arsenal FC"},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEAM_CALENDAR":return Object(x.a)(Object(x.a)({},e),{},{matches:t.matches});case"SET_TEAM_NAME":return Object(x.a)(Object(x.a)({},e),{},{name:t.name});case"SET_TEAM_UTCDATE":return Object(x.a)(Object(x.a)({},e),{},{utcDate:t.utcDate});case"SET_TEAM_HOMETEAM":return Object(x.a)(Object(x.a)({},e),{},{homeTeam:t.homeTeam});case"SET_TEAM_AWAYTEAM":return Object(x.a)(Object(x.a)({},e),{},{awayTeam:t.awayTeam});case"SET_SELECTED_TEAM":return Object(x.a)(Object(x.a)({},e),{},{selectedTeam:t.selectedTeam});case"SET_SELECTED_DATE_FROM":return Object(x.a)(Object(x.a)({},e),{},{selectedDateFrom:t.selectedDateFrom});case"SET_SELECTED_DATE_TO":return Object(x.a)(Object(x.a)({},e),{},{selectedDateTo:t.selectedDateTo});case"SET_NAME_SELECTED_TEAM":return Object(x.a)(Object(x.a)({},e),{},{nameSelectedTeam:t.nameSelectedTeam});default:return e}},w=a(44),M=a.n(w),U=function(e){var t=e.homeTeam,a=e.awayTeam,s=e.date,c=new Date(s),r=c.getMonth(),o=c.getDate(),i=c.getFullYear();return Object(n.jsxs)("div",{className:M.a.m,children:[Object(n.jsx)("p",{children:t})," ",Object(n.jsx)("p",{children:":"})," ",Object(n.jsx)("p",{children:a}),Object(n.jsxs)("p",{className:M.a.date,children:[o," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][r]," ",i]})]})},V=function(e){var t=e.name,a=e.matches;return Object(n.jsxs)("div",{className:M.a.block,children:[Object(n.jsxs)("h1",{className:M.a.h1,children:["\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c ",t||"Arsenal FC"]}),a.map((function(e){return Object(n.jsx)(U,{homeTeam:e.homeTeam.name,awayTeam:e.awayTeam.name,date:e.utcDate},e.id)}))]})},Y=a(154),G=a(150),q=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"handleDateFromChange",value:function(e,t){this.props.requestTeamCalendar(this.props.id,t,this.props.dateTo),this.props.setSelectedDateFrom(t)}},{key:"handleDateToChange",value:function(e,t){this.props.requestTeamCalendar(this.props.id,this.props.dateFrom,t),this.props.setSelectedDateTo(t)}},{key:"componentDidMount",value:function(){this.props.requestTeamCalendar(this.props.match.params.id,this.props.dateFrom,this.props.dateTo)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:M.a.top_row,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(Y.b,{direction:"vertical",className:M.a.search,children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441:",Object(n.jsx)(G.a,{onChange:this.handleDateFromChange.bind(this),defaultValue:F()(this.props.dateFrom,"YYYY-MM-DD")})," ","\u0434\u043e:"," ",Object(n.jsx)(G.a,{onChange:this.handleDateToChange.bind(this),defaultValue:F()(this.props.dateTo,"YYYY-MM-DD")})]})}),Object(n.jsx)(V,{matches:this.props.matches,name:this.props.match.params.team})]})}}]),a}(c.a.Component),P=Object(g.d)(Object(f.b)((function(e){return{matches:e.teamsCalendar.matches,id:e.teamsCalendar.selectedTeam,dateFrom:e.teamsCalendar.selectedDateFrom,dateTo:e.teamsCalendar.selectedDateTo,nameSelectedTeam:e.teamsCalendar.nameSelectedTeam}}),{requestTeamCalendar:function(e,t,a){return function(){var n=Object(C.a)(v.a.mark((function n(s){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A(e,t,a);case 2:c=n.sent,s({type:"SET_TEAM_CALENDAR",matches:c.matches});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setSelectedDateFrom:function(e){return{type:"SET_SELECTED_DATE_FROM",selectedDateFrom:e}},setSelectedDateTo:function(e){return{type:"SET_SELECTED_DATE_TO",selectedDateTo:e}}}))(q),R=a(58),B=a.n(R),H=a.p+"static/media/all-poker-rooms.957bdc3f.png",I={competitions:[],totalLeaguesCount:3,currentSeason:{endDate:null},season:"2019",filterValue:""},W=function(e){return{type:"SET_FILTER_VALUE",filterValue:e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2020,t=arguments.length>1?arguments[1]:void 0;if(t){var a=t.filter((function(t){return!!t.currentSeason&&(new Date(t.currentSeason.endDate).getFullYear()===+e||new Date(t.currentSeason.startDate).getFullYear()===+e)}));return a}return[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LEAGUES":return Object(x.a)(Object(x.a)({},e),{},{competitions:t.competitions});case"SET_TOTAL_LEAGUES_COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalLeaguesCount:t.totalLeaguesCount});case"SET_SEASON":return Object(x.a)(Object(x.a)({},e),{},{season:t.season});case"SET_FILTER_VALUE":return Object(x.a)(Object(x.a)({},e),{},{filterValue:t.filterValue});default:return e}},K={teams:[],totalTeamsCount:3,year:2e3},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEAMS":return Object(x.a)(Object(x.a)({},e),{},{teams:t.teams});case"SET_TOTAL_TEAMS_COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalTeamsCount:t.totalTeamsCount});case"SET_YEAR":return Object(x.a)(Object(x.a)({},e),{},{year:t.year});default:return e}},Z=a(111),Q={season:"2021",selectedTeam:"57",selectedLeague:"2001",selectedDateFrom:"",selectedDateTo:""},$=function(e){return{type:"SET_SEASON",season:e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEASON":return Object(x.a)(Object(x.a)({},e),{},{season:t.season});case"SET_SELECTED_LEAGUE":return Object(x.a)(Object(x.a)({},e),{},{selectedLeague:t.selectedLeague});case"SET_SELECTED_TEAM":return Object(x.a)(Object(x.a)({},e),{},{selectedTeam:t.selectedTeam});case"SET_SELECTED_DATE_FROM":return Object(x.a)(Object(x.a)({},e),{},{selectedDateFrom:t.selectedDateFrom});case"SET_SELECTED_DATE_TO":return Object(x.a)(Object(x.a)({},e),{},{selectedDateTo:t.selectedDateTo});default:return e}},te={matches:[],competitions:{},name:"",area:{},ensignUrl:"",utcDate:"",homeTeam:"",awayTeam:"",selectedLeague:"",selectedDateFrom:"",selectedDateTo:""},ae=function(e){return{type:"SET_SELECTED_LEAGUE",selectedLeague:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LEAGUE_CALENDAR":return Object(x.a)(Object(x.a)({},e),{},{matches:t.matches});case"SET_LEAGUES_NAME":return Object(x.a)(Object(x.a)({},e),{},{name:t.name});case"SET_LEAGUES_ENSIGNURL":return Object(x.a)(Object(x.a)({},e),{},{ensignUrl:t.ensignUrl});case"SET_LEAGUES_UTCDATE":return Object(x.a)(Object(x.a)({},e),{},{utcDate:t.utcDate});case"SET_LEAGUES_HOMETEAM":return Object(x.a)(Object(x.a)({},e),{},{homeTeam:t.homeTeam});case"SET_LEAGUES_AWAYTEAM":return Object(x.a)(Object(x.a)({},e),{},{awayTeam:t.awayTeam});case"SET_SELECTED_LEAGUE":return Object(x.a)(Object(x.a)({},e),{},{selectedLeague:t.selectedLeague});case"SET_SELECTED_DATE_FROM":return Object(x.a)(Object(x.a)({},e),{},{selectedDateFrom:t.selectedDateFrom});case"SET_SELECTED_DATE_TO":return Object(x.a)(Object(x.a)({},e),{},{selectedDateTo:t.selectedDateTo});default:return e}},se=Object(g.c)({teamsPage:X,leaguesPage:z,userSetting:ee,leaguesCalendar:ne,teamsCalendar:k}),ce=Object(g.e)(se,Object(g.d)(Object(g.a)(Z.a))),re=function(e){var t=e.team,a=e.crestUrl,s=e.id;return Object(n.jsxs)(j.b,{className:B.a.team_row,to:"/TeamCalendar/"+s+"/"+t,onClick:function(e){!function(e,t){ce.dispatch({type:"SET_SELECTED_TEAM",selectedTeam:e}),ce.dispatch({type:"SET_NAME_SELECTED_TEAM",nameSelectedTeam:t})}(s,t)},children:[t,Object(n.jsx)("img",{className:B.a.img,src:a||H})]})},oe=function(e){return Object(n.jsx)("div",{className:B.a.teams_container,children:e.teams.map((function(e){return Object(n.jsx)(re,{team:e.name,crestUrl:e.crestUrl,id:e.id},e.id)}))})},ie=a(152),ue=ie.a.Search,le=function(e,t){if(""===t)return e;var a=e.filter((function(e){return e.name.toLowerCase().startsWith(t)}));return a},de=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={filterValue:""},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.props.requestTeams()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(ue,{className:B.a.search,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",onChange:function(t){return e.setState({filterValue:t.target.value.toLowerCase()})},enterButton:!0}),Object(n.jsx)(oe,{count:this.props.totalTeamsCount,teams:le(this.props.teams,this.state.filterValue)})]})}}]),a}(c.a.Component),me=Object(g.d)(Object(f.b)((function(e){return{teams:e.teamsPage.teams,totalTeamsCount:e.teamsPage.count}}),{requestTeams:function(){return function(){var e=Object(C.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("teams").then((function(e){return e.data}));case 2:a=e.sent,t({type:"SET_TEAMS",teams:a.teams}),t({type:"SET_TOTAL_TEAMS_COUNT",count:a.count});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(de),he=a(46),je=a.n(he),pe=function(e){var t=e.competition,a=(e.season,e.id),s=e.ensignUrl;return[2e3,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021].includes(a)?Object(n.jsxs)(j.b,{className:je.a.league_row,to:"/LeagueCalendar/"+a,onClick:function(e){!function(e){ce.dispatch(ae(e))}(a)},children:[t,Object(n.jsx)("img",{className:je.a.img,src:s||H})]}):Object(n.jsxs)("div",{className:je.a.blocks,children:[t,Object(n.jsx)("img",{className:je.a.img,src:s||H})]})},be=function(e){return Object(n.jsx)("div",{className:je.a.league_container,children:e.competitions&&e.competitions.map((function(t,a){return Object(n.jsx)(pe,{competition:t.name,id:t.id,ensignUrl:t.area.ensignUrl,season:e.competitions[a].currentSeason?e.competitions[a].currentSeason.endDate:" "},t.id)}))})},_e=ie.a.Search,Oe=function(e,t){if(""===t)return e;var a=e.filter((function(e){return e.name.toLowerCase().startsWith(t)}));return a},Te=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={filterValue:"",season:n.props.match.params.season?n.props.match.params.season:"2021"},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.props.requestCompetitions()}},{key:"componentDidUpdate",value:function(e){this.props.season!==e.season&&this.setState({season:this.props.season})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(_e,{className:je.a.search,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0433\u0438",onChange:function(t){return e.setState({filterValue:t.target.value.toLowerCase()})},enterButton:!0}),Object(n.jsx)(be,{count:this.props.totalLeaguesCount,competitions:Oe(J(this.state.season,this.props.competitions),this.state.filterValue)})]})}}]),a}(c.a.Component),Ee=Object(g.d)(Object(f.b)((function(e){return{competitions:e.leaguesPage.competitions,totalLeaguesCount:e.leaguesPage.totalLeaguesCount,season:e.userSetting.season,filterValue:e.leaguesPage.filterValue}}),{requestCompetitions:function(){return function(){var e=Object(C.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("competitions").then((function(e){return e.data}));case 2:a=e.sent,t({type:"SET_LEAGUES",competitions:a.competitions}),t({type:"SET_TOTAL_LEAGUES_COUNT",totalLeaguesCount:a.count});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setFilterValue:W,setSeason:$}))(Te),fe=a(92),ge=a.n(fe),Se=a(151),ve=Se.a.Option,Ce=function(e){},xe=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidMount",value:function(){ce.dispatch($(this.props.season))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:ge.a.block,children:[Object(n.jsxs)("h3",{className:ge.a.h3,children:["\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",Object(n.jsx)("br",{}),"\u0433\u043e\u0434"]}),Object(n.jsxs)(Se.a,{defaultValue:this.props.season,style:{width:120,height:32},onChange:Ce,children:[Object(n.jsx)(ve,{value:"2015",children:"2015"}),Object(n.jsx)(ve,{value:"2016",children:"2016"}),Object(n.jsx)(ve,{value:"2017",children:"2017"}),Object(n.jsx)(ve,{value:"2018",children:"2018"}),Object(n.jsx)(ve,{value:"2019",children:"2019"}),Object(n.jsx)(ve,{value:"2020",children:"2020"}),Object(n.jsx)(ve,{value:"2021",children:"2021"})]})]})}}]),a}(c.a.Component),De=Object(g.d)(Object(f.b)((function(e){return{season:e.userSetting.season}}),{setSeason:$}))(xe),Le=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={currentSeason:"2021"},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.props.setSeason(this.props.season),this.setState({currentSeason:this.props.match?this.props.match.params.season:this.props.season}),this.props.setFilterValue(this.props.filterValueL)}},{key:"componentDidUpdate",value:function(e){this.props.season!==e.season&&(this.setState({currentSeason:this.props.match?this.props.match.params.season:this.props.season}),this.props.setSeason(this.props.season))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:h.a.block,children:[Object(n.jsx)(p,{season:this.state.currentSeason,filterValueL:this.props.filterValueL}),Object(n.jsx)(De,{season:this.state.currentSeason})]})}}]),a}(c.a.Component),Ae=Object(b.e)(Object(g.d)(Object(f.b)((function(e){return{season:e.userSetting.season,filterValueL:e.leaguesPage.filterValue}}),{setSeason:$,setFilterValue:W}))(Le)),ye=a(42),Fe=a.n(ye),Ne=function(e){var t=e.homeTeam,a=e.awayTeam,s=e.date,c=new Date(s),r=c.getMonth(),o=c.getDate(),i=c.getFullYear();return Object(n.jsxs)("div",{className:Fe.a.m,children:[Object(n.jsx)("p",{children:t})," ",Object(n.jsx)("p",{children:":"})," ",Object(n.jsx)("p",{children:a}),Object(n.jsxs)("p",{className:Fe.a.date,children:[o," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][r]," ",i]})]})},ke=function(e){var t=e.name,a=e.matches;return Object(n.jsxs)("div",{className:Fe.a.block,children:[Object(n.jsxs)("h1",{className:Fe.a.h1,children:["\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c ",t]}),a.map((function(e){return Object(n.jsx)(Ne,{homeTeam:e.homeTeam.name,awayTeam:e.awayTeam.name,date:e.utcDate},e.id)}))]})},we=Se.a.Option,Me=function(e){ce.dispatch(ae(e))},Ue=function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.props.setSelectedLeague(this.props.selectedLeague)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:Fe.a.search,children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0433\u0438:",Object(n.jsxs)(Se.a,{defaultValue:"______________________",onChange:Me,children:[Object(n.jsx)(we,{value:"2001",children:"UEFA Champions League"}),Object(n.jsx)(we,{value:"2000",children:"FIFA World Cup"}),Object(n.jsx)(we,{value:"2002",children:"Bundesliga"}),Object(n.jsx)(we,{value:"2003",children:"Eredivisie"}),Object(n.jsx)(we,{value:"2013",children:"S\xe9rie A Brasil"}),Object(n.jsx)(we,{value:"2014",children:"Primera Division Spain"}),Object(n.jsx)(we,{value:"2015",children:"Ligue 1 France"}),Object(n.jsx)(we,{value:"2016",children:"Championship England"}),Object(n.jsx)(we,{value:"2017",children:"Primeira Liga Portugal"}),Object(n.jsx)(we,{value:"2018",children:"European Championship"}),Object(n.jsx)(we,{value:"2019",children:"Serie A Italy"}),Object(n.jsx)(we,{value:"2021",children:"Premier League England"})]})]})}}]),a}(c.a.Component),Ve=(Object(g.d)(Object(f.b)((function(e){return{selectedLeague:e.leaguesCalendar.selectedLeague}}),{setSelectedLeague:ae}))(Ue),function(e){Object(T.a)(a,e);var t=Object(E.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"handleDateFromChange",value:function(e,t){this.props.requestLeagueCalendar(this.props.id,t,this.props.dateTo),this.props.setSelectedDateFrom(t)}},{key:"handleDateToChange",value:function(e,t){this.props.requestLeagueCalendar(this.props.id,this.props.dateFrom,t),this.props.setSelectedDateTo(t)}},{key:"componentDidMount",value:function(){this.props.requestLeagueCalendar(this.props.match.params.id,this.props.dateFrom,this.props.dateTo)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:Fe.a.top_row,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(Y.b,{direction:"vertical",className:Fe.a.search,children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441:",Object(n.jsx)(G.a,{onChange:this.handleDateFromChange.bind(this)})," ","\u0434\u043e:"," ",Object(n.jsx)(G.a,{onChange:this.handleDateToChange.bind(this)})]})}),Object(n.jsx)(ke,{name:this.props.name,matches:this.props.matches})]})}}]),a}(c.a.Component)),Ye=Object(g.d)(Object(f.b)((function(e){return{matches:e.leaguesCalendar.matches,name:e.leaguesCalendar.name,id:e.leaguesCalendar.selectedLeague,dateFrom:e.leaguesCalendar.selectedDateFrom,dateTo:e.leaguesCalendar.selectedDateTo}}),{requestLeagueCalendar:function(e,t,a){return function(){var n=Object(C.a)(v.a.mark((function n(s){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L(e,t,a);case 2:c=n.sent,s({type:"SET_LEAGUE_CALENDAR",matches:c.matches.slice(0,100)}),s({type:"SET_LEAGUES_NAME",name:c.competition.name});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setSelectedDateFrom:function(e){return{type:"SET_SELECTED_DATE_FROM",selectedDateFrom:e}},setSelectedDateTo:function(e){return{type:"SET_SELECTED_DATE_TO",selectedDateTo:e}}}))(Ve);var Ge=function(){return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(d,{}),Object(n.jsx)(Ae,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:Ee}),Object(n.jsx)(b.a,{path:"/Leagues/:season?/:filterValue?",component:Ee}),Object(n.jsx)(b.a,{path:"/Teams/:filterValue?",component:me}),Object(n.jsx)(b.a,{path:"/LeagueCalendar/:id?",component:Ye}),Object(n.jsx)(b.a,{path:"/TeamCalendar/:id?/:team?",component:P})]})]})},qe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(j.a,{children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f.a,{store:ce,children:Object(n.jsx)(Ge,{})})})}),document.getElementById("root")),qe()},42:function(e,t,a){e.exports={block:"LeaguesCalendar_block__hziHB",m:"LeaguesCalendar_m__1KTxF",top_row:"LeaguesCalendar_top_row__1ouqE",search:"LeaguesCalendar_search__3SKH1",img:"LeaguesCalendar_img__1BIZW",h1:"LeaguesCalendar_h1__1nslF",date:"LeaguesCalendar_date__rzNTd"}},44:function(e,t,a){e.exports={block:"TeamsCalendar_block__1tE1y",m:"TeamsCalendar_m__2DIj7",top_row:"TeamsCalendar_top_row__21h6G",search:"TeamsCalendar_search__3JG2C",img:"TeamsCalendar_img__1FDfi",h1:"TeamsCalendar_h1__1A-Le",date:"TeamsCalendar_date__3U_6P"}},46:function(e,t,a){e.exports={block:"Leagues_block__3e_OS",blocks:"Leagues_blocks__B8TXq",search:"Leagues_search__2phie",img:"Leagues_img__2epUx",league_container:"Leagues_league_container__3P-FH",league_row:"Leagues_league_row__3YqOp"}},55:function(e,t,a){e.exports={block:"Navbar_block__33cLt",block__buttons:"Navbar_block__buttons__1CzOT",block__select:"Navbar_block__select__1rYxe",button:"Navbar_button__3HLGm"}},58:function(e,t,a){e.exports={block:"Teams_block__31CpC",search:"Teams_search__2bFWK",teams_container:"Teams_teams_container__3mU3-",team_row:"Teams_team_row__1BFrD",img:"Teams_img__1t3-u"}},83:function(e,t,a){e.exports={block:"Header_block__2tbH3",h1:"Header_h1__3iJwO",img:"Header_img__2nq-Z"}},92:function(e,t,a){e.exports={block:"SelectYearGroup_block__3IAB2",h3:"SelectYearGroup_h3__197qy"}},93:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.7e25c286.chunk.js.map