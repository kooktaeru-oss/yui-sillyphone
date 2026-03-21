// 当酒馆加载完毕时，会执行这里的代码
jQuery(async () => {
    console.log("📱 [Yui Phone] 扩展已成功加载！酒馆主脑已连接！");
    
    // 弹出一个酒馆原生的绿色提示框，证明代码跑通了！
    toastr.success("Yui的同层手机扩展加载成功！");
});
