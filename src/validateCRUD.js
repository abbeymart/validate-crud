/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-06-03
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/validate-crud | CRUD activities-params/args validation
 */

// Import required module(s)
const utils        = require('@mconnect/utils')();
const {mcMessages} = require('./locales/getMessage');

function validateCrud(options = {}) {
    // options - params
    const mcMessage     = options && options.messages && (typeof options.messages === 'object') ?
                          options.messages : mcMessages;
    const maxQueryLimit = options && options.maxQueryLimit && (typeof parseInt(this.maxQueryLimit) === 'number') ?
                          parseInt(options.maxQueryLimit) : 100000;
    return {
        validateClearRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, collection name should be a string';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error';
                }
            } catch (e) {
                console.error('Error validating clear-record(s) inputs');
                errors.validationError = 'Error validating clear-record(s) inputs';
            }

            return errors;
        },
        validateLoadRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, collection name should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }

                if (paramItems.actionParams) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.actionParams);
                    if (!testItem) {
                        errors.actionParams = mcMessage.isArray || 'format-error, actionParams should be an array';
                    }
                } else {
                    errors.actionParams = mcMessage.infoRequired || 'required-error, info is required';
                }
            } catch (e) {
                console.error('Error validating load-record(s) inputs');
                errors.validationError = 'Error validating load-record(s) inputs';
            }

            return errors;
        },
        validateCheckAccess(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, token should be a string/alphanumeric';
                    }
                }
                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, user-info should be an object';
                    }
                }
                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfoRequired = 'userInfo or token is required';
                    errors.tokenRequired    = 'userInfo or token is required';
                }
            } catch (e) {
                console.error('Error validating check-access inputs');
                errors.validationError = 'Error validating check-access inputs';
            }

            return errors;
        },
        validateGetAllRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, collection name should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.projectParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.projectParams);
                    if (!testItem) {
                        errors.projectParams = mcMessage.isObject || 'format-error, projectParams should be an object';
                    }
                }
                if (paramItems.sortParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.sortParams);
                    if (!testItem) {
                        errors.sortParams = mcMessage.isObject || 'format-error, sortParams should be an object';
                    }
                }
                if (paramItems.skip) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if (!testItem) {
                        errors.skip = mcMessage.numberFormat || 'format-error, skip should be a number';
                    }
                    if (parseInt(paramItems.skip) < 0) {
                        errors.skipValue = 'skip cannot be less than 0 ';
                    }
                }
                if (paramItems.limit) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if (!testItem) {
                        errors.limit = mcMessage.numberFormat || 'format-error, limit should be a number';
                    }
                    if (parseInt(paramItems.limit) > maxQueryLimit) {
                        errors.limitValue = `limit cannot be greater than ${maxQueryLimit}`;
                    }
                    if (parseInt(paramItems.limit) < 1) {
                        errors.limitValue = 'limit cannot be less than 1 ';
                    }
                }
            } catch (e) {
                console.error('Error validating get-record(s) inputs');
                errors.validationError = 'Error validating get-record(s) inputs';
            }

            return errors;
        },
        validateGetRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, collection name should be a string';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }

                if (paramItems.queryParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if (!testItem) {
                        errors.queryParams = mcMessage.isObject || 'format-error, queryParams should be an object';
                    }
                }

                if (paramItems.projectParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.projectParams);
                    if (!testItem) {
                        errors.projectParams = mcMessage.isObject || 'format-error, projectParams should be an object';
                    }
                }

                if (paramItems.sortParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.sortParams);
                    if (!testItem) {
                        errors.sortParams = mcMessage.isObject || 'format-error, sortParams should be an object';
                    }
                }

                if (paramItems.docId) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if (!testItem) {
                        errors.docId = mcMessage.isArray || 'format-error, docId(s) should be an array';
                    }
                }

                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, token should be a string/alphanumeric';
                    }
                }

                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, userInfo should be an object';
                    }
                }

                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }

                if (paramItems.skip) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if (!testItem) {
                        errors.skip = mcMessage.numberFormat || 'format-error, skip should be a number';
                    }
                    if (parseInt(paramItems.skip) < 0) {
                        errors.skipValue = 'skip cannot be less than 0 ';
                    }
                }
                if (paramItems.limit) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if (!testItem) {
                        errors.limit = mcMessage.numberFormat || 'format-error, limit should be a number';
                    }
                    if (parseInt(paramItems.limit) > maxQueryLimit) {
                        errors.limitValue = `limit cannot be greater than ${maxQueryLimit}`;
                    }
                    if (parseInt(paramItems.limit) < 1) {
                        errors.skipLimit = 'limit-value cannot be less than 1';
                    }
                }
            } catch (e) {
                console.error('Error validating get-record(s) inputs');
                errors.validationError = 'Error validating get-record(s) inputs';
            }

            return errors;
        },
        validateSaveRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }

                if (paramItems.docId) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if (!testItem) {
                        errors.docId = mcMessage.isArray || 'format-error, should be an array[]';
                    }
                }

                if (paramItems.actionParams) {
                    // Check input formats/patterns:  array
                    const testObject = utils.isArrayType(paramItems.actionParams);
                    if (!testObject) {
                        errors.actionParams = mcMessage.isArray || 'format-error, should be an array';
                    }
                } else {
                    errors.queryParams = mcMessage.infoRequired || 'required-error, info required';
                }

                if (paramItems.queryParams) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.queryParams);
                    if (!testObject) {
                        errors.queryParams = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (paramItems.existParams) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.existParams);
                    if (!testItem) {
                        errors.existParams = mcMessage.isArray || 'format-error, should be an array[]';
                    }
                } else {
                    errors.existParams = mcMessage.infoRequired || 'required-error, info is required';
                }

                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }

                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }
            } catch (e) {
                console.error('Error validating save-record(s) inputs');
                errors.validationError = 'Error validating save-record(s) inputs';
            }

            return errors;
        },
        validateSaveRecords(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info required';
                }

                if (paramItems.actionParams) {
                    // Check input formats/patterns:  array
                    const testObject = utils.isArrayType(paramItems.actionParams);
                    if (!testObject) {
                        errors.actionParams = mcMessage.isArray || 'format-error, should be an array[]';
                    }
                } else {
                    errors.queryParams = mcMessage.infoRequired || 'required-error, info is required';
                }
            } catch (e) {
                console.error('Error validating save-record(s) inputs');
                errors.validationError = 'Error validating save-record(s) inputs';
            }

            return errors;
        },
        validateCreateRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = [];

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info required';
                }
                if (paramItems.queryParams) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.queryParams) || utils.isArrayType(paramItems.queryParams);
                    if (!testObject) {
                        errors.queryParams = mcMessage.isObject + ' OR ' + mcMessage.isArray || 'format-error, should be an object{} or array[]';
                    }
                }
                if (paramItems.existParams) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.existParams);
                    if (!testItem) {
                        errors.existParams = mcMessage.isArray || 'format-error, should be an array[]';
                    }
                }
                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfo = 'userInfo or token is required';
                    errors.token    = 'userInfo or token is required';
                }
            } catch (e) {
                console.error('Error validating create-record(s) inputs');
                errors.validationError = 'Error validating create-record(s) inputs';
            }

            return errors;
        },
        validateUpdateRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info required';
                }
                if (paramItems.updateParams) {
                    // Check input formats/patterns: object or array
                    const testObject = utils.isObjectType(paramItems.updateParams) || utils.isArrayType(paramItems.updateParams);
                    if (!testObject) {
                        errors.updateParams = (mcMessage.isObject + ' OR ' + mcMessage.isArray) || 'format-error, should be an object{} or array[]';
                    }
                }
                if (paramItems.queryParams) {
                    // Check input formats/patterns: object
                    const testObject = utils.isObjectType(paramItems.queryParams);
                    if (!testObject) {
                        errors.queryParams = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }
                if (paramItems.existParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.existParams);
                    if (!testItem) {
                        errors.existParams = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }
                if (paramItems.docId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.docId) || utils.isArrayType(paramItems.docId);
                    if (!testItem) {
                        errors.docId = mcMessage.isStringAlpha + ' OR ' + mcMessage.isArray || 'format-error, should be a string/alphanumeric or an array[]';
                    }
                }
                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfo = 'userInfo or token is required';
                    errors.token    = 'userInfo or token is required';
                }

                // match docId(string) to updateParams(object) || docId(array) to updateParams(array)
                if (typeof paramItems.docId === 'string') {
                    if (typeof paramItems.updateParams !== 'object') {
                        errors.updateParamsRec = (mcMessage.isObject + ' :: for single record update') || 'format-error, should be an object{}';
                    }
                }
                if (Array.isArray(paramItems.docId)) {
                    if (!Array.isArray(paramItems.updateParams)) {
                        errors.updateParamsRec = (mcMessage.isArray + ' :: for multiple records update') || 'format-error, should be an array[]';
                    }
                }
            } catch (e) {
                console.error('Error validating update-record(s) inputs');
                errors.validationError = 'Error validating update-record(s) inputs';
            }

            return errors;
        },
        validateDeleteRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }

                if (paramItems.queryParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if (!testItem) {
                        errors.queryParams = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (paramItems.docId) {
                    // Check input formats/patterns
                    const testItem = utils.isArrayType(paramItems.docId);
                    if (!testItem) {
                        errors.docId = mcMessage.isArray || 'format-error, should be an array[]';
                    }
                }

                if (paramItems.docId.length < 1 && Object.keys(paramItems.queryParams).length < 1) {
                    errors.docIdRequired       = 'docId or queryParams is required';
                    errors.queryParamsRequired = 'docId or queryParams is required';
                }

                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, should a string/alphanumeric';
                    }
                }

                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }

                if (!paramItems.token && Object.keys(paramItems.userInfo).length < 1) {
                    errors.userInfoRequired = 'token or userInfo is required';
                    errors.tokenRequired    = 'token or userInfo is required';
                }

            } catch (e) {
                console.error('Error validating delete-record(s) inputs');
                errors.validationError = 'Error validating delete-record(s) inputs';
            }

            return errors;

        },
        validateReadLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.collParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams);
                    if (!testItem) {
                        errors.collParams = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateCreateLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.collParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams) || utils.isArrayType(paramItems.collParams);
                    if (!testItem) {
                        errors.collParams = mcMessage.isObject + ' OR ' + mcMessage.isArray || 'format-error, should an object{} or array[]';
                    }
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateUpdateLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.collOldParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collOldParams) || utils.isArrayType(paramItems.collOldParams);
                    if (!testItem) {
                        errors.collOldParams = (mcMessage.isObject + ' OR ' + mcMessage.isArray) || 'format-error, should be an object{} or array[]';
                    }
                }
                if (paramItems.collNewParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collNewParams) || utils.isArrayType(paramItems.collNewParams);
                    if (!testItem) {
                        errors.collNewParams = mcMessage.isObject + ' OR ' + mcMessage.isArray || 'format-error, should be an array[]';
                    }
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateDeleteLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.collParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.collParams) || utils.isArrayType(paramItems.collParams);
                    if (!testItem) {
                        errors.collParams = mcMessage.isObject + ' OR ' + mcMessage.isArray || 'format-error, should be an object{} or array[]';
                    }
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateSearchLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.coll) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.coll);
                    if (!testItem) {
                        errors.coll = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.coll = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.queryParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.queryParams);
                    if (!testItem) {
                        errors.queryParams = mcMessage.isObject || 'format-error, should be an object';
                    }
                }
                if (paramItems.docId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.docId);
                    if (!testItem) {
                        errors.docId = mcMessage.isArray || 'format-error, should be an array';
                    }
                }
                if (paramItems.token) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.token);
                    if (!testItem) {
                        errors.token = mcMessage.isStringAlpha || 'format-error, should a string/alphanumeric';
                    }
                }
                if (paramItems.userInfo) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.userInfo);
                    if (!testItem) {
                        errors.userInfo = mcMessage.isObject || 'format-error, should be an object{}';
                    }
                }
                if (paramItems.skip) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.skip);
                    if (!testItem) {
                        errors.skip = mcMessage.numberFormat || 'format-error, skip should be a number';
                    }
                    if (parseInt(paramItems.skip) < 0) {
                        errors.skipValue = 'skip cannot be less than 0 ';
                    }
                }
                if (paramItems.limit) {
                    // Check input formats/patterns
                    const testItem = utils.isNumberDigit(paramItems.limit);
                    if (!testItem) {
                        errors.limit = mcMessage.numberFormat || 'format-error, limit should be a number';
                    }
                    if (parseInt(paramItems.limit) > maxQueryLimit) {
                        errors.limitValue = `limit cannot be greater than ${maxQueryLimit}`;
                    }
                    if (parseInt(paramItems.limit) < 1) {
                        errors.skipLimit = 'limit-value cannot be less than 1';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateLoginLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.loginParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.loginParams) || utils.isArrayType(paramItems.loginParams);
                    if (!testItem) {
                        errors.loginParams = `${mcMessage.isObject} OR ${mcMessage.isArray}` || 'format-error, should an object{} or array[]';
                    }
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
        validateLogoutLog(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.loginParams) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.loginParams) || utils.isArrayType(paramItems.loginParams);
                    if (!testItem) {
                        errors.loginParams = `${mcMessage.isObject} OR ${mcMessage.isArray}` || 'format-error, should be an object{} or array[]';
                    }
                }

                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userInfo);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }


            return errors;
        },
        validateStateRecord(paramItems) {
            // Initialise error object and patterns matching:
            let errors = {};

            try {
                if (paramItems.namespace) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.namespace);
                    if (!testItem) {
                        errors.namespace = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                }
                if (paramItems.key) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.value);
                    if (!testItem) {
                        errors.key = mcMessage.isStringAlpha || 'format-error, should be a string/alphanumeric';
                    }
                } else {
                    errors.key = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.value) {
                    // Check input formats/patterns
                    const testItem = utils.isObjectType(paramItems.value)
                        || utils.isArrayType(paramItems.value)
                        || utils.isStringAlpha(paramItems.value)
                        || utils.isNumberDigit(paramItems.value);
                    if (!testItem) {
                        errors.value = `${mcMessage.isObject} OR ${mcMessage.isArray} OR ${mcMessage.isStringAlpha} OR ${mcMessage.numberFormat}` ||
                            'format-error, should be an object{} or an array[] or a string/alphanumeric';
                    }
                } else {
                    errors.value = mcMessage.infoRequired || 'required-error, info is required';
                }
                if (paramItems.userId) {
                    // Check input formats/patterns
                    const testItem = utils.isStringAlpha(paramItems.userId);
                    if (!testItem) {
                        errors.userId = mcMessage.isStringAlpha || 'format-error, should a string/alphanumeric';
                    }
                }
            } catch (e) {
                console.error('Error validating audit-log inputs');
                errors.validationError = 'Error validating audit-log inputs';
            }

            return errors;
        },
    }
}

module.exports = validateCrud;
