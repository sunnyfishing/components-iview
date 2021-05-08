<!--
 * @Author: your name
 * @Date: 2021-04-22 09:46:10
 * @LastEditTime: 2021-04-22 14:58:15
 * @LastEditors: Please set LastEditors
 * @Description: 新增/编辑弹框
 * @FilePath: \common-components-iview\src\pages\NewEdit\AddModal.vue
-->
<template>
    <div> 
        <Modal v-model="isShowModal" :title="updateRow?'编辑':'新增'">
            <Form :model="formItem" :label-width="100" ref="formItem" class="addForm" :rules='sortRules' >
                <FormItem label="分类名称：" prop="name" class="require">
                    <i-input v-model="formItem.name" maxlength="6" show-word-limit placeholder="请输入名称" style="width: 280px"></i-input>
                </FormItem>
            </Form>
            <div slot="footer">
              <!-- 取消和提交调用同一个函数，通过入参区分 -->
              <Button @click="submit(false)">取消</Button>
              <Button @click="submit(true)" type="primary" :loading="btnLoading">提交</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
export default {
    props:{
      isShowModal:Boolean,	// 控制弹框显隐
      updateRow:Object, 	// 该条信息详情，并用来判断是编辑（row）还是新增（null）
      closeModal:Function,	// 关闭弹框要做的操作。新增/编辑的提交/取消
    },
    data() {
        return {
          btnLoading:false,
          formItem:this.updateRow?this.updateRow:{}
        }
    },
    methods:{
      submit(isSubmit){		
        // isSubmit：true——提交；false——取消
        if(isSubmit){
          // 提交——调新增或者编辑的接口进行保存
          this.$refs['formItem'].validate((valid) => {
            if(valid){
              this.btnLoading = true
              let addData={a:'1'}
              let editData={a:'2'}
              // 根据updateRow改变接口和传参
              let url = this.updateRow?'/.../edit':'/.../add'
              let sendDta=this.updateRow?editData:addData
                  try{
                    this.$ajaxPost(url,sendDta)
                      .then((res) => {
                      if (res && res.code === 10000) {
                        this.btnLoading = false
                          // 提交完成后
                        this.$emit('closeModal',false,true) 
                      }
                      })
                  }catch{
                    this.btnLoading = false
                    this.$emit('closeModal',false) 
                    console.log('error')
                  }
            }
          })
        }else{
          // 取消——调关闭弹框的函数
            this.$emit('closeModal',false) 
        }
      },
    },
}
</script>
<style lang="scss" scoped>
</style>