/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-01-12
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/validate-crud testing, validateLoad
 */

const suite        = require('mocha').suite;
const test         = require('mocha').test;
const before       = require('mocha').before;
const messages     = require('./mcMessages');
const validateCrud = require('../index');
const ok           = require('./assert');

let loadParams = {
    coll        : 'tests',
    actionParams: [
        { name: 'Abi', age: 10 },
        { name: "Ola", age: 12 },
    ]
};

let mcValidate,
    options = {
        messages: messages,
    };

before(() => {
    mcValidate = validateCrud(options);
});

suite('@mconnect/validate-crud package Testing:', () => {
    suite('Positive testing:', () => {
        test('should return no error', () => {
            const req = mcValidate.validateLoadRecord(loadParams);
            // console.log('errors: ', req);
            ok(Object.keys(req).length === 0, `response should be errors free`);
        });
    });

    suite('Negative testing:', () => {
        test('should return errors', () => {
            loadParams = {
                coll        : '',
                actionParams: ''
            };
            const req  = mcValidate.validateLoadRecord(loadParams);
            // console.log('errors: ', req);
            ok(Object.keys(req).length > 0, `response should return errors`);
        });
        test('should return correct error message', () => {
            loadParams = {
                coll        : '',
                actionParams: ''
            };
            const res  = {
                coll        : 'Information item is required',
                actionParams: 'Information item is required'
            };
            const req  = mcValidate.validateLoadRecord(loadParams);
            ok(req.toString() === res.toString(), `response should return ${res.toString()}`);
        });
    });
});
