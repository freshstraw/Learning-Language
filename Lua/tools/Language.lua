Language = Language or {}

-- KeyWords应用
-- KeyWords = {
-- 	[1] = "Hello World!",
-- 	[2] = "Hello World!{p0}",
-- 	[3] = table.concat({
--                 "<div align='0' width='500'>",
--                 "<div align='0'><font color='yellow' size='24'>举例说明</font></div>",
--                 "<img name = 'assets/ui/ui_commstyle.csprite' image = 'seprator_8' width='500' height='16' offsety='-2' />",
--                 table.concat({
--                     "<div align='1' width='500'>",
--                     "<div ivalign='0' align='0'><font color='white'>路径:</font>",
--                     "<div width='420' align='0'>",
--                     table.concat({
--                         "{p0}",
--                         "<br><br>",
--                     }, "<br><br>"),
--                     "</div></div>",
--                     "</div>",
--                 }),
--                 "</div>",
--             }, "<br>"),
-- }

-- {p0} {p1} .. 表示对应的参数
function Language.Lan(key, ...)
	local arg = {...}
	local str = type(key) == "number" and KeyWords[key] or key
	if str == nil then
		str = tostring(key)
	end

	local function FormatText(n)
		return tostring(arg[tonumber(n) + 1])
	end
	local result = string.gsub(str, "{p(%d+)}", FormatText)
	return result
end

-- Sugar grammar
_L = Language.Lan

--[[
-- Application example
print(_L(1), "你好啊......")
print(_L(2, "yang"), "你好啊......" )

----------------------[*扩展*]----------
Config = Config or {}

Config.SkillData = {
    [1001] = {
        desc_args = {"yang", "years old 25"},
        desc = "你好<font color='green'>{p0}</font><font color='green'>{p1}</font>Hello World!",
    }
}
]]

function Language.GetFormatString(format_text, arg_name_reg, ...)
	local arg = {...}
	local arg_name_reg = arg_name_reg or "#(%d+)#"
	local function FormatText(n)
		return tostring(arg[tonumber(n) + 1])
	end
	return string.gsub(format_text, arg_name_reg, FormatText)
end

_LG = Language.GetFormatString

--[[
local cfg = Config.SkillData[1001]
local desc = _LG(cfg.desc, "{p(%d+)}", unpack(cfg.desc_args or {}))
print(desc, "Config.SkillData.....")
]]

