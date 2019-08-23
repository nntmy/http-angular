import { Component, OnInit, OnDestroy } from "@angular/core";
import { TaskService } from "./../../services/task.service";
import { Subscription } from "rxjs";
import { Task } from "src/app/models/task";
Subscription;
TaskService;
@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit, OnDestroy {
  //tao mang task list co kieu task
  public taskList: Task[] = [];

  public taskEdit: Task = null;
  //tao bien data co kieu subscription
  public data: Subscription;

  public id: number;
  public title: string;
  public date: Date;
  public status: boolean;
  public block: string;

  constructor(
    //nhung service
    public taskService: TaskService
  ) {}

  //khoi tao gia tri
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    //bien data chua du lieu tra ve cua ham getalltask
    //subscribe lang nghe  server
    this.data = this.taskService.getAllTask().subscribe(
      data => {
        this.taskList = data;
      },
      error => {
        this.taskService.handleError(error);
      }
    );
  }

  /*getId(){
    return this.id = this.taskList.length+1;
  }*/

  addTask() {
    //kiem tra xem addTask da nhan data chua
    //console.log(`${this.title} - ${this.date} - ${this.status} - ${this.block}`);

    //doi tuong taskL nhan gia tri tu input
    let taskL = new Task(this.title, this.date, this.status, this.block);

    //task service goi ham addNewtask , truyen taskl vao
    //subscribe lang nghe su thay doi cua server
    this.data = this.taskService.addNewtask(taskL).subscribe(
      data => {
        //console.log(data);
        //them data vao taskList va hien thi len html
        this.taskList.push(data);

        //
      },
      error => {
        this.taskService.handleError(error);
      }
    );
  }
  //truyen data vao form edit
  upDate(task: Task) {
    this.taskEdit = task;
  }
  saveTask() {
    //console.log(this.task);
    this.data = this.taskService.saveData(this.taskEdit).subscribe(
      data => {
        console.log(data);
        //them data vao taskList va hien thi len html
        //this.taskList.push(data);
        //let index = this.getIndex(data.id);
        //this.taskList[index]=data;
      },
      error => {
        this.taskService.handleError(error);
      }
    );
  }

  getIndex(id: number): number {
    let result = 0;
    this.taskList.forEach((task,index) => {
      if ((task.id == id)) {
        return result = index
      }
    });
    return result;
  }
  delete(id: number){
    this.data = this.taskService.deleteData(id).subscribe(
      data => {
        console.log(data);
        //them data vao taskList va hien thi len html
        //this.taskList.push(data);
        let index = this.getIndex(data.id);
        this.taskList.splice(index,1);
      },
      error => {
        this.taskService.handleError(error);
      }
    );
  }

  //phai huy bien data co kieu subscription neu khong se lam ct bi cham do subscription luon lang nghe tu server
  ngOnDestroy() {
    if (this.data) {
      this.data.unsubscribe();
    }
  }
}
