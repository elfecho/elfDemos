const Ajv = require('ajv').default
var localize = require('ajv-i18n');
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      test: false,
      errorMessage: {
        type: '必须是字符串',
        minLength: '长度不能小于10个字符',
        test: '自定义test错误'
      },
      // format: 'test',
      // minLength: 10,
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['name', 'age']
}

const ajv = new Ajv({ allErrors: true, jsonPointers: true }) // options can be passed, e.g. {allErrors: true}
require("ajv-formats")(ajv)

require("ajv-errors")(ajv)
// 自定义format
// ajv.addFormat('test', (data) => {
//   console.log(data, '--------------')
//   return data === 'haha'
// })
// 自定义关键字

ajv.addKeyword({
  keyword: 'test',
  macro() {
    return {
      minLength: 10
    }
  },
  // compile(sch, parentSchema) {
  //   console.log(sch, parentSchema)
  //   return () => true
  // },
  // schemaType: 'boolean',
  // validate: function fun(schema, data) {
  //   // console.log(schema, data) // schema：上面定义的schema关键字test的value值， data: validate下输入的value值
  //   fun.errors = [
  //     {
  //       keyword: 'test',
  //       dataPath: '/name',
  //       schemaPath: '#/properties/name/test',
  //       params: {},
  //       message: 'hello error message' // 自定义错误信息
  //     }
  //   ]
  //   return false
  //   // if (schema === true) return true
  //   // else return data.length === 6
  // }
})

// ajv.addKeyword({
//   keyword: "range",
//   type: "number",
//   schemaType: "array",
//   implements: "exclusiveRange",
//   compile: ([min, max], parentSchema) =>
//     parentSchema.exclusiveRange === true
//       ? (data) => data > min && data < max
//       : (data) => data >= min && data <= max,
// })


const validate = ajv.compile(schema)
const valid = validate({
  name: 'haha',
  age: 18,
  // pets: ['mini'],
  isWorker: true
})
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
