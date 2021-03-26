import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: '',
  setup() {
    return () => (
      <div>
        <RouterView />
      </div>
    )
  },
})
