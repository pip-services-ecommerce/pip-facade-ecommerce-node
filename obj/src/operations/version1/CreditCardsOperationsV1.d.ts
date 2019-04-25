import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class CreditCardsOperationsV1 extends FacadeOperations {
    private _creditCardsClient;
    constructor();
    setReferences(references: IReferences): void;
    getCreditCardsOperation(): (req: any, res: any) => void;
    getCreditCardOperation(): (req: any, res: any) => void;
    createCreditCardOperation(): (req: any, res: any) => void;
    updateCreditCardOperation(): (req: any, res: any) => void;
    deleteCreditCardOperation(): (req: any, res: any) => void;
    private getCreditCards;
    private getCreditCard;
    private createCreditCard;
    private updateCreditCard;
    private deleteCreditCard;
}
