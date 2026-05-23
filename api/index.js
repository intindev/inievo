import server from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default function (request, context) {
  return server.fetch(request, process.env, context);
}
