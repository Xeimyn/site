<script>
	import { passwordStore } from './thoughtsManageSiteLib/store.js';
	import crypto from 'crypto';
	import { Buffer } from 'buffer';

	
	let password;

	// Subscribe to the store and initialize showContent
	passwordStore.subscribe(value => {
	password = value;
	});

	function getHashedPw(password) {
	const iterations = 100000;  // Adjust the number of iterations based on your security requirements
	const keyLength = 64;  // Adjust the key length based on your needs

	const hashedPasswordBuffer = crypto.pbkdf2Sync(password, Buffer.from('YOUAREALOOSERGETOUT'), iterations, keyLength, 'sha256');
	return hashedPasswordBuffer.toString('hex');
	} 
	
</script>

<body>	
	{#if getHashedPw(password) == 'c61bdc601e7175ec1429fafd69763737d283a40b114ec68c815cf7a1a4149e8774d0cc99f3a511cb421a8889779baca56c21c25c28874f2584d5717d7379cf6f'}
		<div class="passwordText" style="color:white">Your Password is <mark class="blur">{password}</mark> (hover to unblur)</div>	
	{:else}
	<div class="pwContainer">
		<!-- only set the value if they key pressed is the enter key -->
		<input on:change={e => passwordStore.set(e.target.value)} title="If you're not Simon fuck off <3" placeholder="PASSWORD" type="password" name="password" id="password" class="passwordInput">
		<h4 style="color:white; margin-top:5vmin;">This shit isnt performant at all but it works™</h4>
	</div>
	{/if}
</body>

<style>
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
	}
	
	.blur {
		color: white;
		background-color: black;
		filter: blur(10px);
		transition: 0s;
		font-family: monospace;
	}
	
	.blur:hover {
		background-color: rgb(86, 86, 86);
		border-radius: 1vmin;
		padding: 1vmin;
		filter: blur(0px);
		transition: 4s;
		user-select: all;
	}
</style>