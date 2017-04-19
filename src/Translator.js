import React, { Component } from 'react';

const Translator = (ComposedComponent) =>
  class Container extends Component {
    constructor(props) {
      super(props)

      this.translate = this.translate.bind(this)
    }

    translate(input) {
      return input.replace(/o/g, 'ooo')
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          translate={this.translate}
        />
      )
    }
  }

export default Translator
