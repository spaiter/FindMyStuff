"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-testing");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
var context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlHQUFpRzs7QUFFakcscUNBQW1DO0FBQ25DLGlEQUFtRDtBQUNuRCxxRUFHbUQ7QUFJbkQscURBQXFEO0FBQ3JELG9CQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FDOUIscUNBQTJCLEVBQzNCLHVDQUE2QixFQUFFLENBQ2hDLENBQUM7QUFDRiw4QkFBOEI7QUFDOUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzNELHdCQUF3QjtBQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHJlcXVpcmVkIGJ5IGthcm1hLmNvbmYuanMgYW5kIGxvYWRzIHJlY3Vyc2l2ZWx5IGFsbCB0aGUgLnNwZWMgYW5kIGZyYW1ld29yayBmaWxlc1xuXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLXRlc3RpbmcnO1xuaW1wb3J0IHsgZ2V0VGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQge1xuICBCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUsXG4gIHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJztcblxuZGVjbGFyZSBjb25zdCByZXF1aXJlOiBhbnk7XG5cbi8vIEZpcnN0LCBpbml0aWFsaXplIHRoZSBBbmd1bGFyIHRlc3RpbmcgZW52aXJvbm1lbnQuXG5nZXRUZXN0QmVkKCkuaW5pdFRlc3RFbnZpcm9ubWVudChcbiAgQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLFxuICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpXG4pO1xuLy8gVGhlbiB3ZSBmaW5kIGFsbCB0aGUgdGVzdHMuXG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC5zcGVjXFwudHMkLyk7XG4vLyBBbmQgbG9hZCB0aGUgbW9kdWxlcy5cbmNvbnRleHQua2V5cygpLm1hcChjb250ZXh0KTtcbiJdfQ==