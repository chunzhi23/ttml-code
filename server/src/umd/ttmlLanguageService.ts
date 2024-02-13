import { TextDocument } from "vscode-languageserver-textdocument";
import { Position } from 'vscode-languageserver-types';
import { createTTMLScanner } from "./services/createScanner";
import { doTTMLCompletion } from "./services/doCompletion";
import { doTTMLHover } from "./services/doHover";
import { formatTTML } from "./services/format";
import { parseTTMLDocument } from "./services/parseDocument";
import { setTTMLCompletionParticipants } from "./services/setCompletionParticipants";
import { findTTMLDocumentHighlights } from "./services/findDocumentHighlights";
import { findTTMLDocumentLinks } from "./services/findDocumentLinks";
import { findTTMLDocumentSymbols } from "./services/findDocumentSymbols";
import { getTTMLFoldingRanges } from "./services/getFoldingRanges";
import { getTTMLSelectionRanges } from "./services/getSelectionRanges";
import { doTTMLTagComplete } from "./services/doTagComplete";
import { TTMLNode } from "./ttmlLanguageTypes";

interface Options {
  customDataProviders?: any; // Adjust type as per your actual data provider
}

export function getLanguageService(options?: Options) {
  if (options && options.customDataProviders) {
    // Implement your custom data provider handling here
  }

  return {
    createScanner: createTTMLScanner,
    parseTTMLDocument: parseTTMLDocument,
    doComplete: doTTMLCompletion,
    setCompletionParticipants: setTTMLCompletionParticipants,
    doHover: doTTMLHover,
    format: formatTTML,
    findDocumentHighlights: findTTMLDocumentHighlights,
    findDocumentLinks: findTTMLDocumentLinks,
    findDocumentSymbols: findTTMLDocumentSymbols,
    getFoldingRanges: getTTMLFoldingRanges,
    getSelectionRanges: getTTMLSelectionRanges,
    doTagComplete: doTTMLTagComplete,
  };
}

export function isPositionInRange(position: Position, start: Position, end: Position): boolean {
  if (position.line < start.line || position.line > end.line) {
    return false;
  }
  if (position.line === start.line && position.character < start.character) {
    return false;
  }
  if (position.line === end.line && position.character > end.character) {
    return false;
  }
  return true;
}

export function findNodeAtPosition(
  document: TextDocument,
  position: Position,
  rootNode: TTMLNode
): TTMLNode | null {
  return findNode(rootNode, position);
}

function findNode(node: TTMLNode, position: Position): TTMLNode | null {
  if (isPositionInRange(position, node.start, node.end)) {
    for (const childNode of node.children) {
      const foundNode = findNode(childNode, position);
      if (foundNode) {
        return foundNode;
      }
    }
    return node;
  }
  return null;
}