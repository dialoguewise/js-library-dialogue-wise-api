/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import * as jsSHA from 'jsSHA';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DialogueWiseService {
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
/** @nocollapse */ DialogueWiseService.ngInjectableDef = i0.defineInjectable({ factory: function DialogueWiseService_Factory() { return new DialogueWiseService(i0.inject(i1.HttpClient)); }, token: DialogueWiseService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DialogueWiseService.prototype.httpClient;
    /** @type {?} */
    DialogueWiseService.prototype.apiBaseUrl;
}
export class DialogueWiseRequest {
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ndWUtd2lzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGlhbG9ndWUtd2lzZS8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2d1ZS13aXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7OztBQUsvQixNQUFNOzs7O0lBSUosWUFBWSxVQUFxQjswQkFGZixtQ0FBbUM7UUFHbkQsSUFBSSxDQUFDLFVBQVUsR0FBQyxVQUFVLENBQUM7S0FDNUI7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQTJCOztRQUM1QyxJQUFJLFFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDL0MsSUFBSSxjQUFjLEdBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOztRQUN6RCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLHVCQUF1QixFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUMvRixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQSxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUM5RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLG9DQUFvQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDOztRQUN6RyxJQUFJLE9BQU8sR0FBRyw0QkFBNEIsR0FBRyxVQUFVLENBQUM7O1FBQ3hELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUFDdkQsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztRQUM1QixNQUFNLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7Z0JBQ25DLFdBQVcsRUFBQyxVQUFVO2dCQUN0QixnQkFBZ0IsRUFBRSxjQUFjO2dCQUNoQyw2QkFBNkIsRUFBQyxHQUFHO2dCQUNqQyw4QkFBOEIsRUFBRSxHQUFHO2dCQUNuQyw4QkFBOEIsRUFBRSx5Q0FBeUM7YUFDMUUsQ0FBQztTQUNILENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7OztJQUlsRixPQUFPLENBQUMsTUFBYSxFQUFDLEtBQVk7O1FBRXZDLElBQUksU0FBUyxHQUFDLEVBQUUsQ0FBQzs7UUFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsT0FBTyxTQUFTLENBQUM7Ozs7OztJQUlYLFdBQVcsQ0FBQyxRQUF3Qjs7UUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDMUIsS0FBSyxDQUFDLElBQUksQ0FDUixRQUFRLENBQUMsT0FBTyxFQUFFLENBQ25CO2FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDMUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVmLE9BQU8sQ0FBQyxDQUFDO1NBQ1YsRUFBRSxFQUFFLENBQUMsQ0FDUCxDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUM7Ozs7WUE3RGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7Ozs7Ozs7OztBQXdFbkIsTUFBTTtDQU1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBqc1NIQSBmcm9tICdqc1NIQSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ3VlV2lzZVNlcnZpY2Uge1xuICBodHRwQ2xpZW50OmFueTtcbiAgYXBpQmFzZVVybDpzdHJpbmc9XCJodHRwczovL2FwaS5kaWFsb2d1ZXdpc2UuY29tL2FwaS9cIjtcblxuICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50Okh0dHBDbGllbnQpIHsgXG4gICAgdGhpcy5odHRwQ2xpZW50PWh0dHBDbGllbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGlhbG9ndWUocmVxdWVzdDpEaWFsb2d1ZVdpc2VSZXF1ZXN0KTphbnl7XG4gICAgbGV0IGRhdGVQaXBlOiBEYXRlUGlwZSA9IG5ldyBEYXRlUGlwZSgnZW4tVVMnKTtcbiAgICBsZXQgY3VycmVudFV0Y0RhdGUgPSAgbmV3IERhdGUobmV3IERhdGUoKS50b1VUQ1N0cmluZygpKTtcbiAgICBsZXQgY3VycmVudFV0YyA9IGRhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZShjdXJyZW50VXRjRGF0ZSksICdkZC9NTS95eXl5IGhoOm1tOnNzIGEnLCcrMDAwMCcpO1xuICAgIGxldCBpc1BpbG90RmxhZyA9IHJlcXVlc3QuaXNQaWxvdD9cIiZpc1BpbG90VmVyc2lvbj10cnVlXCIgOiBcIlwiO1xuICAgIGxldCBhcGlVcmwgPSB0aGlzLmFwaUJhc2VVcmwgKyBcImRpYWxvZ3VlL2dldGRpYWxvZ3VlP2RpYWxvZ3VlTmFtZT1cIiArIHJlcXVlc3QuZGlhbG9ndWVOYW1lICsgaXNQaWxvdEZsYWc7XG4gICAgbGV0IG1lc3NhZ2UgPSBcIi9hcGkvZGlhbG9ndWUvZ2V0ZGlhbG9ndWU6XCIgKyBjdXJyZW50VXRjO1xuICAgIGxldCBoYXNoTWVzc2FnZSA9IHRoaXMuZ2V0SGFzaChyZXF1ZXN0LmFwaUtleSxtZXNzYWdlKTtcbiAgICBsZXQgYXV0aGVudGljYXRpb24gPSByZXF1ZXN0LmVtYWlsSGFzaCArIFwiOlwiICsgaGFzaE1lc3NhZ2U7XG4gICAgY29uc29sZS5sb2coY3VycmVudFV0Y0RhdGUpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVdGMpO1xuICAgIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0aW9uKTtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnVGltZXN0YW1wJzpjdXJyZW50VXRjLFxuICAgICAgICAnQXV0aGVudGljYXRpb24nOiBhdXRoZW50aWNhdGlvbixcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6IFwiKlwiLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIFRpbWVzdGFtcCwgQXV0aGVudGljYXRpb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGFwaVVybCx0aGlzLm1hcFRvU3RyaW5nKHJlcXVlc3QudmFyaWFibGVMaXN0KSxodHRwT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICB9XG5cbiAgcHVibGljIGdldEhhc2goYXBpS2V5OnN0cmluZyx2YWx1ZTpzdHJpbmcpOnN0cmluZ1xuICB7XG4gICAgbGV0IGhhc2hWYWx1ZT1cIlwiO1xuICAgIHZhciBzaGFPYmogPSBuZXcganNTSEEoXCJTSEEtMjU2XCIsIFwiVEVYVFwiKTtcbiAgICBzaGFPYmouc2V0SE1BQ0tleShhcGlLZXksIFwiVEVYVFwiKTtcbiAgICBzaGFPYmoudXBkYXRlKHZhbHVlKTtcbiAgICBoYXNoVmFsdWUgPSBzaGFPYmouZ2V0SE1BQyhcIkI2NFwiKTtcbiAgICByZXR1cm4gaGFzaFZhbHVlO1xuXG4gIH1cblxuICBwcml2YXRlIG1hcFRvU3RyaW5nKG1hcFZhbHVlOk1hcDxzdHJpbmcsYW55Pik6c3RyaW5ne1xuICAgIGxldCBqc29uVmFsID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICBBcnJheS5mcm9tKFxuICAgICAgICBtYXBWYWx1ZS5lbnRyaWVzKClcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKG8sIFtrZXksIHZhbHVlXSkgPT4geyBcbiAgICAgICAgb1trZXldID0gdmFsdWU7IFxuICAgIFxuICAgICAgICByZXR1cm4gbzsgXG4gICAgICB9LCB7fSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGpzb25WYWw7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2d1ZVdpc2VSZXF1ZXN0e1xuICBwdWJsaWMgZGlhbG9ndWVOYW1lOnN0cmluZztcbiAgcHVibGljIGlzUGlsb3Q6Ym9vbGVhbjtcbiAgcHVibGljIGFwaUtleTpzdHJpbmc7XG4gIHB1YmxpYyBlbWFpbEhhc2g6c3RyaW5nO1xuICBwdWJsaWMgdmFyaWFibGVMaXN0Ok1hcDxzdHJpbmcsYW55PjtcbiAgfSJdfQ==