import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animation-lottie',
  templateUrl: './animation-lottie.component.html',
  styleUrls: ['./animation-lottie.component.css']
})
export class AnimationLottieComponent implements OnInit {
  @Input() lottieConfig: object;
  constructor() { }

  ngOnInit(): void {
  }

}
