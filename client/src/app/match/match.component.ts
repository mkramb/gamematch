import { Component, Inject, OnInit } from '@angular/core';

enum Mode {
  Initial = 0,
  Fetching = 1,
  Matched = 2
}

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public mode;
  public match;

  constructor(@Inject('api') private api) {}

  ngOnInit() {
    this.mode = Mode.Initial;
  }

  onMatch(selectedGame) {
    if (selectedGame && selectedGame.value) {
      this.mode = Mode.Fetching;
      this.api
        .getBestChallenge(selectedGame.value)
        .subscribe(
          this.onMatched.bind(this),
          this.onError.bind(this)
        );
    }
  }

  private onMatched(data) {
    this.match = data;
    this.mode = Mode.Matched;
  }

  private onError() {
    this.mode = Mode.Initial;
  }

}
