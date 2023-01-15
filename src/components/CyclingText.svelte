<script>
  import { onMount } from "svelte";

  export let cycle, color;

  function getRandomColor() {
    var letters = "6789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  onMount(() => {
    const texts = document.querySelectorAll(".rw-words-1 span");
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.setProperty("--anim-delay", `${i * 3 * 1000}ms`);
      texts[i].style.setProperty(
        "--anim-length",
        `${texts.length * 3 * 1000}ms`
      );
      if (color === "random") {
        texts[i].style.setProperty("--text-color", getRandomColor());
      }
    }
  });
</script>

<div class="cycle-wrapper">
  <div style="--text-color : {color || '#55ffdd'}" class="rw-words rw-words-1">
    {#each cycle as text}
      <span>{text}</span>
    {/each}
  </div>
</div>

<style>
  .cycle-wrapper {
    width: 80%;
    position: relative;
  }
  .rw-words {
    display: inline;
    /* text-indent: 10px; */
    white-space: nowrap;
  }
  .rw-words-1 span {
    position: absolute;
    opacity: 0;
    overflow: hidden;
    color: var(--text-color);
    animation: rotateWord var(--anim-length) linear infinite 0ms;
    animation-delay: var(--anim-delay);
  }

  @keyframes rotateWord {
    0% {
      opacity: 0;
    }
    2% {
      opacity: 0;
      transform: translateY(-30%);
    }
    5% {
      opacity: 1;
      transform: translateY(0px);
    }
    17% {
      opacity: 1;
      transform: translateY(0px);
    }
    20% {
      opacity: 0;
      transform: translateY(30%);
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>
