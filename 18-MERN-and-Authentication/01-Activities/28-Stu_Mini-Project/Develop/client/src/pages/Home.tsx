import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Matchup from '../models/Matchup';
import { getAllMatchups } from '../utils/api';

// TODO: Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const [matchupList, setMatchupList] = useState<Matchup[]>([]);

  useEffect(() => {
    const getMatchupList = async () => {
      try {
        const res = await getAllMatchups();
        if (!res.ok) {
          throw new Error('No list of matchups');
        }
        const matchupList = await res.json();
        setMatchupList(matchupList);
      } catch (err) {
        console.error(err);
      }
    };
    getMatchupList();
  }, []);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {matchupList.map((matchup: Matchup) => {
          return (
            <li key={matchup._id}>
              <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                {matchup.tech1} vs. {matchup.tech2}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
