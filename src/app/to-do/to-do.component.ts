import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do', //ci dice come chiamarlo nel HTML
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todoArray = [];
  title = 'Esempio Lista';

  constructor() { }

  ngOnInit() {
  }


  addTodo(elemento) {
    this.todoArray.push(elemento);
    console.log(this.todoArray);
  }

  todoSubmit(valore: any) {
     if(valore.todo != '' && valore.todo !== null) {
       this.todoArray.push(valore.todo);
     } else {
       alert('inserisci almeno qualcosa !');
     }
  }

  removeItem(item) {

    //  this.todoArray.splice(this.todoArray.indexOf(item),1);

      for(let i = 0; i <= this.todoArray.length; i++) {
        if(item == this.todoArray[i]) {
          this.todoArray.splice(i,1);
        }
      }
  }


}
