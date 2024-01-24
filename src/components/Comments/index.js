import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Home extends Component {
  state = {userInput: '', commentInput: '', commentList: []}

  onChangeName = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onLikesButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    this.setState({commentList: commentList.filter(each => each.id !== id)})
  }

  renderCommentList = () => {
    const {commentList} = this.state

    return commentList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        onLikesButton={this.onLikesButton}
        onDeleteComment={this.onDeleteComment}
      />
    ))
  }

  AddComment = event => {
    event.preventDefault()
    const {userInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      name: userInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      intialclass: initialContainerBackgroundClassNames,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      userInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {userInput, commentInput, commentList} = this.state
    console.log(userInput)
    console.log(commentInput)
    console.log(commentList)

    return (
      <div>
        <h1>Comments</h1>
        <p>Say something about 4.0 Technologies</p>
        <form onSubmit={this.AddComment}>
          <div className="bg">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={userInput}
              />
              <br />
              <textarea
                rows="6"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={commentInput}
              />
              <br />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
        </form>
        <hr />
        <p>
          <span className="comments-length">{commentList.length}</span>comments
        </p>
        <ul>{this.renderCommentList()}</ul>
      </div>
    )
  }
}

export default Home
