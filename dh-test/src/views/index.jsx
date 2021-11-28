import React from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
  return (
    <div>
        <p>Press Button to goto Duck game</p>
        <Link to="/duck">
            <button>
                LOG IN
            </button>
        </Link>
    </div>
  )
}

export default Index