import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from '../app.model';

@Component({
	selector: 'ma-movie-panel',
	templateUrl: './movie-panel.component.html',
	styleUrls: ['./movie-panel.component.sass']
})
export class MoviePanelComponent implements OnInit {
	formGroup: FormGroup;
	constructor(
		private dialogRef: MatDialogRef<MoviePanelComponent>,
		@Inject(MAT_DIALOG_DATA) data: Movie,
		fb: FormBuilder
	) {
		this.formGroup = fb.group({
			name: [data ? data.name : null, Validators.required],
			banner: [data ? data.banner : null],
			review: [data ? data.review : 0]
		});
	}

	ngOnInit() {
	}
	onSave() {
		if (this.formGroup.valid) {
			const data = this.formGroup.value;
			this.dialogRef.close(new Movie(data.name, data.banner ? data.banner : 'assets/default.jpg', data.review));
		}
	}
}
