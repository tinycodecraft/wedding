
export as namespace pageSp;

export interface ResponseAuth {
    state?: {

        user?: string,
        session?:string,
        sessionToken?: string
        
    };
    statusText: string;
}