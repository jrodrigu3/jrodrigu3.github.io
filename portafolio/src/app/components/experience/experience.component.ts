import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Experience } from '../../interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'KASHIO',
      logo: 'assets/icons/kashio-icon.svg',
      position: 'Arquitecto Frontend',
      duration: 'Jun 2023 – Actual',
      location: 'Remoto',
      description: 'Diseñé e implementé una arquitectura de microfrontend en Angular 18, mejorando la eficiencia del equipo en un 40%.'
    },
    {
      company: 'EMISSARY',
      logo: 'assets/icons/emissaryLogo.svg',
      position: 'Líder Frontend',
      duration: 'Nov 2022 – Ene 2024',
      location: 'Remoto',
      description: 'Lideré un equipo para migrar un sitio web de Angular 8 a 15, creando una arquitectura escalable desde cero.'
    },
    {
      company: 'CONSWARE',
      logo: 'assets/icons/Consware.svg',
      position: 'Desarrollador FullStack',
      duration: 'Oct 2021 – Nov 2022',
      location: 'Barranquilla, Atlántico',
      description: 'Lideré un equipo en el diseño de un programa de políticas de vehículos, mejorando la experiencia del usuario en un 25%.'
    },
    {
      company: 'DIGITALWARE',
      logo: 'assets/icons/DW-Color.png',
      position: 'Desarrollador FullStack',
      duration: 'Abr 2021 – Oct 2021',
      location: 'Barranquilla, Atlántico',
      description: 'Desarrollé e implementé un chatbot que redujo los costos del servicio de Azure en un 100%.'
    },
    {
      company: 'SEAQ',
      logo: 'assets/icons/logo-menu-gris.png',
      position: 'Desarrollador Web',
      duration: 'Oct 2020 – Abr 2021',
      location: 'Remoto',
      description: 'Mejoré el acceso al sitio web en un 25% y reduje los errores reportados por los clientes en un 50%.'
    }
  ];
}
