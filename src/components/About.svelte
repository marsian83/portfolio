<script>
  import FluidSim from "./FluidSim.svelte";

  import { onDestroy, onMount } from "svelte";
  let observer, sect;
  let entry = { isIntersecting: false };
  let flash = false;

  onMount(() => {
    observer = new IntersectionObserver(
      ([e]) => {
        entry = e;
      },
      {
        threshold: 0.69,
      }
    );
    observer.observe(sect);
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>

<section
  bind:this={sect}
  class="about bg-black observed relative overflow-hidden"
>
  {#if entry.isIntersecting}
    <FluidSim />
  {/if}

  <div
    class="relative text-primary py-16 z-[1] mix-blend-difference pointer-events-none flex flex-col items-center justify-center text-center"
  >
    <div class="font-bold text-4xl">Get to know me</div>
    <div class="font-black text-7xl py-8">I CREATE INTERACTIVE WEB DESIGN</div>
    <div class="py-12 font-semibold text-2xl p-page text-justify">
      A full-stack developer, having a strong understanding of Python and web
      development. With a long-standing passion for programming and a commitment
      to staying current with the latest technologies, I strive to deliver
      efficient and high-quality solutions to clients. I approach each project
      with humility and dedication, always eager to learn and grow as a
      developer.
    </div>
  </div>

  <div
    class="absolute h-2/6 top-0 w-full pointer-events-none"
    style="background-image: linear-gradient(to bottom, rgb(var(--background)), transparent);"
  />
  <div
    class="absolute h-2/6 bottom-0 w-full pointer-events-none"
    style="background-image: linear-gradient(to top, rgb(var(--background)), transparent);"
  />
</section>
