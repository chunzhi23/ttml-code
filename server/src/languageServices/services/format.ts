import { TextDocument } from "vscode-languageserver-textdocument";

export function formatTTML(document: TextDocument): string {
  // Split the document into lines
  const lines = document.getText().split(/\r?\n/);

  // Indentation: Use 2 spaces for indentation
  const indent = "  ";

  // Formatting Rules
  // - Tag Ordering: Follow the HTML method
  // - Attribute Formatting: Use auto-completion format: [attribute name]="$1"$0
  // - Line Breaks: Auto

  // Format the document
  let formattedDocument = "";
  let currentIndentLevel = 0;

  for (const line of lines) {
    // Handle edge cases
    // - TODO: Add any additional edge cases

    // Adjust the current indentation level based on the line content
    const trimmedLine = line.trim();
    if (trimmedLine.endsWith("</")) {
      currentIndentLevel--;
    }

    // Append the line with proper indentation
    formattedDocument += indent.repeat(currentIndentLevel) + line.trim() + "\n";

    if (trimmedLine.startsWith("<") && !trimmedLine.endsWith("/>")) {
      currentIndentLevel++;
    }
  }

  return formattedDocument;
}
