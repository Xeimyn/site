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
		<img class="themeIcon sun" src="themeIcons/Sun.svg" alt="Sun Icon (Turn on light mode)">
		<img class="themeIcon moon" src="themeIcons/Moon.svg" alt="Moon Icon (Turn off light mode">
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
		bottom: 2vw;
	}
	
	.sun {
		left: 2.5vw;
	}
	
	.moon {
		right: 1.5vw;
		padding-bottom: 1vw;
		transform: rotate(-90deg);
	}
	
	.modeToggle {
		opacity: 50%;
		transition: 0.5s transform;
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