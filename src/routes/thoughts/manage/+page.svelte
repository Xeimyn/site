<script>
	import { isAuthenticated } from './thoughtsManageSiteLib/store.js';
	import { passwordStore } from './thoughtsManageSiteLib/store.js';

	let authenticated
	let password
	
	// Subscribe to the store and initialize isAuthenticated
	isAuthenticated.subscribe(value => {
	authenticated = value;
	});

	// Subscribe to the store and initialize isAuthenticated
	passwordStore.subscribe(value => {
	password = value;
	});
		
  function tryAuth() {
	// disable input item
	document.getElementById('password').disabled = true;
	
	fetch('http://api.jcms.dev/auth', {
		method : 'POST',
		mode   : 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			pw: password
		})
	})
	.then(response => response.json())
	.then(
		data => {
			if (data === true) {
				isAuthenticated.set(true);
			}
			else {
				isAuthenticated.set(false);
				alert("If you're not Simon please fuck off <3 (wrong password)");					
				document.getElementById('password').value = "";
				document.getElementById('password').disabled = false;
				document.getElementById('password').focus();
			}
		}
	)
}

function getTitlesAndDates() {
	return fetch('http://api.jcms.dev/getTitlesAndDates', {
		method : 'POST',
		mode   : 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			pw: password
		})
	})
}
</script>

<body>	
	{#if authenticated === true}
		<div class="mainContainer">
			<h2 style="color:white">Logged in!</h2>
			<div class="passwordText" style="color:white">Your Password is <mark class="blur">{password}</mark></div>	
		</div>
	{:else}
	<div class="pwContainer">
		<form on:submit|preventDefault={() => tryAuth()}>
			<input bind:value={password} title="If you're not Simon please fuck off <3" placeholder="PASSWORD" type="password" name="password" id="password" class="passwordInput">
		</form>
	</div>
	{/if}
</body>

<style>
	.mainContainer {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
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