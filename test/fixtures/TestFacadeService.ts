import { Descriptor } from 'pip-services-commons-node';
import { PartitionFacadeService } from 'pip-services-facade-node';

import { CreditCardsOperationsV1 } from '../../src/operations/version1/CreditCardsOperationsV1';

export class TestFacadeService extends PartitionFacadeService {

    public constructor() {
        super();

        this._dependencyResolver.put('creditcards', new Descriptor("pip-facade-ecommerce", "operations", "creditcards", "*", "1.0"));
    }

    protected register(): void {
        let creditcards = this._dependencyResolver.getOneOptional<CreditCardsOperationsV1>('creditcards');
        if (creditcards) {
            this.registerRoute('get', '/credit_cards', creditcards.getCreditCardsOperation());
            this.registerRoute('get', '/credit_cards/:card_id', creditcards.getCreditCardOperation());
            this.registerRoute('post', '/credit_cards', creditcards.createCreditCardOperation());
            this.registerRoute('put', '/credit_cards/:card_id', creditcards.updateCreditCardOperation());
            this.registerRoute('del', '/credit_cards/:card_id', creditcards.deleteCreditCardOperation());
        }

    }

}