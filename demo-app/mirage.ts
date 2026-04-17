import { createServer } from 'miragejs';

export default function startMirage() {
  return createServer({
    routes() {
      this.get('/cars', () => ({
        cars: [
          { id: 1, brand: 'Subaru' },
          { id: 2, brand: 'Ford' },
        ],
      }));
    },
  });
}
