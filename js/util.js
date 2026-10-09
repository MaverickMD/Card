class Util{
    static generatePrivateId(){
        return crypto.randomUUID();
    }
    static generatePublicId(){
       return Math.floor((Math.random()*10000000).toPrecision(7))
    }
}

export class Employee{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
        this.role = "role";
        this.id = {
            private: Util.generatePrivateId(),
            public:  Util.generatePublicId()
    }
}
}
