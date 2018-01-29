import React, { Component } from 'react';
import Rx from 'rxjs/Rx';

const style = {
  "boxShadow": "0 1rem 3rem rgba(black, 0.2)",
  "transformStyle": "preserve-3d"
}

class HoverCard extends Component {
  constructor(props) {
    super(props)

    const docElm = document.documentElement
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
      const rotX = (pos.y / clientHeight * -50) + 25
      const rotY = (pos.x / clientWidth * 50) - 25

      // "this.hoverCard" currently prevents this logic from being put into another file
      this.hoverCard.style.cssText = `
        transform: rotateX(${rotX}deg) rotateY(${rotY}deg);
      `
    })
  }

  render() {
    return (
      <img {...this.props} ref={ card => this.hoverCard = card } alt="" style={style} />
    )
  }
}

// utility
function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1,
  };
}

export default HoverCard;