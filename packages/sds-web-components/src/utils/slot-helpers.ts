type GetSlotComponentsConfig = {
  slot: HTMLSlotElement;
  tagName: string;
};
export const getSlotComponents = <T>({ slot, tagName }: GetSlotComponentsConfig): T[] => {
  const elements = slot.assignedElements({ flatten: true });
  return elements.filter(el => el.tagName.toLowerCase() === tagName.toLowerCase()) as T[];
};
