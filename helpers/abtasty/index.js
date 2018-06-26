import { campaign_306753 } from './campaign_306753';

/*
	splitTestingAllVariations format
	{{individual campaign}, {individual campaign}, {individual campaign}};
*/
const splitTestingAllVariations = {
	306753: campaign_306753
};

/*
	In case of missing abtasty params(may abtasty is down or so);
	`defaultConfig` will be used to configure app components
*/
const defaultConfig = {
	campaignId: 306753,
	treatmentId: 404689,
	page: 'promo'
};

const getVariationValue = (campaignId, varId, page) => {
	let variations = {};
	let selectedTreatment = {};
	let selectedConfig = {};

	// check if given campaign id exists
	if (Object.keys(splitTestingAllVariations).includes(campaignId)) {
		variations = splitTestingAllVariations[campaignId];
	} else {
		// add default campaign
		variations = splitTestingAllVariations[defaultConfig.campaignId];
	}

	// check if variation id exists in the selected campaign
	if (Object.keys(variations).includes(varId)) {
		selectedTreatment = variations[varId];
	} else {
		// add default treatment
		selectedTreatment = variations[defaultConfig.treatmentId];
	}

	// check if page exists in the selected treatment
	if (Object.keys(selectedTreatment).includes(page)) {
		selectedConfig = selectedTreatment[page];
	} else {
		// add default page
		selectedConfig = selectedTreatment[defaultConfig.page];
	}

  return selectedConfig;
};

export {
	getVariationValue
}
