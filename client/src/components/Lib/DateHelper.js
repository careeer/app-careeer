const DateHelper = {
  formatedDate() {
    const rawDay = new Date();
    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    const monthArray = new Array(12);
    monthArray[0] = 'January';
    monthArray[1] = 'February';
    monthArray[2] = 'March';
    monthArray[3] = 'April';
    monthArray[4] = 'May';
    monthArray[5] = 'June';
    monthArray[6] = 'July';
    monthArray[7] = 'August';
    monthArray[8] = 'September';
    monthArray[9] = 'October';
    monthArray[10] = 'November';
    monthArray[11] = 'December';

    const dayOfWeek = weekday[rawDay.getDay()];
    const month = monthArray[rawDay.getMonth()];
    const dayOfMonth = rawDay.getDate();
    return `Due ${dayOfWeek}, ${month} ${dayOfMonth}`;
  },
};

export default DateHelper;
