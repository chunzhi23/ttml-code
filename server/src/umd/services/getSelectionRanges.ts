import { Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { findNodeAtPosition } from "../ttmlLanguageService";
import { parseTTMLDocumentAsNode } from "./parseDocument";
import { TTMLNode } from "../ttmlLanguageTypes";

export function getTTMLSelectionRanges(document: TextDocument, positions: Position[]): Range[] {
  const root: TTMLNode = parseTTMLDocumentAsNode(document);
  const selectionRanges: Range[] = [];

  for (const position of positions) {
    const nodeAtPosition: TTMLNode | null = findNodeAtPosition(document, position, root);
    if (nodeAtPosition) {
      const selectionRange: Range = {
        start: nodeAtPosition.start,
        end: nodeAtPosition.end
      };
      selectionRanges.push(selectionRange);
    }
  }

  return selectionRanges;
}