<script lang="ts">
	import Social from '$lib/components/Social.svelte';
</script>

<section>
	<div id="content">
		<h2 class="hello">Hello there! I'm</h2>
		<h1>Dan Chiem.</h1>
		<h2 class="description">Software Engineering Student at the University of Waterloo.</h2>
		<Social />
	</div>

	<img src="/headshot.png" alt="" loading="lazy" />
</section>

<style lang="scss">
	section {
		height: 100vh;
		display: flex;
		padding: 0 10%;
		align-items: end;
		#content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			flex: 1;
			.hello {
				color: var(--accent-1);
			}
			.description {
				font-weight: 400;
			}
		}

		img {
			filter: contrast(1.2) grayscale(100%);
			max-height: 80%;
			max-width: 50%;
			@media only screen and (max-width: 1400px) {
				right: 20px;
				display: none;
			}
		}
	}
</style>
