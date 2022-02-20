import * as raw from './raw';
export var get = function get(http, params) {
  return raw.get(http, "/organizations/".concat(params.organizationId, "/app_definitions/").concat(params.appDefinitionId, "/signing_secret"));
};
export var upsert = function upsert(http, params, data) {
  return raw.put(http, "/organizations/".concat(params.organizationId, "/app_definitions/").concat(params.appDefinitionId, "/signing_secret"), data);
};
export var del = function del(http, params) {
  return raw.del(http, "/organizations/".concat(params.organizationId, "/app_definitions/").concat(params.appDefinitionId, "/signing_secret"));
};