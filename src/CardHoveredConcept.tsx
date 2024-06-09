export const CardHoveredConcept = ({
  text,
}: {
  text: string,
}) => {
  return (
    <div className="CardHoveredConcept">
        <strong><em>{text}</em></strong>
    </div>
  );
}