import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserListComponent } from './app/user-list/user-list.component';

bootstrapApplication(UserListComponent, {
  providers: [provideHttpClient()],
});