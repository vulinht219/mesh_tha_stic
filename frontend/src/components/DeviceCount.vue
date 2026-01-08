<script setup>
defineProps({
  title: String,
  amount: String,
  time: String,
});
</script>

<template>
  <div class="count-box">
    <div class="title">{{ title }}</div>
    <div class="amount">
      <div
        style="
          color: white;
          font-size: 55px;
          font-family: Fredoka;
          font-weight: 400;
          word-wrap: break-word;
        "
      >
        20 {{ amount }}
      </div>
      <div
        style="
          color: white;
          font-size: 22px;
          font-family: Fredoka;
          font-weight: 400;
          word-wrap: break-word;
        "
      >
        Devices
      </div>
    </div>
    <div class="time">{{ time }} 2 hours ago</div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");

.count-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: Fredoka;
  border-radius: 5px;
  border: 3px solid #85aa70;
  background: #313133;
}
.title {
  display: inline-flex;
  padding: 4px 45px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #554949;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.amount {
  display: flex;
  flex-direction: column;
}
.time {
  text-align: left;
  padding: 5px;
  color: #85aa70;
  font-size: 16px;
  font-family: Fredoka;
  font-weight: 400;
  word-wrap: break-word;
}
</style>
