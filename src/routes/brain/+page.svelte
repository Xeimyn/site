<script>
	import { onMount } from 'svelte';

	// i wanna instead show a loading thing and wait for the json to load (+ artificial min delay) that says its downloading from neuralink (or similar)

	var container
	let data;

	// entry is here
	onMount(async () => {
		// Get data
		const res = await fetch('/config/brain.json');
		data = await res.json();
		console.log(data);

		// Create Synapses
		await createSynapses(data)
	});

	function createSynapses(data) {
		const final = []
		for (let index = 0; index < data.length; index++) {
			const rawDataBlob = data[index];

			const description = document.createElement("h2")
			description.innerText = rawDataBlob.data.description
			description.classList.add("description")
			const title = document.createElement("h1")
			title.innerText = rawDataBlob.data.title
			title.classList.add("title")

			const synapse = document.createElement("div")
			synapse.append(title,description)

			synapse.classList.add(rawDataBlob.type)
			synapse.classList.add("synapse")

			container.append(synapse)

			const containerRect = container.getBoundingClientRect();
			const synapseRect = synapse.getBoundingClientRect();
			const maxX = containerRect.width - synapseRect.width;
			const maxY = containerRect.height - synapseRect.height;
			const x = random(0, maxX);
			const y = random(0, maxY);
			synapse.style.left = `${x}px`;
			synapse.style.top = `${y}px`;
		}
	}


	function random(min, max) {
		return Math.random() * (max - min) + min;
	}

	  // Render
	//   for (let b of boxes) {
	//     b.el.style.transform = `translate(${b.x}px, ${b.y}px) scale(${b.scale})`;
	//   }
	//   requestAnimationFrame(update);
	// }
</script>

<div class="container" bind:this={container}>
	<div style="margin-left:300px; margin-top:250px;" class="synapse project">
		<h1 class="title">YEAR</h1>
		<h2 class="description">A progress bar for the current year</h2>
	</div>
</div>

<style >
	.container {
		height: 100vh;
		width: 100vw;
	}

	:global(.synapse)  {
		position: absolute;
		height: 5vh;
		width: fit-content;
		transform-origin: top left;
	}

	:global(.title) {
		font-family: sans-serif;
		margin: 0;
		margin: 0.5vh 0.5vw;

		color: white;
	}

	:global(.description) {
		font-family: sans-serif;
		margin: 0;
		margin: 0.5vh 0.5vw;

		color: white;

		text-align: distribute;
		display: none;
	}

	:global(.synapse:hover) {
		height: fit-content;
		width: min(fit-content,40vw);
	}

	:global(.synapse:hover .description) {
		display:block;
	}

	:global(.synapse:hover .title) {
		display: none;
	}

	:global(.synapse.idea) {
		opacity: 0.5;
		border: 2px solid gray;
		transform: scale(0.5);
	}

	:global(.synapse.thought) {
		border: 2px solid white;
	}

	:global(.synapse.project) {
		border: 2px solid gold;
	}
</style>