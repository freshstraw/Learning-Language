-- 重定向print
-- function print(...)
--     local s = ""
--     local arg = {...}
--     for i = 1, select('#', ...) do
--     	if i > 1 then s = s .. " " end
--     	s = s..tostring(arg[i])
--     end
    
--     _TARGET_PLATFORM = _TARGET_PLATFORM or CCApplication:sharedApplication():getTargetPlatform()
--     if _TARGET_PLATFORM ~= kTargetWindows then
-- 		local N = 1024
-- 		while string.len(s) > N do
-- 			local tmp = string.sub(s, 1, N)
-- 			s = string.sub(s, N + 1)
-- 			while math.floor(string.byte(s) / 64) == 2 do
-- 				tmp = tmp .. string.sub(s, 1, 1)
-- 				s = string.sub(s, 2)
-- 			end
-- 			CCLuaLog(tmp)
-- 		end
-- 	end
-- 	CCLuaLog(s)
-- end

