<template>
  <div class="page">
      <label @click="test()" v-show="moitem.name">{{moitem.name}}</label> 
        <select name="" v-show="moitem.type==='cuoselect'&& moitem.show"  :type="moitem.type" :disabled="moitem.disabled" :value="moitem.value" @click="test()"> 
         <option v-for="(itemopt,key) in moitem.option" :key="key" :value=key :selected='moitem.option[0]'>{{itemopt}}</option> 
        </select> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   name:'cuselect',
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
      console.log(this.field)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
</style>
