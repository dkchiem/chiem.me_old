<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string = '';
	export let imageFit: boolean = false;
	export let projectLink: string = '';
	export let sourceCodeLink: string = '';
</script>

<div class="project">
	<div
		class="image"
		style="background-image: url(/projects/{image}); background-size: {imageFit
			? 'contain'
			: 'cover'}"
	/>
	<div class="content">
		<div class="first-row">
			<h3>{title}</h3>
			<div class="links">
				{#if sourceCodeLink}
					<a href={sourceCodeLink}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentcolor"
							><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
							/></svg
						>
					</a>
				{/if}
				{#if projectLink}
					<a href={projectLink}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentcolor"
							><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
							/></svg
						>
					</a>
				{/if}
			</div>
		</div>
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		overflow: hidden;
		height: 350px;
		background-color: var(--dark-1);
		.image {
			width: 100%;
			height: 200px;
			background-position: center;
			background-repeat: no-repeat;
			background-color: white;
			flex: 1;
		}
		.content {
			padding: 20px;
			.first-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				h3 {
					color: var(--accent-1);
					margin-bottom: 5px;
				}
				.links {
					display: flex;
					gap: 10px;
					margin-left: 10px;
					a {
						&:hover {
							svg {
								fill: var(--accent-1);
							}
						}
						svg {
							height: 1rem;
							transition: fill 0.3s;
						}
					}
				}
			}
		}
	}
</style>
