export interface Movie {
    id: number;
    title: string;
    year: string;
}

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