import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DxPieChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-statistic-dev',
  templateUrl: './statistic-dev.component.html',
  styleUrls: ['./statistic-dev.component.css']
})
export class StatisticDevComponent implements OnInit {

  pizzaDimensions: any;
  statisticsPizza: any;

  constructor(private cartService: CartService) {
    this.pizzaDimensions = JSON.parse(localStorage.getItem('pizzaStatistics'));
    this.statisticsPizza = [{ type: 'mica', value: this.pizzaDimensions.mica },
    { type: 'meidie', value: this.pizzaDimensions.medie },
    { type: 'mare', value: this.pizzaDimensions.mare }
    ];
  }

  ngOnInit() {
  }

}
