<template>
<div class="relative">
    <canvas id="whiteboard" resize v-bind:style="{background: bgColor}"></canvas>
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
  props: ['color'],
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel,
    bgPanel
    
  },
  created() {
    paper.install(window);
  },
  mounted() {
    paper.setup("whiteboard");
  },
  computed: {
      bgColor: function() {
        return this.$store.getters.bgArgs.color;
      },
  }
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