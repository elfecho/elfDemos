import { defineComponent, useState } from 'vue'
import Tab from '@/components/Tab'

export default defineComponent({
  name: '',
  setup() {
    const [state, setstate] = useState(0)
    return () => {
      return (
        <>
          <Tab />
        </>
      )
    }
  },
})
