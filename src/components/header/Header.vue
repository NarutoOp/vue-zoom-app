<template>
	<div>
		<!-- begin #header -->
		<div id="header" class="header navbar-default">
			<!-- begin navbar-header -->
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand"><b>PE Admin</b> Internsip Portal.</router-link>

				<button type="button" class="navbar-toggle" v-on:click="toggleMobileSidebar" v-if="!pageOptions.pageWithTwoSidebar && (!pageOptions.pageWithTopMenu && !pageOptions.pageWithoutSidebar)">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>
			<!-- end navbar-header -->
			
		
			<!-- begin header-nav -->
			<ul class="navbar-nav navbar-right">
				<li v-if="!pageOptions.pageWithLanguageBar" v-bind:class="{ 'hidden-sm': pageOptions.pageWithMegaMenu }">
					<form class="navbar-form" v-on:submit="checkForm">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Enter keyword" />
							<button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
						</div>
					</form>
				</li>

				<li class="dropdown navbar-user">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<div class="image image-icon bg-black text-grey-darker">
						<img src="@/assets/PE_Resources/paathshala_logo_512.png" alt="" />
						</div>
						<span id="navbarNameHolder"></span>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a id="logoutButton" class="dropdown-item" style="cursor:pointer">Log Out</a>
					</div>
				</li>
			</ul>
			<!-- end header navigation right -->
		</div>
		<!-- end #header -->
	</div>
</template>

<script>
import PageOptions from '../../config/PageOptions.vue'

export default {
  name: 'Header',
  data() {
		return {
			pageOptions: PageOptions
		}
  },
	methods: {
		toggleMobileSidebar() {
			this.pageOptions.pageMobileSidebarToggled = !this.pageOptions.pageMobileSidebarToggled;
		}
	}
}
</script>

