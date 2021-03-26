import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  name: 'ASlot',
  setup(props, { slots }) {
    const { default: defaultSlot, header, footer } = slots
    // console.log('slots', defaultSlot, header, footer)
    const footerData = {
      text: '2021-03-26',
    }
    return () => {
      return (
        <>
          <div>
            {header ? renderSlot(slots, 'header') : '-------默认 header------'}
          </div>
          <div>
            {defaultSlot ? renderSlot(slots, 'default') : '没有传递默认的slot'}
          </div>
          <div>
            {footer ? renderSlot(slots, 'footer', footerData) : '默认 footer'}
          </div>
        </>
      )
    }
  },
})
