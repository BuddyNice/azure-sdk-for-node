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
 * A2A remove disk(s) input.
 *
 * @extends models['RemoveDisksProviderSpecificInput']
 */
class A2ARemoveDisksInput extends models['RemoveDisksProviderSpecificInput'] {
  /**
   * Create a A2ARemoveDisksInput.
   * @property {array} [vmDisksUris] The list of vm disk vhd URIs.
   * @property {array} [vmManagedDisksIds] The list of vm managed disk Ids.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of A2ARemoveDisksInput
   *
   * @returns {object} metadata of A2ARemoveDisksInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2A',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'RemoveDisksProviderSpecificInput',
        className: 'A2ARemoveDisksInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          vmDisksUris: {
            required: false,
            serializedName: 'vmDisksUris',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          vmManagedDisksIds: {
            required: false,
            serializedName: 'vmManagedDisksIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = A2ARemoveDisksInput;