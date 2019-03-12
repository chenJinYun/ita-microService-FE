<template>
  <div>
    <el-button type="success" @click="requireData" class="btn">添加新文章</el-button>
    <div>
      <el-table :data="UserArticleData" stripe>
        <el-table-column prop="id" label="身份证" v-if="false"></el-table-column>
        <el-table-column prop="cardId" label="身份证"></el-table-column>
        <el-table-column prop="article" label="文章内容"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="文章信息" :visible.sync="dialogFormVisible" :center="true">
      <el-form :model="UserArticleForm">
        <el-form-item label="身份证" :label-width="formLabelWidth">
          <el-input v-model="UserArticleForm.cardId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-input v-model="UserArticleForm.article" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmupdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getUserArticleInfo, addUserArticleInfo, updateUserArticleInfo, deleteUserArticleInfo} from "@/api/api.js"

  export default {
    name: "UserArticle",
    data() {
      return {
        UserArticleData: [],
        UserArticleForm: {
          id: '',
          cardId: '',
          article: ''
        },
        dialogFormVisible: false,
        formLabelWidth: '100px',
        showId: false
      }
    },
    created: function () {
      this.findAllUserArticle()
    },
    methods: {
      findAllUserArticle() {
        getUserArticleInfo().then(resp => {
          this.UserArticleData = resp.data;
        })
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.showId = false;
        this.UserArticleForm = Object.assign({}, row, {index: index, type: 'update'});
      },
      handleDelete(index, row) {
        deleteUserArticleInfo(row.id).then(resp =>{
          this.findAllUserArticle()
        })
      },
      requireData() {
        this.dialogFormVisible = true;
        this.showId = true;
        this.UserArticleForm = {brand_right: 0}; //清空表单
        this.UserArticleForm.type = 'create';
      },
      confirmupdate() {
        let data = {
          id: this.UserArticleForm.id,
          cardId: this.UserArticleForm.cardId,
          article: this.UserArticleForm.article
        };
        if (this.UserArticleForm.type === 'update') {
          updateUserArticleInfo(data).then(resp => {
            if (resp.data != null) {
              this.dialogFormVisible = false;
              this.findAllUserArticle()
            }
          })
        } else {
          addUserArticleInfo(data).then(resp => {
            this.dialogFormVisible = false;
            this.showId = false;
            this.findAllUserArticle()
          })
        }
      }
    }
  }
</script>

<style scoped>
  .btn{
    margin:10px;
  }
</style>
