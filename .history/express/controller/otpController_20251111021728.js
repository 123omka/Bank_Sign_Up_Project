PS D:\Bank_Sign_Up_Project\express> npm run dev             
   
> my_node_project@1.0.0 dev
> node --env-file=.env --watch app.js

node:internal/modules/esm/resolve:274
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'D:\Bank_Sign_Up_Project\express\controllers\otpController.js' imported from D:\Bank_Sign_Up_Project\express\routes\otpRoutes.js      
    at finalizeResolution (node:internal/modules/esm/resolve:274:11)
    at moduleResolve (node:internal/modules/esm/resolve:859:10)
    at defaultResolve (node:internal/modules/esm/resolve:983:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:717:20)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:694:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:308:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:183:49)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///D:/Bank_Sign_Up_Project/express/controllers/otpController.js'
}
