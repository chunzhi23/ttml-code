import { ITTMLDataProvider } from "../ttmlLanguageTypes";
import { ttmlData } from "./data/ttmlCustomData";
import { TTMLDataProvider } from "./dataProvider";
import * as arrays from "../utils/arrays";

export class TTMLDataManager {
  private dataProviders: ITTMLDataProvider[] = [];

  constructor(options: {
    useDefaultDataProvider?: boolean;
    customDataProviders?: ITTMLDataProvider[];
  }) {
    this.setDataProviders(
      options.useDefaultDataProvider !== false,
      options.customDataProviders || []
    );
  }
  setDataProviders(builtIn: boolean, providers: ITTMLDataProvider[]) {
    this.dataProviders = [];
    if (builtIn) {
      this.dataProviders.push(new TTMLDataProvider("ttml", ttmlData));
    }
    this.dataProviders.push(...providers);
  }

  getDataProviders() {
		return this.dataProviders;
	}

	isVoidElement(e: string, voidElements: string[]) {
		return !!e && arrays.binarySearch(voidElements, e.toLowerCase(), (s1: string, s2: string) => s1.localeCompare(s2)) >= 0;
	}

  getVoidElements(languageId: string): string[];
	getVoidElements(dataProviders: ITTMLDataProvider[]): string[];
	getVoidElements(languageOrProviders: string | ITTMLDataProvider[]): string[] {
		const dataProviders = Array.isArray(languageOrProviders) ? languageOrProviders : this.getDataProviders().filter(p => p.isApplicable(languageOrProviders!));
		const voidTags: string[] = [];
		dataProviders.forEach((provider) => {
			provider.provideTags().filter(tag => tag.void).forEach(tag => voidTags.push(tag.name));
		});
		return voidTags.sort();
	}

  isPathAttribute(tag: string, attr: string) {
		// should eventually come from custom data

		if (attr === 'src' || attr === 'href') {
			return true;
		}
		const a = PATH_TAG_AND_ATTR[tag];
		if (a) {
			if (typeof a === 'string') {
				return a === attr;
			} else {
				return a.indexOf(attr) !== -1;
			}
		}
		return false;
	}
}

const PATH_TAG_AND_ATTR: { [tag: string]: string | string[] } = {
	"ttp:features": "xml:base",
	"ttp:extensions": "xml:base",
  "ttp:profile": "use",
};