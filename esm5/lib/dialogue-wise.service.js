/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import * as jsSHA from 'jsSHA';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
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
    /** @nocollapse */ DialogueWiseService.ngInjectableDef = i0.defineInjectable({ factory: function DialogueWiseService_Factory() { return new DialogueWiseService(i0.inject(i1.HttpClient)); }, token: DialogueWiseService, providedIn: "root" });
    return DialogueWiseService;
}());
export { DialogueWiseService };
if (false) {
    /** @type {?} */
    DialogueWiseService.prototype.httpClient;
    /** @type {?} */
    DialogueWiseService.prototype.apiBaseUrl;
}
var DialogueWiseRequest = /** @class */ (function () {
    function DialogueWiseRequest() {
    }
    return DialogueWiseRequest;
}());
export { DialogueWiseRequest };
if (false) {
    /** @type {?} */
    DialogueWiseRequest.prototype.dialogueName;
    /** @type {?} */
    DialogueWiseRequest.prototype.isPilot;
    /** @type {?} */
    DialogueWiseRequest.prototype.apiKey;
    /** @type {?} */
    DialogueWiseRequest.prototype.emailHash;
    /** @type {?} */
    DialogueWiseRequest.prototype.variableList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ndWUtd2lzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGlhbG9ndWUtd2lzZS8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2d1ZS13aXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDOzs7O0lBUzdCLDZCQUFZLFVBQXFCOzBCQUZmLG1DQUFtQztRQUduRCxJQUFJLENBQUMsVUFBVSxHQUFDLFVBQVUsQ0FBQztLQUM1Qjs7Ozs7SUFFTSx5Q0FBVzs7OztjQUFDLE9BQTJCOztRQUM1QyxJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDL0MsSUFBSSxjQUFjLEdBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOztRQUN6RCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLHVCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUMvRixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQSxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUM5RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLG9DQUFvQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDOztRQUN6RyxJQUFJLE9BQU8sR0FBRyw0QkFBNEIsR0FBRyxVQUFVLENBQUM7O1FBQ3hELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUFDdkQsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztRQUM1QixJQUFNLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7Z0JBQ25DLFdBQVcsRUFBQyxVQUFVO2dCQUN0QixnQkFBZ0IsRUFBRSxjQUFjO2dCQUNoQyw2QkFBNkIsRUFBQyxHQUFHO2dCQUNqQyw4QkFBOEIsRUFBRSxHQUFHO2dCQUNuQyw4QkFBOEIsRUFBRSx5Q0FBeUM7YUFDMUUsQ0FBQztTQUNILENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7OztJQUlsRixxQ0FBTzs7Ozs7Y0FBQyxNQUFhLEVBQUMsS0FBWTs7UUFFdkMsSUFBSSxTQUFTLEdBQUMsRUFBRSxDQUFDOztRQUNqQixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxPQUFPLFNBQVMsQ0FBQzs7Ozs7O0lBSVgseUNBQVc7Ozs7Y0FBQyxRQUF3Qjs7UUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDMUIsS0FBSyxDQUFDLElBQUksQ0FDUixRQUFRLENBQUMsT0FBTyxFQUFFLENBQ25CO2FBQ0EsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUNyQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBRWYsT0FBTyxDQUFDLENBQUM7U0FDVixFQUFFLEVBQUUsQ0FBQyxDQUNQLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQzs7O2dCQTdEbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxVQUFVOzs7OEJBRG5COztTQVNhLG1CQUFtQjs7Ozs7OztBQWdFaEMsSUFBQTs7OzhCQXpFQTtJQStFRyxDQUFBO0FBTkgsK0JBTUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIGpzU0hBIGZyb20gJ2pzU0hBJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9ndWVXaXNlU2VydmljZSB7XG4gIGh0dHBDbGllbnQ6YW55O1xuICBhcGlCYXNlVXJsOnN0cmluZz1cImh0dHBzOi8vYXBpLmRpYWxvZ3Vld2lzZS5jb20vYXBpL1wiO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6SHR0cENsaWVudCkgeyBcbiAgICB0aGlzLmh0dHBDbGllbnQ9aHR0cENsaWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXREaWFsb2d1ZShyZXF1ZXN0OkRpYWxvZ3VlV2lzZVJlcXVlc3QpOmFueXtcbiAgICBsZXQgZGF0ZVBpcGU6IERhdGVQaXBlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpO1xuICAgIGxldCBjdXJyZW50VXRjRGF0ZSA9ICBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkpO1xuICAgIGxldCBjdXJyZW50VXRjID0gZGF0ZVBpcGUudHJhbnNmb3JtKG5ldyBEYXRlKGN1cnJlbnRVdGNEYXRlKSwgJ2RkL01NL3l5eXkgaGg6bW06c3MgYScsJyswMDAwJyk7XG4gICAgbGV0IGlzUGlsb3RGbGFnID0gcmVxdWVzdC5pc1BpbG90P1wiJmlzUGlsb3RWZXJzaW9uPXRydWVcIiA6IFwiXCI7XG4gICAgbGV0IGFwaVVybCA9IHRoaXMuYXBpQmFzZVVybCArIFwiZGlhbG9ndWUvZ2V0ZGlhbG9ndWU/ZGlhbG9ndWVOYW1lPVwiICsgcmVxdWVzdC5kaWFsb2d1ZU5hbWUgKyBpc1BpbG90RmxhZztcbiAgICBsZXQgbWVzc2FnZSA9IFwiL2FwaS9kaWFsb2d1ZS9nZXRkaWFsb2d1ZTpcIiArIGN1cnJlbnRVdGM7XG4gICAgbGV0IGhhc2hNZXNzYWdlID0gdGhpcy5nZXRIYXNoKHJlcXVlc3QuYXBpS2V5LG1lc3NhZ2UpO1xuICAgIGxldCBhdXRoZW50aWNhdGlvbiA9IHJlcXVlc3QuZW1haWxIYXNoICsgXCI6XCIgKyBoYXNoTWVzc2FnZTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXRjRGF0ZSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFV0Yyk7XG4gICAgY29uc29sZS5sb2coYXV0aGVudGljYXRpb24pO1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdUaW1lc3RhbXAnOmN1cnJlbnRVdGMsXG4gICAgICAgICdBdXRoZW50aWNhdGlvbic6IGF1dGhlbnRpY2F0aW9uLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogXCIqXCIsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZSwgVGltZXN0YW1wLCBBdXRoZW50aWNhdGlvbidcbiAgICAgIH0pXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYXBpVXJsLHRoaXMubWFwVG9TdHJpbmcocmVxdWVzdC52YXJpYWJsZUxpc3QpLGh0dHBPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuICBwdWJsaWMgZ2V0SGFzaChhcGlLZXk6c3RyaW5nLHZhbHVlOnN0cmluZyk6c3RyaW5nXG4gIHtcbiAgICBsZXQgaGFzaFZhbHVlPVwiXCI7XG4gICAgdmFyIHNoYU9iaiA9IG5ldyBqc1NIQShcIlNIQS0yNTZcIiwgXCJURVhUXCIpO1xuICAgIHNoYU9iai5zZXRITUFDS2V5KGFwaUtleSwgXCJURVhUXCIpO1xuICAgIHNoYU9iai51cGRhdGUodmFsdWUpO1xuICAgIGhhc2hWYWx1ZSA9IHNoYU9iai5nZXRITUFDKFwiQjY0XCIpO1xuICAgIHJldHVybiBoYXNoVmFsdWU7XG5cbiAgfVxuXG4gIHByaXZhdGUgbWFwVG9TdHJpbmcobWFwVmFsdWU6TWFwPHN0cmluZyxhbnk+KTpzdHJpbmd7XG4gICAgbGV0IGpzb25WYWwgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIEFycmF5LmZyb20oXG4gICAgICAgIG1hcFZhbHVlLmVudHJpZXMoKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgobywgW2tleSwgdmFsdWVdKSA9PiB7IFxuICAgICAgICBvW2tleV0gPSB2YWx1ZTsgXG4gICAgXG4gICAgICAgIHJldHVybiBvOyBcbiAgICAgIH0sIHt9KVxuICAgICk7XG5cbiAgICByZXR1cm4ganNvblZhbDtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZ3VlV2lzZVJlcXVlc3R7XG4gIHB1YmxpYyBkaWFsb2d1ZU5hbWU6c3RyaW5nO1xuICBwdWJsaWMgaXNQaWxvdDpib29sZWFuO1xuICBwdWJsaWMgYXBpS2V5OnN0cmluZztcbiAgcHVibGljIGVtYWlsSGFzaDpzdHJpbmc7XG4gIHB1YmxpYyB2YXJpYWJsZUxpc3Q6TWFwPHN0cmluZyxhbnk+O1xuICB9Il19