import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipe } from "../models/equipe";

@Injectable({
  providedIn: "root",
})
export class EquipeService {
  accountUrl = "http://localhost:9090";

  constructor(private http: HttpClient) {}

  public getEquipes(): Observable<Equipe[]> {
    console.log("service appelé");

    return this.http.get<Equipe[]>(this.accountUrl + "/getAllEquipes");
  }

  public addEquipe(equipe: any) {
    return this.http.post(this.accountUrl + "/addEquipe", equipe);
  }

  deleteEquipe(id: any) {
    return this.http.delete(this.accountUrl + "/removeEquipe/" + id);
  }

  updateEquipe(equipe: any) {
    return this.http.put(this.accountUrl + "/updateEquipe", equipe);
  }
  getEquipe(id: any) {
    return this.http.get(this.accountUrl + "/getEquipe/" + id);
  }

  upgradeEquipe() {
    return this.http.get(this.accountUrl + "/upgradeEquipe");
  }
  getEtudiantsByEquipe(id: any) {
    return this.http.get(this.accountUrl + "/getEtudiantsByEquipe/" + id);
  }

  countEquipeByNiveau(niveau: any) {
    return this.http.get(this.accountUrl + "/countByNiveau/" + niveau);
  }
}
