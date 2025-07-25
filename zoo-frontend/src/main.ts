// zoo-frontend/src/main.ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-ce1diji0rom8462s.us.auth0.com', // Mettre a jour le domaine ici
      clientId: 'nKzQbybwDXLoyvvP8X0xRxRKLBv1aEwK', // Mettre a jour le client id ici
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'http://localhost:3000',
        scope: 'openid profile email',
      },
    }),
  ],
});
