import * as jsSHA from 'jsSHA';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogueWiseService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.apiBaseUrl = "https://api.dialoguewise.com/api/";
        this.httpClient = httpClient;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    getDialogue(request) {
        /** @type {?} */
        let datePipe = new DatePipe('en-US');
        /** @type {?} */
        let currentUtcDate = new Date(new Date().toUTCString());
        /** @type {?} */
        let currentUtc = datePipe.transform(new Date(currentUtcDate), 'dd/MM/yyyy hh:mm:ss a', '+0000');
        /** @type {?} */
        let isPilotFlag = request.isPilot ? "&isPilotVersion=true" : "";
        /** @type {?} */
        let apiUrl = this.apiBaseUrl + "dialogue/getdialogue?dialogueName=" + request.dialogueName + isPilotFlag;
        /** @type {?} */
        let message = "/api/dialogue/getdialogue:" + currentUtc;
        /** @type {?} */
        let hashMessage = this.getHash(request.apiKey, message);
        /** @type {?} */
        let authentication = request.emailHash + ":" + hashMessage;
        console.log(currentUtcDate);
        console.log(currentUtc);
        console.log(authentication);
        /** @type {?} */
        const httpOptions = {
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
    }
    /**
     * @param {?} apiKey
     * @param {?} value
     * @return {?}
     */
    getHash(apiKey, value) {
        /** @type {?} */
        let hashValue = "";
        /** @type {?} */
        var shaObj = new jsSHA("SHA-256", "TEXT");
        shaObj.setHMACKey(apiKey, "TEXT");
        shaObj.update(value);
        hashValue = shaObj.getHMAC("B64");
        return hashValue;
    }
    /**
     * @param {?} mapValue
     * @return {?}
     */
    mapToString(mapValue) {
        /** @type {?} */
        let jsonVal = JSON.stringify(Array.from(mapValue.entries())
            .reduce((o, [key, value]) => {
            o[key] = value;
            return o;
        }, {}));
        return jsonVal;
    }
}
DialogueWiseService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DialogueWiseService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DialogueWiseService.ngInjectableDef = defineInjectable({ factory: function DialogueWiseService_Factory() { return new DialogueWiseService(inject(HttpClient)); }, token: DialogueWiseService, providedIn: "root" });
class DialogueWiseRequest {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogueWiseModule {
}
DialogueWiseModule.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule],
                declarations: [],
                exports: [],
                providers: [DatePipe, DialogueWiseService]
            },] }
];

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