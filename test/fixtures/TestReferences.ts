import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { Opener } from 'pip-services3-commons-node';
import { Closer } from 'pip-services3-commons-node';
import { Referencer } from 'pip-services3-commons-node';
import { ManagedReferences } from 'pip-services3-container-node';

import { MainFacadeService } from 'pip-services3-facade-node';

import { TestFactory } from './TestFactory';
import { TestFacadeService } from './TestFacadeService';

export class TestReferences extends ManagedReferences {
    private _factory = new TestFactory();

    public constructor() {
        super();

        this.appendCore();
        this.appendMicroservices();
        this.appendFacade();

        this.configureService();
    }

    private appendCore(): void {
        this.put(null, this._factory);

        this.append(new Descriptor('pip-services', 'facade-service', 'default', 'default', '*'));
    }

    private appendMicroservices(): void {
        this.append(new Descriptor('pip-services-creditcards', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('pip-services-creditcards', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('pip-services-creditcards', 'client', 'direct', 'default', '*'));
    }

    private appendFacade(): void {
        this.append(new Descriptor('pip-services-facade', 'service', 'test', 'default', '1.0'));
    }

    public append(descriptor: Descriptor): void {
        let component = this._factory.create(descriptor);
        this.put(descriptor, component);
    }

    private configureService(): void {
        // Configure Facade service
        let service = this.getOneRequired<MainFacadeService>(
            new Descriptor('pip-services', 'facade-service', 'default', 'default', '*')
        );
        service.configure(ConfigParams.fromTuples(
            'root_path', '/api/v1',
            'connection.protocol', 'http',
            'connection.host', '0.0.0.0',
            'connection.port', 3000
        ));
    }

}