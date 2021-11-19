import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { User } from '@express-next-starter/shared-types';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Query, Resolver } from 'type-graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { environment } from './environments/environment';

dotenv.config();

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

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }
}

async function main() {
  const app = express();

  app.use(
    cors({
      origin: environment.WEB_URL,
    })
  );

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to server!' });
  });

  app.get('/posts', async (req, res) => {
    res.send(data);
  });

  /* *** graphql server *** */
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  /* *** graphql server *** */

  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
}

main().catch((e) => console.log(e));
