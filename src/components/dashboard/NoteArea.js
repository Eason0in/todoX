import React, { Component } from 'react'

class NoteArea extends Component {
  state = {
    textarea: ''
  }
  handleClear = e => {
    e.preventDefault()
    this.setState({ textarea: '' })
  }
  handleChange = e => {
    let { id, value } = e.target
    this.setState({
      [id]: value
    })
  }
  render() {
    return (
      <div className="section note-area">
        <div className="input-field white">
          <div>
            <h5 className="grey-text text-darken-3">
              暫存區
              <a href="this.handleDelete" className="pink-text text-lighten-2" onClick={this.handleClear}>
                <i className="material-icons right">delete</i>
              </a>
            </h5>

            <textarea
              value={this.state.textarea}
              onChange={this.handleChange}
              id="textarea"
              placeholder="Any temporary data you want to record..."
              cols="100"
              rows="100"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default NoteArea
