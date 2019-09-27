"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = {
    serializedName: "SignUpDto",
    type: {
        name: "Composite",
        className: "SignUpDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            password: {
                required: true,
                serializedName: "password",
                type: {
                    name: "String"
                }
            },
            displayName: {
                required: true,
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.UserDto = {
    serializedName: "UserDto",
    type: {
        name: "Composite",
        className: "UserDto",
        modelProperties: {
            id: {
                required: true,
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            displayName: {
                required: true,
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            },
            accessToken: {
                required: true,
                serializedName: "accessToken",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.AuthDto = {
    serializedName: "AuthDto",
    type: {
        name: "Composite",
        className: "AuthDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            password: {
                required: true,
                serializedName: "password",
                type: {
                    name: "String"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map