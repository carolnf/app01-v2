import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FimadotarPage } from './fimadotar.page';

describe('FimadotarPage', () => {
let component: FimadotarPage;
let fixture: ComponentFixture<FimadotarPage>;

beforeEach(waitForAsync(() => {
TestBed.configureTestingModule({
declarations: [ FimadotarPage ],
imports: [IonicModule.forRoot()]
}).compileComponents();

fixture = TestBed.createComponent(FimadotarPage);
component = fixture.componentInstance;
fixture.detectChanges();
}));

it('should create', () => {
expect(component).toBeTruthy();
});
});
