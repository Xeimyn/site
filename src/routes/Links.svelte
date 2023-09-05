<style>
	.link {
		font-family: Roboto;
		color: white;
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

	.link:hover{
	filter:invert();
}
</style>

<div class="linkContainer">
	<a href="projects" class="link">Projects</a>
	<a href="thoughts" class="link">Thoughts</a>
	<a href="https://discord.gg/jP9Um5rUKR" target="_blank" class="link">Todo</a>
</div>