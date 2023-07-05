<script lang="ts">
	export let href: string;
	export let icon: string;
	export let title: string;
</script>

<a {href} class="skill">
	<div id="icon" style="mask-image: url({icon})" />
	<h3>{title}</h3>
</a>

<style lang="scss">
	.skill {
		text-decoration: none;
		padding: 30px 20px;
		border-radius: 20px;
		text-align: center;
		// margin: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
		background-color: white;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.05);
		}
		#icon {
			height: 60px;
			width: 60px;
			margin-bottom: 10px;
			background-color: #3e64ff;
			mask-repeat: no-repeat;
			mask-size: contain;
			mask-position: center;
		}
	}
</style>
