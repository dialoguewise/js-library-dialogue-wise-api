import { __read } from 'tslib';
import * as jsSHA from 'jsSHA';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogueWiseService = /** @class */ (function () {
    function DialogueWiseService(httpClient) {
        this.apiBaseUrl = "https://api.dialoguewise.com/api/";
        this.httpClient = httpClient;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    DialogueWiseService.prototype.getDialogue = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var datePipe = new DatePipe('en-US');
        /** @type {?} */
        var currentUtcDate = new Date(new Date().toUTCString());
        /** @type {?} */
        var currentUtc = datePipe.transform(new Date(currentUtcDate), 'dd/MM/yyyy hh:mm:ss a', '+0000');
        /** @type {?} */
        var isPilotFlag = request.isPilot ? "&isPilotVersion=true" : "";
        /** @type {?} */
        var apiUrl = this.apiBaseUrl + "dialogue/getdialogue?dialogueName=" + request.dialogueName + isPilotFlag;
        /** @type {?} */
        var message = "/api/dialogue/getdialogue:" + currentUtc;
        /** @type {?} */
        var hashMessage = this.getHash(request.apiKey, message);
        /** @type {?} */
        var authentication = request.emailHash + ":" + hashMessage;
        console.log(currentUtcDate);
        console.log(currentUtc);
        console.log(authentication);
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Timestamp': currentUtc,
                'Authentication': authentication,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': "*",
                'Access-Control-Allow-Headers': 'Content-Type, Timestamp, Authentication'
            })
        };
        return this.httpClient.post(apiUrl, this.mapToString(request.variableList), httpOptions);
    };
    /**
     * @param {?} apiKey
     * @param {?} value
     * @return {?}
     */
    DialogueWiseService.prototype.getHash = /**
     * @param {?} apiKey
     * @param {?} value
     * @return {?}
     */
    function (apiKey, value) {
        /** @type {?} */
        var hashValue = "";
        /** @type {?} */
        var shaObj = new jsSHA("SHA-256", "TEXT");
        shaObj.setHMACKey(apiKey, "TEXT");
        shaObj.update(value);
        hashValue = shaObj.getHMAC("B64");
        return hashValue;
    };
    /**
     * @param {?} mapValue
     * @return {?}
     */
    DialogueWiseService.prototype.mapToString = /**
     * @param {?} mapValue
     * @return {?}
     */
    function (mapValue) {
        /** @type {?} */
        var jsonVal = JSON.stringify(Array.from(mapValue.entries())
            .reduce(function (o, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            o[key] = value;
            return o;
        }, {}));
        return jsonVal;
    };
    DialogueWiseService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DialogueWiseService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DialogueWiseService.ngInjectableDef = defineInjectable({ factory: function DialogueWiseService_Factory() { return new DialogueWiseService(inject(HttpClient)); }, token: DialogueWiseService, providedIn: "root" });
    return DialogueWiseService;
}());
var DialogueWiseRequest = /** @class */ (function () {
    function DialogueWiseRequest() {
    }
    return DialogueWiseRequest;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogueWiseModule = /** @class */ (function () {
    function DialogueWiseModule() {
    }
    DialogueWiseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    declarations: [],
                    exports: [],
                    providers: [DatePipe, DialogueWiseService]
                },] }
    ];
    return DialogueWiseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DialogueWiseService, DialogueWiseRequest, DialogueWiseModule };

//# sourceMappingURL=dialogue-wise.js.map