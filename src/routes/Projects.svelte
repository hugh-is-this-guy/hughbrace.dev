<script>
  export let projects

  const imports = import.meta.glob('./projects/images/*/1.png', {
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

  const bgClasses = [
    'from-blue to-dark-blue',
    'from-yellow to-dark-yellow',
    'from-green to-dark-green',
  ]

  const bgColours = (i) => {
    return bgClasses[i % bgClasses.length];
  }

  const textClasses = [
    'from-blue to-dark-blue border-dark-blue',
    'from-yellow to-dark-yellow border-dark-yellow',
    'from-green to-dark-green border-dark-green',
  ]

  const textColours = (i) => {
    return textClasses[i % textClasses.length];
  }
</script>


<div class="wave-blue h-20"></div>

<div class="bg-black py-24">
  <div class="px-4">
    <h1 class="text-2xl md:text-3xl font-medium mb-12 text-center">things I've built</h1>

    <div class="w-full flex flex-col md:grid md:grid-cols-3 gap-12 sm:gap-8 px-4 pb-8 items-center justify-center mx-auto">

      {#each projects as project, i}

        <a href="/projects/{project.slug}" class="flex flex-col items-center justify-between group max-w-96 mx-auto">
          <h2 class="
            text-lg
            font-medium
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
              group-hover:rotate-2
              mb-4
              rounded
              bg-gradient-to-br
              {bgColours(i)}
            "
          />
        </a>

      {/each}

      <a href="/projects" class="col-start-2 w-full text-center bg-gradient-to-tl from-dark-red to-red py-2 px-12 rounded-full text-white hover:text-black font-bold text-lg transition hover:rotate-2 max-w-72 mx-auto">See more</a>
    </div>

  </div>
</div>