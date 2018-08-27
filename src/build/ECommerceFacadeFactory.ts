import { Factory } from 'pip-services-components-node';
import { Descriptor } from 'pip-services-commons-node';

import { CreditCardsOperationsV1 } from '../operations/version1/CreditCardsOperationsV1';

export class ECommerceFacadeFactory extends Factory {
	public static Descriptor = new Descriptor("pip-facade-ecommerce", "factory", "default", "default", "1.0");

	public static CreditCardsOperationsV1Descriptor = new Descriptor("pip-facade-ecommerce", "operations", "creditcards", "*", "1.0");
	
	public constructor() {
		super();

		this.registerAsType(ECommerceFacadeFactory.CreditCardsOperationsV1Descriptor, CreditCardsOperationsV1);
	}
	
}
