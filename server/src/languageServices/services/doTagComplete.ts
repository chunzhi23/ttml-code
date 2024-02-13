import {
  Position,
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

// Function to determine if the cursor is within a TTML tag
function isInTag(textBeforeCursor: string): boolean {
  // Logic to determine if the cursor is within a TTML tag
  // For simplicity, let's assume that the cursor is within a tag if there's an opening angle bracket '<' before the cursor
  return textBeforeCursor.includes("<");
}

// Function to determine if the cursor is within an attribute value
function isAttributeValue(textBeforeCursor: string): boolean {
  // Logic to determine if the cursor is within an attribute value
  // For simplicity, let's assume that the cursor is within an attribute value if there's an opening double quote '"' before the cursor
  return textBeforeCursor.includes('"');
}

// Function to extract the tag name from the current context
function extractTagName(textBeforeCursor: string): string {
  // Logic to extract the tag name from the current context
  // For simplicity, let's assume that the tag name is the text after the last opening angle bracket '<' and before any whitespace or closing angle bracket '>'
  const matches = textBeforeCursor.match(/<(\w+)[^<>\s]*$/);
  return matches ? matches[1] : "";
}

// Function to provide completion items for TTML tags
function provideTagCompletionItems(): CompletionItem[] {
  // List of TTML tags for completion
  const ttmlTags = [
    "ttp:profile", "ttp:features", "ttp:feature", "ttp:extensions", "ttp:extension", "tt", "head", "body", "div", "p", "span", "br", "styling", "style", "layout", "region", "set", "metadata", "ttm:title", "ttm:desc", "ttm:copyright", "ttm:agent", "ttm:name", "ttm:actor"
  ];

  // Create completion items for TTML tags
  return ttmlTags.map((tag) => ({
    label: tag,
    kind: CompletionItemKind.Keyword,
    detail: "TTML tag",
  }));
}

// Function to provide completion items for TTML attributes
function provideAttributeCompletionItems(tagName: string): CompletionItem[] {
  // Mapping of TTML tags to their respective attributes
  const ttmlAttributes: { [tag: string]: string[] } = {
    "ttp:profile": ["use", "xml:id"],
    "ttp:features": ["xml:base", "xml:id"],
    "ttp:feature": ["value", "xml:id"],
    "ttp:extensions": ["xml:base", "xml:id"],
    "ttp:extension": ["value", "xml:id"],
    "tt": ["tts:extent", "xml:id", "xml:lang", "xml:space"],
    "head": ["xml:id", "xml:lang", "xml:space"],
    "body": ["begin", "dur", "end", "region", "style", "timeContainer", "xml:id", "xml:lang", "xml:space"],
    "div": ["begin", "dur", "end", "region", "style", "timeContainer", "xml:id", "xml:lang", "xml:space"],
    "p": ["begin", "dur", "end", "region", "style", "timeContainer", "xml:id", "xml:lang", "xml:space"],
    "span": ["begin", "dur", "end", "region", "style", "timeContainer", "xml:id", "xml:lang", "xml:space"],
    "br": ["style", "xml:id", "xml:lang", "xml:space"],
    "styling": ["xml:id", "xml:lang", "xml:space"],
    "style": ["style", "xml:id", "xml:lang", "xml:space"],
    "layout": ["xml:id", "xml:lang", "xml:space"],
    "region": ["begin", "dur", "end", "style", "timeContainer", "ttm:role", "xml:id", "xml:lang", "xml:space"],
    "set": ["begin", "dur", "end", "xml:id", "xml:lang", "xml:space"],
    "metadata": ["xml:id", "xml:lang", "xml:space"],
    "ttm:title": ["xml:id", "xml:lang", "xml:space"],
    "ttm:desc": ["xml:id", "xml:lang", "xml:space"],
    "ttm:copyright": ["xml:id", "xml:lang", "xml:space"],
    "ttm:agent": ["type", "xml:id", "xml:lang", "xml:space"],
    "ttm:name": ["type", "xml:id", "xml:lang", "xml:space"],
    "ttm:actor": ["agent", "xml:id", "xml:lang", "xml:space"],
  };

  // Lookup attributes for the specified tag
  const attributes = ttmlAttributes[tagName] || [];

  // Create completion items for attributes
  return attributes.map((attr) => ({
    label: attr,
    kind: CompletionItemKind.Property,
    detail: "TTML attribute",
  }));
}

export function doTTMLTagComplete(
  document: TextDocument,
  position: Position
): CompletionItem[] {
  const offset = document.offsetAt(position);
  const textBeforeCursor = document.getText().substring(0, offset);

  // Determine the current context
  const inTag = isInTag(textBeforeCursor);
  const inAttributeValue = isAttributeValue(textBeforeCursor);
  const tagName = extractTagName(textBeforeCursor);

  // Provide completion items based on the current context
  if (inTag) {
    // If cursor is within a tag
    if (!inAttributeValue) {
      // Provide completion items for TTML tags if not within an attribute value
      return provideTagCompletionItems();
    } else {
      // Provide completion items for TTML attributes if within an attribute value
      return provideAttributeCompletionItems(tagName);
    }
  } else {
    // If cursor is not within a tag, provide completion items for TTML tags
    return provideTagCompletionItems();
  }
}
