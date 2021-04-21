import { computed, defineComponent, provide, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Foo from '@/components/Foo'
import Tab from '@/components/Tab'

import { useStore } from 'vuex'

import styles from './style.module.scss'

export default defineComponent({
  name: '',
  setup() {
    const store = useStore()

    const state = reactive({
      inputValue: '',
      list: [1, 'tt'],
    })

    const handleClick = () => {
      store.commit('add')
    }
    const addItem = () => {
      if (!state.inputValue) return
      state.list.push(state.inputValue)
      state.inputValue = ''
    }
    const deleteItem = (index: number) => {
      console.log(index)
      state.list.splice(index, 1)
    }

    provide('name', 29)
    provide('handleClick', () => {
      console.log('父组件通过provide传递参数')
    })

    return () => {
      const count = store.state.count
      return (
        <>
          <Tab />
          <>
            home vuex count : {count}
            <button onClick={handleClick}>click</button>
          </>
          <label for="ab">请输入 </label>
          <input type="text" v-model={state.inputValue} />
          <button onClick={addItem}>添加</button>
          <Foo list={state.list} onDeleteItem={deleteItem} />
        </>
      )
    }
  },
})
