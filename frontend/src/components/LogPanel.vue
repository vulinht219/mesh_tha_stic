<script setup>
import {ref} from "vue";

const tabs = ["Log", "MediumFast","TEST"];
const activeTab = ref("MediumFast");

const logs = ref([
  { time: "10:39:50", id: "877c", msg: "GM" },
  { time: "11:18:12", id: "RRun", msg: "Moin" },
  { time: "12:54:00", id: "BKV5", msg: "GuMo!" },
  { time: "15:28:47", id: "SIXM", msg: "Welcome Meshtasticajksdhkajshdkajshdkajhdkahsdkjahsd" },
  // fetch data later 
]); 
</script>

<template>
    <div class="log-panel">
        <div class="tabs">
            <span v-for="tab in tabs"
            :key="tab"
            :class="['tab', {active: tab === activeTab}]"
            @click="activeTab = tab">
            {{ tab }}
            </span>
        </div>

        <div class="log-content">
            <div v-for="(item, index) in logs"
            :key="index"
            class="log-line">
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
.log-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  border: 0.5px solid #FFF;
  background: #4D4848;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 55px;
  padding: 5px;
  color: white;
  font-weight: 500;
  border: 0.5px solid #FFF;
  border-radius: 10px 10px 0px 0px;
}

.tab {
  cursor: pointer;
  opacity: 0.5;
}

.tab.active {
  opacity: 1;
  color: #4da6ff;
}

.log-content {
  text-align: left;
  padding: 10px;
  overflow-y: auto;
  height: 100%;
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

.freq, .channel {
  color: #888;
  margin-right: 5px;
}

.msg {
  margin-left: 5px;
}
</style>