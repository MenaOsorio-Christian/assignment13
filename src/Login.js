import React, {Component, component} from 'react'


// This is the login form
export default class Login extends Component {
    render() {
        return (
            <div className="login-form">
            <h3>Log In</h3>
            <form>
              <div>
                <label>Username:</label>
                <input type="text" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )
    }
}