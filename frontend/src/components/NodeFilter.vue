<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["updateFilters"]);

const activeFilters = ref([]);

const types = [
  { type: "SENSOR", color: "#8ef5c8" },
  { type: "TRACKER", color: "#92e3a9" },
  { type: "CLIENT_MUTE", color: "#d7ffd7" },
  { type: "CLIENT", color: "#ffe97f" },
  { type: "CLIENT_BASE", color: "#ffcf96" },
  { type: "REPEATER", color: "#ff9d9d" },
  { type: "ROUTER_LATE", color: "#ff8ea1" },
  { type: "ROUTER", color: "#ff7474" },
  { type: "LOST_AND_FOUND", color: "#cbb6ff" },
];

function toggleFilter(type) {
  if (activeFilters.value.includes(type)) {
    activeFilters.value = activeFilters.value.filter(t => t !== type);
  } else {
    activeFilters.value.push(type);
  }
  emit("updateFilters", activeFilters.value);
}

function clearFilters() {
  activeFilters.value = [];
  emit("updateFilters", []);
}

function hideLines() {
  console.log("Hide neighbor lines triggered");
}

function toggleExpand() {
  console.log("Expand filter panel");
}
</script>

<template>
  <div class="filter-panel">

    <!-- Header -->
    <div class="filter-header">
      <span>Filter Nodes</span>
      <button class="expand-btn" @click="toggleExpand">⤢</button>
    </div>

    <!-- Node Types -->
    <div class="filter-body">
      <div v-for="item in types" 
           :key="item.type" 
           class="filter-item"
           :class="{ active: activeFilters.includes(item.type) }"
           @click="toggleFilter(item.type)">
        
        <span class="color-badge" :style="{ background: item.color }"></span>
        <span>{{ item.type }}</span>
      </div>
    </div>

    <!-- Control Buttons -->
    <button class="btn" @click="hideLines">Hide neighbor lines</button>
    <button class="btn" @click="clearFilters">Clear filters</button>

  </div>
</template>

<style scoped>
.filter-panel {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 180px;
  background: #1f1f1fcc;
  padding: 12px;
  border-radius: 12px;
  backdrop-filter: blur(6px);

  display: flex;
  flex-direction: column;

  /* tổng height của panel */
  max-height: 450px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: white;
  font-weight: bold;
}

.expand-btn {
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
}

.filter-body {
  flex: 1;                 /* chiếm không gian còn lại */
  overflow-y: auto;        /* scroll nội bộ */
  padding-right: 4px;
  margin-bottom: 12px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #2d2d2d;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  color: white;
  transition: 0.2s;
}

.filter-item.active {
  background: #3b3b3b;
  outline: 1px solid #ffffff55;
}

.color-badge {
  width: 14px;
  height: 14px;
  border-radius: 3px;
}

.btn {
  width: 100%;
  padding: 8px;
  background: #333;
  color: #eee;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
}
</style>
