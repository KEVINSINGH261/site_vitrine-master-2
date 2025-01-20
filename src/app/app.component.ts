import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [AccueilComponent, NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
