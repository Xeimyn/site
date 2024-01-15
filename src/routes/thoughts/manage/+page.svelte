<script>
	import { isAuthenticated } from './thoughtsManageSiteLib/store.js';
	import { password } from './thoughtsManageSiteLib/store.js';

	let authenticated
	let pw
	
	// Subscribe to the store and initialize isAuthenticated
	isAuthenticated.subscribe(value => {
	authenticated = value;
	});

	// Subscribe to the store and initialize isAuthenticated
	password.subscribe(value => {
	pw = value;
	});
	
	function tryAuth(password) {	
	console.log(password)
		// do stuff
	if (password == "password") {
		pw = password
		authenticated = true
	}
	// do stuff
}
	
</script>

<body>	
	{#if authenticated == true}
		<div class="mainContainer">
			<!-- {#await } -->
				<!-- <h2 class="loading">Loading</h2>			 -->
			<!-- {:then }  -->
				<div class="thoughtsTable">
					<!-- {#each thoughts as thought} -->
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
						<div class="item"></div>
					<!-- {/each} -->
				</div>
			<!-- {/await} -->
			<div class="passwordText" style="color:white">Your Password is <mark class="blur">{pw}</mark></div>	
		</div>
	{:else}
	<div class="pwContainer">
		<!-- only set the value if they key pressed is the enter key -->
		<input on:input={e => tryAuth(e.target.value)} title="If you're not Simon fuck off <3" placeholder="PASSWORD" type="password" name="password" id="password" class="passwordInput">
	</div>
	{/if}
</body>

<style>
	.loading {
		font-family: roboto;
		font-size: 90pt;
		color: white;
		height: fit-content	;
		margin: 0;
		margin-top: 40vh;
		animation: infinite rotate 0.2s linear;
	}
	
	@keyframes rotate {
		0% {
			color: black;
		}
		50% {
			color: white;
		}
		100% {
			color: black;
			transform: rotate(360deg);
		}
	}
	
	.mainContainer {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}
	
	.thoughtsTable {
		/* 6 columns, n rows */
		/* date views(if possible have a ranking and graph later) title(hyperlink) public(toggle) edit(new menu) delete(with confirm) */
		display: grid; 
		min-width: 200px;
		background-color: gray;
	}
	
	.item {
		background-color: white;
		width: 50px;
		height: 50px;
	}
	
	.passwordInput::placeholder {
		font-family: Roboto;
	}
	
	.pwContainer {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	
	.passwordInput:focus-visible {
		outline: none;
	}
	
	.passwordInput {
		scale: 2;
		border-radius: 5vmin;
		border: 0.5vmin solid white;
		background-color: black;
		width: 20vw;
		color: white;
		font-size: max(3vw,16px);
		text-align: center;
	}
	
	.passwordText {
		color: white;
		font-family: Roboto;
		font-size: 2.5vmin;
		position: fixed;
		bottom: 1vmin;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}
	
	.blur {
		color: white;
		background-color: black;
		filter: blur(20px);
		transition: 0s;
		font-family: monospace;
		border: 0.5vmin solid white;
	}
	
	.blur:hover {
		border-radius: 1vmin;
		/* padding: 0 1vmin 0 1vmin; */
		filter: blur(0px);
		transition: 4s;
		user-select: all;
	}
</style>