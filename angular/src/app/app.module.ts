// Import library module
import { NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";
import {NgModule} from "@angular/core";
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    NgxAudioPlayerModule, HttpClientModule,RouterModule],
  providers: [ HttpClientModule ]
})
export class AppModule { }
