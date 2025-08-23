<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '@iconify/svelte'
    import Logo from '$lib/assets/components/Logo3.svelte';
	import { fly } from 'svelte/transition';
    import LightSwitch from '$lib/assets/components/LightSwitch.svelte';
    import { page } from '$app/state';
	let { children,data } = $props();
	let wWidth = $state()
	let sidenav = $state(false);
</script>
<svelte:window bind:innerWidth={wWidth}></svelte:window>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


	<div class="min-h-dvh flex flex-col">
{#if sidenav}
	<nav transition:fly={{x:500,duration:500}} class="sidenav absolute h-full {wWidth>1100?"w-[30vw]":"w-full"} bg-surface-50 dark:bg-surface-950 right-0">
		<button onclick={()=>{sidenav=!sidenav}}><Icon icon="line-md:close" class="text-4xl text-black dark:text-white m-8" /></button>
		<div class="links flex flex-col gap-4 items-center">
			<button onclick={()=>{sidenav=false}}><a href="/?section=packages" class="btn">Packages</a></button>
			<a href="/changelog" class="btn">Changelog</a>
			<a href="/about" class="btn">About</a>
			<a href="/docs" class="btn">Docs</a>
			<a href="/contact" class="btn">Contact</a>
		</div>
	</nav>
{/if}

<nav class="flex items-center justify-between h-22 border-b-1 px-6">
	<div class="left">
		<a href="/"><Logo classs="fill-primary-500 h-12 aspect-auto"/></a>
	</div>
	<div class="right flex items-center">
{#if wWidth>1100}
		<a href="/?section=packages" class="btn">Packages</a>
		<a href="/changelog" class="btn">Changelog</a>
		<a href="/about" class="btn">About</a>
		<a href="/docs" class="btn">Docs</a>
		<a href="/contact" class="btn">Contact</a>
		{#if !data.user}
			<a href="/register" class="btn bg-primary-500">Get Started</a>
			{:else}
			<a href="/dashboard" class="btn bg-primary-500">Dashboard</a>
		{/if}
	{:else}
		<button onclick={()=>{sidenav = !sidenav}}><Icon icon="solar:hamburger-menu-broken" class="text-4xl"/></button>
{/if}	
	</div>
</nav>
{@render children?.()}
	</div>
<footer>

</footer>