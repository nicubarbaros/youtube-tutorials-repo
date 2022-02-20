import copy from 'fast-copy';
import { toPlainObject } from 'contentful-sdk-core';
import enhanceWithMethods from '../enhance-with-methods';

function createSigningSecretApi(makeRequest) {
  var getParams = function getParams(data) {
    return {
      organizationId: data.sys.organization.sys.id,
      appDefinitionId: data.sys.appDefinition.sys.id
    };
  };

  return {
    "delete": function del() {
      var self = this;
      return makeRequest({
        entityType: 'AppSigningSecret',
        action: 'delete',
        params: getParams(self)
      });
    }
  };
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppSigningSecret data
 * @return Wrapped AppSigningSecret data
 */


export function wrapAppSigningSecret(makeRequest, data) {
  var signingSecret = toPlainObject(copy(data));
  return enhanceWithMethods(signingSecret, createSigningSecretApi(makeRequest));
}