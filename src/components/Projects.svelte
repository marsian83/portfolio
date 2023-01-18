<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { each } from "svelte/internal";
  // import Flip from "gsap/Flip";
  import VanillaTilt from "vanilla-tilt";

  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(Flip);

  let sect,
    projects = [];

  onMount(() => {
    let maxTilt = 15;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mobile",
          pin: false,
          start: "top bottom",
          end: `+=${window.innerHeight}px`,
          scrub: 1,
          onUpdate: (self) => {
            if (self.direction === -1) {
              document.querySelector(".mobile").vanillaTilt.destroy();
            }
          },
        },
        onComplete: () => {
          VanillaTilt.init(document.querySelector(".mobile"), {
            max: maxTilt,
            speed: 20,
            reverse: true,
            "full-page-listening": true,
          });
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
          onUpdate: (self) => {
            if (self.direction === -1) {
              document.querySelector(".laptop").vanillaTilt.destroy();
            }
          },
        },
        onComplete: () => {
          VanillaTilt.init(document.querySelector(".laptop"), {
            max: maxTilt,
            speed: 20,
            reverse: true,
            "full-page-listening": true,
          });
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

  // onMount(() => {});

  onMount(async () => {
    await fetch("/projects.json")
      .then((response) => response.json())
      .then((projectsData) => {
        projects = projectsData;
      });
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
      max: 5,
      speed: 20,
      glare: true,
      "max-glare": 0.69,
    });
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
  });
</script>

<div class="h-screen bg-background" />
<section
  class="about relative w-full bg-background flex flex-row"
  bind:this={sect}
>
  <div class="basis-1/2">
    <div
      class="projects-heading text-primary text-center py-10 pt-56 text-4xl font-bold"
    >
      Some Things I've worked on
    </div>
    <div class="projects flex flex-col items-center gap-y-8 py-8">
      {#each projects as project}
        <div class="project-card text-primary flex flex-col gap-y-10">
          <div
            class="project-heading flex flex-row justify-between items-center"
          >
            <h1 class="text-3xl font-bold">
              {project.name || "naam de de re baba"}
            </h1>
            <h2 class="text-2xl font-semibold opacity-70">
              {project.technology || "kaise banaya?"}
            </h2>
          </div>
          {#each project.highlights as highlight}
            <div class="project-highlight flex flex-row gap-x-4 items-center">
              <div
                class="rounded-full bg-[#ffffff44] px-8 aspect-square text-3xl font-black text-primary flex justify-center items-center"
              >
                {project.highlights.indexOf(highlight)}
              </div>
              <p class="text-lg opacity-80 font-semibold">{highlight}</p>
            </div>
          {/each}
          <div class="text-center flex flex-row justify-between px-8">
            <button
              data-blobity-tooltip={project.source.tooltip ||
                "view source code"}
              on:click={window.open(project.source.url)}>source code</button
            >
            <button
              data-blobity-tooltip={project.demo.tooltip ||
                "preview the project"}
              on:click={window.open(project.demo.url)}>preview</button
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="relative basis-1/2">
    <div
      class="previews sticky top-0 left-1/2 text-primary flex flex-col justify-center items-center"
    >
      <div
        data-tilt
        class="laptop w-9/12 z-0 bg-contain bg-[url('/laptop.png')]"
      >
        <img
          class="laptop-screen"
          src="/screens/laptop-default.png"
          alt="laptop-screen"
        />
      </div>
      <div class="mobile w-5/12 z-[1] bg-contain bg-[url('/mobile.png')]">
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
    /* filter: drop-shadow(0px 0px 1rem black); */
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .laptop-screen,
  .mobile-screen {
    @apply w-full;
    transform: translateZ(20px);
  }

  .project-card {
    @apply w-11/12 p-5;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .project-card div {
    transition: 500ms;
  }

  .project-card:hover div {
    transform: translateZ(50px);
    filter: drop-shadow(0px 0px 2px black);
  }
</style>
