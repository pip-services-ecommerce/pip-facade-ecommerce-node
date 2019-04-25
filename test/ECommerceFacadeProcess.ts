import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { TestFactory } from './fixtures/TestFactory';

export class ECommerceFacadeProcess extends ProcessContainer {

    public constructor() {
        super("ecommerce", "Client facade for ecommerce microservices");
        this._factories.add(new TestFactory);
    }

}
