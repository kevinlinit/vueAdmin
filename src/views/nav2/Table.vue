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
			<el-table :data="citys" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="cityName" label="城市名字" width="130" sortable>
				</el-table-column>
				<el-table-column prop="cityCount" label="使用蓝牙次数" width="150" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
    import { getBlueNums } from '../../api/api';
    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                loading: false,
                citys: [
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
            //获取城市列表
            getCity: function () {
                let para = {
                    //gymId: this.filters.name//在输入框输入gymId，方便调试
                    gymId : this.gymId
                };
                this.loading = true;
                getBlueNums(para).then((res) => {
                    this.citys = res.data.msg;
                    this.loading = false;

                });
            }
        },
        mounted() {
            var vrgym = sessionStorage.getItem('vrgym');
            if (vrgym) {
                vrgym = JSON.parse(vrgym);
                this.gymId = vrgym.gymId || '';
            }
            this.getCity();
        }
    };

</script>

<style scoped>

</style>