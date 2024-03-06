import page404 from './pages/404/index.ts';
import page500 from './pages/500/index.ts';
import chatPage from './pages/chat/index.ts';
import loginPage from './pages/login/index.ts';
import profilePage from './pages/profile/index.ts';
import signinPage from './pages/signin/index.ts';
import Router from './services/Router.ts';

Router
  .use('/', loginPage)
  .use('/messenger', chatPage)
  .use('/sign-up', signinPage)
  .use('/profile', profilePage)
  .use('/404', page404)
  .use('/500', page500)
  .start();
