import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Notyf } from 'notyf';
import { Etudiants } from "src/app/Model/Etudiants";
import { EtudiantsService } from "./etudiants.service";

@Component({
  selector: "app-table-etudiant",
  templateUrl: "./table-etudiant.component.html",
  styleUrls: ["./table-etudiant.component.css"],
})

export class TableEtudiantComponent implements OnInit {
  notyf = new Notyf();
  public etudiants: Etudiants[];
  public deleteEmployee: Etudiants;
  public editEmployee: Etudiants;
  nbgamix: number = 0;
  nbsim: number = 0;
  nbse: number = 0;
  nbnids: number = 0;
  nbtotal: number = 0;
  public focus;
  searchT: string = "";
  searchedEtudiants: Etudiants[];
  totalRecords: any;
  page:  number;
  info: number=0;
  web: number=0;
  mobile: number=0;
  totaldeparts:number=0;
  totalpercentage:string='';
  x:number=0;
  w:number=0;
  totalmobilepercentage:string='';


  constructor(private etudiantService: EtudiantsService) {}

  public getEtudiants(): void {

    this.etudiantService.getEmployees().subscribe(
      (response: Etudiants[]) => {
        this.etudiants = response;
        console.log(this.etudiants);
        this.nbrOption();

        this.totalRecords = this.etudiants.length;
        console.log(this.totalRecords);
        this.nbrDepart();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteEmloyee(employeeId: number): void {
    this.etudiantService.deleteEtudiants(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById("add-employee-form").click();
    this.etudiantService.addEtudiants(addForm.value).subscribe(
      (response: Etudiants) => {
        console.log(response);
        this.getEtudiants();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  nbrDepart(){
    for(let i =0;i<this.etudiants.length;i++){
      if(this.etudiants[i].departement.nomDepart ==="info")
      this.info++;
      if(this.etudiants[i].departement.nomDepart ==="web")
      this.web++;
      if(this.etudiants[i].departement.nomDepart ==="mobile"){
        this.mobile++;
      }

      this.totaldeparts++;
      this.x=this.web/this.totaldeparts*100;
      this.totalpercentage=`${this.x.toFixed(1)}%`
      this.w=this.mobile/this.totaldeparts*100
      this.totalmobilepercentage=`${this.w.toFixed(1)}%`
  }


}
  nbrOption() {
    for (let i = 0; i < this.etudiants.length; i++) {
      if (this.etudiants[i].option === "GAMIX") this.nbgamix++;
      if (this.etudiants[i].option === "SIM") this.nbsim++;
      if (this.etudiants[i].option === "SE") this.nbse++;
      if (this.etudiants[i].option === "NIDS") this.nbnids++;
    }
    this.nbtotal = this.nbgamix + this.nbsim + this.nbse + this.nbnids;
  }

  public onOpenModal(employee: Etudiants, mode: string): void {
    const container = document.getElementById("main-container");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addEmployeeModal");
    }
    if (mode === "edit") {
      this.editEmployee = employee;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteEmployee = employee;
      button.setAttribute("data-target", "#deleteEmployeeModal");
    }
    container.appendChild(button);
    button.click();
  }
  public onUpdateEtudiant(etud: Etudiants, id: number): void {
    this.etudiantService.updateEtudiants(etud, id).subscribe(
      (response: Etudiants) => {
        console.log(response);
        this.getEtudiants();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getEtudiants();
    this.notyf.success({message:'Dont forget to smile 😊😊!',duration:6000,dismissible:true});


  }

  onsearch(searchValue: string) {
    this.searchT = searchValue;
    console.log(searchValue);
  }
}
