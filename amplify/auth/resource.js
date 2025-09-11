"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var backend_1 = require("@aws-amplify/backend");
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
exports.auth = (0, backend_1.defineAuth)({
    loginWith: {
        email: {
            verificationEmailStyle: "CODE",
            verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
            verificationEmailBody: function (createCode) {
                return "Use this code to confirm your account: ".concat(createCode());
            },
        },
    },
});
