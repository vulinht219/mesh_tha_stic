<script setup>
import PageHeader from "@/components/PageHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import SideBar from "@/components/SideBar.vue";
import MapView from "@/components/MapView.vue";
import LogPanel from "@/components/LogPanel.vue";
</script>

<template>
  <div class="mesh-live">
    <div class="top-section">
      <PageHeader />
    </div>

    <div class="main-section">
      <SideBar />

      <div class="body-section">
        <SubHeader title="MESH_LIVE" />
        <div class="content-section">
            <MapView />
            <LogPanel />
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
  display: flex;
  flex-direction: row;
  height: 100%;
}

.body-section {
  display: grid;
  grid-template-rows: auto 1fr; /* SubHeader | Main content */
  height: 100%;
}
.content-section {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Map | Log */
  gap: 16px;
  height: 100%;
  padding: 1vw;
}
</style>
