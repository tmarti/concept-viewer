export interface ConceptDto {
  /**
   * The label displayed in the concept list.
   * 
   * Will also be used to generate the embedding for the concept.
   */
  label: string,
  /**
   * The description displayed in the concept list's tooltip
   */
  description: string,
  /**
   * The color with which to display the concept.
   */
  color: string,
  /**
   * The calculated embedding for the concept.
   */
  embeddings: number[],
  /**
   * The 3D position once the embedding is projected.
   */
  position: number[],
  /**
   * A 0-based counter for the concept within the category.
   */
  index: number,
};

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "gray",
  "orange",
  "pink",
  "lightblue"
];

export function getColor(i: number) {
  return colors[i % colors.length];
}
  