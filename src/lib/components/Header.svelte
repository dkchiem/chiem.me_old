<script lang="ts">
	let navOpen = false;

	// onMount(() => {
	// 	document.addEventListener('click', (e) => {
	// 		if (e.target && !navbar.contains(e.target)) {
	// 			navOpen = false;
	// 		}
	// 	});
	// });

	function openSidenav() {
		navOpen = true;
	}

	function closeSidenav() {
		navOpen = false;
	}

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', { detail: node }));
			} else {
				// node.dispatchEvent(new Event('click'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<header>
	<svg id="logo" viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M240 0H0V10C0 37.6142 22.3858 60 50 60H240C306.274 60 360 113.726 360 180C360 246.274 306.274 300 240 300H120V160H240C251.046 160 260 168.954 260 180C260 191.046 251.046 200 240 200H160V260H240C284.183 260 320 224.183 320 180C320 135.817 284.183 100 240 100H120H60V360H120H240C339.411 360 420 279.411 420 180C420 80.5887 339.411 0 240 0Z"
			fill="url(#paint0_linear_2_190)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_2_190"
				x1="82.6"
				y1="72.3"
				x2="274.572"
				y2="331.791"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#033FFF" />
				<stop offset="1" stop-color="#4A9FF5" />
			</linearGradient>
		</defs>
	</svg>

	<svg
		width="35"
		height="35"
		viewBox="0 0 24 24"
		id="hamburger-menu"
		fill="none"
		on:click={openSidenav}
	>
		<path d="M9 5H22M2 12H22M2 19H22" stroke="white" stroke-width="2" stroke-linecap="round" />
	</svg>

	<nav class:open={navOpen} use:clickOutside on:click_outside={closeSidenav}>
		<svg
			width="35"
			height="35"
			viewBox="0 0 24 24"
			id="x-hamburger-menu"
			fill="none"
			class:on={navOpen}
			on:click={closeSidenav}
		>
			<path
				d="M5.41421 5.00001L19.5563 19.1421M5 19.1421L19.1421 5"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>

		<ul>
			<li>
				<a class="drawline" on:click={closeSidenav} href="#skills">Skills</a>
			</li>
			<li>
				<a class="drawline" on:click={closeSidenav} href="#portfolio">Portfolio</a>
			</li>
			<li><a class="drawline" on:click={closeSidenav} href="#contact">Contact</a></li>
		</ul>
	</nav>

	<!-- <div id="overlay" class:on={navOpen} on:click={closeSidenav} /> -->
</header>

<style lang="scss">
	header {
		height: 100px;
		width: 100%;
		padding: 0 10%;
		background-color: var(--black-1);
		z-index: 500;
		display: flex;
		align-items: center;
		position: fixed;
		#logo {
			height: 2rem;
			margin-right: auto;
		}
		#hamburger-menu {
			display: none;
		}
		nav {
			display: flex;
			overflow: hidden;
			transition: right 0.3s, width 0.5s;
			#x-hamburger-menu {
				display: none;
			}
			ul {
				display: flex;
				li {
					list-style: none;
					padding: 20px 30px;
					a {
						text-decoration: none;
						white-space: nowrap;
					}
				}
			}
		}
	}

	// Small screens
	@media only screen and (max-width: 920px) {
		header {
			#hamburger-menu {
				display: block;
				cursor: pointer;
			}
			nav {
				flex-direction: column;
				position: fixed;
				height: 100vh;
				width: 0;
				top: 0;
				right: 0;
				background-color: var(--dark-1);
				z-index: 1000;
				// Overlay
				&::after {
					content: '';
					position: fixed;
					box-shadow: 0 0 0 max(100vh, 100vw) rgba(0, 0, 0, 0.5);
					width: 100%;
					height: 100%;
					opacity: 0;
					z-index: 999;
					transition: opacity 0.3s ease-in-out;
				}
				* {
					z-index: 1001;
				}
				#x-hamburger-menu {
					display: block;
					margin: 30px;
					cursor: pointer;
				}
				ul {
					flex-direction: column;
					width: 100%;
				}
				&.open {
					width: 50%;
				}
				&.open::after {
					opacity: 1;
				}
				@media only screen and (max-width: 600px) {
					&.open {
						width: 100%;
					}
				}
			}
		}
	}
</style>
