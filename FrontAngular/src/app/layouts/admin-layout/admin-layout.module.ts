import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddContratComponent } from "src/app/pages/add-contrat/add-contrat.component";
import { UpdateContratComponent } from "src/app/pages/update-contrat/update-contrat.component";
import { AddStudentComponent } from "src/app/pages/add-student/add-student.component";
import { RechercheComponent } from "src/app/pages/recherche/recherche.component";
import { OptionStatsComponent } from "src/app/pages/option-stats/option-stats.component";
import { NgxPaginationModule } from "ngx-pagination";
import { TableEtudiantComponent } from "src/app/pages/table-etudiant/table-etudiant.component";
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,  
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AddContratComponent,
    UpdateContratComponent,
    AddStudentComponent,
    RechercheComponent,
    OptionStatsComponent,
    TableEtudiantComponent,
  ],
})
export class AdminLayoutModule {}
