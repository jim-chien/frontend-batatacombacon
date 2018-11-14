import { Component, OnInit } from '@angular/core';

import { Pet } from 'src/app/classes/pets/pet';
import { PetService } from 'src/app/services/pet.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pet-json',
  templateUrl: './pet-json.component.html',
  styleUrls: ['./pet-json.component.scss']
})
export class PetJsonComponent implements OnInit {

  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location) { }

  ngOnInit() {
    this.getPet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }

}