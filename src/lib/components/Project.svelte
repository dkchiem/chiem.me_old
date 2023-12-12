<script lang="ts">
	import { lazyLoad } from '$lib/lazyLoad';

	export let topTitle: string = '';
	export let title: string;
	export let description: string;
	export let image: string = '';
	export let imageFit: boolean = false;
</script>

<div class="project" data-scroll>
	<div class="project-content">
		{#if topTitle}
			<h4>{topTitle}</h4>
		{/if}
		<h2>{title}</h2>
		<p>{description}</p>
		<div>
			<slot />
		</div>
	</div>
	{#if image}
		<div id="project-image" class:image-fit={imageFit}>
			<img use:lazyLoad={image} alt={'Photo for ' + title} />
		</div>
	{/if}
</div>

<style lang="scss">
	// Small screens
	@media only screen and (max-width: 820px) {
		.project {
			flex-direction: column;
			#project-image {
				margin-top: 20px;
			}
		}
	}

	// Large screens
	@media only screen and (min-width: 820px) {
		.project {
			#project-image {
				margin-left: 50px;
			}
			// &:nth-child(even) {
			// 	#project-image {
			// 		margin-right: 50px;
			// 	}
			// 	flex-direction: row-reverse;
			// }
			// &:nth-child(odd) {
			// 	#project-image {
			// 		margin-left: 50px;
			// 	}
			// }
		}
	}

	.project {
		display: flex;
		align-items: center;
		justify-content: space-between;
		#project-content {
			flex: 1;
		}
		#project-image {
			min-height: 300px;
			min-width: 300px;
			height: 300px;
			width: 300px;
			border-radius: 10px;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: white;
			filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
			box-sizing: border-box;
			&.image-fit {
				padding: 10px;
				img {
					max-width: 100%;
					max-height: 100%;
				}
			}
			&:not(.image-fit) {
				img {
					height: 100%;
				}
			}
		}
	}
</style>
