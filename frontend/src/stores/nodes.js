import { defineStore } from "pinia";

export const useNodeStore = defineStore("nodes", {
  state: () => ({
    allNodes: [], // tất cả nodes
    filteredType: null, // loại đang lọc (CLIENT, ROUTER,...)
    selectedNode: null, // node để hiện popup
    nodeHistory: [
      {
        id: 1,
        short: "NBS",
        longName: "NBS14 Base Station",
        lastSeen: "40s",
        role: "CLIENT",
        model: "HELTEC_WIRELESS_PAPER",
        battery: 65,
        voltage: "3.85V",
        uptime: "110d 15h",
        airUtil: "3.22%",
        lat: "52.49730",
        lon: "13.42887",
        altitude: "51m",
        lastPos: "1h 11m",
      },
      {
        id: 2,
        short: "SO36",
        longName: "LAUSE Solar Mesh",
        lastSeen: "1m 17s",
        role: "CLIENT_BASE",
        model: "HELTEC_V4",
        battery: 62,
        voltage: "3.824V",
        uptime: "3d 3h",
        airUtil: "0.671%",
        lat: "52.49730",
        lon: "13.42887",
        altitude: "51m",
        lastPos: "1h 11m",
      },
      {
        id: 3,
        short: "NFBM",
        longName: "NHGFBM1 afb8",
        lastSeen: "1m 18s",
        role: "CLIENT_BASE",
        model: "HELTEC_V3",
        battery: 101,
        voltage: "4.209V",
        uptime: "18h 42m",
        airUtil: "0.561%",
        lat: "52.55987",
        lon: "13.55284",
        altitude: "417m",
        lastPos: "1m 22s",
      },
      {
        id: 4,
        short: "BHMS",
        longName: "BLN Hdf Stat",
        lastSeen: "1m 27s",
        role: "CLIENT",
        model: "RAK4631",
        battery: 101,
        voltage: "4.195V",
        uptime: "7d 1h",
        airUtil: "0.705%",
        lat: "52.42392",
        lon: "13.59074",
        altitude: "13m",
        lastPos: "1m 5s",
      },
      {
        id: 5,
        short: "DL9K",
        longName: "DL9KCE Thilo 73!",
        lastSeen: "1m 37s",
        role: "CLIENT",
        model: "TLORA_V2_1_IP6",
        battery: 101,
        voltage: "4.242V",
        uptime: "15d 16h",
        airUtil: "1.029%",
        lat: "52.56970",
        lon: "13.32675",
        altitude: "45m",
        lastPos: "1m 51s",
      },
      {
        id: 6,
        short: "VOS1",
        longName: "VoiceOfSovngarde1",
        lastSeen: "1m 47s",
        role: "CLIENT",
        model: "HELTEC_V3",
        battery: 92,
        voltage: "4.085V",
        uptime: "24d 4h",
        airUtil: "0.602%",
        lat: "52.55660",
        lon: "13.41850",
        altitude: "62m",
        lastPos: "1m 52s",
      },
      {
        id: 7,
        short: "NBS",
        longName: "NBS14 Base Station",
        lastSeen: "40s",
        role: "CLIENT",
        model: "HELTEC_WIRELESS_PAPER",
        battery: 65,
        voltage: "3.85V",
        uptime: "110d 15h",
        airUtil: "3.22%",
        lat: "52.49730",
        lon: "13.42887",
        altitude: "51m",
        lastPos: "1h 11m",
      },
      {
        id: 8,
        short: "SO36",
        longName: "LAUSE Solar Mesh",
        lastSeen: "1m 17s",
        role: "CLIENT_BASE",
        model: "HELTEC_V4",
        battery: 62,
        voltage: "3.824V",
        uptime: "3d 3h",
        airUtil: "0.671%",
        lat: "52.49730",
        lon: "13.42887",
        altitude: "51m",
        lastPos: "1h 11m",
      },
      {
        id: 9,
        short: "NFBM",
        longName: "NHGFBM1 afb8",
        lastSeen: "1m 18s",
        role: "CLIENT_BASE",
        model: "HELTEC_V3",
        battery: 101,
        voltage: "4.209V",
        uptime: "18h 42m",
        airUtil: "0.561%",
        lat: "52.55987",
        lon: "13.55284",
        altitude: "417m",
        lastPos: "1m 22s",
      },
      {
        id: 10,
        short: "BHMS",
        longName: "BLN Hdf Stat",
        lastSeen: "1m 27s",
        role: "CLIENT",
        model: "RAK4631",
        battery: 101,
        voltage: "4.195V",
        uptime: "7d 1h",
        airUtil: "0.705%",
        lat: "52.42392",
        lon: "13.59074",
        altitude: "13m",
        lastPos: "1m 5s",
      },
      {
        id: 11,
        short: "DL9K",
        longName: "DL9KCE Thilo 73!",
        lastSeen: "1m 37s",
        role: "CLIENT",
        model: "TLORA_V2_1_IP6",
        battery: 101,
        voltage: "4.242V",
        uptime: "15d 16h",
        airUtil: "1.029%",
        lat: "52.56970",
        lon: "13.32675",
        altitude: "45m",
        lastPos: "1m 51s",
      },
      {
        id: 12,
        short: "VOS1",
        longName: "VoiceOfSovngarde1",
        lastSeen: "1m 47s",
        role: "CLIENT",
        model: "HELTEC_V3",
        battery: 92,
        voltage: "4.085V",
        uptime: "24d 4h",
        airUtil: "0.602%",
        lat: "52.55660",
        lon: "13.41850",
        altitude: "62m",
        lastPos: "1m 52s",
      },
    ],
  }),

  getters: {
    visibleNodes(state) {
      if (!state.filteredType) return state.allNodes;
      return state.allNodes.filter((n) => n.role === state.filteredType);
    },
  },

  actions: {
    setNodes(nodes) {
      this.allNodes = nodes;
      this.visibleNodes = nodes;

      // Thêm node mới vào lịch sử
      nodes.forEach((n) => {
        if (!this.nodeHistory.find((h) => h.id === n.id)) {
          this.nodeHistory.push({ ...n });
        }
      });
    },

    filterByType(type) {
      this.filteredType = type;
    },

    clearFilters() {
      this.filteredType = null;
    },

    selectNode(node) {
      this.selectedNode = node;
    },
  },
});
