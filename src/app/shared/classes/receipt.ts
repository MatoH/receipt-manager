export class Receipt {

  // The TypeScript compiler generates a public field for each public constructor
  // parameter and automatically assigns the parameter’s value to that field.
  constructor(
    public key: string,
    public name: string,
    public description: string,
    public purchaseDate: Date,
    public expireDate: Date,
    public files: Array<any>
  ) { }
}
