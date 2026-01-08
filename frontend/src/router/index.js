import { createRouter, createWebHistory } from "vue-router";

import MeshLive from "../pages/MeshLive.vue";
import PaxCounter from "../pages/PaxCounter.vue";
import Nodes from "../pages/Nodes.vue";
import Settings from "../pages/Settings.vue";
import Information from "../pages/Information.vue";
import Impressum from "../pages/Impressum.vue";

import Header from "../components/PageHeader.vue";
import Footer from "../components/Footer.vue";
import LogPanel from "../components/LogPanel.vue";
import PaxPanel from "../components/PaxPanel.vue";
import MapView from "../components/MapView.vue";
import NodeFilter from "../components/NodeFilter.vue";
import NodeTable from "../components/NodeTable.vue";
import SideBar from "../components/SideBar.vue";
import SubHeader from "../components/SubHeader.vue";
import DeviceCount from "../components/DeviceCount.vue";
import DeviceStat from "../components/DeviceStat.vue";

const routes = [
  { path: "/", name: "mesh-live", component: MeshLive },
  { path: "/paxcounter", name: "paxcounter", component: PaxCounter },
  { path: "/nodes", name: "nodes", component: Nodes },
  { path: "/settings", name: "settings", component: Settings },
  { path: "/information", name: "information", component: Information },
  { path: "/impressum", name: "impressum", component: Impressum },

  { path: "/header", name: "header", component: Header },
  { path: "/subheader", name: "subheader", component: SubHeader },
  { path: "/footer", name: "footer", component: Footer },
  { path: "/log-panel", name: "log-panel", component: LogPanel },
  { path: "/pax-panel", name: "pax-panel", component: PaxPanel },
  { path: "/map-view", name: "map-view", component: MapView },
  { path: "/node-filter", name: "node-filter", component: NodeFilter },
  { path: "/node-table", name: "node-table", component: NodeTable },
  { path: "/sidebar", name: "sidebar", component: SideBar },
  { path: "/device-count", name: "devicecount", component: DeviceCount },
  { path: "/device-stat", name: "devicestat", component: DeviceStat },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
