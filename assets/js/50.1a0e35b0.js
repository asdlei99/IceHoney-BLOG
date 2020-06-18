(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{396:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("实验室给配备了一台高性能的台式机,但是 UEFI 本身关不掉.而且有些操作还是离不开 Windows,于是便折腾 Win10 和 Archlinux 的双启动.\n安装双系统基本上都是先装 Windows 再装 Linux 的.切忌这一点,安装顺序反了会很麻烦.")]),s._v(" "),t("h2",{attrs:{id:"win10-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win10-配置"}},[s._v("#")]),s._v(" Win10 配置")]),s._v(" "),t("p",[s._v("要安装 Archlinux,首先得对 Windows 进行相应的配置才行.Windows 的安装就不用我介绍了,大家基本都会的.")]),s._v(" "),t("h2",{attrs:{id:"uefi-secure-boot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uefi-secure-boot"}},[s._v("#")]),s._v(" UEFI Secure Boot")]),s._v(" "),t("p",[s._v("首先要进入 BIOS 把这个参数关掉,如果 BIOS 里面有快速启动之类的也关掉.")]),s._v(" "),t("h2",{attrs:{id:"fast-start-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fast-start-up"}},[s._v("#")]),s._v(" Fast Start-Up")]),s._v(" "),t("p",[s._v("把 Win10 的这个加速系统开机的配置禁用掉,应该在电源管理界面可以禁用的.因为切换系统的话这个功能会导致你丢失数据.")]),s._v(" "),t("h2",{attrs:{id:"制作-arch-的-u-盘安装盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作-arch-的-u-盘安装盘"}},[s._v("#")]),s._v(" 制作 Arch 的 U 盘安装盘")]),s._v(" "),t("p",[s._v("如果你简单的使用"),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/USB_flash_installation_media#In_GNU.2FLinux",target:"_blank",rel:"noopener noreferrer"}},[s._v("dd"),t("OutboundLink")],1),s._v("命令就可以成功安装那是最好不过的了,但是有时候事与愿违...")]),s._v(" "),t("p",[s._v("假设你用 dd 刻录好之后,然后用电脑 U 盘启动,出现启动菜单 选择 "),t("code",[s._v("Arch Linux archiso x86_64 UEFI CD")]),s._v(" 之后遇到黑屏的问题.")]),s._v(" "),t("p",[s._v("你可以先试试"),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen",target:"_blank",rel:"noopener noreferrer"}},[s._v("禁用 KMS"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("如果这个不行的话,那说明你得采用第二个办法了,使用 GRUB 进行引导启动盘.")]),s._v(" "),t("h2",{attrs:{id:"手动制作启动盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动制作启动盘"}},[s._v("#")]),s._v(" 手动制作启动盘")]),s._v(" "),t("p",[s._v("因为要使用 GRUB 进行引导,所以不能使用 dd 刻录,dd 刻录的 U 盘有写保护,我们无法修改.我们得"),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/USB_flash_installation_media#Using_manual_formatting",target:"_blank",rel:"noopener noreferrer"}},[s._v("手动制作安装盘"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /mnt/{iso,usb}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount -o loop archlinux-2015.10.01-dual.iso /mnt/iso")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/sdXn /mnt/usb")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -a /mnt/iso/* /mnt/usb")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sync")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /mnt/iso")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("光是拷贝还不行,我们还得有引导信息. 使用 syslinux 进行"),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Syslinux#Manual_install",target:"_blank",rel:"noopener noreferrer"}},[s._v("引导"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -r /usr/lib/syslinux/bios/*.c32 /mnt/usb/arch/boot/syslinux/  ## copy ALL the *.c32 files from /usr/lib/syslinux/bios/, DO NOT SYMLINK")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# extlinux --install /mnt/usb/arch/boot/syslinux/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果你的 U 盘是 MBR 格式的,记得使用 fdisk 把当前分区设置为活动分区. "),t("code",[s._v("fdisk /dev/sdX")]),s._v(" 然后输入 "),t("code",[s._v("a")]),s._v(" 命令,选择要设置的活动分区.")]),s._v(" "),t("p",[s._v("还有 U 盘寻找启动分区是根据 U 盘的 label 标签来寻找的,确保你的卷标是 "),t("code",[s._v("ARCH_2015XX")]),s._v(" 格式. 如果你不想用卷标的话,还可以用 UUID.\n查找你 U 盘的 UUID 的命令是 "),t("code",[s._v("sudo blkid")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"制作-grub-standalone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作-grub-standalone"}},[s._v("#")]),s._v(" 制作 GRUB standalone")]),s._v(" "),t("p",[s._v("这才只是手动制作好了启动 U 盘.你还要切换成 GRUB 引导.通过下面的命令制作出一个带有所有模块的 GRUB 引导文件.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("grub-mkstandalone -d /usr/lib/grub/x86_64-efi/ -O x86_64-efi --modules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"part_gpt part_msdos"')]),s._v(" --fonts"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unicode"')]),s._v(" --locales"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en@quot"')]),s._v(" --themes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/grubx64_standalone.efi"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("生成的 grubx64_standalone.efi 就是我们需要的文件.")]),s._v(" "),t("p",[s._v("然后回到我们的那个启动 U 盘.备份 EFI/boot/loader.efi 成 EFI/boot/gummiboot.efi.")]),s._v(" "),t("p",[s._v("拷贝两份 grubx64_standalone.efi. 分别命名为 EFI/boot/loader.efi 和 EFI/boot/bootx64.efi.")]),s._v(" "),t("p",[s._v("然后新建一个 EFI/boot/grub.cfg 把 "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen",target:"_blank",rel:"noopener noreferrer"}},[s._v("wiki"),t("OutboundLink")],1),s._v("上的内容拷贝过去.记得替换掉 ARCH_YYYYMM 的值.")]),s._v(" "),t("p",[s._v("然后这样就应该用 grub 启动了. 如果你这样还是启动失败了, 得到了类似 "),t("code",[s._v("invalid magic number")]),s._v("的错误.那只能说你跟我一样倒霉.")]),s._v(" "),t("h2",{attrs:{id:"用-grub-挂载-iso-进行引导"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-grub-挂载-iso-进行引导"}},[s._v("#")]),s._v(" 用 GRUB 挂载 ISO 进行引导")]),s._v(" "),t("p",[s._v("既然我们的 GRUB 是好的,那我们就用 GRUB 直接引导一个完整的 ISO 文件. 参考我之前发布的文章"),t("a",{attrs:{href:"https://blog.icehoney.me/posts/2013-04-25-grub2-boot-from-iso",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 GRUB2 引导 ISO 镜像"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("在原有的 grub.cfg 上添加一个 menuentry.并把完整的 ISO 镜像拷贝到 U 盘里面.记得替换 UUID 和文件名.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('menuentry "Archlinux-x86_64.iso" --class iso {\n  set isofile="/archlinux-2013.04.01-dual.iso"\n  search -s -f -n /archlinux-2013.04.01-dual.iso\n  probe --set=DB7B-2C3D -u $root\n  loopback loop /archlinux-2013.04.01-dual.iso\n  linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D  img_loop=$isofile earlymodules=loop\n  initrd (loop)/arch/boot/x86_64/archiso.img\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这次总算可以引导出 arch 的安装环境了.接下来就是按照正常的步骤进行安装了. 在 Win 下直接使用"),t("a",{attrs:{href:"https://github.com/pbatard/rufus",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rufus"),t("OutboundLink")],1),s._v("刻录就没那么折腾了.")]),s._v(" "),t("h2",{attrs:{id:"安装-archlinux-之后配置双系统的-grub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-archlinux-之后配置双系统的-grub"}},[s._v("#")]),s._v(" 安装 Archlinux 之后配置双系统的 GRUB")]),s._v(" "),t("p",[s._v("到最后我们要"),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GRUB#UEFI_systems",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装 GRUB 到 UEFI"),t("OutboundLink")],1),s._v("上.如果你提前安装过 Windows,那么你肯定有 EFI 分区的.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pacman -S dosfstools grub efibootmgr")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir /boot/efi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount /dev/sda1 /boot/efi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("把 EFI 分区挂载到系统上,然后安装 GRUB.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub --recheck")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grub-mkconfig -o /boot/grub/grub.cfg")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("生成的 grub.cfg 里面并没有 Windows 的启动菜单,我们需要手动写.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('menuentry "Microsoft Windows 10" {\n    insmod part_gpt\n    insmod fat\n    insmod search_fs_uuid\n    insmod chain\n    search --fs-uuid --set=root $hints_string $fs_uuid\n    chainloader /EFI/Microsoft/Boot/bootmgfw.efi\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("$hints_string 的值是命令"),t("code",[s._v("# grub-probe --target=hints_string /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi")]),s._v("的输出.")]),s._v(" "),t("p",[s._v("$fs_uuid 的值是命令"),t("code",[s._v("# grub-probe --target=fs_uuid /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi")]),s._v("的输出.")]),s._v(" "),t("p",[s._v("替换这俩值,保存并退出即可.到此双系统配置完毕.最后别忘了进 BIOS 把第一启动项目设置为 GRUB.")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://gist.github.com/miguelfrde/5dde43aa08b076106b9e",target:"_blank",rel:"noopener noreferrer"}},[s._v("Preinstalled Windows 8.1 and Arch Linux dual boot"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unified Extensible Firmware Interface"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/USB_flash_installation_media#Using_manual_formatting",target:"_blank",rel:"noopener noreferrer"}},[s._v("USB flash installation media"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Syslinux#Manual_install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Syslinux"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GRUB#UEFI_systems",target:"_blank",rel:"noopener noreferrer"}},[s._v("GRUB"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);