

document.addEventListener('DOMContentLoaded',function init(){
  let app = new Vue({
    el:'#app',
    data:{
      light_dark:true,
      me_pc:true,
      
      counter:0,
    },
    mounted:function(){
    },  
    'methods':{
      toggle:function(){
        this.light_dark=!this.light_dark;
        this.counter++;
      }
    }
  });
})
