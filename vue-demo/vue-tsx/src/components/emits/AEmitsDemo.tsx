import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AEmitsDemo',
  emits: ['click', 'getData'],
  setup(props, { emit }) {
    const click = () => {
      console.log('点击+++++')
      emit('click')
    }
    return () => {
      return (
        <>
          <button onClick={click}>点击</button>
          <button onClick={() => emit('getData', 10)}>getData</button>
        </>
      )
    }
  },
})
