import { control } from './control';
import { campaign_306753 } from './campaign_306753';

// splitTestingAllVariations format = {{individual campaign}, {individual campaign}, {individual campaign}};
const splitTestingAllVariations = {
	306753: campaign_306753
};

const getVariationValue = (campaignId, varId, page) => {
	const variations = splitTestingAllVariations[campaignId];

  let varVal = '';
  if (!varId) {
    varVal = variations.control[page];
  } else if (!variations[varId][page]) {
    varVal = variations.control[page];
  } else {
    varVal = variations[varId][page];
  }
  return varVal;
};

export {
	getVariationValue
}
