<script>
    import { onMount } from 'svelte';
	import { base }  from '$app/paths';
	import GenericButton from '../../lib/components/GenericButton.svelte';
	import TagCloud from 'TagCloud';

	// Click handler when clicking on a tag in the cloud
	function clickEventHandler(e) {
		if (e.target.className === 'tagcloud--item') {
			window.open(`${base}/project/${e.target.innerText.toLowerCase()}`, '_blank');
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
			// TODO | Make radius responsive
			radius:280,
			reverseDirection:true,
			maxSpeed:"fast",
		};

		let myTagCloud = TagCloud(container, texts, options)
		var rootEl = document.getElementsByClassName('tagcloud')[0];
		rootEl.addEventListener('click', clickEventHandler);

	});
</script>

<div class="flex-center full">
	<h2 class="title">Projects</h2>
	<div class="tagcloud" style="border: 0.5vmin solid white;"></div>
	<GenericButton text="Back" link="https://xeimyn.dev"/>
</div>
<style>

	.title {
		color: white;
		font-size: 10vh;
		margin-bottom: 4vh;
		margin-top: 3vh;
		text-decoration: underline;
	}

	.full {
		display: flex;
		flex-direction: column;
	}

	:global(.tagcloud) {
		overflow: hidden;
		width: 50vw;
		height: 65vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Item styling */
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
		border-radius: 0.5vmin;
	}

	:global(.tagcloud--item):hover {
		filter: invert();
		cursor: pointer;
	}
</style>