<template>
<div class="container-fluid p-0">
<splitpanes class="default-theme" style="height: 100vh;">
  <pane min-size="30" max-size="80" size="75">
    <div class="container-fluid p-0">
    <b-tabs content-class="p-0" style="border: 3px solid">
      <b-tab active>
        <template slot="title">
          WhiteBoard
        </template>
          <whiteboard></whiteboard>
      </b-tab>
      <b-tab style="border: 3px solid">
        <template slot="title">
          <span class="d-sm-block d-none">Student PDF</span>
        </template>
        <div>
          <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
          <div style="height:95vh;overflow:auto;">
              <pdf ref="pdf" :src="'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf'" :page="page" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
          </div>
        </div>
      </b-tab>
      <b-tab style="border: 3px solid">
        <template slot="title">
          <span class="d-sm-block d-none">Teacher PDF</span>
        </template>
          <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
          <div style="height:95vh;overflow:auto;">
            <pdf ref="pdf" :src="'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf'" :page="page" @error="error" @num-pages="numPages = $event" @link-clicked="page = $event"></pdf>
          </div>
      </b-tab>
      <b-tab style="border: 3px solid">
        <template slot="title">
          <span class="d-sm-block d-none">Teacher LR</span>
        </template>
        <div>
          <div style="height:94vh;">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQHqWZnNqbzh0NUJ9dICtclzUQRai0jd11EuCEacPKsF0ScHeQwz2rjBUJyylCTiMSf_dvQuYXgdtxN/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </div>
        </div>
      </b-tab>
      <b-tab style="border: 3px solid">
        <template slot="title">
          <span class="d-sm-block d-none">Student LR</span>
        </template>
        <div>
          
          <div style="height:94vh">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQHqWZnNqbzh0NUJ9dICtclzUQRai0jd11EuCEacPKsF0ScHeQwz2rjBUJyylCTiMSf_dvQuYXgdtxN/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </div>
        </div>
      </b-tab>
      <b-tab>
        <template slot="title">
          <span class="d-sm-block d-none">Browser</span>
        </template>
        <div>
          <div style="height:95vh;overflow:auto;">
            <iframe src="https://www.bing.com" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </div>
        </div>
      </b-tab>
    </b-tabs></div>
  </pane>
  <pane size="25">
  <splitpanes horizontal>
    <pane size="30" style="border: 3px solid;">
      <panel title="Video" bodyClass="p-0">
      <div style="height:30vh;overflow:auto;text-align: center;">   
        <!--<vue-webrtc ref="webrtc" width="100%" roomId="sample-room" />-->
      </div> 
      </panel> 
    </pane>
    <pane min-size="70" max-size="70" size="70">
      <b-tabs active-nav-item-class="bg-primary text-white" fill content-class="p-0">
        <b-tab>
        <template slot="title">
        <b>Chat</b>
        </template>
          <chat :name="name" />
        </b-tab>
        <b-tab>
        <template slot="title">
        <b>User</b>
        </template>
          <user />
        </b-tab>
      </b-tabs>
    </pane>
  </splitpanes>
  </pane>
</splitpanes></div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes"
import 'splitpanes/dist/splitpanes.css'
import Whiteboard from "@/components/WhiteBoard.vue";
import chat from "./chat.vue";
import pdf from 'vue-pdf'
import user from './user.vue'

import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'
window.io = io

export default {
  props: ['name'],
  components: {
    Splitpanes,
    Pane,
    whiteboard: Whiteboard,
    chat,
    pdf: pdf,
    user
  },
  data () {
      return {
          page: 1,
          numPages: 0,
      }
  },
  methods: {
      error: function(err) {

          console.log(err);
      }
  },
  mounted: function () {
    this.$refs.webrtc.join()
  }
};
</script>

<style>
.splitpanes__pane {
  position: relative;
}
.h {
  height:30vh;
}


</style>
