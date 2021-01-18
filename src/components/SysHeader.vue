<template>
  <div class="header p-3 flex items-center text-sm">
    <div>
      <i class="cdmfont cdmcaidan cursor-pointer mr-6"></i>
      <bread-crumbs :data="breakData"/>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs'
import { reactive, toRefs } from 'vue'

export default {
  name: 'SysHeader',
  components: { BreadCrumbs },
  setup () {
    const data = reactive({
      breakData: [
        {
          label: '首页'
        },
        {
          label: '系统管理'
        },
        {
          label: '菜单管理'
        }
      ]
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>
