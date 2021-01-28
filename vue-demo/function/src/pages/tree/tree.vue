<template>
  <div> 
    <el-tree
      :data="result_arr"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps">
      <span class="custom-tree-node" slot-scope="{node, data}">
        <span>{{node.label}}</span>
        <span>{{data}}</span>
        <span>
          <el-select v-model="data.type" placeholder="请选择" size="mini" style="margin-left: 20px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>

      </span>
    </el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>
  
</template>


<script>

  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      
      observer(target, children) {
        console.log('target::::::', target)
        if (typeof target !== 'object' || target === null) {
          // 不是对象或数组
          return target
        }
        for (let key in target) {
          this.getJson(target, key, target[key], children)
        }
      },
      
      addValue(resultArr, key, value) {
        const types = ['string', 'number', 'boolean']
        types.forEach(type => {
          if (typeof value === type) {
            this._add(resultArr, key, value, type)
          }
        })
      },
      _add(resultArr, key, value, type) {
        resultArr.push({
          id: this.resultid,
          label: key,
          key: key,
          type: type,
          value: value,
          children: []
        })
        this.resultid += 1
      },
      getJson(target, key, value, children) {
        const selfChildren = children ? children : this.result_arr
        if (value instanceof Array) {
          this._add(selfChildren, key, value, 'array')
          const len = selfChildren.length - 1
          for(let childKey in value) {
            if (typeof value[childKey] !== 'object' || value[childKey] === null) {
              this.addValue(selfChildren[len].children, childKey, value[childKey])
            } else {
              // 为数组对象时只取第一次匹配的
              this.observer(value[childKey], selfChildren[len].children)
              break;
            }
          }
          return
        } else if (value instanceof Object) {
          this._add(selfChildren, key, value, 'object')
          const len = selfChildren.length - 1
          for(let childKey in value) {
            if (typeof value[childKey] !== 'object' || value[childKey] === null) {
              this.addValue(selfChildren[len].children, childKey, value[childKey])
            } else {
              this.observer(value, selfChildren[len].children)
            }
          }
          return
        } else if (!children) {
          this.addValue(selfChildren, key, value)
          this.observer(value)
        }
        if (children) {
          this.addValue(children, key, value)
        }
      }
    },
    created() {
      this.result_arr = []
      this.observer(this.resultss)
      console.log('result_arr: ', this.result_arr, JSON.stringify(this.result_arr))
    },


    data() {
      return {
        resultid: 0,
        result_arr: '', // 最终返回结果
        options: [
          { label: 'string', value: 'string' },
          { label: 'number', value: 'number' },
          { label: 'array', value: 'array' },
          { label: 'object', value: 'object' },
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        resultss: {
    "data": [
        {
            "image": "http://gank.io/images/cfb4028bfead41e8b6e34057364969d1",
            "title": "干货集中营新版更新",
            "url": "https://gank.io/migrate_progress"
        },
        {
            "image": "http://gank.io/images/aebca647b3054757afd0e54d83e0628e",
            "title": "- 春水初生，春林初盛，春风十里，不如你。",
            "url": "https://gank.io/post/5e51497b6e7524f833c3f7a8"
        },
        {
            "image": "https://pic.downk.cc/item/5e7b64fd504f4bcb040fae8f.jpg",
            "title": "盘点国内那些免费好用的图床",
            "url": "https://gank.io/post/5e7b5a8b6d2e518fdeab27aa"
        }
    ],
    "status": 100
},
        result: {
          "errcode":200,
          "errMsg":"Success",
          "status":200,
          "data": [
            {
              id: 0,
              name: 'haha',
              addd: {
                a: {
                  b: {
                    c: {
                      d: 888
                    }
                  }
                }
              },
              arr: [
                {
                  arr: [558, 8899]
                }
              ]
            },
            {
              id: 1,
              name: 'hehe'
            }
          ]
        }
      };
    }
  };
</script>

<style scope>
  .el-tree-node__content {
    height: 38px;
  }
</style>
