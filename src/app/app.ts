import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from "./Features/Navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbDropdownModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjectEventAssosFront');
}
