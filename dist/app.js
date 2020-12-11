(()=>{"use strict";function e(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function s(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s),this.shapes=["paper","scissors","rock","spock","lizard"],this.playerPick=null}var t,n;return t=s,(n=[{key:"getPlayerPick",value:function(e){this.playerPick=e}},{key:"getHousePick",value:function(){var e=this;if(this.playerPick){var s=this.shapes.filter((function(s){return s!==e.playerPick})),t=Math.floor(Math.random()*s.length);this.housePick=s[t]}}},{key:"resetGame",value:function(){this.playerPick=null,this.housePick=null}}])&&e(t.prototype,n),s}();function t(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.resultRules={paper:{win:["rock","spock"],lose:["scissors","lizard"]},rock:{win:["scissors","lizard"],lose:["paper","spock"]},scissors:{win:["paper","lizard"],lose:["rock","spock"]},lizard:{win:["paper","spock"],lose:["rock","scissors"]},spock:{win:["rock","scissors"],lose:["paper","lizard"]}}}var s,n;return s=e,(n=[{key:"checkResult",value:function(e,s){var t=this.resultRules[e];for(var n in this.resultRules[s],t)~t[n].indexOf(s)&&(this.result=n,console.log(this.result=n))}}])&&t(s.prototype,n),e}();function a(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.score=0}var s,t;return s=e,(t=[{key:"updateScores",value:function(e){"win"===e?this.score+=10:this.score-=10,this.score<0&&(this.score=0)}}])&&a(s.prototype,t),e}(),r={body:document.querySelector("body"),main:document.querySelector(".main"),gameScore:document.querySelector(".header__score--number")},o="btn__rules",i="rules-popup__btn--close",l="rules-popup",u="game-shapes",p="game-play",m="btn__reset",h=function(e,s){var t="";e.forEach((function(e){t+='\n       <li class="game-shapes" data-items="'.concat(e,'"><img class="game-shapes__img" src="./images/icon-').concat(e,'.svg" alt=" ').concat(e,'" srcset=""></li>\n       ')}));var n='\n    <section class="game-select">\n    <ul class="game-menu">\n      '.concat(t,"\n    </ul>\n  </section>\n    ");s.insertAdjacentHTML("afterbegin",n)},g=function(e){r.gameScore.innerHTML=e},f=function(){var e=0;return+localStorage.score&&(e=+localStorage.score),e},d={};if(d.shape=new s,d.score=new c,h(d.shape.shapes,r.main),r.main.insertAdjacentHTML("beforeend",'\n    <button class="game-menu__btn btn btn__rules secondary-text">Rules</button>\n\n    '),f()){var y=+f();d.score.score=y,g(y)}window.addEventListener("click",(function(e){var s,t,a,c,f,y,_=e.target;if(_.matches(".".concat(u,", .").concat(u," *"))){var v=_.closest(".".concat(u)).dataset.items;d.shape.getPlayerPick(v),d.shape.getHousePick(),(a=document.querySelector(".game-select"))&&a.parentElement.removeChild(a),r.main.firstElementChild.classList.contains("game-play")||(r.main.insertAdjacentHTML("afterbegin",'\n    <section class="game-play">\n   \n    </section>\n    '),s=d.shape.playerPick,t='\n      <ul class="game-play__user">\n          <li class="game-shapes" data-items="'.concat(s,'">\n              <img class="game-shapes__img" src="./images/icon-').concat(s,'.svg" alt="').concat(s,'" srcset="">\n        </li>\n          <h2 class="secondary-text game-shapes__text">You picked</h2>\n      </ul> \n      \n      '),document.querySelector(".".concat(p)).insertAdjacentHTML("afterbegin",t),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s='\n    <ul class="game-play__house">\n        <li class="game-shapes" data-items="">\n\n      </li>\n        <h2 class="secondary-text game-shapes__text">The house picked</h2>\n    </ul> \n    \n    ';document.querySelector(".".concat(p)).innerHTML+=s,setTimeout((function(){var s='\n        <li class="game-shapes" data-items="'.concat(e,'">\n        <img class="game-shapes__img" src="./images/icon-').concat(e,'.svg" alt="').concat(e,'" srcset="">\n\n      </li>\n        <h2 class="secondary-text game-shapes__text">The house picked</h2>\n    \n    ');document.querySelector(".game-play__house").innerHTML=s}),250)}(d.shape.housePick),d.result=new n,d.result.checkResult(d.shape.playerPick,d.shape.housePick),function(e){var s=document.querySelector(".game-play__user"),t='\n      <ul class="game-play__result">\n      <li><h2 class="game-play__result--text primary-text">You '.concat(e,'</h2></li>\n      <li><button class="btn btn__reset secondary-text game-play__btn--reset">Play again</button></li>\n    </ul>\n      ');setTimeout((function(){s.insertAdjacentHTML("afterend",t)}),500)}(d.result.result),d.score.updateScores(d.result.result),function(e){e<=0&&localStorage.setItem("score",0),localStorage.setItem("score",e)}(d.score.score),g(d.score.score))}_.matches(".".concat(m,", .").concat(m," *"))&&(e.preventDefault(),d.shape.resetGame(),(c=document.querySelector(".".concat(p)))&&c.parentElement.removeChild(c),h(d.shape.shapes,r.main)),_.matches(".".concat(o,", .").concat(o," *"))?(y=r.main,document.querySelector(".rules-popup")||y.insertAdjacentHTML("beforeend",'\n    <div class="rules-popup">\n    <h2 class="rules-popup__text">Rules</h2>\n  <img src="./images/image-rules-bonus.svg" alt="" class="rules-popup__img">  \n  <button class="rules-popup__btn rules-popup__btn--close"><img src="./images/icon-close.svg " alt="close Icone" srcset=""></button>\n  </div> \n    ')):!_.matches(".".concat(i,", .").concat(i," *"))&&_.matches(".".concat(l,", .").concat(l," *"))||(f=document.querySelector(".".concat(l)))&&f.parentElement.removeChild(f)}))})();