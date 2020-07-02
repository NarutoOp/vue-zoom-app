<template>

<div>
	<vue-webrtc ref="webrtc" width="100%" roomId="sample-room"/> 
</div>
</template>

<script>
import Vue from 'vue'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'
window.io = io
//

Vue.use(WebRTC)

export default {
  name: 'video',
  mounted: function () {
    this.$refs.webrtc.join()
  }
}
</script>

<style>
#ap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
