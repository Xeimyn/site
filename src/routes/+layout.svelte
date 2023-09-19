<script>
	import { lightModeStore } from './store.js';

	let lightMode;

	// Subscribe to the store and initialize showContent
	lightModeStore.subscribe(value => {
	lightMode = value;
	});

	// Update the store when showContent changes
	function toggleLightMode() {
	lightModeStore.set(!lightMode);
	}
</script>

<div style="transition: 0.5s;" class:lightMode={lightMode}>
	<button class="modeToggle" on:click={toggleLightMode} class:rotated={lightMode}>
		<img class="themeIcon sun" src="icons/github.svg" alt="Sun">
		<img class="themeIcon moon" src="icons/twitter.svg" alt="Moon">
	</button>
	<slot></slot>
</div>

<style>
	.lightMode {
		filter:invert();
	}
	
	.rotated {
		transform: translate(calc(20vw / 2),calc(-20vw / 2)) rotate(90deg) !important; 
	}
	
	.themeIcon {
		position: absolute;
		width: 7vw;
		bottom: 2.5vw;
	}
	
	.sun {
		left: 2.5vw;
	}
	
	.moon {
		right: 2.5vw;
		transform: rotate(-90deg);
	}
	
	.modeToggle {
		transition: 0.5s;
		position: absolute;
		top: 0;
		right: 0;
		min-height: 20vw;
		min-width: 20vw;
		border-radius: 69%;
		transform: translate(calc(20vw / 2),calc(-20vw / 2) );
		background-color: black;
		border: 0.5vmin solid white;
		z-index: 3;
	}
</style>