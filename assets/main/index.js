System.register("chunks:///_virtual/BoardQuestion.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,n,o,a,l,s,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Sprite,s=e.Label,u=e.Component}],execute:function(){var c,p,d,b,f,y,g;o._RF.push({},"9f9adG5VI5AsIl3TQmydZkU","BoardQuestion",void 0);var h=a.ccclass,m=a.property;e("BoardQuestion",(c=h("BoardQuestion"),p=m(l),d=m(s),c((y=r((f=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,i(r,"bg",y,n(r)),i(r,"lblBoardName",g,n(r)),r.answerId=-1,r}return t(r,e),r.prototype.initBoardQuestion=function(e,r,t){this.answerId=e,this.bg.spriteFrame=r,this.lblBoardName.string=t},r}(u)).prototype,"bg",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=r(f.prototype,"lblBoardName",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=f))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/Character.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BoardQuestion.ts","./Constant.ts","./TypingEffect.ts","./StarCtrl.ts"],(function(e){var t,n,o,i,a,r,s,c,d,u,l,h,g,f,p,v,C,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.createForOfIteratorHelperLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,c=e.CCInteger,d=e.Node,u=e.UITransform,l=e.Vec3,h=e.tween,g=e.Widget,f=e.Component},function(e){p=e.BoardQuestion},function(e){v=e.Constant},function(e){C=e.TypingEffect},function(e){m=e.StarCtrl}],execute:function(){var T,y,M,b,E;r._RF.push({},"1f416qfzaZEX7Q9/FsZnIaL","Character",void 0);var S=s.ccclass,P=s.property;e("Character",(T=S("Character"),y=P(c),T((E=t((b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,i(t,"id",E,a(t)),t.startPosition=new l,t.touchOffset=new l,t.enableMove=!0,t.isClick=!1,t}n(t,e);var r=t.prototype;return r.onLoad=function(){this.node.on(d.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(d.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(d.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(d.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},r.onTouchStart=function(e){if(v.gameManager.tutorial.active=!1,1!=this.isClick&&(this.isClick=!0,this.startPosition=this.node.position.clone(),this.enableMove&&v.gameManager.enablePlay)){var t=e.getUILocation(),n=this.node.parent.getComponent(u).convertToNodeSpaceAR(new l(t.x,t.y,0));this.touchOffset=this.node.position.clone().subtract(n)}},r.onTouchMove=function(e){if(this.enableMove&&v.gameManager.enablePlay){var t=e.getUILocation(),n=this.node.parent.getComponent(u).convertToNodeSpaceAR(new l(t.x,t.y,0)).add(this.touchOffset);this.node.setPosition(n.x,n.y,this.node.position.z)}},r.onTouchEnd=function(e){var t=this;if(this.enableMove&&v.gameManager.enablePlay){for(var n,i=v.gameManager.boardListContainer.children,a=!1,r=function(){var e=n.value,o=e.getComponent(p),i=e.getComponent(u);if(o&&i){var r=i.getBoundingBoxToWorld(),s=t.node.getComponent(u).getBoundingBoxToWorld();if(r.intersects(s)&&o.answerId===t.id){a=!0;var c=e.getWorldPosition(),d=t.node.parent.getComponent(u).convertToNodeSpaceAR(new l(c.x,c.y,c.z));return h(t.node).to(.3,{position:new l(d.x,d.y,0),scale:new l(.5,.5,.5)}).call((function(){var n=t.node.getWorldPosition();t.node.removeFromParent(),e.addChild(t.node),t.node.setWorldPosition(n)})).start(),t.enableMove=!1,v.gameManager.numberCorrect++,1}}},s=o(i);!(n=s()).done&&!r(););v.gameManager.numberCorrect===i.length&&(v.soundGameManager.SoundDung(),v.gameManager.isEndGame=!0,C.instance.timeCurrent>=0?m.instance.SetDiem(3):m.instance.SetDiem(2),this.scheduleOnce((function(){v.gameManager.title.active=!1,h(v.gameManager.boardListContainer.getComponent(g)).to(1,{verticalCenter:0}).start(),setTimeout((function(){v.videoManager.startVideo(1,(function(){v.gameManager.endGame()}))}),2e3)}),1)),a||(v.soundGameManager.SoundSai(),h(this.node).to(.3,{position:this.startPosition}).call((function(){t.isClick=!1})).start())}},t}(f)).prototype,"id",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=b))||M));r._RF.pop()}}}));

