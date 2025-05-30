function processInput(input:string | number | boolean){
    if(typeof input ==="string"){
        console.log(input.length)
        }
    if(typeof input === "boolean"){
        console.log("Input is ${input}")
    }
}

type SuccessResponse = { success: true; data: unknown; };
type ErrorResponse = { success: false; error: { code: number; message: string; }; };

type handleApiResponse= {success:true; data: unknown; }| { success:false ;error:{ code:number; message:string};};