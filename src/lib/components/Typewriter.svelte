<script>
	import { onMount } from 'svelte';

	let textElement;
	export let strings
	let stringIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	function type() {
	  const currentString = strings[stringIndex];
	  if (!isDeleting) {
		textElement.textContent = currentString.substring(0, charIndex + 1);
		charIndex++;
	  } else {
		textElement.textContent = currentString.substring(0, charIndex - 1);
		charIndex--;
	  }

	  if (charIndex === currentString.length) {
		isDeleting = true;
		setTimeout(type, 3000); // Delay before starting to delete
	  } else if (charIndex === 0) {
		isDeleting = false;
		stringIndex = (stringIndex + 1) % strings.length;
		setTimeout(type, 300); // Delay before typing the next string
	  } else {
		if (isDeleting) {
			setTimeout(type, 40); // Typing speed
		} else {
			setTimeout(type, Math.random() * 100 + 70); // Randomise Typing speed if its not deleting
		}
	  }
	}

	onMount(() => {
	  type(); // Start the typewriter effect after the component mounts
	});
	</script>

<div class="typewriter" bind:this={textElement}></div>

<style>
.typewriter {
	font-family: Roboto;
	color: white;
	font-size: 2.7vw;
	font-weight: 400;
	margin: 0;
	overflow: hidden;
}
.typewriter::before {
	content: "A ";
}

.typewriter::after {
	position: absolute;
	content: "┃";
	font-family: monospace;
	animation: blink 1s infinite;
}


@keyframes blink {
	0%, 100% {
		color: white;
	}
	50% {
		color: black;
	}
}
</style>
