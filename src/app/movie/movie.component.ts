import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, ChangeEvent } from '../app.model';
import { MovieService } from '../movie.service';
@Component({
	selector: 'ma-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
	@Input() info: Movie;
	@Output() change: EventEmitter<ChangeEvent> = new EventEmitter();
	constructor(private ms: MovieService) { }
	ngOnInit() { }
	onPlay() {
		this.change.emit(new ChangeEvent('Play', this.info));
	}
	onEdit() {
		this.ms.openForm(this.info, (movie: Movie) => {
			if (movie) {
				this.change.emit(new ChangeEvent('Edit', this.info, movie));
			}
		});
	}
	onRemove() {
		this.change.emit(new ChangeEvent('Remove', this.info));
	}
	get reviewSteps(): number[] {
		return [1, 2, 3, 4, 5];
	}
	reviewStar(reviewStep): 'star' | 'star_border' | 'star_half' {
		return reviewStep <= this.info.review ? 'star' : reviewStep < this.info.review + 1 ? 'star_half' : 'star_border';
	}
}
