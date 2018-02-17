import React, { Component } from 'react';
import PropTypes from "prop-types";
import Rx from 'rxjs/Rx';
import styled from 'styled-components';

const StyledImg = styled.img`
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.8);
  transform-style: preserve-3d;
  cursor: pointer;
`

const StyledLabel = styled.label`
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.8);
  transform-style: preserve-3d;
  background-color: var(--bright-green);
  top: 22vw;
  color: var(--dark);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  padding: 1rem;
  position: absolute;
  min-width: 10rem;
  width: 20vw;
  z-index: 1;
`

class HoverCard extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    // "this.hoverCard" currently prevents this logic from being put into another file
    const cardPos = this.hoverCard.getBoundingClientRect()
    // const { clientWidth: cardWidth, clientHeight: cardHeight } = this.hoverCard
    const { clientWidth: docWidth, clientHeight: docHeight } = document.documentElement
    // const widthRatio = cardWidth / docWidth
    // const heightRatio = cardHeight / docHeight

    const mouseMove$ = Rx.Observable
    .fromEvent(document.documentElement, 'mousemove')
    .map(event => ({
      x: event.clientX,
      y: event.clientY
    }))

    const touchMove$ = Rx.Observable
    .fromEvent(document.documentElement, 'touchmove')
    .map(event => ({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    }))


    const animationFrame$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame)
    const move$ = Rx.Observable.merge(mouseMove$, touchMove$)
    const smoothMove$ = animationFrame$
    .withLatestFrom(move$, (frame, move) => move)
    .scan((current, next) => lerp(current, next))

    smoothMove$.subscribe(pos => {
      // needs some math to force the values to end up being between a range of -25 and 25
      // const rotX = Math.round((((pos.y - cardPos.top) / (this.hoverCard.clientHeight * -0.05)) + 10) * 100) / 100
      // const rotY = Math.round((((pos.x - cardPos.left) / (this.hoverCard.clientWidth * 0.05)) - 10) * 100) / 100
      const rotX = Math.round(((pos.y  / docHeight * -30) + 15) * 100) / 100
      const rotY = Math.round(((pos.x / docWidth * 30) - 15) * 100) / 100

      // "this.hoverCard" currently prevents this logic from being put into another file
      this.hoverCard.style.cssText = `
        transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
      `
      this.hoverLabel.style.cssText = `
        transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
      `
    })
  }

  loadCard() {
    this.context.router.history.push(this.props.card.cardTitle)
  }

  render() {
    return (
      <div {...this.props} style={{position: "relative"} }>
        <StyledLabel
          innerRef={label => this.hoverLabel = label}>
          {this.props.card.cardTitle}
        </StyledLabel>
        <StyledImg {...this.props}
          src={this.props.card.cardImage}
          innerRef={card => this.hoverCard = card}
          onClick={this.loadCard.bind(this)}
          alt=""
        />
      </div>
    )
  }
}

// linear interpolation utility: https://codepen.io/rachsmith/post/animation-tip-lerp
function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1,
  };
}

export default HoverCard;