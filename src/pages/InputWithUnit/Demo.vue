<!--
 * @Author: your name
 * @Date: 2021-04-19 17:11:11
 * @LastEditTime: 2021-04-19 17:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \common-components-iview\src\pages\InputWithUnit\Demo.vue
-->
<template>
  <div>
    123
    <!-- <Form ref="demo" :model="demoData" :rules="demoValidate" :label-width="130">
      <FormItem label="获取规则：" prop="getRule">
          <div v-for="(item,index) in memberShoppingDiscountList" :key="index" class='reduce-list'>
            <span style="margin:0 5px">消费</span>
            <FormItem prop="shoppingAmount" :rules="[{required:true,validator:(rule,value,callback)=>{checkShoppingAmount(index, callback)},trigger:'blur'}]">
                <InputWithUnitNoFixed
                    :isUnitAfter="true"
                    unitAfterText='元'
                    :minVlue="0.1"
                    :maxValue="999999"
                    placeholder='请输入金额'
                    :introductionInputValue="item.shoppingAmount"
                    :toFixedNum="1"
                    @changeInputValue="changeInputValue(arguments[0],index,'shoppingAmount')"
                    @blurInputNumber="blurInputNumber(arguments[0],index,'shoppingAmount')"
                />
            </FormItem>
      </FormItem>
    </Form> -->
  </div>
</template>
<script>
export default {
  name:'InputWithUnitDemo',
  components:{

  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>
