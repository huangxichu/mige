<template>
  <el-dialog
    title="编辑挂号排班"
    center
    fullscreen
    :close-on-press-escape="flag"
    :show-close="flag"
    :visible.sync="dialogVisible">
    <el-container>
      <el-main>
        <el-form ref="schedue" :rules="rules" :model="schedue" label-width="80px" style="width: 540px;">
          <el-form-item label="排班名称" prop="name">
            <el-input style="width: 460px;"
              v-model="schedue.name"
              placeholder="请输入排班名称"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="医院" prop="organCode">
            <el-select style="width: 460px;"
                       v-model="schedue.organCode"
                       filterable
                       remote
                       reserve-keyword
                       visible-change="false"
                       placeholder="请输入关键词"
                       :remote-method="remoteSearchOrgans"
                       @change="onChangeOrgan"
                       :loading="loading">
              <el-option
                v-for="item in organs"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="科室">
            <el-select v-model="schedue.officeCode"
                       @change="onChangeOffice"
                       visible-change="false"
                       filterable placeholder="请选择科室"
                       style="width: 460px;">
              <el-option
                v-for="item in offices"
                :key="item.code"
                :label="item.officeName"
                :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专家">
            <el-select v-model="schedue.doctorCode"
                       @change="onChangeDoctor"
                       visible-change="false"
                       filterable placeholder="请选择专家"
                       style="width: 460px;">
              <el-option
                v-for="item in doctors"
                :key="item.code"
                :label="item.name"
                :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="值班日期" prop="onDutyDateStr">
            <el-date-picker
              v-model="schedue.onDutyDateStr"
              value-format="yyyy-MM-dd"
              align="right"
              type="date"
              style="width: 460px;"
              placeholder="选择值班日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="值班时间" required>
            <el-col :span="11">
              <el-form-item prop="startTimeStr">
                <el-time-select
                  placeholder="起始时间"
                  v-model="schedue.startTimeStr"
                  value-format="HH:mm:ss"
                  :picker-options="{
                start: '08:00',
                step: '00:05',
                end: '18:30'
              }">
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="endTimeStr">
                <el-time-select
                  placeholder="结束时间"
                  v-model="schedue.endTimeStr"
                  value-format="HH:mm:ss"
                  :picker-options="{
                start: '08:00',
                step: '00:05',
                end: '18:30',
                minTime: schedue.startTimeStr
              }">
                </el-time-select>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="号源数量" prop="registrNum">
            <el-input-number v-model="schedue.registrNum"
                             placeholder="请输入号源数量"
                             controls-position="right" :min="0" style="width: 460px;"></el-input-number>
          </el-form-item>
          <el-form-item label="序号">
            <el-input style="width: 460px;"
                      v-model="schedue.seq"
                      placeholder="请输入排班序号"
                      clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              type="textarea"
              :rows="6" style="width: 460px;"
              placeholder="请输入内容"
              v-model="schedue.remark">
            </el-input>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-button type="success" @click="onSubmit('schedue')">提交</el-button>
        <el-button type="danger" @click="onClickReset()">重置</el-button>
        <el-button type="info" @click="gotoBack()">返回</el-button>
      </el-footer>
    </el-container>
  </el-dialog>
</template>

