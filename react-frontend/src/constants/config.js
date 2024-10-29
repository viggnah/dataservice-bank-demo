//Setup Asgardeo Auth React SDK
export const AsgardeoConfig = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "NcCfjP0F0dBYqrsxJbUefAfBUjEa",
    // clientSecret: "M8XUEOdmLA5RZ9lNxaoEoYhN2YnL51UbfVtdXypfZjca",
    // clientID: "kijZfyncfVZsNtYR6vt4aHFM3osa",
    baseUrl: "https://localhost:9443",
    // baseUrl: "https://api.asgardeo.io/t/viggnah",
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

export const AccessToken = "eyJ4NXQiOiJNek5rWmpVM1ltWmhaRGRpTkRabVpHVTJabVJsT1RoaE9XVXpOV0UzTWpRNFpERmpOV1k0TXciLCJraWQiOiJPREJtTVRVMFpqSmpPREprTkdZMVpUaG1ZamsyWVRZek56UmpZekl6TVRCbFlqRTBNV0prWTJJeE5qZzNPRGRqWVdRNVpXWmhOV0kwTkRBM1pqTTROUV9SUzI1NiIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzMWMzYTY3Mi00NWUyLTRkOTAtYjE1OS0xZmJhOTNlNDI5M2MiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6ImREWXc1cG1SbENiTWVLQjRqR2ZMRDE3Unhzb2EiLCJuYmYiOjE3MzAxMjE1NjIsImF6cCI6ImREWXc1cG1SbENiTWVLQjRqR2ZMRDE3Unhzb2EiLCJzY29wZSI6ImRlZmF1bHQiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo5NTAwL29hdXRoMi90b2tlbiIsImV4cCI6MTczNTMwNTU2MiwiaWF0IjoxNzMwMTIxNTYyLCJqdGkiOiI3YTBjYTRjYi1kNWQ5LTRjZDYtYTBhYi0xMTg5MjJkODQzODQiLCJjbGllbnRfaWQiOiJkRFl3NXBtUmxDYk1lS0I0akdmTEQxN1J4c29hIn0.AQJqUvj8MrSXQ-KRBqNCDWz_U2GPyAuk_WgnaAnXBv0cCSKIHHqyhg2nCmPDDJO95A9aUM9jWWEpnje2zpTMBVSuqdTt0d1eaAZpkUjSp9NxmO4NAwqiCA4cn44qELKm4KJ2nltxWOJvpiR4R1G3RuSEYfmbB242yoN3v6csErpwUJsbGlE-0vEMontGweTrJIjQ-ZTnDXWBDHKtdPwtAshGUl_dFv-qRw1cK5Dln_4efy1buGQh2hng1UqAEW9dpi0BuXlExvWeXpnRUEecYMvpdu2yn0_ebXnj48X_hZlIi2LfdLpRzPYqk9YVqDPDvfC4mypvi8uTaIGH00BzBA"



export const Headers = {
    headers: { 
        // Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
        Authorization: `Bearer ${AccessToken}`, 
        Accept: 'application/json' 
    }
};
