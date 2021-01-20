<template>
  <div class="SysTabs pt-3">
    <el-tabs v-model="value" type="card" closable>
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item.title" :name="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SysTabs',
  setup () {
    const store = useStore()
    const value = ref('/')
    return {
      tabs: computed(() => store.getters['SysTabs/tabs']),
      value
    }
  }
}
</script>
