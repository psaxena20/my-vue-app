<template>
  <div v-if="loading" class="loader-overlay">
    <div class="loader">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean, // Accepts loading state as a prop
  },
};
</script>

<style scoped>
/* Background overlay */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Loader container */
.loader {
  display: flex;
  gap: 10px;
}

/* Animated Squares */
.square {
  width: 20px;
  height: 20px;
  background-color: #007bff;
  animation: upDown 0.6s infinite ease-in-out;
}

/* Different delays for each box */
.square:nth-child(1) {
  animation-delay: 0s;
}
.square:nth-child(2) {
  animation-delay: 0.2s;
}
.square:nth-child(3) {
  animation-delay: 0.4s;
}

/* Up-Down Animation */
@keyframes upDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>
