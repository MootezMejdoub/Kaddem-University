import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contrat",
  templateUrl: "./add-contrat.component.html",
  styleUrls: ["./add-contrat.component.css"],
})
export class AddContratComponent implements OnInit {
  contrat = <Contrat>{};

  constructor(private cs: ContratService, private router: Router) {}

  addContrat() {
    //console.log(new_contrat);
    this.cs.addContrat(this.contrat).subscribe(() => {
      this.cs.b = true;
      this.cs.text = "Contrat ajouté avec succès.";
      //console.log(this.cs.b);
      this.router.navigate(["contrats"]);
    });
  }

  ngOnInit(): void {}
}
