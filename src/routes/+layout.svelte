<script>
  import "../app.css";

  import { onNavigate } from "$app/navigation";
  import { page } from '$app/stores';

  import logo from "$lib/assets/images/logo.png?enhanced"

  const headerLinks = [
    { name: "projects", path: "/projects" },
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
  <title>hugh brace</title>
  <meta name="description" content="hugh brace - a fullstack, freelance, world-wide-web developer building super fast apps super fast" />
</svelte:head>


<header class="py-4 container">
  <nav class="flex flex-row items-end gap-8 justify-between">

    <a href="/" class="relative">
      <enhanced:img src={logo} alt="Me" class="w-24 md:w-32" />
    </a>

    <div class="flex flex-row gap-8">
      {#each headerLinks as link}
        <a
          href={link.path}
          class="text-xl font-medium text-white hover:text-red transition relative"
          class:active={currentPage.startsWith(link.path)}
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