# 解除机房控制
破解学校机房方法1：
新建扩展名为.bat的文件，在里面写入以下内容：
```
:start
taskkill /f /im _
goto start
```
然后把_换成机房控制的进程名，假设我的机房控制进程名是notepad.exe那么就把_换成notepad.exe，然后保存，编码选择ANSI，运行，等个10秒，机房控制的进程就没了


破解学校机房方法2：
在<https://ouyhq.lanzoui.com/iU1ufuh7sda#95pi>下载文件，运行后输入{机房控制的进程名}，回车，等个10秒，机房控制的进程就没了




2022/1/25更新
最近看了一下，发现还有不会被老师发现的解除控制（投屏或安静）方法，主要利用5次Shift漏洞，但是不会杀掉进程，具体实现方法如下：<br/>
1. 在未被控制时将以下代码保存为.bat结尾的文件（Ctrl+Shift+S，文件名保证结尾是.bat就行，保存至默认浏览器的下载目录）：```taskkill /f /im explorer.exe```
2. 在被控制时按5次Shift，打开控制面板
3. 在程序->程序兼容性疑难解答中，点击隐私声明，此时会打开浏览器
4. 在浏览器中打开下载选项，选择打开文件夹（不同浏览器名称可能不一样，只要意思对就行）
5. 在资源管理器中运行刚刚第一步制作的文件
6. 此时你会发现，任务栏出来了，这时在开始菜单中打开你想玩的游戏就行了（有的软件会锁键盘，在控制面板的无障碍选项中开启屏幕键盘就行）
