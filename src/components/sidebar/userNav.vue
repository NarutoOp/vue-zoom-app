<template>
	<!-- begin sidebar nav -->
	<ul class="nav" v-if="menus">
		<li class="nav-header">Navigation</li>
		<template v-for="menu in menus">
			<sidebar-nav-list ref="sidebarNavList" v-bind:menu="menu" v-bind:scrollTop="scrollTop" v-bind:key="menu.path" v-bind:status="menu.status" v-on:collapse-other="handleCollapseOther(menu)"></sidebar-nav-list>
		</template>
		<!-- begin sidebar minify button -->
		<li><a href="javascript:;" class="sidebar-minify-btn" v-on:click="handleSidebarMinify()"><i class="fa fa-angle-double-left"></i></a></li>
		<!-- end sidebar minify button -->
	</ul>
	<!-- end sidebar nav -->
</template>

<script>
import SidebarNavList from './SidebarNavList.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'userNav',
	props: ['scrollTop'],
	components: {
		SidebarNavList
	},
	data () {
		return { 
			menus: [
					
					],
			pageOptions: PageOptions
		}
	},
	methods: {
		handleSidebarMinify: function() {
			this.pageOptions.pageSidebarMinified = !this.pageOptions.pageSidebarMinified;
		}
	}
}
</script>
