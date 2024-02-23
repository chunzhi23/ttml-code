import { createScanner } from "./services/createScanner";
import { TTMLParser } from "./parser/ttmlParser";

import { CompletionList, DocumentHighlight, DocumentLink, FoldingRange, Hover, ITTMLDataProvider, LanguageServiceOptions, Position, Scanner, SelectionRange, SymbolInformation, TTMLDocument, TTMLNode, TextDocument } from "./ttmlLanguageTypes";
import { TTMLDataManager } from "./languageFacts/dataManager";

export interface LanguageService {
  setDataProviders(useDefaultDataProvider: boolean, customDataProviders: ITTMLDataProvider[]): void;
  createScanner(input: string, initialOffset?: number): Scanner;
  parseTTMLDocument(document: TextDocument): TTMLDocument;
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

const defaultLanguageServiceOptions = {};

export function getLanguageService(options: LanguageServiceOptions = defaultLanguageServiceOptions): LanguageService {
  const dataManager = new TTMLDataManager(options);

  const ttmlParser = new TTMLParser(dataManager);

  return {
    setDataProviders: dataManager.setDataProviders.bind(dataManager),
    createScanner,
    parseTTMLDocument: ttmlParser.parseDocument.bind(ttmlParser),
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