<script setup>
import { ref, watch, onMounted } from "vue";
import L from "leaflet";
import NodeFilter from "./NodeFilter.vue";

const filter = ref("");

// Example nodes
const nodes = [
  { lat: 48.3708, lon: 10.8974, color: "#ffd97a"},
  { lat: 48.3665, lon: 10.8989, color: "#ff9f9f" },
  { lat: 48.3650, lon: 10.8850, color: "#9fcdff" },
];

let map;
let markers = [];

// Init map
const initMap = () => {
  map = L.map("leaflet-map", {
    zoomControl: true
  }).setView([48.370545, 10.897790], 11);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
  }).addTo(map);

  addMarkers(nodes);
};

const addMarkers = (list) => {
  markers.forEach((m) => m.remove());
  markers = [];

  list.forEach((n) => {
    const marker = L.circleMarker([n.lat, n.lon], {
      radius: 10,
      color: "#000000",
      fillColor: n.color,
      fillOpacity: 0.8,
      weight: 0.5,
    }).addTo(map);

    markers.push(marker);
  });
};

const fitMap = () => {
  if (!markers.length) return;

  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds(), { padding: [40, 40] });
};

watch(filter, () => {
  const filtered = nodes.filter((n) =>
    `${n.lat}${n.lon}`.includes(filter.value)
  );
  addMarkers(filtered);
});

onMounted(() => {
  initMap();
});
</script>

<template>
  <div class="map-panel">

    <!-- Filter row (optional) -->
    <div class="filter-row">
      <input
        v-model="filter"
        placeholder="Filter nodes"
        class="filter-input"
      />
    </div>

    <!-- Leaflet Map -->
    <div class="map-wrapper">
      <div id="leaflet-map" class="map"></div>

      <NodeFilter class="node-filter-overlay" />
      
      <!-- Fit map button -->
      <button class="fullscreen-btn" @click="fitMap">⛶</button>
    </div>

  </div>
</template>

<style scoped>
.map-panel {
  background: #111214;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 95%;
}

/* Filter controls */
.filter-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-input {
  padding: 8px 12px;
  background: #1c1c1c;
  border: 1px solid #333;
  color: white;
  border-radius: 6px;
  width: 200px;
}

.icon-btn {
  background: #1c1c1c;
  border: 1px solid #333;
  padding: 6px 10px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

/* Map */
.map-wrapper {
  position: relative;
  width: 940px;
  height: 90%;
  border-radius: 12px;
  overflow: hidden;
}

.node-filter-overlay {
  position: absolute;
  top: 80px;
  z-index: 1000;
  background: #111214;
  border: 1px solid #85aa70;
  border-radius: 6px;
  padding: 8px;
  height: 25vw;
  overflow-y: auto;
}

.map {
  width: 100%;
  height: 100%;
}

.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1c1c1c;
  border: 1px solid #333;
  padding: 6px 10px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}
</style>
