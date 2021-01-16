<template>
  <div class="m-20">
    <div class="flex items-center">
      <c-button type="primary" @click="click" size="big" class="mr-3">big button</c-button>
      <c-button type="primary" @click="click">主要button</c-button>
      <c-button type="primary" class="ml-3" @click="click" size="small">small button</c-button>
      <c-button type="primary" class="ml-3" @click="click" size="mini">mini button</c-button>
    </div>
    <div class="flex items-center mt-3">
      <c-button type="success" @click="click" size="big" class="mr-3">big button</c-button>
      <c-button type="success" @click="click">主要button</c-button>
      <c-button type="success" class="ml-3" @click="click" size="small">small button</c-button>
      <c-button type="success" class="ml-3" @click="click" size="mini">mini button</c-button>
    </div>
    <div class="flex items-center mt-3">
      <c-button type="warning" @click="click" size="big" class="mr-3">big button</c-button>
      <c-button type="warning" @click="click">主要button</c-button>
      <c-button type="warning" class="ml-3" @click="click" size="small">small button</c-button>
      <c-button type="warning" class="ml-3" @click="click" size="mini">mini button</c-button>
    </div>
    <div class="flex items-center mt-3">
      <c-button type="danger" @click="click" size="big" class="mr-3">big button</c-button>
      <c-button type="danger" @click="click">主要button</c-button>
      <c-button type="danger" class="ml-3" @click="click" size="small">small button</c-button>
      <c-button type="danger" class="ml-3" @click="click" size="mini">mini button</c-button>
    </div>
    <c-button type="primary" @click="click" disabled class="mt-4">主要button</c-button>
  </div>
</template>

<script>
import CButton from '@/base/Button'

export default {
  name: 'Home',
  components: { CButton },
  setup () {
    const click = () => {
      console.log(1)
      alert('click')
    }
    return {
      click
    }
  }
}
</script>
