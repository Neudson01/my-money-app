const express = require('express')

module.exports= function(server){
    // Definir URL base para as rotas

    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles') 
    //mapeamendo para a seguinte url /api/billingCycles

}
