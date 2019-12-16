import { Component, OnInit } from '@angular/core';
//faço o import para utilizar o objeto de negócio tarefa
import { tarefa } from '../Model/tarefa';
import { ListawebService } from '../service/Listaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  minhaTarefa: tarefa[];


  constructor(private servicoLista: ListawebService) {

  }


  ngOnInit() {
    console.log("chamando a função que recupera a lista");
    this.obterTodasAstarefas();
    console.log("espero que tenha dado certo");
    console.log(this.minhaTarefa)

  }


  // VOU CRIAR UM MÉTODO PARA INVOCAR O SERVIÇO
  public obterTodasAstarefas() {
    this.servicoLista.obterTarefas().subscribe((resultado: tarefa[]) => {
      this.minhaTarefa = resultado;
    });

  }
}









    //this.minhaTarefa = new Array<tarefa>();
    //this.minhaTarefa = new tarefa("tarefa #1", "Generosa Amaral");
  //this.minhaTarefa[0] = new tarefa ("definir o model",              "ptof.isidro");
  //this.minhaTarefa[1] = new tarefa ("criar o componente",           "  Cleiton");
  //this.minhaTarefa[2] = new tarefa ("integrar o web serve",         "Dani");
  //this.minhaTarefa[3] = new tarefa ("estilizar a pagina",           "Ge");
  //this.minhaTarefa[4] = new tarefa ("testar e garantir a qualidade","Laura");
  //console.log(this.minhaTarefa