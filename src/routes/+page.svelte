
<script>
	import LeftSide from '../lib/collections/LeftSide.svelte';
</script>

<body>
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

<style>
	.content {
		height: 100vh;
	}

	.slider {
		width:70vw;
		aspect-ratio: 2;
	}

	.side {
		width: 50%;
		height: 100%;
		border: var(--border-width) solid var(--accent-clr);
	}

	.left {
		border-radius: 69% 0% 0% 69%;
		border-right: none;
	}

	.left-active {
		height: 80%;
		width: 80%;
		margin-left: 10%;
	}

	.right {
		border-radius: 0% 69% 69% 0%;
		border-left: none;
	}

	.right-active {
		height: 80%;
		width: 80%;
		margin-right: 10%;
		justify-content: left;
	}

	.arrow {
		height: 70%;
		aspect-ratio: 1;
	}
</style>