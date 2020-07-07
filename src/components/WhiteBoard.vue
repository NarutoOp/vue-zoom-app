<template>
<div class="relative">
    <canvas id="whiteboard" resize style="border: 3px solid"></canvas>
    <mainPanel></mainPanel>
    <historyPanel></historyPanel>
</div>
</template>

<script>
import paper from "paper";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel
  },
  created() {
    paper.install(window);
  },
  mounted() {
    paper.setup("whiteboard");
  }
};
</script>

<style lang="scss">
canvas {
  height: 95vh;
  width: 100%;
  background: #133337;
}

div.relative {
  position: relative;
}

</style>