(()=>{"use strict";function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function r(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.rulesBTN=[]}var t,n;return t=r,(n=[{key:"addRules",value:function(e){var r=this;Array.from(e).forEach((function(e){r.rulesBTN.push(e)}))}}])&&e(t.prototype,n),r}(),t={body:document.querySelector("body"),rulesButtons:document.querySelectorAll(".btn__rules")},n={};n.rules=new r,n.rules.addRules(t.rulesButtons),n.rules.rulesBTN.forEach((function(e){e.ad})),t.body.addEventListener("click",(function(e){var r;e.target.matches(".btn__rules, .btn__rules *")?t.body.insertAdjacentHTML("beforeend",'\n    <div class="rules-popup">\n    <h2 class="rules-popup__text">Rules</h2>\n  <img src="./images/image-rules.svg" alt="" class="rules-popup__img">  \n  <button class="rules-popup__btn rules-popup__btn--close"><img src="./images/icon-close.svg " alt="close Icone" srcset=""></button>\n  </div> \n    '):e.target.matches(".rules-popup__btn--close, .rules-popup__btn--close *")&&(r=document.querySelector(".rules-popup")).parentElement.removeChild(r)}))})();