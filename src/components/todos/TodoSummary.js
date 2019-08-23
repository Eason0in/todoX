import React, { Component } from 'react'

class TodoSummary extends Component {
  state = {
    todo: ''
  }
  render() {
    return (
      <li className="col m4">
        <div className="card todo-summary">
          <div className="card-content">
            <span className="card-title">1.Project Name</span>

            <p>
              完成個人網頁(首頁重做)https://s3.envato.com/files/257111114/Preview%20Image%20Set%20(v11%20Update)/Slide24.JPG
            </p>
          </div>
          <div className="card-action">
            <a href="#!" className="todo-actions">
              <i className="material-icons ">done</i>
            </a>
            <a href="#!" className="todo-actions">
              <i className="material-icons">mode_edit</i>
            </a>
          </div>
        </div>
      </li>
    )
  }
}

export default TodoSummary
