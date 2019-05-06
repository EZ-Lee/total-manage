<template>
	<div class = "_content">
		
		<div id="add_btn">
			<a>站长设置</a>
			<el-button type="text" @click="dialogFormVisible = true">添加站长</el-button>
			
			<!-- <el-dialog 
			title="添加站长" 
			:visible.sync="dialogFormVisible"
			:before-close="handleClose">
				<el-form :model="form">
					<el-form-item label="ip">
						<el-input v-model="form.ip" auto-complete="off" placeholder="127.0.0.1"></el-input>
					</el-form-item>
					<el-form-item label="域名">
						<el-input v-model="form.realm" auto-complete="off" placeholder="996ICU.com"></el-input>
					</el-form-item>
					<el-form-item label="类型">
						<el-select v-model="form.type" placeholder="选择域名类型">
							<el-option label="一级" value="0"></el-option>
							<el-option label="二级" value="1"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取消</el-button>
					<el-button type="primary" @click="dialogFormCommit" >添加</el-button>
				</span>
			</el-dialog> -->

			<!-- <el-button @click = addDomain()>添加域名</el-button> -->
		</div>
		<div class = "_head">
			<h5>站长列表</h5>
		</div>
	  <div id="stationn_list">
			<el-table
			:data="tableData"
			border
			style="width: 100%">
			<el-table-column
				fixed
				prop="id"
				label="ID"
				width="100">
			</el-table-column>
			<el-table-column
				fixed
				prop="name"
				label="姓名"
				width="300">
			</el-table-column>
			<el-table-column
				fixed
				prop="userName"
				label="用户名"
				width="300">
			</el-table-column>
			<el-table-column
				fixed
				prop="name"
				label="姓名"
				width="300">
			</el-table-column>
			<el-table-column
				fixed
				prop="address"
				label="地址"
				width="300">
			</el-table-column>
			<el-table-column
				fixed
				prop="company"
				label="公司"
				width="300">
			</el-table-column>
			<el-table-column
				fixed
				prop="mobile"
				label="电话"
				width="300">
			</el-table-column>
			<el-table-column
				prop="password"
				label="密码"
				width="300">
			</el-table-column>
			<el-table-column
				prop="email"
				label="邮箱"
				width="80">
			</el-table-column>
			<!-- <el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
				<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column> -->
	  </el-table>
	  </div>
	</div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
			handleClose(done) {
        this.$confirm('是否关闭此窗口?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
// 			dialogFormCommit() {
// 				// this.$message.error('1111111111111ip')
// 			  if (!this.form.ip) {
// 			    this.$message.error('请输入ip')
// 			    return ''
// 			  }
// 			  if (!this.form.realm) {
// 			    this.$message.error('请输入域名')
// 			    return ''
// 			  }
// 				if (!this.form.type) {
// 				  this.$message.error('请选择类型')
// 				  return ''
// 				}
// 			  let ip = this.form.ip
// 			  let realm = this.form.realm
// 				let type = this.form.type
// 			  let thiz = this
// 			  this.axios.post('/console/api/realm_name', {ip, realm, type})
// 			    .then(result => {
// 			      // sessionStorage.setItem('token', result.data.token)
// 						// thiz.$message
// 			    }).catch(reason => {
// 			    })
// 			}
    },

    data() {
      return {
        tableData:[{
					"email": "",
					"address":"",
					"company":"",
					"mobile":"",
					"id": "",
					"name": "",
					"userName":"",
					"password": ""
				}],
				dialogFormVisible: false
      }
    },
	mounted() {
      this.axios
        .get('/user/api/station_head')
        .then(response => {
			this.id = response.data.id,
			this.name = response.data.name,
			this.password = response.data.password,
			this.email = response.data.email,
			this.address = response.data.address,
			this.company = response.data.company,
			this.mobile = response.data.mobile,
			this.userName = response.data.userName
		})
	}
  }
</script>
<style>
	._content{
		width: 100%;
	}
	#add_btn{
		background-color: white;
		text-align: left;
	}
	._head{
		text-align: left;
	}
	.el-form-item{
		margin : 10px 10px 10px 10px;
	}
</style>