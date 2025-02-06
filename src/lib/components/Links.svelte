<script>
	import { base }  from '$app/paths';
</script>

<!-- TODO | Convert into real component with for loop too -->

<div class="linkContainer">
	<a href="{base}/projects" class="link">Projects</a>
</div>

<style>
	.link {
		font-family: Roboto;
		color: white;
	}

	.linkContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: max(2vw,20px);
		margin: 0;
		margin-top: max(2vh,2vmin);
		margin-bottom: max(2vh,2vmin);
	}

	.link {
		background-color: black;
		text-align: center;
		font-size: 2.2vw;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: underline;
		transition: 200ms filter;
		padding-left: max(0.5vw,2vmin);
		padding-right: max(0.5vw,2vmin);
		border-radius: 2vmin;
	}


	.link:hover{
	filter:invert();
}

</style>