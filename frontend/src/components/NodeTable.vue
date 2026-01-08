<script setup>
import { useNodeStore } from "@/stores/nodes";
const store = useNodeStore();

function selectRow(node) {
  store.selectNode(node);
  // sau này map sẽ zoom vào node
}
</script>

<template>
  <div class="node-table-wrapper">

    <table class="node-table">
      <thead>
        <tr>
          <th>Short</th>
          <th>Long Name</th>
          <th>Last Seen</th>
          <th>Role</th>
          <th>HW Model</th>
          <th>Battery</th>
          <th>Voltage</th>
          <th>Uptime</th>
          <th>Air Util Tx</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Altitude</th>
          <th>Last Position</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="node in store.nodeHistory" :key="node.id" 
            @click="selectRow(node)">
          
          <td>
            <span class="short-tag">{{ node.short }}</span>
          </td>

          <td class="long-name">{{ node.longName }}</td>
          <td>{{ node.lastSeen }}</td>
          <td>{{ node.role }}</td>
          <td>{{ node.model }}</td>
          <td>{{ node.battery }}%</td>
          <td>{{ node.voltage }}</td>
          <td>{{ node.uptime }}</td>
          <td>{{ node.airUtil }}</td>
          <td class="link">{{ node.lat }}</td>
          <td class="link">{{ node.lon }}</td>
          <td>{{ node.altitude }}</td>
          <td>{{ node.lastPos }}</td>

        </tr>
      </tbody>

    </table>

  </div>
</template>

<style scoped>
.node-table-wrapper {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  border-bottom: 1px solid #85aa70;
  background: #1b1b1b;
  padding: 10px;
}

.node-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.node-table thead {
  position: sticky;
  top: 0;
  z-index: 2;
}

.node-table th {
  padding: 10px;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  color: #ddd;
}

.node-table td {
  padding: 8px 10px;
  font-size: 14px;
  border-bottom: 1px solid #333;
}

.node-table tbody tr:hover {
  background: #2b2b2b;
  cursor: pointer;
}

.short-tag {
  background: #ffeaa7;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: bold;
  color: #333;
}

.long-name {
  color: #4daaff;
  cursor: pointer;
}

.link {
  color: #4daaff;
}
</style>