System.register("chunks:///_virtual/Constant.ts",["cc"],(function(n){var t,a;return{setters:[function(n){t=n.cclegacy,a=n._decorator}],execute:function(){var e,o;t._RF.push({},"e18acvFlWVE5pxUo799FDwg","Constant",void 0);var c=a.ccclass;a.property,n("Constant",c("Constant")(((o=function(){}).videoManager=void 0,o.soundGameManager=void 0,o.gameManager=void 0,e=o))||e);t._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts","./Tool.ts","./BoardQuestion.ts","./StarCtrl.ts","./TypingEffect.ts","./Character.ts"],(function(e){var t,n,i,r,a,o,l,s,u,c,p,d,f,b,y,g,h,m,C,w,v;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,l=e.Node,s=e.Prefab,u=e.SpriteFrame,c=e.instantiate,p=e.Vec3,d=e.tween,f=e.Tween,b=e.UITransform,y=e.Component},function(e){g=e.Constant},function(e){h=e.default},function(e){m=e.BoardQuestion},function(e){C=e.StarCtrl},function(e){w=e.TypingEffect},function(e){v=e.Character}],execute:function(){var L,P,z,S,M,B,E,I,T,G,N,Q,_,A,O,q,x,F,R,V,D,k,W,j,H;a._RF.push({},"5b70be2F75Ca5Qp+pbefY8i","GameManager",void 0);var K=o.ccclass,U=o.property;e("GameManager",(L=K("GameManager"),P=U(l),z=U(s),S=U(l),M=U(l),B=U(s),E=U(u),I=U(l),T=U(l),G=U(l),N=U(l),Q=U(l),L((O=t((A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"parentNode",O,r(t)),i(t,"boardPrefab",q,r(t)),i(t,"boardListContainer",x,r(t)),i(t,"playerListContainer",F,r(t)),i(t,"playerPrefab",R,r(t)),i(t,"spriteBgList",V,r(t)),i(t,"requir",D,r(t)),i(t,"sprite1",k,r(t)),i(t,"sprite2",W,r(t)),i(t,"title",j,r(t)),i(t,"tutorial",H,r(t)),t.isEnd=!1,t.questions=[{answerId:2,spriteId:0,name:"Biển"},{answerId:1,spriteId:1,name:"Núi"}],t.enablePlay=!1,t.isEndGame=!1,t.numberCorrect=0,t.isSound=!1,t}n(t,e);var a=t.prototype;return a.__preload=function(){g.gameManager=this},a.onLoad=function(){g.videoManager.predownloadVideo(0),g.videoManager.predownloadVideo(1)},a.start=function(){var e=this;this.playerListContainer.setPosition(this.playerListContainer.position.x,-700),g.videoManager.startVideo(0,(function(){g.videoManager.node.active=!1,e.initQuestion()}))},a.playSound=function(){var e=this;1!=this.isSound&&(this.isSound=!0,g.soundGameManager.playClip(0),this.scheduleOnce((function(){e.isSound=!1}),6))},a.initQuestion=function(){var e=this;if(!this.isEndGame){this.playSound(),w.instance.startText();var t=!1;this.scheduleOnce((function(){h.shuffleArray(e.questions).forEach((function(n,i){var r=c(e.boardPrefab);r.getComponent(m).initBoardQuestion(n.answerId,e.spriteBgList[n.spriteId],n.name),r.setScale(p.ZERO),e.boardListContainer.addChild(r),d(r).delay(.2*i).to(.25,{scale:p.ONE}).call((function(){!t&&e.boardListContainer.children.every((function(e){return e.getComponent(m).answerId>-1}))&&(setTimeout((function(){e.enablePlay=!0}),2e3),t=!0)})).start()})),e.playerPrefab.forEach((function(t){var n=c(t);e.playerListContainer.addChild(n)})),d(e.playerListContainer).to(.25,{position:new p(e.playerListContainer.position.x,-260.941)}).start()}),5)}},a.playtutorial=function(){var e=this;f.stopAllByTarget(this.tutorial);var t=null;this.playerListContainer.children.forEach((function(e){1==e.getComponent(v).enableMove&&(t=e)})),null!=t&&this.boardListContainer.children.forEach((function(n){if(n.getComponent(m).answerId===t.getComponent(v).id){e.tutorial.active=!0;!function i(){e.tutorial.setWorldPosition(t.worldPosition),d(e.tutorial).to(1,{worldPosition:n.worldPosition}).call((function(){i()})).start()}()}}))},a.endGame=function(){C.instance.showNode()},a.getRatingStar=function(){var e;try{e=1}catch(t){e=0}return e>=.8?3:e>=.5?2:e>=.3?1:0},a.btnBackGame=function(){console.log("[ACTION]: BACK")},a.update=function(e){this.parentNode.getComponent(b).setContentSize(h.getSizeWindow())},t}(y)).prototype,"parentNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=t(A.prototype,"boardPrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=t(A.prototype,"boardListContainer",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=t(A.prototype,"playerListContainer",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(A.prototype,"playerPrefab",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=t(A.prototype,"spriteBgList",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=t(A.prototype,"requir",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(A.prototype,"sprite1",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=t(A.prototype,"sprite2",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=t(A.prototype,"title",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(A.prototype,"tutorial",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=A))||_));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager.ts","./StarCtrl.ts","./Tool.ts","./VideoCache.ts","./Constant.ts","./GameManager.ts","./SoundGameManager.ts","./TypingEffect.ts","./VideoManager.ts","./BoardQuestion.ts","./Character.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SoundGameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(i){var t,o,n,u,e,s,r,l,a,d,c,p;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,n=i.initializerDefineProperty,u=i.assertThisInitialized},function(i){e=i.cclegacy,s=i._decorator,r=i.AudioClip,l=i.AudioSource,a=i.Node,d=i.randomRangeInt,c=i.Component},function(i){p=i.Constant}],execute:function(){var h,f,g,C,S,v,b,y,m,w,A,z,M,W,E,j,V,D,G,I,_,x,B;e._RF.push({},"6eb3dYGwh5PwYG2lIa4+BPs","SoundGameManager",void 0);var O=s.ccclass,P=s.property;i("SoundGameManager",(h=O("SoundGameManager"),f=P([r]),g=P([r]),C=P([r]),S=P([r]),v=P([r]),b=P(r),y=P(r),m=P(r),w=P(l),A=P(l),h((W=t((M=function(i){function t(){for(var t,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return t=i.call.apply(i,[this].concat(e))||this,n(t,"clips",W,u(t)),n(t,"clipsCorrect",E,u(t)),n(t,"clipsWrong",j,u(t)),n(t,"clipCountdown",V,u(t)),n(t,"clipSoundEffect",D,u(t)),n(t,"soundSai",G,u(t)),n(t,"soundDung",I,u(t)),n(t,"soundSais",_,u(t)),n(t,"bgMusicSource",x,u(t)),t.audies=[],t.audiesCorrect=[],t.audiesWrong=[],t.audioCountdown=[],t.audioSoundEffect=[],t.onInitialized=[],n(t,"sources",B,u(t)),t.indexSai=0,t}o(t,i);var e=t.prototype;return e.__preload=function(){p.soundGameManager=this},e.start=function(){var i=this;this.initSound(this.clips,this.audies,(function(){i.onInitialized.forEach((function(i){return i()})),i.onInitialized=[]})),this.initSound(this.clipsCorrect,this.audiesCorrect),this.initSound(this.clipsWrong,this.audiesWrong),this.initSound(this.clipCountdown,this.audioCountdown),this.initSound(this.clipSoundEffect,this.audioSoundEffect),this.eventSound()},e.initSound=function(i,t,o){for(var n=0;n<i.length;n++){var u=(new a).addComponent(l);u.clip=i[n],t.push(u)}o&&o()},e.playBgMusic=function(i){void 0===i&&(i=.4),this.bgMusicSource.volume=i,this.bgMusicSource.play()},e.stopBgMusic=function(){this.bgMusicSource.stop()},e.playClip=function(i,t,o,n){return void 0===t&&(t=!1),void 0===o&&(o=.5),void 0===n&&(n=!0),n&&this.closeAllSound(),this.playClipAudio(i,t,o,this.audies),i},e.playCorrect=function(i,t,o){return void 0===t&&(t=!1),void 0===o&&(o=.5),this.closeAllSound(),this.playClipAudio(i,t,o,this.audiesCorrect),i},e.playWrong=function(i,t,o){return void 0===t&&(t=!1),void 0===o&&(o=.5),this.closeAllSound(),this.playClipAudio(i,t,o,this.audiesWrong),i},e.playCountdown=function(i,t,o){return void 0===t&&(t=!1),void 0===o&&(o=.5),this.playClipAudio(i,t,o,this.audioCountdown),i},e.playSoundEffect=function(i,t,o){return void 0===t&&(t=!1),void 0===o&&(o=.5),this.playClipAudio(i,t,o,this.audioSoundEffect),i},e.playClipAudio=function(i,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=.5),n[i].volume=o,n[i].loop=t,n[i].play()},e.stopClip=function(i){var t;null==(t=this.audies[i])||t.stop()},e.stopClipCorrect=function(i){var t;null==(t=this.audiesCorrect[i])||t.stop()},e.stopClipWrong=function(i){var t;null==(t=this.audiesWrong[i])||t.stop()},e.stopClipCountdown=function(i){var t;null==(t=this.audioCountdown[i])||t.stop()},e.stopClipSoundEffect=function(i){var t;null==(t=this.audioSoundEffect[i])||t.stop()},e.eventSound=function(){var i=this;window.addEventListener("audioChanged",(function(t){t.detail.mute?i.muteAll():i.unMuteAll()}))},e.muteAll=function(){this.adjustVolume(this.audies,!0),this.adjustVolume(this.audiesCorrect,!0),this.adjustVolume(this.audiesWrong,!0),this.adjustVolume(this.audioCountdown,!0)},e.unMuteAll=function(){this.adjustVolume(this.audies,!1),this.adjustVolume(this.audiesCorrect,!1),this.adjustVolume(this.audiesWrong,!1),this.adjustVolume(this.audioCountdown,!1)},e.adjustVolume=function(i,t){for(var o=0;o<i.length;o++)i[o].volume=t?0:1},e.closeAllSound=function(i){void 0===i&&(i=!1);for(var t=0;t<this.clips.length;t++)this.stopClip(t);for(var o=0;o<this.clipsCorrect.length;o++)this.stopClipCorrect(o);for(var n=0;n<this.clipsWrong.length;n++)this.stopClipWrong(n);if(i)for(var u=0;u<this.clipCountdown.length;u++)this.stopClipCountdown(u)},e.SoundSai=function(){var i=this;this.sources.playOneShot(this.soundSai,.3),this.indexSai++,this.indexSai%3==0&&this.scheduleOnce((function(){i.sources.playOneShot(i.soundSais[d(0,i.soundSais.length)],.3)}),1)},e.SoundDung=function(){this.sources.playOneShot(this.soundDung[d(0,this.soundDung.length)],.3)},t}(c)).prototype,"clips",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=t(M.prototype,"clipsCorrect",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),j=t(M.prototype,"clipsWrong",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=t(M.prototype,"clipCountdown",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=t(M.prototype,"clipSoundEffect",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=t(M.prototype,"soundSai",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(M.prototype,"soundDung",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=t(M.prototype,"soundSais",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=t(M.prototype,"bgMusicSource",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=t(M.prototype,"sources",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=M))||z));e._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.2)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.2)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager.ts"],(function(t){var n,e,o,a,i,r,c,l,s,u,p,d,f;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){i=t.cclegacy,r=t._decorator,c=t.Node,l=t.tween,s=t.Vec3,u=t.director,p=t.Animation,d=t.Component},function(t){f=t.SoundManager}],execute:function(){var h,b,g,m,S,y,v,w,C,A;i._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var N=r.ccclass,G=r.property;t("StarCtrl",(h=N("StarCtrl"),b=G(c),g=G(c),m=G(c),h(((A=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return n=t.call.apply(t,[this].concat(i))||this,o(n,"nodetinhsao",v,a(n)),o(n,"board",w,a(n)),o(n,"stars",C,a(n)),n.diem=0,n}e(n,t);var i=n.prototype;return i.__preload=function(){n.instance=this},i.showNode=function(){var t=this;f.instance.playEndgame(),this.nodetinhsao.active=!0,l(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){l(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},i.btnReset=function(){u.loadScene("Gameplay")},i.btnBackGame=function(){console.log("[ACTION]: BACK")},i.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},i.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},i.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){l(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(p).play("scale"),f.instance.playSao()})).start()}),.2*e)}))},i.SetDiem=function(t){this.diem=t},n}(d)).instance=void 0,v=n((y=A).prototype,"nodetinhsao",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(y.prototype,"board",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=n(y.prototype,"stars",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=y))||S));i._RF.pop()}}}));

