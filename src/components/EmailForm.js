import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Boom!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" name="my-move" onSubmit={this.onSubmit} method="post" data-netlify="true" action="">
        <input type="hidden" name="form-name" value="my-move" />
        <input
          type="text"
          name="my-move-text"
          id="my-move-text"
          placeholder="your move . . ."
        />
        <input type="submit" value="dispatch" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
