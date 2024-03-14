import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  ngOnInit(): void {
    this.example();
  }

  example() {


    // let 
    console.log('-----------let section-----------');
    let x = 10;
    if (true) {
      let x = 20;
      console.log('1', x);
    }
    console.log('2', x);
    let marks = [];
    marks = [48, 49, 42, 50]
    console.log('marks declared using let:', marks);
    

    // var 
    console.log('-----------var section-----------');
    var y = 5;
    if (true) {
      y = 25;
    }
    console.log('y:', y);
    console.log('Students', students);
    var students = [];
    students = ['Anu', 'Manu', 'Sanu'];
    console.log('Students declared using var', students);
    

    // Const 
    console.log('-----------const section-----------');
    const person = {name: 'Anandakrishnan', age: 24}
    console.log('The name is:', person.name, 'and age is:', person.age);
    person.name = 'Rahul';
    console.log('Changed name is:', person.name);
    console.log(person);
    
  
  }
}
