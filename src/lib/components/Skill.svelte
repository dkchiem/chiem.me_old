<script lang="ts">
	export let icon: string;
</script>

<div class="skill" style="mask-image: url(/skills/{icon})" />

<style lang="scss">
	.skill {
		height: 60px;
		width: 60px;
		margin-bottom: 10px;
		background-image: linear-gradient(var(--accent-1), var(--dark-1));
		background-position: 0 100%;
		mask-repeat: no-repeat;
		mask-size: contain;
		mask-position: center;
	}
</style>
