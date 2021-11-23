import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) { }



  /*
   * Add service methods here
   */

  //8 es el numero de caracteres de la clave
  //, con el false se le indica al codigo que genere una contrasenia con caracteres alfanumericos
  GenerarClave() {
    let clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }


}