System.register("chunks:///_virtual/Tool.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var n,e,o,t,i,a,c,u;return{setters:[function(r){n=r.asyncToGenerator,e=r.regeneratorRuntime},function(r){o=r.cclegacy,t=r._decorator,i=r.screen,a=r.Size,c=r.resources,u=r.SpriteFrame}],execute:function(){var l;o._RF.push({},"910adSs8whPzLZ/7tXWS6In","Tool",void 0);var s=t.ccclass;t.property,r("default",s("Tool")(l=function(){function r(){}return r.formatTime=function(r){var n=Math.floor(r/60),e=Math.floor(r%60);return(n<10?"0"+n:n)+":"+(e<10?"0"+e:e)},r.getParamUrl=function(r){var n=window.location.href;return new URL(n).searchParams.get(r)},r.randomInRange=function(r,n){return Math.floor(Math.random()*(n-r+1))+r},r.randomProbability=function(r){for(var n;!(n&&n<r);)n=Math.random();return n},r.getRandomElements=function(n,e){if(Array.isArray(n)){if(!(e<0||e>n.length))return r.shuffleArray(n).slice(0,e);console.error("count phải trong khoáng 0 đến length của mảng"+n.length+" count = "+e)}else console.error("arr không phải mảng")},r.shuffleArray=function(r){for(var n=r.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=[r[e],r[n]];r[n]=o[0],r[e]=o[1]}return r},r.createGridPositions=function(r,n,e,o){void 0===o&&(o=10);for(var t=Math.floor(n/(r+o)),i=Math.floor(e/(r+o)),a=[],c=0;c<i;c++)for(var u=0;u<t;u++)a.push({x:u*(r+o)+r/2-n/2,y:e/2-c*(r+o)-r/2});return a},r.extractMultipleTextFromColorTags=function(n){return n.map((function(n){return r.extractTextFromColorTags(n)}))},r.extractTextFromColorTags=function(r){return(r=(r=(r=r.replace(/<color=#\w{6}>(.*?)<\/color>/g,"$1")).replace(/<color=#\w{6}>/g,"")).replace(/<\/color>/g,"")).trim()},r.addLineBreaksToArrText=function(n){return n.map((function(n){return r.addLineBreaksToAText(n)}))},r.addLineBreaksToAText=function(r){var n=r.split(" "),e=n.length;return 3===e?n[0]+"\n"+n.slice(1).join(" "):4===e?n.slice(0,2).join(" ")+"\n"+n.slice(2).join(" "):r},r.getSizeWindow=function(){var r=0,n=0,e=i.windowSize.width/1366,o=i.windowSize.height/1024;return e>o?(n=i.windowSize.width/o,r=1024):(r=i.windowSize.height/e,n=1366),new a(n,r)},r.preloadDir=function(r,n,e){c.loadDir(r,u,(function(r,o){r?console.error("preload sprite error:",r):(n&&n.push.apply(n,o),e&&e())}))},r.preloadDirAsync=function(){var r=n(e().mark((function r(n){return e().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r,e){c.loadDir(n,u,(function(n,o){if(n)return console.error("load sprite error:",n),void e(n);r(o)}))})));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),r.rearrangeArray=function(r,n){if(!r.includes(n))return console.error("Phần tử không tồn tại trong mảng!"),r;var e=r.filter((function(r){return r!==n}));return[e[0],n,e[1]]},r.resizeImage=function(r,n,e){var o=0,t=0,i=e.rect.width/e.rect.height;return console.log(e.rect.width+" "+e.rect.height),i>1?(t=r,o=r/i):(o=n,t=n*i),new a(t,o)},r}())||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/TypingEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(t){var e,n,i,r,o,a,u,l,c,s,f,p,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,u=t.Label,l=t.CCInteger,c=t.Sprite,s=t.Color,f=t.tween,p=t.Component},function(t){h=t.Constant}],execute:function(){var m,g,b,d,y,C,x,v,w,T,L,D,z,I;o._RF.push({},"00762RfvG1Bm5/i7C5VTgWd","TypingEffect",void 0);var E=a.ccclass,R=a.property;t("TypingEffect",(m=E("TypingEffect"),g=R(u),b=R(l),d=R(c),y=R(l),C=R(l),m(((I=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(e,"textLabel",w,r(e)),e.currentIndex=0,e.fullText="Bé hãy giúp Lạc Long Quân và Âu Cơ trở về nơi phù hợp của mình nhé ?",i(e,"duration",T,r(e)),i(e,"time",L,r(e)),i(e,"timeDuration",D,r(e)),i(e,"timeCurrent",z,r(e)),e}n(e,t);var o=e.prototype;return o.onLoad=function(){e.instance=this},o.startText=function(){var t=this;this.textLabel.string="",this.showTextWithDuration(this.fullText,this.duration),this.scheduleOnce((function(){t.schedule((function(){t.timeCurrent--,t.timeCurrent<10&&t.timeCurrent>3&&(t.time.color=new s(232,21,25,100)),t.timeCurrent<3&&(t.time.color=new s(255,104,106,255)),console.log(t.timeCurrent)}),1),f(t.time).to(t.timeDuration,{fillRange:1}).call((function(){1!=h.gameManager.isEndGame&&h.gameManager.playtutorial()})).start()}),this.duration)},o.showTextWithDuration=function(t,e){var n=this,i=t.length,r=e/i;this.schedule((function e(){n.currentIndex<i?(n.textLabel.string+=t[n.currentIndex],n.currentIndex++):n.unschedule(e)}),r)},e}(p)).instance=void 0,w=e((v=I).prototype,"textLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(v.prototype,"duration",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),L=e(v.prototype,"time",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(v.prototype,"timeDuration",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),z=e(v.prototype,"timeCurrent",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),x=v))||x));o._RF.pop()}}}));

