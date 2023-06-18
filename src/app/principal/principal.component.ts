import { Component } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  persona: any;

  constructor(private datosPersona:PersonaService) {}

ngOnInit() {
  this.datosPersona.obtenerDatos().subscribe(data => {
    console.log(data);
    this.persona=data;
    
  });
};

}
