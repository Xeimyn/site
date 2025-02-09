<script>
	import { page } from "$app/stores";
	import { base } from '$app/paths';

	let randomCatImage = "";

	async function getImage() {
	  try {
		const response = await fetch("https://api.thecatapi.com/v1/images/search");
		const data = await response.json();
		randomCatImage = data[0].url;
	  } catch (error) {
		console.error("Error fetching cat image (dont care lol | show my logo ig)", error);
	  }
	};
  </script>

<div class="content">
	<h1 class="text">{$page.status} - {$page.error.message}</h1>
	{#await getImage()}
		<h2 class="text">Looking for a cute cat...</h2>
	{:then}
		{#if randomCatImage}
			<h2 class="text">Found a cute kitty!</h2>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- Disabling it is fine, i made sure to adjust the pointer in css and give it a title that tells you that you can click it -->
			<img class="img404 ctm-border" on:click={() => getImage()} src={randomCatImage} title="Click to get a different image" alt="A (probably) really cute cat :3" />
		{:else}
			<h2 class="description text">This is not a valid url and... id show you a cute cat but that didnt work :c</h2>
			<img class="img404 ctm-border" src="{base}/logo.svg" alt="JCMS" title="just my logo :c (take at least this cat: 🐈)" />
		{/if}
	{/await}
</div>

<style>
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2vh;
		overflow: hidden;
	}

	.text {
		font-size: 2vw;
		color: white;
		font-family: Roboto;
	}

	.img404 {
		aspect-ratio: initial;
		border-color: white;
		max-width: 80%;
		max-height: 30%;
		transition: 0.5s ease-out;
		cursor: pointer;
		/* Need this for the transition to work */
		min-height: 0px;
	}
	.img404:hover {
		aspect-ratio: initial;
		border-color: white;
		min-height: 96vh;
		max-width: 90vw;
		padding: 1vh;
		z-index: 5;
		transform: translateY(-3vh);
	}


</style>