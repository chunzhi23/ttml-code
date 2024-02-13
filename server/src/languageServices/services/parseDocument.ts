import { Position } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { DOMParser } from "xmldom";
import { TTMLNode } from "../ttmlLanguageTypes";

interface ParsedTTMLElement {
  tagName: string;
  attributes: Record<string, string>;
  children: ParsedTTMLElement[];
}

export function parseTTMLDocument(document: TextDocument): ParsedTTMLElement {
  const text = document.getText();

  // Parse the TTML document
  const parsedTTML: ParsedTTMLElement = parseTTML(text);

  return parsedTTML;
}

export function parseTTMLDocumentAsNode(document: TextDocument): TTMLNode {
  // Call the original function to parse the TTML document
  const parsedTTML: ParsedTTMLElement = parseTTMLDocument(document);

  // Assuming you have the start and end positions of the document
  const start: Position = { line: 0, character: 0 };
  const end: Position = document.positionAt(document.getText().length);

  // Convert the ParsedTTMLElement to a Node
  const rootNode: TTMLNode = convertParsedTTMLToNode(parsedTTML, start, end);

  return rootNode;
}

export function convertParsedTTMLToNode(parsedTTML: ParsedTTMLElement, start: Position, end: Position): TTMLNode {
  const rootNode: TTMLNode = {
    tag: parsedTTML.tagName,
    start: start,
    end: end,
    endTagStart: -1, // Assuming no end tag for the root node
    attributes: parsedTTML.attributes,
    children: [],
  };

  // Recursively convert children
  let childStart: Position = { line: start.line + 1, character: 0 }; // Start of the first child
  for (const child of parsedTTML.children) {
    const childEnd: Position = { line: childStart.line + 1, character: 0 }; // End of the child
    const childNode = convertParsedTTMLToNode(child, childStart, childEnd);
    rootNode.children.push(childNode);
    childStart = childEnd; // Update start position for next child
  }

  return rootNode;
}

function parseTTML(text: string): ParsedTTMLElement {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");

  return parseElement(doc.documentElement);
}

function parseElement(element: Element): ParsedTTMLElement {
  const parsedElement: ParsedTTMLElement = {
    tagName: element.tagName,
    attributes: {},
    children: [],
  };

  // Parse attributes
  if (element.attributes) {
    for (let i = 0; i < element.attributes.length; i++) {
      const attribute = element.attributes[i];
      parsedElement.attributes[attribute.name] = attribute.value;
    }
  }

  // Parse children
  if (element.childNodes) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i];
      if (child.nodeType === child.ELEMENT_NODE) {
        const parsedChild = parseElement(child as Element);
        parsedElement.children.push(parsedChild);
      } else if (
        child.nodeType === child.TEXT_NODE &&
        child.textContent?.trim()
      ) {
        // Include non-empty text nodes as children
        parsedElement.children.push({
          tagName: "text",
          attributes: {},
          children: [{ tagName: "#text", attributes: {}, children: [] }],
        });
      }
    }
  }

  return parsedElement;
}