local count = 0
function CalculateSkill(n)
	if n == 1 then
		return n
	else
		return n + CalculateSkill(n - 1)
	end
end

print((CalculateSkill(46) * 4 - CalculateSkill(30) * 4) * 8, "n = 46")

print(5000/18, "....")

local a = {1, 2, 3}
local b = {1, 2, 3, 4}
local c = {}
c.__add = function(op1, op2)
	local new_table = {}
	local max_count = math.max(#op1, #op2)
	for i = 1, max_count do
		local item1 = op1[i] or 0
		local item2 = op2[i] or 0
		if type(item1) == "number" and type(item2) == "number" then
				local new_item = item1 + item2
				table.insert(new_table, new_item)
		end
	end
	return new_table
end

setmetatable(a, c)
local d = {}
d = a + b
print(Inspect(d))

