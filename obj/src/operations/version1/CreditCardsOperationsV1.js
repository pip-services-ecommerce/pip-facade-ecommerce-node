"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_facade_node_1 = require("pip-services-facade-node");
class CreditCardsOperationsV1 extends pip_services_facade_node_1.FacadeOperations {
    constructor() {
        super();
        this._dependencyResolver.put('creditcards', new pip_services_commons_node_1.Descriptor('pip-services-creditcards', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._creditCardsClient = this._dependencyResolver.getOneRequired('creditcards');
    }
    getCreditCardsOperation() {
        return (req, res) => {
            this.getCreditCards(req, res);
        };
    }
    getCreditCardOperation() {
        return (req, res) => {
            this.getCreditCard(req, res);
        };
    }
    createCreditCardOperation() {
        return (req, res) => {
            this.createCreditCard(req, res);
        };
    }
    updateCreditCardOperation() {
        return (req, res) => {
            this.updateCreditCard(req, res);
        };
    }
    deleteCreditCardOperation() {
        return (req, res) => {
            this.deleteCreditCard(req, res);
        };
    }
    getCreditCards(req, res) {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        let customerId = req.route.params.customer_id;
        if (customerId)
            filter.setAsObject('customer_id', customerId);
        this._creditCardsClient.getCreditCards(null, filter, paging, this.sendResult(req, res));
    }
    getCreditCard(req, res) {
        let cardId = req.route.params.card_id;
        this._creditCardsClient.getCreditCardById(null, cardId, this.sendResult(req, res));
    }
    createCreditCard(req, res) {
        let card = req.body || {};
        let customerId = req.route.params.customer_id;
        card.customer_id = customerId || card.customer_id;
        this._creditCardsClient.createCreditCard(null, card, this.sendResult(req, res));
    }
    updateCreditCard(req, res) {
        let card = req.body || {};
        let cardId = req.route.params.card_id;
        let customerId = req.route.params.customer_id;
        card.id = cardId;
        card.customer_id = customerId || card.customer_id;
        this._creditCardsClient.updateCreditCard(null, card, this.sendResult(req, res));
    }
    deleteCreditCard(req, res) {
        let cardId = req.route.params.card_id;
        let customerId = req.route.params.customer_id;
        this._creditCardsClient.deleteCreditCardById(null, cardId, this.sendResult(req, res));
    }
}
exports.CreditCardsOperationsV1 = CreditCardsOperationsV1;
//# sourceMappingURL=CreditCardsOperationsV1.js.map