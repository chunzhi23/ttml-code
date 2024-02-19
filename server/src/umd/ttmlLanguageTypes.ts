import { Position } from "vscode-languageserver";

export interface TTMLNode {
  tag: string;
  start: Position;
  end: Position;
  endTagStart: number;
  attributes: { [name: string]: string };
  children: TTMLNode[];
}
export interface TTMLSymbol {
  name: string;
  start: Position;
  end: Position;
  // Additional metadata if needed
}
export interface TTMLToken {
  type: string;
  value: string;
  range: {
    start: { line: number; character: number };
    end: { line: number; character: number };
  };
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
