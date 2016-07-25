import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

import { Post } from "./post";

@Injectable()
export class PostService {
    posts: Post[] = [];

    constructor (private _http: Http) {}

    addPost(post: Post) {
        const body = JSON.stringify(post);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/post' + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let post = new Post(data.title, data.content, data.user.firstName, data._id, data.user._id, 0, 0);
                return post;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getPosts() {
        return this._http.get('http://localhost:3000/post')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let post = new Post(data[i].title, data[i].content, data[i].user.firstName, data[i]._id, data[i].user._id, data[i].upvotes, data[i].downvotes, data[i].comments);
                    objs.push(post);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getPost(postId) {
        for (let i = 0; i < this.posts.length; i++) {
            if (postId === this.posts[i].postId) {
                return this.posts[i];
            }
        }
        return null;
    }

    upvotePost(post: Post) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/post/' + post.postId + '/upvote' + token, null, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    downvotePost(post: Post) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('http://localhost:3000/post/' + post.postId + '/downvote' + token, null, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}
