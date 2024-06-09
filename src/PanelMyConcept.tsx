import { ListItemConcept } from "./ListItemConcept";

export const PanelMyConcept = ({
  onChangeMyConcept,
}: {
  onChangeMyConcept: (concept: string) => void,
}) => {
  return (
    <div className='PanelMyConcept'>
        <h3 style={{textAlign: 'left'}} className='HiddenOnMobile'># Your concept</h3>
        <h2>
          <ListItemConcept
            color='black'
            inputId={`prompt-test`}
            onChanged={onChangeMyConcept}
          />
        </h2>
        <div style={{textAlign: 'center'}} className="HiddenOnMobile">
            <button onClick={() => {
                onChangeMyConcept(
                  (document.getElementById(`prompt-test`) as HTMLInputElement).value
                );
            }}>
            Represent Concept
            </button>
        </div>
    </div>
  );

}