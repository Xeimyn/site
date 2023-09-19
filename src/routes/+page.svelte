
<script>
	import Typewriter from './Typewriter.svelte';
    import Icons from './Icons.svelte';
    import Links from './Links.svelte';
    import Logo from './Logo.svelte';
</script>

<!------------- TODO ------------->
<!------------ mobile ------------>

<body class="flex-center">
	<div class="slider flex-center">
		<Logo />
		<div class="slider-left slider-side">
			<div class="TextSection">
				<h3 class="title">Hi, I'm Simon</h3>
				<Typewriter />
				<Links />
				<Icons />
			</div>
		</div>
		<div class="slider-right slider-side">
			<img class="arrow" src="arrow.svg" alt="arrow pointing to the right">
		</div>
	</div>
</body>

<style>
	:root {
		--slider-size: 1
	}
	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.TextSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: 2vw;
	}

	.title {
		font-size: max(5vw,52.5px);
		font-weight: 400;
		line-height: max(10vh, 59px);
		margin: 0;
		font-family: Roboto;
		color: white;
	}

	.slider-side {
		display: flex;
		aspect-ratio: 1.03896104	;
		min-width: calc(400px * var(--slider-size));
		max-width: calc(37vw * var(--slider-size));
		min-height: calc(32vw * var(--slider-size));
		max-height: calc(50vh * var(--slider-size));
		width: calc(38vw * var(--slider-size));
		height: calc(65vh * var(--slider-size));
		border-top: 0.5vmin solid white;
		border-bottom: 0.5vmin solid white;
	}

	.slider-left {
		border-radius: 999px 0px 0px 999px;
		border-left: 0.5vmin solid white;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}

	.slider-right {
		border-radius: 0px 999px 900px 0px;
		border-right: 0.5vmin solid white;
		align-items: center;
	}

	.arrow {
		min-width: 200px;
		width: 19vw;
	}
</style>