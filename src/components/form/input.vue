<template>
  <div class="page">
   <label @click="test()" v-show="moitem.name">{{moitem.name}}</label> 
   <input v-show="moitem.type==='cuoinput'&& moitem.show" :type="moitem.type" :disabled="moitem.disabled" :placeholder="moitem.placeholder" :value="moitem.value" @click="test()" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
     name:'cuinput',
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
   methods:{
    test(){
      console.log(this.moitem)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
</style>
