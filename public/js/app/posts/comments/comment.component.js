"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var comment_1 = require("./comment");
var comment_service_1 = require("./comment.service");
var error_service_1 = require("../../errors/error.service");
var CommentComponent = (function () {
    function CommentComponent(_commentService, _errorService) {
        this._commentService = _commentService;
        this._errorService = _errorService;
    }
    CommentComponent.prototype.upvoteComment = function (postId, comment) {
        var _this = this;
        this._commentService.upvoteComment(postId, comment)
            .subscribe(function (data) {
            comment.upvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CommentComponent.prototype.downvoteComment = function (postId, comment) {
        var _this = this;
        this._commentService.downvoteComment(postId, comment)
            .subscribe(function (data) {
            comment.downvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', comment_1.Comment)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentComponent.prototype, "postId", void 0);
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <span>{{ comment.body }}</span>\n                <span class=\"glyphicon glyphicon-thumbs-up\" (click)=\"upvoteComment(postId, comment)\"></span>\n                    {{ comment.upvotes }}\n                <span class=\"glyphicon glyphicon-thumbs-down\" (click)=\"downvoteComment(postId, comment)\"></span>\n                    {{ comment.downvotes }}\n                <br>\n                <span>By {{ comment.author }}</span>\n            </div>\n        </article>\n    ",
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService, error_service_1.ErrorService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL2NvbW1lbnRzL2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFFakQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBb0IxRDtJQUlJLDBCQUFvQixlQUErQixFQUFVLGFBQTJCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUU1Rix3Q0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLE9BQU87UUFBN0IsaUJBUUM7UUFQRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQzlDLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDVCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsT0FBTztRQUEvQixpQkFRQztRQVBHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDaEQsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNULENBQUM7SUF2QkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBcEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBQyxza0JBWVI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O3dCQUFBO0lBMkJGLHVCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx3QkFBZ0IsbUJBeUI1QixDQUFBIiwiZmlsZSI6InBvc3RzL2NvbW1lbnRzL2NvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XG5pbXBvcnQgeyBDb21tZW50U2VydmljZSB9IGZyb20gXCIuL2NvbW1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tbWVudCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY29tbWVudC5ib2R5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIiAoY2xpY2spPVwidXB2b3RlQ29tbWVudChwb3N0SWQsIGNvbW1lbnQpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBjb21tZW50LnVwdm90ZXMgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIiAoY2xpY2spPVwiZG93bnZvdGVDb21tZW50KHBvc3RJZCwgY29tbWVudClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGNvbW1lbnQuZG93bnZvdGVzIH19XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkJ5IHt7IGNvbW1lbnQuYXV0aG9yIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0NvbW1lbnRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbW1lbnQ6Q29tbWVudDtcbiAgICBASW5wdXQoKSBwb3N0SWQ6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tbWVudFNlcnZpY2U6IENvbW1lbnRTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIHVwdm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KSB7XG4gICAgICAgIHRoaXMuX2NvbW1lbnRTZXJ2aWNlLnVwdm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC51cHZvdGVzKys7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgZG93bnZvdGVDb21tZW50KHBvc3RJZCwgY29tbWVudCkge1xuICAgICAgICB0aGlzLl9jb21tZW50U2VydmljZS5kb3dudm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5kb3dudm90ZXMrKztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
