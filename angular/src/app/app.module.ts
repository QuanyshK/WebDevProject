// Import library module
import { NgxAudioPlayerModule} from "@khajegan/ngx-audio-player";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    NgxAudioPlayerModule,
    HttpClientModule
  ]
})
export class AppModule { }
