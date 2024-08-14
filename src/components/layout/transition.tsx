
import React from "react"
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const timeout = 350
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-out`,
    opacity: 0,
  },
}

const Transition = (props: any) => {

    const { children, location } = props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{ enter: timeout, exit: timeout }}
        >
          { status => (
            //@ts-ignore
            <div style={{...getTransitionStyles[status]}}>{children}</div>
        )}
        </ReactTransition>
      </TransitionGroup>
    )

}

export default Transition
