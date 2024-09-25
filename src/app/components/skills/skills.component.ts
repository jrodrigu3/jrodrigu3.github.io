import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      name: 'JavaScript',
      icon: 'assets/icons/javascript_icon.svg',
    },
    {
      name: 'TypeScript',
      icon: 'assets/icons/typescript.svg',
    },
    {
      name: 'Angular',
      icon: 'assets/icons/angular-icon.svg',
    },
    {
      name: 'C#',
      icon: 'assets/icons/c-sharp.svg',
    },
    {
      name: 'Node.js',
      icon: 'assets/icons/node.svg',
    },
    {
      name: 'HTML5',
      icon: 'assets/icons/html-5.svg',
    },
    {
      name: 'CSS3',
      icon: 'assets/icons/css3.svg',
    },
    {
      name: 'SQL',
      icon: 'assets/icons/sql.png',
    },
    {
      name: 'Git',
      icon: 'assets/icons/git.svg',
    },
  ];
}  
