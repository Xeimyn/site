<script>
	export let type // idea, project, blog
	export let title = "PLACEHOLDER"
	export let description = "This is a very short description."
	export let link = "https://google.com"

	let isIdea = false
	let isBlog = false
	let isProject = false

	// switch to set vars depending on type
	if (type.toLowerCase() == "idea") {
		isIdea = true
	} else if (type.toLowerCase() == "blog") {
		isBlog = true
	} else if (type.toLowerCase() == "project") {
		isProject = true
	}

	let expanded = false
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="Thought" class:idea={isIdea} class:project={isProject} class:blog={isBlog}
	on:mouseenter={() => {expanded = true}}
	on:mouseleave={() => {expanded = false}}
	on:click={(expanded) => { if(expanded) {window.open(link, "_blank", "noopener noreferrer");}}}
>
	{#if !expanded}
		<h2 class="title">{title}</h2>
	{:else}
		<h3 class="description">{description}</h3>
	{/if}

</div>

<style>
	.Thought {
		position: absolute;
		transition: 200ms;
		padding: 1vh;
		height: 30px;
		width: 100px;
		border-radius: 16px;
		color: var(--accent-clr)
	}

	.Thought:hover {
		width: fit-content;
		cursor: pointer;
	}

	.title, .description {
		margin: 0;
		text-align: center;
	}

	.idea {
		transform: translateX(-20vw);
		border: 2px dashed var(--accent-clr);
	}

	.blog {
		border: 2px dotted rebeccapurple;
	}

	.project {
		transform: translateX(20vw);
		border: 2px solid var(--accent-clr);
	}

</style>
