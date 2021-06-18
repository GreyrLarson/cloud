<template>
  <div class="home">
    <div class="hero">
      <b-jumbotron
        bg-variant="dark"
        header-level="5"
        text-variant="white"
        border-variante="info"
      >
        <template #header>A Minecraft Server Free To All</template>
        <h3>Welcome To <img src="images/logo.png" /></h3>
        <hr class="my-4" />
        <b-button variant="primary" to="/info">How to Join</b-button>
        <b-button variant="primary" href="https://cloud.greyl.dev/dynmap/"
          >Live Map</b-button
        >
      </b-jumbotron>
    </div>
    <h1></h1>
    <div class="slider">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="##121212"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide img-src="images/MC-horizon-with-shader.jpeg">
          <h3>A Beautiful World</h3>
          <br />
          <br />
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="images/Dynmap.png">
          <h3>Live Updating Dynamic Map</h3>
          <br />
          <br />
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="images/MC-ocean-shader.jpeg">
          <h3>New Games Coming Soon</h3>
          <br />
          <br />
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide img-src="images/MC-tundra-shader.jpeg">
          <h3>Update 1.17 Coming Soon</h3>
          <br />
          <br />
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.hero {
  margin: 2em;
}

.slider {
  margin: 2em;
}

img {
  display: inline;
  max-width: 75vw;
  max-height: 40vh;
}
</style>
