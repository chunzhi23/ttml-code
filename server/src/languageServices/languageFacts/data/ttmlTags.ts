import { ElementDescription } from "../dataProvider";

export function getElementDescriptions(): ElementDescription[] {
  // Read element descriptions from file or any other source
  return [
    {
      name: "tt",
      description:
        "The `tt` element serves as the root document element of a Document Instance.\n\nThe `tt` element accepts as its children zero or one head element followed by zero or one body element.",
      attributes: [
        {
          name: "tts:extent",
          description:
            "The `tts:extent` attribute is used to specify the width and height of a region area (which may be the Root Container Region).",
        },
        {
          name: "xml:id",
          description:
            "The `xml:id` attribute is used as defined by [XML ID](https://www.w3.org/TR/ttml1/#xmlid).\n\nThe `xml:id` attribute may be used with any element in the core vocabulary catalog.",
        },
        {
          name: "xml:lang",
          description:
            "The `xml:lang` attribute is used as defined by [XML 1.0](https://www.w3.org/TR/ttml1/#xml10), §2.12, Language Identification.\n\nThe `xml:lang` attribute must be specified on the `tt` element and may be specified by an instance of any other element type in the core vocabulary catalog except parameter vocabulary.",
        },
        {
          name: "xml:space",
          description:
            "The `xml:space` attribute is used as defined by [XML 1.0](https://www.w3.org/TR/ttml1/#xml10), §2.10, White Space Handling.\n\nThe `xml:space` attribute may be used with any element in the core vocabulary catalog except parameter vocabulary.",
        },
      ],
    },
    {
      name: "head",
      description:
        "The` head `element is a container element used to group header matter, including metadata, profile, styling, and layout information.\n\nThe` head `element accepts as its children zero or more elements in the `Metadata.class` element group, followed by zero or more elements in the `Parameters.class` element group, followed by zero or one `styling` element, followed by zero or one `layout` element.",
      attributes: [
        {
          name: "",
          description: "",
        },
      ],
    },
    {
      name: "",
      description: "",
      attributes: [
        {
          name: "",
          description: "",
        },
      ],
    },
  ];
}
