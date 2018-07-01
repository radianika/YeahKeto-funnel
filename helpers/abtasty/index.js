import { campaign_308072 } from './campaign_308072';
import { campaign_308073 } from './campaign_308073';
import { campaign_308075 } from './campaign_308075';
import defaultConfig from './campaign_default';

/*
	splitTestingAllVariations format
	{{individual campaign}, {individual campaign}, {individual campaign}};
*/
const splitTestingAllVariations = {
	308072: campaign_308072,
	308073: campaign_308073,
	308075: campaign_308075,
};

const getVariationValue = (campaignId, varId, page = 'promo') => {
	// check if all the required params are passed else return default config
	if (Object.keys(splitTestingAllVariations).includes(''+campaignId) &&
		Object.keys(splitTestingAllVariations[campaignId]).includes(''+varId) &&
		Object.keys(splitTestingAllVariations[campaignId][varId]).includes(''+page)) {
		return splitTestingAllVariations[campaignId][varId][page];
	}
	return defaultConfig[page];
};

export {
	getVariationValue
}
