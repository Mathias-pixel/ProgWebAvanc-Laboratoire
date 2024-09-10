import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngReactiveForms';

  form:FormGroup<any>;

formData?: Data;
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
     questionA: ['', [Validators.required]],
      questionB: ['',[Validators.required]],
    }, { validators: this.myCustomValidator });

    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
  }

  
  myCustomValidator(form: AbstractControl): ValidationErrors | null {
    // On récupère les valeurs de nos champs textes
    const questionA = form.get('email')?.value;
    const questionB = form.get('name')?.value;
    // On regarde si les champs sont remplis avant de faire la validation
let OneMistake:boolean = false; 

    if(questionA !="")
    {
      if(questionA !="chien")
      {
      form.get('questionA')?.setErrors({doestLoveDogs:true})
        OneMistake = true
      }
      else {
        form.get('questionA')?.setErrors(null);
      }
    }
  
    return OneMistake?{OneMistake:true}:null; 
  }
}
// interface qui décris le type du formulaire
interface Data { 
  email?: string | null ; 
  name?: string | null ; 
}
  

