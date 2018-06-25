import { control } from './control';
import { treatment_404689 } from './treatment_404689';
import { treatment_404690 } from './treatment_404690';
import { treatment_404691 } from './treatment_404691';

const splitTestingAllVariations = {
	control: control,
	404689: treatment_404689,
	404690: treatment_404690,
	404691: treatment_404691,
}

export {
	splitTestingAllVariations
}
