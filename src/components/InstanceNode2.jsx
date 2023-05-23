import { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";
import Image from 'next/image'
import icon1 from "../assets/icon1.png";

const handleStyle = { left: 10 };

function InstanceNode2({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-solid border-2 border-sky-500">
        <Image src={icon1} alt="ec2 image" height={50} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </>
  );
}

export default memo(InstanceNode2);
