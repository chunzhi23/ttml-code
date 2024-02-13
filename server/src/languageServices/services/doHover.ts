import { Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

import {
  getTagHover,
  getAttributeHover,
} from "../languageFacts/descDataProvider";
import { TTMLNode, findNodeAtPosition, isPositionInRange } from "../ttmlLanguageService";

function parseDocument(document: TextDocument): TTMLNode {
  const rootNode: TTMLNode = {
    tag: "root",
    start: { line: 0, character: 0 },
    end: document.positionAt(document.getText().length),
    endTagStart: -1,
    attributes: {},
    children: [],
  };
  return rootNode;
}

export async function doTTMLHover(
  document: TextDocument,
  position: Position
): Promise<string | null> {
  const rootNode: TTMLNode = parseDocument(document);
  const node = findNodeAtPosition(document, position, rootNode);
  if (!node || !node.tag) {
    return null;
  }

  if (node.endTagStart && position.line >= node.endTagStart) {
    return getTagHover(node.tag.toLowerCase());
  }

  const tagNameRange = getTagNameRange(document, position);
  if (tagNameRange) {
    return getTagHover(node.tag.toLowerCase());
  }

  const attribute = getAttributeAtPosition(document, node, position.character);
  if (attribute) {
    return getAttributeHover(attribute.name.toLowerCase());
  }

  return null;
}

function getTagNameRange(document: TextDocument, position: Position): Range | null {
  const text = document.getText();
  let start = position.character;
  let end = position.character;

  // Move start position to the beginning of the tag name
  while (start > 0 && !isSpaceOrClosingAngleBracket(text[start - 1])) {
    start--;
  }

  // Move end position to the end of the tag name
  while (end < text.length && !isSpaceOrClosingAngleBracket(text[end])) {
    end++;
  }

  // Check if it's a self-closing tag
  if (end < text.length && text[end] === "/") {
    end++; // Move end position past the forward slash
  }

  // Create range for the tag name
  return {
    start: document.positionAt(start),
    end: document.positionAt(end),
  };
}

function isSpaceOrClosingAngleBracket(char: string): boolean {
  return char === " " || char === ">";
}

export function getAttributeAtPosition(
  document: TextDocument,
  node: TTMLNode,
  cursor: number
): { name: string; value: string } | null {
  // Ensure the node is valid and has attributes
  if (!node || !node.attributes) {
    return null;
  }

  // Find the attribute closest to the cursor position
  let closestAttribute: { name: string; value: string } | null = null;
  let minDistance = Number.MAX_VALUE;

  for (const attributeName in node.attributes) {
    if (Object.prototype.hasOwnProperty.call(node.attributes, attributeName)) {
      const attributeValue = node.attributes[attributeName];
      const attributeStart = document.offsetAt(node.start) + node.tag.length + 1;
      const attributeEnd = attributeStart + attributeName.length;

      // Check if the cursor position falls within the attribute
      if (cursor >= attributeStart && cursor <= attributeEnd) {
        // Calculate the distance from the cursor to the attribute
        const distance = Math.min(Math.abs(cursor - attributeStart), Math.abs(cursor - attributeEnd));

        // Update the closest attribute if this one is closer
        if (distance < minDistance) {
          closestAttribute = { name: attributeName, value: attributeValue };
          minDistance = distance;
        }
      }
    }
  }

  return closestAttribute;
}
