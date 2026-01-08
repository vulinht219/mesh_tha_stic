<script setup>
defineProps({
  title: String,
  amount: String,
  time: String,
});
</script>

<template>
  <div class="count-box">
    <div class="left-section">
      <div class="title">Maximum Today - {{ title }}</div>
      <div class="time">{{ time }} hours ago</div>
    </div>

    <div class="amount">
      <div
        style="
          color: white;
          font-size: 35px;
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
          font-size: 16px;
          font-family: Fredoka;
          font-weight: 400;
          word-wrap: break-word;
        "
      >
        Devices
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");

.count-box {
  display: inline-flex;
  flex-direction: row;
  height: 100%;
  padding: 7px;
  justify-content: space-between;
  font-family: Fredoka;
  border-radius: 5px;
  border: 3px solid #85aa70;
  background: #313133;
}
.left-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.title {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.amount {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.time {
  text-align: left;
  padding: 1px;
  color: #85aa70;
  font-size: 14px;
  font-family: Fredoka;
  font-weight: 400;
  word-wrap: break-word;
}
</style>
