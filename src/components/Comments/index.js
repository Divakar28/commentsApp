import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

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
    }))
  }

  render() {
    const {userInput, commentInput, commentList} = this.state
    console.log(userInput)
    console.log(commentInput)

    return (
      <div>
        <h1>Comments</h1>
        <p>Say something about 4.0 Technologies</p>
        <form onSubmit={this.AddComment}>
          <div className="bg">
            <div>
              <input placeholder="Your Name" onChange={this.onChangeName} />
              <br />
              <textarea
                rows="6"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <br />
              <button type="button" className="add-button">
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
        <p>comments</p>
        <ul>{commentList}</ul>
      </div>
    )
  }
}

export default Home
