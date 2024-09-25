import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  title = '🚀 Desarrollador Web 🚀';
  description = `Soy Jose David Rodriguez, tengo más de 5 años de experiencia como desarrollador web. Me impulsa la innovación, poder enseñar mis conocimientos, aprender cosas nuevas y asumir nuevos desafíos.`;
  profileImage = 'assets/img/profilePhoto.png';
}
