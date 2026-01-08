<script setup>
import Logo from "../assets/logo.png";
</script>
<template>
  <div class="header">
    <div class="top-bar">
      <img :src="Logo" />
      <div
        style="
          color: #85AA70;
          font-size: 32px;
          font-family: Gugi;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          word-wrap: break-word;
        "
      >
        Mesh_THA_stic
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #85AA70;
  background: #111214;
}
.top-bar {
  display: flex;
  align-items: center;
  gap: 15px;
}
.top-bar img{
  width: 60px;
  height: 60px;
}
</style>