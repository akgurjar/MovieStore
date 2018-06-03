import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatTooltipModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatSliderModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePanelComponent } from './movie-panel/movie-panel.component';
import { MovieService } from './movie.service';

@NgModule({
	declarations: [
		AppComponent,
		MovieComponent,
		MoviePanelComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatSliderModule
	],
	providers: [MovieService],
	bootstrap: [AppComponent],
	entryComponents: [MoviePanelComponent]
})
export class AppModule { }
