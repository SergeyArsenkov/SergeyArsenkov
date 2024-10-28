import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export function MyPosts() {
    return (
        <div>
            my posts
            <div>new post</div>
            <div className={s.posts}>
                <Post message="Hello" likesCount="10" />
                <Post message="It's my first post" likesCount="20" />
            </div>
        </div>
    )
}
