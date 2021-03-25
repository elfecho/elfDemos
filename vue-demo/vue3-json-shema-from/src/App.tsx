import { defineComponent, Ref, ref } from 'vue'

import MonacoEditor from './components/MonacoEditor'

import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  codePanel: {
    minHeight: 400,
    marginBottom: 20,
  },
})

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        schemaRef.value = schema
      }
    }

    const classesRef = useStyles()

    const classes = classesRef.value

    return () => {
      const code = toJson(schemaRef.value)
      return (
        <div id="app">
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classes.codePanel}
          />
        </div>
      )
    }
  },
})
