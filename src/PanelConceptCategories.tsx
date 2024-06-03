import { ConceptCategoriesDto } from "./ConceptCategories";
import { ListItemConcept } from "./ListItemConcept";
import { ConceptDto, getColor } from "./interfaces";
import Select from 'react-select'

export const PanelConceptCategories = ({
  conceptCategories,
  concepts,
  setConcepts,
  onCalculateEmbeddings,
}: {
  conceptCategories: ConceptCategoriesDto,
  concepts: ConceptDto[],
  setConcepts: (conceptCategories: ConceptDto[]) => void,
  onCalculateEmbeddings: () => void,
}) => {

  const onSelectionChange = (value:string) => {
    if (!(value in conceptCategories)) {
      return;
    }

    setConcepts(
        conceptCategories[value].map((x, index) => {
        return {
          label: x.label,
          description: x.description,
          color: getColor(index),
          embeddings: [],
          position: [0, 0, 0],
          index
        }
      })
    );
  };

  return (
    <>
    <h3 style={{textAlign: 'left'}}># Categories</h3>
        <Select 
            // ref={select}
            placeholder="pick a concept..."
            isSearchable={false}
            options={Object.keys(conceptCategories).map(
              x => {
                return {
                  value: x,
                  label: x,  
                };
              }
            )}
            onChange={ev => onSelectionChange(ev?.value || "")}
        />
        <h2 style={{height:'300px', overflow:'scroll'}}>
            {concepts.map(x => (
                <ListItemConcept
                  color={x.color}
                  inputValue={x.label}
                  inputId={`prompt-${x.index}`}
                  title={x.description}
                  key={`prompt-${x.index}`}
                />
            ))}
        </h2>
        <div style={{ textAlign: 'center'}} >
          <button onClick={onCalculateEmbeddings}>
            Represent Category
          </button>
        </div>
    </>
  );

}