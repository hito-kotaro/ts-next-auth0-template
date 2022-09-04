# Next.js - Auth0 Template

# GetStart

## Create Auth0 Application

https://auth0.com/docs/quickstart/webapp/nextjs/interactive

## Create .env.local

```
AUTH0_SECRET='your secret'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='your domain'
AUTH0_CLIENT_ID='your client id'
AUTH0_CLIENT_SECRET='your secret id'
```

### How to Generate [your seclet]

```
$ openssl rand -hex 32
```

## yarn & start

```
$ yarn # install dependences
$ yarn dev
```
