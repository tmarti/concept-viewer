export const CardHoveredConcept = ({
  text,
}: {
  text: string,
}) => {
  return (
    <div className="CardHoveredConcept HiddenOnMobile">
        <strong><em>{text}</em></strong>
    </div>
  );
}