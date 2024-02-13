import { TextDocument } from "vscode-languageserver-textdocument";

interface TTMLToken {
  type: string;
  value: string;
  range: {
    start: { line: number; character: number };
    end: { line: number; character: number };
  };
}

export function createTTMLScanner(document: TextDocument): TTMLToken[] {
  const text = document.getText();
  const tokens: TTMLToken[] = [];

  // Regular expressions for tokenizing TTML
  const tagRegex = /<(\/?)(\w+)\s*([^>]*)>/g;
  const attributeRegex = /(\w+)\s*=\s*("|')(.*?)\2/g;
  const commentRegex = /<!--[\s\S]*?-->/g;
  const entityRegex = /&#[0-9]+;|&#[xX][0-9a-fA-F]+;|&[a-zA-Z0-9]+;/g;

  let match;

  // Tokenize tags
  while ((match = tagRegex.exec(text)) !== null) {
    const type = match[1] ? "closingTag" : "openingTag";
    const name = match[2];
    const attributes = match[3];
    const start = document.positionAt(match.index);
    const end = document.positionAt(match.index + match[0].length);
    tokens.push({ type, value: `<${name}>`, range: { start, end } });

    // Tokenize attributes
    let attrMatch;
    while ((attrMatch = attributeRegex.exec(attributes)) !== null) {
      const attrName = attrMatch[1];
      const attrValue = attrMatch[3];
      // Handle attributes
      // Add attribute tokens to the tokens array
    }
  }

  // Tokenize comments
  while ((match = commentRegex.exec(text)) !== null) {
    const start = document.positionAt(match.index);
    const end = document.positionAt(match.index + match[0].length);
    tokens.push({ type: "comment", value: match[0], range: { start, end } });
  }

  // Tokenize entities
  while ((match = entityRegex.exec(text)) !== null) {
    const start = document.positionAt(match.index);
    const end = document.positionAt(match.index + match[0].length);
    tokens.push({ type: "entity", value: match[0], range: { start, end } });
  }

  return tokens;
}