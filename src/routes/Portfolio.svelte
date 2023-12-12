<script>
	import Project from '$lib/components/Project.svelte';
	import Button from '$lib/components/Button.svelte';
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
		title="chiem.me"
		description="Of course, I had to include this website which was built with Svelte."
	>
		<Button text="Source code" href="https://github.com/dkchiem/chiem.me" />
	</Project>
	<Project
		title="Capture the Flag"
		description="A small multiplayer capture the flag game written in JavaScript that I made for a school project. The Socket.IO package was used for the multiplayer functionality. The goal of this game is to capture the other team's flag and bring it back to your own team's chest. The first team that captures the other team's flag three times will win. The game is played in a 2D world with walls and speed boosts. Players are automatically split into two teams by the server."
		image="/capture-the-flag.jpg"
	>
		<Button text="Source code" href="https://github.com/dkchiem/Capture-the-Flag" />
		<Button text="Play" href="https://ctf.chiem.me" />
	</Project>
	<Project
		title="Chez Tomio Website"
		description="A website for the Chez Tomio restaurant and food truck built with React. This project was created in collaboration with Samuel Martineau."
		image="/chez-tomio-website.jpg"
	>
		<Button text="Source code" href="https://github.com/Chez-Tomio/Chez-Tomio" />
		<Button text="View organization" href="https://github.com/Chez-Tomio" />
	</Project>
	<Project
		title="make-icns"
		description="make-icns is a CLI that converts a single PNG image into a ICNS image. It does this very quickly with very good quality. This CLI is designed to be simple to use on your local machine and to implement in other projects."
	>
		<Button text="Source code" href="https://github.com/dkchiem/make-icns" />
	</Project>
	<Project
		title="drive-flasher"
		description="drive-flasher is a CLI written in JavaScript to flash an OS onto a removable drive. It is designed to be simple to use on your MacOS or Linux computer."
	>
		<Button text="Source code" href="https://github.com/dkchiem/drive-flasher" />
	</Project>
	<Project
		title="generator-svelte"
		description="generator-svelte is a Yeoman generator that generates a boilerplate Svelte app. This project was created in collaboration with Samuel Martineau."
		image="/generator-svelte.gif"
		imageFit
	>
		<Button text="Source code" href="https://github.com/Samuel-Martineau/generator-svelte" />
	</Project>
	<Project
		title="Pac-Man"
		description="A Pac-Man game written in JavaScript made for a school project."
		image="/pac-man.png"
	>
		<Button text="Source code" href="https://github.com/dkchiem/Pac-Man" />
		<Button text="Play" href="https://pac-man-game-js.netlify.app/" />
	</Project>
	<Project
		title="Tetris 13kB Game"
		description="A Tetris game written in TypeScript that is smaller than 13kB after being compressed. This game was built in collaboration with Samuel Martineau."
		image="/tetris-3kb-game.jpg"
	>
		<Button text="Source code" href="https://github.com/Samuel-Martineau/Tetris-13kB-Game" />
		<Button text="Play" href="https://tetris-13kb-game.netlify.app/" />
	</Project>
	<Project
		title="MC-Config-Controller"
		description="A tool written in Dart to create Minecraft server networks easily. This project was created in collaboration with Samuel Martineau."
		image="/mc-config-controller.png"
		imageFit
	>
		<Button text="Source code" href="https://github.com/Samuel-Martineau/MC-Config-Controller" />
	</Project>
	<Project
		title="EyeRest"
		description="A MacOS application that can helps you take regular breaks for your eyes using the 20-20-20 rule. This application was written in JavaScript using the Electron package."
		image="/eyerest.png"
		imageFit
	>
		<Button text="Source code" href="https://github.com/dkchiem/EyeRest" />
	</Project>
	<Project
		title="CodingForYou"
		description="A website development company that I created with Samuel Martineau. Its website was built with Svelte and Sapper and contained an integrated ordering and payment system."
		image="/codingforyou.jpg"
	>
		<Button text="View organization" href="https://github.com/CodingForYou-net" />
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
