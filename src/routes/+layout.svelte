<script>
  import "../app.css";

  import { onNavigate } from "$app/navigation";
  import { page } from '$app/stores';

  import logo from "$lib/assets/images/logo.png?enhanced"

  const headerLinks = [
    { name: "projects", path: "/projects" },
    { name: "reviews", path: "/reviews" },
  ]

  $: currentPage = $page.route.id

  onNavigate(() => {
    if (!document.startViewTransition) return

    return new Promise((fulfil) => {
      document.startViewTransition(() => new Promise(fulfil))
    })
  })
</script>

<svelte:head>
  <title>hugh brace | freelance web developer</title>
  <meta name="description" content="hugh brace - a fullstack, freelance, world-wide-web developer, for all your internet needs" />
  <meta property="og:title" content="hugh brace | freelance web developer" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://hughisthisguy.dev/images/meta.png" />
  <meta property="og:url" content="https://hughisthisguy.dev/" />
  <meta property="og:description" content="hugh brace - a fullstack, freelance, world-wide-web developer, for all your internet needs" />
  <meta property="og:site_name" content="hugh brace" />
  <meta name="twitter:title" content="hugh brace | freelance web developer" />
  <meta name="twitter:description" content="hugh brace - a fullstack, freelance, world-wide-web developer, for all your internet needs" />
  <meta name="twitter:image" content="https://hughisthisguy.dev/images/meta.png" />
  <meta name="twitter:card" content="summary_large_image" />

</svelte:head>


<header class="py-4 container">
  <nav class="flex flex-row items-end justify-between">

    <a href="/" class="relative">
      <enhanced:img src={logo} alt="Me" class="w-24 md:w-32" />
    </a>

    <div class="flex flex-row gap-3 md:gap-8">
      {#each headerLinks as link}
        <a
          href={link.path}
          class="text-xl font-medium text-white hover:text-red transition relative"
          class:active={currentPage?.startsWith(link.path)}
        >
          {link.name}
        </a>
      {/each}
    </div>
  </nav>

</header>

<main class="container pb-12">
  <slot />
</main>

<style>
  a.active::after {
    @apply absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-dark-red to-red;
    content: "";
  }
</style>