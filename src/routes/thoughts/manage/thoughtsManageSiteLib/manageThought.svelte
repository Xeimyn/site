<script>
	export let title
	export let date
	// convert date (which is in unix time) to dd month_name yyyy
	let dateObj = new Date(date * 1000);
	let month = dateObj.getUTCMonth() + 1;
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();
</script>

<div class="manageThought">
	<h3 class="thoughtDate">{day}/{month}/{year}</h3>
	<h2 class="thoughtTitle">{title}</h2>
	<button class="ctmbutton">EDIT</button>
	<button class="ctmbutton">DELETE</button>
	<button class="ctmbutton">RENAME</button>
	<button class="ctmbutton">PUBLIC</button>
	<button class="ctmbutton">VIEW</button>
</div>

<style>
	.manageThought {
		display: flex;
		align-items: center;
		min-width: 45vw;
		gap: 2vw;
	}
	
	.thoughtTitle {
		min-width: 30vw;
		max-width: 30vw;
	}
	
	.thoughtDate, .thoughtTitle {
		font-family: Roboto;
	}
	
	.ctmbutton {
		font-family: Roboto;
		font-size: 1.5vmin;
		padding: 1vmin;
		border-radius: 5vmin;
		border: 0.3vmin solid white;
		background-color: black;
		color: white;
	}
	
	.ctmbutton:hover {
		filter: invert();
		cursor: pointer;
	}
	
</style>