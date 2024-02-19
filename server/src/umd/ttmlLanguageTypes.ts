import { Location } from "vscode-languageserver";

export interface TTMLNode {
  tag: string | undefined;
  start: number;
  startTagEnd: number | undefined;
  end: number;
  endTagStart: number | undefined;
  children: TTMLNode[];
  parent?: TTMLNode;
  attributes?: {
      [name: string]: string | null;
  } | undefined;
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
  EOS = 16
}
export declare enum ScannerState {
  WithinContent = 0,
  AfterOpeningStartTag = 1,
  AfterOpeningEndTag = 2,
  WithinTag = 3,
  WithinEndTag = 4,
  WithinComment = 5,
  AfterAttributeName = 6,
  BeforeAttributeValue = 7
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
export interface ITagData {
  name: string;
  description?: string;
  attributes: IAttributeData[];
}
export interface IAttributeData {
  name: string;
  description?: string;
  valueSet?: string;
  values?: IValueData[];
}
export interface IValueData {
  name: string;
  description?: string;
}
export interface IValueSet {
  name: string;
  values: IValueData[];
}
export interface ITTMLDataProvider {
  getId(): string;
  isApplicable(languageId: string): boolean;
  provideTags(): ITagData[];
  provideAttributes(tag: string): IAttributeData[];
  provideValues(tag: string, attribute: string): IValueData[];
}
