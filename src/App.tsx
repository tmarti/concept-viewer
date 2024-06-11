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
  let sqDist = 0;

  for (let i = 0; i < a.length; i++) {
    sqDist += Math.pow(a[i] - b[i], 2);
  }

  return Math.sqrt(sqDist);
}

function App() {
  let [embeddingModel] = useState(new EmbeddingModel());
  const [hoveredIndex, _setHoveredIndex] = useState(-1);
  const [topIndexes, setTopIndexes] = useState([-1, -1, -1]);
  const [concepts, _setConcepts] = useState([] as ConceptDto[]);
  const [spherePos, setSpherePos] = useState([0, 0, 0]);

  const setHoveredIndex = (value: number) => {
    if (concepts[value]) {
      alert(concepts[value].description);
    }
    _setHoveredIndex(value);
  };

  const fnChangeCustomConcept = async (value: string) => {
    const { position } = await embeddingModel.calculateProjection(value);

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

  function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Call the function to set the variable initially
  adjustHeight();
  
  // Re-calculate on window resize
  window.addEventListener('resize', adjustHeight);

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
            disabled={concepts.length == 0}
          />
        </div>
        <div id="right-pane">
          <Panel3D
            concepts={concepts}
            spherePos={spherePos}
            onHoverConcept={_setHoveredIndex}
            onSelectConcept={setHoveredIndex}/>
        </div>
      </div>
      {true !== true && hoveredIndex != -1 && <CardHoveredConcept text={`${concepts[hoveredIndex].label}`}/>}
      {topIndexes[0] != -1 && <CardHoveredConcept text={`1. ${concepts[topIndexes[0]].label}\n2. ${concepts[topIndexes[1]].label}\n3. ${concepts[topIndexes[2]].label}`}/>}
    </>
  )
}

export default App
