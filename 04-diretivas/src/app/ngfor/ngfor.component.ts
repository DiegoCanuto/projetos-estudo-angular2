import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "PrimaoDev"];

  constructor() { }

  ngOnInit(): void {
  }

}
