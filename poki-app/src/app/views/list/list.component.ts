import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // nome = 'Akira';
  // isVisible = false;
  // myvalue = '';
  // aluno = {
  //   dados: {
  //     nome: 'Joao',
  //   },
  // };
  // myList = [1, 2, 3, 4, 5];
  pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
    { name: 'Pikachu', number: 25 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
