import { HttpClient } from "@angular/common/http";
export declare class DialogueWiseService {
    httpClient: any;
    apiBaseUrl: string;
    constructor(httpClient: HttpClient);
    getDialogue(request: DialogueWiseRequest): any;
    getHash(apiKey: string, value: string): string;
    private mapToString;
}
export declare class DialogueWiseRequest {
    dialogueName: string;
    isPilot: boolean;
    apiKey: string;
    emailHash: string;
    variableList: Map<string, any>;
}
