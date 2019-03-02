(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(10),a=n.n(o),s=(n(17),n(2)),u=n(4),l=n(6),c=n(5),h=n(7),d=(n(19),n(3)),m=n(8),y=n(1),g=(n(21),n(23),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"circle ".concat(this.props.tokencolour)})}}]),t}(r.Component)),b=function e(t,n,r){Object(s.a)(this,e),this.playerId=t,this.columnId=n,this.rowIndex=r},p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).generateTokenElements=e.generateTokenElements.bind(Object(y.a)(Object(y.a)(e))),e.submitMove=e.submitMove.bind(Object(y.a)(Object(y.a)(e))),e.getNextTokenIndex=e.getNextTokenIndex.bind(Object(y.a)(Object(y.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getNextTokenIndex",value:function(){var e=null;return this.props.tokenobjects.some(function(t,n){return null===t.ownedBy&&(e=n,!0)}),e}},{key:"submitMove",value:function(){var e=new b(this.props.getcurrentplayer().playerId,this.props.columnid,this.getNextTokenIndex());null!==e.rowIndex&&this.props.movesignal(e)}},{key:"render",value:function(){var e=this.generateTokenElements();return i.a.createElement("div",{className:"BoardGridColumn",onClick:this.submitMove},e)}},{key:"generateTokenElements",value:function(){return this.props.tokenobjects.map(function(e,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(g,{tokencolour:null!==e.ownedBy?e.ownedBy.playerColour:"grey"}))}).reverse()}}]),t}(r.Component),f=function e(t,n,r){Object(s.a)(this,e),this.playerId=t,this.playerColour=r,this.playerName=n},v=function(){function e(t){Object(s.a)(this,e),this.winnerFound=!1,this.winner=null,this.BoardState=null,this.coordValidator=t,this.getPositionUpFrom=this.getPositionUpFrom.bind(this),this.getPositionDownFrom=this.getPositionDownFrom.bind(this),this.getPositionRightFrom=this.getPositionRightFrom.bind(this),this.getPositionUpRightFrom=this.getPositionUpRightFrom.bind(this),this.getPositionDownRightFrom=this.getPositionDownRightFrom.bind(this),this.isCoordLineWin=this.isCoordLineWin.bind(this),this.getOwnerOfTokenAtPosition=this.getOwnerOfTokenAtPosition.bind(this)}return Object(u.a)(e,[{key:"isTokenInAWin",value:function(e,t,n){var r=this;return this.getCoordLinesFrom(t,n).filter(function(e){return r.isCoordLineValid(e)}).filter(function(e){return r.isCoordLineWin(e)}).length>0}},{key:"isCoordLineValid",value:function(e){var t=this,n=!0;return e.some(function(e){return!t.coordValidator.apply(t,Object(d.a)(e))&&(n=!1,!0)}),n}},{key:"isCoordLineWin",value:function(e){var t=this,n=this.getOwnerOfTokenAtPosition.apply(this,Object(d.a)(e[0])),r=!0;return e.some(function(e){var i=t.getOwnerOfTokenAtPosition.apply(t,Object(d.a)(e));return null===n||null===i?r=!1:n.playerId!==i.playerId&&(r=!1),!r}),r}},{key:"getCoordLinesFrom",value:function(e,t){var n=this;return[this.getPositionRightFrom,this.getPositionUpFrom,this.getPositionUpRightFrom,this.getPositionDownRightFrom].map(function(r){return n.getCoordLineFrom(e,t,r)})}},{key:"getOwnerOfTokenAtPosition",value:function(e,t){return this.BoardState[e][t].ownedBy}},{key:"getPositionRightFrom",value:function(e,t){return[e+1,t]}},{key:"getPositionUpFrom",value:function(e,t){return[e,t+1]}},{key:"getPositionDownFrom",value:function(e,t){return[e,t-1]}},{key:"getPositionUpRightFrom",value:function(e,t){var n=this.getPositionUpFrom(e,t);return this.getPositionRightFrom.apply(this,Object(d.a)(n))}},{key:"getPositionDownRightFrom",value:function(e,t){var n=this.getPositionDownFrom(e,t);return this.getPositionRightFrom.apply(this,Object(d.a)(n))}},{key:"getCoordLineFrom",value:function(e,t,n){var r=[];return Object(d.a)(Array(4)).forEach(function(){if(0===r.length)r.push([e,t]);else{var i=r.slice(-1)[0];r.push(n.apply(void 0,Object(d.a)(i)))}}),r}},{key:"analyse",value:function(e){var t=this;return this.setBoardSate(e),this.BoardState.some(function(e,n){return e.some(function(e,r){return t.isTokenInAWin(e,n,r)&&(t.winnerFound=!0,t.winner=t.getOwnerOfTokenAtPosition(n,r)),t.winnerFound}),t.winnerFound}),this.clearBoardState(),this.winnerFound}},{key:"setBoardSate",value:function(e){this.BoardState=[].concat(e)}},{key:"clearBoardState",value:function(){this.BoardState=null}}]),e}(),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(c.a)(t).call(this))).freshState={nColumns:7,nRows:6,players:[],currentPlayer:null,moveHistory:[],gameState:[],winner:null},e.state=Object(m.a)({},e.freshState),e.initialPlayerIndex=0,e.playerColours=["green","pink"],e.generateColumnElements=e.generateColumnElements.bind(Object(y.a)(Object(y.a)(e))),e.generateTokenObjects=e.generateTokenObjects.bind(Object(y.a)(Object(y.a)(e))),e.generateColumnObjects=e.generateColumnObjects.bind(Object(y.a)(Object(y.a)(e))),e.getCurrentPlayer=e.getCurrentPlayer.bind(Object(y.a)(Object(y.a)(e))),e.getNextPlayerIndex=e.getNextPlayerIndex.bind(Object(y.a)(Object(y.a)(e))),e.endCurrentPlayerTurn=e.endCurrentPlayerTurn.bind(Object(y.a)(Object(y.a)(e))),e.createPlayers=e.createPlayers.bind(Object(y.a)(Object(y.a)(e))),e.isCoordOnBoard=e.isCoordOnBoard.bind(Object(y.a)(Object(y.a)(e))),e.WinnerFinder=new v(e.isCoordOnBoard),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"createPlayers",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState({players:e.map(function(e,n){return new f(n,e,t.playerColours[n])})},n)}},{key:"getCurrentPlayer",value:function(){return this.state.currentPlayer}},{key:"getPlayerById",value:function(e){return this.state.players[e]}},{key:"getNextPlayerIndex",value:function(){var e=this.state.players.indexOf(this.getCurrentPlayer());return e+1>=this.state.players.length?0:e+1}},{key:"endCurrentPlayerTurn",value:function(e){var t=this;if(null===this.state.winner){var n=[].concat(Object(d.a)(this.state.moveHistory),[e]);this.setState({currentPlayer:this.state.players[this.getNextPlayerIndex()],moveHistory:n,gameState:this.buildGameState(n)},function(){t.WinnerFinder.analyse(t.state.gameState),t.WinnerFinder.winnerFound&&t.setWinner(t.WinnerFinder.winner)})}}},{key:"setWinner",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};console.log(e.playerName),this.setState({winner:e},t)}},{key:"generateTokenObjects",value:function(e){return e.map(function(e){return Object(m.a)({},e)})}},{key:"buildGameState",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.moveHistory,n=Object(d.a)(Array(this.state.nColumns)).map(function(){return Object(d.a)(Array(e.state.nRows)).map(function(e,t){return{ownedBy:null,rowIndex:t}})});return t.forEach(function(t){n[t.columnId][t.rowIndex].ownedBy=e.getPlayerById(t.playerId)}),n}},{key:"generateColumnObjects",value:function(){var e=this;return this.state.gameState.map(function(t){return{tokens:e.generateTokenObjects(t)}})}},{key:"isCoordOnBoard",value:function(e,t){return![e<this.state.nColumns,t<this.state.nRows,e>=0,t>=0].includes(!1)}},{key:"componentDidMount",value:function(){var e=this;this.setState({gameState:this.buildGameState()},function(){e.createPlayers(["player1","player2"],function(){e.setState({currentPlayer:e.state.players[e.initialPlayerIndex]})})})}},{key:"render",value:function(){var e=this.generateColumnElements();return i.a.createElement("div",{className:"Board"},i.a.createElement("p",null,this.state.winner?this.state.winner.playerName:""),i.a.createElement("div",{className:"BoardGrid"},e))}},{key:"generateColumnElements",value:function(){var e=this;return this.generateColumnObjects().map(function(t,n){return i.a.createElement(i.a.Fragment,{key:n},i.a.createElement(p,{columnid:n,tokenobjects:t.tokens,getcurrentplayer:e.getCurrentPlayer,movesignal:e.endCurrentPlayerTurn}))})}}]),t}(r.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Connect Four")),i.a.createElement("div",{className:"App-game"},i.a.createElement(O,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.5fbd461c.chunk.js.map