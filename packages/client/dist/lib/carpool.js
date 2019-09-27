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
exports.CarpoolModels = Models;
var Mappers = __importStar(require("./models/mappers"));
exports.CarpoolMappers = Mappers;
var carpoolContext_1 = require("./carpoolContext");
exports.CarpoolContext = carpoolContext_1.CarpoolContext;
var Carpool = /** @class */ (function (_super) {
    __extends(Carpool, _super);
    /**
     * Initializes a new instance of the Carpool class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    function Carpool(credentials, options) {
        return _super.call(this, credentials, options) || this;
    }
    Carpool.prototype.signUp = function (signUpDto, options, callback) {
        return this.sendOperationRequest({
            signUpDto: signUpDto,
            options: options
        }, signUpOperationSpec, callback);
    };
    Carpool.prototype.signIn = function (authDto, options, callback) {
        return this.sendOperationRequest({
            authDto: authDto,
            options: options
        }, signInOperationSpec, callback);
    };
    return Carpool;
}(carpoolContext_1.CarpoolContext));
exports.Carpool = Carpool;
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
        200: {
            bodyMapper: Mappers.UserDto
        },
        default: {}
    },
    serializer: serializer
};
var signInOperationSpec = {
    httpMethod: "POST",
    path: "api/v1/auth/signin",
    requestBody: {
        parameterPath: "authDto",
        mapper: __assign(__assign({}, Mappers.AuthDto), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.UserDto
        },
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=carpool.js.map