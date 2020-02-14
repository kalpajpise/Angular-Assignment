import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { CategoriesComponent } from "./categories/categories.component";
import { EmployeeComponent } from "./employee/employee.component";

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    CategoriesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    RouterModule.forRoot([
      {
        path: "categories",
        component: CategoriesComponent
      },
      {
        path: "employee",
        component: EmployeeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
