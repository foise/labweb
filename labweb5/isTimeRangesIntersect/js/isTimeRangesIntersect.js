function getDate(time) {
  var hours = new Date();
  var timeArray = time.split(":");
  hours.setHours(timeArray[0], timeArray[1], 0, 0);
  return hours;
}

var isTimeRangesIntersect = function (timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2) && timeRange1.length === 2 && timeRange2.length === 2 &&
    timeRange1[0] <= timeRange1[1] && timeRange2[0] <= timeRange2[1]) {

    for (var index = 0; index < 2; index++) {
      if (typeof timeRange1[index] !== "string" || typeof timeRange2[index] !== "string") {
        return false;
      }
    }
    var endTime1 = getDate(timeRange1[1]);
    var startTime2 = getDate(timeRange2[0]);

    if (endTime1 >= startTime2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
