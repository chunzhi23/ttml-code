import { TTMLDataV1 } from "../../ttmlLanguageTypes";

export const ttmlData: TTMLDataV1 = {
  version: 1.1,
  tags: [
    {
      name: "ttp:profile",
      description: {
        kind: "markdown",
        value:
          "The `ttp:profile` element defines features and extensions necessary or optional for a Content Processor to handle a Document Instance.",
      },
      attributes: [
        {
          name: "use",
          valueSet: "dfxp",
          description: {
            kind: "markdown",
            value:
              "The `use` attribute in TTML (Timed Text Markup Language) is used to specify a profile for a particular element. If you include the `use` attribute, it needs to point to a [profile](https://www.w3.org/TR/ttml1/#profiles) definition document, either a standard one defined by TTML or a resource that represents a valid profile definition. This profile serves as a baseline for the element's characteristics.\n\nIf you don't specify the `use` attribute, the element is considered to have an empty profile, meaning it doesn't have any predefined features or extensions.\n\nHere's how the features and extensions of a profile are determined:\n\n    *   Start with an empty set of features and extensions.\n    *   If a use attribute is present, add the features and extensions specified by the referenced baseline profile.\n    *   For each ttp:feature and ttp:extension element inside the ttp:profile, combine them with the features and extensions of the profile. This involves replacing existing specifications if they already exist or adding new ones if they don't.\n\nA TTML processor doesn't have to be able to access non-standard profile definition documents. It may have built-in standard profiles to avoid needing to access network resources.\n\nIf a TTML processor can't access a non-standard profile definition document, it shouldn't process the document unless explicitly instructed by the end-user or through implementation settings. If processing is aborted due to this reason, the end-user should be notified unless notifications are disabled or the processor doesn't allow user intervention.\n\nThe possible values for the `use` attribute are:\n\n*   [`dfxp-transformation`](https://www.w3.org/TR/ttml1/#profile-dfxp-transformation) 	is intended to be used to express minimum compliance for transformation processing.\n*   [`dfxp-presentation`](https://www.w3.org/TR/ttml1/#profile-dfxp-presentation) is intended to be used to express minimum compliance for presentation processing.\n*   [`dfxp-full`](https://www.w3.org/TR/ttml1/#profile-dfxp-full) is intended to be used to express maximum compliance for both transformation and presentation processing.",
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#parameter-vocabulary-profile",
        },
      ],
    },
    {
      name: "ttp:features",
      description: {
        kind: "markdown",
        value:
          "The `ttp:features` element is a container element used to group infomation about feature support requirements.\n\nThe `ttp:features` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`ttp:feature`](https://www.w3.org/TR/ttml1/#parameter-vocabulary-feature) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#parameter-vocabulary-features",
        },
      ],
    },
    {
      name: "ttp:feature",
      description: {
        kind: "markdown",
        value:
          "The `ttp:feature` element is used to specify infomation about support requirements for a particular feature. The children of the `ttp:feature` element must express a non-empty sequence of character information items that adheres to the xsd:anyURI data type.\n\nSee [Feature Designations](https://www.w3.org/TR/ttml1/#feature-designations) for the details of its children.",
      },
      attributes: [
        {
          name: "value",
          valueSet: "oru",
          description: {
            kind: "markdown",
            value:
              "The `value` attribute in TTML specifies whether a TTML processor is required to implement a designated feature to process the document. Here's a breakdown of how it works:\n\n**Types of Values**: The `value` attribute can have three possible values:\n\n*   `required`: This means the processor must implement or support the feature, regardless of whether the feature is enabled or disabled.\n*   `optional`: The processor is not required to implement the feature. If it doesn't support the feature, it can still process the document.\n*   `use`: The processor must both implement the feature and have it enabled (activated) to process the document.\n\n**Default Value**: If you don't specify the `value` attribute on a `ttp:feature` element, it defaults to `required`. This means that support for the feature is assumed to be required unless stated otherwise.\n\n**Handling Unsupported Features**:\n\n*   If the `value` is `required` or `use` but the processor doesn't support the feature, or if the value is `use` but the feature is disabled, the processor shouldn't proceed with document processing unless explicitly overridden by the end-user or through implementation settings. If processing is aborted due to an unsupported required feature, the end-user should be notified.\n*   If the value is optional and the processor doesn't support the feature, it may still process the document. If the document contains usage of an optional feature that the processor doesn't support, the processor can behave as if the feature weren't used.\n*   If a well-known feature isn't specified by a ttp:feature element, it's interpreted as if the feature were specified with a value attribute equal to optional.\n\nIn essence, the value attribute controls how a TTML processor handles features specified in a document, ensuring that required features are properly supported and handled according to their designated values.",
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#parameter-vocabulary-feature",
        },
      ],
    },
    {
      name: "ttp:extensions",
      description: {
        kind: "markdown",
        value:
          "The `ttp:extensions` element is a container element used to group infomation about extension support requirements.\n\nThe `ttp:extensions` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`ttp:extension`](https://www.w3.org/TR/ttml1/#parameter-vocabulary-extension) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#parameter-vocabulary-extensions",
        },
      ],
    },
    {
      name: "ttp:extension",
      description: {
        kind: "markdown",
        value:
          "The `ttp:extension` element is used to specify infomation about support requirements for a particular extension.\n\nThe children of the `ttp:extension` element must express a non-empty sequence of character information items that adheres to the xsd:anyURI data type.",
      },
      attributes: [
        {
          name: "value",
          valueSet: "oru",
          description: {
            kind: "markdown",
            value:
              "The `value` attribute in TTML serves to indicate whether a TTML processor must or may implement a designated extension to properly handle a document. Here's a simplified explanation:\n\n**Types of Values**: The `value` attribute can have three possible values:\n\n*   `required`: The processor must implement or support the extension to process the document.\n*   `optional`: The processor isn't required to implement the extension. It can still process the document without it.\n*   `use`: The processor must implement and enable the extension to process the document.\n\n**Default Value**: If you don't specify the `value` attribute on a `ttp:extension` element, it defaults to `required`. This means that support for the extension is assumed to be required unless stated otherwise.\n\n**Handling Unsupported Extensions**:\n\n*   If the `value` is `required` or `use` but the processor doesn't support the extension, or if the value is `use` but the extension is disabled, the processor shouldn't proceed with document processing unless explicitly overridden by the end-user or through implementation settings. If processing is aborted due to an unsupported required extension, the end-user should be notified.\n*   If the `value` is `optional` and the processor doesn't support the extension, it may still process the document. If the document contains usage of an optional extension that the processor doesn't support, the processor can behave as if the extension weren't used.\n*   If a well-known extension isn't specified by a `ttp:extension` element, it's interpreted as if the extension were specified with a `value` attribute equal to `optional`.\n\nIn essence, the `value` attribute controls how a TTML processor handles extensions specified in a document, ensuring that required extensions are properly supported and handled according to their designated values.",
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#parameter-vocabulary-extension",
        },
      ],
    },
    {
      name: "tt",
      description: {
        kind: "markdown",
        value:
          "The `tt` element serves as the root document element of a Document Instance.\n\nThe `tt` element accepts as its children zero or one `head` element followed by zero or one `body` element.",
      },
      attributes: [
        {
          name: "ttp:cellResolution",
          description: {
            kind: "markdown",
            value:
              "The `ttp:cellResolution` attribute in TTML allows authors to define the number of horizontal and vertical cells used to partition the Root Container Region area, facilitating the expression of presentation semantics through a consistent grid system.\n\nHere's a simplified explanation:\n\n*   **Usage**: Authors can employ the `ttp:cellResolution` attribute to specify the grid dimensions.\n*   **Syntax**: The attribute value should be represented as `columns rows`, where both `columns` and `rows` must be integers greater than zero.\n*   **Default Values**: If not explicitly specified, the default number of columns is 32, and the default number of rows is 15.\n*   **Non-Zero Requirement**: Columns and rows must not be zero if specified.\n*   **Significance**: This attribute is meaningful only when applied to the `tt` element.\n*   **Purpose**: The grid aids in measuring lengths and expressing coordinates but doesn't dictate text presentation or glyph alignment unless using a monospaced font.\n*   **Usage in Length Measurement**: When expressing a length in cells, the dimension follows the inline or block progression, corresponding to the cell's respective dimension.\n*   **Example**: For instance, if padding is specified as 0.1c (0.1 cells), with a cell resolution of 20 by 10 and a region extent of 640 by 480, the padding calculation adjusts based on the grid size and region dimensions.\n\nIn essence, `ttp:cellResolution` provides a structured approach to layout and positioning within TTML documents, enhancing consistency and alignment across visual elements.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-cellResolution",
            },
          ],
        },
        {
          name: "ttp:clockMode",
          values: [
            {
              name: "local",
              description:
                "Time expressions are interpreted as local wall-clock time coordinates.",
            },
            {
              name: "utc",
              description:
                "Time expressions are interpreted as UTC time coordinates.",
            },
            {
              name: "gps",
              description:
                "Time expressions are interpreted as GPS time coordinates.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `ttp:clockMode` attribute in TTML is utilized to specify how time expressions should be interpreted as real-time coordinates when operating with a clock-based time base, as defined by the `ttp:timeBase` element.\n\nHere's a simplified explanation:\n\n*   **Usage**: Authors use the `ttp:clockMode` attribute to define how time expressions are interpreted concerning real-time coordinates.\n*   **Syntax**: The attribute value must be one of the following: `local`, `gps`, or `utc`.\n*   **Interpretation**:\n    *   If the time base is designated as a clock, the parameter's value determines the interpretation of time expressions:\n        *   `local`: Time expressions are interpreted as local wall-clock time coordinates.\n        *   `utc`: Time expressions are interpreted as UTC time coordinates.\n        *   `gps`: Time expressions are interpreted as GPS time coordinates.\n*   **Difference Between Time Coordinates**:\n    *   UTC time is adjusted for leap seconds, while GPS time is not adjusted. UTC is maintained by the Bureau International des Poids et Mesures (BIPM) in France, whereas GPS time is steered to a Master Clock at the US Naval Observatory.\n*   **Default Value**: If not specified, the default value is `utc`.\n*   **Significance**: The `ttp:clockMode` attribute is meaningful only when applied to the `tt` element.\n\nIn summary, `ttp:clockMode` allows authors to define how time expressions are understood concerning real-time coordinates, providing flexibility in handling time-based content within TTML documents.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-clockMode",
            },
          ],
        },
        {
          name: "ttp:dropMode",
          values: [
            {
              name: "dropNTSC",
              description:
                "Frames within a second count from 0 to N−1, ignoring any frame rate multiplier.",
            },
            {
              name: "dropNTSC",
              description:
                "Frames within a second count from 0 to N−1, with specific frame drops occurring during certain seconds.",
            },
            {
              name: "dropPAL",
              description:
                "Frames within a second count from 0 to N−1, with specific frame drops occurring during certain seconds based on PAL standards.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `ttp:dropMode` attribute in TTML serves to define constraints on how frame counts are interpreted and utilized within time expressions corresponding to SMPTE (Society of Motion Picture and Television Engineers) time coordinates. Here's a simplified explanation:\n\n*   **Usage**: The attribute specifies constraints on frame counts when operating with a time base of SMPTE, as defined by `ttp:timeBase`.\n*   **Syntax**: The attribute value must be one of the following: `dropNTSC`, `dropPAL`, or `nonDrop`.\n*   **Interpretation**:\n    *   If the time base is designated as SMPTE, the attribute's value determines how frame counts are interpreted:\n        *   `nonDrop`: Frames within a second count from 0 to N−1, ignoring any frame rate multiplier.\n        *   `dropNTSC`: Frames within a second count from 0 to N−1, with specific frame drops occurring during certain seconds.\n        *   `dropPAL`: Frames within a second count from 0 to N−1, with specific frame drops occurring during certain seconds based on PAL standards.\n*   **Frame Drop Scenarios**:\n    *   `dropNTSC`: Frames 00 and 01 are dropped during the second 00 if the minute is not 00, 10, 20, 30, 40, or 50.\n    *   `dropPAL`: Frames 00 through 03 are dropped during the second 00 if the minute is even but not 00, 20, or 40.\n*   **Example**: In dropNTSC mode with a frame rate of 30, a discontinuity in frame count occurs between consecutive frames when transitioning between seconds, as exemplified by the sequence of time expressions.\n*   **Default Value**: If not specified, `nonDrop` is assumed to apply.\n*   **Significance**: The attribute is meaningful only when applied to the `tt` element.\n\nIn essence, `ttp:dropMode` provides a mechanism to handle frame counts within SMPTE time expressions, ensuring accurate time coordination and playback within TTML documents.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-dropMode",
            },
          ],
        },
        {
          name: "ttp:frameRate",
          description: {
            kind: "markdown",
            value:
              "The `ttp:frameRate` attribute in TTML is used to indicate the frame rate of a related media object or the intrinsic frame rate of a Document Instance if it operates independently as a media object.\n\nHere's a simplified explanation:\n\n*   **Usage**: The attribute specifies the frame rate of the related media or the document itself if it functions as a standalone media object.\n*   **Syntax**: The attribute value must be a positive integer (`[<digit>](https://www.w3.org/TR/ttml1/#style-value-digit)+`).\n*   **Interpretation**:\n    *   For a Document Instance: The frame rate is used to interpret time expressions expressed in frames.\n    *   For Media Time Base: If the media time base is applicable and the effective frame rate is integral, each frame represents a division of a second of media time. For instance, if the frame rate is specified as F, then a second of media time is divided into F intervals of equal duration.\n*   **Default Value**: If not specified, the frame rate defaults to either an application-defined frame rate or 30 frames per second.\n*   **Significance**: The attribute is meaningful only when applied to the `tt` element.\n\nIn essence, `ttp:frameRate` provides crucial information about the timing structure of a TTML document or related media, ensuring proper synchronization and playback coordination.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-frameRate",
            },
          ],
        },
        {
          name: "ttp:frameRateMultiplier",
          description: {
            kind: "markdown",
            value:
              "The `ttp:frameRateMultiplier` attribute in TTML is used to specify a multiplier that adjusts the effective frame rate determined by the `ttp:frameRate` attribute. Here's a simplified explanation:\n\n*   **Usage**: This attribute defines a multiplier applied to the frame rate specified by `ttp:frameRate` to compute the effective frame rate.\n*   **Syntax**: The attribute value consists of a numerator and a denominator, both non-zero positive integers (`numerator denominator`).\n*   **Interpretation**:\n    *   The multiplier is employed when the desired frame rate cannot be expressed as an integral number of frames per second.\n*   **Default Value**: If not specified, the frame rate multiplier defaults to an application-defined value or 1:1 if no specific multiplier applies. Both numerator and denominator must be non-zero.\n*   **Significance**: The attribute is meaningful only when applied to the `tt` element.\n\nIn essence, `ttp:frameRateMultiplier` allows for fine-tuning the frame rate to accommodate specific requirements or video format standards, ensuring accurate synchronization with related media objects.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-frameRateMultiplier",
            },
          ],
        },
        {
          name: "ttp:markerMode",
          values: [
            {
              name: "continuous",
              description:
                "SMPTE time coordinates are assumed to be linear and either monotonically increasing or decreasing.",
            },
            {
              name: "discontinuous",
              description:
                "no assumptions are made regarding linearity or monotonicity of time coordinates.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `ttp:markerMode` attribute in TTML specifies constraints on how time expressions corresponding to SMPTE time coordinates are interpreted. Here's a simplified explanation:\n\n*   **Usage**: This attribute defines constraints on the interpretation of SMPTE time coordinates.\n*   **Syntax**: The attribute value must be either `continuous` or `discontinuous`.\n*   **Interpretation**:\n    *   If the value is `continuous`, SMPTE time coordinates are assumed to be linear and either monotonically increasing or decreasing.\n    *   If the value is `discontinuous`, no assumptions are made regarding linearity or monotonicity of time coordinates.\n*   **Default Value**: If not specified, the default value is `discontinuous`.\n*   **Significance**: The attribute is significant only when applied to the `tt` element.\n\nIn essence, `ttp:markerMode` helps determine the behavior of time expressions within SMPTE time coordinates, guiding how these expressions are interpreted and utilized within TTML documents.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-markerMode",
            },
          ],
        },
        {
          name: "ttp:pixelAspectRatio",
          description: {
            kind: "markdown",
            value:
              "The `ttp:pixelAspectRatio` attribute in TTML allows content authors to define the aspect ratio of non-square pixels when creating content that utilizes pixel coordinates. Here's a simplified explanation:\n\n*   **Usage**: Authors use this attribute to specify the aspect ratio of pixels when creating content.\n*   **Syntax**: The attribute value consists of two non-zero integers, representing the width and height of the pixel aspect ratio (`width height`).\n*   **Interpretation**:\n    *   If not specified, square pixels (aspect ratio of 1:1) are assumed.\n    *   If specified, both width and height must be non-zero.\n*   **Significance**: The attribute is significant only when applied to the `tt` element.\n\nIn summary, `ttp:pixelAspectRatio` facilitates the accurate representation of pixel aspect ratios in TTML documents, ensuring proper rendering and layout of content, especially when dealing with non-square pixels.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-pixelAspectRatio",
            },
          ],
        },
        {
          name: "ttp:profile",
          valueSet: "dfxp",
          description: {
            kind: "markdown",
            value:
              "The `ttp:profile` attribute in TTML allows content authors to specify the profile of the Timed Text Markup Language (TTML) used in a document instance. Here's a simplified explanation:\n\n*   **Usage**: Authors use this attribute to express the profile of TTML used in a document.\n*   **Syntax**: The attribute value must adhere to the xsd:anyURI data type and specify a profile designator in accordance with the Profiles section as follows: `dfxp-transformation`, `dfxp-presentation`, or `dfxp-full`.\n*   **Interpretation**:\n    *   `dfxp-transformation`: The DFXP Transformation Profile is intended to be used to express minimum compliance for transformation processing.\n	*   `dfxp-presentation`: The DFXP Presentation Profile is intended to be used to express minimum compliance for presentation processing.\n	*   `dfxp-full`: The DFXP Full Profile is intended to be used to express maximum compliance for both transformation and presentation processing.\n*   **Significance**: The attribute is significant only when applied to the tt element.\n\nIn essence, ttp:profile helps define the specific profile of TTML employed in a document, ensuring compatibility and adherence to defined standards or requirements.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-profile",
            },
          ],
        },
        {
          name: "ttp:subFrameRate",
          description: {
            kind: "markdown",
            value:
              "The `ttp:subFrameRate` attribute in TTML is utilized to specify the sub-frame rate of a related media object or the intrinsic sub-frame rate of a Document Instance when it operates independently as a media object. Here's a simplified explanation:\n\n*   **Usage**: This attribute specifies the sub-frame rate of the media object or document.\n*   **Syntax**: The attribute value must be a positive integer\n(`[<digit>](https://www.w3.org/TR/ttml1/#style-value-digit)+`), representing the sub-frame rate.\n*   **Interpretation**:\n    *   For a Document Instance: The sub-frame rate is used to interpret time expressions expressed in sub-frames.\n    *   For Media Time Base: If applicable, a sub-frame is interpreted as a division of a frame of media time into intervals of equal duration.\n*   **Default Value**: If not specified, the sub-frame rate defaults to an application-defined value or 1.\n*   **Significance**: The attribute is meaningful only when applied to the `tt` element.\n\nIn essence, `ttp:subFrameRate` allows for the precise definition of sub-frame timing within TTML documents, ensuring accurate synchronization and playback coordination, particularly in contexts involving interlaced video media.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-subFrameRate",
            },
          ],
        },
        {
          name: "ttp:tickRate",
          description: {
            kind: "markdown",
            value:
              "The `ttp:tickRate` attribute in TTML is employed to specify the tick rate of a related media object or the intrinsic tick rate of content within a Document Instance functioning independently as a media object. Here's a simplified explanation:\n\n*   **Usage**: This attribute defines the tick rate of the media object or document content.\n*   **Syntax**: The attribute value must be a positive integer\n(`[<digit>](https://www.w3.org/TR/ttml1/#style-value-digit)+`), indicating the tick rate.\n*   **Interpretation**:\n    *   For Document Instance: The tick rate is used to interpret time expressions expressed in ticks using the [`t`](https://www.w3.org/TR/ttml1/#timing-value-timeExpression) metric.\n    *   For Media Time Base: If applicable, a tick is interpreted as an integral division of a second of media time into intervals of equal duration.\n*   **Default Value**:\n    *   If not specified:n        *   If a frame rate is specified, the tick rate is considered to be the effective frame rate multiplied by the sub-frame rate (ticks are interpreted as sub-frames).\n        *   If no frame rate is specified, the tick rate is one tick per second of media time.\n*   **Significance**: The attribute is meaningful only when applied to the `tt` element.\n\nIn essence, `ttp:tickRate` allows for precise timing within TTML documents, enabling accurate interpretation of time expressions in ticks, particularly useful for synchronization and temporal coordination in media content.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-tickRate",
            },
          ],
        },
        {
          name: "ttp:timeBase",
          values: [
            {
              name: "media",
              description:
                "Denotes a coordinate in a media object's time line, allowing synchronization with external media or establishing an independent time line within the Document Instance.",
            },
            {
              name: "smpte",
              description: {
                kind: "markdown",
                value:
                  "Denotes a [SMPTE 12M](https://www.w3.org/TR/ttml1/#smpte12m) time coordinate for synchronization with the content of a Document Instance, with marker mode and drop mode parameters applying.",
              },
            },
            {
              name: "clock",
              description:
                "Denotes a coordinate in a real-world time line established by a real-time clock, such as local wall-clock time, UTC, or GPS time.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `ttp:timeBase` attribute in TTML serves to specify the temporal coordinate system used for interpreting time expressions within a Document Instance. Here's a breakdown:\n\n*   **Usage**: This attribute defines the temporal coordinate system for interpreting time expressions.\n*   **Syntax**: The attribute value must be one of the following:\n    *   `media`: Denotes a coordinate in a media object's time line, allowing synchronization with external media or establishing an independent time line within the Document Instance.\n    *   `smpte`: Denotes a [SMPTE 12M](https://www.w3.org/TR/ttml1/#smpte12m) time coordinate for synchronization with the content of a Document Instance, with marker mode and drop mode parameters applying.\n    *   `clock`: Denotes a coordinate in a real-world time line established by a real-time clock, such as local wall-clock time, UTC, or GPS time.\n*   **Default Value**: If not specified, the default time base is `media`.\n*   **Significance**: This attribute is meaningful only when applied to the `tt` element.\n\nIn summary, `ttp:timeBase` allows authors to specify the reference frame for timing within a TTML document, whether it's based on media time, SMPTE time codes, or real-world clock time.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#parameter-attribute-timeBase",
            },
          ],
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#document-structure-vocabulary-tt",
        },
      ],
    },
    {
      name: "head",
      description: {
        kind: "markdown",
        value:
          "The `head` element is a container element used to group header matter, including metadata, profile, styling, and layout information.\n\nThe `head` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Parameters.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or one [`styling`](https://www.w3.org/TR/ttml1/#styling-vocabulary-styling) element, followed by zero or one [`layout`](https://www.w3.org/TR/ttml1/#layout-vocabulary-layout) element.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#document-structure-vocabulary-head",
        },
      ],
    },
    {
      name: "body",
      description: {
        kind: "markdown",
        value:
          "The `body` element functions as a logical container and a temporal structuring element for a sequence of textual content units represented as logical divisions.\n\nThe `body` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Animation.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#document-structure-vocabulary-body",
        },
      ],
    },
    {
      name: "div",
      description: {
        kind: "markdown",
        value:
          "The `div` element functions as a logical container and a temporal structuring element for a sequence of textual content units represented as logical sub-divisions or paragraphs.\n\n**Note**:\n\n    When rendered on a continuous (non-paged) visual presentation medium, a div element is expected to generate one or more block areas that contain zero or more child block areas generated by the div element's descendant p elements.\n\n    If some block area generated by a div element does not contain any child areas, then it is not expected to be presented.\n\nThe `div` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Animation.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div) or [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-vocabulary-div",
        },
      ],
    },
    {
      name: "p",
      description: {
        kind: "markdown",
        value:
          "A `p` element represents a logical paragraph, serving as a transition between block level and inline level formatting semantics.\n\nThe `p` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Animation.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more intermixed [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements, [`br`](https://www.w3.org/TR/ttml1/#content-vocabulary-br) elements, or text nodes.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-vocabulary-p",
        },
      ],
    },
    {
      name: "span",
      description: {
        kind: "markdown",
        value:
          "The `span` element functions as a logical container and a temporal structuring element for a sequence of textual content units having inline level formatting semantics.\n\nWhen presented on a visual medium, a `span` element is intended to generate a sequence of inline areas, each containing one or more glyph areas.\n\nThe `span` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Animation.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more intermixed [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements, [`br`](https://www.w3.org/TR/ttml1/#content-vocabulary-br) elements, or text nodes.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-vocabulary-span",
        },
      ],
    },
    {
      name: "br",
      description: {
        kind: "markdown",
        value: "The `br` element denotes an explicit line break.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-vocabulary-br",
        },
      ],
    },
    {
      name: "styling",
      description: {
        kind: "markdown",
        value:
          "The `styling` element is a container element used to group styling matter, including metadata that applies to styling matter.\n\nThe `styling` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`style`](https://www.w3.org/TR/ttml1/#styling-vocabulary-style) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#styling-vocabulary-styling",
        },
      ],
    },
    {
      name: "style",
      description: {
        kind: "markdown",
        value:
          "The `style` element is used to define a set of style specifications expressed as a specified style set in accordance with [Specified Style Set Processing](https://www.w3.org/TR/ttml1/#semantics-style-resolution-processing-sss).\n\nIf a `style` element appears as a descendant of a `region` element, then the `style` element must be ignored for the purpose of computing referential styles as defined by [Referential Styling](https://www.w3.org/TR/ttml1/#semantics-style-association-referential) and [Chained Referential Styling](https://www.w3.org/TR/ttml1/#semantics-style-association-chained-referential).",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#styling-vocabulary-style",
        },
      ],
    },
    {
      name: "layout",
      description: {
        kind: "markdown",
        value:
          "The `layout` element is a container element used to group layout matter, including metadata that applies to layout matter.\n\nThe `layout` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#layout-vocabulary-layout",
        },
      ],
    },
    {
      name: "region",
      description: {
        kind: "markdown",
        value:
          "The `region` element is used to define a rectangular space or area into which content is to be flowed for the purpose of presentation.\n\n**Note**:\n\n    The rectangular area of a region is explicitly not constrained to be contained within the Root Container Region. In particular, the origin components of a region may be negative, and the extent (width and height) components of a region may be greater than the width and height of the Root Container Region. Whether a presentation processor clips such a region to the Root Container Region is implementation dependent, and not prescribed by this specification.\n\nIn addition, and in accordance with [Region Style Inheritance](https://www.w3.org/TR/ttml1/#semantics-style-inheritance-region), the `region` element may be used to specify inheritable style properties to be inherited by content that is flowed into it.\n\nThe `region` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more elements in the [`Animation.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group, followed by zero or more [`style`](https://www.w3.org/TR/ttml1/#styling-vocabulary-style) elements.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#layout-vocabulary-region",
        },
      ],
    },
    {
      name: "set",
      description: {
        kind: "markdown",
        value:
          "The `set` element is used as a child element of a [Content](https://www.w3.org/TR/ttml1/#element-vocab-type-content) element or a [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) element in order to express a discrete change of some style parameter value that applies over some time interval.\n\nThe `set` element accepts as its children zero or more elements in the [`Metadata.class`](https://www.w3.org/TR/ttml1/#element-vocab-group-table) element group.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#animation-vocabulary-set",
        },
      ],
    },
    {
      name: "metadata",
      description: {
        kind: "markdown",
        value:
          "The `metadata` element functions as a generic container for metadata information.\n\nMetadata information may be expressed with a `metadata` element by specifying (1) one or more metadata attributes on the `metadata` element, (2) one or more metadata child elements in the `metadata` element, or (3) a combination of metadata attributes and metadata child elements. Both types of metadata information are referred to in this document as metadata items.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-metadata",
        },
      ],
    },
    {
      name: "ttm:title",
      description: {
        kind: "markdown",
        value:
          "The `ttm:title` element is used to express a human-readable title of a specific element instance.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-title",
        },
      ],
    },
    {
      name: "ttm:desc",
      description: {
        kind: "markdown",
        value:
          "The `ttm:desc` element is used to express a human-readable description of a specific element instance.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-desc",
        },
      ],
    },
    {
      name: "ttm:copyright",
      description: {
        kind: "markdown",
        value:
          "The `ttm:copyright` element is used to express a human-readable copyright that applies to some scoping level.\n\nA copyright statement that applies to a document as a whole should appear as a child of the [`head`](https://www.w3.org/TR/ttml1/#document-structure-vocabulary-head) element.",
      },
      attributes: [],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-copyright",
        },
      ],
    },
    {
      name: "ttm:agent",
      description: {
        kind: "markdown",
        value:
          "The `ttm:agent` element is used to define an agent for the purpose of associating content information with an agent who is involved in the production or expression of that content.\n\nThe `ttm:agent` element accepts as its children zero or more [`ttm:name`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-name) elements followed by zero or one [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element.\n\nAt least one [`ttm:name`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-name) element child should be specified that expresses a name for the agent, whether it be the name of a person, character, group, or organization.",
      },
      attributes: [
        {
          name: "type",
          values: [
            {
              name: "person",
              description:
                "Indicates that the agent represents an individual person.",
            },
            {
              name: "character",
              description:
                "Indicates that the agent represents a fictional or dramatic character.",
            },
            {
              name: "group",
              description:
                "Indicates that the agent represents a group or collective.",
            },
            {
              name: "organization",
              description:
                "Indicates that the agent represents an organization or entity.",
            },
            {
              name: "other",
              description:
                "Indicates that the agent represents something else not covered by the other categories.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `type` attribute in TTML ([`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent)) is used to specify the type of agent being referenced. Here are the details:\n\n*   **Usage**: The `type` attribute must be specified on each [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element.\n*   **Values**:\n    *   `person`: Indicates that the agent represents an individual person.\n    *   `character`: Indicates that the agent represents a fictional or dramatic character.\n    *   `group`: Indicates that the agent represents a group or collective.\n    *   `organization`: Indicates that the agent represents an organization or entity.\n    *   `other`: Indicates that the agent represents something else not covered by the other categories.\n*   **Special Case**: If the value of the `type` attribute is `character`, then the [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element instance should specify a [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) child that specifies the agent that plays the role of the actor.\n*   **Significance**: A [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) metadata item is considered significant only when specified as a child of the [`head`](https://www.w3.org/TR/ttml1/#document-structure-vocabulary-head) element or as a child of a [`metadata`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-metadata) element child of the [`head`](https://www.w3.org/TR/ttml1/#document-structure-vocabulary-head) element. This means that the agent metadata is meant to provide information about the content and its context.",
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent",
        },
      ],
    },
    {
      name: "ttm:name",
      description: {
        kind: "markdown",
        value:
          "The ttm:name element is used to specify a name of a person, character, group, or organization.",
      },
      attributes: [
        {
          name: "type",
          values: [
            {
              name: "full",
              description: "Indicates that the name represents the full name of an entity.",
            },
            {
              name: "family",
              description: "Indicates that the name represents the family or surname of an entity.",
            },
            {
              name: "given",
              description: "Indicates that the name represents the family or surname of an entity.",
            },
            {
              name: "alias",
              description: "Indicates that the name represents an alias or alternative name of an entity.",
            },
            {
              name: "other",
              description: "Indicates that the name represents something else not covered by the other categories.",
            },
          ],
          description: {
            kind: "markdown",
            value:
              "The `type` attribute in TTML ([`ttm:name`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-name)) is used to specify the type of name being referenced. Here are the details:\n\n*   **Usage**: The `type` attribute must be specified on each [`ttm:name`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-name) element.\n*   **Values**:\n    *   `full`: Indicates that the name represents the full name of an entity.\n    *   `family`: Indicates that the name represents the family or surname of an entity.\n    *   `given`: Indicates that the name represents the given or first name of an entity.\n    *   `alias`: Indicates that the name represents an alias or alternative name of an entity.\n    *   `other`: Indicates that the name represents something else not covered by the other categories.\n*   **Relationship**: The relationship between the type of a name and the syntactic expression of the name is not defined by the TTML specification. This means that the specification does not dictate how the name should be structured or formatted based on its type.",
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-name",
        },
      ],
    },
    {
      name: "ttm:actor",
      description: {
        kind: "markdown",
        value:
          "The `ttm:actor` element is used to link the definition of a (role-based) character agent with another agent that portrays the character.",
      },
      attributes: [
        {
          name: "agent",
          description: {
            kind: "markdown",
            value:
              'The `agent` attribute of a [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element in TTML must reference a significant [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element that indicates the agent portraying the role of a character.\n\n*   **Requirement**: The `agent` attribute of a [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element is obligatory.\n*   **Referenced Element**: It must refer to a significant [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element.\n*   **Error Condition**: If an [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element references its parent [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element, it should be treated as an error.\n*   **Undefined Semantics**: The semantics of an [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element referencing its parent [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element are not defined by the TTML specification. Although discouraged, this relationship is syntactically allowed. Implementations should be capable of handling this syntax to prevent issues like infinite loops.\n*   **Recommendation**: When an actor portrays themselves, such as Steve Coogan playing Steve Coogan in "The Trip," it\'s recommended to use two [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) elements. The first element represents Steve Coogan as a person with a `type` attribute equal to `person`, while the second element represents Steve Coogan as a character with a `type` attribute equal to `character`. The [`ttm:actor`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor) element within the second [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element should reference the first [`ttm:agent`](https://www.w3.org/TR/ttml1/#metadata-vocabulary-agent) element.\n',
          },
        },
      ],
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-vocabulary-actor",
        },
      ],
    },
  ],
  globalAttributes: [
    {
      name: "xml:id",
      description: {
        kind: "markdown",
        value:
          "The xml:id attribute is used as defined by [XML ID](https://www.w3.org/TR/ttml1/#xmlid).\n\nThe `xml:id` attribute may be used with any element in the core vocabulary catalog.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-attribute-id",
        },
      ],
    },
    {
      name: "xml:lang",
      description: {
        kind: "markdown",
        value:
          "The `xml:lang` attribute may be inserted in documents to specify the language used in the contents and attribute values of any element.\n\nThe `xml:lang` attribute must be specified on the tt element and may be specified by an instance of any other element type in the core vocabulary catalog except parameter vocabulary.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-attribute-lang",
        },
      ],
    },
    {
      name: "xml:space",
      values: [
        {
          name: "default",
          description: {
            kind: "markdown",
            value:
              "*   White space is collapsed.\n*   Line breaks are treated as spaces.\n*   Surrounding line feeds are ignored.",
          },
        },
        {
          name: "preserve",
          description: {
            kind: "markdown",
            value:
              "*   White space is preserved.\n*   Line feeds are preserved.\n*   Surrounding line feeds are preserved.",
          },
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `xml:space` attribute, as defined by the XML 1.0 specification, is utilized in TTML with the following semantics:\n\n*   **Usage**: Determines how white space characters within the element's content are handled during processing.\n*   **Values**:\n    *   `default`: Indicates that white space should be collapsed and treated as insignificant unless specifically preserved.\n    *   `preserve`: Specifies that white space should be preserved exactly as it appears in the document.\n*   **Applicability**: Applicable to any element in the core vocabulary catalog except the parameter vocabulary.\n*   **Presentation Processing**:\n    *   For `default`:\n        *   White space is collapsed.\n        *   Line breaks are treated as spaces.\n        *   Surrounding line feeds are ignored.\n    *   For `preserve`:\n        *   White space is preserved.\n        *   Line feeds are preserved.\n        *   Surrounding line feeds are preserved.\n*   **Other Processing**:\n    *   When processing intended for visual presentation, the semantics of space collapsing and preservation should be respected.\n    *   For other types of processing, the treatment of the `xml:space` attribute is processor-dependent but should ideally respect the specified semantics.\n*   **Note**:\n    *   The semantics of the properties specified for `default` and `preserve` values are defined in the [XSL 1.1] (https://www.w3.org/TR/ttml1/#xsl11) specification.\n\nIn essence, xml:space controls how white space is handled within the content of TTML elements, either collapsing it or preserving it based on the specified value.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#content-attribute-space",
        },
      ],
    },
    {
      name: "xml:base",
      description: {
        kind: "markdown",
        value:
          "The xml:base attribute in TTML serves a specific purpose: it allows for the abbreviation of feature designation URIs defined by child ttp:feature elements. Here's how it works:\n\n**Type and Format**: If you include the xml:base attribute, it must follow these rules:\n\n    *   It must adhere to the xsd:anyURI data type defined in XML Schema.\n    *   It must express an absolute URI adhering to the specifications of XML Base.\n    *   It must express a feature namespace as defined by TTML Feature Designations.\n\n**Default Value**: If you don't specify the xml:base attribute, the default value applies. This default value is the TT Feature Namespace.\n\nIn simpler terms, the xml:base attribute helps simplify the way feature designation URIs are written in child ttp:feature elements. It ensures that these URIs follow specific rules regarding their type, format, and namespace. If you don't specify xml:base, TTML assumes that the TT Feature Namespace is being used as the default.\n\nThe possible values for the `xml:base` attribute are:\n\n*   `http://www.w3.org/ns/ttml/feature/` for `<ttp:features>`\n*   `http://www.w3.org/ns/ttml/extension/ for `<ttp:extension>`",
      },
    },
    {
      name: "style",
      description: {
        kind: "markdown",
        value:
          "The `style` attribute in TTML is used for referential style association, allowing an element to reference one or more style elements that define a set of style properties. Here are the key points regarding its usage:\n\n*   **Usage**: Used to reference one or more style elements defining a style set.\n*   **Element Types**: The `style` attribute may be specified by instances of the following element types: `body`, `br`, `div`, `p`, `region`, `span`, and `style`.\n*   **Value**: If specified, the value of a `style` attribute must adhere to the `IDREFS` data type defined by [XML Schema Part 2](https://www.w3.org/TR/ttml1/#xsd-2). Each `IDREF` referenced in the value must point to a style element that has a styling element as an ancestor.\n*   **Redundancy Check**: If the same `IDREF` appears multiple times in the value of a `style` attribute, there should be at least one intervening `IDREF` that is different, preventing redundant referencing of the same style. This is to discourage redundant referential styling.\n*   **Semantics**: For detailed semantics of the `style` attribute, including [referential styling](https://www.w3.org/TR/ttml1/#semantics-style-association-referential) and [chained referential styling](https://www.w3.org/TR/ttml1/#semantics-style-association-chained-referential).\n\nIn summary, the `style` attribute allows elements to reference style elements, enabling the application of predefined styles to those elements. It provides a mechanism for managing and applying styles consistently across a TTML document.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-style",
        },
      ],
    },
    {
      name: "style",
      description: {
        kind: "markdown",
        value:
          "The `style` attribute in TTML is used for referential style association, allowing elements to reference one or more style elements that define a set of style properties. Here are the key points regarding its usage:\n\n*   **Usage**: Used to reference one or more style elements that define a style (property) set.\n*   **Syntax**: The value of the style attribute must adhere to the IDREFS data type defined by [XML Schema Part 2](https://www.w3.org/TR/ttml1/#xsd-2). Each IDREF in the value must reference a style element that has a styling element as an ancestor.\n*   **Elements**: The `style` attribute may be specified by instances of the following element types: `body`, `br`, `div`, `p`, `region`, `span`, `style`.\n*   **Constraint**: If the same IDREF appears more than once in the value of a `style` attribute, there should be an intervening IDREF where the ID is not equal to the previous one. This discourages redundant referential styling while allowing the same style to be referenced multiple times, potentially overriding prior referenced styles.\n*   **Semantics**: The style attribute allows elements to inherit or override styles defined elsewhere, providing a mechanism for consistent styling across a TTML document.\n\nIn summary, the `style` attribute facilitates efficient and flexible styling of TTML elements by referencing predefined style sets defined in style elements.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-style",
        },
      ],
    },
    {
      name: "tts:backgroundColor",
      description: {
        kind: "markdown",
        value:
          "The `tts:backgroundColor` attribute in TTML is used to define the background color of a region or an area generated by content flowed into a region. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the background color of a region or an area generated by content flowed into a region.\n*   **Element Types**: The `tts:backgroundColor` attribute may be specified by instances of the following element types: `body`, `div`, `p`, `region`, and `span`.\n*   **Values**: The value of `tts:backgroundColor` is a color. It should adhere to the syntax and semantics of color values, which are typically represented as hexadecimal, RGB, RGBA, HSL, or named colors.\n*   **Initial Value**: The initial value of `tts:backgroundColor` is `transparent`.\n*   **Inherited**: This style property is not inherited from parent elements.\n*   **Percentages**: Percentage values are not applicable to `tts:backgroundColor`.\n*   **Animatable**: Changes to `tts:backgroundColor` are discrete and cannot be smoothly animated over time.\n*   **Anonymous Span**: For the purpose of determining the applicability of this style property, each character child of a `p` element is considered to be enclosed in an anonymous `span`.\n\nIn summary, the `tts:backgroundColor` attribute allows you to specify the background color of regions or areas in a TTML document, providing visual styling for content presentation.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-backgroundColor",
        },
      ],
    },
    {
      name: "tts:color",
      description: {
        kind: "markdown",
        value:
          "The `tts:color` attribute in TTML is used to specify the foreground color of marks associated with an area generated by content flowed into a region. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the foreground color of marks associated with content flowed into a region.\n*   **Element Types**: The tts:color attribute may be specified by instances of the span element type.\n*   **Values**: The value of tts:color is a color. It should adhere to the syntax and semantics of color values, typically represented as hexadecimal, RGB, RGBA, HSL, or named colors.\n*   **Initial Value**: The initial value of tts:color is implementation-dependent. In the absence of end-user preference information, a conformant presentation processor should use an initial value that is highly contrastive to the background color of the Root Container Region.\n*   **Inherited**: tts:color is inherited from parent elements. If not explicitly specified, the color may be inherited from ancestor elements.\n*   **Percentages**: Percentage values are not applicable to tts:color.\n*   **Animatable**: Changes to tts:color are discrete and cannot be smoothly animated over time.\n*   **Anonymous Span**: For the purpose of determining the applicability of this style property, each character child of a p element is considered to be enclosed in an anonymous span.\n\nIn summary, the tts:color attribute allows you to define the color of text content within a TTML document, ensuring proper contrast and visibility for improved readability.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-color",
        },
      ],
    },
    {
      name: "tts:direction",
      values: [
        {
          name: "ltr",
          description: "Specifies left-to-right directionality.",
        },
        {
          name: "rtl",
          description: "Specifies right-to-left directionality.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:direction` attribute in TTML is used to specify the directionality of text content. Here are the key points regarding its usage:\n\n*   **Usage**: Determines the bidirectional paragraph level or the directionality of a bidirectional embedding or override.\n*   **Element Types**: The `tts:direction` attribute may be specified by instances of the `p` and `span` element types.\n*   **Values**: The attribute can have two values:\n    *   `ltr`: Specifies left-to-right directionality.\n    *   `rtl`: Specifies right-to-left directionality.\n*   **Initial Value**: The initial value of `tts:direction` is `ltr`.\n*   **Inherited**: The attribute is inherited from parent elements. If not explicitly specified, the directionality may be inherited from ancestor elements.\n*   **Percentages**: Percentage values are not applicable to `tts:direction`.\n*   **Animatable**: Changes to `tts:direction` are discrete and cannot be smoothly animated over time.\n*   **Anonymous Span**: For the purpose of determining the applicability of this style property, each character child of a `p` element is considered to be enclosed in an anonymous `span`.\n\nWhen applied to a p element, the computed value of this property explicitly establishes the paragraph level according to the Higher Level Protocol HL1 specified by Unicode Bidirectional Algorithm [UAX9](https://www.w3.org/TR/ttml1/#uax9).\n\nWhen applied to a `span` element (or anonymous `span`), the computed value of this property, combined with the computed value of the `tts:unicodeBidi` style property, determines the directionality of a bidirectional embedding or override as specified by Unicode Bidirectional Algorithm [UAX9](https://www.w3.org/TR/ttml1/#uax9).\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `ltr`.\n\nIn summary, the `tts:direction` attribute allows you to specify the directionality of text content within a TTML document, ensuring proper rendering of bidirectional text.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-direction",
        },
      ],
    },
    {
      name: "tts:display",
      values: [
        {
          name: "auto",
          description:
            "Specifies that the element is a candidate for region layout and presentation.",
        },
        {
          name: "none",
          description:
            "Specifies that the element and its descendants are ineligible for region layout and presentation.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:display` attribute in TTML is used to specify whether an element is eligible for layout and composition within a region. Here's a breakdown of its usage:\n\n*   **Usage**: Determines whether an element and its descendants are eligible for layout and presentation within a region.\n*   **Element Types**: The `tts:display` attribute may be specified by instances of the `body`, `div`, `p`, `region`, and `span` element types.\n*   **Values**: The attribute can have two values:\n    *   `auto`: Specifies that the element is a candidate for region layout and presentation.\n    *   `none`: Specifies that the element and its descendants are ineligible for region layout and presentation.\n*   **Initial Value**: The initial value of `tts:display` is `auto`.\n*   **Inherited**: The attribute is not inherited from parent elements.\n*   **Percentages**: Percentage values are not applicable to `tts:display`.\n*   **Animatable**: Changes to `tts:display` are discrete and cannot be smoothly animated over time.\n*   **Anonymous Span**: For the purpose of determining the applicability of this style property, each character child of a `p` element is considered to be enclosed in an anonymous `span`.\n\nIf the value of the `tts:display` attribute is set to `auto`, the affected element is considered eligible for region layout and presentation. However, if the value is set to `none`, the affected element and its descendants are considered ineligible for region layout and presentation.\n\nIn summary, the `tts:display` attribute allows you to control whether an element and its descendants participate in region layout and presentation within a TTML document.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-display",
        },
      ],
    },
    {
      name: "tts:displayAlign",
      values: [
        {
          name: "before",
          description: "Aligns block areas to the before edge of the region.",
        },
        {
          name: "center",
          description:
            "Centers block areas within the region along the block progression direction.",
        },
        {
          name: "after",
          description: "Aligns block areas to the after edge of the region.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:displayAlign` attribute in TTML is used to specify the alignment of block areas in the block progression direction within a region. Here's a summary of its usage:\n\n*   **Usage**: Determines how block areas are aligned within a region along the block progression direction.\n*   **Element Types**: The `tts:displayAlign` attribute may be specified only by the `region` element type.\n*   **Values**: The attribute can have three values:\n    *   `before`: Aligns block areas to the before edge of the region.\n    *   `center`: Centers block areas within the region along the block progression direction.\n    *   `after`: Aligns block areas to the after edge of the region.\n*   **Initial Value**: The initial value of `tts:displayAlign` is `before`.\n*   **Inherited**: The attribute is not inherited from parent elements.\n*   **Percentages**: Percentage values are not applicable to `tts:displayAlign`.\n*   **Animatable**: Changes to `tts:displayAlign` are discrete and cannot be smoothly animated over time.\n\nIf a computed value of the property associated with `tts:displayAlign` is not supported, then a presentation processor must use the value `before` as the default.\n\nIn summary, the `tts:displayAlign` attribute allows you to control the alignment of block areas within a region along the block progression direction in a TTML document.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-displayAlign",
        },
      ],
    },
    {
      name: "tts:extent",
      values: [
        {
          name: "auto",
          description:
            "the computed value of the style property must be considered to be the same as the extent of the Root Container Region.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          'The `tts:extent` attribute in TTML is utilized to define the width and height of a region area, which could potentially represent the Root Container Region. Here\'s a detailed explanation:\n\n*   **Usage**: This attribute specifies the width and height of a region area.\n*   **Values**:\n    *   `auto`: Indicates that the extent should be automatically determined.\n    *   `<length> <length>`: Specifies the width and height using\n[`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) values.\n*   **Initial Value**: `auto`\n*   **Applies to**: `tt`, `region`\n*   **Inherited**: No\n*   **Percentages**: Relative to the width and height of the Root Container Region\n*   **Animatable**: Discrete (not smoothly animatable)\n*   **Interpretation**:\n    *   If two `<length>` values are provided, they represent width and height respectively.\n    *   The `<length>` values must be non-negative.\n*   **Default Behavior**:\n    *   If the value is `auto`, the computed value is considered to be the same as the extent of the Root Container Region.\n    *   The extent of the Root Container Region is determined either by a `tts:extent` specified on the `tt` element or by default rules if not specified.\n*   **Unit Specification**:\n    *   When specified on the `tt` element, the width and height must be expressed in terms of non-percentage, definite lengths using pixel units.\n*   **Handling Unsupported Values**:\n    *   If a computed value of the property associated with this attribute is not supported, the presentation processor must use the closest supported value.\n    *   The "closest supported value" is determined based on the Euclidean distance, favoring the value that ensures content containment without causing region overflow.\n\nIn summary, `tts:extent` allows authors to define the size of a region area within a TTML document, with options for automatic determination or manual specification using length values.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-extent",
        },
      ],
    },
    {
      name: "tts:fontFamily",
      values: [
        {
          name: "default",
        },
        {
          name: "monospace",
        },
        {
          name: "sansSerif",
        },
        {
          name: "serif",
        },
        {
          name: "monospaceSansSerif",
        },
        {
          name: "monospaceSerif",
        },
        {
          name: "proportionalSansSerif",
        },
        {
          name: "proportionalSerif",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:fontFamily` attribute in TTML is used to specify the font family from which glyphs are selected for the text content within a region. Here's a breakdown of its usage:\n\n*   **Usage**: Specifies the font family for the glyphs in the text content.\n*   **Element Types**: The `tts:fontFamily` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to span elements.\n*   **Values**: The attribute value consists of one or more font family names separated by commas. Each font family name can be either a specific font family name ([`<familyName>`](https://www.w3.org/TR/ttml1/#style-value-familyName)) or a generic font family name ([`<genericFamilyName>`](https://www.w3.org/TR/ttml1/#style-value-genericFamilyName)).\n*   **Initial Value**: The initial value of `tts:fontFamily` is `default`, which represents a generic font family name.\n*   **Inherited**: Yes, the attribute is inherited from parent elements.\n*   **Percentages**: Percentage values are not applicable to `tts:fontFamily`.\n*   **Animatable**: Changes to `tts:fontFamily` are discrete and cannot be smoothly animated over time.\n\nIt's worth noting:\n\n*   Linear whitespace (LWSP) around the comma delimiters in the attribute value is permitted but not recommended.\n*   If a presentation processor does not support the computed font family, it should attempt to map it to a supported font family with similar typographic characteristics. If no mapping is available, it should use the value `default`.\n\nIn summary, `tts:fontFamily` allows you to specify the font family for text content within a region in a TTML document, providing flexibility in choosing the font style for different parts of the content.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-fontFamily",
        },
      ],
    },
    {
      name: "tts:fontSize",
      description: {
        kind: "markdown",
        value:
          "The `tts:fontSize` attribute in TTML is used to specify the font size for glyphs within a region. Here's a detailed explanation of its usage:\n\n*   **Usage**: Specifies the font size for glyphs in the text content.\n*   **Element Types**: The `tts:fontSize` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Values**: The attribute value can be specified as one or two [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) values. If one value is specified, it applies equally to the horizontal and vertical size of a glyph's EM square. If two values are specified, the first one represents the horizontal size, and the second one represents the vertical size.\n*   **Initial Value**: The initial value of `tts:fontSize` is `1c`, representing a default font size.\n*   **Inherited**: Yes, the attribute is inherited from parent elements.\n*   **Percentages**: If the element is not a `region`, the value can be relative to the parent element's computed font size. Otherwise, it's relative to the Computed Cell Size.\n*   **Animatable**: Changes to `tts:fontSize` are discrete and cannot be smoothly animated over time.\n\nIt's essential to note:\n\n*   Anamorphic font scaling is supported, allowing fonts to be scaled independently horizontally and vertically.\n*   Relative length values (percentage, cell, or EM units) are resolved concerning a referenced 2-dimensional size value, consisting of width and height components.\n*   If a computed value is not supported, the presentation processor should use the closest supported value, where the closest value is determined by minimizing the Euclidean distance from the computed value.\n\nIn summary, `tts:fontSize` enables you to control the size of glyphs within a region in a TTML document, offering flexibility in adjusting the appearance of text content.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-fontFamily",
        },
      ],
    },
    {
      name: "tts:fontStyle",
      values: [
        {
          name: "normal",
          description: "Represents the standard font style.",
        },
        {
          name: "italic",
          description: "Specifies italic font style.",
        },
        {
          name: "oblique",
          description:
            "Denotes a shear transformation (at an unspecified angle) in the inline progression dimension.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:fontStyle` attribute in TTML is used to specify the font style to apply to glyphs within a region. Here's an explanation of its usage:\n\n*   **Usage**: Specifies the font style for glyphs in the text content.\n*   **Element Types**: The `tts:fontStyle` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Values**: The attribute value can be one of the following:\n    *   `normal`: Represents the standard font style.\n    *   `italic`: Specifies italic font style.\n    *   `oblique`: Denotes a shear transformation (at an unspecified angle) in the inline progression dimension.\n*   **Initial Value**: The initial value of `tts:fontStyle` is `normal`.\n*   **Inherited**: Yes, the attribute is inherited from parent elements.\n*   **Percentages**: N/A\n*   **Animatable**: Changes to `tts:fontStyle` are discrete and cannot be smoothly animated over time.\n\nIt's important to note that if a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `normal`.\n\nIn summary, `tts:fontStyle` allows you to control the font style of glyphs within a region in a TTML document, providing options for `normal`, `italic`, or `oblique` styles.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-fontStyle",
        },
      ],
    },
    {
      name: "tts:fontWeight",
      values: [
        {
          name: "noraml",
          description: "Represents the standard font weight.",
        },
        {
          name: "bold",
          description: "Specifies bold font weight.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:fontWeight` attribute in TTML is used to specify the font weight to apply to glyphs within a region. Here's an explanation of its usage:\n\n*   **Usage**: Specifies the font weight for glyphs in the text content.\n*   **Element Types**: The `tts:fontWeight` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Values**: The attribute value can be one of the following:\n    *   `normal`: Represents the standard font weight.\n    *   `bold`: Specifies bold font weight.\n*   **Initial Value**: The initial value of `tts:fontWeight` is `normal`.\n*   **Inherited**: Yes, the attribute is inherited from parent elements.\n*   **Percentages**: N/A\n*   **Animatable**: Changes to `tts:fontWeight` are discrete and cannot be smoothly animated over time.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `normal`.\n\nIn summary, `tts:fontWeight` allows you to control the font weight of glyphs within a region in a TTML document, providing options for `normal` or `bold` weights.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-fontWeight",
        },
      ],
    },
    {
      name: "https://www.w3.org/TR/ttml1/#style-attribute-lineHeight",
      values: [
        {
          name: "normal",
          description:
            "Represents the standard inter-line separation, which is implementation-dependent but typically around 125% of the font size.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:lineHeight` attribute in TTML is used to specify the inter-baseline separation between line areas generated by content within a region. Here's an explanation of its usage:\n\n*   **Usage**: Specifies the inter-baseline separation between lines of text.\n*   **Element Types**: The `tts:lineHeight` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) elements.\n*   **Values**: The attribute value can be one of the following:\n    *   `normal`: Represents the standard inter-line separation, which is implementation-dependent but typically around 125% of the font size.\n    *   [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length): Specifies a specific inter-line separation using a length value.\n*   **Initial Value**: The initial value of `tts:lineHeight` is `normal`.\n*   **Inherited**: Yes. When applying inheritance semantics, the value `normal` is inherited. However, when used for paragraph layout, it is further processed to obtain a used value.\n*   **Percentages**: Relative to the element's font size if a length value is specified.\n*   **Animatable**: Changes to `tts:lineHeight` are discrete and cannot be smoothly animated over time.\n\nIf a content author wishes to avoid potential differences in interpretation of `normal`, especially due to variations in available fonts, they can explicitly specify a line height using a [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) value.\n\nThe semantics of the style property represented by this attribute are based on those defined by XSL 1.1. When the value is `normal`, its inherited value is `normal`, but it's further processed to obtain a used value for paragraph layout.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-lineHeight",
        },
      ],
    },
    {
      name: "tts:opacity",
      description: {
        kind: "markdown",
        value:
          "The `tts:opacity` attribute in TTML is used to specify the opacity of marks associated with a region. Here's an explanation of its usage:\n\n*   **Usage**: Specifies the opacity (or transparency) of marks within a region.\n*   **Element Types**: The `tts:opacity` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to `region` elements.\n*   **Values**: The attribute value is a numerical value representing the opacity level. It is specified as [`<alpha>`](https://www.w3.org/TR/ttml1/#style-value-alpha), where [`<alpha>`](https://www.w3.org/TR/ttml1/#style-value-alpha) is a decimal number between `0.0` (completely transparent) and `1.0` (completely opaque).\n*   **Initial Value**: The initial value of `tts:opacity` is 1.0, indicating full opacity.\n*   **Inherited**: No, the opacity value is not inherited by child elements.\n*   **Percentages**: Not applicable. The opacity value is specified as a decimal number.\n*   **Animatable**: Changes to `tts:opacity` are discrete and cannot be smoothly animated over time.\n\nWhen presented on a visual medium, the opacity specified by `tts:opacity` is applied uniformly and linearly to all marks produced by content targeted to the region.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-opacity",
        },
      ],
    },
    {
      name: "tts:origin",
      values: [
        {
          name: "auto",
          description:
            "Indicates that the origin is the same as the Root Container Region.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:origin` attribute in TTML is used to specify the x and y coordinates of the origin of a region area with respect to the origin of the Root Container Region. Here's an explanation of its usage:\n\n*   **Usage**: Specifies the x and y coordinates of the origin of a region area.\n*   **Element Types**: The `tts:origin` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to `region` elements.\n*   **Values**: The attribute value can be either auto or `<length> <length>`, where [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) represents a numerical value indicating the coordinate.\n*   **Initial Value**: The initial value of `tts:origin` is `auto`, indicating that the origin is the same as the Root Container Region.\n*   **Applies to**: Only applies to `region` elements.\n*   **Inherited**: No, the origin value is not inherited by child elements.\n*   **Percentages**: If [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) values are used, they are relative to the width and height of the Root Container Region.\n*   **Animatable**: Changes to `tts:origin` are discrete and cannot be smoothly animated over time.\n\nIf the value of `tts:origin` is `auto`, then the computed value of the style property must be considered the same as the origin of the Root Container Region.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the closest supported value. This means that the processor should choose the value for which the Euclidean distance between the computed origin and the supported origin is minimized. If there are multiple closest supported values equally distant from the computed value, then the value least distant from (0,0), i.e., closest to the coordinate space origin, is used.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-origin",
        },
      ],
    },
    {
      name: "tts:overflow",
      valueSet: "vh",
      description: {
        kind: "markdown",
        value:
          "The `tts:overflow` attribute in TTML is used to specify a style property that defines whether a region area is clipped or not if the descendant areas of the region overflow its extent. Here's an explanation of its usage:\n\n*   **Usage**: Specifies whether content should be clipped outside of the region if it overflows its extent.\n*   **Element Types**: The `tts:overflow` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to `region` elements.\n*   **Values**: It can have two values:\n    *   `visible`: Content should not be clipped outside of the region.\n    *   `hidden`: Content should be clipped outside of the region.\n*   **Initial Value**: The initial value of `tts:overflow` is `hidden`, indicating that content should be clipped outside of the region.\n*   **Applies to**: Only applies to `region` elements.\n*   **Inherited**: No, the overflow behavior is not inherited by child elements.\n*   **Percentages**: N/A\n*   **Animatable**: Changes to `tts:overflow` are discrete and cannot be smoothly animated over time.\n\nWhen `tts:overflow` is set to `visible`, content should not be clipped outside of the affected region, and region composition and layout must be performed as if the region's width and height were unconstrained, but with a well-defined origin. If the value is `hidden`, then content should be clipped outside of the affected region.\n\nIt's important to note that the overflow attribute has no impact on presentation processing when no overflow condition applies. An overflow condition applies when the bounding box of some descendant line area extends outside of the containing region's nominal content area extent. Overflow in the inline progression dimension can occur only if [`tts:wrapOption`](https://www.w3.org/TR/ttml1/#style-attribute-wrapOption) is `noWrap`.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `hidden`.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-overflow",
        },
      ],
    },
    {
      name: "tts:padding",
      description: {
        kind: "markdown",
        value:
          "The `tts:padding` attribute in TTML is used to specify padding space on all sides of a region area. Here's a breakdown of its usage:\n\n*   **Usage**: Specifies padding (or inset) space on all sides of a region area.\n*   **Element Types**: The `tts:padding` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Values**: It can have one of the following formats:\n    *   `<length>`\n    *   `<length> <length>`\n    *   `<length> <length> <length>`\n    *   `<length> <length> <length> <length>`\n*   **Initial Value**: The initial value of `tts:padding` is `0px`, indicating no padding.\n*   **Applies to**: Only applies to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Inherited**: No, the padding is not inherited by child elements.\n*   **Percentages**: Percentage values are relative to the dimension of the region to which they apply.\n*   **Animatable**: Changes to `tts:padding` are discrete and cannot be smoothly animated over time.\n\nIf the value of `tts:padding` consists of one [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) specification, then that length applies to all edges of the affected areas. If the value consists of two [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) specifications, then the first applies to the before and after edges, and the second applies to the start and end edges. If three [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) specifications are provided, then the first applies to the before edge, the second applies to the start and end edges, and the third applies to the after edge. If four [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) specifications are provided, then they apply to before, end, after, and start edges, respectively.\n\nNote that percentage values are relative to the dimension of the region to which they apply. For example, if the before and after edges correspond to the top and bottom edges of the region, then percentage values that apply to either of the two edges are relative to the height of the region.\n\nThe [`<length>`](https://www.w3.org/TR/ttml1/#style-value-length) value(s) used to express padding must be non-negative.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the closest supported value. In this context, the closest supported value is determined based on the one-dimensional Euclidean distance between the computed padding and the supported padding, with preference given to the least padding value if there are multiple equally distant supported values.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-padding",
        },
      ],
    },
    {
      name: "tts:showBackground",
      values: [
        {
          name: "always",
          description:
            "Specifies that the background color of a region is always rendered when performing presentation processing on a visual medium.",
        },
        {
          name: "whenActive",
          description:
            "Specifies that the background color of a region is rendered only when some content is flowed into the region.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:showBackground` attribute in TTML is used to specify constraints on when the background color of a region is intended to be presented. Here are the details:\n\n*   **Usage**: Specifies constraints on when the background color of a region is intended to be presented.\n*   **Element Types**: The `tts:showBackground` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Values**: It can have one of the following values:\n    *   `always`: Specifies that the background color of a region is always rendered when performing presentation processing on a visual medium.\n    *   `whenActive`: Specifies that the background color of a region is rendered only when some content is flowed into the region.\n*   **Initial Value**: The initial value of `tts:showBackground` is `always`, indicating that the background color is always rendered.\n*   **Applies to**: Only applies to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Inherited**: No, the `tts:showBackground` attribute is not inherited by child elements.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:showBackground` are discrete and cannot be smoothly animated over time.\n\nA region satisfies the `whenActive` case if:\n\n*   It is a Temporally Active Region.\n*   Content is selected into the region, and that content is also Temporally Active.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `always`.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-showBackground",
        },
      ],
    },
    {
      name: "tts:textAlign",
      values: [
        {
          name: "left",
          description:
            "Aligns inline areas to the left within the containing block area.",
        },
        {
          name: "center",
          description: "Centers inline areas within the containing block area.",
        },
        {
          name: "right",
          description:
            "Aligns inline areas to the right within the containing block area.",
        },
        {
          name: "start",
          description:
            "Aligns inline areas to the start of the inline progression direction, which may be the left or right depending on the writing mode.",
        },
        {
          name: "end",
          description:
            "Aligns inline areas to the end of the inline progression direction, which may be the right or left depending on the writing mode.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:textAlign` attribute in TTML is used to specify a style property that defines how inline areas are aligned within a containing block area in the inline progression direction. Here are the details:\n\n*   **Usage**: Specifies how inline areas are aligned within a containing block area in the inline progression direction.\n*   **Element Types**: The `tts:textAlign` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) elements.\n*   **Values**: It can have one of the following values:\n    *   `left`: Aligns inline areas to the left within the containing block area.\n    *   `center`: Centers inline areas within the containing block area.\n    *   `right`: Aligns inline areas to the right within the containing block area.\n    *   `start`: Aligns inline areas to the start of the inline progression direction, which may be the left or right depending on the writing mode.\n    *   `end`: Aligns inline areas to the end of the inline progression direction, which may be the right or left depending on the writing mode.\n*   **Initial Value**: The initial value of `tts:textAlign` is `start`, which aligns inline areas to the start of the inline progression direction.\n*   **Applies to**: Only applies to [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) elements.\n*   **Inherited**: Yes, the `tts:textAlign` attribute is inherited by child elements.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:textAlign` are discrete and cannot be smoothly animated over time.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `start`.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-textAlign",
        },
      ],
    },
    {
      name: "tts:textDecoration",
      description: {
        kind: "markdown",
        value:
          'The `tts:textDecoration` attribute in TTML is used to specify a style property that defines a text decoration effect to apply to glyph areas or other inline areas generated by content flowed into a region. Here are the details:\n\n*   **Usage**: Specifies a text decoration effect to apply to glyph areas or other inline areas generated by content flowed into a region.\n*   **Element Types**: The `tts:textDecoration` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\nValues:\n    *   `none`: No text decoration is applied.\n    *   One or more of the following, separated by `||` (logical OR):\n        *   `underline`: Apply underline decoration.\n        *   `noUnderline`: Do not apply underline decoration.\n        *   `lineThrough`: Apply line-through decoration.\n        *   `noLineThrough`: Do not apply line-through decoration.\n        *   `overline`: Apply overline decoration.\n        *   `noOverline`: Do not apply overline decoration.\n*   **Initial Value**: The initial value of `tts:textDecoration` is `none`, indicating no text decoration.\n*   **Applies to**: Only applies to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Inherited**: The inheritance semantics are as follows:Each of the three possible decorations (underline, line through, overline) is inherited separately from the others.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:textDecoration` are discrete and cannot be smoothly animated over time.\n\nFor instance, if a [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div) element has `tts:textDecoration` set to `(noUnderline, lineThrough, overline)` and a [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) element inside the [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div) specifies `tts:textDecoration="noLineThrough"`, then the resulting value for the [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) element will be `(noUnderline, noLineThrough, overline)`, with the `noLineThrough` value overriding the one inherited from the [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div).\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `none`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-textDecoration",
        },
      ],
    },
    {
      name: "tts:textOutline",
      values: [
        {
          name: "none",
          description: "No text outline is applied.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          'The `tts:textOutline` attribute in TTML is used to specify a style property that defines a text outline effect to apply to glyphs generated by content flowed into a region. Here are the details:\n\n*   **Usage**: Specifies a text outline effect to apply to glyphs generated by content flowed into a region.\n*   **Element Types**: The `tts:textOutline` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to span elements.\n*   **Values**:\n    *   `none`: No text outline is applied.\n    *   `<color>? <length> <length>?`:\n        *   Optional `<color>`: Denotes the outline color. If not present, the computed value of tts:color applies.\n        *   `<length>`: Denotes the outline thickness.\n        *   Second `<length>` (optional): Indicates the blur radius.\n*   **Initial Value**: The initial value of `tts:textOutline` is none, indicating no text outline.\n*   **Applies to**: Only applies to span elements.\n*   **Inherited**: Yes, the attribute is inherited.\n*   **Percentages**: Relative to the font size of the element.\n*   **Animatable**: Changes to `tts:textOutline` are discrete and cannot be smoothly animated over time.\n\nFor instance, if you specify `tts:textOutline="red 2px"`, it means a red outline with a thickness of 2 pixels will be applied to the text. If you omit the color, the outline color will be the same as the text color ([`tts:color`](https://www.w3.org/TR/ttml1/#style-attribute-color)), and if you omit the second length (blur radius), it defaults to a value of 0 pixels, resulting in a sharp outline.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `none`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-textOutline",
        },
      ],
    },
    {
      name: "tts:unicodeBidi",
      values: [
        {
          name: "normal",
          description:
            "Default behavior according to the Unicode bidirectional algorithm.",
        },
        {
          name: "embed",
          description:
            "Embedding according to the Unicode bidirectional algorithm.",
        },
        {
          name: "bidiOverride",
          description:
            "Bidirectional override according to the Unicode bidirectional algorithm.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          'The `tts:unicodeBidi` attribute in TTML is used to specify a style property that defines a directional embedding or override according to the Unicode bidirectional algorithm. Here are the details:\n\n*   **Usage**: Specifies a directional embedding or override according to the Unicode bidirectional algorithm.\n*   **Element Types**: The `tts:unicodeBidi` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) and [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Values**:\n    *   `normal`: Default behavior according to the Unicode bidirectional algorithm.\n    *   `embed`: Embedding according to the Unicode bidirectional algorithm.\n    *   `bidiOverride`: Bidirectional override according to the Unicode bidirectional algorithm.\n*   **Initial Value**: The initial value of `tts:unicodeBidi` is `normal`.\n*   **Applies to**: Applies to [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p) and [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Inherited**: No, the attribute is not inherited.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:unicodeBidi` are discrete and cannot be smoothly animated over time.\n\nFor example, if you specify `tts:unicodeBidi="embed"`, it means that the directionality of the text within the element is overridden to follow the embedding direction specified by the Unicode bidirectional algorithm.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `normal`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-unicodeBidi",
        },
      ],
    },
    {
      name: "tts:visibility",
      valueSet: "vh",
      description: {
        kind: "markdown",
        value:
          'The `tts:visibility` attribute in TTML is used to specify a style property that determines whether generated areas are visible or hidden when rendered on a visual presentation medium. Here are the details:\n\n*   **Usage**: Specifies whether generated areas are visible or hidden when rendered.\n*   **Element Types**: The `tts:visibility` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to body, div, p, region, and span elements.\n*   **Values**:\n    *   `visible`: The generated areas are rendered visible when presented on a visual medium.\n    *   `hidden`: The generated areas are not rendered visible; they are hidden.\n*   **Initial Value**: The initial value of `tts:visibility` is `visible`.\n*   **Applies to**: Applies to [`body`](https://www.w3.org/TR/ttml1/#document-structure-vocabulary-body), [`div`](https://www.w3.org/TR/ttml1/#content-vocabulary-div), [`p`](https://www.w3.org/TR/ttml1/#content-vocabulary-p), [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region), and [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Inherited**: Yes, the attribute is inherited.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:visibility` are discrete and cannot be smoothly animated over time.\n\nFor example, if you specify `tts:visibility="hidden"`, the generated areas associated with the element will not be visible when presented on a visual medium.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `visible`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-visibility",
        },
      ],
    },
    {
      name: "tts:wrapOption",
      values: [
        {
          name: "wrap",
          description:
            "Automatic line wrapping (breaking) is allowed within the context of the affected element.",
        },
        {
          name: "nowrap",
          description:
            "Automatic line wrapping (breaking) is disabled within the context of the affected element.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          'The `tts:wrapOption` attribute in TTML is used to specify a style property that determines whether automatic line wrapping (breaking) applies within the context of the affected element. Here are the details:\n\n*   **Usage**: Specifies whether automatic line wrapping applies within the context of the affected element.\n*   **Element Types**: The `tts:wrapOption` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Values**:\n    *   `wrap`: Automatic line wrapping (breaking) is allowed within the context of the affected element.\n    *   `noWrap`: Automatic line wrapping (breaking) is disabled within the context of the affected element.\n*   **Initial Value**: The initial value of `tts:wrapOption` is `wrap`.\n*   **Applies to**: Applies to [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) elements.\n*   **Inherited**: Yes, the attribute is inherited.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:wrapOption` are discrete and cannot be smoothly animated over time.\nFor example, if you specify `tts:wrapOption="noWrap"`, automatic line wrapping will be disabled within the context of the [`span`](https://www.w3.org/TR/ttml1/#content-vocabulary-span) element.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `wrap`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-wrapOption",
        },
      ],
    },
    {
      name: "tts:writingMode",
      values: [
        {
          name: "lrtb",
          description:
            "Left-to-right block progression, top-to-bottom inline progression.",
        },
        {
          name: "rltb",
          description:
            "Right-to-left block progression, top-to-bottom inline progression.",
        },
        {
          name: "tbrl",
          description:
            "Top-to-bottom block progression, right-to-left inline progression.",
        },
        {
          name: "tblr",
          description:
            "Top-to-bottom block progression, left-to-right inline progression.",
        },
        {
          name: "lr",
          description:
            "Left-to-right block progression with no specified inline progression.",
        },
        {
          name: "rl",
          description:
            "Right-to-left block progression with no specified inline progression.",
        },
        {
          name: "tb",
          description:
            "Top-to-bottom block progression with no specified inline progression.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          'The `tts:writingMode` attribute in TTML is used to specify a style property that defines the block and inline progression directions to be used for stacking block and inline areas within a region area. Here are the details:\n\n*   **Usage**: Specifies the block and inline progression directions for stacking block and inline areas within a region area.\n*   **Element Types**: The `tts:writingMode` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Values**:\n    *   `lrtb`: Left-to-right block progression, top-to-bottom inline progression.\n    *   `rltb`: Right-to-left block progression, top-to-bottom inline progression.\n    *   `tbrl`: Top-to-bottom block progression, right-to-left inline progression.\n    *   `tblr`: Top-to-bottom block progression, left-to-right inline progression.\n    *   `lr`: Left-to-right block progression with no specified inline progression.\n    *   `rl`: Right-to-left block progression with no specified inline progression.\n    *   `tb`: Top-to-bottom block progression with no specified inline progression.\n*   **Initial Value**: The initial value of `tts:writingMode` is `lrtb`.\n*   **Applies to**: Applies to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Inherited**: No, the attribute is not inherited.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:writingMode` are discrete and cannot be smoothly animated over time.\n\nFor example, if you specify `tts:writingMode="rltb"`, it means that the block progression direction is from right to left, and the inline progression direction is from top to bottom within the region.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the value `lrtb`.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-writingMode",
        },
      ],
    },
    {
      name: "tts:zIndex",
      values: [
        {
          name: "auto",
          description:
            "The stacking order is determined automatically by the presentation processor.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `tts:zIndex` attribute in TTML is used to specify a style property that defines the front-to-back ordering of region areas in the case that they overlap. Here are the details:\n\n*   **Usage**: Specifies the front-to-back ordering of region areas when they overlap.\n*   **Element Types**: The `tts:zIndex` attribute can be specified by any element type that allows attributes in the TT Style Namespace. However, it applies as a style property only to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Values**:\n    *   `auto`: The stacking order is determined automatically by the presentation processor.\n    *   `<integer>`: An integer value indicating the desired stacking order. Higher values are rendered on top of lower values.\n*   **Initial Value**: The initial value of `tts:zIndex` is `auto`.\n*   **Applies to**: Applies to [`region`](https://www.w3.org/TR/ttml1/#layout-vocabulary-region) elements.\n*   **Inherited**: No, the attribute is not inherited.\n*   **Percentages**: Not applicable.\n*   **Animatable**: Changes to `tts:zIndex` are discrete and cannot be smoothly animated over time.\n\nIf two areas have the same z-index value and they overlap in space, the area generated by the lexically subsequent element is rendered over the area generated by the lexically prior element. Lexical order is defined as the postorder traversal of a Document Instance.\n\nThe [`tt`](https://www.w3.org/TR/ttml1/#document-structure-vocabulary-tt) element establishes the root of the stacking context.\n\nIf a computed value of the property associated with this attribute is not supported, then a presentation processor must use the closest supported value. This means selecting the value for which the Euclidean distance between the computed z-index and the supported z-index is minimized. If there are multiple closest supported values equally distant from the computed value, then the value least distant from 0 (closest to the base stack level of the current stacking context) is used.\n",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#style-attribute-zIndex",
        },
      ],
    },
    {
      name: "region",
      description: {
        kind: "markdown",
        value:
          "The `region` attribute in TTML is used to reference a region element that defines a space or area into which a content element is intended to be flowed. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the region element to be used as the target space or area for flowing content.\n*   **Syntax**: The value of the `region` attribute must adhere to the IDREF data type defined by XML Schema Part 2, section 3.3.9. This IDREF must reference a region element that has a layout element as an ancestor.\n*   **Elements**: The `region` attribute may be specified by instances of the following element types: `body`, `div`, `p`, `span`.\n*   **Semantics**: When the `region` attribute is specified, the content associated with the element flows into the region specified by the referenced region element.\n\nIn summary, the `region` attribute allows authors to specify the target region element into which content should flow, enabling flexible layout and presentation control in TTML documents.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#layout-attribute-region",
        },
      ],
    },
    {
      name: "begin",
      description: {
        kind: "markdown",
        value:
          "The `begin` attribute in TTML is utilized to specify the starting point of a temporal interval associated with a timed element. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the beginning of a temporal interval associated with a timed element.\n*   **Syntax**: The value of the `begin` attribute must conform to the [`<timeExpression>`](https://www.w3.org/TR/ttml1/#timing-value-timeExpression) specification.\n*   **Inclusion**: The begin point of the temporal interval is considered part of the interval itself, meaning the interval is closed on the left side.\n*   **Semantics**: The semantics of the `begin` attribute are aligned with those defined in [SMIL 2.1], section 10.4.1, while considering any additional or overriding semantics specified in the TTML specification.\nAdditionally, it's noted that if no begin attribute is specified, the semantics defined in [SMIL 2.1](https://www.w3.org/TR/ttml1/#smil21)\n\nIn essence, the `begin` attribute plays a crucial role in defining the temporal behavior of timed elements within TTML documents, specifying when these elements should begin their presentation or other associated actions.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#timing-attribute-begin",
        },
      ],
    },
    {
      name: "end",
      description: {
        kind: "markdown",
        value:
          "The `end` attribute in TTML is used to specify the ending point of a temporal interval associated with a timed element. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the ending point of a temporal interval associated with a timed element.\n*   **Syntax**: The value of the `end` attribute must conform to the [`<timeExpression>`](https://www.w3.org/TR/ttml1/#timing-value-timeExpression) specification.\n*   **Interpretation**: The ending point of a temporal interval is not included in the interval, meaning the interval is right-wise open. The presentation effects of a non-empty active temporal interval include the frame immediately prior to the frame (or tick) equal to or immediately following the time specified by the ending point, but do not extend into this latter frame (or tick).\n*   **Example**: For instance, if an active interval is specified as [10s, 10.33333s), and the frame rate is 30 frames per second, then the presentation effects of the interval are limited to frames 300 through 309 only.\n*   **Semantics**: The semantics of the `end` attribute align with those defined in [SMIL 2.1](https://www.w3.org/TR/ttml1/#smil21), section 10.4.1, with any necessary adjustments specified in the TTML specification.\n\nIn summary, the `end` attribute allows for precise control over the ending point of temporal intervals associated with timed elements in TTML documents, facilitating accurate synchronization and presentation timing during rendering.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#timing-attribute-end",
        },
      ],
    },
    {
      name: "dur",
      description: {
        kind: "markdown",
        value:
          "The `dur` attribute in TTML is used to specify the duration of a temporal interval associated with a timed element. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies the duration of a temporal interval associated with a timed element.\n*   **Syntax**: The value of the `dur` attribute must conform to the [`<timeExpression>`](https://www.w3.org/TR/ttml1/#timing-value-timeExpression) specification.\n*   **Interpretation**: When the clock-time form of a [`<timeExpression>`](https://www.w3.org/TR/ttml1/#timing-value-timeExpression) specification is used with a `dur` attribute, it signifies a difference between two implied clock time expressions.\n*   **Restrictions**: If a Document Instance specifies the use of the smpte time base and discontinuous marker mode, a `dur` attribute must not be specified on any element.\n*   **Semantics**: The semantics of the `dur` attribute align with those defined in [SMIL 2.1](https://www.w3.org/TR/ttml1/#smil21). Notably, in TTML, the value of the `dur` attribute is permitted to be zero (0). Furthermore, in cases where both `dur` and `end` attributes are specified, the active duration of the element is determined as the lesser of the `dur` attribute value and the difference between the `end` attribute value and the element's begin time.\n\nIn summary, the `dur` attribute allows for the specification of the duration of timed elements within TTML documents, contributing to the temporal behavior and synchronization of these elements during presentation.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#timing-attribute-dur",
        },
      ],
    },
    {
      name: "timeContainer",
      values: [
        {
          name: "par",
          description:
            "Child elements' temporal intervals are considered to apply simultaneously in time. Each child element's time interval is relative to the temporal interval of the container element instance.",
        },
        {
          name: "seq",
          description:
            "Child elements' temporal intervals are considered to apply sequentially in time. Each child element's time interval is relative to the temporal interval of its sibling elements, except for the first child element, whose interval is relative to the container element's temporal interval.",
        },
      ],
      description: {
        kind: "markdown",
        value:
          "The `timeContainer` attribute in TTML is used to specify the temporal context in which timed child elements are situated. Here are the key points regarding its usage:\n\n*   **Usage**: Specifies a local temporal context for timed child elements.\n*   **Values**: The `timeContainer` attribute must have one of the following values: `par` or `seq`.\n    *   If par is specified, child elements' temporal intervals are considered to apply simultaneously in time. Each child element's time interval is relative to the temporal interval of the container element instance.\n    *   If seq is specified, child elements' temporal intervals are considered to apply sequentially in time. Each child element's time interval is relative to the temporal interval of its sibling elements, except for the first child element, whose interval is relative to the container element's temporal interval.\n*   **Independent Time Base**: Each time container constitutes an independent time base or time coordinate system.\n*   **Default Behavior**:\n    *   If the `timeContainer` attribute is not specified on an element with time container semantics, par semantics apply by default.\n    *   For `body`, `div`, `p`, `region`, and `span `elements, if the `timeContainer` attribute is not specified, `par` semantics apply by default.\n*   **Semantics**: The semantics of parallel and sequential time containment are based on those defined by [SMIL 2.1](https://www.w3.org/TR/ttml1/#smil21), with any overriding semantics specified by the TTML specification.\n\nIn summary, the `timeContainer` attribute allows authors to define whether timed child elements should be interpreted as occurring simultaneously (`par`) or sequentially (`seq`) in time within a given temporal context.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#timing-attribute-timeContainer",
        },
      ],
    },
    {
      name: "ttm:agent",
      description: {
        kind: "markdown",
        value:
          "The `ttm:agent` attribute in TTML takes an IDREFS (ID References) value and is employed with specific Content elements to specify the agents involved in performing or associated with the content.\n\n*   **Data Type**: IDREFS\n*   **Usage**: It designates the agents performing or involved in the content.\n*   **Requirement**: If used, it must reference significant `ttm:agent` element instances.\n*   **Uniqueness**: Each ID or IDREF within the `ttm:agent` attribute value should be unique. Repeated references to the same ID or IDREF are discouraged to avoid redundancy.\n*   **Note**: This constraint aims to discourage redundant references to agents within the `ttm:agent` attribute value.",
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-attribute-agent",
        },
      ],
    },
    {
      name: "ttm:role",
      valueSet: "roles",
      description: {
        kind: "markdown",
        value:
          'The `ttm:role` attribute allows a content author to specify the roles, functions, or characteristics of a labeled Content element. If used, the value of this attribute must adhere to specific syntax rules:\n\n*   **Syntax Representation**: See the [Documentation](https://www.w3.org/TR/ttml1/#metadata-attribute-role)\n*   **Uniqueness**: The same role token should not appear more than once in the value of a `ttm:role` attribute. This discourages redundant role tokens.\n\n*   **Reserved Values**: Values of `ttm:role` that do not start with the prefix "x-" are reserved for future standardization.\n\n*   **Custom Roles**: If using a custom "x-" prefixed form of `ttm:role`, it is recommended to include a unique organization infix to prevent collisions. For example, "x-example-org-custom-role". Additionally, a registry for role values is available at [TTML Role Registry](https://www.w3.org/wiki/TTML/RoleRegistry) to promote interoperability and avoid collisions.',
      },
      references: [
        {
          name: "W3C Documentation",
          url: "https://www.w3.org/TR/ttml1/#metadata-attribute-role",
        },
      ],
    },
  ],
  valueSets: [
    {
      name: "dfxp",
      values: [
        {
          name: "dfxp-transformation",
          description: {
            kind: "markdown",
            value:
              "The DFXP Transformation Profile is intended to be used to express minimum compliance for transformation processing.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#profile-dfxp-transformation",
            },
          ],
        },
        {
          name: "dfxp-presentation",
          description: {
            kind: "markdown",
            value:
              "The DFXP Presentation Profile is intended to be used to express minimum compliance for presentation processing.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#profile-dfxp-presentation",
            },
          ],
        },
        {
          name: "dfxp-full",
          description: {
            kind: "markdown",
            value:
              "The DFXP Full Profile is intended to be used to express maximum compliance for both transformation and presentation processing.",
          },
          references: [
            {
              name: "W3C Documentation",
              url: "https://www.w3.org/TR/ttml1/#profile-dfxp-full",
            },
          ],
        },
      ],
    },
    {
      name: "oru",
      values: [
        {
          name: "optional",
        },
        {
          name: "required",
        },
        {
          name: "use",
        },
      ],
    },
    {
      name: "vh",
      values: [
        {
          name: "visible",
        },
        {
          name: "hidden",
        },
      ],
    },
    {
      name: "roles",
      values: [
        {
          name: "action",
        },
        {
          name: "caption",
        },
        {
          name: "description",
        },
        {
          name: "dialog",
        },
        {
          name: "expletive",
        },
        {
          name: "kinesic",
        },
        {
          name: "lyrics",
        },
        {
          name: "music",
        },
        {
          name: "narration",
        },
        {
          name: "quality",
        },
        {
          name: "sound",
        },
        {
          name: "source",
        },
        {
          name: "suppressed",
        },
        {
          name: "reproduction",
        },
        {
          name: "thought",
        },
        {
          name: "title",
        },
        {
          name: "transcription",
        },
      ],
    },
  ],
};
