import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  id=0;
  equipe:any;
  constructor(private equipeService:EquipeService,private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idEquipe'];
    console.log(this.id);

    this.equipeService.getEquipe(this.id).subscribe(res=>this.equipe=res);
    console.log(this.equipe);
     
  }
  updateEquipe()
  {
    this.equipeService.updateEquipe(this.equipe).subscribe();

  }

  

}
