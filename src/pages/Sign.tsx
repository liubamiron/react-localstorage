import React, { Component } from 'react';
//import { render } from 'react-dom';

// function Sign(this: string) {
//     // const [state, setState] = useState([]);
//
//     return (
//         <div className="Sign"> Hello
//         </div>
//     );
// }
export default class Sign extends Component {
  state = {
    user: '',
    rememberMe: false,
  };

  handleChange = (event: any) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem('rememberMe', String(rememberMe));
    localStorage.setItem('user', rememberMe ? user : '');
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    this.setState({ user, rememberMe });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User: <input name="user" value={this.state.user} onChange={this.handleChange} />
        </label>
        <label>
          <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" />{' '}
          Remember me
        </label>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}
