<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { glow } from '$lib/glowingMouse';
	import './app.scss';
</script>

<svelte:body use:glow={{ glowColor: 'var(--dark-1)', backgroundColor: 'var(--black-1)' }} />

<Header />
<main>
	<slot />
</main>
<Footer />
