<script lang="ts">
	import Project from '../lib/components/Project.svelte';
	import Button from '../lib/components/Button.svelte';
</script>

<section id="featured-project">
	<Project
		topTitle="Featured Project"
		title="Capture the Flag"
		description="This is a small multiplayer &quot;capture the flag&quot; game I made for a school project. It is written
	in JavaScript. The package &quot;Socket.IO&quot; is used for the multiplayer functionality. The goal is
	to capture the other team's flag and bring it back to your own team's chest. There is a blue
	team and a red team. The game is played in a 2D world with walls and speed boosts. Players are
	automatically split into two teams by the server. Have fun!"
		image="/capture-the-flag.png"
	>
		<Button text="Source code" href="https://github.com/dkchiem/Capture-the-Flag" />
		<Button text="Play!" href="https://ctf.chiem.me" />
	</Project>
</section>

<style lang="scss">
	section {
		background-color: #ecfcff;
		padding: 50px 10%;
	}
</style>
