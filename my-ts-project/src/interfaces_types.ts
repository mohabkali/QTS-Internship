type id =number;
type name = string;
type price = number;
type description = string;

type ProductType={
    ProductID:id;
    ProductName: name;
    ProductPrice: price;
    Description?: description;
}
const productid:id =1;
const productName:name= "iPhone 16";
const productPrice: price= 2850;
const productDescription: description = " Device with camera full of applications"

const productype:ProductType={
    ProductID:productid,
    ProductName:productName,
    ProductPrice:productPrice,
    Description:productDescription
};
console.log(productype);

interface IProduct{
    PID: number,
    PName: string,
    PPrice: number,
    PDescription: string
}

const iproduct:IProduct={
    PID: 2,
    PName: "Laptop",
    PPrice: 8000,
    PDescription: "Windows Laptop used for programming"
};

console.log(iproduct)
