<template>
	<div>
		<!-- begin #sidebar -->
		<div id="sidebar" class="sidebar" v-bind:class="{ 'sidebar-transparent': pageOptions.pageSidebarTransparent }">
			<!-- begin sidebar scrollbar -->
			<div class="overflow-scroll height-full" v-scroll="handleScroll">
				<!-- begin sidebar user -->
				<userNavProfile></userNavProfile>
				<!-- end sidebar user -->
			
				<!-- begin sidebar nav -->
				<userNav></userNav>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- end #sidebar -->
		<div class="mobile-click" v-on:click="dismissSidebar"></div>
	</div>
</template>

<script>
import userNav from './userNav.vue'
import userNavProfile from './userNavProfile.vue'
import PageOptions from '../../config/PageOptions.vue'

export default {
	name: 'userbar',
	components: {
		userNav,
		userNavProfile
	},
	data() {
		return {
			scrollTop: '',
			pageOptions: PageOptions
		}
	},
	directives: {
		scroll: {
			inserted: function (el, binding) {
				let f = function (evt) {
					if (binding.value(evt, el)) {
						el.removeEventListener('scroll', f)
					}
				}
				el.addEventListener('scroll', f)
				
				if (typeof(Storage) !== 'undefined') {
					if (localStorage.sidebarScroll) {
						el.scrollTop = localStorage.sidebarScroll;
					}
				}
			}
		}
	},
	methods: {
		handleScroll: function(evt) {
			this.scrollTop = evt.target.scrollTop;
			if (typeof(Storage) !== 'undefined') {
				localStorage.setItem('sidebarScroll', this.scrollTop);
			}
		},
		dismissSidebar: function() {
			this.pageOptions.pageMobileSidebarToggled = false;
			this.pageOptions.pageMobileRightSidebarToggled = false;
		}
	}
}
</script>
<style>
div::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>