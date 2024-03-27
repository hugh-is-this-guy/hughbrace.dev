<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import logo from "$lib/assets/images/logo.png?enhanced"

  import image1 from "$lib/assets/images/me/1.jpg?enhanced"
  import image2 from "$lib/assets/images/me/2.jpg?enhanced"
  import image3 from "$lib/assets/images/me/3.jpg?enhanced"
  import image4 from "$lib/assets/images/me/4.jpg?enhanced"
  import image5 from "$lib/assets/images/me/5.jpg?enhanced"
  import image6 from "$lib/assets/images/me/6.jpg?enhanced"

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  let activeImage = 1;

  setInterval(() => {
    activeImage = (activeImage + 1) % images.length;
  }, 3000);

</script>

<div class="container">
  <div class="flex flex-col md:grid md:grid-cols-3 items-center justify-center gap-8 md:gap-12 pt-12 md:mb-12">
    <div class="flex flex-col items-center md:order-2">
      {#each images as image, i}
        {#if activeImage === i}
          <enhanced:img
            transition:fly
            src={image}
            alt="Me"
            class="mx-auto rotate-3 md:rotate-6 rounded-md w-4/5 md:w-full"
          />
        {/if}
      {/each}
    </div>

    <div class="w-full col-span-2 pt-8 md:pt-0 md:order-1">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12">
        <enhanced:img src={logo} alt="Me" class="w-36 md:w-24 lg:w-36" />

        <h1 class="font-bold text-5xl md:text-5xl lg:text-7xl tracking-wider">
          hugh brace
        </h1>
      </div>

      <h2 class="font-bold italic text-xl md:text-3xl tracking-wider mb-12 !leading-[3rem] text-left">
        <span class="text-4xl bg-gradient-to-br from-dark-red to-red text-transparent bg-clip-text">F</span>reelance,
        <span class="text-4xl bg-gradient-to-br from-dark-blue to-blue text-transparent bg-clip-text">F</span>ullstack,
        <br><span class="text-3xl md:text-4xl bg-gradient-to-br from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>orld-<span class="text-3xl md:text-4xl bg-gradient-to-br from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>ide-<span class="text-3xl md:text-4xl bg-gradient-to-br from-dark-yellow to-yellow text-transparent bg-clip-text">W</span>eb Developer
      </h2>
    </div>
  </div>

  <div>
    <p class="mb-4">
      I build websites and web apps for clients all over the world. I specialise in:
    </p>

    <div class="flex flex-row gap-3 mb-4">
      <span class="shrink-0 w-3 h-3 bg-dark-red rounded-full animate-pulse block mt-2" />
      <p class="grow">
        getting things up and running and online as fast as possible
      </p>
    </div>

    <div class="flex flex-row gap-3 mb-4">
      <span class="shrink-0 w-3 h-3 bg-dark-blue rounded-full animate-pulse block mt-2" />
      <p class="grow">
        working alongside designers and PMs to iterate rapidly on what matters and to quickly work out what doesn't
      </p>
    </div>

    <div class="flex flex-row gap-3 mb-8">
      <span class="shrink-0 w-3 h-3 bg-dark-yellow rounded-full animate-pulse block mt-2" />
      <p class="grow">
        using cutting-edge technologies to maximise development speed and deliver apps that are as perfomant as possible and scale to the moon.
      </p>
    </div>

    <p class="mb-12">
      If you think I can help, please get in touch at <a href="mailto:yo@hughisthisguy.dev" class="underline text-blue hover:text-dark-blue transition-colors">yo@hughisthisguy.dev</a>
    </p>
  </div>
</div>
