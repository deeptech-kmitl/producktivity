<h1 align="center">Producktivity</h1>

## Project Visualization

```mermaid
graph TD
  web --> ui

  web --> web-landing-navigation
  web-landing-navigation --> ui

  api-auth --> api-config
  api-auth-e2e --> api-auth
```

## Development

### Web Development

```bash
pnpm nx serve web
```

### UI Development

```bash
pnpm nx storybook ui
```

## References

### Design

- https://m3.material.io/
