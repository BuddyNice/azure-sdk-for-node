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
 * Profile of network configuration.
 *
 */
class ContainerServiceNetworkProfile {
  /**
   * Create a ContainerServiceNetworkProfile.
   * @property {string} [networkPlugin] Network plugin used for building
   * Kubernetes network. Possible values include: 'azure', 'kubenet'. Default
   * value: 'kubenet' .
   * @property {string} [networkPolicy] Network policy used for building
   * Kubernetes network. Possible values include: 'calico', 'azure'
   * @property {string} [podCidr] A CIDR notation IP range from which to assign
   * pod IPs when kubenet is used. Default value: '10.244.0.0/16' .
   * @property {string} [serviceCidr] A CIDR notation IP range from which to
   * assign service cluster IPs. It must not overlap with any Subnet IP ranges.
   * Default value: '10.0.0.0/16' .
   * @property {string} [dnsServiceIP] An IP address assigned to the Kubernetes
   * DNS service. It must be within the Kubernetes service address range
   * specified in serviceCidr. Default value: '10.0.0.10' .
   * @property {string} [dockerBridgeCidr] A CIDR notation IP range assigned to
   * the Docker bridge network. It must not overlap with any Subnet IP ranges
   * or the Kubernetes service address range. Default value: '172.17.0.1/16' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerServiceNetworkProfile
   *
   * @returns {object} metadata of ContainerServiceNetworkProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerServiceNetworkProfile',
      type: {
        name: 'Composite',
        className: 'ContainerServiceNetworkProfile',
        modelProperties: {
          networkPlugin: {
            required: false,
            serializedName: 'networkPlugin',
            defaultValue: 'kubenet',
            type: {
              name: 'String'
            }
          },
          networkPolicy: {
            required: false,
            serializedName: 'networkPolicy',
            type: {
              name: 'String'
            }
          },
          podCidr: {
            required: false,
            serializedName: 'podCidr',
            defaultValue: '10.244.0.0/16',
            constraints: {
              Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/
            },
            type: {
              name: 'String'
            }
          },
          serviceCidr: {
            required: false,
            serializedName: 'serviceCidr',
            defaultValue: '10.0.0.0/16',
            constraints: {
              Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/
            },
            type: {
              name: 'String'
            }
          },
          dnsServiceIP: {
            required: false,
            serializedName: 'dnsServiceIP',
            defaultValue: '10.0.0.10',
            constraints: {
              Pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
            },
            type: {
              name: 'String'
            }
          },
          dockerBridgeCidr: {
            required: false,
            serializedName: 'dockerBridgeCidr',
            defaultValue: '172.17.0.1/16',
            constraints: {
              Pattern: /^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerServiceNetworkProfile;
