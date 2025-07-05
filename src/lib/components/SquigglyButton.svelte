<script>
	export let text = "Button"
	export let fontSize = "8"
	export let link = "https://google.com"
</script>

<defs>
	<filter id="jagged" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
		<!-- Lower baseFrequency for smoother waves -->
		<feTurbulence baseFrequency="0.03" numOctaves="1" result="turbulence"/>
		<!-- Less scale for gentler displacement -->
		<feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" xChannelSelector="R" yChannelSelector="G"/>
	</filter>
</defs>

<button class="squiggly">
	<a class="btn-text" href={link}
		style="font-size: {fontSize}vh;
			   padding: {Number(fontSize) + 5}%;"
	>{text}</a>
	</button>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

	.btn-text {
		font-family: 'Gochi Hand', sans-serif;
		color: var(--accent-clr);
		text-decoration: none;
		z-index: 3;
	}

	button {
		height: 78%;
		width: 45%;
	}

	.squiggly {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--background-clr);
		/* Remove default border */
		border: none;
		/* border-radius: 20px; */
		/* z-index: 1; */
  	}

	.squiggly::before {
		content: '';
		position: absolute;
		top: 0; left: 0; right: 0; bottom: 0;

		border-radius: 24px;
		pointer-events: none;
		z-index: 0;
		box-shadow:
		0 0 0 10px white,
		1px 1px 0 10px white,
		-1px -1px 0 1px white;
		filter: url(#jagged);
	}
</style>
