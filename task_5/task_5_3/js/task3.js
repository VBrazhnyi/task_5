function getTime(n) {
	var d = n / 86400 ^ 0;
    var h = (n - d * 86400) / 3600 ^ 0;
    var m = (n - d * 86400 - h * 3600) / 60 ^ 0;
    var s = n - d * 86400 - h * 3600 - m * 60;
    h<10 ? h="0"+h : h;
    m<10 ? m="0"+m : m;
    s<10 ? s="0"+s : s;
    return String(h+":"+m+":"+s);
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask3() {
	assert(getTime(20423) == "05:40:23", "Case '20423'");
	assert(getTime( 5320) == "01:28:40", "Case '5320'");
	assert(getTime(23630) == "06:33:50", "Case '23630'");
	assert(getTime(20381) == "05:39:41", "Case '20381'");
	assert(getTime(42718) == "11:51:58", "Case '42718'");
	assert(getTime(30002) == "08:20:02", "Case '30002'");
	assert(getTime( 3010) == "00:50:10", "Case '3010'");
	assert(getTime(20437) == "05:40:37", "Case '20437'");
	assert(getTime(40315) == "11:11:55", "Case '40315'");
	assert(getTime(18392) == "05:06:32", "Case '18392'");
	console.log("Done!");
}

runTask3();
