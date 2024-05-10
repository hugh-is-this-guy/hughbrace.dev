<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faArrowRotateLeft, faBolt, faMicrochip } from '@fortawesome/free-solid-svg-icons'
  import { config } from '@fortawesome/fontawesome-svg-core'

  import '@fortawesome/fontawesome-svg-core/styles.css'

  config.autoAddCss = false
</script>

<div class="wave h-20"></div>

<div class="bg-black text-white py-24">
  <div class="container">
    <h2 class="text-3xl md:text-4xl text-center mb-24  leading-normal">
      I build <span class="bg-gradient-to-tl from-dark-yellow to-yellow text-transparent bg-clip-text italic">websites</span> and
      <br class="block md:hidden">
      <span class="bg-gradient-to-tl from-dark-green to-green text-transparent bg-clip-text italic">webapps</span>
      <br class="hidden md:block">
      for clients
      <br class="block md:hidden">
      <span class="font-bold bg-gradient-to-tl from-dark-red to-red text-transparent bg-clip-text">all over the world</span>
      by:
    </h2>

    <div class="flex flex-col gap-8 md:gap-12 items-start max-w-xl mx-auto">
      <div class="flex flex-row gap-2 items-center">
        <div class="w-16 md:w-24 shrink-0 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faBolt} class="text-4xl md:text-5xl text-yellow" />
        </div>
        <p class="grow text-xl">
          getting things online as soon as possible
        </p>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <div class="w-16 md:w-24 shrink-0 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faArrowRotateLeft} class="text-4xl md:text-5xl text-red" />
        </div>
        <p class="grow text-xl">
          iterating rapidly with clients on what matters most
        </p>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <div class="w-16 md:w-24 shrink-0 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faMicrochip} class="text-4xl md:text-5xl text-green" />
        </div>
        <p class="grow text-xl">
          using modern tech and tools to for lightning fast performance and development speed
        </p>
      </div>
    </div>
  </div>
</div>


<style>
  .wave {
  --mask:
    radial-gradient(38.99px at 50% calc(100% + 18px),#0000 calc(99% - 8px),#010C1B calc(101% - 8px) 99%,#0000 101%) calc(50% - 60px) calc(50% - 19px + .5px)/120px 38px ,
    radial-gradient(38.99px at 50% -18px,#0000 calc(99% - 8px),#010C1B calc(101% - 8px) 99%,#0000 101%) 50% calc(50% + 19px)/120px 38px ;
  -webkit-mask: var(--mask);
          mask: var(--mask);
          background: linear-gradient(
            135deg,
            #B30760,
            #FD0944,
            #FF2d05,
            #FCD148
          );
}
</style>