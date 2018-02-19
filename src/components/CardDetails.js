import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


class CardDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    console.log(this.context.router.route.match.params[0])
  }


  render() {
    return (
      <div>
      </div>
    )
  }
}

export default CardDetails;