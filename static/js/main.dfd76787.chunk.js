(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),s=(n(17),n(2)),u=n(3),l=n(6),c=n(5),d=n(7),h=(n(19),n(4)),y=n(8),m=n(1),b=(n(21),n(23),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"circle ".concat(this.props.tokencolour)})}}]),t}(a.Component)),p=function e(t,n,a){Object(s.a)(this,e),this.playerId=t,this.columnId=n,this.rowIndex=a},O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).generateTokenElements=e.generateTokenElements.bind(Object(m.a)(Object(m.a)(e))),e.submitMove=e.submitMove.bind(Object(m.a)(Object(m.a)(e))),e.getNextTokenIndex=e.getNextTokenIndex.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getNextTokenIndex",value:function(){var e=null;return this.props.tokenobjects.some(function(t,n){return null===t.ownedBy&&(e=n,!0)}),e}},{key:"submitMove",value:function(){var e=new p(this.props.getcurrentplayer().playerId,this.props.columnid,this.getNextTokenIndex());null!==e.rowIndex&&this.props.movesignal(e)}},{key:"render",value:function(){var e=this.generateTokenElements();return r.a.createElement("div",{className:"BoardGridColumn",onClick:this.submitMove},e)}},{key:"generateTokenElements",value:function(){return this.props.tokenobjects.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(b,{tokencolour:null!==e.ownedBy?e.ownedBy.playerColour:"grey"}))}).reverse()}}]),t}(a.Component),f=function e(t,n,a){Object(s.a)(this,e),this.playerId=t,this.playerColour=a,this.playerName=n},v=function(){function e(t){Object(s.a)(this,e),this.winnerFound=!1,this.winner=null,this.BoardState=null,this.coordValidator=t,this.doesLineContainWin=this.doesLineContainWin.bind(this),this.getOwnerOfTokenAtPosition=this.getOwnerOfTokenAtPosition.bind(this)}return Object(u.a)(e,[{key:"analyse",value:function(e,t){return this.setBoardSate(e),this.isTokenInAWin.apply(this,Object(h.a)(t))&&(this.winnerFound=!0,this.winner=this.getOwnerOfTokenAtPosition.apply(this,Object(h.a)(t))),this.clearBoardState(),this.winnerFound}},{key:"setBoardSate",value:function(e){this.BoardState=[].concat(e)}},{key:"clearBoardState",value:function(){this.BoardState=null}},{key:"isTokenInAWin",value:function(e,t){var n=this;return this.getCoordLinesFrom(e,t).filter(function(e){return n.doesLineContainWin(e)}).length>0}},{key:"doesLineContainWin",value:function(e){var t=this,n=!1,a=1;return e.map(function(e){return t.getOwnerOfTokenAtPosition.apply(t,Object(h.a)(e))}).reduce(function(e,t){return null===e||null===t?t:(e.playerId===t.playerId&&(a+=1),n||4!==a||(n=!0),t)},null),n}},{key:"getCoordLinesFrom",value:function(e,t){var n=this;return[0,NaN,1,-1].map(function(a){return n.getSpanCoordLineFrom(e,t,a)})}},{key:"getSpanCoordLineFrom",value:function(e,t,n){var a=this,r=t-e*n,i=[];return Object(h.a)(Array(7)).forEach(function(t,o){var s=null;s=isNaN(n)||Math.abs(n)===1/0?[e,o]:[o,n*o+r],a.coordValidator.apply(a,Object(h.a)(s))&&i.push(s)}),i}},{key:"getOwnerOfTokenAtPosition",value:function(e,t){return this.BoardState[e][t].ownedBy}}]),e}(),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).freshState={nColumns:7,nRows:6,players:[],currentPlayer:null,moveHistory:[],gameState:[],winner:null},e.state=Object(y.a)({},e.freshState),e.initialPlayerIndex=0,e.playerColours=["green","pink"],e.generateColumnElements=e.generateColumnElements.bind(Object(m.a)(Object(m.a)(e))),e.generateTokenObjects=e.generateTokenObjects.bind(Object(m.a)(Object(m.a)(e))),e.generateColumnObjects=e.generateColumnObjects.bind(Object(m.a)(Object(m.a)(e))),e.getCurrentPlayer=e.getCurrentPlayer.bind(Object(m.a)(Object(m.a)(e))),e.getNextPlayerIndex=e.getNextPlayerIndex.bind(Object(m.a)(Object(m.a)(e))),e.endCurrentPlayerTurn=e.endCurrentPlayerTurn.bind(Object(m.a)(Object(m.a)(e))),e.createPlayers=e.createPlayers.bind(Object(m.a)(Object(m.a)(e))),e.isCoordOnBoard=e.isCoordOnBoard.bind(Object(m.a)(Object(m.a)(e))),e.WinnerFinder=new v(e.isCoordOnBoard),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"createPlayers",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState({players:e.map(function(e,n){return new f(n,e,t.playerColours[n])})},n)}},{key:"getCurrentPlayer",value:function(){return this.state.currentPlayer}},{key:"getPlayerById",value:function(e){return this.state.players[e]}},{key:"getNextPlayerIndex",value:function(){var e=this.state.players.indexOf(this.getCurrentPlayer());return e+1>=this.state.players.length?0:e+1}},{key:"endCurrentPlayerTurn",value:function(e){var t=this;if(null===this.state.winner){var n=[].concat(Object(h.a)(this.state.moveHistory),[e]);this.setState({currentPlayer:this.state.players[this.getNextPlayerIndex()],moveHistory:n,gameState:this.buildGameState(n)},function(){var e=t.state.moveHistory.slice(-1)[0];t.WinnerFinder.analyse(t.state.gameState,[e.columnId,e.rowIndex]),t.WinnerFinder.winnerFound&&t.setWinner(t.WinnerFinder.winner)})}}},{key:"setWinner",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};console.log(e.playerName),this.setState({winner:e},t)}},{key:"generateTokenObjects",value:function(e){return e.map(function(e){return Object(y.a)({},e)})}},{key:"buildGameState",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.moveHistory,n=Object(h.a)(Array(this.state.nColumns)).map(function(){return Object(h.a)(Array(e.state.nRows)).map(function(e,t){return{ownedBy:null,rowIndex:t}})});return t.forEach(function(t){n[t.columnId][t.rowIndex].ownedBy=e.getPlayerById(t.playerId)}),n}},{key:"generateColumnObjects",value:function(){var e=this;return this.state.gameState.map(function(t){return{tokens:e.generateTokenObjects(t)}})}},{key:"isCoordOnBoard",value:function(e,t){return![e<this.state.nColumns,t<this.state.nRows,e>=0,t>=0].includes(!1)}},{key:"componentDidMount",value:function(){var e=this;this.setState({gameState:this.buildGameState()},function(){e.createPlayers(["player1","player2"],function(){e.setState({currentPlayer:e.state.players[e.initialPlayerIndex]})})})}},{key:"render",value:function(){var e=this.generateColumnElements();return r.a.createElement("div",{className:"Board"},r.a.createElement("p",null,this.state.winner?this.state.winner.playerName:""),r.a.createElement("div",{className:"BoardGrid"},e))}},{key:"generateColumnElements",value:function(){var e=this;return this.generateColumnObjects().map(function(t,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(O,{columnid:n,tokenobjects:t.tokens,getcurrentplayer:e.getCurrentPlayer,movesignal:e.endCurrentPlayerTurn}))})}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Connect Four")),r.a.createElement("div",{className:"App-game"},r.a.createElement(j,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.dfd76787.chunk.js.map