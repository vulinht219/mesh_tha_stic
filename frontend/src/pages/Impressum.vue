<script setup>
import PageHeader from "@/components/PageHeader.vue";
import SubHeader from "@/components/SubHeader.vue";
import SideBar from "@/components/SideBar.vue";
import MapView from "@/components/MapView.vue";
import LogPanel from "@/components/LogPanel.vue";
const projectName = "Mesh_THA_stic";
const responsibleName = "mesh_tha_stic team";
const contactEmail = "meshthastic@gmail.com";
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
          <div class="impressum-page">
            <section class="section">
              <h2 class="section-title">Projektname</h2>
              <p class="text">{{ projectName }}</p>
            </section>

            <section class="section">
              <h2 class="section-title">Verantwortlich für den Inhalt</h2>
              <p class="text">{{ responsibleName }}</p>
            </section>

            <section class="section">
              <h2 class="section-title">Akademischer Kontext</h2>
              <p class="text">
                Dieses Projekt wurde im Rahmen eines Hochschulprojekts
                entwickelt und dient ausschließlich zu Lehr- und
                Demonstrationszwecken.
              </p>
            </section>

            <section class="section">
              <h2 class="section-title">Kontakt</h2>
              <p class="text">
                E-Mail:
                <a class="link" :href="`mailto:${contactEmail}`">{{
                  contactEmail
                }}</a>
              </p>
            </section>

            <section class="section">
              <h2 class="section-title">Haftungsausschluss</h2>
              <p class="text">
                Diese Anwendung ist ein nicht-kommerzielles Studentenprojekt. Es
                wird keine Gewähr für die Richtigkeit, Vollständigkeit oder
                Aktualität der dargestellten Daten übernommen.
              </p>
            </section>

            <section class="section">
              <h2 class="section-title">Hinweis</h2>
              <p class="text">
                Dieses Projekt steht in keiner offiziellen Verbindung zu
                Meshtastic und ist kein offizielles Produkt der
                Meshtastic-Organisation.
              </p>
            </section>
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
  min-height: 0;
}
.content-section {
  gap: 16px;
  height: 100%;
  padding: 1vw;
  min-height: 0;
}

.impressum-page {
  height: 100%;
  overflow-y: auto;
  color: white;
  line-height: 1.6;
  font-family: Gugi;
  text-align: left;
}

.impressum-page::-webkit-scrollbar {
  display: none;
}

.page-title {
  color: #85aa70;
  font-size: 24px;
  margin: 0 0 18px 0;
}

.section {
  margin-bottom: 35px;
  border-bottom: 1px solid #2a2a2a;
}

.section-title {
  color: #85aa70;
  font-size: 20px;
  margin: 0 0 8px 0;
}

.text {
  margin: 0;
  opacity: 0.95;
}

.link {
  color: #85aa70;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
