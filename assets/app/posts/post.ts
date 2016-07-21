export class Post {
    title: string;
    content: string;
    username: string;
    postId: string;
    userId: string;
    upvotes: number;
    downvotes: number;

    constructor (title: string, content: string, username?: string, postId?: string, userId?: string, upvotes?: number, downvotes?: number) {
        this.title = title;
        this.content = content;
        this.username = username;
        this.postId = postId;
        this.userId = userId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
