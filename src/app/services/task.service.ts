import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

HttpClient
HttpErrorResponse
Observable

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //khai bao api
  public API : string = 'http://localhost:3000/tasks';

  constructor(
    public http : HttpClient
    ) {   }

    //get lay du lieu , getAll lay toan bo du lieu
    //getAllTask tra ve kieu du lieu Observable
    //Observable tra ve mang task
    getAllTask(): Observable<Task[]>{

      return this.http.get<Task[]>(this.API);
    }

    //phuong thuc post gui data len service ,sau khi add data lap tuc tra data
    addNewtask(taskList:Task):Observable<Task[]>{
      return this.http.post<Task[]>(this.API,taskList);
    }


    //luu thay doi data 
    saveData(task:Task):Observable<Task[]>{
      return this.http.put<Task[]>(`${this.API}/${task.id}`,task);
    }

    //xoa data
    deleteData(id:number):Observable<Task[]>{
      return this.http.delete<Task[]>(`${this.API}/${id}`);
    }
    //xu ly bat loi 
    handleError(err){
      //kiem tra err thuoc kieu du lieu error
      if(err.error instanceof Error){
        console.log(`client error : ${err.error.message}`);
      }
      else
      {
        console.log(`server error : ${err.status}`);
      }
    }
}
