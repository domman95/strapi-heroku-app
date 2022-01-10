import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

// export const query = graphql``;

const IndexPage = () => {
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   fetch('https://strapi-first-project1.herokuapp.com/api/developers')
  //     .then((res) => res.json())
  //     .then((data) => setState(data));
  // }, []);

  return (
    <div>
      {state.data ? (
        state.data.map(({ attributes, id }) => (
          <p key={id}>{attributes.Name}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndexPage;
