export class ClientModel {
    constructor(id: string, firstName:string, lastName:string, email:string, phoneNumber:string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
}