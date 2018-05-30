import { Timestamp } from "@firebase/firestore-types";

export class Blog
{
    public key: string;

    public name: string;
    public author: string;
    public date: Date = new Date();
    public state = 'normal';

    constructor(snapshot)
    {
        this.key = snapshot.key;
        var data = snapshot.payload.val();

        //epic epic epic!
        for(var key in data){
            this[key] = data[key];
        }
    }   

    public bling(){
        alert('Hello bling');
    }
}