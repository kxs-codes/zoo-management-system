import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskBar } from "./components/task-bar/task-bar";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}


