import { Except } from 'type-fest';
import { BasicMetaSysProps, DefaultElements, MakeRequest, SysLink } from '../common-types';
declare type AppDetailsSys = Except<BasicMetaSysProps, 'version' | 'id'> & {
    appDefinition: SysLink;
    organization: SysLink;
};
export declare enum IconType {
    Base64 = "base64"
}
export interface AppIcon {
    value: string;
    type: IconType;
}
export declare type AppDetailsProps = {
    /**
     * System metadata
     */
    sys: AppDetailsSys;
    /**
     * An Icon that represents the App
     */
    icon?: AppIcon;
};
export declare type CreateAppDetailsProps = {
    /**
     * An Icon that represents the App
     */
    icon?: AppIcon;
};
export interface AppDetails extends AppDetailsProps, DefaultElements<AppDetailsProps> {
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
     * .then((organization) => organization.getAppDetails(<app-id>))
     * .then((appDetails) => appDetails.delete())
     * .then(() => console.log('appDetails deleted'))
     * .catch(console.error)
     * ```
     */
    delete(): Promise<void>;
}
/**
 * @private
 * @param http - HTTP client instance
 * @param data - Raw AppDetails data
 * @return Wrapped AppDetails data
 */
export declare function wrapAppDetails(makeRequest: MakeRequest, data: AppDetailsProps): AppDetails;
export {};
