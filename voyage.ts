class Sejour {
    constructor(
        private _nom: string,
        private _prix: number
    ) {


    }
    get nom(): string {
        return this._nom;
    }

    get prix(): number {
        return this._prix;
    }
}

class SejourService {
    constructor(
        private _sejours: Sejour[]
    ) {


    }
  rechercheDeSejour(nom: string): Sejour{
      for(let sejour of this._sejours){
          if(nom === sejour.nom){
              return sejour;
          }
      }
      throw new Error("ce voyage n'existe pas");
  }

 findByName(nom: string): Sejour | undefined {
     return this._sejours.find((sejour: Sejour)=> sejour.nom === nom)
 }

}

const sejourService = new SejourService([
    new Sejour("Paris",100),
    new Sejour("Tunis",200),
    new Sejour("Dax",50)

]);

try{
    
   const sejour = sejourService.rechercheDeSejour("Paris");
   console.log(sejour.nom + sejour.prix);
   
}
catch(error: any){
console.log(error);

}


