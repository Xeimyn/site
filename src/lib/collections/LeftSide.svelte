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

<Links links={[
	{"internal":true,"link":"/projects","name":"Projects"},
	{"internal":true,"link":"#","name":"Placeholder"},
]}/>

<div class="border" style="margin-bottom: 1vw;"></div>

<Socials socials={[
	{"link":"https://dc.jcms.dev","icon":"discord","alt":"Join my discord!"},
	{"link":"https://link.jcms.dev/github","icon":"github","alt":"Take a look at what I'm coding."},
	{"link":"https://link.jcms.dev/twitter","icon":"twitter","alt":"Read my (rare) tweets."},
	{"link":"https://link.jcms.dev/youtube","icon":"youtube","alt":"Watch my non-existent videos."},
	{"link":"https://link.jcms.dev/twitch","icon":"twitch","alt":"And my non-existent stream!"},
	{"link":"mailto:contact@jcms.dev","icon":"email","alt":"Or just send me an email I guess."}
]
}/>

<style>
	.greeting {
		font-family: Roboto;
		color: var(--accent-clr);
		font-size: 3.5vw;
		font-weight: 400;
		margin: 0;
	}

	.border {
		border-bottom: var(--border-width) dashed var(--accent-clr);
		margin-top: 0.5vh;
		margin-bottom: 0.5vh;
	}
</style>