(function () {
    const emojis = ['😀', '😎', '🔥', '💡', '🚀'];
    let index = 0;

    function changeFavicon() {
        const emoji = emojis[index];
        index = (index + 1) % emojis.length;

        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;

        const ctx = canvas.getContext('2d');
        ctx.font = '48px serif';
        ctx.fillText(emoji, 8, 48);

        const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = canvas.toDataURL('image/png');

        document.head.appendChild(link);
    }

    setInterval(changeFavicon, 1000); // 每秒切换一次
})();
