<script>
	import Project from '$lib/components/Project.svelte';
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
	<div id="projects">
		<Project
			title="MakeABud.com"
			description="An anonymous chat platform to meet new people at university."
			image="makeabud.jpg"
			projectLink="https://makeabud.com"
			imageFit
		/>
		<Project
			title="Autonomously Navigating Robot"
			description="Paper on implementing SLAM and autonomous navigation on a TurtleBot3"
			image="implementing-slam-and-autonomous-navigation-on-a-turtlebot3.jpg"
			projectLink="https://s3.chiem.me/implementing-slam-and-autonomous-navigation-on-a-turtlebot3.pdf"
			imageFit
		/>
		<Project
			title="Wall Climbing Robot"
			description="A wall climbing robot controlled by a Raspberry Pi that utilized pressure differentials to stick to walls. This project was created in collaboration with Samuel Martineau."
			image="robot-grimpeur.jpg"
			projectLink="https://github.com/Robot-Grimpeur"
		/>
		<Project
			title="Capture the Flag"
			description="A multiplayer capture the flag game built using JavaScript and Socket.IO."
			image="capture-the-flag.jpg"
			sourceCodeLink="https://github.com/dkchiem/Capture-the-Flag"
			projectLink="https://ctf.chiem.me"
		/>
		<Project
			title="Chez Tomio Website"
			description="A website for the Chez Tomio restaurant and food truck built with React. This project was created in collaboration with Samuel Martineau."
			image="chez-tomio-website.jpg"
			sourceCodeLink="https://github.com/Chez-Tomio/Chez-Tomio"
		/>
		<Project
			title="make-icns"
			description="A CLI written in JavaScript to convert a PNG image into an ICNS image."
			image="cli.jpg"
			sourceCodeLink="https://github.com/dkchiem/make-icns"
		/>
		<Project
			title="drive-flasher"
			description="A CLI written in JavaScript to flash an OS onto a removable drive for MacOS and Linux."
			image="cli.jpg"
			sourceCodeLink="https://github.com/dkchiem/drive-flasher"
		/>
		<Project
			title="generator-svelte"
			description="A Yeoman generator that generates a boilerplate Svelte app. This project was created in collaboration with Samuel Martineau."
			image="generator-svelte.gif"
			sourceCodeLink="https://github.com/Samuel-Martineau/generator-svelte"
			imageFit
		/>
		<Project
			title="Pac-Man"
			description="A Pac-Man game written in JavaScript."
			image="pac-man.jpg"
			sourceCodeLink="https://github.com/dkchiem/Pac-Man"
			projectLink="https://pac-man-game-js.netlify.app/"
		/>
		<Project
			title="Tetris 13kB Game"
			description="A 13kB Tetris game written in TypeScript. This game was built in collaboration with Samuel Martineau."
			image="tetris-3kb-game.jpg"
			sourceCodeLink="https://github.com/Samuel-Martineau/Tetris-13kB-Game"
			projectLink="https://tetris-13kb-game.netlify.app/"
		/>
		<Project
			title="MC-Config-Controller"
			description="A tool written in Dart to create Minecraft server networks easily. This project was created in collaboration with Samuel Martineau."
			image="mc-config-controller.png"
			sourceCodeLink="https://github.com/Samuel-Martineau/MC-Config-Controller"
			imageFit
		/>
		<Project
			title="EyeRest"
			description="A MacOS application that helps you take regular breaks for your eyes using the 20-20-20 rule built using JavaScript and Electron."
			image="eyerest.png"
			sourceCodeLink="https://github.com/dkchiem/EyeRest"
			imageFit
		/>
		<Project
			title="CodingForYou"
			description="A website built with Svelte and Sapper that contains an integrated payment system. This project was created in collaboration with Samuel Martineau."
			image="codingforyou.jpg"
			sourceCodeLink="https://github.com/CodingForYou-net"
		/>
	</div>
</section>

<style lang="scss">
	section {
		h2 {
			text-align: center;
			margin-bottom: 30px;
		}
		padding: 50px 10%;
		overflow: hidden;
		#projects {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 20px;
		}
		// :global(.project) {
		// 	margin-bottom: 40px;
		// 	&:last-child {
		// 		margin-bottom: 0;
		// 	}
		// }
	}
</style>
