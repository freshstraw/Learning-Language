--设置指定路径
local p = "H:\learning-language\Lua"
local m_package_path = package.path
package.path = string.format("%s?.lua;%s?/init.lua;%s", p, p, m_package_path)

require("config/config")
require("tools/tool_util")

print(_L(3, package.path),
	package.cpath,
	package.loading)


require("utils/util")

--[[
***************Tools*************
1.Inspect()		用于解析table中的各个元素 和官方unpack有异曲同工之处,更加强大


]]

-- 1.
local list = {1, 2, 3, 4, 5}
print(Inspect(list), "list......")

