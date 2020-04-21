<template>
  <div class="page">
    <label  v-show="moitem.name">{{moitem.name}}</label> 
    <input v-show="moitem.type==='cuocheckbox'&& moitem.show" type="checkbox" :disabled="moitem.disabled" :placeholder="moitem.placeholder" :value="moitem.value"  />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name:'cucheckbox',
   props: {
      moitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
</style>
