"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var msRest = __importStar(require("@azure/ms-rest-js"));
var Models = __importStar(require("./models"));
exports.CarpoolAPIModels = Models;
var Mappers = __importStar(require("./models/mappers"));
exports.CarpoolAPIMappers = Mappers;
var Parameters = __importStar(require("./models/parameters"));
var carpoolAPIContext_1 = require("./carpoolAPIContext");
exports.CarpoolAPIContext = carpoolAPIContext_1.CarpoolAPIContext;
var CarpoolAPI = /** @class */ (function (_super) {
    __extends(CarpoolAPI, _super);
    /**
     * Initializes a new instance of the CarpoolAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    function CarpoolAPI(credentials, options) {
        return _super.call(this, credentials, options) || this;
    }
    CarpoolAPI.prototype.signUp = function (signUpDto, options, callback) {
        return this.sendOperationRequest({
            signUpDto: signUpDto,
            options: options
        }, signUpOperationSpec, callback);
    };
    CarpoolAPI.prototype.signIn = function (signInDto, options, callback) {
        return this.sendOperationRequest({
            signInDto: signInDto,
            options: options
        }, signInOperationSpec, callback);
    };
    CarpoolAPI.prototype.requestPasswordReset = function (passwordResetRequestDto, options, callback) {
        return this.sendOperationRequest({
            passwordResetRequestDto: passwordResetRequestDto,
            options: options
        }, requestPasswordResetOperationSpec, callback);
    };
    CarpoolAPI.prototype.resetPassword = function (passwordResetDto, options, callback) {
        return this.sendOperationRequest({
            passwordResetDto: passwordResetDto,
            options: options
        }, resetPasswordOperationSpec, callback);
    };
    CarpoolAPI.prototype.getMyProfile = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getMyProfileOperationSpec, callback);
    };
    CarpoolAPI.prototype.getMyCarpools = function (options, callback) {
        return this.sendOperationRequest({
            options: options
        }, getMyCarpoolsOperationSpec, callback);
    };
    CarpoolAPI.prototype.createCarpool = function (carpoolDto, options, callback) {
        return this.sendOperationRequest({
            carpoolDto: carpoolDto,
            options: options
        }, createCarpoolOperationSpec, callback);
    };
    CarpoolAPI.prototype.getCarpool = function (id, options, callback) {
        return this.sendOperationRequest({
            id: id,
            options: options
        }, getCarpoolOperationSpec, callback);
    };
    CarpoolAPI.prototype.updateCarpool = function (carpoolDto, id, options, callback) {
        return this.sendOperationRequest({
            carpoolDto: carpoolDto,
            id: id,
            options: options
        }, updateCarpoolOperationSpec, callback);
    };
    CarpoolAPI.prototype.deleteCarpool = function (id, options, callback) {
        return this.sendOperationRequest({
            id: id,
            options: options
        }, deleteCarpoolOperationSpec, callback);
    };
    CarpoolAPI.prototype.createDriver = function (createDriverDto, id, options, callback) {
        return this.sendOperationRequest({
            createDriverDto: createDriverDto,
            id: id,
            options: options
        }, createDriverOperationSpec, callback);
    };
    CarpoolAPI.prototype.getDrivers = function (id, options, callback) {
        return this.sendOperationRequest({
            id: id,
            options: options
        }, getDriversOperationSpec, callback);
    };
    CarpoolAPI.prototype.verifyUser = function (verificationDto, options, callback) {
        return this.sendOperationRequest({
            verificationDto: verificationDto,
            options: options
        }, verifyUserOperationSpec, callback);
    };
    return CarpoolAPI;
}(carpoolAPIContext_1.CarpoolAPIContext));
exports.CarpoolAPI = CarpoolAPI;
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var signUpOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/auth/signup",
    requestBody: {
        parameterPath: "signUpDto",
        mapper: __assign(__assign({}, Mappers.SignUpDto), { required: true })
    },
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
var signInOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/auth/signin",
    requestBody: {
        parameterPath: "signInDto",
        mapper: __assign(__assign({}, Mappers.SignInDto), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.AuthDto
        },
        default: {}
    },
    serializer: serializer
};
var requestPasswordResetOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/auth/requestpasswordreset",
    requestBody: {
        parameterPath: "passwordResetRequestDto",
        mapper: __assign(__assign({}, Mappers.PasswordResetRequestDto), { required: true })
    },
    responses: {
        200: {},
        default: {}
    },
    serializer: serializer
};
var resetPasswordOperationSpec = {
    httpMethod: "PUT",
    path: "api/v1/auth/resetpassword",
    requestBody: {
        parameterPath: "passwordResetDto",
        mapper: __assign(__assign({}, Mappers.PasswordResetDto), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.AuthDto
        },
        default: {}
    },
    serializer: serializer
};
var getMyProfileOperationSpec = {
    httpMethod: "GET",
    path: "api/v1/users/me",
    responses: {
        200: {
            bodyMapper: Mappers.UserDto
        },
        default: {}
    },
    serializer: serializer
};
var getMyCarpoolsOperationSpec = {
    httpMethod: "GET",
    path: "api/v1/users/me/carpools",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Carpool"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var createCarpoolOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/carpools",
    requestBody: {
        parameterPath: "carpoolDto",
        mapper: __assign(__assign({}, Mappers.CarpoolDto), { required: true })
    },
    responses: {
        201: {
            bodyMapper: Mappers.Carpool
        },
        default: {}
    },
    serializer: serializer
};
var getCarpoolOperationSpec = {
    httpMethod: "GET",
    path: "api/v1/carpools/{id}",
    urlParameters: [
        Parameters.id
    ],
    responses: {
        200: {
            bodyMapper: Mappers.Carpool
        },
        default: {}
    },
    serializer: serializer
};
var updateCarpoolOperationSpec = {
    httpMethod: "PUT",
    path: "api/v1/carpools/{id}",
    urlParameters: [
        Parameters.id
    ],
    requestBody: {
        parameterPath: "carpoolDto",
        mapper: __assign(__assign({}, Mappers.CarpoolDto), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Carpool
        },
        default: {}
    },
    serializer: serializer
};
var deleteCarpoolOperationSpec = {
    httpMethod: "DELETE",
    path: "api/v1/carpools/{id}",
    urlParameters: [
        Parameters.id
    ],
    responses: {
        200: {
            bodyMapper: Mappers.Carpool
        },
        default: {}
    },
    serializer: serializer
};
var createDriverOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/carpools/{id}/drivers",
    urlParameters: [
        Parameters.id
    ],
    requestBody: {
        parameterPath: "createDriverDto",
        mapper: __assign(__assign({}, Mappers.CreateDriverDto), { required: true })
    },
    responses: {
        201: {
            bodyMapper: Mappers.DriverDto
        },
        default: {}
    },
    serializer: serializer
};
var getDriversOperationSpec = {
    httpMethod: "GET",
    path: "api/v1/carpools/{id}/drivers",
    urlParameters: [
        Parameters.id
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "DriverDto"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var verifyUserOperationSpec = {
    httpMethod: "PUT",
    path: "api/v1/verification",
    requestBody: {
        parameterPath: "verificationDto",
        mapper: __assign(__assign({}, Mappers.VerificationDto), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.AuthDto
        },
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=carpoolAPI.js.map