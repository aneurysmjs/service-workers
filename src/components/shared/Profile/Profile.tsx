import React, { useState, useEffect } from 'react';

const GITHUB_URL = `https://api.github.com/users`;

interface User {
  avatar_url: string,
  name: string,
  repos_url: string,
  public_repos: string,
}

const Profile = () => {
  const url = `${GITHUB_URL}/aneurysmjs`;

  const [ user, setUser ] = useState<User>({
    /* eslint-disable @typescript-eslint/camelcase */
    avatar_url: '',
    name: '',
    repos_url: '',
    public_repos: '',
    /* eslint-enable @typescript-eslint/camelcase */
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUser(json);
    })();
  }, [url]);

  return (
    <div className="row">
      <div className="col">
        <figure>
          <img
            className="img-fluid rounded"
            src={user.avatar_url}
            alt="avatar"
          />
        </figure>
      </div>
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item">
            {user.name}
          </li>
          <li className="list-group-item">
            {user.repos_url}
          </li>
          <li className="list-group-item">
            {user.public_repos}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
