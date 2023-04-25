import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailequipe } from 'src/app/models/detailequipe';
import { DetailEquipeServiceService } from 'src/app/services/detail-equipe-service.service';

@Component({
  selector: 'app-update-detail-equipe',
  templateUrl: './update-detail-equipe.component.html',
  styleUrls: ['./update-detail-equipe.component.css']
})
export class UpdateDetailEquipeComponent implements OnInit {
  detailE = <detailequipe>{};
  id: number;
  constructor(
    private des: DetailEquipeServiceService,
    private ac: ActivatedRoute,
    private router: Router
  ) { }

  getdetailequipeById(id:any) {
    this.des.retrieveEquipe(this.id).subscribe((res) => {
      this.detailE = res;
      //console.log(this.contrat);
    });
  }
updateDe(){
  this.des.updateEquipe(this.detailE, this.id).subscribe(() => {

    this.router.navigate(["ListEquipe"]);
  });

}
  ngOnInit(): void {
    this.id = this.ac.snapshot.params["idDetailEquipe"];
    this.getdetailequipeById(this.id);
  }

}
