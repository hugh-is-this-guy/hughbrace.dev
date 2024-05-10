<script>
  import { onMount, onDestroy } from 'svelte';

  export let data

  const imports = import.meta.glob('./images/*/1.png', {
    eager: true,
    import: 'default',
		query: {
			enhanced: true
		}
	})

  let pictures = {};

  for (const [path, image] of Object.entries(imports)) {
    const regex = /\/images\/(.*?)\/1\.png/;
    const match = regex.exec(path);

    const slug = match[1]

    pictures[slug] = image;
  }

  let images = []

  $: ({ projects } = data)

  let interval;

  function shakeImage(toShake) {
    const index = typeof toShake === 'number' ? toShake : Math.floor(Math.random() * images.length)

    images[index].animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(5deg)' },
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(5deg)' },
      { transform: 'rotate(0deg)' },
    ], {
      duration: 700,
      iterations: 1
    });
  }

  const bgClasses = [
    'from-yellow to-dark-yellow',
    'from-green to-dark-green',
    'from-red to-dark-red',
    'from-blue to-dark-blue',
  ]

  const bgColours = (i) => {
    return bgClasses[i % bgClasses.length];
  }

  const textClasses = [
    'from-yellow to-dark-yellow border-dark-yellow',
    'from-green to-dark-green border-dark-green',
    'from-red to-dark-red border-dark-red',
    'from-blue to-dark-blue border-dark-blue',
  ]

  const textColours = (i) => {
    return textClasses[i % textClasses.length];
  }

  onMount(() => {
    shakeImage(0);

    interval = setInterval(shakeImage, 10000);
  })

  onDestroy(() => {
    clearInterval(interval);
  })

</script>

<div class="container">
  <div class="py-12 md:-mx-16">
    <h1 class="text-3xl font-bold mb-12">Here's some things I've built</h1>

    <div class="w-full flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 px-4">
      {#each projects as project, i}

        <a href="/projects/{project.slug}" class="flex flex-col items-center justify-between group">
          <h2 class="
            text-xl
            font-bold
            md:font-medium
            border-b-2
            text-center
            mb-4
            transition
            bg-white
            text-transparent
            text-white
            bg-gradient-to-br group-hover:text-transparent bg-clip-text
            from-40% to-90%
            {textColours(i)}
          ">
            { project.title }
          </h2>

          <enhanced:img
            bind:this={images[i]}
            src={pictures[project.slug]}
            alt={project.title}
            class="
              transition
              group-hover:rotate-3
              mb-4
              rounded
              bg-gradient-to-br
              {bgColours(i)}
            "
          />
        </a>

      {/each}
    </div>
  </div>
</div>