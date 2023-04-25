import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipeData={
    nomEquipe:'',
    niveau:'',
  };
  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {
  }

  addEquipe()
  {
    this.equipeService.addEquipe(this.equipeData).subscribe();

  }

}
