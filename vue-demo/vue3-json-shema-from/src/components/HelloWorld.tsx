import { defineComponent } from "vue"


const PropType = {
  msg: String,
  age: {
    type: Number,
    required: true
  }
} as const

export default defineComponent ({
  props: PropType,
  setup(props) {
    return () => (
      <div>{props.age}</div>
    )
  }
})
