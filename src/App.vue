<template>
	<div class="layout">
		<Layout>
			<Header>Header</Header>
			<Layout>
				<Sider hide-trigger>Sider</Sider>
				<Content>Content</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	</div>
</template>

<style lang="css" scoped>
.layout{
	width:100%;
	height:auto;
}
.ivu-layout-header{
	width:100%;
	height:50px;
	background:red;
}
.ivu-layout-sider-children{
	width:30px;
	height:500px;
	background:green;
}
.ivu-layout-content{
	width:90%;
	height:500px;
	background: blue;
}
.ivu-layout-footer{
	width:100%;
	height:20px;
	background:lightcoral;
}
</style>






























































































































