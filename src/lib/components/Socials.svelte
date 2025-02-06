<!-- TODO | convert into real component with for loop and such -->

<div class="Icons">
	<a class="icon" href="https://dc.jcms.dev" target="_blank"><img class="iconImg" src="icons/discord.svg" alt="Join my discord server!"></a>
	<a class="icon" href="https://link.jcms.dev/github" target="_blank"><img class="iconImg" src="icons/github.svg" alt="Take a look at what im coding."></a>
	<a class="icon" href="https://link.jcms.dev/twitter" target="_blank"><img class="iconImg" src="icons/twitter.svg" alt="Read my (rare) twee- ehh i mean X's"></a>
	<a class="icon" href="https://link.jcms.dev/youtube" target="_blank"><img class="iconImg" src="icons/youtube.svg" alt="Watch my non-existend videos."></a>
	<a class="icon" href="https://link.jcms.dev/twitch" target="_blank"><img class="iconImg" src="icons/twitch.svg" alt="And my non-existend stream!"></a>
	<a class="icon" href="mailto:contact@jcms.dev" target="_blank"><img class="iconImg" src="icons/email.svg" alt="Or just send me a email i guess."></a>
</div>

<style>

.Icons {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2vw;
}

.icon {
	background-color: black;
	height: 2.8vw;
	aspect-ratio: 1;
	cursor: pointer;
	transition: 200ms filter;
	border-radius: 69%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.iconImg {
	height: 50%;
}

.icon:hover{
	filter:invert();
}
</style>
