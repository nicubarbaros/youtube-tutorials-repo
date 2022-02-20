import { Except } from 'type-fest';
import { BasicMetaSysProps, DefaultElements, MakeRequest, SysLink } from '../common-types';
declare type AppSigningSecretSys = Except<BasicMetaSysProps, 'version' | 'id'> & {
    appDefinition: SysLink;
    organization: SysLink;
};
export declare type AppSigningSecretProps = {
    /**
     * System metadata
     */
    sys: AppSigningSecretSys;
    /** The last four characters of the signing secret */
    redactedValue: string;
};
export declare type CreateAppSigningSecretProps = {
    /** A 64 character matching the regular expression /^[0-9a-zA-Z+/=_-]+$/  */
    value: string;
};
export interface AppSigningSecret extends AppSigningSecretProps, DefaultElements<AppSigningSecretProps> {
    /**
     * Deletes this object on the server.
     * @return Promise for the deletion. It contains no data, but the Promise error case should be handled.
     * @example ```javascript
     * const contentful = require('contentful-management')
     *
     * const client = contentful.createClient({
     *   accessToken: '<content_management_api_key>'
     * })
     * client.getOrganization('<organization_id>')
     * .then((organization) => organization.getAppSigningSecret(<api-key-id>))
     * .then((signingSecret) => signingSecret.delete())
     * .then(() => console.log('signingSecret deleted'))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppSigningSecret data
 * @return Wrapped AppSigningSecret data
 */
export declare function wrapAppSigningSecret(makeRequest: MakeRequest, data: AppSigningSecretProps): AppSigningSecret;
export {};
