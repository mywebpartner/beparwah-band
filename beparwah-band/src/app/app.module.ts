import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MeetTheBandComponent } from './meet-the-band/meet-the-band.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LatestAlbumsComponent } from './latest-albums/latest-albums.component';
import { OverviewComponent } from './overview/overview.component';
import { LiveFormsComponent } from './live-forms/live-forms.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MeetTheBandComponent,
    GalleryComponent,
    LatestAlbumsComponent,
    OverviewComponent,
    LiveFormsComponent,
    PlaylistComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
