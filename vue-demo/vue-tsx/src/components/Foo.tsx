import { defineComponent, inject, PropType } from 'vue'

export default defineComponent({
  name: '',
  props: {
    list: {
      type: Array as PropType<any[]>,
      required: true,
    },
    onDeleteItem: {
      type: Function,
    },
  },
  emits: ['deleteItem'],
  setup(props, { emit }) {
    const flag = true
    const { list } = props
    const name = inject('name')
    const handleClick = inject('handleClick')
    console.log('name++++++', name)
    const getItem = (list: any[]) => {
      return (
        <ul>
          {list.map((item: any, index: number) => (
            <li key={index} onClick={() => emit('deleteItem', index)}>
              {item}
            </li>
          ))}
        </ul>
      )
    }
    return () => {
      return (
        <>
          {list.length > 0 ? getItem(list) : <div>暂无数据</div>}
          <br />
          <button onClick={handleClick}>212332</button>
        </>
      )
    }
  },
})
