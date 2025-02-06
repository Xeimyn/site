<script>
	import { showContentStore } from '../stores';

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
	border-radius: 69%;
	border: 0.5vmin solid white;
	width: 36vw;
	aspect-ratio: 1;
	z-index: 5;
	position: absolute;
	transform: translateX(-20%);
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
	transform: translateX(85%);
}

.attention::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	border-radius: 50%;
	animation: shockwave 1s .65s ease-out infinite;
	filter: invert();
}

@keyframes shockwave {
  0% {
	transform: scale(1);
	box-shadow: 0 0 2px rgba(0,0,0,0.15), inset 0 0 1px rgba(0,0,0,0.15);
  }
  95% {
	box-shadow: 0 0 50px rgba(0,0,0,0), inset 0 0 30px rgba(0,0,0,0);
  }
  100% {
	transform: scale(1.13);
  }
}

</style>

<button title="Click me!" class="logo no-select" class:attention={!showContent} class:move={showContent} on:click={toggleShowContent}>
	<img src="./assets/logo.svg" alt="JCMS" class="logoImg">
</button>