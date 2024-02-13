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