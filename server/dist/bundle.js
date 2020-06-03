!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=6)}([function(e,n,r){function t(e,n,r,t,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,u){var a=e.apply(n,r);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}}n.login=function(e){return e.post("/api/login",function(){var e=o(regeneratorRuntime.mark((function e(n){var t,o,u,a,i,s,c,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=n.request.body,a=u.username,i=u.password,s=u.device,c=u.deviceID,l=u.session,f=null!==(t=n.request.headers["X-Real-IP"])&&void 0!==t?t:"",p=null!==(o=n.request.headers["X-Forwarded-For"])&&void 0!==o?o:"",e.next=5,r(1).userLogin(a,i,JSON.stringify(s),c,l,f,p);case 5:n.body=e.sent;case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e},n.checkLogin=function(e){return e.post("/api/checklogin",function(){var e=o(regeneratorRuntime.mark((function e(n){var t,o,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.request.body,o=t.session,u=t.deviceID,a=r(17).checkLogin(o,u),n.body={code:a?0:401,msg:a?"":"登录失效，请重新登录！"};case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e}},function(e,n,r){function t(e,n,r,t,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,u){var a=e.apply(n,r);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}}var u=r(12).v1,a=r(2),i=a.sequelize,s=a.Sequelize,c=r(14).tableFilter,l=r(15).cryptoPassword,f=i.define("user",{username:{type:s.STRING,allowNull:!1},password:{type:s.STRING,allowNull:!1},isAdmin:{type:s.BOOLEAN,allowNull:!1,defaultValue:!1}}),p=i.define("userLog",{username:{type:s.STRING,allowNull:!1},loginTime:{type:s.STRING,allowNull:!1},logoutTime:{type:s.STRING,allowNull:!1,defaultValue:""},device:{type:s.STRING,allowNull:!1},deviceID:{type:s.STRING,allowNull:!1},action:{type:s.STRING,allowNull:!1,defaultValue:""},ip:{type:s.STRING,allowNull:!1,defaultValue:""},realIP:{type:s.STRING,allowNull:!1,defaultValue:""}});function d(e,n){return m.apply(this,arguments)}function m(){return(m=o(regeneratorRuntime.mark((function e(n,r){var t,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>2&&void 0!==o[2]&&o[2],e.next=3,c(f,["username",n]);case 3:if(!e.sent.length){e.next=8;break}return e.abrupt("return",{code:1,msg:"用户名已存在！"});case 8:return e.next=10,f.create({username:n,password:l(r),isAdmin:t});case 10:return e.abrupt("return",{code:0,msg:"新建成功！"});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,n,r,t,o,u){return g.apply(this,arguments)}function g(){return(g=o(regeneratorRuntime.mark((function e(n,r,t,o,u,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.create({username:n,device:r,deviceID:t,action:a,ip:o,realIP:u,loginTime:(new Date).getTime().toString()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.checkAdminAndCreate=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.sync();case 3:console.log("user表同步成功！"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("user表同步失败：",e.t0);case 9:return e.next=11,c(f,["isAdmin",!0]);case 11:if(e.sent.length){e.next=16;break}return e.next=15,d("admin","123456",!0);case 15:return e.abrupt("return",{code:0,msg:"管理员已存在！"});case 16:return e.abrupt("return",{code:1,msg:"管理员已存在！"});case 17:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.userLogin=function(){var e=o(regeneratorRuntime.mark((function e(n,t,o,a,i,s,p){var d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(f,["username",n]);case 2:if(0!==(d=e.sent).length){e.next=7;break}return e.abrupt("return",{code:1,msg:"用户名不存在！"});case 7:if(l(t)!==d[0].dataValues.password){e.next=16;break}return i=i||u(),m=r(4),m.sessionPool.push({session:i,deviceID:a}),e.next=13,v(n,o,a,s,p,"登录系统");case 13:return e.abrupt("return",{code:0,userInfo:{username:n,isAdmin:d[0].isAdmin},msg:"登录成功！",session:i});case 16:return e.abrupt("return",{code:2,msg:"密码错误！"});case 17:case"end":return e.stop()}}),e)})));return function(n,r,t,o,u,a,i){return e.apply(this,arguments)}}()},function(e,n,r){function t(e,n,r,t,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,u){var a=e.apply(n,r);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}}var u=r(13),a=r(3).config.db,i=new u(a.dbName,a.username,a.password,a.dbConfig);function s(){return c.apply(this,arguments)}function c(){return(c=o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(1).checkAdminAndCreate();case 2:return n=e.sent,e.abrupt("return",{checkAdminAndCreate:n});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.sequelize=i,n.Sequelize=u,n.main=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.authenticate();case 3:return console.log("数据库连接成功！"),e.next=6,s();case 6:console.log("数据库初始化成功！"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("数据库连接失败：",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))},function(e,n){n.config={secret:"e3991f4f-b275-47a2-8b06-4a8e32f75901",adminAccount:{username:"admin",password:"123456"},db:{dbName:"carManagementSystem",username:"root",password:"Ln123456",dbConfig:{host:"localhost",dialect:"mysql",pool:{max:5,min:0,acquire:3e4,idle:1e4}}}}},function(e,n){n.sessionPool=[]},function(e,n){e.exports=require("koa")},function(e,n,r){r(7),e.exports=r(8)},function(e,n){e.exports=require("@babel/polyfill")},function(e,n,r){"use strict";r.r(n);var t=r(5),o=r.n(t);function u(e,n,r,t,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?n(s):Promise.resolve(s).then(t,o)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){u(a,t,o,i,s,"next",e)}function s(e){u(a,t,o,i,s,"throw",e)}i(void 0)}))}}var i=r(9),s=r(10),c=new o.a,l=new i;c.use(function(){var e=a(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:n.response.get("X-Response-Time");case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.use(function(){var e=a(regeneratorRuntime.mark((function e(n,r){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),e.next=3,r();case 3:o=Date.now()-t,n.set("X-Response-Time","".concat(o,"ms"));case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.use(s());var f=r(11).routes(l);c.use(f.routes()).use(f.allowedMethods()),c.listen(8900,a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(2).main();case 2:console.log("启动成功");case 3:case"end":return e.stop()}}),e)}))))},function(e,n){e.exports=require("koa-router")},function(e,n){e.exports=require("koa-bodyparser")},function(e,n,r){n.routes=function(e){return r(0).login(e),r(0).checkLogin(e),e}},function(e,n){e.exports=require("uuid")},function(e,n){e.exports=require("sequelize")},function(e,n){n.tableFilter=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={},t="",o=0,u=n.length;o<u;o++)o%2?r[t]=n[o]:t=n[o];return e.findAll({where:r})}},function(e,n,r){var t=r(16),o=r(3).config.secret;n.cryptoPassword=function(e){return t.createHmac("sha256",o).update(e).digest("hex")}},function(e,n){e.exports=require("crypto")},function(e,n,r){var t=r(18);n.checkLogin=function(e,n){var o=r(4).sessionPool;return t(o,(function(r){return r.session!==e&&r.deviceID===n})),!!o.find((function(r){return r.session===e&&r.deviceID===n}))}},function(e,n){e.exports=require("lodash/remove")}]);