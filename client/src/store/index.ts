import { defineStore } from "pinia"
const useMainStore = defineStore({
  id: "main",
  state: () => ({
    name: "超级管理员",
  }),
})
export default useMainStore
