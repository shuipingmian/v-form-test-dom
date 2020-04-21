<template>
  <div class="page">
       <component :is="field.type" :moitem=field ></component> 
  </div>
</template>

<script type="text/ecmascript-6">
import components from '../form/components'
import cuoinput from "../form/input"
import cuoselect from "../form/select"
import cuocheckbox from "../form/checkbox"
export default {
   props: {
      field: {
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
  mounted(){
    console.log(this.field)
  },
  components: {
    cuoinput,
    cuoselect,
    cuocheckbox,
  }
}
</script>

<style scoped lang="stylus">
</style>
