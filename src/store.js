import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from "./services/eventApi"
import { userApi } from "./services/userApi"
import { categoryApi } from "./services/categoryApi"
import { serviceApi } from "./services/servicesApi"
import { clientApi } from "./services/clientApi"
import { userReportApi } from "./services/userReportApi"
import { clientReportApi } from "./services/clientReportApi"
import { eventReportApi } from "./services/eventReportApi"
import { transactionApi } from "./services/transactionApi"
import { transactionReportApi } from "./services/transactionReportApi"

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath] : eventApi.reducer,
        [userApi.reducerPath] : userApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        [serviceApi.reducerPath] : serviceApi.reducer,
        [clientApi.reducerPath] : clientApi.reducer,
        [userReportApi.reducerPath] : userReportApi.reducer,
        [clientReportApi.reducerPath] : clientReportApi.reducer,
        [eventReportApi.reducerPath] : eventReportApi.reducer,
        [transactionApi.reducerPath] : transactionApi.reducer,
        [transactionReportApi.reducerPath] : transactionReportApi.reducer,
    },
    devTools:false,

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(eventApi.middleware, userApi.middleware, categoryApi.middleware, serviceApi.middleware, clientApi.middleware, userReportApi.middleware, clientReportApi.middleware, eventReportApi.middleware, transactionApi.middleware, transactionReportApi.middleware),
    
});
