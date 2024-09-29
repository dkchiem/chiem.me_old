export function glow(node: HTMLElement, options: { glowColor: string; backgroundColor: string }) {
	let clientX = 0;
	let clientY = 0;

	const updateBackground = () => {
		const x = window.scrollX + clientX;
		const y = window.scrollY + clientY;
		const xy = `${x}px ${y}px`;
		node.style.background = `radial-gradient(circle ${window.innerHeight}px at ${xy}, ${options.glowColor}, ${options.backgroundColor}`;
	};

	const handleMouseMove = (event: MouseEvent | WheelEvent) => {
		clientX = event.clientX;
		clientY = event.clientY;
		updateBackground();
	};

	const handleScroll = (event: Event) => {
		updateBackground();
	};

	document.addEventListener('mousemove', handleMouseMove, true);
	document.addEventListener('scroll', handleScroll, true);

	return {
		destroy() {
			document.removeEventListener('mousemove', handleMouseMove, true);
			document.removeEventListener('scroll', handleScroll, true);
		}
	};
}
