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
 * Work item configuration associated with an application insights resource.
 *
 */
class WorkItemConfiguration {
  /**
   * Create a WorkItemConfiguration.
   * @member {string} [connectorId] Connector identifier where work item is
   * created
   * @member {string} [configDisplayName] Configuration friendly name
   * @member {boolean} [isDefault] Boolean value indicating whether
   * configuration is default
   * @member {string} [id] Unique Id for work item
   * @member {string} [configProperties] Serialized JSON object for detailed
   * properties
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkItemConfiguration
   *
   * @returns {object} metadata of WorkItemConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkItemConfiguration',
      type: {
        name: 'Composite',
        className: 'WorkItemConfiguration',
        modelProperties: {
          connectorId: {
            required: false,
            serializedName: 'ConnectorId',
            type: {
              name: 'String'
            }
          },
          configDisplayName: {
            required: false,
            serializedName: 'ConfigDisplayName',
            type: {
              name: 'String'
            }
          },
          isDefault: {
            required: false,
            serializedName: 'IsDefault',
            type: {
              name: 'Boolean'
            }
          },
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          configProperties: {
            required: false,
            serializedName: 'ConfigProperties',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkItemConfiguration;
