<template>
  <div class="about">
    <div v-for="(item, key) in item" :key="key">
        <label v-show='item.name'>{{item.name}}</label>
        <input v-show="item.type==='text'&& item.show" :type="item.type" :disabled="item.disabled" :placeholder="item.placeholder" :value="item.value"  />
        <input v-show="item.type==='checkbox'&& item.show" :type="item.type" :disabled="item.disabled" :placeholder="item.placeholder" :value="item.value"  />
        <select name="" v-show="item.type==='select'&& item.show"  :type="item.type" :disabled="item.disabled" :value="item.value" > 
         <option v-for="(itemopt,key) in item.option" :key="key" :value=key :selected='item.option[0]'>{{itemopt}}</option> 
        </select> 
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item:[{
          name:"输入控制",
          type:"text",
          disabled:false,
          placeholder:'请输入',
          value:'',
          show:true,
        },
        {
          name:"类似check",
          type:"checkbox",
          disabled:false,
          placeholder:'请输入',
          value:'',
          show:true,
        },
         {
          name:"类似radio",
          type:"select",
          disabled:false,
          value:'',
          show:true,
          option:['苹果','香蕉','梨子']

        },
        ]
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="less"></style>
