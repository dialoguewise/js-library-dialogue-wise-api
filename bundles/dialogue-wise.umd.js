(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jsSHA'), require('@angular/core'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('dialogue-wise', ['exports', 'jsSHA', '@angular/core', '@angular/common', '@angular/common/http'], factory) :
    (factory((global['dialogue-wise'] = {}),global.jsSHA,global.ng.core,global.ng.common,global.ng.common.http));
}(this, (function (exports,jsSHA,i0,common,i1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

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
                var datePipe = new common.DatePipe('en-US');
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
                    headers: new i1.HttpHeaders({
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DialogueWiseService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ DialogueWiseService.ngInjectableDef = i0.defineInjectable({ factory: function DialogueWiseService_Factory() { return new DialogueWiseService(i0.inject(i1.HttpClient)); }, token: DialogueWiseService, providedIn: "root" });
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
            { type: i0.NgModule, args: [{
                        imports: [i1.HttpClientModule],
                        declarations: [],
                        exports: [],
                        providers: [common.DatePipe, DialogueWiseService]
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

    exports.DialogueWiseService = DialogueWiseService;
    exports.DialogueWiseRequest = DialogueWiseRequest;
    exports.DialogueWiseModule = DialogueWiseModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=dialogue-wise.umd.js.map