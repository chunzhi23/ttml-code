import { Position } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { TTMLNode } from "../ttmlLanguageTypes";

export function findTTMLDocumentHighlights(
  document: TextDocument,
  position: Position,
  rootNode: TTMLNode
): Position[] {
  const offset = document.offsetAt(position);
  const node = findNodeAtOffset(document, offset, rootNode);

  if (!node) {
    return [];
  }

  // Check if the position is within an attribute
  if (node.attributes) {
    for (const attributeName in node.attributes) {
      if (
        Object.prototype.hasOwnProperty.call(node.attributes, attributeName)
      ) {
        const attributeValue = node.attributes[attributeName];
        const attributeStart = document.offsetAt(node.start) + node.tag.length + 1;
        const attributeEnd = attributeStart + attributeName.length;

        if (offset >= attributeStart && offset <= attributeEnd) {
          // Return positions for highlighting the entire attribute
          return [
            document.positionAt(attributeStart),
            document.positionAt(attributeEnd),
          ];
        }
      }
    }
  }

  // Check if the position is within a tag
  if (offset >= document.offsetAt(node.start) && offset <= document.offsetAt(node.end)) {
    // Return positions for highlighting the entire tag
    return [node.start, node.end];
  }

  return [];
}

function findNodeAtOffset(document: TextDocument, offset: number, node: TTMLNode): TTMLNode | null {
  if (offset >= document.offsetAt(node.start) && offset < document.offsetAt(node.end)) {
    for (const childNode of node.children) {
      const foundNode = findNodeAtOffset(document, offset, childNode);
      if (foundNode) {
        return foundNode;
      }
    }
    return node;
  }
  return null;
}
