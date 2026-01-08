<script setup>
import PageHeader from "@/components/PageHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import SideBar from "@/components/SideBar.vue";
import NodeTable from "../components/NodeTable.vue";
</script>

<template>
  <div class="mesh-live">
    <div class="top-section">
      <PageHeader />
    </div>

    <div class="main-section">
      <SideBar />

      <div class="body-section">
        <SubHeader title="NODES" />
        <div class="table">
          <NodeTable />
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
  width: 100%;
}

.body-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 1vw;
}
.table{
    margin-right: 1.5vw;
}
</style>
