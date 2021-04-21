import { defineComponent } from 'vue'

import ASlotDemo from '@/components/slot/ASlotDemo'
import AEmitsDemo from '@/components/emits/AEmitsDemo'
import Tab from '@/components/Tab'

interface IFooterSlotData {
  text: string
}

export default defineComponent({
  name: '',
  setup() {
    const click = () => {
      console.log('click-----------')
    }
    const getData = () => {
      console.log('getData')
    }

    return () => (
      <>
        <Tab />
        <div>about</div>

        <AEmitsDemo onClick={click} onGetData={getData} />
        <ASlotDemo>我是: BSlotDemo</ASlotDemo>
        <br />

        <ASlotDemo
          v-slots={{
            default: () => <div>slots使用方式1</div>,
            header: () => <span>header1</span>,
          }}
        />
        <br />

        <ASlotDemo>
          {{
            default: () => <div>slots使用方式2</div>,
            header: () => <span>header2</span>,
          }}
        </ASlotDemo>
        <br />
        <ASlotDemo
          v-slots={{
            default: () => <div>范围插槽使用</div>,
            header: () => <span>范围插槽header</span>,
            footer: (value: IFooterSlotData) => (
              <span>获取范围插槽的值: {value.text}</span>
            ),
          }}
        />
      </>
    )
  },
})
