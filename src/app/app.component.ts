import { Iproduct } from './Models/iproduct';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { ProductsComponent } from './Component/products/products.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { PageComponent } from './page/page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,ProductsComponent,FooterComponent,SideMenuComponent,PageComponent]
})
export class AppComponent {
  title = 'AngularLab';
}
