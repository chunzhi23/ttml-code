import {
  ITagData,
  IAttributeData,
  IValueData,
  TTMLDataV1,
  ITTMLDataProvider,
} from "../ttmlLanguageTypes";

export class TTMLDataProvider implements ITTMLDataProvider {
  isApplicable() {
    return true;
  }

  private _tags: ITagData[] = [];
  private _tagMap: { [t: string]: ITagData } = {};
  private _globalAttributes: IAttributeData[];
  private _valueSetMap: { [setName: string]: IValueData[] } = {};

  constructor(private readonly id: string, customData: TTMLDataV1) {
    this._tags = customData.tags || [];
    this._globalAttributes = customData.globalAttributes || [];

    this._tags.forEach((t) => {
      this._tagMap[t.name.toLowerCase()] = t;
    });

    if (customData.valueSets) {
      customData.valueSets.forEach((vs) => {
        this._valueSetMap[vs.name] = vs.values;
      });
    }
  }

  getId() {
    return this.id;
  }

  provideTags() {
    return this._tags;
  }

  provideAttributes(tag: string) {
    const attributes: IAttributeData[] = [];
    const processAttribute = (a: IAttributeData) => {
      attributes.push(a);
    };

    const tagEntry = this._tagMap[tag.toLowerCase()];
    if (tagEntry) {
      tagEntry.attributes.forEach(processAttribute);
    }
    this._globalAttributes.forEach(processAttribute);

    return attributes;
  }

  provideValues(tag: string, attribute: string) {
    const values: IValueData[] = [];

    attribute = attribute.toLowerCase();

    const processAttributes = (attributes: IAttributeData[]) => {
      attributes.forEach((a) => {
        if (a.name.toLowerCase() === attribute) {
          if (a.values) {
            a.values.forEach((v) => {
              values.push(v);
            });
          }

          if (a.valueSet) {
            if (this._valueSetMap[a.valueSet]) {
              this._valueSetMap[a.valueSet].forEach((v) => {
                values.push(v);
              });
            }
          }
        }
      });
    };

    const tagEntry = this._tagMap[tag.toLowerCase()];
    if (tagEntry) {
      processAttributes(tagEntry.attributes);
    }
    processAttributes(this._globalAttributes);

    return values;
  }
}
