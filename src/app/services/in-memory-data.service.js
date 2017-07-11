"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var user = {
            sessionTypes: [1, 2, 3, 4],
            session: {
                locationType: 4
            },
            user: {
                provider: 'hht',
                id: 12,
                displayName: 'Aaron Klose',
                emails: [{ value: 'example@gmail.com', type: 'Main' }],
                gravatar: '25dc91c7228b123e7ca77f66c2152e72',
                oRole: 'Rep',
                roleList: ['Int Rep'],
                teamID: 0,
            }
        };
        return { user: user };
    };
    InMemoryDataService.prototype.createDB = function () {
        var toolList = [
            {
                directory: '/jobs',
                filename: 'test.js',
                lastRun: 'somedatestring',
                pid: '1'
            },
            {
                directory: '/avalara',
                filename: 'updatetaxrates.js',
                lastRun: 'somedatestring',
                pid: '2'
            }
        ];
        return { toolList: toolList };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map