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

/**
 * Input for remove disk(s) operation.
 *
 */
class RemoveDisksInput {
  /**
   * Create a RemoveDisksInput.
   * @property {object} [properties] Remove disk input properties.
   * @property {object} [properties.providerSpecificDetails] The
   * ReplicationProviderInput. For HyperVReplicaAzure provider, it will be
   * AzureEnableProtectionInput object. For San provider, it will be
   * SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can
   * be null.
   * @property {string} [properties.providerSpecificDetails.instanceType]
   * Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RemoveDisksInput
   *
   * @returns {object} metadata of RemoveDisksInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RemoveDisksInput',
      type: {
        name: 'Composite',
        className: 'RemoveDisksInput',
        modelProperties: {
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'RemoveDisksInputProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = RemoveDisksInput;