<script>
  import {saveSchedue, getSchedueInfo, searchOrgans, findOffices, findDoctors} from '../api'
  import moment from 'moment'

  export default {
    name: 'schedue-edit',
    props: ['dialogVisible'],
    data() {
      return {
        flag: false,
        organs: [],
        offices: [],
        doctors: [],
        loading: false,
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() <= Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        schedue: {
          code: '',
          name: '',
          seq: '',
          startTimeStr: '',
          endTimeStr: '',
          registrNum: '0',
          remark: '',
          organCode: '',
          officeCode: '',
          doctorCode: '',
          onDutyDateStr: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        },
        rSchedue: {
          code: '',
          name: '',
          seq: '',
          startTimeStr: '',
          endTimeStr: '',
          registrNum: '0',
          remark: '',
          organCode: '',
          officeCode: '',
          doctorCode: '',
          onDutyDateStr: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        },
        rules: {
          organCode: [
            {required: true, message: '请选择医院', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入排班名称', trigger: 'blur'}
          ],
          onDutyDateStr: [
            {required: true, message: '请选择值班日期', trigger: 'blur'}
          ],
          startTimeStr: [
            {required: true, message: '请选择开始时间', trigger: 'blur'}
          ],
          endTimeStr: [
            {required: true, message: '请选择结束时间', trigger: 'blur'}
          ],
          registrNum: [
            {required: true, message: '请输入号源数量', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        var page = this;
        this.$refs[formName].validate((valid) => {
          page.schedue.startTimeStr += ':00';
          page.schedue.endTimeStr += ':00';
          saveSchedue(page.schedue).then(res => {
            if (res.data.success) {
              page.$message.success(res.data.message)
              //page.$router.push('/sys/schedue')
              page.$emit("changeDialog", {dialogVisible:false,flag:true});
            } else {
              page.$message.error(res.data.message)
            }
          }).catch(err => {
//            console.info(err);
            page.$message.error(err)
          });
        });
      },
      onClickReset() {
        var page = this;
        page.$confirm('是否确认重置编辑内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          page.schedue = page.rSchedue;
          page.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          page.$message({
            type: 'info',
            message: '已取消重置'
          });
        });

      },
      gotoBack() {
        //this.$router.push('/sys/schedue')
        this.$emit("changeDialog", {dialogVisible:false,flag:false});
      },
      onChangeOrgan(value){
        var page = this;
        if (value != '' && value != null && value != undefined) {
          var organs = page.organs;
          for (var i in organs) {
            if (organs[i].code == page.schedue.organCode) {
              page.schedue.organName = organs[i].name;
              break;
            }
          }
          page.remoteFindOffices(value);
        } else {
          page.schedue.organName = '';
          page.schedue.officeCode = '';
          page.schedue.officeName = '';
          page.schedue.doctorCode = '';
          page.schedue.doctorName = '';
          page.offices = [];
          page.doctors = [];
        }
      },
      onChangeOffice(value) {
        var page = this;
        if (value != '' && value != null && value != undefined) {
          var offices = page.offices;
          for (var i in offices) {
            if (offices[i].code == page.schedue.officeCode) {
              page.schedue.officeName = offices[i].officeName;
              break;
            }
          }
          page.remoteFindDoctors(value);
        } else {
          page.schedue.officeName = '';
          page.schedue.doctorCode = '';
          page.schedue.doctorName = '';
          page.doctors = [];
        }
      },
      onChangeDoctor(value) {
        var page = this;
        if (value != '' && value != null && value != undefined) {
          var doctors = page.doctors;
          for (var i in doctors) {
            if (doctors[i].code == page.schedue.doctorCode) {
              page.schedue.doctorName = doctors[i].name;
              break;
            }
          }
        } else {
          page.schedue.doctorName = ''
        }
      },
      remoteSearchOrgans(value) {
        var page = this;
        if (value != null && value != '' && value != undefined) {
          searchOrgans({organName: value}).then(res => {
//            console.info(res);
            if (res.status === 200) {
              page.organs = res.data
            }
          }).catch(err => {

          });
        }
      },
      remoteFindOffices(organCode) {
        var page = this;
        findOffices({organCode: organCode}).then(res => {
          if (res.status === 200) {
            page.offices = res.data
          }
        }).catch(err => {
        })
      },
      remoteFindDoctors(officeCode) {
        var page = this;
        findDoctors({organCode: page.schedue.organCode, officeCode: officeCode}).then(res => {
          if (res.status === 200) {
            page.doctors = res.data
//            console.info(page.doctors)
          }
        }).catch(err => {
          console.info(err);
        })
      },
      getSchedue(code){
        var page = this;
        page.initData()
        if (code != '' && code != undefined) {
          getSchedueInfo({code: code}).then(res => {
            console.info(res)
            if (res.status == '200') {
              page.onChangeOrgan(res.data.organCode)
              page.onChangeOffice(res.data.officeCode)
              var schedue = {
                code: res.data.code,
                name: res.data.name,
                seq: res.data.seq,
                startTimeStr: moment(new Date(res.data.startTime)).format("HH:mm"),
                endTimeStr: moment(new Date(res.data.endTime)).format("HH:mm"),
                registrNum: res.data.registrNum,
                remark: res.data.remark,
                organCode: res.data.organCode,
                officeCode: res.data.officeCode,
                doctorCode: res.data.doctorCode,
                onDutyDateStr: res.data.onDutyDateStr,
                companyCode: res.data.companyCode,
                companyName: res.data.companyName
              }
              var organs = [{code: res.data.organCode, name: res.data.organName}]
              page.organs = organs
              page.schedue = schedue
              page.rSchedue = schedue
            } else {
              var msg = "请求数据失败";
              page.$notify.warning({
                title: msg
              })
            }
          }).catch(err => {

          });
        }
      },
      initData(){
        this.schedue = {
          code: '',
          name: '',
          seq: '',
          startTimeStr: '',
          endTimeStr: '',
          registrNum: '0',
          remark: '',
          organCode: '',
          officeCode: '',
          doctorCode: '',
          onDutyDateStr: '',
          companyCode: '0008',
          companyName: '长沙晚报'
        }
        this.rSchedue = this.schedue
        this.organs = []
        this.offices = []
        this.doctors = []
        this.flag = false
      }
    },
    mounted() {


    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
