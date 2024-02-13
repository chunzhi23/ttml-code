import {
  CompletionList,
  Diagnostic,
  Position,
  Range,
} from "vscode-languageserver";
import { getLanguageService as getTTMLLanguageService } from "./languageServices/ttmlLanguageService";
import { TextDocument } from "vscode-languageserver-textdocument";
import { getLanguageModelCache } from "./languageModelCache";

interface LanguageMode {
  getId(): string;
  doValidation?: (document: TextDocument) => Diagnostic[];
  doComplete?: (document: TextDocument, position: Position) => CompletionList;
  onDocumentRemoved(document: TextDocument): void;
  dispose(): void;
}

export interface LanguageModes {
  getModeAtPosition(
    document: TextDocument,
    position: Position
  ): LanguageMode | undefined;
  getModesInRange(document: TextDocument, range: Range): LanguageModeRange[];
  getAllModes(): LanguageMode[];
  getAllModesInDocument(document: TextDocument): LanguageMode[];
  getMode(languageId: string): LanguageMode | undefined;
  onDocumentRemoved(document: TextDocument): void;
  dispose(): void;
}

interface LanguageModeRange extends Range {
  mode: LanguageMode | undefined;
  attributeValue?: boolean;
}

export function getLanguageModes(): LanguageModes {
  const ttmlLanguageService = getTTMLLanguageService();

  
}
