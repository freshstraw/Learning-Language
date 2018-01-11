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

