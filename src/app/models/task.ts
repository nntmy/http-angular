export class Task {
  public id: number;
  public title: string;
  public date: Date;
  public status: boolean;
  public block: string;

  constructor( title: string, date: Date, status: boolean, block: string) {
    
    this.title = title;
    this.date = date;
    this.status = status;
    this.block = block;
  }
}
