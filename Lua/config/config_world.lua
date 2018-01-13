--keywords
Config = Config or {}

KeyWords = {
	[1] = "Hello World!",
	[2] = "Hello World!{p0}",
	[3] = table.concat({
                "<div align='0' width='500'>",
                "<div align='0'><font color='yellow' size='24'>举例说明</font></div>",
                "<img name = 'assets/ui/ui_commstyle.csprite' image = 'seprator_8' width='500' height='16' offsety='-2' />",
                table.concat({
                    "<div align='1' width='500'>",
                    "<div ivalign='0' align='0'><font color='white'>路径:</font>",
                    "<div width='420' align='0'>",
                    table.concat({
                        "{p0}",
                        "<br><br>",
                    }, "<br><br>"),
                    "</div></div>",
                    "</div>",
                }),
                "</div>",
            }, "<br>"),
}

