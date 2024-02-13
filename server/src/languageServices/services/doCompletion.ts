import {
  Position,
  CompletionItem,
  CompletionList,
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

import { parseTTMLDocument } from "./parseDocument";

export function doTTMLCompletion(
  document: TextDocument,
  position: Position
): CompletionList {
  const parsedTTML = parseTTMLDocument(document);

  // Determine the completion context based on the parsed TTML document and current position
  const completionContext = getCompletionContext(parsedTTML, position);

  // Generate completion items based on the completion context
  const completionItems = generateCompletionItems(completionContext);

  return {
    isIncomplete: false,
    items: completionItems,
  };
}

function getCompletionContext(parsedTTML: any, position: Position): string {
  const line = position.line;
  const character = position.character;

  // Get the line of text where the cursor is positioned
  const lineText = parsedTTML[line];

  // Determine if the cursor is inside an attribute or a tag
  const isInAttribute = isInAttributeContext(lineText, character);
  const isInTag = isInTagContext(lineText, character);

  // Determine the completion context based on the cursor position
  if (isInAttribute) {
    return "attribute";
  } else if (isInTag) {
    return "tag";
  } else {
    return "";
  }
}

function isInAttributeContext(lineText: string, character: number): boolean {
  // Regex pattern to match attribute names
  const attributePattern =
    /\b(xml:|region|ttm:|ttp:|tts:|begin|dur|end|timeContainer|xmlns)\b/g;
  return attributePattern.test(lineText.substring(0, character));
}

function isInTagContext(lineText: string, character: number): boolean {
  // Regex pattern to match tag names
  const tagPattern =
    /\b(set|body|div|p|span|br|tt|head|layout|region|metadata|ttm:|ttp:|styling|style)\b/g;
  return tagPattern.test(lineText.substring(0, character));
}

function generateCompletionItems(completionContext: string): CompletionItem[] {
  // Generate completion items based on the completion context
  const completionItems: CompletionItem[] = [];

  // Add completion items for attributes
  if (completionContext === "attribute") {
    const attributeNames = [
      "xml:id",
      "xml:lang",
      "xml:space",
      "region",
      "ttm:agent",
      "ttm:role",
      "ttp:cellResolution",
      "ttp:clockMode",
      "ttp:dropMode",
      "ttp:frameRate",
      "ttp:frameRateMultiplier",
      "ttp:markerMode",
      "ttp:pixelAspectRatio",
      "ttp:profile",
      "ttp:subFrameRate",
      "ttp:tickRate",
      "ttp:timeBase",
      "style",
      "tts:backgroundColor",
      "tts:color",
      "tts:direction",
      "tts:display",
      "tts:displayAlign",
      "tts:extent",
      "tts:fontFamily",
      "tts:fontSize",
      "tts:fontStyle",
      "tts:fontWeight",
      "tts:lineHeight",
      "tts:opacity",
      "tts:origin",
      "tts:overflow",
      "tts:padding",
      "tts:showBackground",
      "tts:textAlign",
      "tts:textDecoration",
      "tts:textOutline",
      "tts:unicodeBidi",
      "tts:visibility",
      "tts:wrapOption",
      "tts:writingMode",
      "tts:zIndex",
      "begin",
      "dur",
      "end",
      "timeContainer",
      "xmlns",
    ];

    for (const attributeName of attributeNames) {
      completionItems.push({
        label: attributeName,
        kind: 3 /* CompletionItemKind.Field */,
      });
    }
  }

  // Add completion items for tags
  if (completionContext.startsWith("tag")) {
    const tagNames = [
      "set",
      "body",
      "div",
      "p",
      "span",
      "br",
      "tt",
      "head",
      "layout",
      "region",
      "metadata",
      "ttm:actor",
      "ttm:agent",
      "ttm:copyright",
      "ttm:desc",
      "ttm:name",
      "ttm:title",
      "ttp:profile",
      "ttp:features",
      "ttp:feature",
      "ttp:extension",
      "ttp:extensions",
      "styling",
      "style",
    ];

    for (const tagName of tagNames) {
      completionItems.push({
        label: tagName,
        kind: 6 /* CompletionItemKind.Class */,
      });
    }
  }

  return completionItems;
}
