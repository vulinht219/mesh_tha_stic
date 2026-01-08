<script setup>
import { useSettingsStore } from "@/stores/settings";
const settings = useSettingsStore();

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
        <SubHeader title="SETTINGS" />
        <div class="content-section">
          <div class="settings-scroll">
            <div>
              <!-- APPEARANCE -->
              <div class="settings-section">
                <div class="settings-title">Appearance</div>

                <div class="settings-item">
                  <label>Theme</label>
                  <select v-model="settings.theme">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                  </select>
                </div>

                <div class="settings-item">
                  <label>Dense table mode</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.denseMode"
                  />
                </div>

                <div class="settings-item">
                  <label>Font size</label>
                  <select v-model="settings.fontSize">
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>

              <!-- MAP -->
              <div class="settings-section">
                <div class="settings-title">Map</div>

                <div class="settings-item">
                  <label>Auto zoom on node select</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.autoZoom"
                  />
                </div>

                <div class="settings-item">
                  <label>Show node labels</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.showNodeLabels"
                  />
                </div>
              </div>

              <!-- NODE TABLE -->
              <div class="settings-section">
                <div class="settings-title">Node Table</div>

                <div class="settings-item">
                  <label>Show battery column</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.showBattery"
                  />
                </div>

                <div class="settings-item">
                  <label>Show voltage column</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.showVoltage"
                  />
                </div>
              </div>

              <!-- DATA -->
              <div class="settings-section">
                <div class="settings-title">Data</div>

                <div class="settings-item">
                  <label>Auto refresh interval</label>
                  <select v-model="settings.refreshInterval">
                    <option :value="5">5s</option>
                    <option :value="10">10s</option>
                    <option :value="30">30s</option>
                  </select>
                </div>
              </div>

              <!-- ADVANCED -->
              <div class="settings-section">
                <div class="settings-title">Advanced</div>

                <div class="settings-item">
                  <label>Debug mode</label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    v-model="settings.debugMode"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");
.mesh-live {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.main-section {
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 0;
}

.body-section {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  min-height: 0;
}
.content-section {
  display: flex;
  justify-content: left;
  height: 100%;
  min-height: 0;
  padding: 2vw 5vw 0 5vw;
}

.settings-section {
  width: 100%;
  overflow-y: auto;
  margin-bottom: 32px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.settings-item select {
  font-size: 20px;
  font-family: Gugi;
  padding: 10px;
  border-radius: 10px;
}

.settings-scroll {
  height: 100%;
  overflow-y: auto; /* ✅ CUỘN Ở ĐÂY */
  min-height: 0; /* 🔥 CỰC KỲ QUAN TRỌNG */
  width: 100%;
}

.settings-scroll::-webkit-scrollbar {
  display: none;
}

.settings-title {
  color: #85aa70;
  font-size: 36px;
  margin-bottom: 12px;
  text-align: left;
}

.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 24px;
  color: white;
  border-bottom: 1px solid #2a2a2a;
}

.settings-item:last-child {
  border-bottom: none;
}

.settings-item label {
  opacity: 0.9;
}
.checkbox {
  appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #85aa70;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: background-color 200ms ease-out;
}

.checkbox:checked {
  background-color: #85aa70; /* nền xanh */
}

.checkbox:checked::after {
  content: "✓";
  position: absolute;
  color: #000000; /* ✓ màu đen */
  font-size: 14px;
  font-weight: bold;
  top: 2px;
  left: 5px;
}
</style>
