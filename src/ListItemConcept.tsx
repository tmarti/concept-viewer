export const ListItemConcept = ({
    color, title, inputId, inputValue, onChanged
}: {
    color: string,
    title?:string,
    inputId: string,
    inputValue?:string,
    onChanged?:(newValue: string) => void,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '3px' }}>
        <span
            className="HiddenOnMobile"
            style={{
                height: '20px', // Ensures the circle is 20px in diameter
                width: '20px',  // Matching width and height for a perfect circle
                backgroundColor: color,
                borderRadius: '10px',  // Half of width and height for full roundness
                marginLeft: '5px' // Space between the input and the circle
            }}
            title={title||""}
        />
        &nbsp;
        <input
            className='ConceptInput'
            style={{
            width: '180px',
            }}
            id={inputId}
            value={inputValue}
            name="test"
            readOnly={!!inputValue}
            placeholder=" Type your concept..."
            onKeyDown={e => {
                if (onChanged && e.key == 'Enter') {
                    onChanged(e.currentTarget.value as string);
                }
            }}
        />
    </div>
  );
}