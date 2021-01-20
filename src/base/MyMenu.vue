<template>
  <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <my-menu-item v-for="(item, index) in data" :key="index" :data="item"/>
  </el-menu>
</template>
<script>
import MyMenuItem from '@/base/MyMenuItem'

export default {
  components: { MyMenuItem },
  props: {
    data: Array
  }
}
</script>
