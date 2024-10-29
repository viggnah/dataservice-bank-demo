//Setup Asgardeo Auth React SDK
export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "",
    // clientSecret: "",
    // clientID: "",
    baseUrl: "https://localhost:9443",
    // baseUrl: "https://api.asgardeo.io/t/<org>",
    scope: ["openid", "profile", "groups", "roles"]
};

// Service Host and Port
export const Hosts = {
   miAcctHost: "http://micro-integrator.com/account/",
   apimAcctHost: "https://gw.apim.com/accountinfo/1.0.0/",
   miTxnHost: "http://micro-integrator.com/transaction/",
   apimTxnHost: "https://gw.apim.com/transaction/1.0.0/",
   miPaymentHost: "http://micro-integrator.com/merchant/pay",
   apimPaymentHost: "https://gw.apim.com/merchant/1.0.0/pay"
//    miAcctHost: "http://localhost:8290/account/",
//    apimAcctHost: "https://localhost:8300/accountinfo/1.0.0/",
//    miTxnHost: "http://localhost:8290/transaction/",
//    apimTxnHost: "https://localhost:8300/transaction/1.0.0/",
//    miPaymentHost: "http://localhost:8290/merchant/pay",
//    apimPaymentHost: "https://localhost:8300/merchant/1.0.0/pay"

};

export const AccessToken = ""



export const Headers = {
    headers: { 
        // Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
        Authorization: `Bearer ${AccessToken}`, 
        Accept: 'application/json' 
    }
};
