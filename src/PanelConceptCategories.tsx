import { ConceptCategoriesDto } from "./ConceptCategories";
import { ListItemConcept } from "./ListItemConcept";
import { ConceptDto, getColor } from "./interfaces";
import Select from 'react-select'

export const PanelConceptCategories = ({
  conceptCategories,
  concepts,
  setConcepts,
}: {
  conceptCategories: ConceptCategoriesDto,
  concepts: ConceptDto[],
  setConcepts: (conceptCategories: ConceptDto[]) => void,
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
    <div className='PanelConceptCategories'>
        <h3 style={{textAlign: 'left'}} className='HiddenOnMobile'># Categories</h3>
        <Select 
            // ref={select}
            className="SelectConcept"
            placeholder="Select a category..."
            isSearchable={false}
            menuPortalTarget={document.body}
            options={Object.keys(conceptCategories).map(
              x => {
                return {
                  value: x,
                  label: x,  
                };
              }
            )}
            onChange={ev => {
              onSelectionChange(ev?.value || "");
              // setTimeout(onCalculateEmbeddings, 500);
            }}
        />
        <h2 style={{height:'300px', overflow:'scroll'}} className="HiddenOnMobile">
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
        {/* <div style={{ textAlign: 'center'}} >
          <button onClick={onCalculateEmbeddings}>
            Represent Category
          </button>
        </div> */}
    </div>
  );

}