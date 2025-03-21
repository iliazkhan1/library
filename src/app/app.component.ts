import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewlibrarycomponentComponent } from './newlibrarycomponent/newlibrarycomponent.component';
import { MyComponentComponent } from '../../projects/iliaz/src/lib/components/my-component/my-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewlibrarycomponentComponent,MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library';
}
