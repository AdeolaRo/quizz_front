import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-party',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent {

  constructor(private http: HttpClient) {
  }

  user_form = new FormGroup({
    name: new FormControl(''),
  });


  onSubmit() {
    console.log('salut')
    console.log(this.user_form.value.name);


    this.http.get('http://localhost:8080/api/user/1').subscribe({
      next: res => console.log(res),
      error: (err) => console.error('Erreur ! ', err?.message),
      complete: () => console.log('Données récupérées')
    })
  }
}
