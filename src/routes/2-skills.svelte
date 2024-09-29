<script lang="ts">
	import Skill from '$lib/components/Skill.svelte';
</script>

<section id="skills">
	<h2>Skills</h2>
	<div id="skills-container">
		<Skill icon="javascript.svg" />
		<Skill icon="typescript.svg" />
		<Skill icon="python.svg" />
		<Skill icon="git.svg" />
		<Skill icon="linux.svg" />
		<Skill icon="docker.svg" />
		<Skill icon="html.svg" />
		<Skill icon="css.svg" />
		<Skill icon="svelte.svg" />
		<Skill icon="react.svg" />
	</div>
</section>

<style lang="scss">
	section {
		background-color: var(--dark-1);
		h2 {
			text-align: center;
			margin-bottom: 30px;
		}
		#skills-container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: 30px 100px;
		}
	}
</style>
