<script>
  import { onMount } from "svelte";
  import NameAnimation from "./NameAnimation.svelte";
  import CyclingText from "./CyclingText.svelte";
  import FluidSim from "./FluidSim.svelte";

  function updateGradient(event) {
    const dist = Math.sqrt(
      Math.pow(window.innerWidth / 2 - event.clientX, 2) +
        Math.pow(window.innerHeight / 2 - (event.clientY + window.scrollY), 2)
    );
    const maxDist = Math.sqrt(
      Math.pow(window.innerWidth / 2 - 0, 2) +
        Math.pow(window.innerHeight / 2 - 0, 2)
    );
    const size = 40 - 25 * (dist / maxDist);
    document
      .getElementById("gradient")
      .style.setProperty("--size", `${size}vw`);
  }

  onMount(() => {
    document.addEventListener("mousemove", updateGradient);
  });
</script>

<section
  class="hero h-screen flex relative flex-col justify-center items-center bg-background mobile:h-[69vh]"
>
  <div class="h-full w-full fadeout">
    <FluidSim />
  </div>
  <div
    class="absolute mx-auto my-auto overflow-hidden w-full h-full flex justify-center items-center"
  >
    <div class=" mx-auto my-auto gradient opacity-70" id="gradient" />
  </div>
  <div class="z-[1] absolute">
    <NameAnimation />
  </div>
  <div
    class="skewElem absolute bottom-16 flex flex-col mobile:left-1/2 mobile:-translate-x-full text-primary text-3xl font-bold mobile:text-xl"
  >
    <h1>I also go by Marsian</h1>
    <h1 class="flex flex-row gap-3">
      <span>and</span> <span>I'm</span> <span>a</span>
      <CyclingText
        cycle={[
          "Passionate Programmer",
          "Blockchain Developer",
          "UI/UX Designer",
          "Web Developer",
          "Graphics Designer",
        ]}
        color="random"
      />
    </h1>
  </div>
</section>

<style>
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      background-position: 0% 0%;
    }
    100% {
      transform: rotate(360deg);
      background-position: 200% 200%;
    }
  }

  .gradient {
    --size: 10rem;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    --gradient: linear-gradient(
      to left,
      #37eba9d9,
      #5b37eb,
      #eb37d9d9,
      #37bbeb
    );

    width: var(--size);
    height: var(--size);
    background-image: var(--gradient);
    background-size: 250%;
    filter: blur(calc(var(--size) / 5));
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  .fadeout {
    opacity: 0;
    animation: fade-out 2000ms;
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
