<template>
  <div class="header p-3 pb-0 shadow-md bg-white flex flex-col">
    <div class="flex items-center justify-between">
      <div>
        <i class="cdmfont cdmcaidan cursor-pointer mr-6"></i>
        <bread-crumbs :data="breakData"/>
      </div>
      <div>
        <i class="cdmfont cursor-pointer" :class="{'cdmquanping': !fullScreen, 'cdmtuichuquanping': fullScreen} "
           @click="toggleScreen"></i>
      </div>
    </div>
    <sys-tabs/>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs'
import { reactive, toRefs } from 'vue'
import SysTabs from '@/components/SysTabs'

export default {
  name: 'SysHeader',
  components: {
    SysTabs,
    BreadCrumbs
  },
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
      ],
      fullScreen: false
    })

    const toggleScreen = () => {
      if (data.fullScreen) {
        document.exitFullscreen().then(() => {
          data.fullScreen = false
        })
      } else {
        document.body.requestFullscreen().then(() => {
          data.fullScreen = true
        })
      }
    }

    return {
      ...toRefs(data),
      toggleScreen
    }
  }
}
</script>
