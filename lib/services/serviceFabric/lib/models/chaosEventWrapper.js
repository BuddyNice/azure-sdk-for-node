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
 * Wrapper object for Chaos event.
 *
 */
class ChaosEventWrapper {
  /**
   * Create a ChaosEventWrapper.
   * @property {object} [chaosEvent] Represents an event generated during a
   * Chaos run.
   * @property {date} [chaosEvent.timeStampUtc] The UTC timestamp when this
   * Chaos event was generated.
   * @property {string} [chaosEvent.kind] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosEventWrapper
   *
   * @returns {object} metadata of ChaosEventWrapper
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosEventWrapper',
      type: {
        name: 'Composite',
        className: 'ChaosEventWrapper',
        modelProperties: {
          chaosEvent: {
            required: false,
            serializedName: 'ChaosEvent',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'Kind',
                clientName: 'kind'
              },
              uberParent: 'ChaosEvent',
              className: 'ChaosEvent'
            }
          }
        }
      }
    };
  }
}

module.exports = ChaosEventWrapper;
