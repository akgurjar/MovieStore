import { Component } from '@angular/core';
import { Movie, ChangeEvent } from './app.model';
import { MovieService } from './movie.service';
@Component({
	selector: 'ma-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	movies: Movie[] = [
		new Movie('3 IDIOTS', 'assets/3idiots.jpeg', 4.5),
		new Movie('AVATAR', 'assets/avatar.jpg', 4.5),
		new Movie('STAR TREK', 'assets/star_trek.jpg', 3.5),
		new Movie('TITANIC', 'assets/titanic.jpg', 3.5),
		new Movie('FORCE 2', 'assets/force2.jpg', 3.5),
		new Movie('ANTMAN', 'assets/antman.jpg', 3.5),
		new Movie('THOR', 'assets/thor.jpg', 3.5),
		new Movie('BLACK PANTHER', 'assets/black_panther.jpeg', 3.5),
		new Movie('MUNNA BHAI MBBS', 'assets/munna_bhai_mbbs.jpeg', 3.5)
	];
	constructor(private ms: MovieService) {}
	onChangeMovie(event: ChangeEvent) {
		if (event.type === 'Edit') {
			if (event.insertion) {
				this.movies.splice(this.movies.indexOf(event.data), 1, event.insertion);
			}
		} else if (event.type === 'Remove') {
			this.movies.splice(this.movies.indexOf(event.data), 1);
		} else if (event.type === 'Play') {
			alert('We are working on it.');
		}
	}
	onAddMovie() {
		this.ms.openForm(null, (movie: Movie) => {
			if (movie) {
				this.movies.push(movie);
			}
		});
	}
	get minHeight(): number {
		return window.innerHeight - (window.innerHeight > 600 ? 64 * 2 : 52 * 2);
	}
}

