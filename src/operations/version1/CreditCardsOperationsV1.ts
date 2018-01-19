let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node'; 
import { DependencyResolver } from 'pip-services-commons-node';

import { ICreditCardsClientV1 } from 'pip-clients-creditcards-node';
import { CreditCardV1 } from 'pip-clients-creditcards-node';

import { FacadeOperations } from 'pip-services-facade-node';

export class CreditCardsOperationsV1  extends FacadeOperations {
    private _creditCardsClient: ICreditCardsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('creditcards', new Descriptor('pip-services-creditcards', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._creditCardsClient = this._dependencyResolver.getOneRequired<ICreditCardsClientV1>('creditcards');
    }

    public getCreditCardsOperation() {
        return (req, res) => {
            this.getCreditCards(req, res);
        }
    }

    public getCreditCardOperation() {
        return (req, res) => {
            this.getCreditCard(req, res);
        }
    }

    public createCreditCardOperation() {
        return (req, res) => {
            this.createCreditCard(req, res);
        }
    }

    public updateCreditCardOperation() {
        return (req, res) => {
            this.updateCreditCard(req, res);
        }
    }

    public deleteCreditCardOperation() {
        return (req, res) => {
            this.deleteCreditCard(req, res);
        }
    }

    private getCreditCards(req: any, res: any): void {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        this._creditCardsClient.getCreditCards(
            null, filter, paging, this.sendResult(req, res)
        );
    }

    private getCreditCard(req: any, res: any): void {
        let cardId = req.route.params.card_id;

        this._creditCardsClient.getCreditCardById(
            null, cardId, this.sendResult(req, res)
        );
    }

    private createCreditCard(req: any, res: any): void {
        let card = req.body || {};

        this._creditCardsClient.createCreditCard(
            null, card, this.sendResult(req, res)
        );
    }

    private updateCreditCard(req: any, res: any): void {
        let cardId = req.route.params.card_id;
        let card = req.body || {};
        card.id = cardId;

        this._creditCardsClient.updateCreditCard(
            null, card, this.sendResult(req, res)
        );
    }

    private deleteCreditCard(req: any, res: any): void {
        let cardId = req.route.params.card_id;

        this._creditCardsClient.deleteCreditCardById(
            null, cardId, this.sendResult(req, res)
        );
    }

}