import { TextDocument } from "vscode-languageserver-textdocument";
import { Position } from 'vscode-languageserver-types';
import { createScanner } from "./services/createScanner";
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
import { ITTMLDataProvider, Scanner, TTMLNode } from "./ttmlLanguageTypes";

export interface LanguageService {
  createScanner(input: string, initialOffset?: number): Scanner;
  parseHTMLDocument(document: TextDocument): HTMLDocument;
  findDocumentHighlights(document: TextDocument, position: Position, htmlDocument: HTMLDocument): DocumentHighlight[];
  doComplete(document: TextDocument, position: Position, htmlDocument: HTMLDocument, options?: CompletionConfiguration): CompletionList;
  setCompletionParticipants(registeredCompletionParticipants: ICompletionParticipant[]): void;
  doHover(document: TextDocument, position: Position, htmlDocument: HTMLDocument): Hover | null;
  format(document: TextDocument, range: Range | undefined, options: HTMLFormatConfiguration): TextEdit[];
  findDocumentLinks(document: TextDocument, documentContext: DocumentContext): DocumentLink[];
  findDocumentSymbols(document: TextDocument, htmlDocument: HTMLDocument): SymbolInformation[];
  doTagComplete(document: TextDocument, position: Position, htmlDocument: HTMLDocument): string | null;
  getFoldingRanges(document: TextDocument, context?: {
      rangeLimit?: number;
  }): FoldingRange[];
  getSelectionRanges(document: TextDocument, positions: Position[]): SelectionRange[];
}
export interface LanguageServiceOptions {
  customDataProviders?: ITTMLDataProvider[];
}

export function getLanguageService(options?: LanguageServiceOptions): LanguageService {
  if (options && options.customDataProviders) {
    // Implement your custom data provider handling here
  }

  return {
    createScanner,
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