let ECommerceFacadeProcess = require('../obj/test/ECommerceFacadeProcess').ECommerceFacadeProcess;

try {
    new ECommerceFacadeProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
