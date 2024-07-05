## Client Gateway

The gateway is the communication point between our clients and our services. It receives requests, forwards them to the corresponding services, and returns the response to the client.

## Development

1. Clone the repository
2. Install dependencies
3. Create a `.env` file based on the `env.template`
4. Start the NATS server

   ```sh
   docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
   ```

5. Ensure the microservices to be consumed are running
6. Start the project with `npm run start:dev`

## NATS

```sh
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

## Production

Build the Docker image:

```sh
docker build -f dockerfile.prod -t client-gateway .
```
