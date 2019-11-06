function getDate(time) {
  var hours = new Date();
  var _t = time.split(":");
  hours.setHours(_t[0], _t[1], 0, 0);
  return hours;
}

var isTimeRangesIntersect = function (timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2)) {
    var startTime1 = getDate(timeRange1[0]);
    var endTime1 = getDate(timeRange1[1]);
    var startTime2 = getDate(timeRange2[0]);
    var endTime2 = getDate(timeRange2[1]);
    //validation
    if (startTime1 >= endTime1 || startTime2 >= endTime2) {
      validation = false;
      return 'incorrect range';
    } else {
      validation = true;
    }

    //overlap
    if (endTime1 >= startTime2 && endTime1 <= endTime2 && validation) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'input is invalid';
  }
}
