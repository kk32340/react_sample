import React from 'react';
import  {
  Controls,
  Background,  
} from 'reactflow';

import 'reactflow/dist/style.css';
import { useFlowContext } from './context/FlowContext';
import { Output } from './components/Output';
import PositionNode from "./components/Position";
import RotationNode from "./components/Rotation";
import ScaleNode from "./components/Scale";


import ReactFlow  from 'reactflow';

const nodeTypes={
  Output:Output,
  Position: PositionNode,
  Rotation: RotationNode,
  Scale: ScaleNode

}






export default function App() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect
} = useFlowContext();


  // onload = (reactFlowInstance) => {
  //   reactFlowInstance.fitView();
  //   console.log('flow loaded:', reactFlowInstance);
  // }


  const reactFlowInstance = useReactFlow();

  const handleNodeClick = useCallback((event, node) => {
    // Fit the view to the clicked node
    reactFlowInstance.fitView({ nodes: [node] });
  }, [reactFlowInstance]);


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1}  className='bg-background'/>
      </ReactFlow>
    </div>
  );
}