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
 * Describes an available API Management service SKU.
 *
 */
class ResourceSkuResult {
  /**
   * Create a ResourceSkuResult.
   * @property {string} [resourceType] The type of resource the SKU applies to.
   * @property {object} [sku] Specifies API Management SKU.
   * @property {string} [sku.name] Name of the Sku. Possible values include:
   * 'Developer', 'Standard', 'Premium', 'Basic', 'Consumption'
   * @property {object} [capacity] Specifies the number of API Management
   * units.
   * @property {number} [capacity.minimum] The minimum capacity.
   * @property {number} [capacity.maximum] The maximum capacity that can be
   * set.
   * @property {number} [capacity.default] The default capacity.
   * @property {string} [capacity.scaleType] The scale type applicable to the
   * sku. Possible values include: 'automatic', 'manual', 'none'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceSkuResult
   *
   * @returns {object} metadata of ResourceSkuResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceSkuResult',
      type: {
        name: 'Composite',
        className: 'ResourceSkuResult',
        modelProperties: {
          resourceType: {
            required: false,
            readOnly: true,
            serializedName: 'resourceType',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            readOnly: true,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'ResourceSku'
            }
          },
          capacity: {
            required: false,
            readOnly: true,
            serializedName: 'capacity',
            type: {
              name: 'Composite',
              className: 'ResourceSkuCapacity'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceSkuResult;
