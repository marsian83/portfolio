<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { each } from "svelte/internal";
  // import Flip from "gsap/Flip";

  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(Flip);

  let sect,
    projects = [];

  onMount(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile",
          pin: false,
          start: "top bottom",
          end: `+=${window.innerHeight}px`,
          scrub: 1,
        },
      })
      .addLabel("start")
      .fromTo(
        ".mobile",
        {
          scale: 0,
          translateY: "-100vh",
          translateX: "-25vw",
          rotateY: 720,
          rotateZ: -50,
        },
        {
          scale: 1,
          rotateY: 0,
          rotateZ: 0,
        }
      )
      .addLabel("end")
      .to(".mobile", { translateY: 0, translateX: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".laptop",
          pin: false,
          start: "top bottom",
          end: `+=${window.innerHeight}px`,
          scrub: 1,
        },
      })
      .addLabel("start")
      .fromTo(
        ".laptop",
        {
          scale: 0,
          translateY: "-100vh",
          translateX: "-25vw",
        },
        {
          scale: 1,
        }
      )
      .addLabel("end")
      .to(".laptop", { translateY: 0, translateX: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-heading",
          pin: false,
          start: "top 15%",
          // end: `+=10vh`, // end after scrolling 500px beyond the start
          scrub: 1,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "power1.inOut",
          },
        },
      })
      .addLabel("start")
      .from(".projects-heading, .project-card", {
        scale: 0,
        opacity: 0,
      })
      .addLabel("end")
      .to(".projects-heading, .project-card", {
        scale: 1,
        opacity: 1,
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-heading",
          pin: false,
          start: "top 15%",
          end: `+=80px`,
          scrub: 1,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "power1.inOut",
          },
        },
      })
      .addLabel("start")
      .from(".laptop-screen, .mobile-screen", {
        opacity: 0,
        filter: "blur(1rem)",
      });
    // .addLabel("end")
    // .to(".laptop-screen, .mobile-screen", {
    //   opacity: 1,
    //   filter: "brightness(1)",
    // });
  });

  onMount(async () => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((projectsData) => {
        projects = projectsData;
      });
  });
</script>

<div class="h-screen bg-background" />
<section
  class="about relative w-full bg-background flex flex-row"
  bind:this={sect}
>
  <div class="basis-1/2">
    <div
      class="projects-heading text-primary text-center py-5 text-6xl font-bold"
    >
      Notable Projects
    </div>
    {#each projects as project}
      <span class="text-primary">{project.name || "naam nai hai"}</span>
    {/each}
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
    <div class="project-card h-48 bg-red-500" />
    <div class="project-card h-48 bg-green-500" />
  </div>
  <div class="relative basis-1/2">
    <div
      class="previews sticky top-0 left-1/2 text-primary flex flex-col justify-center items-center"
    >
      <div class="laptop relative w-9/12">
        <img class=" w-full z-0" src="/laptop.png" alt="laptop" />
        <img
          class="laptop-screen"
          src="/screens/laptop-default.png"
          alt="laptop-screen"
        />
      </div>
      <div class="mobile w-5/12 relative ">
        <img class="w-full z-[1]" src="/mobile.png" alt="mobile" />
        <img
          class="mobile-screen"
          src="/screens/mobile-default.png"
          alt="mobile-screen"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .mobile,
  .laptop {
    filter: drop-shadow(0px 0px 1rem black);
  }

  .laptop-screen,
  .mobile-screen {
    @apply absolute top-0 left-0 w-full;
  }
</style>
