"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_service_1 = require("../player.service");
var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(playerService, route) {
        this.playerService = playerService;
        this.route = route;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.player = this.playerService.getPlayer(id);
    };
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            templateUrl: './player-detail.component.html',
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService,
            router_1.ActivatedRoute])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsb0RBQWtEO0FBTWxEO0lBR0UsK0JBQ1UsYUFBNEIsRUFDNUIsS0FBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDM0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDRSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFYVSxxQkFBcUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDOUMsQ0FBQzt5Q0FLeUIsOEJBQWE7WUFDckIsdUJBQWM7T0FMcEIscUJBQXFCLENBWWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9wbGF5ZXInO1xuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gJy4uL3BsYXllci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxheWVyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBsYXllcjogUGxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcihpZCk7XG4gIH1cbn1cbiJdfQ==