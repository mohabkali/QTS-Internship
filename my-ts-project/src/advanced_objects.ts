interface AppConfig{
    readonly apiKey: string,
    appName: string,
    version?:string
}

const appconfig1:AppConfig={
    apiKey: "hello request",
    appName:"myApp",
    version: "1.0"
};

interface Vehicle{
    brand:string,
    startEngine():void
};

interface Car extends Vehicle{
numberofDoors:number
};

interface Motor extends Vehicle{
    hasSideCar:number
}

const tesla:Car={
    brand:"Tesla",
    startEngine(){},
    numberofDoors: 5
};