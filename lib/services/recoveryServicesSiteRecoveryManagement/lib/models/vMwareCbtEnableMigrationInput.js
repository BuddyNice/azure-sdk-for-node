/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * VMwareCbt specific enable migration input.
 *
 * @extends models['EnableMigrationProviderSpecificInput']
 */
class VMwareCbtEnableMigrationInput extends models['EnableMigrationProviderSpecificInput'] {
  /**
   * Create a VMwareCbtEnableMigrationInput.
   * @property {string} vmwareMachineId The ARM Id of the VM discovered in
   * VMware.
   * @property {array} disksToInclude The disks to include list.
   * @property {string} [licenseType] License type. Possible values include:
   * 'NotSpecified', 'NoLicenseType', 'WindowsServer'
   * @property {string} dataMoverRunAsAccountId The data mover RunAs account
   * Id.
   * @property {string} snapshotRunAsAccountId The snapshot RunAs account Id.
   * @property {string} [targetVmName] The target VM name.
   * @property {string} [targetVmSize] The target VM size.
   * @property {string} targetResourceGroupId The target resource group ARM Id.
   * @property {string} targetNetworkId The target network ARM Id.
   * @property {string} [targetSubnetName] The target subnet name.
   * @property {string} [targetAvailabilitySetId] The target availability set
   * ARM Id.
   * @property {string} [targetBootDiagnosticsStorageAccountId] The target boot
   * diagnostics storage account ARM Id.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VMwareCbtEnableMigrationInput
   *
   * @returns {object} metadata of VMwareCbtEnableMigrationInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VMwareCbt',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'EnableMigrationProviderSpecificInput',
        className: 'VMwareCbtEnableMigrationInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          vmwareMachineId: {
            required: true,
            serializedName: 'vmwareMachineId',
            type: {
              name: 'String'
            }
          },
          disksToInclude: {
            required: true,
            serializedName: 'disksToInclude',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VMwareCbtDiskInputElementType',
                  type: {
                    name: 'Composite',
                    className: 'VMwareCbtDiskInput'
                  }
              }
            }
          },
          licenseType: {
            required: false,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          dataMoverRunAsAccountId: {
            required: true,
            serializedName: 'dataMoverRunAsAccountId',
            type: {
              name: 'String'
            }
          },
          snapshotRunAsAccountId: {
            required: true,
            serializedName: 'snapshotRunAsAccountId',
            type: {
              name: 'String'
            }
          },
          targetVmName: {
            required: false,
            serializedName: 'targetVmName',
            type: {
              name: 'String'
            }
          },
          targetVmSize: {
            required: false,
            serializedName: 'targetVmSize',
            type: {
              name: 'String'
            }
          },
          targetResourceGroupId: {
            required: true,
            serializedName: 'targetResourceGroupId',
            type: {
              name: 'String'
            }
          },
          targetNetworkId: {
            required: true,
            serializedName: 'targetNetworkId',
            type: {
              name: 'String'
            }
          },
          targetSubnetName: {
            required: false,
            serializedName: 'targetSubnetName',
            type: {
              name: 'String'
            }
          },
          targetAvailabilitySetId: {
            required: false,
            serializedName: 'targetAvailabilitySetId',
            type: {
              name: 'String'
            }
          },
          targetBootDiagnosticsStorageAccountId: {
            required: false,
            serializedName: 'targetBootDiagnosticsStorageAccountId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VMwareCbtEnableMigrationInput;