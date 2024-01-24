import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, date, isLiked} = commentDetails

  const intial = name ? name[0].toUppercase() : ''

  const onLikedButton = () => {
    const {onLikesButton} = props
    onLikesButton(id)
  }

  const onDelete = () => {
    const {onDeleteComment} = props
    onDeleteComment(id)
  }

  const LikeTextLike = isLiked ? 'active button' : 'button'

  const LikeImages = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  return (
    <div>
      <li className="list-comments">
        <div className="dta">
          <div>
            <p className="name">{name}</p>
            <p>{comment}</p>
          </div>
          <div>
            <p className="posted-time">{postedTime}</p>
          </div>
        </div>
        <div className="onEvents">
          <button
            type="button"
            className={LikeTextLike}
            onClick={onLikedButton}
          >
            <img src={LikeImages} alt="like" />
          </button>
          <button type="button" className="delete-btn" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr />
      </li>
    </div>
  )
}
export default CommentItem
