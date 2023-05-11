<button
  class="absolute z-[1] widescreen:bottom-8 widescreen:right-12 flex items-center gap-x-2 bg-violet-200 px-8 py-3 rounded-lg border-2 border-transparent duration-500 hover:border-violet-200 hover:bg-transparent
  mobile:left-1/2 mobile:-translate-x-1/2 mobile:top-8"
  on:click={() => {
    window.location = "/resume";
  }}
  ><img
    src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
    alt="download icon"
    class="aspect-square w-8 mobile:w-4"
  />
  <p>Resume</p>
</button>
