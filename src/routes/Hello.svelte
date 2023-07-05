<section>
	<div id="content">
		<h1 id="hi" class="rellax" data-rellax-speed="30">Hi, I'm Dang Khoa.</h1>
		<div id="shapes">
			<!-- row 1 -->
			<div class="shape empty" />
			<div class="shape empty" />
			<div class="shape empty" />
			<div class="shape square blue rellax" data-rellax-speed="14" />
			<div class="shape empty" />
			<!-- row 2 -->
			<div class="shape empty" />
			<div class="shape circle gray rellax" data-rellax-speed="10" />
			<div class="shape square light-blue rellax" data-rellax-speed="6" />
			<div class="shape empty" />
			<div class="shape square light-blue rellax" data-rellax-speed="10" />
			<!-- row 3 -->
			<div class="shape square light-blue rellax" data-rellax-speed="8" />
			<div class="shape square blue rellax" data-rellax-speed="6" />
			<div class="shape circle gray rellax" data-rellax-speed="10" />
			<div class="shape square light-blue rellax" data-rellax-speed="4" />
			<div class="shape circle gray rellax" data-rellax-speed="16" />
		</div>
	</div>
</section>

<style lang="scss">
	@keyframes arrowUpDown {
		0% {
			transform: translateX(2px);
		}
		50% {
			transform: translateX(-2px);
		}
		100% {
			transform: translateX(2px);
		}
	}

	section {
		height: calc(100vh - 150px);
		overflow: hidden;
		position: relative;
		#content {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			position: relative;
			height: 70vh;
			#hi {
				margin-bottom: 50px;
			}
			#shapes {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				grid-gap: calc(10vh / 10);
				.shape {
					height: 10vh;
					width: 10vh;
					&.square {
						border-radius: calc(10vh / 5);
					}
					&.circle {
						border-radius: 100%;
					}
					&.blue {
						background-color: #3e64ff;
						box-shadow: inset calc(10vh / 10) calc(10vh / 10) calc(10vh / 5) darken(#3e64ff, 25%);
					}
					&.light-blue {
						background-color: #5edfff;
						box-shadow: inset calc(10vh / 10) calc(10vh / 10) calc(10vh / 5) darken(#5edfff, 25%);
					}
					&.gray {
						background-color: #e6e8ea;
						box-shadow: inset calc(10vh / 10) calc(10vh / 10) calc(10vh / 5) darken(#e6e8ea, 25%);
					}
				}
			}
		}
	}
</style>
