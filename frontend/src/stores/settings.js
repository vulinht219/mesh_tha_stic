import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    // Appearance
    theme: "dark",
    denseMode: false,
    fontSize: "normal",

    // Map
    autoZoom: true,
    showNodeLabels: true,

    // Node table
    showBattery: true,
    showVoltage: true,

    // Data
    refreshInterval: 10, // seconds

    // Advanced
    debugMode: false,
  }),
});
