<script>
  import { page } from '$app/stores';

  const imports = import.meta.glob('../images/*/*.png', {
    eager: true,
    import: 'default',
		query: {
			enhanced: true
		}
	})

  let pictures = {};

  for (const [path, image] of Object.entries(imports)) {
    const regex = /\/images\/(.*?)\/\d+\.png/;
    const match = regex.exec(path);

    const slug = match[1]

    if (!pictures[slug]) {
      pictures[slug] = [];
    }

    pictures[slug].push(image);
  }


  export let data

  $: ({ meta, content } = data)
  $: slug = $page.params.slug

  let scroller

  function scrollLeft() {
    scroller.scrollBy({ left: -scroller.firstChild.offsetWidth, behavior: 'smooth' });
  }

  function scrollRight() {
    scroller.scrollBy({ left: scroller.firstChild.offsetWidth, behavior: 'smooth' });
  }

</script>

<div class="container">
  <div class="grid md:grid-cols-5 gap-8 py-12 items-stretch md:-mx-12">
    <div class="flex flex-col justify-start md:pt-8 md:col-span-2">
      <h1 class="font-bold text-3xl mb-8">{meta.title}</h1>

      <p class="mb-6">{meta.description}</p>

      <p class="mb-6">
        Available at
        <a class="text-blue hover:text-dark-red underline" href={meta.link} target="_blank">{meta.link_text}</a>
        {#if meta.requires_subscription}
          <span class="italic">(requires subscription)</span>
        {/if}
      </p>


      <p class="font-medium">Tech stack</p>

      <ul class="flex flex-col gap-1">
        {#each meta.stack as tech}
          <li class="flex flex-row gap-2">
            <span class="shrink-0 w-2 h-2 bg-red rounded-full animate-pulse block mt-2" />
            <span class="grow">
              {tech}
            </span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="relative overflow-hidden -mx-4 md:col-span-3">
      {#if pictures[slug].length > 1}
        <button
          on:click={scrollLeft}
          class="
            hidden
            md:block
            rounded
            absolute
            top-1/2
            left-6
            text-xl
            hover:text-2xl
            transition
            text-white
            bg-black
            w-8
            h-8
            z-50
            -translate-y-1/2
            flex
            items-center
            justify-center
          "
        >
          <span>
            ←
          </span>
        </button>
      {/if}


      <div
        class="
          flex
          flex-row
          gap-4
          items-center
          overflow-auto
          p-4
          snap-x
          snap-mandatory
          scroll-px-12
          z-40
        "
        bind:this={scroller}
      >
        {#each pictures[slug] as picture, i}
          <div class="w-80 md:w-full shrink-0 snap-center bg-gradient-to-br from-green to-dark-green rounded">
            <enhanced:img src={picture} alt={meta.title} />
          </div>
        {/each}
      </div>

      {#if pictures[slug].length > 1}
        <button
          on:click={scrollRight}
          class="
            hidden
            md:block
            rounded
            absolute
            top-1/2
            right-6
            text-xl
            hover:text-2xl
            transition
            text-white
            bg-black
            w-8
            h-8
            z-50
            -translate-y-1/2
            flex
            items-center
            justify-center
          "
        >→</button>
      {/if}
    </div>
  </div>
</div>