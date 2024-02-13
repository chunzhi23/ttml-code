import { Position, Range } from "vscode-languageserver"; // Assuming you have types defined in a separate file
import { TextDocument } from "vscode-languageserver-textdocument";

import { TTMLNode } from "../ttmlLanguageService";
import { parseTTMLDocumentAsNode } from "./parseDocument";

export function getTTMLFoldingRanges(document: TextDocument): Range[] {
  const rootNode: TTMLNode = parseTTMLDocumentAsNode(document); // You need to implement parseTTMLDocumentAsNode function

  // Recursive function to traverse the TTML document tree and find folding ranges
  function findFoldingRanges(node: TTMLNode): Range[] {
    const foldingRanges: Range[] = [];

    // Check if the node occupies multiple lines
    if (node.start.line < node.end.line) {
      foldingRanges.push({
        start: node.start,
        end: node.end,
      });
    }

    // Traverse child nodes
    for (const childNode of node.children) {
      foldingRanges.push(...findFoldingRanges(childNode));
    }

    return foldingRanges;
  }

  // Start traversing from the root node
  return findFoldingRanges(rootNode);
}
