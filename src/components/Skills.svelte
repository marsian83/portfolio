<script>
  import { onMount } from "svelte";
  import Spacer from "./Spacer.svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let theme, skillsContainer;
  const defaultTheme = "#455A64";
  $: theme = defaultTheme;
  $: skillShadow = "#222";

  async function getAverageColor(src) {
    return new Promise((resolve) => {
      let context = document.createElement("canvas").getContext("2d");
      context.imageSmoothingEnabled = true;
      let img = new Image();
      img.src = src;
      img.crossOrigin = "";
      img.onload = () => {
        context.drawImage(img, 0, 0, img.width, img.height);
        let imageData = context.getImageData(0, 0, img.width, img.height);
        let data = imageData.data;
        let nonTransparentPixels = 0;
        let r = 0;
        let g = 0;
        let b = 0;

        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] != 0) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            nonTransparentPixels++;
          }
        }
        r = Math.floor(r / nonTransparentPixels);
        g = Math.floor(g / nonTransparentPixels);
        b = Math.floor(b / nonTransparentPixels);
        let hex = rgbToHex(r, g, b);
        resolve(hex);
      };
    });
  }

  function getVisibleColor(color) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    if (brightness < 128) {
      return "#FFFFFF";
    }
    else {
      return "#000000";
    }
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const skills = [
    { name: "c", imageUrl: "/skills/c.webp" , color : "#626bb9"},
    { name: "c++", imageUrl: "/skills/c++.webp" , color : "#659ad1"},
    { name: "python", imageUrl: "/skills/python.webp" , color : "#ffde56"},
    { name: "c-sharp", imageUrl: "/skills/c-sharp.webp" , color : "#b14796"},
    { name: "html", imageUrl: "/skills/html.webp" , color : "#fe7816"},
    { name: "css", imageUrl: "/skills/css.webp" , color : "#2a65f0"},
    { name: "js", imageUrl: "/skills/js.webp" , color : "#ffdf00"},
    { name: "typescript", imageUrl: "/skills/typescript.webp" , color : "#3179c7"},
    { name: "vite", imageUrl: "/skills/vite.webp" , color : "#9862fd"},
    { name: "bootstrap", imageUrl: "/skills/bootstrap.webp" , color : "#8b13fd"},
    { name: "sass", imageUrl: "/skills/sass.webp" , color : "#cd689a"},
    { name: "tailwind", imageUrl: "/skills/tailwind.webp" , color : "#00c0cd"},
    { name: "svelte", imageUrl: "/skills/svelte.webp" , color : "#dc9d4f"},
    { name: "react", imageUrl: "/skills/react.webp" , color : "#"},
    { name: "vue", imageUrl: "/skills/vue.webp" , color : "#"},
    { name: "nuxt", imageUrl: "/skills/nuxt.webp" , color : "#"},
    { name: "nodejs", imageUrl: "/skills/nodejs.webp" , color : "#"},
    { name: "flask", imageUrl: "/skills/flask.webp" , color : "#"},
    { name: "express", imageUrl: "/skills/express.webp" , color : "#"},
    { name: "next", imageUrl: "/skills/next.webp" , color : "#"},
    { name: "django", imageUrl: "/skills/django.webp" , color : "#"},
    { name: "fastapi", imageUrl: "/skills/fastapi.webp" , color : "#"},
    { name: "mysql", imageUrl: "/skills/mysql.webp" , color : "#"},
    { name: "mongoDB", imageUrl: "/skills/mongoDB.webp" , color : "#"},
    { name: "postgre", imageUrl: "/skills/postgre.webp" , color : "#"},
    { name: "cassandra", imageUrl: "/skills/cassandra.webp" , color : "#"},
    { name: "redis", imageUrl: "/skills/redis.webp" , color : "#"},
    { name: "postman", imageUrl: "/skills/postman.webp" , color : "#"},
    { name: "trpc", imageUrl: "/skills/trpc.webp" , color : "#"},
    { name: "graphql", imageUrl: "/skills/graphql.webp" , color : "#"},
    { name: "go", imageUrl: "/skills/go.webp" , color : "#"},
    { name: "ganache", imageUrl: "/skills/ganache.webp" , color : "#"},
    { name: "solidity", imageUrl: "/skills/solidity.webp" , color : "#"},
    { name: "ethers", imageUrl: "/skills/ethers.webp" , color : "#"},
    { name: "rust", imageUrl: "/skills/rust.webp" , color : "#"},
    { name: "threejs", imageUrl: "/skills/threejs.webp" , color : "#"},
    { name: "web3js", imageUrl: "/skills/web3js.webp" , color : "#"},
    { name: "ipfs", imageUrl: "/skills/ipfs.webp" , color : "#"},
    { name: "jest", imageUrl: "/skills/jest.webp" , color : "#"},
    { name: "chainlink", imageUrl: "/skills/chainlink.webp" , color : "#"},
    { name: "realm", imageUrl: "/skills/realm.webp" , color : "#"},
    { name: "hardhat", imageUrl: "/skills/hardhat.webp" , color : "#"},
    { name: "truffle", imageUrl: "/skills/truffle.webp" , color : "#"},
    { name: "Amazon Web Services", imageUrl: "/skills/aws.webp" , color : "#"},
    { name: "firebase", imageUrl: "/skills/firebase.webp" , color : "#"},
    { name: "bash", imageUrl: "/skills/bash.webp" , color : "#"},
    { name: "chai", imageUrl: "/skills/chai.webp" , color : "#"},
    { name: "redux", imageUrl: "/skills/redux.webp" , color : "#"},
    { name: "docker", imageUrl: "/skills/docker.webp" , color : "#"},
    { name: "framerMotion", imageUrl: "/skills/framerMotion.webp" , color : "#"},
    { name: "kubernetes", imageUrl: "/skills/kubernetes.webp" , color : "#"},
    { name: "gcp", imageUrl: "/skills/gcp.webp" , color : "#"},
    { name: "git", imageUrl: "/skills/git.webp" , color : "#"},
    { name: "github", imageUrl: "/skills/github.webp" , color : "#"},
    { name: "githubActions", imageUrl: "/skills/githubActions.webp" , color : "#"},
    { name: "gitlab", imageUrl: "/skills/gitlab.webp" , color : "#"},
    { name: "netlify", imageUrl: "/skills/netlify.webp" , color : "#"},
    { name: "replit", imageUrl: "/skills/replit.webp" , color : "#"},
    { name: "heroku", imageUrl: "/skills/heroku.webp" , color : "#"},
    { name: "vercel", imageUrl: "/skills/vercel.webp" , color : "#"},
    { name: "markdown", imageUrl: "/skills/markdown.webp" , color : "#"},
    { name: "Adobe Photoshop", imageUrl: "/skills/photoshop.webp" , color : "#"},
    { name: "figma", imageUrl: "/skills/figma.webp" , color : "#"},
    { name: "sqlite", imageUrl: "/skills/sqlite.webp" , color : "#"},
    { name: "ubuntu", imageUrl: "/skills/ubuntu.webp" , color : "#"},
  ];
