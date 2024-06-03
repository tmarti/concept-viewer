export const CardHoveredConcept = ({
  text,
  color,
}: {
  text: string,
  color: string,
}) => {
  return (
    <h4 style={{
        border: '1px black solid',
        borderRadius: '8px',
        width: 'fit-content',
        padding: '8px',
    }}>
        <em>{text}</em>
    </h4>
  );
}