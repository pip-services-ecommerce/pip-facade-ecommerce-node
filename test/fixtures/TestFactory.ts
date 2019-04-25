import { CompositeFactory } from 'pip-services3-components-node';
import { FacadeFactory } from 'pip-services3-facade-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { CreditCardsServiceFactory } from 'pip-services-creditcards-node';
import { CreditCardsClientFactory } from 'pip-clients-creditcards-node';

import { ECommerceFacadeFactory } from '../../src/build/ECommerceFacadeFactory';
import { TestFacadeFactory } from './TestFacadeFactory';

export class TestFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new FacadeFactory);
        this.add(new ECommerceFacadeFactory);
        this.add(new TestFacadeFactory);

        this.add(new CreditCardsServiceFactory);
        this.add(new CreditCardsClientFactory);
    }

}
