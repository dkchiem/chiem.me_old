<script>
	let navOpen = false;

	function openSidenav() {
		navOpen = true;
	}

	function closeSidenav() {
		navOpen = false;
	}
</script>

<header>
	<div id="brand">
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
	</div>

	<svg
		width="35"
		height="35"
		viewBox="0 0 24 24"
		id="hamburger-menu"
		fill="none"
		on:click={openSidenav}
	>
		<path d="M9 5H22M2 12H22M2 19H22" stroke="black" stroke-width="2" stroke-linecap="round" />
	</svg>

	<nav class:open={navOpen}>
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
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>

		<ul>
			<li>
				<a class="drawline" on:click={closeSidenav} href="#my-skills">My Skills</a>
			</li>
			<li>
				<a class="drawline" on:click={closeSidenav} href="#portfolio">Portfolio</a>
			</li>
			<li><a class="drawline" on:click={closeSidenav} href="#contact-me">Contact Me</a></li>
		</ul>
	</nav>

	<div id="overlay" class:on={navOpen} on:click={closeSidenav} />
</header>

<style lang="scss">
	header {
		height: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: relative;
		#brand {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 10%;
			#logo {
				height: 2.5rem;
				margin-right: 1.5rem;
			}
		}
	}

	// Small screens
	@media only screen and (max-width: 920px) {
		#hamburger-menu {
			display: block;
		}
		nav {
			position: fixed;
			height: 100vh;
			width: 0;
			top: 0;
			right: 0;
			background-color: white;
			z-index: 1000;
			ul {
				position: absolute;
				left: 60px;
				flex-direction: column;
				margin-top: 80px;
			}
			#x-hamburger-menu {
				display: none;
				position: absolute;
				top: 30px;
				left: 30px;
				cursor: pointer;
				&.on {
					display: block;
				}
			}
			&.open {
				width: 50%;
			}
			@media only screen and (max-width: 600px) {
				&.open {
					width: 100%;
				}
			}
		}
	}

	// Large screens
	@media only screen and (min-width: 920px) {
		#hamburger-menu {
			display: none;
		}
		nav {
			align-items: center;
			ul {
				position: absolute;
				right: 10%;
			}
			#x-hamburger-menu {
				display: none;
			}
		}
		#overlay {
			display: none;
		}
	}

	#hamburger-menu {
		position: absolute;
		right: 10%;
		cursor: pointer;
	}

	nav {
		display: flex;
		justify-content: center;
		transition: right 0.3s;
		overflow: hidden;
		transition: width 0.5s;
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

	#overlay {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0.5;
		z-index: 500;
		transition: visibility 0.3s linear, opacity 0.3s linear;
		visibility: hidden;
		opacity: 0;
		&.on {
			opacity: 1;
			visibility: visible;
		}
	}
</style>
