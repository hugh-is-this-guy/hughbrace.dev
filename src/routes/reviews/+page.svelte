<script>
  const imports = import.meta.glob('./images/*.jpg', {
    eager: true,
    import: 'default',
		query: {
			enhanced: true
		}
	})

  let pictures = {};

  for (const [path, image] of Object.entries(imports)) {
    const regex = /\/images\/(.*?)\.jpg/;
    const match = regex.exec(path);

    const name = match[1]

    pictures[name] = image;
  }

  export let data

  $: ({ reviews } = data)
</script>

<div class="py-12">
  <h1 class="text-3xl md:text-4xl font-bold mb-12">People I've worked with</h1>

  <div class="flex flex-col gap-16">
    {#each reviews as review}
      <div class="flex flex-col md:grid md:grid-cols-5 gap-12 items-center md:items-start border-b-4 border-b-dark-red last:border-b-0 pb-8">
        <enhanced:img
          src={pictures[review.slug]}
          alt={review.name}
          class="w-64 rounded rotate-3"
        />

        <div class="col-span-4">
          <h2 class="text-3xl font-bold mb-1">{review.name}</h2>
          <h3 class="text-xl mb-6">{review.role}</h3>
          <p class="">{review.review}</p>
        </div>
      </div>
    {/each}
  </div>
</div>