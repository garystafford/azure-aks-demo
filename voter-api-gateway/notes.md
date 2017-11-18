```bash
docker build -t garystafford/voter-api-gateway:latest .
docker push garystafford/voter-api-gateway:latest
```

```bash
docker service create \
  --name voter-api-gateway \
  --port 8080:8080/tcp garystafford/voter-api-gateway:latest
```

```bash
# service directly
http localhost:8097/candidate/info

# api gateway
http localhost:8080/candidate/info
```
