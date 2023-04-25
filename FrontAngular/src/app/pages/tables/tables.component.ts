import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/models/contrat";
import { Etudiant } from "src/app/models/etudiant";
import { ContratService } from "src/app/services/contrat.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss"],
})
export class TablesComponent implements OnInit {
  list: Contrat[] = [];
  studentsList: Etudiant[] = [];
  etudiant = <Etudiant>{};
  alert: boolean;
  msg: string;
  idContrat: number;
  date = {
    startDate: "",
    endDate: "",
  };
  sumMontant: number;
  nbContratsValides: number;
  showForm: boolean = true;

  constructor(private cs: ContratService) {}

  getDataFromContratService() {
    this.cs.getContrats().subscribe((res) => {
      this.list = res;
      //console.log(this.list);
    });

    this.cs.getEtudiants().subscribe((res) => {
      this.studentsList = res;
      //console.log(this.studentsList);
    });
  }

  deleteContrat(idContrat: number) {
    this.cs
      .deleteContrat(idContrat)
      .subscribe(() =>
        this.cs.getContrats().subscribe((res) => (this.list = res))
      );
  }

  getIdContrat(idContrat: number) {
    this.idContrat = idContrat;
    console.log(this.idContrat);
  }

  assignEtudiantToContrat(idEtudiant: number) {
    this.cs
      .assignEtudiantToContrat(this.idContrat, idEtudiant)
      .subscribe(() =>
        this.cs.getContrats().subscribe((res) => (this.list = res))
      );
    //console.log(idEtudiant);
  }

  getMontantContratBetweenTwoDates() {
    this.cs
      .getMontantContratBetweenTwoDates(this.date.startDate, this.date.endDate)
      .subscribe((res) => {
        this.sumMontant = res;
        //console.log(this.sumMontant);
      });

    this.cs
      .getnbContratsValides(this.date.startDate, this.date.endDate)
      .subscribe((res) => {
        this.nbContratsValides = res;
        //console.log(this.nbContratsValides);
      });
  }

  clickShowFormButton() {
    this.showForm = false;
  }

  ngOnInit() {
    this.getDataFromContratService();
    this.alert = this.cs.b;
    this.msg = this.cs.text;
  }
}
