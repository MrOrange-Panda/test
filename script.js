    const searchBox = document.getElementById('searchBox');
    const keywords = ['量车定制', '社区先行', '优质服务，值得信赖'];  // 设置要轮播的关键词数组
    let currentIndex = 0;  // 当前显示的关键词索引

    function rotateKeywords() {
      searchBox.style.transform = 'scale(0)';  // 添加缩放动画效果

      setTimeout(() => {
        searchBox.value = keywords[currentIndex];  // 更新搜索框内容为当前关键词
        searchBox.style.transform = 'scale(1)';  // 恢复到正常大小
      }, 500);  // 等待0.5秒后再执行更新和恢复动画

      // 增加索引，如果超过关键词数组长度，则循环回到第一个关键词
      currentIndex = (currentIndex + 1) % keywords.length;
    }

    // 初始显示第一个关键词
    searchBox.value = keywords[currentIndex];
    currentIndex++;

    // 定时器，每隔一定时间切换关键词
    setInterval(rotateKeywords, 5000);  // 设置切换间隔，单位为毫秒（此处为每 3 秒切换一次）