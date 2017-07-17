import { collection } from '../../reducers/movies'
import { List } from 'immutable';

describe('Test movies reducer', () => {
    it('should return the initial state', () => {
        expect(collection(undefined, [])).toEqual(new List([]));
    })

    it('should return list', () => {
        expect(
            collection([], {
                type: 'LIST',
                movies: [{ "unit": 6226, "show_id": 70299043, "show_title": "Attack on Titan", "release_year": "2013", "rating": "4.6", "category": "Anime", "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka", "director": "", "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.", "poster": "http:\/\/cdn-2.nflximg.com\/en_us\/boxshots\/ghd\/70299043.jpg", "mediatype": 1 }, 
                            { "unit": 17129, "show_id": 287290, "show_title": "Batman", "release_year": "1989", "rating": "3.8", "category": "Sci-Fi & Fantasy", "show_cast": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl, Pat Hingle, Billy Dee Williams, Michael Gough, Jack Palance", "director": "Tim Burton", "summary": "Batman begins making a name for himself just as the flamboyant Joker takes over the Mafia in director Tim Burton's adaptation of the comic book.", "poster": "http:\/\/netflixroulette.net\/api\/posters\/287290.jpg", "mediatype": 0, "runtime": "N\/A" }]
            })
        ).toEqual(new List([{ "unit": 6226, "show_id": 70299043, "show_title": "Attack on Titan", "release_year": "2013", "rating": "4.6", "category": "Anime", "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka", "director": "", "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.", "poster": "http:\/\/cdn-2.nflximg.com\/en_us\/boxshots\/ghd\/70299043.jpg", "mediatype": 1 }, 
                            { "unit": 17129, "show_id": 287290, "show_title": "Batman", "release_year": "1989", "rating": "3.8", "category": "Sci-Fi & Fantasy", "show_cast": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl, Pat Hingle, Billy Dee Williams, Michael Gough, Jack Palance", "director": "Tim Burton", "summary": "Batman begins making a name for himself just as the flamboyant Joker takes over the Mafia in director Tim Burton's adaptation of the comic book.", "poster": "http:\/\/netflixroulette.net\/api\/posters\/287290.jpg", "mediatype": 0, "runtime": "N\/A" }]))
    })

    it('should return favorite list', () => {
        expect(
            collection([], {
                type: 'LIST_FAVORITES',
                favoriteMovies: [{ "unit": 6226, "show_id": 70299043, "show_title": "Attack on Titan", "release_year": "2013", "rating": "4.6", "category": "Anime", "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka", "director": "", "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.", "poster": "http:\/\/cdn-2.nflximg.com\/en_us\/boxshots\/ghd\/70299043.jpg", "mediatype": 1 }, 
                            { "unit": 17129, "show_id": 287290, "show_title": "Batman", "release_year": "1989", "rating": "3.8", "category": "Sci-Fi & Fantasy", "show_cast": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl, Pat Hingle, Billy Dee Williams, Michael Gough, Jack Palance", "director": "Tim Burton", "summary": "Batman begins making a name for himself just as the flamboyant Joker takes over the Mafia in director Tim Burton's adaptation of the comic book.", "poster": "http:\/\/netflixroulette.net\/api\/posters\/287290.jpg", "mediatype": 0, "runtime": "N\/A" }]
            })
        ).toEqual(new List([{ "unit": 6226, "show_id": 70299043, "show_title": "Attack on Titan", "release_year": "2013", "rating": "4.6", "category": "Anime", "show_cast": "Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka", "director": "", "summary": "For over a century, people have been living behind barricades to block out the giant Titans that threaten to destroy the human race. When a Titan destroys his hometown, young Eren Yeager becomes determined to fight back.", "poster": "http:\/\/cdn-2.nflximg.com\/en_us\/boxshots\/ghd\/70299043.jpg", "mediatype": 1 }, 
                            { "unit": 17129, "show_id": 287290, "show_title": "Batman", "release_year": "1989", "rating": "3.8", "category": "Sci-Fi & Fantasy", "show_cast": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl, Pat Hingle, Billy Dee Williams, Michael Gough, Jack Palance", "director": "Tim Burton", "summary": "Batman begins making a name for himself just as the flamboyant Joker takes over the Mafia in director Tim Burton's adaptation of the comic book.", "poster": "http:\/\/netflixroulette.net\/api\/posters\/287290.jpg", "mediatype": 0, "runtime": "N\/A" }]))
    })

})