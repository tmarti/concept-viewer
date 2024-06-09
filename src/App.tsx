import {  useState } from 'react'
import './App.css'
import { Panel3D } from './Panel3D';
import { ConceptDto } from './interfaces';
import { PanelConceptCategories } from './PanelConceptCategories';
import { PanelMyConcept } from './PanelMyConcept';
import { CardHoveredConcept } from './CardHoveredConcept';
import { ConceptCategories } from './ConceptCategories';
import EmbeddingModel from './llm';
import { ItemOpenAiKey } from './ItemOpenAiKey';

function dist(a: number[], b: number[]) {
  return Math.hypot(a[0]-b[0], a[1]-b[1], a[2]-b[2]);
}

function App() {
  let [embeddingModel] = useState(new EmbeddingModel());
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [topIndexes, setTopIndexes] = useState([-1, -1, -1]);
  const [concepts, _setConcepts] = useState([] as ConceptDto[]);
  const [spherePos, setSpherePos] = useState([0, 0, 0]);

  const fnChangeCustomConcept = async (value: string) => {
    const position = await embeddingModel.calculateProjection(value);

    setSpherePos(position);

    let distances: {index: number, distance: number}[] = [];

    concepts.forEach(c => {
      distances.push({
        index: c.index,
        distance: dist(position, c.position)
      });
    });

    distances.sort((a, b) => a.distance - b.distance);

    // setHoveredIndex(distances[0].index);
    setTopIndexes(distances.map(x => x.index).slice(0, 3));
  };

  const setConcepts = (c: ConceptDto[]) => {
    fnInitializeEmbeddingsBase(c);
  };

  const fnInitializeEmbeddingsBase = async (c: ConceptDto[]) => {
    setTopIndexes([-1, -1, -1]);
    
    const positions = await embeddingModel.initializeProjection(
      c.map(x => x.label)
    );

    c.map (x => {
      x.position = positions[x.index];
    });

    _setConcepts(c.slice());
  };

  return (
    <>
      <ItemOpenAiKey/>

      <div id="main-div">
        <div id="left-pane">
          <PanelConceptCategories
            conceptCategories={ConceptCategories}
            concepts={concepts}
            setConcepts={setConcepts}
          />
          <PanelMyConcept
            onChangeMyConcept={fnChangeCustomConcept}
          />
        </div>
        <div id="right-pane">
          <Panel3D
            concepts={concepts}
            spherePos={spherePos}
            onHoverConcept={setHoveredIndex}
            onSelectConcept={setHoveredIndex}/>
        </div>
      </div>
      {true !== true && hoveredIndex != -1 && <CardHoveredConcept text={`${concepts[hoveredIndex].label}`}/>}
      {topIndexes[0] != -1 && <CardHoveredConcept text={`1. ${concepts[topIndexes[0]].label}\n2. ${concepts[topIndexes[1]].label}\n3. ${concepts[topIndexes[2]].label}`}/>}
    </>
  )
}

export default App
