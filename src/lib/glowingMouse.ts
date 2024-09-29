export function glow(node: HTMLElement, options: { glowColor: string; backgroundColor: string }) {
	const handleMouseMove = (event: MouseEvent) => {
		const x = event.pageX - node.offsetLeft;
		const y = event.pageY - node.offsetTop;
		const xy = `${x}px ${y}px`;

		node.style.background = `radial-gradient(circle ${window.innerHeight}px at ${xy}, ${options.glowColor}, ${options.backgroundColor}`;
	};

	document.addEventListener('mousemove', handleMouseMove, true);

	return {
		destroy() {
			document.removeEventListener('mousemove', handleMouseMove, true);
		}
	};
}
