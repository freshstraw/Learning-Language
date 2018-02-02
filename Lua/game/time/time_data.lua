TimeData = TimeData or BaseClass()

function TimeData:__init()
	self.sc_time_diff = 0		-- 服务端和客户端的时差
end

function TimeData:__delete()
end

function TimeData:Clear()
	self.sc_time_diff = 0
end

function TimeData:AdjustServerTime(srv_timestamp)
	self.sc_time_diff = srv_timestamp - os.time()
end

function TimeData:GetServerTime()
	return os.time() + self.sc_time_diff
end

function TimeData:SrvToCliTime(srv_time)
	return srv_time - self.sc_time_diff
end

--[[ API ]]
-- 方便使用的接口
function os.srv_time()
	if TimeCtrl.Instance then
		return TimeCtrl.Instance:GetServerTime()
	else
		return os.time()
	end
end

function os.srv_date()
	return os.date("*t", os.srv_time())
end


