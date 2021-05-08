<!--
 * @Author: your name
 * @Date: 2021-04-19 17:11:04
 * @LastEditTime: 2021-04-19 17:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \common-components-iview\src\pages\InputWithUnit\index.vue
-->
<template>
  <div class="inpuWithUnit">
    <p v-if="unitBeforeText" class="inpuWithUnit__beforeUnit">{{unitBeforeText}}</p>
    <InputNumber 
      ref="inputNumber"
      :class="[{'inpuWithUnit__beforeInput': !!unitAfterText}, {'inpuWithUnit__afterInput': !!unitBeforeText}]" 
      :max="maxValue" 
      :placeholder="placeholder" 
      :value="introductionInputValue"
      :disabled="isDisabled"
      @on-change="change"
      @on-blur="blur"
      :parser="value => value"
    ></InputNumber>
    <p v-if="unitAfterText" class="inpuWithUnit__afterUnit">{{unitAfterText}}</p>
  </div>
</template>

<script>
export default {
  props: { 
    unitBeforeText: { // 前面单位
      type: String,
      default: '',
    },
    unitAfterText: { // 后面单位
      type: String,
      default: '',
    },
    minVlue: { // 最小值
      type: Number,
      default: 0
    },
    maxValue: { // 最大值
      type: Number,
      default: Infinity
    },
    placeholder: { // 默认提示
      type: String,
      default: '0'
    },
    introductionInputValue: { // 传入的值
      type: [Number, null],
    },
    isDisabled: { // 禁用
      type: Boolean,
      default: false
    },
    changeInputValue: { // 改变值方法
      type: Function,
      default: () => {}
    },
    toFixedNum: { // 数字小数保留位数
      type: [Number, String],
      default: 0
    }
  },
  data(){
    return {
      value:null
    }
  },
  methods: {
    change(value) {
      this.value = Number(value)
      this.$emit('changeInputValue', value);
    },
    blur(){
      let newValue =null
      if(this.value !== null) {
        newValue = Number((this.value).toFixed(this.toFixedNum));
      }
      if(this.value <this.minVlue){
        this.value = newValue=this.minVlue
      }
      this.$emit('blurInputNumber',newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
  .inpuWithUnit {
    width: 160px;
    height: auto;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  .inpuWithUnit__beforeInput {
    flex: 1 1 auto;
    border-radius: 8px 0 0 8px;
  }
  .inpuWithUnit__afterUnit {
    width: 46px;
    height: 32px;
    background: rgba(250,250,251,1);
    border-radius: 0px 8px 8px 0px;
    border: 1px solid rgba(226,226,234,1);
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #696974;
    font-weight: 300;
  }
  .inpuWithUnit__afterInput {
    flex: 1 1 auto;
    border-radius: 0px 8px 8px 0px;
  }
  .inpuWithUnit__beforeUnit {
    width: 46px;
    height: 32px;
    background: rgba(250,250,251,1);
    border-radius: 8px 0 0 8px;
    border: 1px solid rgba(226,226,234,1);
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #696974;
    font-weight: 300;
  }
</style>

<style lang="scss">
  .inpuWithUnit {

    .ivu-icon-ios-arrow-down::before {
      font-family: unset!important;
      content: "\F116";
      font-size: unset;
    }
  }
</style>