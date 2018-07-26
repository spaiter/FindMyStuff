"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var players_component_1 = require("./players/players.component");
var player_detail_component_1 = require("./player-detail/player-detail.component");
var player_service_1 = require("./player.service");
exports.COMPONENT_DECLARATIONS = [
    players_component_1.PlayersComponent,
    player_detail_component_1.PlayerDetailComponent
];
exports.PROVIDERS_DECLARATIONS = [
    player_service_1.PlayerService
];
exports.ROUTES = [
    { path: 'players', component: players_component_1.PlayersComponent },
    { path: 'player/:id', component: player_detail_component_1.PlayerDetailComponent },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyY2Vsb25hLmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhcmNlbG9uYS5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpRUFBK0Q7QUFDL0QsbUZBQWdGO0FBQ2hGLG1EQUFpRDtBQUVwQyxRQUFBLHNCQUFzQixHQUFVO0lBQzNDLG9DQUFnQjtJQUNoQiwrQ0FBcUI7Q0FDdEIsQ0FBQztBQUVXLFFBQUEsc0JBQXNCLEdBQVU7SUFDM0MsOEJBQWE7Q0FDZCxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDNUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO0NBQ3pELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQbGF5ZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGxheWVyLWRldGFpbC9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gJy4vcGxheWVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0RFQ0xBUkFUSU9OUzogYW55W10gPSBbXG4gIFBsYXllcnNDb21wb25lbnQsXG4gIFBsYXllckRldGFpbENvbXBvbmVudFxuXTtcblxuZXhwb3J0IGNvbnN0IFBST1ZJREVSU19ERUNMQVJBVElPTlM6IGFueVtdID0gW1xuICBQbGF5ZXJTZXJ2aWNlXG5dO1xuXG5leHBvcnQgY29uc3QgUk9VVEVTOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ3BsYXllcnMnLCBjb21wb25lbnQ6IFBsYXllcnNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncGxheWVyLzppZCcsIGNvbXBvbmVudDogUGxheWVyRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuIl19