<script>
    import { onMount } from 'svelte';
	import { base }  from '$app/paths';
	import TagCloud from 'TagCloud';

	function clickEventHandler(e) {
		if (e.target.className === 'tagcloud--item') {
			window.open(`${base}/project/${e.target.innerText}`, '_blank');
		}
	}

	onMount(() => {
		const container = '.tagcloud';

		const texts = [
			'HideAway',
			'CGOL',
			'Year',
			'Site',
			'HawkEye',
		];

		const options = {
			radius:280,
			reverseDirection:true,
			maxSpeed:"fast",
			useHTML:true,
		};

		let myTagCloud = TagCloud(container, texts, options)
		var rootEl = document.getElementsByClassName('tagcloud')[0];
		rootEl.addEventListener('click', clickEventHandler);
})
</script>

<div class="flex-center full">
	<h2 class="title">Projects</h2>
	<div class="tagcloud" style="border: 2px solid white;"></div>
	<!-- <a href="https://xeimyn.dev" class="back">Back</a> -->
</div>
<style>

	.title {
		color: white;
		font-size: 10vh;
		margin-bottom: 3vh;
		margin-top: 3vh;
		text-decoration: underline;
	}


	.tagcloud {
		color: white;
	}

	.full {
		display: flex;
		flex-direction: column;
	}

	.tagcloud {
		width: 70vmin;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	:global(.tagcloud--item) {
		font-family: Roboto;
		color: white;
		background-color: black;
		text-align: center;
		font-size: 2vw;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: none;
		transition: 200ms filter;
		padding-left: max(0.5vw,5px);
		padding-right: max(0.5vw,5px);
		border-radius: 2vmin;
	}

	:global(.tagcloud--item):hover {
		filter: invert();
		cursor: pointer;
	}

</style>