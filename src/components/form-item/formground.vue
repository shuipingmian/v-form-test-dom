<template>
  <div class="page">
     <formitem  v-for="(item,key) in  fields"  :key="key"  :field=item />
  </div>
</template>

<script type="text/ecmascript-6">
import formitem from './formitem'
export default {
  props: {
      fields: {
        type:Array,
        default() {
          return []
        }
      }
    },
  data() {
    return {

    }
  },
   methods:{
      test(){
        console.log(this.fields)
      }
   },
  components: {
   formitem
  }
}
</script>

<style scoped lang="stylus">
</style>
