<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<!--	<el-form :inline="true" :model="filters">
                    <el-form-item>
                        <el-input v-model="filters.name" placeholder="可输入gymId查询,方便调试"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click="getUser">查询</el-button>
                    </el-form-item>
                </el-form>-->
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="userName" label="用户名字" width="130" sortable>
				</el-table-column>
				<el-table-column prop="bluetoothName" label="蓝牙名字" width="150" sortable>
				</el-table-column>
				<el-table-column prop="aveSpeed" label="运动平均速度(km/h)" width="200" sortable>
				</el-table-column>
				<el-table-column prop="consumptionCalories" label="消耗热量(cal)" width="150" sortable>
				</el-table-column>
				<el-table-column prop="cyclingDistance" label="骑行距离(km)" width="150" sortable>
				</el-table-column>
				<el-table-column prop="maximumSpeed" label="最高速度(km/h)" width="180" sortable>
				</el-table-column>
				<el-table-column prop="aveHeartAte" label="平均心率" width="150" sortable>
				</el-table-column>
				<!--<el-table-column prop="createDate" label="创建时间" width="230" :formatter="formatDate"  sortable>
				</el-table-column>-->


				<!--<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>-->
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				],
                gymId: ''
			}
		},
		methods: {
			/*//性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },*/
            //日期显示转换
         /*   formatDate: function (row, column) {
                var date = new Date(row.createDate.time);
                return date.toLocaleString()
            },*/
			//获取用户列表
			getUser: function () {
				let para = {
					//gymId: this.filters.name//在输入框输入gymId，方便调试
                    gymId : this.gymId
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.dataList;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
            var vrgym = sessionStorage.getItem('vrgym');
            if (vrgym) {
                vrgym = JSON.parse(vrgym);
                this.gymId = vrgym.gymId || '';
            }
			this.getUser();
            setInterval(this.getUser, 2500);
		}
	};

</script>

<style scoped>

</style>