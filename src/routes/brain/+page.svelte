<script>
	import Thought from "../../lib/components/Thought.svelte";

	import { onMount } from 'svelte';
	onMount(async () => {
		const Thoughts = document.getElementsByClassName("Thought")
		// TODO | Do lots of math
	})
</script>

<body>
	<div class="content flex-center">
		<h3 class="backgroundText">BRAIN</h3>
		<Thought type="idea" title="test 1" description="This is a test 1" link="/#test1"/>
		<Thought type="blog" title="test 2" description="This is a test 2" link="/#test2"/>
		<Thought type="project" title="test 3" description="This is a tddddddddddddddddddddddddddddddddddest 3" link="/#test3"/>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Boston+Traffic&display=swap');

	.content {
		height: 100vh;
		overflow: hidden;
	}

	.backgroundText {
		position: relative;
		font-family: 'Boston Traffic', sans-serif;
		color: var(--accent-clr);
		opacity: 0.05;
		margin: 0;
		top: 10vh;
		left: 3vw;
		font-size: 82vh;
		pointer-events: none;
		user-select: none;
	}

</style>