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
