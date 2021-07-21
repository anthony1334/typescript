class Sejour{
    constructor(
        private _nom: string,
        private _prix: number
    ){
        

    }
    get nom(): string{
        return this._nom;
    }

    get prix(): number{
        return this._prix;
    } 
}