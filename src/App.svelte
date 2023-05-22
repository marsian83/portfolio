<script>
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import Home from "./pages/Home.svelte";
  import { inject } from "@vercel/analytics";
  gsap.registerPlugin(ScrollTrigger);

  inject();

  onMount(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  });
</script>

<!-- <body>
</body> -->

<Router>
  <Route component={Home} />
  <Route path="/resume">
    <script>
      fetch("/resume.pdf", {
        method: "get",
        mode: "no-cors",
        referrerPolicy: "no-referrer",
      })
        .then((res) => res.blob())
        .then((res) => {
          const aElement = document.createElement("a");
          aElement.setAttribute("download", "Spandan-Barve-Resume.pdf");
          const href = URL.createObjectURL(res);
          aElement.href = href;
          // aElement.setAttribute('href', href);
          aElement.setAttribute("target", "_blank");
          aElement.click();
          URL.revokeObjectURL(href);
          window.location = "/";
        });
    </script>
  </Route>
</Router>

<style>
</style>
