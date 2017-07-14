import React from "react";
import MovieItem from "../../componentes/MovieItem";
import { mount } from "enzyme";

test("welcomes the user to React", function() {
    const movie = {
        unit: 3842,
        show_id: 70117585,
        show_title: "Biutiful",
        release_year: "2010",
        rating: "3.6",
        category: "Dramas",
        show_cast:
            "Javier Bardem, Maricel \u00c1lvarez, Hanaa Bouchaib, Guillermo Estrella, Eduard Fern\u00e1ndez, Cheikh Ndiaye, Diaryatou Daff, Taisheng Chen, Jin Luo, George Chibuikwem Chukwuma",
        director: "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
        summary:
            "Diagnosed with terminal prostate cancer, Uxbal -- a divorced father raising two children -- is determined to atone for his life as a black marketeer in this engrossing character study that unfolds in the slums of Barcelona, Spain.",
        poster: "http://netflixroulette.net/api/posters/70117585.jpg",
        mediatype: 0,
        runtime: "148 min"
    };
    const wrapper = mount(<MovieItem movie={movie}/>);

    expect(wrapper.text()).toContain("Welcome to React");
});
