"use strict";
var ToolList = (function () {
    function ToolList(directory, filename, lastRun, pid) {
        this.directory = directory;
        this.filename = filename;
        this.lastRun = lastRun;
        this.pid = pid;
    }
    return ToolList;
}());
exports.ToolList = ToolList;
//# sourceMappingURL=toolList.js.map