<section class="relative z-0 h-screen bg-black">
  <img
    src="/contact_bg.jpg"
    alt="bg"
    class="absolute top-0 left-0 w-full h-full object-cover opacity-30 mobile:opacity-50 -z-[1]"
  />

  <div class="flex flex-col h-full items-center justify-evenly text-white">
    <div class="text-center flex flex-col gap-y-4 mobile:gap-y-10">
      <h1 class="text-7xl font-bold font-sans">Let's Chat</h1>
      <p class="text-opacity-80 text-white font-light">
        Want to discuss the next big thing? Hire me? or develop a project with
        me?
        <br />
        I'm just a mail away
      </p>
    </div>
    <button
      class="bg-white text-black px-10 py-3 text-2xl"
      on:click={() => {
        window.open("mailto:contact@marsian.dev");
      }}
      data-blobity-tooltip="contact@marsian.dev">Mail Me</button
    >
  </div>
</section>
