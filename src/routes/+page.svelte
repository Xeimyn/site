
<script>
	let showContent = false

	// --------------------

	import Typewriter from './Typewriter.svelte';

</script>

<!------------- TODO ------------->
<!-- get the isOn stuff working -->
<!---------- scale svgs ---------->
<!----------- min size ----------->
<!------------ mobile ------------>
<!--Switch not using the if else-->

<div class="styleWrapper">
	<body class="flex-center no-select">
		<div class="slider flex-center">
			<button class="logo no-select" class:move={showContent} on:click="{() => showContent = !showContent}">
				<img src="logo.svg" alt="JCMS" class="logoImg">
			</button>
			<div class="slider-left slider-side">
				<div class="TextSection">
					<h3 class="title">Hi, I'm Simon</h3>
					<Typewriter />
					<div class="linkContainer">
						<a href="projects" class="link">Projects</a>
						<a href="thoughts" class="link">Thoughts</a>
						<a href="https://discord.gg/jP9Um5rUKR" target="_blank" class="link">Todo</a>
					</div>
					<div class="iconContainer">
						<a class="icon" href="https://dc.jcms.dev" target="_blank"><img class="iconImg" src="icons/discord.svg" alt="Join my discord server!"></a>
						<a class="icon" href="https://github.com/JustCallMeSimon26" target="_blank"><img class="iconImg" src="icons/github.svg" alt="Take a look at what im coding."></a>
						<a class="icon" href="https://twitter.com/JustCallSimon" target="_blank"><img class="iconImg" src="icons/twitter.svg" alt="Read my (rare) twee- ehh i mean X's"></a>
						<a class="icon" href="https://youtube.com/@JCMS__" target="_blank"><img class="iconImg" src="icons/youtube.svg" alt="Watch my non-existend videos."></a>
						<a class="icon" href="https://twitch.tv/JCMSimon" target="_blank"><img class="iconImg" src="icons/twitch.svg" alt="And my non-existend stream!"></a>
						<a class="icon" href="mailto:contact@jcms.dev" target="_blank"><img class="iconImg" src="icons/email.svg" alt="Or just send me a email i guess."></a>
					</div>
				</div>
			</div>
			<div class="slider-right slider-side">
				<img class="arrow" src="arrow.svg" alt="arrow pointing to the right">
			</div>
		</div>
	</body>
</div>

<style>

	:root {
		--slider-size: 1
	}

	/* For light mode someday™ */
	/* .styleWrapper {
		filter: invert();
	} */

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.no-select {
		user-select: none;
	}


	body {
		background-color: black;
		min-height: 100vh;
		min-width: 100vw;
		margin: 0;
	}

	h3,a {
		font-family: Roboto;
		color: white;
	}

	.logo {
		border: 0.5vmin solid white;
		border-radius: 69%;
		min-width: 400px;
		width: 38vw;
		aspect-ratio: 1;
		z-index: 5;
		position: absolute;
		transform: translateX(-51%);
		transition: 700ms transform;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		cursor: pointer;
	}

	.logoImg {
		max-width: 80%;
	}

	.move {
		transform: translateX(51%);
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
	}

	.linkContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 29vw;
		min-width: 305px;
		min-height: 30px;
		gap: max(2vw,20px);
		margin: 0;
		margin-top: max(2vh,10px);
		margin-bottom: max(2vh,10px);
	}

	.link {
		background-color: black;
		text-align: center;
		font-size: max(2.2vw,23px);
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: underline;
		transition: 200ms filter;
		padding-left: max(0.5vw,5px);
		padding-right: max(0.5vw,5px);
		border-radius: 2vmin;
	}

	.iconContainer {
		min-width: 305px;
		min-height: 31px;
		border-top: 1.1vmin dashed white;
		padding-top: 1vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: max(2vw,20px);
	}

	.icon {
		background-color: black;
		border: none;
		min-height: 31.5px;
		min-width: 31.5px;
		height: 3vw;
		width: 3vw;
		cursor: pointer;
		transition: 200ms filter;
		border-radius: 69%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon:hover, .link:hover{
		filter:invert();
	}

	.slider-side {
		min-width: calc(400px * var(--slider-size));
		min-height: calc(385px * var(--slider-size));
		width: calc(38vw * var(--slider-size));
		height: calc(65vh * var(--slider-size));
		border-top: 0.5vmin solid white;
		border-bottom: 0.5vmin solid white;
	}

	.slider-left {
		border-radius: 999px 0px 0px 999px;
		border-left: 0.5vmin solid white;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}

	.slider-right {
		border-radius: 0px 999px 900px 0px;
		border-right: 0.5vmin solid white;
		display: flex;
		align-items: center;
	}

	.arrow {
		min-width: 200px;
		width: 19vw;
	}
</style>