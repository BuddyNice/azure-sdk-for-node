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
 * Values returned by the List operation.
 */
class ListPrivateLinkResourcesResult extends Array {
  /**
   * Create a ListPrivateLinkResourcesResult.
   * @property {string} [nextLink] The continuation token.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ListPrivateLinkResourcesResult
   *
   * @returns {object} metadata of ListPrivateLinkResourcesResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListPrivateLinkResourcesResult',
      type: {
        name: 'Composite',
        className: 'ListPrivateLinkResourcesResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PrivateLinkResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'PrivateLinkResource'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListPrivateLinkResourcesResult;