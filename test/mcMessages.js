/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-01-12
 * @Company: mConnect.biz | @License: MIT
 * @Description: mcMessages for validateCrud testing
 */

const path  = require('path');
const utils = require('@mconnect/utils')();

const localeFiles = {
    'en-US': path.join(__dirname, 'json/messages/enUSMessages.json'),
    'en-CA': path.join(__dirname, 'json/messages/enCAMessages.json'),
    'fr-CA': path.join(__dirname, 'json/messages/frCAMessages.json'),
    'fr-FR': path.join(__dirname, 'json/messages/frFRMessages.json'),
};

const options = {};

const mcMessages = utils.getLocale(localeFiles, options);

module.exports = mcMessages;
