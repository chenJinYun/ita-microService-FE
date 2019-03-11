<template>
  <div>
    <el-button type="success" @click="requireData" class="btn">添加新用户</el-button>
    <div>
      <el-table :data="userInfoData" stripe style="width: 100%">
        <el-table-column prop="dateStr" label="创建日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="id" label="身份证"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="mail" label="邮箱"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="个人信息" :visible.sync="dialogFormVisible" :center="true">
      <el-form :model="userform">
        <el-form-item label="身份证" :label-width="formLabelWidth" v-if="showId">
          <el-input v-model="userform.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="userform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="userform.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio v-model="userform.sex" label="男">男</el-radio>
          <el-radio v-model="userform.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="userform.mail" autocomplete="off"></el-input>
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
  import {getUserInfo, addUserInfo, updateUserInfo, deleteUserInfo} from "@/api/api.js"

  export default {
    name: "UserInfo",
    data() {
      return {
        userInfoData: [],
        userform: {
          id: '',
          index: '',
          name: '',
          age: '',
          sex: '',
          mail: '',
          type: '',
        },
        dialogFormVisible: false,
        formLabelWidth: '100px',
        showId: false
      }
    },
    created: function () {
      getUserInfo().then(resp => {
        this.userInfoData = resp;
      })
    },
    methods: {
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.showId = false;
        this.userform = Object.assign({}, row, {index: index, type: 'update'});
      },
      handleDelete(index, row) {
        deleteUserInfo(row.id).then(resp => {
          this.userInfoData.splice(index, 1)
        })
      },
      requireData() {
        this.dialogFormVisible = true;
        this.showId = true;
        this.userform = {brand_right: 0}; //清空表单
        this.userform.type = 'create';
      },
      confirmupdate() {
        let data = {
          id: this.userform.id,
          name: this.userform.name,
          sex: this.userform.sex,
          age: this.userform.age,
          mail: this.userform.mail
        };
        if (this.userform.type === 'update') {
          updateUserInfo(data).then(resp => {
            if (resp != null) {
              this.dialogFormVisible = false;
              this.userInfoData.splice(this.userform.index, 1, resp)
            }
          })
        } else {
          addUserInfo(data).then(resp => {
            this.dialogFormVisible = false;
            this.showId = false;
            this.userInfoData.push(resp);
          })
        }
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin: 10px;
  }
</style>
