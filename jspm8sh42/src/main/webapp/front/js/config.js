
var projectName = '咖啡馆管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的订单',
	url: '../order/list.jsp'
},

{
	name: '我的地址',
	url: '../address/list.jsp'
},

]


var indexNav = [

{
	name: '咖啡信息',
	url: './pages/kafeixinxi/list.jsp'
}, 

]

var adminurl =  "http://localhost:8080/jspm8sh42/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true
cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客户","menuJump":"列表","tableName":"kehu"}],"menu":"客户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"咖啡类型","menuJump":"列表","tableName":"kafeileixing"}],"menu":"咖啡类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"咖啡信息","menuJump":"列表","tableName":"kafeixinxi"}],"menu":"咖啡信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","修改","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","修改","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","修改","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["新增","查看","修改","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","修改","删除"],"menu":"未支付订单","tableName":"orders/未支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"咖啡信息列表","menuJump":"列表","tableName":"kafeixinxi"}],"menu":"咖啡信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看","修改","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","修改","删除"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","修改","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","修改","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","修改","删除","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"咖啡信息列表","menuJump":"列表","tableName":"kafeixinxi"}],"menu":"咖啡信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"客户","tableName":"kehu"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"客户","menuJump":"列表","tableName":"kehu"}],"menu":"客户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"咖啡类型","menuJump":"列表","tableName":"kafeileixing"}],"menu":"咖啡类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"咖啡信息","menuJump":"列表","tableName":"kafeixinxi"}],"menu":"咖啡信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"咖啡信息列表","menuJump":"列表","tableName":"kafeixinxi"}],"menu":"咖啡信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"员工","tableName":"yuangong"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
