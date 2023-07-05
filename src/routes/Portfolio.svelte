<script>
	import Project from '../lib/components/Project.svelte';
	import Button from '../lib/components/Button.svelte';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	const evenProjects = document.querySelectorAll('#work .project:nth-child(even)');
	// 	const oddProjects = document.querySelectorAll('#work .project:nth-child(odd)');
	// 	evenProjects.forEach((project) => {
	// 		project.setAttribute('data-scroll-type', 'left-fade');
	// 	});
	// 	oddProjects.forEach((project) => {
	// 		project.setAttribute('data-scroll-type', 'right-fade');
	// 	});
	// });
</script>

<section id="portfolio">
	<h2>Portfolio</h2>
	<Project
		title="make-icns"
		description="make-icns is a CLI that converts a single PNG image into a ICNS image. It does this very quickly with very good quality. This CLI is designed to be simple to use on your local machine and to implement in other projects."
	>
		<Button text="Source code" href="https://github.com/dkchiem/make-icns" />
	</Project>
	<Project
		title="generator-svelte"
		description="generator-svelte is a Yeoman generator that generates a boilerplate Svelte app."
	>
		<Button text="Source code" href="https://github.com/Samuel-Martineau/generator-svelte" />
	</Project>
	<Project
		title="drive-flasher"
		description="drive-flasher is a CLI to flash an OS onto a removable drive. It is designed to be simple to use on your MacOS or Linux computer."
	>
		<Button text="Source code" href="https://github.com/dkchiem/drive-flasher" />
	</Project>
	<Project
		title="Chez Tomio Website"
		description="A website for the Chez Tomio restaurant and food truck. This website was built with React."
	>
		<Button text="See the website" href="https://cheztomio.com" />
	</Project>
	<Project
		title="chiem.me"
		description="Of course, I had to include this website which was built with Svelte."
	>
		<Button text="Source code" href="https://github.com/dkchiem/chiem.me" />
	</Project>
</section>

<style lang="scss">
	section {
		h2 {
			text-align: center;
			margin-bottom: 30px;
		}
		padding: 50px 10%;
		overflow: hidden;
		:global(.project) {
			margin-bottom: 40px;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
