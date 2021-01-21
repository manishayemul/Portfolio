import service from './Service.js';

export class FileService {
    getFileFromServer(fileName){
        //returns Promise object
        return service.getRestClient().get('/src/img/'+fileName,{ responseType:"blob" });
    }
}