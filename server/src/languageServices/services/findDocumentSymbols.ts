import { Range } from "vscode-languageserver";
import { TextDocument } from 'vscode-languageserver-textdocument';
import { parseTTMLDocumentAsNode } from "./parseDocument";
import { TTMLNode, TTMLSymbol } from "../ttmlLanguageTypes";

export function findTTMLDocumentSymbols(document: TextDocument): TTMLSymbol[] {
  const symbols: TTMLSymbol[] = [];
  const rootNode = parseTTMLDocumentAsNode(document);

  // Recursive function to traverse the TTML document tree and collect symbols
  function traverse(node: TTMLNode) {
    // Check if the node represents a symbol
    if (isSymbol(node)) {
      symbols.push(createSymbol(node.tag, {start: node.start, end: node.end}));
    }

    // Traverse child nodes
    for (const childNode of node.children) {
      traverse(childNode);
    }
  }

  // Start traversing from the root node
  traverse(rootNode);

  return symbols;
}

function isSymbol(obj: any): obj is TTMLSymbol {
  return (
    obj &&
    typeof obj.name === "string" &&
    typeof obj.kind === "string" &&
    obj.range &&          // Adjusted to check for range existence
    obj.range.start &&    // Adjusted to check for start and end existence
    obj.range.end &&
    typeof obj.range.start.line === "number" && // Ensure start and end have line and character properties
    typeof obj.range.start.character === "number" &&
    typeof obj.range.end.line === "number" &&
    typeof obj.range.end.character === "number"
  );
}

function createSymbol(name: string, range: Range): TTMLSymbol { // Adjusted to use Range type
  return {
    name,
    start: range.start, // Assuming TTMLSymbol uses Position type for start and end
    end: range.end,
    // Additional metadata if needed
  };
}
