<script>
  export let data

  const imports = import.meta.glob('./images/*/1.jpg', {
    eager: true,
    import: 'default',
		query: {
			enhanced: true
		}
	})

  let pictures = {};

  for (const [path, image] of Object.entries(imports)) {
    const regex = /\/images\/(.*?)\/1\.jpg/;
    const match = regex.exec(path);

    const slug = match[1]

    pictures[slug] = image;
  }

  $: ({ projects } = data)
</script>

<div class="py-12">
  <h1 class="text-3xl font-bold mb-12">Here's some things I've built</h1>

  <div class="w-full flex flex-col md:grid grid-cols-3 gap-12 md:gap-8 px-4">
    {#each projects as project, i}

      <a href="/projects/{project.slug}" class="flex flex-col items-center justify-between">
        <enhanced:img
          src={pictures[project.slug]}
          alt={project.title}
          class="transition hover:rotate-3 mb-4"
        />

        <h2 class="text-xl text-center">
          { project.title }
        </h2>
      </a>

    {/each}
  </div>
</div>