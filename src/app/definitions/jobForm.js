"use strict";
var JobForm = (function () {
    function JobForm(
        // public id: number,
        name, description, recur, month, day, date, year, hour, minute, seconds, tool) {
        this.name = name;
        this.description = description;
        this.recur = recur;
        this.month = month;
        this.day = day;
        this.date = date;
        this.year = year;
        this.hour = hour;
        this.minute = minute;
        this.seconds = seconds;
        this.tool = tool;
    }
    return JobForm;
}());
exports.JobForm = JobForm;
//# sourceMappingURL=jobForm.js.map