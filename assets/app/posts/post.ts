export class Post {
    title: string;
    content: string;
    username: string;
    postId: string;
    userId: string;
    upvotes: number;
    downvotes: number;
    comments: Array<any>;

    constructor (title: string, content: string, username?: string, postId?: string, userId?: string, upvotes?: number, downvotes?: number, comments?: Array<any>) {
        this.title = title;
        this.content = content;
        this.username = username;
        this.postId = postId;
        this.userId = userId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.comments = comments;
    }
}
