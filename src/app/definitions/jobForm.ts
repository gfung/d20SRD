export class JobForm {

  constructor(
    // public id: number,
    public name: string,
    public description: string,
    public recur: boolean,

    public month: number,
    public day: number,
    public date: number,
    public year: number,

    public hour: number,
    public minute: number,
    public seconds: number,

    public tool: string
  ) { }

}
