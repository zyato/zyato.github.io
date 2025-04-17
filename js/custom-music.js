// 在 Hexo 中使用了 PJAX，需要自己手动清理 APlayer 全局实例：
$(document).on('pjax:start', function () {
    if (window.aplayers) {
        for (let i = 0; i < window.aplayers.length; i++) {
            window.aplayers[i].destroy();
        }
        window.aplayers = [];
    }
});