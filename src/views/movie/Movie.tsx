import React from 'react';
import { useParams } from 'react-router';
import NavPanel from '../../components/NavPanel';

interface MovieRouteParams {
    id: string;
}

const Movie = () => {
    const { id } = useParams<MovieRouteParams>();
    
    return (
        <div> 
            <NavPanel />
            {`This is movie page with id: ${id}`} 

        </div>
    );
}

export default Movie;