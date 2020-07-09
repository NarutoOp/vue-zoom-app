<template>
<div class="bgPanel">
	<div class="actionsPanel">
	  <panelToolIcon
	    @click.native="toggleToolSettings"
	    :toolColor="bgColor"
	    icon="adjust"
	  />
	</div>

	<div class="actionSettingsPanel">
	  <panelToolSettings v-if="isToolSettingsOpened">
        <colorPicker
          :onSelectColor="setColor"
          class="settingsColorPicker"
          slot="settingsColorPicker"
          :colors="bgcolors"
          style="width:270px;"
        />
      </panelToolSettings>
    </div>
</div>
</template>

<script>
import PanelToolIcon from "./PanelToolIcon";
import ColorPicker from "./../ColorPicker";
import colorPalette from "../../config/colorPalette.js";
import PanelToolSettings from "./PanelToolSettings";

export default {
	props: ['bgcolor'],
	components : {
	    panelToolIcon: PanelToolIcon,
    	panelToolSettings: PanelToolSettings,
    	colorPicker: ColorPicker,
    	     	
    },
    data() {
    	return {
   			isToolSettingsOpened: false,
		    bgcolors: colorPalette,
		    setcolor: ''
    	}
    },
    methods : {
    	toggleToolSettings() {
	      this.isToolSettingsOpened = !this.isToolSettingsOpened;
    	},
    	setColor(color) {
	      this.$store.dispatch("setbgColor", color);
        this.$store.dispatch("setEraserColor", color);
	    },
    },
    computed: {
    	bgColor: function() {
	      return this.$store.getters.bgArgs.color;
	    },
    }
}
</script>
<style>
.bgPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 150px;
  left: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}
</style>