import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AddContratComponent } from "src/app/pages/add-contrat/add-contrat.component";
import { UpdateContratComponent } from "src/app/pages/update-contrat/update-contrat.component";
import { EquipesComponent } from "src/app/pages/ModEquipe/equipes/equipes.component";
import { AddEquipeComponent } from "src/app/pages/add-equipe/add-equipe.component";
import { UpdateEquipeComponent } from "src/app/pages/update-equipe/update-equipe.component";

import { ListEquipeComponent } from "src/app/pages/list-equipe/list-equipe.component";
import { UpdateDetailEquipeComponent } from "src/app/pages/update-detail-equipe/update-detail-equipe.component";
import { AddStudentComponent } from "src/app/pages/add-student/add-student.component";
import { TableEtudiantComponent } from "src/app/pages/table-etudiant/table-etudiant.component";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },

  { path: "contrats", component: TablesComponent },
  { path: "addContrat", component: AddContratComponent },
  { path: "updateContrat/:idContrat", component: UpdateContratComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "equipes", component: EquipesComponent },
  { path: "add-equipe", component: AddEquipeComponent },
  { path: "updateEquipe/:idEquipe", component: UpdateEquipeComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "ListEquipe", component: ListEquipeComponent },
  {
    path: "updateDetailE/:idDetailEquipe",
    component: UpdateDetailEquipeComponent,
  },
  { path: "addStudent", component: AddStudentComponent },
  { path: "tableEtudiant", component: TableEtudiantComponent,
  children:[
    { path: 'user-profile/:id', component: UserProfileComponent },
  ]
},
];
