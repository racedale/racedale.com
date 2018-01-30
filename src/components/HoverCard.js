import React, { Component } from 'react';
import Rx from 'rxjs/Rx';
import styled from 'styled-components';

const StyledImg = styled.img`
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.8);
  transform-style: preserve-3d;
`

class HoverCard extends Component {

  componentDidMount() {
    // "this.hoverCard" currently prevents this logic from being put into another file
    const docElm = this.hoverCard
    const { clientWidth, clientHeight } = docElm

    const mouseMove$ = Rx.Observable
    .fromEvent(docElm, 'mousemove')
    .map(event => ({
      x: event.clientX,
      y: event.clientY
    }))

    const touchMove$ = Rx.Observable
    .fromEvent(docElm, 'touchmove')
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
      const rotX = Math.round(((pos.y / clientHeight * -35) + 45) * 100) / 100
      const rotY = Math.round(((pos.x / clientWidth * 35) - 25) * 100) / 100

      // "this.hoverCard" currently prevents this logic from being put into another file
      this.hoverCard.style.cssText = `
        transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
      `
    })
  }

  render() {
    return (
      <StyledImg {...this.props} innerRef={card => this.hoverCard = card} alt="" />
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