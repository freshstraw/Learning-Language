-- 设置指定路径
local p = "H:\learning-language\Lua"
local m_package_path = package.path
package.path = string.format("%s?.lua;%s?/init.lua;%s", p, p, m_package_path)

require("config/config")
require("tools/tool_util")
require("utils/util")
require("grammar/jisuan")

-- 打印搜索路径
-- print(_L(3, package.path),
-- 	package.cpath,
-- 	package.loading)

--[[
***************Tools*************
1.Inspect()		用于解析table中的各个元素 和官方unpack有异曲同工之处,更加强大
2.String()
3.Math()
4.DeepCopy()		

]]

-- 1.Inspect()
local list = {1, 2, 3, 4, 5}
print(Inspect(list), "list......")

-- 2.String()
local name = "扬扬"
print(string.DecodeURL(name))
print(string.EncodeURL(name))

-- 3.Math
local num = 3.3
local num2 = 5.6
print(math.round(num))
print(math.round(num2))

-- 4.DeepCopy
local default_table = {
	{"yang", "1"},
	{"zhang", "2"},
	{"feng", "3"},
	{"zhao", "4"},
}

local copy_table = default_table
local deep_copy_table = DeepCopy(default_table)
print(Inspect(deep_copy_table))
table.insert(default_table, {"nan", "5"})
print(Inspect(copy_table))
print(Inspect(deep_copy_table))

-- 5.Time
print(Inspect(os.date('*t', 0)), "time......")
print(TimeUtil.FormatTime(1000, "YYYY\\MM\\DD"))
print(TimeUtil.FormatSeconds(1000, "HMS_AUTO_FIX2"))

