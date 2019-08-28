import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todoActions'

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.M = window.M
    this.state = {
      title: '',
      content: '',
      projectId: '',
      order: 1
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    let modalElems = document.querySelectorAll('.modal')
    this.modalInstances = this.M.Modal.init(modalElems, {})
  }

  handleChange = e => {
    let { id, value } = e.target
    if (id === 'order') {
      value = parseInt(value)
    }
    this.setState({
      [id]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(
      (state, props) => {
        return {
          ...state,
          projectId: props.projectId
        }
      },
      () => {
        this.props.createTodo(this.state)

        this.setState({
          title: '',
          content: '',
          projectId: '',
          order: 1
        })

        this.modalInstances[0].close()
      }
    )
  }
  render() {
    return (
      <li className="col m12">
        <div id="createModal" className="modal">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create new Todo</h5>
            <div className="input-field">
              <input id="title" type="text" value={this.state.title} onChange={this.handleChange} />
              <label htmlFor="title">Title</label>
            </div>

            <div>
              <label htmlFor="order">Order</label>
              <input id="order" type="number" value={this.state.order} onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <textarea
                id="content"
                className="materialize-textarea"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="input-field">
              <button className="btn z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo)
