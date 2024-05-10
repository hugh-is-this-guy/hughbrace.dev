<script>
  import Hero from "./Hero.svelte"
  import Intro from "./Intro.svelte"
  import Projects from "./Projects.svelte"
  import Reviews from "./Reviews.svelte"

  export let data

  $: ({ projects, reviews } = data)
</script>


<Hero />

<Intro />

<Projects {projects} />

<Reviews {reviews} />
