import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post-Spammer-Rasoli';
  frasi = new Array<string>();
  spamma(frase: HTMLInputElement, numero:HTMLInputElement): Boolean
  {
    let volte = Number(numero.value);
    console.log(`Spammando la frase: ${frase.value} per: ${numero.value} volte`);
    for(let j:number = 0; j < volte; j++)
    {
      this.frasi.push(frase.value);
    }
    
    return false;
  }
}
