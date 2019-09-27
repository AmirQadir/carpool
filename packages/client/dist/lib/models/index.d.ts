import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";
/**
 * @interface
 * An interface representing SignUpDto.
 */
export interface SignUpDto {
    /**
     * @member {string} email
     */
    email: string;
    /**
     * @member {string} password
     */
    password: string;
    /**
     * @member {string} displayName
     */
    displayName: string;
}
/**
 * @interface
 * An interface representing UserDto.
 */
export interface UserDto {
    /**
     * @member {string} id
     */
    id: string;
    /**
     * @member {string} email
     */
    email: string;
    /**
     * @member {string} displayName
     */
    displayName: string;
    /**
     * @member {string} accessToken
     */
    accessToken: string;
}
/**
 * @interface
 * An interface representing AuthDto.
 */
export interface AuthDto {
    /**
     * @member {string} email
     */
    email: string;
    /**
     * @member {string} password
     */
    password: string;
}
/**
 * @interface
 * An interface representing CarpoolOptions.
 * @extends ServiceClientOptions
 */
export interface CarpoolOptions extends ServiceClientOptions {
    /**
     * @member {string} [baseUri]
     */
    baseUri?: string;
}
/**
 * Contains response data for the signUp operation.
 */
export declare type SignUpResponse = UserDto & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: UserDto;
    };
};
/**
 * Contains response data for the signIn operation.
 */
export declare type SignInResponse = UserDto & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: UserDto;
    };
};
