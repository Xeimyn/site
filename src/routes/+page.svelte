
<script>
	import SquigglyButton from "../lib/components/SquigglyButton.svelte";
</script>

<body>
	<div class="content flex-center">
		<img class="bracket" src="./assets/bracket.svg" alt="opening curly bracket"/>
		<h1 class="initial">X</h1>
		<div class="text-button-container flex-center-column">
			<h1 class="textart">EIMYN</h1>
			<div class="buttons flex-center">
				<SquigglyButton text="Brain" link="/brain"fontSize="10"/>
				<SquigglyButton text="Contact" link="/contact" fontSize="7.5"/>
			</div>
		</div>
		<img class="bracket rt-180" src="./assets/bracket.svg" alt="closing curly bracket"/>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Boston+Traffic&display=swap');

	.content {
		height: 100vh;
	}

	.initial {
		font-family: "Boston Traffic", sans-serif;
		font-size: 60vh;
		color: var(--accent-clr);
		/* This corrects the offset caused by letters like g hanging below the h2 */
		transform: translateY(8%);
	}

	.text-button-container {
		height: 57vh;
		justify-content: start;
		gap: 2vh;
	}

	.textart {
		margin: 0;
		font-family: "Boston Traffic", sans-serif;
		font-size: 25vh;
		color: var(--accent-clr);
		letter-spacing: 0.7vw;
		/* Stretch it out vertically */
		transform-origin: top;
		transform: scaleY(1.5);
		flex-grow: 0.4;
		/* The transform makes it overlap shit so we put it in the back */
		pointer-events: none;
	}

	.buttons {
		height: 20vh;
		width: 95%;
		transform: translateY(20%);
		justify-content: space-between;
	}

	/* --- */

	.bracket {
		height: 40%;
		margin-left: 0;
		margin-right: 2vw;
	}

	.rt-180 {
		rotate: 180deg;
		margin: 0;
		margin-left: 1vw;
	}
</style>