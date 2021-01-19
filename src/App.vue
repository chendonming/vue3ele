<template>
  <div class="flex h-full">
    <my-menu :data="data" class="w-64 shadow-xl"/>
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

export default {
  components: {
    SysHeader,
    MyMenu
  },
  setup () {
    return {
      data: [
        {
          id: '1',
          title: '菜单一',
          children: [
            {
              id: '2',
              title: '子菜单1'
            },
            {
              id: '3',
              title: '子菜单2'
            }
          ]
        },
        {
          id: '4',
          title: '菜单二',
          children: [
            {
              id: '5',
              title: '子菜单1'
            },
            {
              id: '6',
              title: '子菜单2'
            }
          ]
        }
      ]
    }
  }
}
</script>
