<script setup>
import { ref } from "vue";

const tabs = ["Log", "MediumFast", "Log Raw"];
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
      <!-- MediumFast -->
      <iframe
        v-if="activeTab === 'MediumFast'"
        src="http://localhost:3000/d-solo/df6eyul2ex5hce/meshthastic-node-dashboard?orgId=1&from=1768018435908&to=1768040035908&panelId=3"
        width="450"
        height="200"
        frameborder="0"
      ></iframe>

      <!-- Log -->
      <iframe
        v-if="activeTab === 'Log'"
        src="http://localhost:3000/d-solo/df6eyul2ex5hce/meshthastic-node-dashboard?orgId=1&from=1768018530908&to=1768040130908&panelId=4"
        width="455"
        height="200"
        frameborder="0"
      ></iframe>

      <!-- TEST -->
      <iframe
        v-if="activeTab === 'Log Raw'"
        src="http://localhost:3000/d-solo/df6eyul2ex5hce/meshthastic-node-dashboard?orgId=1&from=1768018650137&to=1768040250137&panelId=2"
        width="450"
        height="200"
        frameborder="0"
      ></iframe>
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
  align-items: center;
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
