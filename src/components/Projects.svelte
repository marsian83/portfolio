<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { each } from "svelte/internal";
  // import Flip from "gsap/Flip";
  import VanillaTilt from "vanilla-tilt";

  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(Flip);

  const defaultLaptopScreen = "https://wallpaperaccess.com/full/2703944.jpg";

  let sect,
    projects = [];

  let laptopScreen = {
    current: defaultLaptopScreen,
    frames: [defaultLaptopScreen],
  };

  onMount(() => {
    let maxTilt = 15;
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
          rotateY: 500,
          rotateZ: -40,
        },
        {
          scale: 1,
          rotateY: 0,
          rotateZ: 0,
          display: "relative",
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
      .fromTo(
        ".laptop-screen",
        {
          opacity: 0,
          filter: "blur(1rem)",
          left: `${(63 / 500) * 100}%`,
          top: `150vh`,
          width: `${(384 / 500) * 100}%`,
          height: `${(242 / 476) * 100}%`,
        },
        {
          opacity: 1,
          filter: "none",
          left: `${(63 / 500) * 100}%`,
          top: `${(79 / 476) * 100}%`,
          width: `${(384 / 500) * 100}%`,
          height: `${(242 / 476) * 100}%`,
        }
      );
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
      "max-glare": 0.2,
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
        rotateY: (Math.random() < 0.5 ? -1 : 1) * 360,
      })
      .addLabel("end")
      .to(".projects-heading, .project-card", {
        scale: 1,
        opacity: 1,
        rotateY: 0,
      });

    setInterval(() => {
      const nx = laptopScreen.frames.indexOf(laptopScreen.current) + 1;
      laptopScreen.current = laptopScreen.frames.at(
        nx >= laptopScreen.frames.length ? 0 : nx
      );
    }, 4000);
  });
</script>

<div class="h-screen bg-background mobile:hidden" />
<section
  class="about relative w-full bg-background flex flex-row"
  bind:this={sect}
>
  <div class="basis-1/2 mobile:basis-full">
    <div
      class="projects-heading text-primary text-center py-10 pt-56 text-4xl font-bold"
    >
      Some Things I've worked on
    </div>
    <div class="projects flex flex-col items-center gap-y-24 py-8">
      {#each projects as project}
        <div
          class="project-card text-primary flex flex-col gap-y-8"
          on:mouseleave={() => {
            laptopScreen.frames = [defaultLaptopScreen];
            laptopScreen.current = laptopScreen.frames[0];
          }}
          on:mouseenter={() => {
            laptopScreen.frames = project.gallery;
            laptopScreen.current = laptopScreen.frames[0];
          }}
        >
          <div
            class="project-heading flex flex-row justify-between items-center"
          >
            <h1 class="text-3xl font-bold mobile:text-2xl">
              {project.name || "Project Name"}
            </h1>
            <h2
              class="text-2xl font-semibold opacity-70 text-end mobile:text-sm"
            >
              {project.technology || "How it's Made"}
            </h2>
          </div>
          {#each project.highlights as highlight}
            <div class="project-highlight flex flex-row gap-x-4 items-center">
              <div
                class="rounded-full bg-[#ffffff44] px-6 aspect-square text-3xl font-black text-primary flex justify-center items-center mobile:text-lg mobile:px-3"
              >
                {project.highlights.indexOf(highlight) + 1}
              </div>
              <p class="text-lg opacity-80 font-semibold mobile:text-sm">
                {highlight}
              </p>
            </div>
          {/each}
          <div class="text-center flex flex-row justify-between px-8">
            {#each [{ title: "source code", data: project.source }, { title: "preview", data: project.demo }] as item}
              {#if item.data}
                <button
                  data-blobity-tooltip={item.data.tooltip ||
                    `view ${item.title}`}
                  on:click={window.open(item.data.url, "__Blanks")}
                >
                  {item.title}
                </button>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="relative basis-1/2 mobile:hidden">
    <div
      class="previews sticky top-0 left-1/2 text-primary flex flex-col justify-center items-center h-screen"
    >
      <div data-tilt class="laptop w-9/12 z-0">
        <img class="w-full aspect-auto" src="/laptop.png" alt="placeholder" />
        <img
          class="laptop-screen absolute object-contain bg-black object-center z-[1] rounded"
          src={laptopScreen.current}
          alt="laptop-screen"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .laptop {
    /* filter: drop-shadow(0px 0px 1rem black); */
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .laptop-screen {
    @apply w-full;
    transform: translateZ(20px);
  }

  .project-card {
    @apply w-11/12 p-8;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition-duration: 600ms;
  }

  .project-card:hover {
    box-shadow: 0 8px 64px 0 rgba(83, 38, 128, 0.38);
  }

  .project-card div {
    transition: 500ms;
  }

  .project-card:hover div {
    transform: translateZ(50px);
    /* filter: drop-shadow(0px 0px 2px black); */
  }
</style>
