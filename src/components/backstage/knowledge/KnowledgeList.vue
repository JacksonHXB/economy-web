<template>
    <div>
        <Row>
        <Col span="8">
            <Input search enter-button placeholder="模糊查询" @on-search="search" v-model="keyword" />
            <button type="button" class="btn btn-primary" @click="modal1 = true">增加</button>
        </Col>
        </Row>
        <Row>
        <Col span="24">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>标题</th>
                        <th>内容</th>
                        <th>关键字</th>
                        <th>时间</th>
                        <th>网址</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="knowledge in knowledgeList" :key="knowledge.id">
                        <td>{{knowledge.title}}</td>
                        <td>{{knowledge.content}}</td>
                        <td>{{knowledge.keyword}}</td>
                        <td>{{knowledge.time}}</td>
                        <td>{{knowledge.websites}}</td>
                        <td>
                            <Button size="small" type="primary" @click="modal1 = true">修改</Button>
                            <Button size="small" type="warning" @click="modal2 = true">删除</Button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </Col>
        </Row>
        <Row type="flex" justify="end">
            <Col>
                <Page :total="100" show-elevator />
            </Col>
        </Row>
        <Modal v-model="modal2" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>删除提示语</span>
            </p>
            <div style="text-align:center">
                <p>这条信息将会从知识库中删除</p>
                <p>确认删除它吗？</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
            </div>
        </Modal>
        <Modal v-model="modal1" title="知识增加/修改" @on-ok="ok" loading="loading" @on-cancel="cancel" draggable="true">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="标题" prop="title">
                    <Input v-model="formValidate.title" placeholder="请输入标题" clearable></Input>
                </FormItem>
                <FormItem label="关键字" prop="keywords">
                    <Input v-model="formValidate.keywords" placeholder="输入关键字用空格隔开" clearable></Input>
                </FormItem>
                <FormItem label="内容" prop="content">
                    <Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                        placeholder="输入一些东西...."></Input>
                </FormItem>
                <FormItem label="创建时间">
                    <Row>
                        <Col span="11">
                        <FormItem prop="date">
                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                        </FormItem>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                        <FormItem prop="time">
                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
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
    </div>
</template>


<script>

    export default {
        created() {
            // this.getKnowList()
        },
        data() {
            return {
                keyword: "",        //关键字
                knowledgeList: [
                    { id: 1, title: "黄金", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 2, title: "原油", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 3, title: "黄金", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 4, title: "黄金", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 5, title: "黄金", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                    { id: 6, title: "黄金", content: "这是黄金内容", keyword: "黄金", time: "2019-10-12 14:22", websites: "无" },
                ],
                modal2: false,
                modal_loading: false,
                modal1: false,
                formValidate: {
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
                        { type: 'string', min: 20, message: '内容不得少于20个字', trigger: 'blur' }
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
                }
            }
        },
        methods: {
            //获取知识库列表
            getKnowList() {
                this.$http.get('knowledge/search/0').then(res => {
                    this.knowledgeList = res.body.data
                    console.log(res.body.data)
                })
            },
            //搜索知识
            search() {
                alert("测试")
            },
            //增加知识
            addKnowledge() {

            },
            ok() {
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$Message.info('Clicked cancel');
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            /*点击删除按钮*/
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            }
        },
    }
</script>


<style lang="css" scoped>

</style>