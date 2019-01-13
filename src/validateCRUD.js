/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-01-12
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/validate-crud | CRUD activities-params/args validation
 */

// Import required module(s)
const utils = require('@mconnect/utils')();

function validateCrud( options ) {
    // options - params
    // console.log('options: ', options);
    const mcMessages    = options && options.messages && (typeof options.messages === 'object') ?
                          options.messages : {};
    const maxQueryLimit = options && options.maxQueryLimit && ( typeof this.maxQueryLimit === 'number' ) ?
                          options.maxQueryLimit : 10000;
    return {
        validateLoadRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }

                if ( paramItems.actionParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.actionParams);
                    if ( ! testItem ) {
                        errors.actionParams = mcMessages.isObject || 'format-error';
                    }
                } else {
                    errors.actionParams = mcMessages.infoRequired || 'required-error';
                }
            } catch ( e ) {
                console.error('Error validating load-record(s) inputs');
                errors.validationError = 'Error validating load-record(s) inputs';
            }

            return errors;
        },
        validateCheckAccess( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }
                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }
                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfoRequired = 'userInfo or token is required';
                    errors.tokenRequired    = 'userInfo or token is required';
                }
            } catch ( e ) {
                console.error('Error validating check-access inputs');
                errors.validationError = 'Error validating check-access inputs';
            }

            return errors;
        },
        validateGetAllRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.projectParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.projectParams);
                    if ( ! testItem ) {
                        errors.projectParams = mcMessages.isObject || 'format-error';
                    }
                }
                if ( paramItems.sortParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.sortParams);
                    if ( ! testItem ) {
                        errors.sortParams = mcMessages.isObject || 'format-error';
                    }
                }
                if ( paramItems.skip ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if ( ! testItem ) {
                        errors.skip = mcMessages.numberFormat || 'format-error';
                    }
                    if ( paramItems.skip < 0 ) {
                        errors.skipValue = 'skip cannot be less than 0 ';
                    }
                }
                if ( paramItems.limit ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if ( ! testItem ) {
                        errors.limit = mcMessages.numberFormat || 'format-error';
                    }
                    if ( paramItems.limit > maxQueryLimit ) {
                        errors.limitValue = `limit cannot be greater than ${maxQueryLimit}`;
                    }
                    if ( paramItems.limit < 1 ) {
                        errors.limitValue = 'limit cannot be less than 1 ';
                    }
                }
            } catch ( e ) {
                console.error('Error validating get-record(s) inputs');
                errors.validationError = 'Error validating get-record(s) inputs';
            }

            return errors;
        },
        validateGetRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }

                if ( paramItems.queryParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if ( ! testItem ) {
                        errors.queryParams = mcMessages.isObject || 'format-error';
                    }
                }

                if ( paramItems.projectParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.projectParams);
                    if ( ! testItem ) {
                        errors.projectParams = mcMessages.isObject || 'format-error';
                    }
                }

                if ( paramItems.sortParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.sortParams);
                    if ( ! testItem ) {
                        errors.sortParams = mcMessages.isObject || 'format-error';
                    }
                }

                if ( paramItems.docId ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if ( ! testItem ) {
                        errors.docId = mcMessages.isArray || 'format-error';
                    }
                }

                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }

                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }

                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }

                if ( paramItems.skip ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if ( ! testItem ) {
                        errors.skip = mcMessages.numberFormat || 'format-error';
                    }
                    if ( paramItems.skip < 0 ) {
                        errors.skipValue = 'skip cannot be less than 0 ';
                    }
                }
                if ( paramItems.limit ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if ( ! testItem ) {
                        errors.limit = mcMessages.numberFormat || 'format-error';
                    }
                    if ( paramItems.limit > maxQueryLimit ) {
                        errors.limitValue = `limit cannot be greater than ${maxQueryLimit}`;
                    }
                    if ( paramItems.limit < 1 ) {
                        errors.skipLimit = 'limit-value cannot be less than 1';
                    }
                }
            } catch ( e ) {
                console.error('Error validating get-record(s) inputs');
                errors.validationError = 'Error validating get-record(s) inputs';
            }

            return errors;
        },
        validateSaveRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }

                if ( paramItems.docId ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if ( ! testItem ) {
                        errors.docId = mcMessages.isArray || 'format-error';
                    }
                }

                if ( paramItems.actionParams ) {
                    // Check input formats/patterns:  array
                    const testObject = utils.isArrayType(paramItems.actionParams);
                    if ( ! testObject ) {
                        errors.actionParams = mcMessages.isArray || 'format-error';
                    }
                } else {
                    errors.queryParams = mcMessages.infoRequired || 'format-error';
                }

                if ( paramItems.queryParams ) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.queryParams);
                    if ( ! testObject ) {
                        errors.queryParams = mcMessages.isObject || 'format-error';
                    }
                }

                if ( paramItems.existParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.existParams);
                    if ( ! testItem ) {
                        errors.existParams = mcMessages.isArray || 'format-error';
                    }
                } else {
                    errors.existParams = mcMessages.infoRequired || 'format-error';
                }

                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }

                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }

                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }
            } catch ( e ) {
                console.error('Error validating save-record(s) inputs');
                errors.validationError = 'Error validating save-record(s) inputs';
            }

            return errors;
        },
        validateSaveRecords( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }

                if ( paramItems.actionParams ) {
                    // Check input formats/patterns:  array
                    const testObject = utils.isArrayType(paramItems.actionParams);
                    if ( ! testObject ) {
                        errors.actionParams = mcMessages.isArray || 'format-error';
                    }
                } else {
                    errors.queryParams = mcMessages.infoRequired || 'format-error';
                }
            } catch ( e ) {
                console.error('Error validating save-record(s) inputs');
                errors.validationError = 'Error validating save-record(s) inputs';
            }

            return errors;
        },
        validateCreateRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = [];

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.queryParams ) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.queryParams) || utils.isArrayType(paramItems.queryParams);
                    if ( ! testObject ) {
                        errors.queryParams = mcMessages.isObject + ' OR ' + mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.existParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.existParams);
                    if ( ! testItem ) {
                        errors.existParams = mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }
                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }

                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfo = 'userInfo or token is required';
                    errors.token    = 'userInfo or token is required';
                }
            } catch ( e ) {
                console.error('Error validating create-record(s) inputs');
                errors.validationError = 'Error validating create-record(s) inputs';
            }

            return errors;
        },
        validateUpdateRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.updateParams ) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.updateParams) || utils.isArrayType(paramItems.updateParams);
                    if ( ! testObject ) {
                        errors.updateParams = ( mcMessages.isObject + ' OR ' + mcMessages.isArray ) || 'format-error';
                    }
                }
                if ( paramItems.queryParams ) {
                    // Check input formats/patterns: object
                    const testObject = utils.isObjectType(paramItems.queryParams);
                    if ( ! testObject ) {
                        errors.queryParams = mcMessages.isObject || 'format-error';
                    }
                }
                if ( paramItems.existParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.existParams);
                    if ( ! testItem ) {
                        errors.existParams = mcMessages.isObject || 'format-error';
                    }
                }
                if ( paramItems.docId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.docId) || utils.isArrayType(paramItems.docId);
                    if ( ! testItem ) {
                        errors.docId = mcMessages.isStringAlpha + ' OR ' + mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }
                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }

                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfo = 'userInfo or token is required';
                    errors.token    = 'userInfo or token is required';
                }

                // match docId(string) to updateParams(object) || docId(array) to updateParams(array)
                if ( typeof paramItems.docId === 'string' ) {
                    if ( typeof paramItems.updateParams !== 'object' ) {
                        errors.updateParamsRec = ( mcMessages.isObject + ' :: for single record update' ) || 'format-error';
                    }
                }
                if ( Array.isArray(paramItems.docId) ) {
                    if ( ! Array.isArray(paramItems.updateParams) ) {
                        errors.updateParamsRec = ( mcMessages.isArray + ' :: for multiple records update' ) || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating update-record(s) inputs');
                errors.validationError = 'Error validating update-record(s) inputs';
            }

            return errors;
        },
        validateDeleteRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }

                if ( paramItems.queryParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if ( ! testItem ) {
                        errors.queryParams = mcMessages.isObject || 'format-error';
                    }
                }

                if ( paramItems.docId ) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if ( ! testItem ) {
                        errors.docId = mcMessages.isArray || 'format-error';
                    }
                }

                if ( paramItems.docId.length < 1 && Object.keys(paramItems.queryParams).length < 1 ) {
                    errors.docIdRequired       = 'docId or queryParams is required';
                    errors.queryParamsRequired = 'docId or queryParams is required';
                }

                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.isStringAlpha || 'format-error';
                    }
                }

                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.isObject || 'format-error';
                    }
                }

                if ( ! paramItems.token && Object.keys(paramItems.userInfo).length < 1 ) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }

            } catch ( e ) {
                console.error('Error validating delete-record(s) inputs');
                errors.validationError = 'Error validating delete-record(s) inputs';
            }

            return errors;

        },
        validateReadLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.collParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams);
                    if ( ! testItem ) {
                        errors.collParams = mcMessages.isObject || 'format-error';
                    }
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateCreateLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.collParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams) || utils.isArrayType(paramItems.collParams);
                    if ( ! testItem ) {
                        errors.collParams = mcMessages.isObject + ' OR ' + mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateUpdateLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.collOldParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collOldParams) || utils.isArrayType(paramItems.collOldParams);
                    if ( ! testItem ) {
                        errors.collOldParams = ( mcMessages.isObject + ' OR ' + mcMessages.isArray ) || 'format-error';
                    }
                }
                if ( paramItems.collNewParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collNewParams) || utils.isArrayType(paramItems.collNewParams);
                    if ( ! testItem ) {
                        errors.collNewParams = mcMessages.isObject + ' OR ' + mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateDeleteLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.collParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams) || utils.isArrayType(paramItems.collParams);
                    if ( ! testItem ) {
                        errors.collParams = mcMessages.isObject + ' OR ' + mcMessages.isArray || 'format-error';
                    }
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateSearchLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.coll ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if ( ! testItem ) {
                        errors.coll = mcMessages.nameFormat || 'format-error';
                    }
                } else {
                    errors.coll = mcMessages.nameRequired || 'required-error';
                }
                if ( paramItems.queryParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if ( ! testItem ) {
                        errors.queryParams = mcMessages.numberFormat || 'format-error';
                    }
                }
                if ( paramItems.docId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.docId);
                    if ( ! testItem ) {
                        errors.docId = mcMessages.numberFormat || 'format-error';
                    }
                }
                if ( paramItems.token ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if ( ! testItem ) {
                        errors.token = mcMessages.numberFormat || 'format-error';
                    }
                }
                if ( paramItems.userInfo ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userInfo = mcMessages.numberFormat || 'format-error';
                    }
                }
                if ( paramItems.skip ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if ( ! testItem ) {
                        errors.skip = mcMessages.numberFormat || 'format-error';
                    }
                }
                if ( paramItems.limit ) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if ( ! testItem ) {
                        errors.limit = mcMessages.numberFormat || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateLoginLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.loginParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.loginParams) || utils.isArrayType(paramItems.loginParams);
                    if ( ! testItem ) {
                        errors.loginParams = `${mcMessages.isObject} OR ${mcMessages.isArray}` || 'format-error';
                    }
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateLogoutLog( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.loginParams ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.loginParams) || utils.isArrayType(paramItems.loginParams);
                    if ( ! testItem ) {
                        errors.loginParams = `${mcMessages.isObject} OR ${mcMessages.isArray}` || 'format-error';
                    }
                }

                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateStateRecord( paramItems ) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if ( paramItems.namespace ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.namespace);
                    if ( ! testItem ) {
                        errors.namespace = mcMessages.isStringAlpha || 'format-error';
                    }
                }
                if ( paramItems.key ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.value);
                    if ( ! testItem ) {
                        errors.key = mcMessages.isStringAlpha || 'format-error';
                    }
                } else {
                    errors.key = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.value ) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.value)
                                     || utils.isArrayType(paramItems.value)
                                     || utils.isStringAlpha(paramItems.value)
                                     || utils.isNumberDigit(paramItems.value);
                    if ( ! testItem ) {
                        errors.value = `${mcMessages.isObject} OR ${mcMessages.isArray} OR ${mcMessages.isStringAlpha} OR ${mcMessages.numberFormat}` || 'format-error';
                    }
                } else {
                    errors.value = mcMessages.infoRequired || 'required-error';
                }
                if ( paramItems.userId ) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userId);
                    if ( ! testItem ) {
                        errors.userId = mcMessages.isStringAlpha || 'format-error';
                    }
                }
            } catch ( e ) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
    }
}

module.exports = validateCrud;
