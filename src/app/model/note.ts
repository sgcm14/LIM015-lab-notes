export class Note {
    idNote: string;
    contentNote:string;
    date:string;
    idUser:string;
    status:string;
    titleNote:string;
    order:number;

    constructor() {
        this.idNote = '';
        this.contentNote= '';
        this.date= new Date().toLocaleDateString();
        this.idUser= '';
        this.status= '1';
        this.titleNote= '';
        this.order=1;
    }


}