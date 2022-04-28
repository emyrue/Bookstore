import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input name="title" />
        <input name="author" />
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

export default Add;
