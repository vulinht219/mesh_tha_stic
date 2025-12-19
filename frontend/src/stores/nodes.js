import { defineStore } from "pinia";

export const useNodeStore = defineStore("nodes", {
  state: () => ({
    allNodes: [],        // tất cả nodes
    filteredType: null,  // loại đang lọc (CLIENT, ROUTER,...)
    selectedNode: null,  // node để hiện popup
    nodeHistory: [],
  }),

  getters: {
    visibleNodes(state) {
      if (!state.filteredType) return state.allNodes;
      return state.allNodes.filter(n => n.role === state.filteredType);
    }
  },

  actions: {
    setNodes(nodes) {
      this.allNodes = nodes;
      this.visibleNodes = nodes;

      // Thêm node mới vào lịch sử
      nodes.forEach(n => {
        if (!this.nodeHistory.find(h => h.id === n.id)) {
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
    }
  }
});
