// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '6d8e19c2-3a60-481f-8ebb-118dc3007c5d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://testacc5769.vault.azure.net:443')
  .delete('//storage/testakvsa4138?api-version=7.0-preview')
  .reply(200, "{\"id\":\"https://testacc5769.vault.azure.net/storage/testakvsa4138\",\"resourceId\":\"/subscriptions/6d8e19c2-3a60-481f-8ebb-118dc3007c5d/resourceGroups/nodeTestGroup1320/providers/Microsoft.Storage/storageAccounts/testakvsa4138\",\"activeKeyName\":\"key2\",\"autoRegenerateKey\":false,\"regenerationPeriod\":\"P30D\",\"attributes\":{\"enabled\":true,\"created\":1526880392,\"updated\":1526880393,\"recoveryLevel\":\"Purgeable\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'x-ms-keyvault-region': 'westus',
  'x-ms-request-id': '6ceb0df8-7f73-4084-8515-aab70877f9cf',
  'x-ms-keyvault-service-version': '1.0.0.848',
  'x-ms-keyvault-network-info': 'addr=167.220.0.2;act_addr_fam=InterNetwork;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 21 May 2018 05:26:34 GMT',
  connection: 'close',
  'content-length': '401' });
 return result; },
function (nock) { 
var result = 
nock('https://testacc5769.vault.azure.net:443')
  .get('//storage?api-version=7.0-preview')
  .reply(200, "{\"value\":[],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'x-ms-keyvault-region': 'westus',
  'x-ms-request-id': 'cf588764-903c-4fe7-901d-9268d2a08d82',
  'x-ms-keyvault-service-version': '1.0.0.848',
  'x-ms-keyvault-network-info': 'addr=167.220.0.2;act_addr_fam=InterNetwork;',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 21 May 2018 05:26:34 GMT',
  connection: 'close',
  'content-length': '28' });
 return result; }]];