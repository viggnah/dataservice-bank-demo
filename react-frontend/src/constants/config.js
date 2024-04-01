//Setup Asgardeo Auth React SDK
export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID:"",
    baseUrl: "https://localhost:9443",
    // baseUrl: "https://api.asgardeo.io/t/<org_name>",
    scope: ["openid", "profile", "groups", "roles"]
};

// Service Host and Port
export const Hosts = {
   miAcctHost: "http://localhost:8290/account/",
   apimAcctHost: "https://localhost:8300/account/1.0.0/",
   miTxnHost: "http://localhost:8290/transaction/",
   apimTxnHost: "https://localhost:8300/transaction/1.0.0/"
};

export const AccessToken = ""
