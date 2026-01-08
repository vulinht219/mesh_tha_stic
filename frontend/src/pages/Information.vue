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
        <SubHeader title="INFORMATION" />
        <div class="content-section">
          <div class="info-page">
            <section>
              <h2>About Mesh_THA_STIC</h2>
              <p>
                Mesh_THA_STIC is a local dashboard for monitoring and
                visualizing Meshtastic-based LoRa mesh networks. It provides a
                compact overview of discovered nodes, their status, and live
                network metrics without relying on cloud services.
              </p>
            </section>

            <section>
              <h2>What is Meshtastic?</h2>
              <p>
                Meshtastic is an open-source, off-grid communication system
                built on LoRa radio technology. Devices automatically form a
                decentralized mesh network, enabling messaging and telemetry
                without internet or cellular infrastructure.
              </p>
            </section>

            <section>
              <h2>Data Source & Updates</h2>
              <p>
                Node information is collected from nearby Meshtastic devices via
                local gateways. Metrics such as battery level, uptime, and
                channel utilization are updated periodically based on received
                packets.
              </p>
              <p>The refresh interval can be adjusted in the Settings page.</p>
            </section>

            <section>
              <h2>Node Table Explanation</h2>
              <ul>
                <li><strong>Short</strong> – Short identifier of the node</li>
                <li>
                  <strong>Last Seen</strong> – Time since the last received
                  packet
                </li>
                <li>
                  <strong>Role</strong> – Node role in the mesh (Client, Base,
                  Hidden)
                </li>
                <li>
                  <strong>HW Model</strong> – Hardware platform of the device
                </li>
                <li>
                  <strong>Battery</strong> – Current battery level (if
                  available)
                </li>
                <li>
                  <strong>Air Util Tx</strong> – Transmit channel utilization
                </li>
                <li>
                  <strong>Latitude / Longitude</strong> – Last known GPS
                  position
                </li>
              </ul>
            </section>

            <section>
              <h2>Limitations</h2>
              <p>
                Not all nodes provide complete information. GPS data may be
                unavailable for devices without a position fix, and battery
                values above 100% usually indicate externally powered nodes.
              </p>
            </section>

            <section>
              <h2>Project Context</h2>
              <p>
                This project was developed as part of an academic exploration of
                distributed systems, peer-to-peer networking, and data
                visualization.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
  min-height: 0;
}
.content-section {
  gap: 16px;
  height: 100%;
  padding: 1vw;
  min-height: 0;
}

.info-page {
  height: 100%;
  overflow-y: auto;
  text-align: left;
  font-family: Gugi;
}

.info-page::-webkit-scrollbar {
  display: none;
}

.info-page section {
  border-bottom: 1px solid #2a2a2a;
}

.info-page h2 {
  color: #85aa70;
  font-size: 20px;
  margin-bottom: 12px;
  text-align: left;
}

.info-page p {
  padding: 10px 0;
  font-size: 16px;
  color: white;
}
</style>
