<script>
	import { onMount } from 'svelte';
	import { currentpage } from '$lib/stores.js';
	import { fade, blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let show = false;
	onMount(() => {
		currentpage.set('aboutme');
		show = true;
	});
</script>

<div class="container aboutme">
	{#if show}
		<a
			transition:fade={{
				delay: 0,
				duration: 1000,
				easing: quintOut
			}}
			href="/"><img id="logo" src="/logo.svg" alt="Rocket" /></a
		>
	{/if}
	<div class="mottotext">
		{#if show}
			<div transition:blur={{ delay: 500, duration: 1000, easing: quintOut }}>Building</div>
			<div transition:blur={{ delay: 1000, duration: 1000, easing: quintOut }}>an</div>
			<div transition:blur={{ delay: 1500, duration: 1000, easing: quintOut }}>immutable world</div>
			<div transition:blur={{ delay: 2000, duration: 1000, easing: quintOut }}>for</div>
			<div transition:blur={{ delay: 2500, duration: 1000, easing: quintOut }}>
				limitless freedom
			</div>
		{/if}
	</div>
</div>
