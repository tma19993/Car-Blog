import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WritePostComponent } from './write-post/write-post.component';
import { AboutComponent } from './about/about.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { WeatherComponent } from './weather/weather.component';

import { FormsModule } from '@angular/forms';

import { PostsService } from './services/posts.service';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WritePostComponent,
    AboutComponent,
    NavigatorComponent,
    WeatherComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
