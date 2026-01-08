<script setup>
import { ref } from "vue";

const tabs = ["Log", "MediumFast", "TEST"];
const activeTab = ref("MediumFast");

const logs = ref([
  { time: "10:39:50", id: "877c", msg: "GM" },
  { time: "11:18:12", id: "RRun", msg: "Moin" },
  { time: "12:54:00", id: "BKV5", msg: "GuMo!" },
  {
    time: "15:28:47",
    id: "SIXM",
    msg: "Welcome Meshtasticajksdhkajshdkajshdkajhdkahsdkjahsd",
  },
  // fetch data later
]);
</script>

<template>
  <div class="log-panel">
    <div class="tabs">
      <span
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: tab === activeTab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </span>
    </div>

    <div class="log-content">
      <div v-for="(item, index) in logs" :key="index" class="log-line">
        <span class="time">{{ item.time }}</span>
        <span class="freq">[868]</span>
        <span class="channel">[MF]</span>
        <span class="node-id">{{ item.id }}</span>
        <span class="msg">{{ item.msg }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka&display=swap");

.log-panel {
  display: flex;
  flex-direction: column;
  height: 93%;
  border-radius: 10px;
  border: 1px solid #85aa70;
  background: #313133;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 5px;

  color: white;
  font-family: Fredoka;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  border: 1px solid #85aa70;
  border-radius: 5px 5px 0px 0px;
}

.tab {
  cursor: pointer;
  opacity: 0.5;
}

.tab.active {
  opacity: 1;
  color: #111214;
  background-color: #85aa70;
  padding: 2px;
  border-radius: 5px;
}

.log-content {
  flex: 1;
  text-align: left;
  padding: 10px;
  overflow-y: auto;
  color: white;
  font-family: monospace;
  font-size: 14px;
}

.log-line {
  margin-bottom: 5px;
}

.node-id {
  background: #ffe681;
  color: black;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 0 6px;
}

.time {
  color: #ccc;
  margin-right: 5px;
}

.freq,
.channel {
  color: #888;
  margin-right: 5px;
}

.msg {
  margin-left: 5px;
}
</style>
