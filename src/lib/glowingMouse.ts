export function glow(node: HTMLElement, options: { glowColor: string; backgroundColor: string }) {
	const updateBackground = (x: number, y: number) => {
		const xy = `${x}px ${y}px`;
		node.style.background = `radial-gradient(circle ${window.innerHeight}px at ${xy}, ${options.glowColor}, ${options.backgroundColor}`;
	};

	let clientX = 0;
	let clientY = 0;
	const handleMouseMove = (event: MouseEvent | WheelEvent) => {
		clientX = event.clientX;
		clientY = event.clientY;
		const x = event.pageX - node.offsetLeft;
		const y = event.pageY - node.offsetTop;
		updateBackground(x, y);
	};

	const handleScroll = (event: Event) => {
		const x = clientX;
		const y = window.scrollY + clientY;
		updateBackground(x, y);
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
