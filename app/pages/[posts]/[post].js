import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import termsFrPath from './Terms.fr.md'

class Terms extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(termsFrPath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  // <ReactMarkdown /> にstateを渡してレンダリング
  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default Terms
