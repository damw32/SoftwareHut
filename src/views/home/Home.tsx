// import React from 'react';
// import NavPanel from '../../components/NavPanel';

// const Home = () => {

//     React.useEffect(() => {
//         const makeRequest = async () => {
//             const response = fetch(`http://www.omdbapi.com/?apikey=`);
//         };
//     }, []);

//     return (
//         <div> 
//             <NavPanel />
//             <div>This is home page</div>
//         </div>
//     );
// }
// export default Home;

import React from 'react';
import NavPanel from '../../components/NavPanel';
import movieService from '../../services/movies.service';

const Home = () => {
    const [search, setSearch] = React.useState('harry potter');
    const [movie, setMovie] = React.useState({});

    React.useEffect(() => {
        const makeRequest = async () => {
            try {

            const responce = movieService.searchByName(search,1);

            setMovie(responce);
            }catch(error){
                console.log(error);
            }
        };
        makeRequest();
    }, [search]);
   return (
        <div> 
            <NavPanel />
            <div>This is home page</div>
        </div>
    );
}
export default Home;