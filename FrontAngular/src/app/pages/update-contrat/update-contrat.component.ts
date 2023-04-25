import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";

@Component({
  selector: "app-update-contrat",
  templateUrl: "./update-contrat.component.html",
  styleUrls: ["./update-contrat.component.css"],
})
export class UpdateContratComponent implements OnInit {
  contrat = <Contrat>{};
  id: number;

  constructor(
    private cs: ContratService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}
  getContratById() {
    this.cs.getContratById(this.id).subscribe((res) => {
      this.contrat = res;
      //console.log(this.contrat);
    });
  }
  updateContrat() {
    this.cs.updateContrat(this.contrat, this.id).subscribe(() => {
      this.cs.b = true;
      this.cs.text = "Contrat mis à jour avec succès.";
      this.router.navigate(["contrats"]);
    });
  }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params["idContrat"];
    this.getContratById();
    //console.log(this.id);
  }
}
