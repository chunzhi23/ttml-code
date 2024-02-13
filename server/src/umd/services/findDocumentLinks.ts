import { Position } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { TTMLNode } from "../ttmlLanguageTypes";

export interface Link {
  start: Position;
  end: Position;
}

export function findTTMLDocumentLinks(document: TextDocument, rootNode: TTMLNode): Link[] {
  const links: Link[] = [];
  findLinksInNode(document, rootNode, links);
  return links;
}

function findLinksInNode(document: TextDocument, node: TTMLNode, links: Link[]) {
  if (node.tag === "a" && node.attributes["href"]) {
    const start = node.start;
    const end = node.end;
    links.push({ start, end });
  }

  for (const childNode of node.children) {
    findLinksInNode(document, childNode, links);
  }
}
