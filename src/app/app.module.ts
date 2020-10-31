import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './cmps/header/header.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MarketPriceComponent } from './cmps/charts/market-price/market-price.component';
import { TradeVolumeComponent } from './cmps/charts/trade-volume/trade-volume.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvgBlockSizeComponent } from './cmps/charts/avg-block-size/avg-block-size.component';
import { DeleteConfirmationComponent } from './cmps/delete-confirmation/delete-confirmation.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { NotificationComponent } from './cmps/notification/notification.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    HeaderComponent,
    MarketPriceComponent,
    TradeVolumeComponent,
    ContactEditPageComponent,
    AvgBlockSizeComponent,
    DeleteConfirmationComponent,
    SignupComponent,
    MovesListComponent,
    TransferFundComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    FontAwesomeModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
