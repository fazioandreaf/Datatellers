document.addEventListener("DOMContentLoaded", function init() {
  let app = new Vue({
    el: "#app",
    data: {
      light_dark: true,
      me_pc: true,
      counter: 0,
    },
    mounted: function () {
      for (let i = 0; i < 9; i++) {
        document.getElementById("table").innerHTML +=
          '<div class="zone"><a href="#" @click="move"><i v-if="me_pc" class="fas fa-times"></i><i v-else class="far a-circle"></i></a></div>';
      }
    },

    methods: {
      toggle: function () {
        this.light_dark = !this.light_dark;
        this.counter++;
      },
      move: function () {
        console.log("ciao");
      },
    },
  });
});
