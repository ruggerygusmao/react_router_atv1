import React from 'react';
import Nav from './Nav';


const Musica = () => {

    return(
        <div>
            <Nav />
            <h1>Música Favorita</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pnUgxBDlCMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Musica;
