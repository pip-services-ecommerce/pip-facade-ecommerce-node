import { Descriptor } from 'pip-services3-commons-node';
import { PartitionFacadeService } from 'pip-services3-facade-node';

import { CreditCardsOperationsV1 } from '../../src/operations/version1/CreditCardsOperationsV1';

export class TestFacadeService extends PartitionFacadeService {

    public constructor() {
        super();

        this._dependencyResolver.put('creditcards', new Descriptor("pip-facade-ecommerce", "operations", "creditcards", "*", "1.0"));
    }

    protected register(): void {
        let creditCards = this._dependencyResolver.getOneOptional<CreditCardsOperationsV1>('creditcards');
        if (creditCards) {
            this.registerRoute('get', '/users/:customer_id/credit_cards', creditCards.getCreditCardsOperation());
            this.registerRoute('get', '/users/:customer_id/credit_cards/:card_id', creditCards.getCreditCardOperation());
            this.registerRoute('post', '/users/:customer_id/credit_cards', creditCards.createCreditCardOperation());
            this.registerRoute('put', '/users/:customer_id/credit_cards/:card_id', creditCards.updateCreditCardOperation());
            this.registerRoute('del', '/users/:customer_id/credit_cards/:card_id', creditCards.deleteCreditCardOperation());
        }

    }

}