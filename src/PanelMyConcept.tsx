import { ListItemConcept } from "./ListItemConcept";

export const PanelMyConcept = ({
  onChangeMyConcept,
}: {
  onChangeMyConcept: (concept: string) => void,
}) => {
  return (
    <>
        <h3 style={{textAlign:'left' }}># Your Concept</h3>
        <h2>
          <ListItemConcept
            color='black'
            inputId={`prompt-test`}
          />
        </h2>
        <div style={{textAlign: 'center'}}>
            <button onClick={() => {
                onChangeMyConcept(
                  (document.getElementById(`prompt-test`) as HTMLInputElement).value
                );
            }}>
            Represent Concept
            </button>
        </div>
    </>
  );

}