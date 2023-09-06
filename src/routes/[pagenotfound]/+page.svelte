<script>
	import { page } from '$app/stores';
	const pagenotfound = $page.params.pagenotfound;
	import { Alert } from 'flowbite-svelte';
</script>

<Alert>
	<span class="font-medium">Info alert!</span>
	Change a few things up and try submitting again.
</Alert>

<h1>The page {pagenotfound} doesn't exist</h1>
