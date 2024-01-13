<script>
	import { showContentStore } from './store.js';

	let showContent;

	// Subscribe to the store and initialize showContent
	showContentStore.subscribe(value => {
	showContent = value;
	});

	// Update the store when showContent changes
	function toggleShowContent() {
	showContentStore.set(!showContent);
	}
</script>

<style>
.logo {
	border: 0.5vmin solid white;
	border-radius: 69%;
	min-width: 38vw;
	width: 38vw;
	aspect-ratio: 1;
	z-index: 5;
	position: absolute;
	transform: translateX(-48%);
	transition: 700ms transform;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	cursor: pointer;
}

.logoImg {
	min-width: 80%;
	max-width: 80%;
}

.move {
	transform: translateX(48%);
}

</style>

<button title="Click me!" class="logo no-select" class:move={showContent} on:click={toggleShowContent}>
	<img src="logo.svg" alt="JCMS" class="logoImg">
</button>