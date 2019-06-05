/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-06-05
 * @Company: mConnect.biz | @License: MIT
 * @Description: @mconnect/validate-crud testing, validateLoad
 */

const {suite, test, before} = require('mocha');
const {mcMessages}          = require('../src/locales/getMessage');
const {ValidateCrud}        = require('../index');
const ok                    = require('./assert');

let loadParams = {
    coll        : 'tests',
    actionParams: [
        {name: 'Abi', age: 10},
        {name: "Ola", age: 12},
    ]
};

let mcValidate,
    options = {
        messages: mcMessages,
    };

before(() => {
    mcValidate = ValidateCrud(options);
});

suite('@mconnect/validate-crud package Testing:', () => {
    suite('Positive testing:', () => {
        test('should return no error', () => {
            const req = mcValidate.validateLoadRecord(loadParams);
            ok(Object.keys(req).length === 0, `response should be errors free`);
        });
    });

    suite('Negative testing:', () => {
        test('should return errors', () => {
            loadParams = {
                coll        : '',
                actionParams: '',
            };
            const req  = mcValidate.validateLoadRecord(loadParams);
            // console.log('req-res1: ', req);
            ok(Object.keys(req).length > 0, `response should return errors`);
        });
        test('should return correct error message', () => {
            loadParams = {
                coll        : '',
                actionParams: ''
            };
            const res  = {
                coll        : mcMessages.infoRequired || 'required-error, info is required',
                actionParams: mcMessages.infoRequired || 'required-error, info is required',
            };
            const req  = mcValidate.validateLoadRecord(loadParams);
            // console.log('req-res2: ', req);
            ok(req.toString() === res.toString(), `response should return ${res.toString()}`);
        });
    });
});
