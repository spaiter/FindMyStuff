"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var barcelona_common_1 = require("./barcelona.common");
var BarcelonaModule = /** @class */ (function () {
    function BarcelonaModule() {
    }
    BarcelonaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(barcelona_common_1.ROUTES)
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ],
            declarations: barcelona_common_1.COMPONENT_DECLARATIONS.slice(),
            providers: barcelona_common_1.PROVIDERS_DECLARATIONS.slice(),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BarcelonaModule);
    return BarcelonaModule;
}());
exports.BarcelonaModule = BarcelonaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY2Vsb25hLm1vZHVsZS50bnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXJjZWxvbmEubW9kdWxlLnRucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsc0RBQXVFO0FBRXZFLHVEQUE0RjtBQXFCNUY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFuQjNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHlCQUFNLENBQUM7YUFDekM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2FBQ3pCO1lBQ0QsWUFBWSxFQUNQLHlDQUFzQixRQUMxQjtZQUNELFNBQVMsRUFDSix5Q0FBc0IsUUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJPVVRFUywgQ09NUE9ORU5UX0RFQ0xBUkFUSU9OUywgUFJPVklERVJTX0RFQ0xBUkFUSU9OUyB9IGZyb20gJy4vYmFyY2Vsb25hLmNvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KFJPVVRFUylcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRfREVDTEFSQVRJT05TXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlBST1ZJREVSU19ERUNMQVJBVElPTlNcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJjZWxvbmFNb2R1bGUgeyB9XG4iXX0=