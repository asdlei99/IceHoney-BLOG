(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{396:function(r,t,e){"use strict";e.r(t);var a=e(8),o=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("安卓本来就是 Linux 衍生的,所以必然可以用 Linux 系统进行刷机,而且效果比 Win 还要好.不需要安装驱动,只需要安装 adb 和 fastboot 即可.")]),r._v(" "),e("h2",{attrs:{id:"安装相关依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装相关依赖"}},[r._v("#")]),r._v(" 安装相关依赖")]),r._v(" "),e("p",[r._v("首先通过 AUR 源安装[android-sdk](https://aur.archlinux.org/packages/android-sdk/和"),e("a",{attrs:{href:"https://aur.archlinux.org/packages/android-sdk-platform-tools/",target:"_blank",rel:"noopener noreferrer"}},[r._v("android-sdk-platform-tools"),e("OutboundLink")],1),r._v("相关的wiki在 "),e("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Android",target:"_blank",rel:"noopener noreferrer"}},[r._v("这里"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("通过 "),e("code",[r._v("yaourt -Ql android-sdk-platform-tools")]),r._v(" 可以发现 adb 和 fastboot 都安装在"),e("code",[r._v("/opt/android-sdk/platform-tools")]),r._v(" 目录下,但是 PATH 环境变量没有这个值,所以无法在终端里直接调用必须先设置 PATH 变量 "),e("code",[r._v('export PATH="${PATH}:/opt/android-sdk/platform-tools"')]),r._v("在 .xinitrc 里面添加这句就可以使 X 下的终端 PATH 环境变量被添加.也可以直接执行,当终端关闭时 PATH 变量的设置也失效.")]),r._v(" "),e("h2",{attrs:{id:"配置-adb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-adb"}},[r._v("#")]),r._v(" 配置 ADB")]),r._v(" "),e("p",[r._v("前面提供的 wiki 已经很详细的讲述如何进行"),e("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Android#Connecting_to_a_real_device_-_Android_Debug_Bridge_.28ADB.29",target:"_blank",rel:"noopener noreferrer"}},[r._v("ADB 的配置了"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"测试-fastboot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-fastboot"}},[r._v("#")]),r._v(" 测试 FASTBOOT")]),r._v(" "),e("p",[r._v("fastboot 模式（上下音量键和开机键一起按）,可以看到一个大大的 Start 画面,这就是进入了 fastboot.或者使用命令"),e("code",[r._v("adb reboot bootloader")]),r._v("。此时把手机用 USB 连入电脑. 在终端里面输入 fastboot devices 如果提示 no permission 即是普通用户没有权限。这时候就需要切换到 root 用户进行执行.如果输入一串数字.则说明系统识别到了你的手机.")]),r._v(" "),e("h2",{attrs:{id:"刷机开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷机开始"}},[r._v("#")]),r._v(" 刷机开始")]),r._v(" "),e("p",[r._v("首先要下载"),e("a",{attrs:{href:"https://developers.google.com/android/nexus/images",target:"_blank",rel:"noopener noreferrer"}},[r._v("固件"),e("OutboundLink")],1),r._v("下载下来的 tgz 文件解压即可看到有个 flash-all.sh 的脚本。首先 "),e("code",[r._v("chmod +x flash-all.sh")]),r._v(" 赋予脚本执行权限，然后执行这个脚本即可,如果有大量输出则说明刷机正常进行中.")]),r._v(" "),e("h2",{attrs:{id:"后续-root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后续-root"}},[r._v("#")]),r._v(" 后续 ROOT")]),r._v(" "),e("p",[r._v("ROOT 的话首先需要刷 recovery,我们先下载"),e("a",{attrs:{href:"http://www.clockworkmod.com/rommanager",target:"_blank",rel:"noopener noreferrer"}},[r._v("recovery"),e("OutboundLink")],1),r._v("找到自己型号的 recovery 进行下载,我的是 recovery-clockwork-touch-6.0.3.3-maguro.img，touch 代表的是是否支持触摸.否则只能用音量键和开机键进行选择和确定.然后下载 superSU 的 ZIP 压缩包,目前版本是"),e("a",{attrs:{href:"http://download.chainfire.eu/339/SuperSU/UPDATE-SuperSU-v1.41.zip?retrieve_file=1",target:"_blank",rel:"noopener noreferrer"}},[r._v("1.41"),e("OutboundLink")],1),r._v(" ,ZIP 格式不要解压.放入 SD 卡中."),e("code",[r._v("adb push UPDATE-SuperSU-v1.41.zip /sdcard/")]),r._v("将手机关机进入 fastboot 模式,应该先解锁, "),e("code",[r._v("fastboot oem unlock")]),r._v("然后刷入 recovery "),e("code",[r._v("fastboot flash recovery recovery-clockwork-touch-6.0.3.3-maguro.img")]),r._v("按下音量键调至 recovery，按开机键进入，手机会自动重启进入 recovery。choose zip from SDcard，然后依次进入，最终选择 UPDATE-SuperSU-v1.41.zip，确认安装.")]),r._v(" "),e("p",[r._v("注：如果提示是否清除 recovery flash，请选 No，否则下次推送时无法进行 OTA 更新.安装完成后依次返回.这个步骤不会影响 OTA 更新,并且 OTA 更新之后会自动解决 ROOT 的问题,无需再次 ROOT.")]),r._v(" "),e("h2",{attrs:{id:"adb-小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adb-小技巧"}},[r._v("#")]),r._v(" ADB 小技巧")]),r._v(" "),e("p",[r._v("刷机之后需要一大堆 APK 软件安装怎么办 adb 本身只有单个 APK 安装的功能，通过 "),e("code",[r._v("ls -1 *.apk | xargs -l adb install")]),r._v(" 这个命令可以批量的把一个文件夹下的所以 APK 安装上去,而且还是静默安装. 不过首先要打开 ADB 调试才行.")]),r._v(" "),e("h2",{attrs:{id:"手机-mtp-连接-linux-电脑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手机-mtp-连接-linux-电脑"}},[r._v("#")]),r._v(" 手机 MTP 连接 Linux 电脑")]),r._v(" "),e("p",[r._v("MTP 是微软发明的东西....当然不好用\n目前有两种解决方案一种是 GMTP,速度较慢,因为第一次和之后所有操作之后都会全部索引一遍文件列表.第二种是 gvfs-mtp 结合 thunar 使用,可以自动挂载,如果无法挂载可以使用 "),e("code",[r._v("lsusb")]),r._v(" 命令.")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("Bus 001 Device 117: ID 04e8:6860 Samsung Electronics Co., Ltd GT-I9100 Phone [Galaxy S II], GT-I9300 Phone [Galaxy S III], GT-P7500 [Galaxy Tab 10.1]\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br")])]),e("p",[r._v("可以看到我的设备号,然后在地址栏里面输入 "),e("code",[r._v("mtp://[usb:001,117]/")]),r._v("。第一个数字是 Bus 号,第二个数字是设备号.")])])}),[],!1,null,null,null);t.default=o.exports}}]);