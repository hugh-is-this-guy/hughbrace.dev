<script>
  import Hero from "./Hero.svelte"
  import Intro from "./Intro.svelte"
  import Projects from "./Projects.svelte"

  export let data

  $: ({ projects } = data)
</script>


<Hero />

<Intro />

<Projects {projects} />
