import { campaign_306753 } from './campaign_306753';

// splitTestingAllVariations format = {{individual campaign}, {individual campaign}, {individual campaign}};
const splitTestingAllVariations = {
	306753: campaign_306753
};

const getVariationValue = (campaignId = 306753, varId = 'control', page = 'promo') => {
	const variations = splitTestingAllVariations[campaignId];

  return variations[varId][page];
};

export {
	getVariationValue
}
