<script>
	import LogoSwitch from "../components/LogoSwitch.svelte";
	import Typewriter from "../components/Typewriter.svelte";
	import Links from "../components/Links.svelte";
	import Socials from "../components/Socials.svelte";
</script>

<LogoSwitch/>
<h1 class="greeting">Hi, I'm Simon.</h1>
<Typewriter strings={[
	"self taught developer", // main
	"random german guy",	 // well i am
	"python user (it good)", // python
	"public data enjoyer",   // osint
	"free life appreciator", // well, ye again
	]}/>
<div class="border"></div>
<Links/>
<div class="border" style="margin-bottom: 1.5vw;"></div>
<Socials/>

<style>
	.greeting {
		font-family: Roboto;
		color: white;
		font-size: 3.5vw;
		font-weight: 400;
		margin: 0;
	}

	.border {
		border-bottom: 6px dashed white;
		margin-top: max(1vh,0.5vw);
		margin-bottom: max(1vh,0.5vw);
	}
</style>