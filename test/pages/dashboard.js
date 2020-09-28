import { Selector } from 'testcafe';

export default class DashboardPage {
  constructor() {
    this.activityFeed = Selector('main').find('a').withText('Activity Feed')
    this.editProfile = Selector('a').withText('Edit Profile')
    this.goProfile = Selector('a').withText('Your Public Profile')
    this.goYourItems = Selector('main').find('a').withText('Your items')
    this.yourBuyingOrders = Selector('a').withText('Your orders').nth(1)
    this.yourSellingOrders = Selector('a').withText('Your orders').nth(0)
    this.yourGroups = Selector('a').withText('Your Groups')
  }
}
