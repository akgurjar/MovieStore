import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MoviePanelComponent } from './movie-panel/movie-panel.component';
import { Movie } from './app.model';
@Injectable({
	providedIn: 'root'
})
export class MovieService {

	constructor(private dialog: MatDialog) { }
	openForm(data: Movie, done: (movie: Movie) => void) {
		this.dialog.open(MoviePanelComponent, { data })
			.afterClosed().subscribe((result: Movie) => {
				done(result);
			});
	}
}
