<script setup>
import PageHeader from "@/components/PageHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import SideBar from "@/components/SideBar.vue";

import DeviceCount from "../components/DeviceCount.vue";
import DeviceStat from "../components/DeviceStat.vue";
import PaxPanel from "../components/PaxPanel.vue";
import MapView from "../components/MapView.vue";
</script>

<template>
  <div class="mesh-live">
    <div class="top-section">
      <PageHeader />
    </div>

    <div class="main-section">
      <SideBar />

      <div class="body-section">
        <SubHeader title="PAXCOUNTER" />
        <div class="content-section">
          <div class="stats-section">
            <div class="count-section">
              <div class="count">
                <DeviceCount title="WiFi Devices" />
                <DeviceCount title="Bluetooth Devices" />
              </div>
              <div class="max-count">
                <DeviceStat title="WiFi Devices" />
                <DeviceStat title="Bluetooth Devices" />
              </div>
            </div>
            <div class="graph-section">
              <PaxPanel />
            </div>
          </div>
          <div class="map">
            <MapView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mesh-live {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
}

.main-section {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  height: 100%;
  width: 100%;
}

.body-section {
  display: grid;
  grid-template-rows: auto 1fr; /* SubHeader | Main content */
  height: 100%;
}
.content-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 1vw;
}
.stats-section {
  display: flex;
  flex-direction: column;
  gap: 1vw;
}
.count-section {
  display: flex;
  flex-direction: row;
  gap: 1vw;
}
.count {
  display: flex;
  flex-direction: row;
  gap: 1vw;
}
.max-count {
  display: flex;
  width: 54%;
  flex-direction: column;
  gap: 1vw;
}
.graph-section {
}
.map {
  width: 100%;
  min-width: 0;
  min-height: 0; 
  overflow: hidden;
}
</style>
