

export class Movie {
    constructor(
        public name: string = 'Movie Name',
        public banner: string = '/assets/default.jpg',
        public review: number = 0
    ) {}
}

export class ChangeEvent {
    constructor(public type: 'Play' | 'Edit' | 'Remove', public data: Movie, public insertion?: Movie) {}
}
