import styles from './index.module.scss';
import React from 'react';
import { User } from '@express-next-starter/shared-types';

export function Index() {
  const [posts, setPosts] = React.useState<User[]>([]);

  console.log('test', process.env.NEXT_PUBLIC_TEST);

  React.useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.page}>
      {posts?.map((p) => {
        return (
          <div key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
