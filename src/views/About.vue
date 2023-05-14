<template>
  <section class="text-center flex justify-center items-center video-background">
    <!-- <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/about-bg.gif);"
      ></div> -->    
      <div class="absolute inset-0 sm:w-full sm:h-full introduction-bg">
        <video class="absolute inset-0 w-full h-full object-cover" src="assets/img/1.mp4" autoplay muted loop playsinline></video>
      </div>

      <div class="container mx-auto">
        <div>
        <p class="w-full md:w-8/12 mx-auto text-xl text-white">
          🎵 Introducing SoundScape: Unleash Your Music Experience! 🚀 
          an immersive and seamless music experience. 
          Explore a world of captivating melodies, effortlessly manage your playlists, and enjoy intuitive navigation—all in one sleek package. 
          Unleash the rhythm within and elevate your music journey with SoundScape. 🎧🎶
        </p>
      </div>
    </div>
  </section>
</template>

<style>
body{
  height: 100vh;
}
.video-background{
  position: relative;
  overflow: hidden;
  height: 90vh;
}
.video-background video {
  position: absolute;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>