<script lang="ts">
	import Skill from '$lib/components/Skill.svelte';
</script>

<section id="my-skills">
	<h2>My Skills</h2>
	<div id="skills-container">
		<Skill icon="html.svg" title="HTML" href="https://html.spec.whatwg.org/multipage/" />
		<Skill icon="css.svg" title="CSS" href="https://www.w3.org/TR/CSS/#css" />
		<Skill icon="scss.svg" title="SCSS" href="https://sass-lang.com/" />
		<Skill
			icon="javascript.svg"
			title="JavaScript"
			href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
		/>
		<Skill icon="typescript.svg" title="TypeScript" href="https://www.typescriptlang.org/" />
		<Skill icon="git.svg" title="Git" href="https://git-scm.com/" />
		<Skill icon="wordpress.svg" title="WordPress" href="https://wordpress.org/" />
		<Skill icon="linux.svg" title="Linux" href="https://github.com/torvalds/linux" />
		<Skill icon="nodejs.svg" title="Node.js" href="https://nodejs.org/" />
		<Skill icon="react.svg" title="React" href="https://react.dev/" />
		<Skill icon="svelte.svg" title="Svelte" href="https://svelte.dev/" />
		<Skill icon="figma.svg" title="Figma" href="https://www.figma.com/" />
	</div>
</section>

<style lang="scss">
	section {
		padding: 100px 10% 50px 10%;
		h2 {
			text-align: center;
			margin-bottom: 30px;
		}
		#skills-container {
			display: grid;
			grid-gap: 30px;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		}
	}
</style>
