// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2020-03-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool\",\"name\":\"test_iaas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D7CD375E4E4D89\\\"\",\"properties\":{\"lastModified\":\"2020-03-21T01:29:58.5299849Z\",\"creationTime\":\"2020-03-21T01:29:58.5299849Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2020-03-21T01:29:58.5299849Z\",\"allocationState\":\"Resizing\",\"allocationStateTransitionTime\":\"2020-03-21T01:29:58.5299849Z\",\"vmSize\":\"STANDARD_A1\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"},\"nodeAgentSkuId\":\"batch.node.windows amd64\",\"windowsConfiguration\":{\"enableAutomaticUpdates\":true}}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":\"Requeue\",\"resizeTimeout\":\"PT15M\",\"startTime\":\"2020-03-21T01:29:58.5299849Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1316',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 21 Mar 2020 01:29:58 GMT',
  etag: 'W/"0x8D7CD375E4E4D89"',
  'x-ms-correlation-request-id': 'f3bc734e-cba9-44a5-84fe-50b1ba82c6d3',
  'x-ms-request-id': '558e1f48-8888-4109-98f5-0d04dffb688d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012958Z:f3bc734e-cba9-44a5-84fe-50b1ba82c6d3',
  date: 'Sat, 21 Mar 2020 01:29:57 GMT',
  connection: 'close' });
 return result; }]];