</script>

<div class="h-16 bg-background" />
<Spacer flip startColor={theme} endColor="#111826" />
<section
  class="skills p-page z-[2]"
  style="background-color: {theme}; transition:800ms;"
>
  <h1
    class="transition-300 text-3xl font-semibold text-center"
    style="color:{getVisibleColor(theme)}"
  >
    Tech I've worked with
  </h1>
  <div
    bind:this={skillsContainer}
    class="skills-container flex flex-row justify-evenly flex-wrap py-8 gap-x-10 gap-y-10"
  >
    {#each skills as skill}
      <img
        class="skill-icon w-14 aspect-square object-contain"
        style="--skill-shadow:{getVisibleColor(theme)};"
        src={skill.imageUrl}
        alt={skill.name}
        data-blobity-tooltip={skill.name}
        on:mouseover={async () => {
          theme = skill.color != "#" || (await getAverageColor(skill.imageUrl));
        }}
        on:focus={() => {}}
        on:mouseleave={() => {
          theme = defaultTheme;
        }}
        draggable="false"
      />
    {/each}
  </div>
</section>
<Spacer startColor={theme} endColor="#111826" />

<style>
  .skill-icon {
    transition: scale 300ms, filter 300ms;
  }

  @keyframes skill-hover-anim {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 359.9deg;
    }
  }

  .skills-container:has(.skill-icon:hover) .skill-icon {
    opacity: 0.5;
    scale: 0.8;
  }

  .skills-container:hover .skill-icon:hover {
    opacity: 1;
    animation: skill-hover-anim ease-out 200ms;
    scale: 1.5;
    filter: drop-shadow(3px 3px 6px var(--skill-shadow));
  }
</style>
