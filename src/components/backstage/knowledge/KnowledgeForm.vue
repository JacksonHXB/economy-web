<template>
    <Modal v-model="isShow" title="知识增加/修改" @on-ok="submit" loading="loading" @on-cancel="cancel" draggable="true">
        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
            <FormItem label="ID" prop="id" hidden>
                <Input v-model="form.id"></Input>
            </FormItem>
            <FormItem label="标题" prop="title">
                <Input v-model="form.title" placeholder="请输入标题" clearable></Input>
            </FormItem>
            <FormItem label="关键字" prop="keywords">
                <Input v-model="form.keywords" placeholder="输入关键字用空格隔开" clearable></Input>
            </FormItem>
            <FormItem label="内容" prop="content">
                <Input v-model="form.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                    placeholder="输入一些东西...."></Input>
            </FormItem>
            <FormItem label="创建时间">
                <Row>
                    <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="form.date"></DatePicker>
                    </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="form.time"></TimePicker>
                    </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="网址" prop="websites">
                <Select v-model="model12" filterable multiple>
                    <Option v-for="item in websites" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </FormItem>
        </Form>
    </Modal>
</template>
    <script>
        export default {
            props: ["isForm", "knowledge"],
            mounted() {
                this.isShow = this.isForm
            }, 
            data () {
                return {
                    modal1: false,
                    form: {
                        id: '',
                        title: '',
                        keywords: '',
                        content: '',
                        date: '',
                        time: '',
                        websites: [],
                    },
                    ruleValidate: {
                        title: [
                            { required: true, message: '标题不得为空', trigger: 'blur' }
                        ],
                        keywords: [
                            { required: true, message: '关键字不得为空', trigger: 'change' }
                        ],
                        content: [
                            { required: true, message: '请输入一些知识的内容', trigger: 'blur' },
                            { type: 'string', min: 5, message: '内容不得少于20个字', trigger: 'blur' }
                        ],
                        date: [
                            { required: true, type: 'date', message: 'Please select time', trigger: 'change' }
                        ],
                        time: [
                            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                        ],
                        websites: [
                            { message: '请输入网址', trigger: 'change' }
                        ],
                    },
                    isShow: false,          //该组件中实际控制的显示功能
                }
            },
            methods: {
                /*点击提交*/
                submit() {
                    this.isShow = false               //隐藏弹窗
                    this.$emit('submit', this.form)   //将数据传给父组件
                },
                /*点击取消*/
                cancel () {
                    this.isShow = false
                },
            },
            watch:{
                isShow(flag){
                    this.$emit('close', flag)
                },
                isForm(flag){
                    this.isShow = flag
                }
            }
        }
    </script>
    