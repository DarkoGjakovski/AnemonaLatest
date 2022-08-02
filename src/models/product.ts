export class Product{
    constructor(
        public id?:number,
        public image?:string,
        public title?:string,
        public description?:string,
        public available?: boolean,
        public price?:number){
    }
}