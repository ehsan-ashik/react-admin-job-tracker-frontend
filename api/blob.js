import { AccountSASPermissions, AccountSASResourceTypes, AccountSASServices, generateAccountSASQueryParameters, SASProtocol, StorageSharedKeyCredential } from '@azure/storage-blob';

const constants = {
    accountName: process.env.AZURE_ACCOUNT_NAME,
    accountKey: process.env.AZURE_ACCESS_KEY
};
const sharedKeyCredential = new StorageSharedKeyCredential(
    constants.accountName ? constants.accountName : "",
    constants.accountKey ? constants.accountKey : ""
);

export function createAccountSas() {
    console.log(constants.accountName)
    const sasOptions = {

        services: AccountSASServices.parse("b").toString(),          // blobs, tables, queues, files
        resourceTypes: AccountSASResourceTypes.parse("co").toString(), // service, container, object
        permissions: AccountSASPermissions.parse("r"),          // permissions
        protocol: SASProtocol.HttpsAndHttp,
        startsOn: new Date(new Date().valueOf() - (2 * 60 * 1000)) , // 2 minutes
        expiresOn: new Date(new Date().valueOf() + (26 * 60 * 60 * 1000)),   // 26 hours
    };

    const sasToken = generateAccountSASQueryParameters(
        sasOptions,
        sharedKeyCredential 
    ).toString();

    // prepend sasToken with `?`
    return (sasToken[0] === '?') ? sasToken : `?${sasToken}`;
}