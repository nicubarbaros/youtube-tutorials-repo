import copy from 'fast-copy';
import { toPlainObject } from 'contentful-sdk-core';
import enhanceWithMethods from '../enhance-with-methods';
export var IconType;

(function (IconType) {
  IconType["Base64"] = "base64";
})(IconType || (IconType = {}));

/**
 * @private
 * @param makeRequest - function to make requests via an adapter
 * @return Wrapped App Details data
 */
function createAppDetailsApi(makeRequest) {
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
        entityType: 'AppDetails',
        action: 'delete',
        params: getParams(self)
      });
    }
  };
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppDetails data
 * @return Wrapped AppDetails data
 */


export function wrapAppDetails(makeRequest, data) {
  var appDetails = toPlainObject(copy(data));
  return enhanceWithMethods(appDetails, createAppDetailsApi(makeRequest));
}