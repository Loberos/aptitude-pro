import { Component } from '@angular/core';
import {StyleClass} from 'primeng/styleclass';
import {Ripple} from 'primeng/ripple';
import {Avatar} from 'primeng/avatar';
import {InputSwitch} from 'primeng/inputswitch';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {Textarea} from 'primeng/textarea';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [
    StyleClass,
    Ripple,
    Avatar,
    InputSwitch,
    ButtonDirective,
    Textarea,
    InputText,
    Carousel,
    PrimeTemplate,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email: string='@aptitudepro';
  contacto: string='contacto@aptitudepro.com';

  appScreenshots = [
    {
      id: 1,
      image: 'https://i.postimg.cc/qBxxtLCW/Screenshot-20250617-193937.png',
      title: 'Test Vocacional',
      description: 'Realiza tests psicométricos personalizados'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/8c4RqpST/Screenshot-20250617-194004.png',
      title: 'Análisis de Personalidad',
      description: 'Descubre tu perfil de personalidad'
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/qR8XxcDh/Screenshot-20250617-194012.png',
      title: 'Resultados Detallados',
      description: 'Visualiza tus resultados de forma clara'
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/RFrLtpdx/Screenshot-20250617-194048.png',
      title: 'Recomendaciones',
      description: 'Obtén carreras recomendadas para ti'
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/6qtVj7FH/Screenshot-20250617-194215.png',
      title: 'Catálogo de Carreras',
      description: 'Explora diferentes opciones profesionales'
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/KY35Rhn5/Screenshot-20250617-194221.png',
      title: 'Información Detallada',
      description: 'Conoce a fondo cada carrera'
    },
    {
      id: 7,
      image: 'https://i.postimg.cc/SxvrSxzs/Screenshot-20250617-194233.png',
      title: 'Orientación Profesional',
      description: 'Conecta con psicólogos especialistas'
    },
    {
      id: 8,
      image: 'https://i.postimg.cc/vHGXXjsQ/Screenshot-20250617-194239.png',
      title: 'Chat con Especialistas',
      description: 'Comunícate directamente con orientadores'
    },
    {
      id: 9,
      image: 'https://i.postimg.cc/5Npgr348/Screenshot-20250617-194245.png',
      title: 'Perfil Personal',
      description: 'Gestiona tu información y progreso'
    },
    {
      id: 10,
      image: 'https://i.postimg.cc/JznxCk0v/Screenshot-20250617-194250.png',
      title: 'Configuración',
      description: 'Personaliza tu experiencia en la app'
    },
    {
      id: 11,
      image: 'https://i.postimg.cc/QNQ0QDv4/Screenshot-20250617-194259.png',
      title: 'Notificaciones',
      description: 'Mantente al día con recordatorios'
    },
    {
      id: 12,
      image: 'https://i.postimg.cc/d3Y6bNZj/Screenshot-20250617-194305.png',
      title: 'Historial de Tests',
      description: 'Revisa tus evaluaciones anteriores'
    },
    {
      id: 13,
      image: 'https://i.postimg.cc/1XrBs0ph/Screenshot-20250617-194311.png',
      title: 'Estadísticas',
      description: 'Analiza tu progreso y desarrollo'
    },
    {
      id: 14,
      image: 'https://i.postimg.cc/nz7TwfrL/Screenshot-20250617-194324.png',
      title: 'Recursos Educativos',
      description: 'Accede a material de apoyo'
    },
    {
      id: 15,
      image: 'https://i.postimg.cc/JhSPqz1g/Screenshot-20250617-194406.png',
      title: 'Calendario de Sesiones',
      description: 'Programa citas con orientadores'
    },
    {
      id: 16,
      image: 'https://i.postimg.cc/xTPp2QRJ/Screenshot-20250617-194437.png',
      title: 'Evaluación Continua',
      description: 'Seguimiento de tu desarrollo vocacional'
    },
    {
      id: 17,
      image: 'https://i.postimg.cc/DwyjfNjC/Screenshot-20250617-194444.png',
      title: 'Reportes Personalizados',
      description: 'Genera informes de tu perfil vocacional'
    },
    {
      id: 18,
      image: 'https://i.postimg.cc/L8CyJVGm/Screenshot-20250617-201502.png',
      title: 'Dashboard Interactivo',
      description: 'Panel principal con toda tu información'
    },
    {
      id: 19,
      image: 'https://i.postimg.cc/WbVYCzMc/Screenshot-20250617-201518.png',
      title: 'Análisis Comparativo',
      description: 'Compara diferentes opciones de carrera'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
