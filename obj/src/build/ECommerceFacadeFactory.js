"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const CreditCardsOperationsV1_1 = require("../operations/version1/CreditCardsOperationsV1");
class ECommerceFacadeFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ECommerceFacadeFactory.CreditCardsOperationsV1Descriptor, CreditCardsOperationsV1_1.CreditCardsOperationsV1);
    }
}
ECommerceFacadeFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-facade-ecommerce", "factory", "default", "default", "1.0");
ECommerceFacadeFactory.CreditCardsOperationsV1Descriptor = new pip_services3_commons_node_1.Descriptor("pip-facade-ecommerce", "operations", "creditcards", "*", "1.0");
exports.ECommerceFacadeFactory = ECommerceFacadeFactory;
//# sourceMappingURL=ECommerceFacadeFactory.js.map