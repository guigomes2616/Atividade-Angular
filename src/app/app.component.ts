import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegundoProjetoComponent } from "./segundo-projeto/segundo-projeto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SegundoProjetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundo-projeto';
}
