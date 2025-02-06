<script>
	export let socials
</script>

<div class="Icons">
	{#each socials as social}
		<a class="icon" href={social.link} target="_blank">
			<img class="iconImg" src={`icons/${social.icon}.svg`} alt={social.alt}>
		</a>
	{/each}
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
	background-color: var(--background-clr);
	height: 3vw;
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
