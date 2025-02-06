
<script>
	import LeftSide from '../lib/collections/LeftSide.svelte';
</script>

<body style="">
	<div class="content flex-center">
		<div class="slider flex-center">
			<div class="left side flex-center">
				<div class="left-active flex-center-column">
					<LeftSide/>
				</div>
			</div>
			<div class="right side flex-center">
				<div class="right-active flex-center">
					<img src="./assets/arrow.svg" alt="" class="arrow">
				</div>
			</div>
		</div>
	</div>
</body>

<!-- TODO | Adjust sizes of things -->

<style>
	.content {
		height: 100vh;
	}

	.slider {
		width:70vw;
		aspect-ratio: 2;
		/* background-color: red; */
	}

	.side {
		width: 50%;
		height: 100%;
		/* background-color: blue; */
	}

	.left {
		border-radius: 69% 0% 0% 69%;
		border: 2px solid white;
		border-right: none;
	}

	.left-active {
		height: 80%;
		width: 79%;
		margin-left: 10%;
		/* background-color: purple; */
	}
	.right {
		border-radius: 0% 69% 69% 0%;
		border: 2px solid white;
		border-left: none;
	}

	.right-active {
		height: 80%;
		width: 79%;
		margin-right: 21%;
		/* background-color: orange; */
	}

	.arrow {
		height: 50%;
		aspect-ratio: 1;
	}
</style>