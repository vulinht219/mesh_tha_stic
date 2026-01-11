<script setup>
import { ref, watch, nextTick } from "vue";

const tabs = ["Log", "MediumFast", "TEST"];
const activeTab = ref("Log");

const logs = ref([]);
const logBox = ref(null);
let timer = null;

// map tên tab → tên bảng DB
const tableMap = {
  Log: "log_raw",
  TEST: "log_test",
  MediumFast: "log_mediumfast",
};

async function fetchLogs(table) {
  const res = await fetch(
    `http://localhost:5000/api/logs?table=${table}&limit=100`
  );
  const data = await res.json();

  logs.value = data.items.reverse().map((row) => ({
    time: new Date(row.timestamp).toLocaleString("de-DE"),
    freq: 868,
    channel: "MF",
    sender: row.sender_node_id,
    msg: row.message,
  }));

  await nextTick();
  if (logBox.value) {
    logBox.value.scrollTop = logBox.value.scrollHeight;
  }
}

function startAutoRefresh(table) {
  stopAutoRefresh();
  timer = setInterval(() => fetchLogs(table), 3000);
}

function stopAutoRefresh() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

watch(
  activeTab,
  (tab) => {
    const table = tableMap[tab];

    if (table) {
      fetchLogs(table);
      startAutoRefresh(table);
    } else {
      stopAutoRefresh();
    }
  },
  { immediate: true } // 👈 THÊM DÒNG NÀY
);
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
      <div v-if="tableMap[activeTab]" class="log-terminal" ref="logBox">
        <div v-for="(item, index) in logs" :key="index" class="log-row">
          <span class="time">[{{ item.time }}]</span>
          <span class="freq">[{{ item.freq }}]</span>
          <span class="channel">[{{ item.channel }}]</span>
          <span class="user">{{ item.sender }}</span>
          <span class="msg">{{ item.msg }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka&display=swap");

.log-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.log-content::-webkit-scrollbar {
  display: none;
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

.log-terminal {
  font-family: monospace;
  border-radius: 8px;
  height: 200px;
}

.log-row {
  line-height: 1.6;
  color: #d1d5db;
}
.time {
  color: #7dd3fc;
}
.freq {
  color: #a78bfa;
  margin-left: 4px;
}
.channel {
  color: #34d399;
  margin-left: 4px;
}

.user {
  background: #fde68a;
  color: black;
  padding: 0 6px;
  border-radius: 6px;
  margin: 0 6px;
}
</style>
