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
 * Details of a hostname derived from a domain.
 *
 */
class HostName {
  /**
   * Create a HostName.
   * @member {string} [name] Name of the hostname.
   * @member {array} [siteNames] List of apps the hostname is assigned to. This
   * list will have more than one app only if the hostname is pointing to a
   * Traffic Manager.
   * @member {string} [azureResourceName] Name of the Azure resource the
   * hostname is assigned to. If it is assigned to a Traffic Manager then it
   * will be the Traffic Manager name otherwise it will be the app name.
   * @member {string} [azureResourceType] Type of the Azure resource the
   * hostname is assigned to. Possible values include: 'Website',
   * 'TrafficManager'
   * @member {string} [customHostNameDnsRecordType] Type of the DNS record.
   * Possible values include: 'CName', 'A'
   * @member {string} [hostNameType] Type of the hostname. Possible values
   * include: 'Verified', 'Managed'
   */
  constructor() {
  }

  /**
   * Defines the metadata of HostName
   *
   * @returns {object} metadata of HostName
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HostName',
      type: {
        name: 'Composite',
        className: 'HostName',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          siteNames: {
            required: false,
            serializedName: 'siteNames',
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
          azureResourceName: {
            required: false,
            serializedName: 'azureResourceName',
            type: {
              name: 'String'
            }
          },
          azureResourceType: {
            required: false,
            serializedName: 'azureResourceType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Website', 'TrafficManager' ]
            }
          },
          customHostNameDnsRecordType: {
            required: false,
            serializedName: 'customHostNameDnsRecordType',
            type: {
              name: 'Enum',
              allowedValues: [ 'CName', 'A' ]
            }
          },
          hostNameType: {
            required: false,
            serializedName: 'hostNameType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Verified', 'Managed' ]
            }
          }
        }
      }
    };
  }
}

module.exports = HostName;