export const CardHoveredConcept = ({
  text,
}: {
  text: string,
}) => {
  return (
    <pre className="CardHoveredConcept">
        <strong><em>{text}</em></strong>
    </pre>
  );
}