import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule } from "@angular/router";
import { SharedService } from "./shared.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogsComponent } from "./logs/logs.component";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DashboardComponent,
    LogsComponent
  ],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}
