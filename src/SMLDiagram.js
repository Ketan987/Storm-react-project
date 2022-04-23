// importing react and react-diagram
import React from "react";
import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";

// local imports
import { InputNodeWerk } from "./components/InputNodeWerk";
import { OutputNodeWerk } from "./components/OutputNodeWerk";
import { NodeCreatorWidget } from "./components/node-creator-widget/NodeCreatorWidget";

// Main Diagram Function
function SMLDiagram() {
  const engine = createEngine();
  engine.setModel(new DiagramModel());

  // Create custom node
  engine.getNodeFactories().registerFactory(new InputNodeWerk());
  engine.getNodeFactories().registerFactory(new OutputNodeWerk());

  return <NodeCreatorWidget engine={engine} />;
}

export default SMLDiagram;
