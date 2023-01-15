<script>
  import { afterUpdate, onMount } from "svelte";

  export let flip, startColor, endColor;
  let waves;
  $: colors = ["#ffffff", "#ffffff", "#ffffff", "", "", ""];

  function interpolateColors(color1, color2, steps) {
    var stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];

    color1 = hexToRgb(color1);
    color2 = hexToRgb(color2);

    for (var i = 0; i < steps; i++) {
      interpolatedColorArray.push(
        rgbToHex(interpolateColor(color1, color2, stepFactor * i))
      );
    }

    return interpolatedColorArray;
  }

  function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
      factor = 0.5;
    }
    var result = color1.slice();
    for (var i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : null;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(rgb) {
    return (
      "#" +
      componentToHex(rgb[0]) +
      componentToHex(rgb[1]) +
      componentToHex(rgb[2])
    );
  }

  function updateColors() {
    const steps = 6;
    colors = interpolateColors(startColor, endColor, steps);
    colors = colors;
  }

  $: if (endColor) {
    afterUpdate(updateColors);
  }
  onMount(() => {
    if (flip) {
      waves.style.rotate = "180deg";
    }
    updateColors();
  });
</script>

<div class="overflow-hidden w-full flex flex-row">
  <svg
    class="waves"
    id="waves1"
    bind:this={waves}
    viewBox="0 0 1440 150"
    width="1440"
    height="150"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
  >
    <rect x="0" y="0" width="1440" height="150" fill={colors[0]} />

    <path
      d="M0 13L30 15.5C60 18 120 23 180 26C240 29 300 30 360 31C420 32 480 33 540 29.3C600 25.7 660 17.3 720 15.3C780 13.3 840 17.7 900 22C960 26.3 1020 30.7 1080 32.3C1140 34 1200 33 1260 33.3C1320 33.7 1380 35.3 1410 36.2L1440 37L1440 151L1410 151C1380 151 1320 151 1260 151C1200 151 1140 151 1080 151C1020 151 960 151 900 151C840 151 780 151 720 151C660 151 600 151 540 151C480 151 420 151 360 151C300 151 240 151 180 151C120 151 60 151 30 151L0 151Z"
      fill={colors[1]}
    />
    <path
      d="M0 55L30 53.8C60 52.7 120 50.3 180 47.2C240 44 300 40 360 38.5C420 37 480 38 540 38.3C600 38.7 660 38.3 720 40.7C780 43 840 48 900 50.7C960 53.3 1020 53.7 1080 51.2C1140 48.7 1200 43.3 1260 43.3C1320 43.3 1380 48.7 1410 51.3L1440 54L1440 151L1410 151C1380 151 1320 151 1260 151C1200 151 1140 151 1080 151C1020 151 960 151 900 151C840 151 780 151 720 151C660 151 600 151 540 151C480 151 420 151 360 151C300 151 240 151 180 151C120 151 60 151 30 151L0 151Z"
      fill={colors[2]}
    />
    <path
      d="M0 59L30 62.7C60 66.3 120 73.7 180 73.5C240 73.3 300 65.7 360 68.2C420 70.7 480 83.3 540 85.2C600 87 660 78 720 72.3C780 66.7 840 64.3 900 64.7C960 65 1020 68 1080 72.2C1140 76.3 1200 81.7 1260 85.3C1320 89 1380 91 1410 92L1440 93L1440 151L1410 151C1380 151 1320 151 1260 151C1200 151 1140 151 1080 151C1020 151 960 151 900 151C840 151 780 151 720 151C660 151 600 151 540 151C480 151 420 151 360 151C300 151 240 151 180 151C120 151 60 151 30 151L0 151Z"
      fill={colors[3]}
    />
    <path
      d="M0 82L30 83.2C60 84.3 120 86.7 180 91C240 95.3 300 101.7 360 101.8C420 102 480 96 540 95.2C600 94.3 660 98.7 720 102.7C780 106.7 840 110.3 900 109.3C960 108.3 1020 102.7 1080 99.2C1140 95.7 1200 94.3 1260 94.3C1320 94.3 1380 95.7 1410 96.3L1440 97L1440 151L1410 151C1380 151 1320 151 1260 151C1200 151 1140 151 1080 151C1020 151 960 151 900 151C840 151 780 151 720 151C660 151 600 151 540 151C480 151 420 151 360 151C300 151 240 151 180 151C120 151 60 151 30 151L0 151Z"
      fill={colors[4]}
    />
    <path
      d="M0 136L30 133.5C60 131 120 126 180 125.2C240 124.3 300 127.7 360 126.8C420 126 480 121 540 118C600 115 660 114 720 116.3C780 118.7 840 124.3 900 127.5C960 130.7 1020 131.3 1080 131.8C1140 132.3 1200 132.7 1260 131.5C1320 130.3 1380 127.7 1410 126.3L1440 125L1440 151L1410 151C1380 151 1320 151 1260 151C1200 151 1140 151 1080 151C1020 151 960 151 900 151C840 151 780 151 720 151C660 151 600 151 540 151C480 151 420 151 360 151C300 151 240 151 180 151C120 151 60 151 30 151L0 151Z"
      fill={colors[5]}
    />
  </svg>
</div>

<style>
  .waves {
    aspect-ratio: 1440/150;
    width: 100vw;
    transform: scaleX(120%);
  }

  path,
  rect {
    transition: fill 800ms;
  }
</style>
