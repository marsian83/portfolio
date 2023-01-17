<script>
  import Spacer from "./Spacer.svelte";

  let theme, skillShadow;
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
    // Parse the color into its RGB components
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    // Calculate the color's brightness
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // If the color is dark, return white text
    if (brightness < 128) {
      return "#FFFFFF";
    }
    // If the color is light, return black text
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
    { name: "c", imageUrl: "/skills/c.webp" },
    { name: "c++", imageUrl: "/skills/c++.webp" },
    { name: "python", imageUrl: "/skills/python.webp" },
    { name: "c-sharp", imageUrl: "/skills/c-sharp.webp" },
    { name: "html", imageUrl: "/skills/html.webp" },
    { name: "css", imageUrl: "/skills/css.webp" },
    { name: "js", imageUrl: "/skills/js.webp" },
    { name: "typescript", imageUrl: "/skills/typescript.webp" },
    { name: "vite", imageUrl: "/skills/vite.webp" },
    { name: "bootstrap", imageUrl: "/skills/bootstrap.webp" },
    { name: "sass", imageUrl: "/skills/sass.webp" },
    { name: "tailwind", imageUrl: "/skills/tailwind.webp" },
    { name: "svelte", imageUrl: "/skills/svelte.webp" },
    { name: "react", imageUrl: "/skills/react.webp" },
    { name: "vue", imageUrl: "/skills/vue.webp" },
    { name: "nuxt", imageUrl: "/skills/nuxt.webp" },
    { name: "nodejs", imageUrl: "/skills/nodejs.webp" },
    { name: "flask", imageUrl: "/skills/flask.webp" },
    { name: "express", imageUrl: "/skills/express.webp" },
    { name: "next", imageUrl: "/skills/next.webp" },
    { name: "django", imageUrl: "/skills/django.webp" },
    { name: "fastapi", imageUrl: "/skills/fastapi.webp" },
    { name: "mysql", imageUrl: "/skills/mysql.webp" },
    { name: "mongoDB", imageUrl: "/skills/mongoDB.webp" },
    { name: "postgre", imageUrl: "/skills/postgre.webp" },
    { name: "cassandra", imageUrl: "/skills/cassandra.webp" },
    { name: "redis", imageUrl: "/skills/redis.webp" },
    { name: "postman", imageUrl: "/skills/postman.webp" },
    { name: "trpc", imageUrl: "/skills/trpc.webp" },
    { name: "graphql", imageUrl: "/skills/graphql.webp" },
    { name: "go", imageUrl: "/skills/go.webp" },
    { name: "ganache", imageUrl: "/skills/ganache.webp" },
    { name: "solidity", imageUrl: "/skills/solidity.webp" },
    { name: "ethers", imageUrl: "/skills/ethers.webp" },
    { name: "rust", imageUrl: "/skills/rust.webp" },
    { name: "threejs", imageUrl: "/skills/threejs.webp" },
    { name: "web3js", imageUrl: "/skills/web3js.webp" },
    { name: "ipfs", imageUrl: "/skills/ipfs.webp" },
    { name: "jest", imageUrl: "/skills/jest.webp" },
    { name: "chainlink", imageUrl: "/skills/chainlink.webp" },
    { name: "realm", imageUrl: "/skills/realm.webp" },
    { name: "hardhat", imageUrl: "/skills/hardhat.webp" },
    { name: "truffle", imageUrl: "/skills/truffle.webp" },
    { name: "Amazon Web Services", imageUrl: "/skills/aws.webp" },
    { name: "firebase", imageUrl: "/skills/firebase.webp" },
    { name: "bash", imageUrl: "/skills/bash.webp" },
    { name: "chai", imageUrl: "/skills/chai.webp" },
    { name: "redux", imageUrl: "/skills/redux.webp" },
    { name: "docker", imageUrl: "/skills/docker.webp" },
    { name: "framerMotion", imageUrl: "/skills/framerMotion.webp" },
    { name: "kubernetes", imageUrl: "/skills/kubernetes.webp" },
    { name: "gcp", imageUrl: "/skills/gcp.webp" },
    { name: "git", imageUrl: "/skills/git.webp" },
    { name: "github", imageUrl: "/skills/github.webp" },
    { name: "githubActions", imageUrl: "/skills/githubActions.webp" },
    { name: "gitlab", imageUrl: "/skills/gitlab.webp" },
    { name: "netlify", imageUrl: "/skills/netlify.webp" },
    { name: "replit", imageUrl: "/skills/replit.webp" },
    { name: "heroku", imageUrl: "/skills/heroku.webp" },
    { name: "vercel", imageUrl: "/skills/vercel.webp" },
    { name: "markdown", imageUrl: "/skills/markdown.webp" },
    { name: "Adobe Photoshop", imageUrl: "/skills/photoshop.webp" },
    { name: "figma", imageUrl: "/skills/figma.webp" },
    { name: "sqlite", imageUrl: "/skills/sqlite.webp" },
    { name: "ubuntu", imageUrl: "/skills/ubuntu.webp" },
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
    class="skills-container flex flex-row justify-evenly flex-wrap py-8 gap-x-10 gap-y-10"
  >
    {#each skills as skill}
      <img
        class="skill-icon skewElem w-14 aspect-square object-contain"
        style="--skill-shadow:{getVisibleColor(theme)};"
        src={skill.imageUrl}
        alt={skill.name}
        data-blobity-tooltip={skill.name}
        on:mouseover={async () => {
          theme = skill.color || (await getAverageColor(skill.imageUrl));
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
