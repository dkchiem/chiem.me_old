<script lang="ts">
	import Social from './Social.svelte';
</script>

<footer>
	<div id="menu">
		<h3>Dan Chiem</h3>
		<ul>
			<li><a class="drawline" href="#my-skills">My Skills</a></li>
			<li><a class="drawline" href="#portfolio">Portfolio</a></li>
			<li><a class="drawline" href="#contact-me">Contact Me</a></li>
		</ul>
	</div>
	<Social />
</footer>

<style lang="scss">
	@media only screen and (max-width: 920px) {
		footer {
			#shapes-container {
				display: none;
			}
			#menu {
				padding-left: 30px;
			}
		}
	}
	footer {
		background-color: var(--dark-1);
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: end;
		#menu {
			display: flex;
			flex-direction: column;
			justify-content: center;
			z-index: 999;
			h3 {
				padding: 15px 0;
				color: var(--accent-1);
			}
			ul {
				display: flex;
				flex-direction: column;
				li {
					list-style: none;
					padding: 15px 40px;
					a {
						text-decoration: none;
					}
				}
			}
		}
		#github-icon {
			z-index: 1000;
			height: 50px;
			width: 50px;
			position: absolute;
			bottom: 50px;
			right: 50px;
			cursor: pointer;
			transition: 0.2s;
			&:hover {
				transform: scale(110%);
			}
		}
	}
</style>
