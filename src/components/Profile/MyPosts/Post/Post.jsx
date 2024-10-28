import s from './Post.module.css'

export function Post(props) {
    return (
        <div className={s.item}>
            <img
                src="https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg"
                alt=""
            />
            {props.message}
            <div>
                <span>likes:</span> {props.likesCount}
            </div>
        </div>
    )
}
