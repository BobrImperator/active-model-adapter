import Pretender from 'pretender';

export default function startPretender() {
  const server = new Pretender();

  server.get('/cars', function () {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        cars: [
          { id: 1, brand: 'Subaru' },
          { id: 2, brand: 'Ford' },
        ],
      }),
    ];
  });

  return server;
}
