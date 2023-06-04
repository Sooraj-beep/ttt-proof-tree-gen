import React, { Children } from "react";
import Tree from "react-d3-tree";
import { RenderForeignObjectNode } from "./ProofTreeNode";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const proofTreeData = {
  values: "CEO",
  children: [
    {
      values: "Manager",
    },
    {
      values: "Manager",
    }
  ]
};

export default function ProofTree(graphData) {
  const nodeSize = { x: 250, y: 250 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -125,
    y: -10,
  };

  console.log("graphData from proofTree", graphData);
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div style={{ height: "100vh", width: "100vw" }}>
      <Tree
        nodeSize={nodeSize}
        data={graphData}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) =>
          RenderForeignObjectNode({ ...rd3tProps, foreignObjectProps, graphData})
        }
      />
    </div>
  );
}
