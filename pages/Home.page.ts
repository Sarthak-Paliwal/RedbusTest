import {Locator,Page} from "@playwright/test"
export default class Home{
    page:Page
    accountBtn:Locator
    srcIf:Locator
    toIf:Locator
    dateif:Locator
    searchBusBtn:Locator
    constructor(page:Page){
        this.page=page;
        this.accountBtn=this.page.getByRole("button",{name:"Account",exact:true})
        this.srcIf=this.page.locator("input#srcinput")
        this.toIf=this.page.locator("input#destinput");
        this.dateif=this.page.locator('//i[@class="icon___6781f1 icon icon-date_range"]');
        this.searchBusBtn=this.page.getByRole('button', { name: 'Search buses' });
    }

    async handleAccountOverlay(){
        await this.accountBtn.click();
        await this.page.getByRole("button",{name:"Log in"}).click();
    }

    async filterBus(){
        await this.srcIf.fill("Indore");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");

        await this.toIf.fill("Pune");
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");

        await this.dateif.click();
        await this.page.locator('//div[@aria-label="Friday, May 29, 2026"]').click();
        await this.searchBusBtn.click();


    }
}