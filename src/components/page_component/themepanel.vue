<template>
  <div>
        <div class="theme-panel theme-panel-lg"  v-bind:class="{ active : isActive }">
            <a href="javascript:;" v-on:click="color" class="theme-collapse-btn"><i
                    class="fa fa-cog"></i></a>
            <div class="theme-panel-content">
                <h5 class="m-t-0">Color Theme</h5>
                <ul class="theme-list clearfix">
                    <li><a href="javascript:;" class="bg-red" data-theme="red"
                            data-theme-file="assets/css/default/theme/red.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a>
                    </li>
                    <li><a href="javascript:;" class="bg-pink" data-theme="pink"
                            data-theme-file="assets/css/default/theme/pink.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Pink">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-orange" data-theme="orange"
                            data-theme-file="assets/css/default/theme/orange.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Orange">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-yellow" data-theme="yellow"
                            data-theme-file="assets/css/default/theme/yellow.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Yellow">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-lime" data-theme="lime"
                            data-theme-file="assets/css/default/theme/lime.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Lime">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-green" data-theme="green"
                            data-theme-file="assets/css/default/theme/green.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Green">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-teal" data-theme="default"
                            data-theme-file="assets/css/default/theme/default.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Default">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-aqua" data-theme="aqua"
                            data-theme-file="assets/css/default/theme/aqua.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Aqua">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-blue" data-theme="blue"
                            data-theme-file="assets/css/default/theme/blue.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Blue">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-purple" data-theme="purple"
                            data-theme-file="assets/css/default/theme/purple.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Purple">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-indigo" data-theme="indigo"
                            data-theme-file="assets/css/default/theme/indigo.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Indigo">&nbsp;</a></li>
                    <li><a href="javascript:;" class="bg-black" data-theme="black"
                            data-theme-file="assets/css/default/theme/black.css" data-click="theme-selector"
                            data-toggle="tooltip" data-trigger="hover" data-container="body"
                            data-title="Black">&nbsp;</a></li>
                </ul>
                <div class="divider"></div>
                <h5 class="m-t-0">Background Color</h5>
                <ul class="bgtheme-list clearfix list-unstyled">
                    <li class="active" data-toggle="tooltip" data-placement="top" title="Default">
                        <a class="bg-default" data-theme="bg-default">&nbsp;</a></li>
                    <li class="" data-toggle="tooltip" data-placement="top" title="Rainbow-Blue">
                        <a class="bg-rainbowblue" data-theme="bg-rainbowblue">&nbsp;</a></li>
                    <li class="" data-toggle="tooltip" data-placement="top" title="Sunset">
                        <a class="bg-sunset" data-theme="bg-sunset">&nbsp;</a></li>
                    <li class="" data-toggle="tooltip" data-placement="top" title="Purple-Pink">
                        <a class="bg-purpink" data-theme="bg-purpink">&nbsp;</a></li>
                    <li class="" data-toggle="tooltip" data-placement="top" title="Lunada">
                        <a class="bg-lunada" data-theme="bg-lunada">&nbsp;</a></li>
                    <li class="" data-toggle="tooltip" data-placement="top" title="Deep-Space">
                        <a class="bg-deepspace" data-theme="bg-deepspace">&nbsp;</a></li>
                    </li>
                </ul>
                <div class="divider"></div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Header Styling</div>
                    <div class="col-md-6">
                        <select name="header-styling" class="form-control form-control-sm">
                            <option value="2">inverse</option>
                            <option value="1">default</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Header</div>
                    <div class="col-md-6">
                        <select name="header-fixed" class="form-control form-control-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Sidebar Styling</div>
                    <div class="col-md-6">
                        <select name="sidebar-styling" class="form-control form-control-sm">
                            <option value="1">default</option>
                            <option value="2">grid</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Sidebar</div>
                    <div class="col-md-6">
                        <select name="sidebar-fixed" class="form-control form-control-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Sidebar Gradient</div>
                    <div class="col-md-6">
                        <select name="content-gradient" class="form-control form-control-sm">
                            <option value="1">disabled</option>
                            <option value="2">enabled</option>
                        </select>
                    </div>
                </div>
                <!-- <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Content Styling</div>
                    <div class="col-md-6">
                        <select name="content-styling" class="form-control form-control-sm">
                            <option value="1">default</option>
                            <option value="2">black</option>
                        </select>
                    </div>
                </div> -->
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Direction</div>
                    <div class="col-md-6">
                        <select name="direction" class="form-control form-control-sm">
                            <option value="1">LTR</option>
                            <option value="2">RTL</option>
                        </select>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-md-6 control-label text-inverse f-w-600">Page Background</div>
                    <div class="col-md-6">
                        <select name="pageBg" class="form-control form-control-sm mt-3">
                            <option value="bg-default">Default</option>
                            <option value="bg-gray-wood">Gray-Wood</option>
                            <option value="bg-maple-wood">Maple-Wood</option>
                            <option value="bg-brown-wood">Brown-Wood</option>
                            <option disabled></option>
                            <option value="bg-teal-texture">Teal-Texture</option>
                            <option value="bg-blue-texture">Blue-Texture</option>
                            <option value="bg-black-texture">Black-Texture</option>
                        </select>
                    </div>
                </div>
                <div class="divider"></div>
                <h5>
                    Reading Mode &nbsp;&nbsp;
                    <input id="readingMode" type="checkbox" checked data-toggle="toggle" data-on="Dark" data-off="Light"
                        data-onstyle="dark" data-offstyle="light" data-style="ios">
                </h5>

                <div class="divider"></div>
                <div class="row m-t-10">
                    <div class="col-md-12">
                        <a href="javascript:;" class="btn btn-inverse btn-block btn-rounded"
                            data-click="reset-local-storage"><b>Reset Local Storage</b></a>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'themepanel',
  data() {
        
        return {
            isActive : false
        }
  },
  methods: {
    color: function() {
        this.isActive = !this.isActive
        }
    }
}
</script>
