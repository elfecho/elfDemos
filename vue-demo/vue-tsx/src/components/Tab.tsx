import { defineComponent } from 'vue'

import styles from './tab.module.scss'

export default defineComponent({
  name: '',
  setup() {
    return () => {
      return (
        <div class={styles.nav}>
          <routerLink to="/"> Home</routerLink>
          <routerLink to="/about">About </routerLink>
          <routerLink to="/hook">Hook </routerLink>
        </div>
      )
    }
  },
})
