<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <formground :fields="item" />
   
  </div>
</template>

<script>
import formground from './form-item/formground'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
     return{
        item:[{
          name:"输入控制",
          type:"cuoinput",
          disabled:false,
          placeholder:'请输入',
          value:'',
          show:true,
        },
        {
          name:"类似check",
          type:"cuocheckbox",
          disabled:false,
          placeholder:'请输入',
          value:'',
          show:true,
        },
         {
          name:"类似radio",
          type:"cuoselect",
          disabled:false,
          value:'',
          show:true,
          option:['苹果','香蕉','梨子']

        },
        ]
     }
  },
  mounted(){
       this.test()
  },
  methods:{
   test(){
//     const allcomponents=[
//     input,
//     select,
//     checkbox,
//      ]
// console.log(allcomponents)
// const components = {}
// allcomponents.forEach((Component) => {
//   components[Component.name] = Component
// }) 
// console.log(components)
// }
   }
  },
  components: {
   formground
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
.test{
  width: 100%;
  height: 190px;
  background-color: aqua;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
