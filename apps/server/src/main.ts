/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import { User } from '@express-next-starter/shared-types';

dotenv.config();
const app = express();

console.log('test', process.env.PORT);

app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/posts', async (req, res) => {
  const data: User[] = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ];
  res.send(data);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
