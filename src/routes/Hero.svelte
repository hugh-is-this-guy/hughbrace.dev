<script>
  import { fade } from "svelte/transition";

  import image1 from "$lib/assets/images/me/1.jpg?enhanced"
  import image2 from "$lib/assets/images/me/2.jpg?enhanced"
  import image3 from "$lib/assets/images/me/3.jpg?enhanced"
  import image4 from "$lib/assets/images/me/4.jpg?enhanced"
  import image5 from "$lib/assets/images/me/5.jpg?enhanced"
  import image6 from "$lib/assets/images/me/6.jpg?enhanced"

  import image1sm from "$lib/assets/images/me/1-sm.jpg?enhanced"
  import image2sm from "$lib/assets/images/me/2-sm.jpg?enhanced"
  import image3sm from "$lib/assets/images/me/3-sm.jpg?enhanced"
  import image4sm from "$lib/assets/images/me/4-sm.jpg?enhanced"
  import image5sm from "$lib/assets/images/me/5-sm.jpg?enhanced"
  import image6sm from "$lib/assets/images/me/6-sm.jpg?enhanced"

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  const imagesSm = [
    image1sm,
    image2sm,
    image3sm,
    image4sm,
    image5sm,
    image6sm,
  ]

  let activeImage = 1;

  setInterval(() => {
    activeImage = (activeImage + 1) % images.length;
  }, 5000);

  function rotation(i) {
    return [-5, 3, -2, 4, -8, 5][i]
  }

</script>

<div class="container pt-12 md:pt-24 mb-16 md:mb-24">
  <div class="flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-8 md:gap-12">
    <div class="flex flex-col items-center md:order-2 w-full aspect-video md:aspect-square relative">
      {#each images as image, i}
        {#if i === activeImage}
          <div transition:fade={{ duration: 500 }}>
            <enhanced:img
              src={image}
              alt="Me"
              class="
                hidden
                sm:block
                mx-auto
                rounded-md
                w-2/3
                md:w-4/5
                lg:w-full
                md:w-full
                absolute
                left-1/2
                top-1/2
                "
              style="transform: translate(-50%, -50%) rotate({rotation(i)}deg);"
            />

            <enhanced:img
              src={imagesSm[i]}
              alt="Me"
              class="
                sm:hidden
                mx-auto
                rounded-md
                w-2/3
                md:w-4/5
                lg:w-full
                md:w-full
                absolute
                left-1/2
                top-1/2
                "
              style="transform: translate(-50%, -50%) rotate({rotation(i)}deg);"
            />
          </div>
        {/if}
      {/each}
    </div>

    <div class="w-full col-span-2 pt-8 md:pt-0 md:order-1 flex flex-col justify-center">
      <div class="flex flex-row justify-start items-end gap-2 md:gap-4 mb-8">
        <h1 class="font-medium sm:font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-wide">
          hugh brace
        </h1>
      </div>

      <h2 class="font-medium italic text-xl md:text-3xl tracking-wide !leading-[3rem] text-left">
        <span class="font-bold text-4xl bg-gradient-to-t from-dark-red to-red text-transparent bg-clip-text">F</span>reelance,
        <br>
        <span class="font-bold text-4xl bg-gradient-to-t from-dark-blue to-blue text-transparent bg-clip-text">F</span>ullstack,
        <br>
        <span class="font-bold text-3xl md:text-4xl bg-gradient-to-t from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>orld-<span class="font-bold text-3xl md:text-4xl bg-gradient-to-t from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>ide-<span class="font-bold text-3xl md:text-4xl bg-gradient-to-t from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>eb Developer
      </h2>
    </div>
  </div>
</div>