<script setup>
import { useNodeStore } from "@/stores/nodes";
const store = useNodeStore();
</script>

<template>
  <div v-if="store.selectedNode" class="popup">
    <h3>{{ store.selectedNode.name }}</h3>
    <p>Role: {{ store.selectedNode.role }}</p>
    <p>Battery: {{ store.selectedNode.battery }}%</p>
    <p>Voltage: {{ store.selectedNode.voltage }}V</p>
    <p>Uptime: {{ store.selectedNode.uptime }}</p>
  </div>
</template>
