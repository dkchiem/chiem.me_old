<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import './app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
