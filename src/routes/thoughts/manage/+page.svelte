<script>
	import { isAuthenticated } from './thoughtsManageSiteLib/store.js';
	import { passwordStore } from './thoughtsManageSiteLib/store.js';
	import API from './thoughtsManageSiteLib/api.js';
	import { onMount } from 'svelte';
	import ManageThought from './thoughtsManageSiteLib/manageThought.svelte';

	
	// Subscribe to stores
	$: authenticated = $isAuthenticated;
	$: password = $passwordStore;
	
	// do some stuff
	let passwordInput
	let api
	
	onMount (() => {
		api = new API()
		passwordInput = document.getElementById('password');
		passwordInput.focus()
	});
	
	async function tryAuth() {
		passwordInput.disabled = true;	
		authenticated = await api.authenticate(password);
		if (authenticated === false) {
			alert("If you're not Simon please fuck off <3 (wrong password)");					
			passwordInput.value = "";
			passwordInput.disabled = false;
			passwordInput.focus();
		}
	}
</script>

<body>	
	{#if authenticated === true}
		<div class="mainContainer">
			{#await api.getTitlesAndDates(password)}
			<!-- Placeholder loading thingy -->
				<p style="color:white">Loading...</p>
			{:then data}
				{#each JSON.parse(data.message.replace(/'/g, '"').replace(/\(/g, "[").replace(/\)/g, "]")) as thought}
					<ManageThought title={thought[0]} date={thought[1]}/>
				{/each} 
			{/await}
			<div class="passwordText">Your Password is <mark class="blur">{password}</mark></div>	
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
		align-items: center;
		width: 100vw;
		height: 100vh;
		flex-direction: column;
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
