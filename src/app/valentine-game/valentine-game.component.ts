import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-valentine-game',
  templateUrl: 'valentine-game.component.html',
  styleUrls: ['valentine-game.component.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ValentineGameComponent implements OnInit {
  showQuestion = true;
  showSuccess = false;
  yesButtonSize = 1;
  noButtonOpacity = 1;
  flowers: Flower[] = [];
  imageUrl = '../assets/me.jpeg'; // Change this to your image path

  ngOnInit() {
    // Initialize flowers for animation
    this.createFlowers();
  }

  createFlowers() {
    // Create 30 falling flowers
    for (let i = 0; i < 30; i++) {
      this.flowers.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        swayAmount: 20 + Math.random() * 30,
      });
    }
  }

  onNoClick() {
    // Grow the YES button and fade the NO button
    this.yesButtonSize += 0.3;
    this.noButtonOpacity -= 0.15;

    // If NO button is mostly faded, hide it completely
    if (this.noButtonOpacity < 0.1) {
      this.noButtonOpacity = 0;
    }
  }

  onYesClick() {
    // Show the success screen with flowers
    this.showQuestion = false;
    this.showSuccess = true;
  }

//   askAgain() {
//     // Reset everything
//     this.showQuestion = true;
//     this.showSuccess = false;
//     this.yesButtonSize = 1;
//     this.noButtonOpacity = 1;
//     this.flowers = [];
//     this.createFlowers();
//   }
}

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  swayAmount: number;
}
