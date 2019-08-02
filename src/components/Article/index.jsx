import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <div>
          <h3>Header</h3>
          <p>Text about link</p>
          <a href="#">Link</a>
        </div>
      </article>
    );
  }
}

export default Article;
