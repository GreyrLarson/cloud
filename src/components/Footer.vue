<template>
  <footer>
    <span class="text-muted">
      Copyright <i class="far fa-copyright"></i> 2021
      <a
        href="https://github.com/BYU-CS-260-Spring-2021/lab-3a-vue-xkcd-browser-GreyrLarson"
        target="_blank"
        rel="noopener noreferrer"
      >
        Grey Larson <i class="fab fa-github"></i>
      </a>
    </span>
    <p>Hours Spent: 32</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  padding: 2em;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15vh;
  left: 0;
  font-size: 2vh;
  background-color: #353535;
  color: white;
  text-align: center;
}
</style>
