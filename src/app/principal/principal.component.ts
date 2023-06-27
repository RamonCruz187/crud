import { Component } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
import { FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  persona: any;
  formAgregar= this.fbE.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    dni: ['', [Validators.required]],
   
  });

  constructor(private datosPersona:PersonaService, private fbE: FormBuilder , private fbL: FormBuilder) {}

ngOnInit() {
  this.datosPersona.obtenerDatos().subscribe(data => {
    console.log(data);
    
    this.persona=data;
    
  });
};

agregar() {
  this.datosPersona.nuevaPersona('https://prueba.portfoliorcruz.com/nueva/persona/', {

    
    "nombre": this.formAgregar.value.nombre,
    "apellido": this.formAgregar.value.apellido,
    "dni": this.formAgregar.value.dni,

  })
    .subscribe(respuesta => {

      console.log("Persona agregada!");
    });
  alert("Persona agregada!");
  window.location.reload();
}

borrarPersona(id: any) {
  this.datosPersona.borrarPersona('https://prueba.portfoliorcruz.com/borrar/persona/'+id+ '/', {})
    .subscribe(respuesta => {
      console.log("Persona borrada!")
    });
    alert("Persona borrada!");
  window.location.reload();
}

}
