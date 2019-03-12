<template>
	<div>
		<div id="sys_head">
			<b-navbar toggleable="lg" type="dark" variant="info">
				<b-navbar-brand href="#">商标</b-navbar-brand>

				<b-navbar-toggle target="nav_collapse" />

				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav>
						<b-nav-item href="#">首页</b-nav-item>
						<b-nav-item href="#">商户中心</b-nav-item>
						<b-nav-item href="#">在线客服</b-nav-item>
						<b-nav-item href="#">意见反馈</b-nav-item>
					</b-navbar-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown text="Lang" right>
							<b-dropdown-item href="#">EN</b-dropdown-item>
							<b-dropdown-item href="#">ES</b-dropdown-item>
							<b-dropdown-item href="#">RU</b-dropdown-item>
							<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown right>
							<!-- Using button-content slot -->
							<template slot="button-content"><em>User</em></template>
							<b-dropdown-item href="#">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Signout</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
		<div id="sys_body">
			<div role="tablist" id="sys_left">
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion1 variant="info">系统装修</b-button>
					</b-card-header>
					<b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion2 variant="info">支付接口设置</b-button>
					</b-card-header>
					<b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion3 variant="info">主站版本管理</b-button>
					</b-card-header>
					<b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion4 variant="info">可用域名管理</b-button>
					</b-card-header>
					<b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion5 variant="info">商户资金结算</b-button>
					</b-card-header>
					<b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion6 variant="info">主站管理</b-button>
					</b-card-header>
					<b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
				<b-card no-body class="mb-1">
					<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block href="#" v-b-toggle.accordion7 variant="info">主站货源推荐</b-button>
					</b-card-header>
					<b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
						<router-link tag="li" to="/websit">
							<a>Top</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Middle</a>
						</router-link>
						<router-link tag="li" to="/websit">
							<a>Bottom</a>
						</router-link>
					</b-collapse>
				</b-card>
			</div>
			<!-- // 内容 -->
			<div id="sys_content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>
<style>
	#sys_head{
		width: 100%;
	}
	#sys_body{
		width: 100%;
	}
	#sys_left{
		width: 20%;
		float: left;
	}
	#sys_content{
		float: left;
	}
	.card{
		border: 1;
	}
	.p-1{
		padding: 0 !important;
	}
	.card-body{
		padding: 0;
	}
	.btn-group-vertical{
		width: 100%;
		height: 100%;
	}
	.mb-1,.my-1{
		border: 0;
		margin-bottom: 0 !important;
	}
	.navbar-brand{
		width: 50%;
		/* margin-left: 500px; */
		/* position: right; */
	}
	.mb-1 a{
		 display : block;
		 text-decoration: none;
	}
	.mb-1 li{
		list-style-type: none;
		list-style-image: none;
		background: #42B983;
		text-decoration: none;
	}

</style>
