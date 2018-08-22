import { Component } from '@angular/core';

import { SellPage } from '../sell/sell';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {RentPage} from '../rent/rent';
import {SigninPage} from '../signin/signin';
import {InfoPage} from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  // tab3Root = ContactPage;
  // tab4Root = RentPage;

  constructor() {

  }
}
