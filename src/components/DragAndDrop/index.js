import React from "react";
import Draggable from 'react-draggable'
import { TeamatesDiv } from "./styles";

export default function DragAndDrop({ teamates }) {
 

  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }


  return (
    <TeamatesDiv>

      <Draggable
        axis="y"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onDrag={eventHandler}
        >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </TeamatesDiv>
  )
}