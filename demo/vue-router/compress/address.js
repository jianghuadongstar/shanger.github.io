require.config({paths:{vue:"../../../bower_components/vue/dist/vue.min",vueRouter:"../static/vue-router0_7.min",city:"city"},shim:{}}),requirejs(["vue","vueRouter","city"],function(e,t,n){new e({el:"#body",data:{index:{age:""},bg:{index:!0,message:!1,friends:!1,dynamic:!1}},created:function(){},methods:{transform:function(){var e=this.$els.heihei,t=e.getAttribute("class");"heihei transform"==t?e.setAttribute("class","heihei"):e.setAttribute("class","heihei transform")},test:function(){console.log("gg")},load:function(){console.log((new Date).toString())},load1:function(){console.log((new Date).toString())}}});e.use(t);var o=e.extend({template:"#skill",methods:{test:function(){console.log("gg")}}}),i=e.extend({template:"#works"}),s=e.extend({template:"#someWords"}),r=e.extend({props:["msg"],template:"<p>{{msg}}</p>"}),a=e.extend({template:"#index",data:function(){return{age:(new Date).getFullYear()-1995}},components:{"index-child":r}}),c=new t;c.map({"/index":{component:a},"/skill":{component:o},"/works":{component:i},"/someWords":{component:s}}),c.redirect({"/":"/index"});var d=e.extend({});c.start(d,"#app")});