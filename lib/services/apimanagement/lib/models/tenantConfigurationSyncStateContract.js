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
 * Tenant Configuration Synchronization State.
 *
 */
class TenantConfigurationSyncStateContract {
  /**
   * Create a TenantConfigurationSyncStateContract.
   * @property {string} [branch] The name of Git branch.
   * @property {string} [commitId] The latest commit Id.
   * @property {boolean} [isExport] value indicating if last sync was save
   * (true) or deploy (false) operation.
   * @property {boolean} [isSynced] value indicating if last synchronization
   * was later than the configuration change.
   * @property {boolean} [isGitEnabled] value indicating whether Git
   * configuration access is enabled.
   * @property {date} [syncDate] The date of the latest synchronization. The
   * date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified
   * by the ISO 8601 standard.
   * @property {date} [configurationChangeDate] The date of the latest
   * configuration change. The date conforms to the following format:
   * `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TenantConfigurationSyncStateContract
   *
   * @returns {object} metadata of TenantConfigurationSyncStateContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TenantConfigurationSyncStateContract',
      type: {
        name: 'Composite',
        className: 'TenantConfigurationSyncStateContract',
        modelProperties: {
          branch: {
            required: false,
            serializedName: 'branch',
            type: {
              name: 'String'
            }
          },
          commitId: {
            required: false,
            serializedName: 'commitId',
            type: {
              name: 'String'
            }
          },
          isExport: {
            required: false,
            serializedName: 'isExport',
            type: {
              name: 'Boolean'
            }
          },
          isSynced: {
            required: false,
            serializedName: 'isSynced',
            type: {
              name: 'Boolean'
            }
          },
          isGitEnabled: {
            required: false,
            serializedName: 'isGitEnabled',
            type: {
              name: 'Boolean'
            }
          },
          syncDate: {
            required: false,
            serializedName: 'syncDate',
            type: {
              name: 'DateTime'
            }
          },
          configurationChangeDate: {
            required: false,
            serializedName: 'configurationChangeDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = TenantConfigurationSyncStateContract;
