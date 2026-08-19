export class StringHelper{
    constructor(){

    }

    public static decodeToken(token:string){
        let base64 = token.split('.')[1];
        if(!base64){
            return undefined;
        }
        let decodedToken = JSON.parse(window.atob(base64));
        return decodedToken;
    };

  public static toUrlString(obj: any): string {
    let urlString = '';
    let prop: keyof any;
    for (prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        if (obj[prop] != null && obj[prop].constructor === Array) {
          const keys = Object.values(prop);
          keys.forEach((i: any) => {
            urlString += `${String(prop)}=${i}&`;
          });
        } else {
          if (obj[prop] != null) {
            urlString += prop + '=' + obj[prop] + '&';
          }
        }
      }
    }
    return urlString.substr(0, urlString.length - 1);
  }
}