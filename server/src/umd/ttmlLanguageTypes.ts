import {
	Position, Range, Location,
	MarkupContent, MarkupKind, MarkedString, DocumentUri,
	SelectionRange, WorkspaceEdit,
	CompletionList, CompletionItemKind, CompletionItem, CompletionItemTag, InsertTextMode, Command,
	SymbolInformation, DocumentSymbol, SymbolKind,
	Hover, TextEdit, InsertReplaceEdit, InsertTextFormat, DocumentHighlight, DocumentHighlightKind,
	DocumentLink, FoldingRange, FoldingRangeKind,
	SignatureHelp, Definition, Diagnostic, FormattingOptions, Color, ColorInformation, ColorPresentation
} from 'vscode-languageserver-types';
import { TextDocument } from 'vscode-languageserver-textdocument';


export {
	TextDocument,
	Position, Range, Location,
	MarkupContent, MarkupKind, MarkedString, DocumentUri,
	SelectionRange, WorkspaceEdit,
	CompletionList, CompletionItemKind, CompletionItem, CompletionItemTag, InsertTextMode, Command,
	SymbolInformation, DocumentSymbol, SymbolKind,
	Hover, TextEdit, InsertReplaceEdit, InsertTextFormat, DocumentHighlight, DocumentHighlightKind,
	DocumentLink, FoldingRange, FoldingRangeKind,
	SignatureHelp, Definition, Diagnostic, FormattingOptions, Color, ColorInformation, ColorPresentation
};

export interface TTMLNode {
  tag: string | undefined;
  start: number;
  startTagEnd: number | undefined;
  end: number;
  endTagStart: number | undefined;
  children: TTMLNode[];
  parent?: TTMLNode;
  attributes?:
    | {
        [name: string]: string | null;
      }
    | undefined;
}
export interface TTMLSymbol {
  name: string;
  location: Location;
  containerName: string;
  kind: number;
}
export interface TTMLToken {
  type: string;
  value: string;
  range: {
    start: { line: number; character: number };
    end: { line: number; character: number };
  };
}
export declare enum TokenType {
  StartCommentTag = 0,
  Comment = 1,
  EndCommentTag = 2,
  StartTagOpen = 3,
  StartTagClose = 4,
  StartTagSelfClose = 5,
  StartTag = 6,
  EndTagOpen = 7,
  EndTagClose = 8,
  EndTag = 9,
  DelimiterAssign = 10,
  AttributeName = 11,
  AttributeValue = 12,
  Content = 13,
  Whitespace = 14,
  Unknown = 15,
  EOS = 16,
}
export declare enum ScannerState {
  WithinContent = 0,
  AfterOpeningStartTag = 1,
  AfterOpeningEndTag = 2,
  WithinTag = 3,
  WithinEndTag = 4,
  WithinComment = 5,
  AfterAttributeName = 6,
  BeforeAttributeValue = 7,
}
export interface Scanner {
  scan(): TokenType;
  getTokenType(): TokenType;
  getTokenOffset(): number;
  getTokenLength(): number;
  getTokenEnd(): number;
  getTokenText(): string;
  getTokenError(): string | undefined;
  getScannerState(): ScannerState;
}
export declare type TTMLDocument = {
  roots: TTMLNode[];
  findNodeBefore(offset: number): TTMLNode;
  findNodeAt(offset: number): TTMLNode;
};
export interface IReference {
  name: string;
  url: string;
}
export interface ITagData {
  name: string;
  description?: string | MarkupContent;
  attributes: IAttributeData[];
  references?: IReference[];
  void?: boolean;
}
export interface IAttributeData {
  name: string;
  description?: string | MarkupContent;
  valueSet?: string;
  values?: IValueData[];
  references?: IReference[];
}
export interface IValueData {
  name: string;
  description?: string | MarkupContent;
  references?: IReference[];
}
export interface IValueSet {
  name: string;
  values: IValueData[];
}
export interface TTMLDataV1 {
  version: 1 | 1.1;
  tags?: ITagData[];
  globalAttributes?: IAttributeData[];
  valueSets?: IValueSet[];
}
export interface ITTMLDataProvider {
  getId(): string;
  isApplicable(languageId: string): boolean;
  provideTags(): ITagData[];
  provideAttributes(tag: string): IAttributeData[];
  provideValues(tag: string, attribute: string): IValueData[];
}
export interface ClientCapabilities {
  /**
   * The text document client capabilities
   */
  textDocument?: {
    /**
     * Capabilities specific to completions.
     */
    completion?: {
      /**
       * The client supports the following `CompletionItem` specific
       * capabilities.
       */
      completionItem?: {
        /**
         * Client supports the follow content formats for the documentation
         * property. The order describes the preferred format of the client.
         */
        documentationFormat?: MarkupKind[];
      };
    };
    /**
     * Capabilities specific to hovers.
     */
    hover?: {
      /**
       * Client supports the follow content formats for the content
       * property. The order describes the preferred format of the client.
       */
      contentFormat?: MarkupKind[];
    };
  };
}
export namespace ClientCapabilities {
  export const LATEST: ClientCapabilities = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
        },
      },
      hover: {
        contentFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
      },
    },
  };
}
export interface LanguageServiceOptions {
  /**
   * Unless set to false, the default HTML data provider will be used
   * along with the providers from customDataProviders.
   * Defaults to true.
   */
  useDefaultDataProvider?: boolean;

  /**
   * Provide data that could enhance the service's understanding of
   * HTML tag / attribute / attribute-value
   */
  customDataProviders?: ITTMLDataProvider[];

  /**
   * Abstract file system access away from the service.
   * Used for path completion, etc.
   */
  fileSystemProvider?: FileSystemProvider;

  /**
   * Describes the LSP capabilities the client supports.
   */
  clientCapabilities?: ClientCapabilities;
}
export enum FileType {
  /**
   * The file type is unknown.
   */
  Unknown = 0,
  /**
   * A regular file.
   */
  File = 1,
  /**
   * A directory.
   */
  Directory = 2,
  /**
   * A symbolic link to a file.
   */
  SymbolicLink = 64,
}

export interface FileStat {
  /**
   * The type of the file, e.g. is a regular file, a directory, or symbolic link
   * to a file.
   */
  type: FileType;
  /**
   * The creation timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
   */
  ctime: number;
  /**
   * The modification timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
   */
  mtime: number;
  /**
   * The size in bytes.
   */
  size: number;
}

export interface FileSystemProvider {
  stat(uri: DocumentUri): Promise<FileStat>;
  readDirectory?(uri: DocumentUri): Promise<[string, FileType][]>;
}
