import { Component, OnInit } from '@angular/core';
import { detailequipe } from '../../models/detailequipe';
import { DetailEquipeServiceService } from '../../services/detail-equipe-service.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
listDetailEquipe: detailequipe[]=[];
detailE = <detailequipe>{};
id:number;

  constructor(private des:DetailEquipeServiceService ) { }
  addDe(){
    this.des.addDetailEquipe(this.detailE).subscribe(()=>{
      this.des.retrieveAllDetailEquipes().subscribe((res)=>{this.listDetailEquipe=res;});
    });
    console.log(this.detailE);
  }
  deleteDe(id: number) {
    this.des
      .removeDetailEquipe(id)
      .subscribe(() =>
        this.des.retrieveAllDetailEquipes().subscribe((res) => (this.listDetailEquipe = res))
      );
  }
  ngOnInit(): void {
    this.des.retrieveAllDetailEquipes().subscribe((res)=>{this.listDetailEquipe=res;
      console.log(this.listDetailEquipe);});


  }

}
