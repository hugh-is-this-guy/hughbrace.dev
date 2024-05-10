<script>
  const imports = import.meta.glob('./reviews/images/*.jpg', {
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

  export let reviews
</script>

<div class="wave-red h-20"></div>

<div class="py-24">
  <h1 class="text-2xl md:text-3xl font-medium mb-12 text-white text-center">people I've worked with</h1>

  <div class="pb-8 w-full overflow-x-hidden">
    <div class="overflow-x-auto flex flex-row gap-8 md:gap-12 px-4 md:px-24 pb-8 snap-x snap-mandatory scroll-px-4 md:scroll-px-24">
      {#each reviews as review}
        <div class="bg-gradient-to-br from-red to-dark-red rounded-xl text-white w-full max-w-80 md:max-w-md shrink-0 p-4 flex flex-col gap-4 snap-start">

          <div class="flex flex-col md:grid grid-cols-3 items-center md:items-start gap-8">
            <enhanced:img
              src={pictures[review.slug]}
              alt={review.name}
              class="w-48 shrink-0 rounded-lg rotate-2"
            />

            <div class="md:col-span-2 w-full">
              <div class="flex flex-row items-end gap-2 mb-1">
                <h2 class="text-3xl md:text-2xl font-medium">
                  <a class="hover:text-blue transition" href={review.link} target="_blank">{review.name}</a>
                </h2>
              </div>
              <h3 class="text-xl md:text-lg mb-8">{review.role} - <span class="text-base italic">{review.organisation}</span></h3>
            </div>
          </div>

          <div class="grow flex flex-col items-stretch justify-center relative overflow-hidden">
            <p class="text-xl md:text-lg p-6 italic text-center">
              <span class="text-7xl text-black italic absolute top-0 left-0">“</span>
              {review.preview}
              <span class="text-7xl text-black italic absolute -bottom-12 right-0">”</span>
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="grid md:grid-cols-3 gap-12 sm:gap-8 px-8">
    <a href="/reviews" class="md:col-start-2 w-full text-center bg-gradient-to-tl from-dark-green to-green py-2 px-12 rounded-full text-white hover:text-black transition font-bold text-lg hover:rotate-2 mb:col-start-2 max-w-72 mx-auto">See more</a>
  </div>

</div>
