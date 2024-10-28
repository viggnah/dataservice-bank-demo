import * as dmUtils from "./dm-utils";

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    transactionId: string
    customerId: string
    transactionDate: string
    amount: number
    currency: string
    status: string
    paymentMethods: {
        type: string
        provider: string
        accountEmail: string
    }[]
    merchant: {
        merchantId: string
        merchantName: string
    }
}

/*
* title : "transaction",
* outputType : "XML",
*/
interface Transaction {
    transactionId: string
    customerId: string
    transactionDate: string
    amount: {
        value: number
        currency: string
    }
    status: string
    paymentMethods: {
        paymentMethod: {
            type: string
            provider: string
            accountEmail: string
        }[]
    }
    merchant: {
        merchantInfo: string
    }
}



/**
 * functionName : map_S_root_S_transaction
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): Transaction {
    return {
        transactionId: input.transactionId,
        customerId: input.customerId,
        transactionDate: input.transactionDate,
        amount: {
            value: input.amount,
            currency: input.currency
        },
        status: input.status,
        paymentMethods: {
            paymentMethod: input.paymentMethods.map(method => {
                return {
                    type: method.type,
                    provider: method.provider,
                    accountEmail: method.accountEmail
                };
            })
        },
        merchant: {
            merchantInfo: `${input.merchant.merchantId} - ${input.merchant.merchantName}`
        }
    };
}

