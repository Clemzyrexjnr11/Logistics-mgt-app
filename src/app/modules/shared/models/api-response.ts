export class ApiResponse{
    public message:string;
    public data:any;
    public success: boolean;
    public error:any;

    constructor(obj:any){
        this.message = (obj && obj.message) || null;
        this.data = (obj && obj.data) || null;
        this.success = (obj && obj.success) || null;
        this.error = (obj && obj.error) || null;
    }

}