<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section id="featured-project">
	<Project
		topTitle="Featured Project"
		title="Un robot grimpeur?"
		description="A wall climbing robot that uses suction cups presented at the Expo-Science Hydro-Québec science fair in 2022. This project was created in collaboration with Samuel Martineau."
		image="/robot-grimpeur.jpg"
	>
		<Button text="View organization" href="https://github.com/Robot-Grimpeur" />
	</Project>
</section>

<style lang="scss">
	section {
		background-color: #ecfcff;
		padding: 50px 10%;
	}
</style>
