import { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";
import Image from 'next/image'
import icon2 from "../assets/icon2.png";

// const handleStyle = { left: 10 };

function InstanceNode1({ data }) {
  // const onChange = useCallback((evt) => {
  //   console.log(evt.target.value);
  // }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-solid border-2 border-sky-500">
        <Image src={icon2} alt="ec2 image" width={50} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </>
  );
}

export default memo(InstanceNode1);
