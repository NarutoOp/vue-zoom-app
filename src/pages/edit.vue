<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-lg-8">
				<b-tabs>
					<b-tab active>
						<template slot="title">
							<span class="d-sm-none">Tab 1</span>
							<span class="d-sm-block d-none">WhiteBoard</span>
						</template>
						<whiteboard></whiteboard>
					</b-tab>
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Tab 2</span>
							<span class="d-sm-block d-none">Student PDF</span>
						</template>
						
						<blockquote>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<small>Someone famous in <cite title="Source Title">Source Title</cite></small>
						</blockquote>
						<h4>Lorem ipsum dolor sit amet</h4>
						<p>
							Nullam ac sapien justo. Nam augue mauris, malesuada non magna sed, feugiat blandit ligula. 
							In tristique tincidunt purus id iaculis. Pellentesque volutpat tortor a mauris convallis, 
							sit amet scelerisque lectus adipiscing.
						</p>
					</b-tab>
					<b-tab>
						<template slot="title">
							<span class="d-sm-none">Tab 3</span>
							<span class="d-sm-block d-none">Browser</span>
						</template>
						
						<p>
							<span class="fa-stack fa-4x pull-left m-r-10">
								<i class="fa fa-square-o fa-stack-2x"></i>
								<i class="fab fa-twitter fa-stack-1x"></i>
							</span>
							Praesent tincidunt nulla ut elit vestibulum viverra. Sed placerat magna eget eros accumsan elementum. 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lobortis neque. 
							Maecenas justo odio, bibendum fringilla quam nec, commodo rutrum quam. 
							Donec cursus erat in lacus congue sodales. Nunc bibendum id augue sit amet placerat. 
							Quisque et quam id felis tempus volutpat at at diam. Vivamus ac diam turpis.Sed at lacinia augue. 
							Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
							Quisque adipiscing dui nec orci fermentum blandit.
							Sed at lacinia augue. Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
							Quisque adipiscing dui nec orci fermentum blandit.
						</p>
					</b-tab>
				</b-tabs>
			</div>
			<div class="col-lg-4">
				<panel title="Video">
					<div slot="outsideBody">div class="alert alert-success fade show"&gt;
					  &lt;span class="close" data-dismiss="alert"&gt;&times;&lt;/span&gt;
					  &lt;strong&gt;Success!&lt;/strong&gt;
					  This is a success alert with 
					  &lt;a href="#" class="alert-link"&gt;an example link&lt;/a&gt;. 
					</div>
				</panel>
				<chat></chat>
			</div>
		</div>
		<!-- end row -->
	</div>
</template>

<script>
import Whiteboard from "@/components/WhiteBoard.vue";
import chat from "./chat.vue";
export default {
  components: {
    whiteboard: Whiteboard,
    chat
  }
};
</script>