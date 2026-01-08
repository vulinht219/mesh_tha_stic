<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="sidebar">
    <div
      style="
        color: white;
        font-size: 24px;
        font-family: Gugi;
        font-weight: 400;
        margin-bottom: -40px;
        word-wrap: break-word;
      "
    >
      Dashboard
    </div>

    <div
      style="width: 100%; outline: 1px #85aa70 solid; outline-offset: -0.5px"
    ></div>

    <div class="section-one">
      <router-link
        to="/"
        class="nav-btn"
        :class="{ active: route.name === 'mesh-live' }"
      >
        Mesh Live
      </router-link>

      <router-link
        to="/paxcounter"
        class="nav-btn"
        :class="{ active: route.name === 'paxcounter' }"
      >
        PaxCounter
      </router-link>

      <router-link
        to="/nodes"
        class="nav-btn"
        :class="{ active: route.name === 'nodes' }"
      >
        Nodes
      </router-link>
    </div>

    <div
      style="width: 100%; outline: 1px #85aa70 solid; outline-offset: -0.5px"
    ></div>

    <div class="section-two">
      <router-link
        to="/settings"
        class="nav-btn"
        :class="{ active: route.name === 'settings' }"
      >
        Settings
      </router-link>

      <router-link
        to="/information"
        class="nav-btn"
        :class="{ active: route.name === 'information' }"
      >
        Info
      </router-link>

      <router-link
        to="/impressum"
        class="nav-btn"
        :class="{ active: route.name === 'impressum' }"
      >
        Impressum
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 45px;
  border-right: 1px solid #85aa70;
  background: #111214;
  max-width: fit-content;
  padding: 1vw;
  margin-bottom: 1px;
}

.section-one,
.section-two {
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.nav-btn {
  text-align: left;
  background-color: transparent;
  color: #fff;
  font-family: Gugi;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nav-btn:hover {
  padding: 10px;
  border-radius: 5px;
  background: #78cc47;
  color: #111214;
  transition: color 300ms ease-out;
  cursor: pointer;
}
</style>
