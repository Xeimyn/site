<script>
	import { base } from '$app/paths';
</script>

<a href="{base}/" class="backButton">Back</a>

<style>
	.backButton {
		background-color: black;
		color: white;
		font-family: roboto;
		font-size: 5vw;
		border: 0.5vmin solid white;
		border-radius: 30px;
		padding: 1vmin;
		margin-top: 0;
		text-decoration: none;
	}

	.backButton:hover {
		filter: invert();
	}
</style>