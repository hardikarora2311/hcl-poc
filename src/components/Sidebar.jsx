import React from 'react';
import Image from 'next/image'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"


export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      <div className="dndnode-new " onDragStart={(event) => onDragStart(event, 'custom1')} draggable>
        <Image src={icon2} alt='ec2 image' width={50}/>
      </div>
      <div className="dndnode-new " onDragStart={(event) => onDragStart(event, 'custom2')} draggable>
        <Image src={icon1} alt='ec2 image' height={50}/>
      </div>
    </aside>
  );
};
