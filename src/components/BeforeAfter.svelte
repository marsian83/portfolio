<script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.utils.toArray(".comparisonSection").forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });
      // animate the container one way...
      tl.fromTo(
        section.querySelector(".afterImage"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          section.querySelector(".afterImage img"),
          { xPercent: 100, x: 0 },
          { xPercent: 0 },
          0
        );
    });
  });
</script>

<div class="before-after-container h-screen w-full bg-background">
  <section class="comparisonSection">
    <div class="comparisonImage beforeImage">
      <img src="/images/before.png" loading="eager" alt="before" />
    </div>
    <div class="comparisonImage afterImage">
      <img src="/images/after.png" loading="eager" alt="after" />
    </div>
  </section>
</div>

<style>
  .before-after-container {
    height: 300vh;
    overflow-x: hidden;
  }

  .comparisonSection {
    position: relative;
    padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
  }
  .comparisonImage {
    width: 100%;
    height: 100%;
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0px);
  }
  .afterImage img {
    transform: translate(-100%, 0px);
  }
  .comparisonImage img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
</style>
