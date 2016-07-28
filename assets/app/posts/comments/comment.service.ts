import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

import { Comment } from "./comment";

@Injectable()
export class CommentService {

    constructor (private _http: Http) {}

    addComment(postId: string, comment: Comment) {
        const body = JSON.stringify(comment);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/post/' + postId + '/comment' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let comment = new Comment(data.body, data.author, data._id, data.post._id, 0, 0);
                return comment;
            })
            .catch(error => Observable.throw(error.json()));
    }

    upvoteComment(postId: string, comment: Comment) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/post/' + postId + '/comment/' + comment._id + '/upvote' + token, null, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    downvoteComment(postId: string, comment: Comment) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/post/' + postId + '/comment/' + comment._id + '/downvote' + token, null, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}
