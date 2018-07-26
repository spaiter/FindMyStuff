"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player.service");
var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        this.players = this.playerService.getPlayers();
    };
    PlayersComponent = __decorate([
        core_1.Component({
            selector: 'app-players',
            templateUrl: './players.component.html',
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxvREFBa0Q7QUFNbEQ7SUFHRSwwQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRXJELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQVBVLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUltQyw4QkFBYTtPQUhyQyxnQkFBZ0IsQ0FRNUI7SUFBRCx1QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGxheWVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGxheWVycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXJzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBsYXllcnM6IFBsYXllcltdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXJzID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcnMoKTtcbiAgfVxufVxuIl19