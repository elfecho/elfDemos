<template>
  <div class="container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>正则断言生成器</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <p>请输入JSON字符串:</p>
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 20 }"
        v-model="jsonStr"
      ></el-input>
      <div class="btns">
        <el-button type="primary" @click="generator">确认</el-button>
        <el-button @click="cancel">重置</el-button>
      </div>
    </el-card>

    <!--    对话框-->
    <el-dialog
      title="请选择需要生成正则表达式的字段"
      :visible.sync="dialogVisible"
      :closeOnClickModal="closeOnClickModal"
      width="80%"
      class="dialog"
    >
      <div>
        <el-tree
          :data="jsonData"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps"
          :default-checked-keys="currentNodeKeys"
          class="tree"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <!-- <span>{{ data }}</span> -->
            <span>
              <el-select
                v-model="data.type"
                placeholder="请选择"
                size="mini"
                style="margin-left: 20px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </span>
          </span>
        </el-tree>
        <div class="result">
          <p>正则表达式为：</p> 
          <div class="result_box">
            {{ resultStr }}
          </div>
        </div>
        
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="getCheckedNodes">生成</el-button>
        <el-button type="primary" @click="handleCopy">复制</el-button>
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Regular_Expression",
  data() {
    return {
      resultStr: "",
      jsonStr: '',
      dialogVisible: false,
      closeOnClickModal: false,
      currentNodeKeys: [],

      resultid: 0,
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
      jsonData: [],  // 最终返回结果
    };
  },
  methods: {
    isJSON(str) {
      if (typeof str == "string") {
        try {
          var obj = JSON.parse(str);
          if (typeof obj == "object" && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          console.log("error：" + str + "!!!" + e);
          return false;
        }
      }
      console.log("It is not a string!");
    },

    generator() {
      if (!this.jsonStr.trim()) {
        this.$message.error("请输入json字符串");
        return;
      }
      if (this.isJSON(this.jsonStr)) {
        this.$message.success("解析成功");
        // 初始化数据
        this.jsonData = []
        this.resultStr = ''
        this.currentNodeKeys =  new Array(10000).toString().split(',').map((item,index) => index);
        this.observer(JSON.parse(this.jsonStr))
        this.dialogVisible = true;
      } else {
        this.$message.error("json字符串格式有误");
      }
    },
    cancel() {
      this.jsonStr = ''
    },
    //解析json返回遍历对象
    decodeJson() {},
    //监控选择变化
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
      const nodeList = this.$refs.tree.getCheckedNodes();
      this.resultStr = "";

      for (const index in nodeList) {
        if (nodeList[index].type == "number") {
          this.resultStr += '(?=.*"' + nodeList[index].key + '":[0-9]*)';
        } else if (nodeList[index].type == "string") {
          this.resultStr += '(?=.*"' + nodeList[index].key + '":".*?|null")';
        } else if (nodeList[index].type == "array") {
          this.resultStr += '(?=.*"' + nodeList[index].key + '":")';
        } else if (nodeList[index].type == "object") {
          this.resultStr += '(?=.*"' + nodeList[index].key + '":")';
        } else {
          this.resultStr += '(?=.*"' + nodeList[index].key + '":")';
        }
      }

      console.log("------getCheckedNodes------");
      console.log(this.resultStr);
    },

    copy(data) {
      let url = data
      let oInput = document.createElement('input')
      oInput.value = url
      document.body.appendChild(oInput)
      oInput.select() // 选择对象
      document.execCommand("Copy") // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()
    },

    handleCopy() {
      this.dialogVisible = false
      this.copy(this.resultStr)
    },

    // 遍历json对象
    observer(target, children) {
      if (typeof target !== "object" || target === null) {
        // 不是对象或数组
        return target;
      }
      for (let key in target) {
        this.getJson(target, key, target[key], children);
      }
    },

    addValue(resultArr, key, value) {
      const types = ["string", "number", "boolean"];
      types.forEach((type) => {
        if (typeof value === type) {
          this._add(resultArr, key, value, type);
        }
      });
    },
    // 添加列项
    _add(resultArr, key, value, type) {
      resultArr.push({
        id: this.resultid,
        label: key,
        key: key,
        type: type,
        value: value,
        children: [],
      });
      this.resultid += 1;
    },
    // 设置json
    getJson(target, key, value, children) {
      const selfChildren = children ? children : this.jsonData;
      if (value instanceof Array) {
        this._add(selfChildren, key, value, "array");
        const len = selfChildren.length - 1;
        for (let childKey in value) {
          if (typeof value[childKey] !== "object" || value[childKey] === null) {
            this.addValue(
              selfChildren[len].children,
              childKey,
              value[childKey]
            );
          } else {
            // 为数组对象时只取第一次匹配的
            this.observer(value[childKey], selfChildren[len].children);
            break;
          }
        }
        return;
      } else if (value instanceof Object) {
        this._add(selfChildren, key, value, "object");
        const len = selfChildren.length - 1;
        for (let childKey in value) {
          if (typeof value[childKey] !== "object" || value[childKey] === null) {
            this.addValue(
              selfChildren[len].children,
              childKey,
              value[childKey]
            );
          } else {
            this.observer(value, selfChildren[len].children);
          }
        }
        return;
      } else if (!children) {
        this.addValue(selfChildren, key, value);
        this.observer(value);
      }
      if (children) {
        this.addValue(children, key, value);
      }
    },
  },
};
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}
.btns {
  margin-top: 20px;
}
/deep/ .el-dialog {
  margin-top: 30px!important;
}
.tree {
  height: 300px;
  overflow-y: auto;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding-right: 8px;
  height: 40px;
}
.result {
  margin-top: 10px;
}
.result_box {
  margin-top: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 10px 20px;
  max-height: 100px;
  overflow-y: auto;
  box-sizing: border-box;
}
/deep/ .el-tree-node__content {
  height: 32px!important;
}
</style>
