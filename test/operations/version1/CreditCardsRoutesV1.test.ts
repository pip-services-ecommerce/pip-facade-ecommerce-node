let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { CreditCardsOperationsV1 } from '../../../src/operations/version1/CreditCardsOperationsV1';

suite('CreditCardsOperationsV1', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('pip-facade-ecommerce', 'operations', 'creditcards', 'default', '1.0'), new CreditCardsOperationsV1())
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('should get credit cards', (done) => {
        rest.get(
            '/api/1.0/users/1/credit_cards?paging=1&skip=0&take=2',
            (err, req, res, page) => {
                assert.isNull(err);

                assert.isObject(page);

                done();
            }
        );
    });

    test('should delete credit cards', (done) => {
        rest.del(
            '/api/1.0/users/1/credit_cards/1',
            (err, req, res) => {
                assert.isNull(err);

                done();
            }
        );
    });

});