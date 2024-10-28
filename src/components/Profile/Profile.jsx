import { MyPosts } from './MyPosts/MyPosts'
import classes from './Profile.module.css'

export function Profile() {
    return (
        <div>
            <div>
                <img
                    className={classes.lines}
                    src="https://img.freepik.com/free-photo/wavy-black-and-white-background_23-2150530910.jpg"
                    alt=""
                />
            </div>
            <div>ava + discription</div>
            <MyPosts />
        </div>
    )
}
