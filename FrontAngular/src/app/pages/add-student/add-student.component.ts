import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/Model/Contrat";
import { Etudiants } from "src/app/Model/Etudiants";
import { ContratService } from "../table-etudiant/contrat.service";

import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Notyf } from 'notyf';

import { Equipe } from "src/app/Model/Equipe";
import { EtudiantsService } from "../table-etudiant/etudiants.service";
import { EquipeService } from "../table-etudiant/equipe.service";
@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  list: Etudiants[] = [];
  user: Etudiants = new Etudiants();
  listCont: Contrat[];
  listEqui: Equipe[];
  equipe: Equipe = new Equipe();
  contrat: Contrat = new Contrat();
  notyf = new Notyf();


  constructor(
    private etudiantService: EtudiantsService,
    private contService: ContratService,
    private equipeService: EquipeService,private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCont();
    this.getEqui();
  }

  addStd(f) {
    /*
     this.list.push(this.user);
     console.log(this.list);
     this.user=new User();*/
    this.etudiantService.addAndAsignEtudiantToEquipeAndContract(
        this.user,
        this.contrat.idContrat,
        this.equipe.idEquipe
      )
      .subscribe();

    console.log(f.firstInfo.nomE);
    //this.notified.emit(this.user);
    console.log(this.user);
    console.log(this.contrat.idContrat);
    console.log(this.equipe);
    // this.user=new User();
  }

  public getCont(): void {
    this.contService.getCont().subscribe(
      (response: Contrat[]) => {
        this.listCont = response;
        console.log(this.listCont);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getEqui(): void {
    this.equipeService.getEqui().subscribe(
      (response: Equipe[]) => {
        this.listEqui = response;
        console.log(this.listEqui);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  e() {
    let button = document.getElementById("order");

    if (!button.classList.contains("animate")) {
      button.classList.add("animate");
      setTimeout(() => {
        button.classList.remove("animate");
        this.notyf.success({message:'Student Added Successfully!',duration:6000,dismissible:true});
        this.user = new Etudiants();
        this.equipe = new Equipe();
        this.contrat = new Contrat();
      }, 10000);
    }
  }


}
