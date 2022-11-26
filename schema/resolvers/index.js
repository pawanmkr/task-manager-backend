// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
import db from '../../config/db.cjs'

const query = db.select("*").from("demo");

export const resolvers = {
    Query: {
      books: async () => {
        return await query;
      }
    },
  };

  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    }
  ];