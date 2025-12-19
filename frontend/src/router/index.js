import { createRouter, createWebHistory } from "vue-router";
import MeshLive from "../pages/MeshLive.vue";
import PaxCounter from "../pages/PaxCounter.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LogPanel from "../components/LogPanel.vue";
import MapView from "../components/MapView.vue";
import NodeFilter from "../components/NodeFilter.vue";
import NodeTable from "../components/NodeTable.vue";

const routes = [
  { path: "/mesh-live", name: "mesh-live", component: MeshLive },
  { path: "/pax", name: "pax", component: PaxCounter },
  { path: "/header", name: "header", component: Header },
  { path: "/footer", name: "footer", component: Footer },
  { path: "/log-panel", name: "log-panel", component: LogPanel },
  { path: "/map-view", name: "map-view", component: MapView },
  { path: "/node-filter", name: "node-filter", component: NodeFilter },
  { path: "/node-table", name: "node-table", component: NodeTable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
