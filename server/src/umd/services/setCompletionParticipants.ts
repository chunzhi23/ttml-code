import {
  Position,
  CompletionItem,
  CompletionItemKind,
} from "vscode-languageserver";

export function setTTMLCompletionParticipants(languageService: any, documents: any): void {
  // Register completion participants for TTML documents
  documents.onCompletion(async (event: any) => {
      const document = documents.get(event.textDocument.uri);
      if (!document) {
          return null;
      }

      const position = event.position;
      const text = document.getText();

      // Parse TTML document to determine completion context
      const completionContext = getCompletionContext(text, position);

      // Determine completion items based on context
      const completionItems = getCompletionItems(completionContext);

      return {
          isIncomplete: true,
          items: completionItems,
      };
  });
}

function getCompletionContext(text: string, position: Position): string {
  const lines = text.split('\n');
  const line = lines[position.line];
  const lineBeforeCursor = line.substring(0, position.character);
  const lineAfterCursor = line.substring(position.character);

  // Check if the cursor is inside an attribute
  const attributeRegex = /(?:xml:(?:id|lang|space)|region|ttm:(?:agent|role)|ttp:(?:cellResolution|clockMode|dropMode|frameRate|frameRateMultiplier|markerMode|pixelAspectRatio|profile|subFrameRate|tickRate|timeBase)|style|tts:(?:backgroundColor|color|direction|display(Align)?|extent|font(?:Family|Size|Style|Weight)|lineHeight|opacity|origin|overflow|padding|showBackground|text(?:Align|Decoration|Outline)|unicodeBidi|visibility|wrapOption|writingMode|zIndex)|begin|dur|end|timeContainer|xmlns)\s*=\s*['"][^'"]*$/;
  if (attributeRegex.test(lineBeforeCursor) || attributeRegex.test(lineAfterCursor)) {
      return 'attribute';
  }

  // Check if the cursor is inside a tag
  const tagRegex = /<(\w+)[^>]*?>$/;
  if (tagRegex.test(lineBeforeCursor) || tagRegex.test(lineAfterCursor)) {
      return 'tag';
  }

  // Default to 'tag' context if none of the above conditions are met
  return 'tag';
}


function getCompletionItems(completionContext: string): CompletionItem[] {
  // Implement logic to determine completion items based on completion context
  // For example, return attribute names or tag names based on the context
  // You can use information from the tmlanguage JSON file to define possible completion items
  // For simplicity, let's return a placeholder completion item
  const completionItem: CompletionItem = {
      label: 'Placeholder',
      kind: CompletionItemKind.Keyword,
      detail: 'Placeholder completion item',
  };
  return [completionItem];
}