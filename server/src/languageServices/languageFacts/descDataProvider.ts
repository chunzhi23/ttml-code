import { getElementDescriptions } from "./data/ttmlTags";

export interface AttributeDescription {
  name: string;
  description: string;
}

export interface ElementDescription {
  name: string;
  description: string;
  attributes: AttributeDescription[];
}

export function getTagHover(tagName: string): string | null {
  const elementDescriptions = getElementDescriptions();
  const description = elementDescriptions.find(
    (element) => element.name === tagName
  );
  return description ? formatHover(description.description) : null;
}

export function getAttributeHover(attributeName: string): string | null {
  const elementDescriptions = getElementDescriptions();
  for (const element of elementDescriptions) {
    const attribute = element.attributes.find(
      (attr) => attr.name === attributeName
    );
    if (attribute) {
      return formatHover(attribute.description);
    }
  }
  return null;
}

function formatHover(description: string): string {
  // Format the hover text as needed
  return description;
}
