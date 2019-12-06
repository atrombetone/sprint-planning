import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/models/sprint.model';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent implements OnInit {

  sprints: Array<Sprint> = [
    {
      id: 1, name: 'Reformulação Layout Cliente', dtInicio: '01/10/2019', dtFinal: '12/10/2019', status: 'Finalizado',
      Estorias: [
        {
          ordemPrioridade: 1, titulo: 'Alterar Layout do Cadastro de Clientes',
          detalhe: 'Texto Descritivo', estimativaHoras: 3, previsoes: [
            { data: '01/10/2019', hrInicio: '08:00', hrFinal: '11:00' }
          ]
        }
      ]
    },
    {
      id: 2, name: 'Reformulação Layout Pedido', dtInicio: '01/10/2019', dtFinal: '12/10/2019', status: 'Finalizado',
      Estorias: [
        {
          ordemPrioridade: 1, titulo: 'Alterar Layout de pedidos',
          detalhe: 'Texto Descritivo', estimativaHoras: 3, previsoes: [
            { data: '01/10/2019', hrInicio: '11:00', hrFinal: '12:00' },
            { data: '01/10/2019', hrInicio: '13:00', hrFinal: '15:00' }
          ]
        }
      ]
    },
    {
      id: 3, name: 'Ajuste no Backend', dtInicio: '01/10/2019', dtFinal: '12/10/2019', status: 'Finalizado',
      Estorias: [
        {
          ordemPrioridade: 6, titulo: 'Alterar objetos de retorno',
          detalhe: 'Texto Descritivo', estimativaHoras: 6, previsoes: [
            { data: '01/10/2019', hrInicio: '15:00', hrFinal: '16:00' },
            { data: '02/10/2019', hrInicio: '08:00', hrFinal: '12:00' },
            { data: '02/10/2019', hrInicio: '13:00', hrFinal: '14:00' }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
