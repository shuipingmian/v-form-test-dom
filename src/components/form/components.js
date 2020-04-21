import cuinput from "./input"
import cuselect from "./select"
import cucheckbox from "./checkbox"


const allComponents=[
    cuinput,
    cuselect,
    cucheckbox,
]


const components = {}
allComponents.forEach((Component) => {
  components[Component.name] = Component
})
// 这个就是把allComponets 变成对象 给components

export default components
