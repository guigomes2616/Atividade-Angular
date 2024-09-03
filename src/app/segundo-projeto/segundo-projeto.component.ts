import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-projeto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './segundo-projeto.component.html',
  styleUrl: './segundo-projeto.component.css'
})
export class SegundoProjetoComponent {
  nomes:string='';
  sobrenome:string='';

}
