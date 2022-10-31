export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface tvShow {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    name:              string;
    original_language: string;
    original_name:     string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    genre_ids:         number[];
    popularity:        number;
    first_air_date:    Date;
    vote_average:      number;
    vote_count:        number;
    origin_country:    string[];
}