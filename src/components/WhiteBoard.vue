<template>
<div class="relative">

    <div v-if="active == true">
      <canvas id="whiteboard" resize v-bind:style="{backgroundImage: `url(${bgImg})` , background: bgColor }"></canvas>
    </div>
    <div v-else>
      <canvas id="whiteboard1" resize v-bind:style="{backgroundImage: `url(${bgImg})` , background: bgColor }"></canvas>
    </div>


    <mainPanel></mainPanel>
    <historyPanel></historyPanel>
    <bgPanel></bgPanel>
  
    
</div>
</template>

<script>

import paper from "paper";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";
import bgPanel from "./panel/bgPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel,
    bgPanel,
  },
  data() {
    return {
      width:1150,
      height: 710,
      id:'whiteboard',
      id1:'whiteboard1',
      id2:'whiteboard',
      active:true,
    }
  },
  methods :{
    drawGrid () {
       let canvas = document.getElementById(this.id);
       let ctx = canvas.getContext('2d');

       let s = 28
        let nX = Math.floor(this.width / s)
        let nY = Math.floor(this.height / s)
        let pX = this.width - nX * s
        let pY = this.height - nY * s
        let pL = Math.ceil(pX / 2) - 0.5
        let pT = Math.ceil(pY / 2) - 0.5
        let pR = this.width - nX * s - pL
        let pB = this.height - nY * s - pT
       
       ctx.strokeStyle = 'red';
       ctx.beginPath();
       for (var x = pL; x <= this.width - pR; x += s) {
          ctx.moveTo(x, pT);
          ctx.lineTo(x, this.height - pB);
       }
       for (var y = pT; y <= this.height - pB; y += s) {
          ctx.moveTo(pL, y);
          ctx.lineTo(this.width - pR, y);
       }
       ctx.stroke();
    },
    changeId() {
      this.active=false;
      paper.setup('whiteboard1').active;
      
      
    },
    backId() {
      this.active=true;
      paper.setup('whiteboard').active;
      
      
    }
  },
  created() {
    paper.install(window);
  },
  mounted() {
    paper.setup('whiteboard');
    this.drawGrid();

  },
  computed: {
    bgColor: function() {
      return this.$store.getters.bgArgs.color;
    },
    bgImg: function() {
      return this.$store.getters.bgArgs.img;
    },
  },
  
};
</script>

<style lang="scss">
canvas {
  height: 94vh;
  width: 100%;
}





div.relative {
  position: relative;
}

</style>