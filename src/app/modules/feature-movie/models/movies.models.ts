export interface Movies {
    movies: Movie[];
}

export interface MovieReview {
    review: string;
    movieID: number;
    rating: number;
    reviewDate: Date
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
export interface Movie {
    Title: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Rating[],
    Metascore: string,
    Imdbrating: string,
    Imdbvotes: string,
    Imdbid: string,
    Type: string,
    Dvd: string,
    Boxoffice: string,
    Website: string,
    Response: string
}
