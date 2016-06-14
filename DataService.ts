export interface IDataService {
     msg: string;
     getMessage(): string;
    };

export class DataService implements IDataService {
     msg = 'Data from API Call';
     getMessage() { return this.msg; }
}
