import { AxiosInstance } from './types';
declare type ThrottleType = 'auto' | string;
declare const _default: (axiosInstance: AxiosInstance, type?: ThrottleType | number) => () => void;
export default _default;
