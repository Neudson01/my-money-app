import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer' 
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billyngCycleReducer'
import {reducer as toastReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastReducer
})

export default rootReducer
