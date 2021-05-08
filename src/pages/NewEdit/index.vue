<!--
 * @Author: your name
 * @Date: 2021-04-22 09:46:01
 * @LastEditTime: 2021-04-22 14:38:58
 * @LastEditors: Please set LastEditors
 * @Description: 弹框形式的增删改查
 * @FilePath: \common-components-iview\src\pages\NewEdit\index.vue
-->
<template>
    <div class="groupList-page">
      <Button type="primary" @click="addEditSort(true)">新建分类</Button>

      <Table :columns="columns" :data="pageData">
        <template slot='opera' slot-scope="{row}">
          <a @click="addEditSort(true,false,row)" >编辑</a>
          <a @click="deleteSort(row)" >删除</a>
        </template>
      </Table>
      <BasePage
          :pageData="pageInfo"
          @on-pageChange="pageChange(arguments[0],'page')"
          @on-pageSize="pageChange(arguments[0],'size')"
      ></BasePage>
      <AddModal :isShowModal = 'isShowModal' :updateRow = 'updateRow' @closeModal='addEditSort'></AddModal>
    </div>
</template>
<script>
import AddModal from './AddModal';
import {columns} from './static.js'
  
export default {
    name:'',
    components:{
        AddModal
    },
    data(){
        return {
          isShowModal:false,
          updateRow:{},
          columns:columns,
          search:{},
          pageData:[],
          pageInfo:{
            page:1,
            size:10,
            count:0
          },
        }
    },
    created(){
        this.getTableData()
    },
    methods:{
        // 新增-编辑
        addEditSort(isShowModal,isSubmit=false,row=null){
          // isShowModal——是否展示新增/编辑弹框
          // isSubmit——是否是弹框的提交操作
          // row——要编辑的这一行的数据
          this.isShowModal = isShowModal
          this.updateRow = row
            
          if(isSubmit){
            this.getTableData();
          }
        },
        //获取表格数据
        getTableData(){
            this.$ajaxGet('/.../list',{...this.search,...this.pageInfo})
              .then((res)=>{
                if(res.code === 10000 && res.data){
                  const {count,list} = res.data
                  this.pageInfo.count = count
                  this.pageData = list
                }
              })
        },
        // 更改pageinfo
        pageChange(value,type){
          this.pageInfo[type] = value
          this.getTableData()
        },
        // 删除
        deleteSort(row){
          this.$ajaxGet('/.../delete',{id:row.id})
            .then(res=>{
              if(res.code === 10000 ){
                this.$Message.success('删除成功')
                this.getTableData()
              }
            })
        }
    }
}
</script>
<style lang="less" scoped>
</style>