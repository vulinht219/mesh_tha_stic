<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="sub-header">
    <span class="title">{{ title }}</span>
    <!--for dropdown menu-->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");

.sub-header {
  width: 100%;
  height: 50px;
  padding: 0.2vw;
  border-bottom: 1px solid #85aa70;
  background: #111214;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  color: #fff;
  font-family: Gugi;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 15px;
}
</style>
