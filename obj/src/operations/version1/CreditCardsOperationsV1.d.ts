import { IReferences } from 'pip-services-commons-node';
import { FacadeOperations } from 'pip-services-facade-node';
export declare class CreditCardsOperationsV1 extends FacadeOperations {
    private _creditCardsClient;
    constructor();
    setReferences(references: IReferences): void;
    getCreditCardsOperation(): (req: any, res: any) => void;
    getCreditCardOperation(): (req: any, res: any) => void;
    createCreditCardOperation(): (req: any, res: any) => void;
    updateCreditCardOperation(): (req: any, res: any) => void;
    deleteCreditCardOperation(): (req: any, res: any) => void;
    private getCreditCards(req, res);
    private getCreditCard(req, res);
    private createCreditCard(req, res);
    private updateCreditCard(req, res);
    private deleteCreditCard(req, res);
}
