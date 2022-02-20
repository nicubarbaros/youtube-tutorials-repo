import copy from 'fast-copy';
import { toPlainObject } from 'contentful-sdk-core';

/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppSignedRequest data
 * @return Wrapped AppSignedRequest data
 */
export function wrapAppSignedRequest(_makeRequest, data) {
  var signedRequest = toPlainObject(copy(data));
  return signedRequest;
}