System.register("chunks:///_virtual/VideoCache.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,t;return{setters:[function(e){r=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"0e5e1m9SjhC275OBqCMXGIa","VideoCache",void 0);var o=e("VideoCache",function(){function e(){}return e.saveVideo=function(){var e=r(n().mark((function e(r,t){var o,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isIndexedDBAvailable){e.next=4;break}return console.warn("trinh duyet khong ho tro indexdb, su dung tam memcache"),this.inMemoryCache.set(r,t),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.openDB();case 7:return o=e.sent,i=o.transaction(this.STORE_NAME,"readwrite"),i.objectStore(this.STORE_NAME).put(t,r),e.abrupt("return",new Promise((function(e,r){i.oncomplete=function(){return e()},i.onerror=function(){return r(i.error)}})));case 14:e.prev=14,e.t0=e.catch(4),console.error("loi luu video vao indexdb, su dung memcache :: ",e.t0),this.isIndexedDBAvailable=!1,this.inMemoryCache.set(r,t);case 19:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(r,n){return e.apply(this,arguments)}}(),e.getVideo=function(){var e=r(n().mark((function e(r){var t,o,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isIndexedDBAvailable){e.next=3;break}return console.warn("trinh duyet khong ho tro indexdb, su dung tam memcache"),e.abrupt("return",this.inMemoryCache.get(r)||null);case 3:return e.prev=3,e.next=6,this.openDB();case 6:return t=e.sent,o=t.transaction(this.STORE_NAME,"readonly"),i=o.objectStore(this.STORE_NAME),e.abrupt("return",new Promise((function(e,n){var t=i.get(r);t.onsuccess=function(){e(t.result||null)},t.onerror=function(){return n(t.error)}})));case 12:return e.prev=12,e.t0=e.catch(3),console.error("loi luu video vao indexdb, su dung memcache :: ",e.t0),this.isIndexedDBAvailable=!1,e.abrupt("return",this.inMemoryCache.get(r)||null);case 17:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(r){return e.apply(this,arguments)}}(),e.openDB=function(){var e=r(n().mark((function e(){var r=this;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var t=indexedDB.open(r.DB_NAME,1);t.onupgradeneeded=function(e){var n=e.target.result;n.objectStoreNames.contains(r.STORE_NAME)||n.createObjectStore(r.STORE_NAME)},t.onsuccess=function(){return e(t.result)},t.onerror=function(){console.error("khong co indexdb :: ",t.error),r.isIndexedDBAvailable=!1,n(t.error)}})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e}());o.DB_NAME="VideoCacheDB",o.STORE_NAME="videos",o.inMemoryCache=new Map,o.isIndexedDBAvailable=!0,t._RF.pop()}}}));

System.register("chunks:///_virtual/VideoManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){var t,o,i,n,r,s,a,p,d,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.VideoClip,p=e.Node,d=e.VideoPlayer,c=e.Component},function(e){l=e.Constant}],execute:function(){var u,h,g,v,y;r._RF.push({},"7070ddBgQdLjKYFt5kQt40e","VideoManager",void 0);var f=s.ccclass,_=s.property;e("VideoManager",(u=f("VideoManager"),h=_(a),u((y=t((v=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,i(t,"videosClip",y,n(t)),t.videosPlayer=[],t.remoteVideosUrl=["https://storage.googleapis.com/why_kid_static_content/WHY_KIDS_UPLOAD/truoc_khi_vao_game.mp4","https://storage.googleapis.com/why_kid_static_content/WHY_KIDS_UPLOAD/sau_game.mp4"],t}o(t,e);var r=t.prototype;return r.__preload=function(){l.videoManager=this},r.onLoad=function(){for(var e=0;e<this.videosClip.length;e++){var t=(new p).addComponent(d);t.clip=this.videosClip[e],this.videosPlayer.push(t)}},r.startVideo=function(e,t){this.node.active=!0,this.node.off(d.EventType.COMPLETED,t,this),this.node.getComponent(d).resourceType=d.ResourceType.REMOTE,this.node.getComponent(d).remoteURL=this.remoteVideosUrl[e],this.node.getComponent(d).mute=!0,this.node.on(d.EventType.COMPLETED,t,this),this.node.getComponent(d).play()},r.pauseVideo=function(e){this.videosPlayer[e].pause()},r.stopVideo=function(e){this.videosPlayer[e].stop()},r.predownloadVideo=function(e){return e},t}(c)).prototype,"videosClip",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=v))||g));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});