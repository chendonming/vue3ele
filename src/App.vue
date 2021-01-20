<template>
  <div class="flex h-full">
    <my-menu :data="data" class="w-20 md:w-64 shadow-xl"/>
    <div class="h-full flex-1 flex flex-col bg-gray-100">
      <sys-header/>
      <div class="flex-1 pt-4">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '//at.alicdn.com/t/font_2333809_79imudaymij.css';
</style>

<script>
import MyMenu from '@/base/MyMenu'
import SysHeader from '@/components/SysHeader'
import { useRouter } from 'vue-router'

export default {
  components: {
    SysHeader,
    MyMenu
  },
  setup () {
    const router = useRouter()
    return {
      data: router.getRoutes().map(v => ({
        id: Math.random() * 100 + '',
        title: v.name
      }))
    }
  }
}
</script>
