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

function App() {
  let [embeddingModel] = useState(new EmbeddingModel());
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [concepts, setConcepts] = useState([] as ConceptDto[]);
  const [spherePos, setSpherePos] = useState([0, 0, 0]);

  const fnChangeCustomConcept = async (value: string) => {
    setSpherePos(
      await embeddingModel.calculateProjection(value)
    );
  };

  const fnInitializeEmbeddingsBase = async () => {
    const positions = await embeddingModel.initializeProjection(
      concepts.map(x => x.label)
    );

    concepts.map (x => {
      x.position = positions[x.index];
    });

    setConcepts(concepts.slice());
  };


  setTimeout(
    () => {
      (document.getElementById('three-canvas') as HTMLCanvasElement).style.height = '100%';
    },
    400
  )

  return (
    <>
      <ItemOpenAiKey/>

      <div id="main-div">
        <div id="left-pane">
          <PanelConceptCategories
            conceptCategories={ConceptCategories}
            concepts={concepts}
            setConcepts={setConcepts}
            onCalculateEmbeddings={fnInitializeEmbeddingsBase}
          />
          <PanelMyConcept
            onChangeMyConcept={fnChangeCustomConcept}
          />
          {hoveredIndex != -1 &&
            <CardHoveredConcept
              text={`${concepts[hoveredIndex].label}`}
              color={concepts[hoveredIndex].color}
            />
          }
        </div>
        <div id="right-pane">
          <Panel3D
            concepts={concepts}
            spherePos={spherePos}
            onHoverConcept={setHoveredIndex}/>
        </div>
      </div>
    </>
  )
}

export default App
