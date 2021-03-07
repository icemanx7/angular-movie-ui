import { MovieSetItem } from '../../../shared/extensions/myset';
export interface Movies {
    movies: Movie[];
}

export interface MovieReview {
    review: string;
    movieID: number;
    rating: number;
    reviewDate: Date;
    liked: boolean
}

export interface UserDetails {
    username: string;
}

export interface ReviewForm {
    review: string;
    rating: number;
}
export interface Rating {
    source: string
    value: string
}
export class Movie implements MovieSetItem {

    Title: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    Imdbrating: string;
    Imdbvotes: string;
    Imdbid: string;
    Type: string;
    Dvd: string;
    Boxoffice: string;
    Website: string;
    Response: string

    constructor(movie: Movie) {
        this.Title = movie.Title;
        this.Rated = movie.Rated;
        this.Released = movie.Released;
        this.Runtime = movie.Runtime;
        this.Genre = movie.Genre;
        this.Director = movie.Director;
        this.Actors = movie.Actors;
        this.Plot = movie.Plot;
        this.Language = movie.Language;
        this.Country = movie.Country;
        this.Awards = movie.Awards;
        this.Poster = movie.Poster;
        this.Ratings = movie.Ratings;
        this.Metascore = movie.Metascore;
        this.Imdbrating = movie.Imdbrating;
        this.Imdbvotes = movie.Imdbvotes;
        this.Imdbid = movie.Imdbid;
        this.Type = movie.Type;
        this.Dvd = movie.Dvd;
        this.Boxoffice = movie.Boxoffice;
        this.Website = movie.Website;
        this.Response = movie.Response;
    }

    equals(other: Movie): boolean {
        return other.Title === this.Title;
    }

}
