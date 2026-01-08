<script setup>
defineProps({
  days: String,
  time: String,
});
</script>

<template>
  <div class="pax-graph">
    <div class="top-bar">
      <div
        style="
          color: white;
          font-size: 22px;
          font-family: Fredoka;
          font-weight: 400;
          word-wrap: break-word;
        "
      >
        Last 7 {{ days }} Days
      </div>

      <div
        style="
          width: 100%;
          height: 100%;
          color: #85aa70;
          font-size: 16px;
          font-family: Fredoka;
          font-weight: 400;
          word-wrap: break-word;
        "
      >
        2 {{ time }} hours ago
      </div>
    </div>

    <div class="graph"></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");

.pax-graph {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  border-radius: 5px;
  border: 1px solid #85aa70;
  background: #313133;
  overflow: hidden;
}

.top-bar {
  display: flex;
  flex-direction: column;
  padding: 11px 595px 11px 23px;
  text-align: left;
  width: 100%;

  border-bottom: 1px solid #fff;
  background: #313133;
}
.graph {
  height: 16vw;
}
</style>
