import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { BottomAppBarComponent } from './components/app-bar/bottom-app-bar/bottom-app-bar.component';
import { TopAppBarComponent } from './components/app-bar/top-app-bar/top-app-bar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BannerComponent } from './components/banner/banner.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChipComponent } from './components/chip/chip.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { EditorComponent } from './components/editor/editor.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TextFieldComponent } from './components/input/text-field/text-field.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListGroupComponent } from './components/list/list-group/list-group.component';
import { SearchFieldComponent } from './components/input/search-field/search-field.component';
import { TextareaFieldComponent } from './components/input/textarea-field/textarea-field.component';
import { BottomSheetComponent } from './components/sheet/bottom-sheet/bottom-sheet.component';
import { ModalComponent } from './components/modal/modal.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ContentComponent } from './components/loading/content/content.component';
import { PageComponent } from './components/loading/page/page.component';
import { LoadContentComponent } from './components/loading/load-content/load-content.component';
import { LoadPageComponent } from './components/loading/load-page/load-page.component';
import { StepItemComponent } from './components/stepper/step-item/step-item.component';
import { StepGroupComponent } from './components/stepper/step-group/step-group.component';
import { TableComponent } from './components/table/table.component';
import { TabGroupComponent } from './components/tab/tab-group/tab-group.component';
import { TabComponent } from './components/tab/tab/tab.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ButtonComponent,
    BottomAppBarComponent,
    TopAppBarComponent,
    AvatarComponent,
    AccordionComponent,
    BadgeComponent,
    BannerComponent,
    BreadcrumbComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent,
    ChartComponent,
    ChipComponent,
    DialogComponent,
    DrawerComponent,
    DropdownComponent,
    EditorComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    IndicatorComponent,
    ProgressComponent,
    TextFieldComponent,
    KeyboardComponent,
    ListItemComponent,
    ListGroupComponent,
    SearchFieldComponent,
    TextareaFieldComponent,
    BottomSheetComponent,
    ModalComponent,
    RadioComponent,
    CheckboxComponent,
    ContentComponent,
    PageComponent,
    LoadContentComponent,
    LoadPageComponent,
    StepItemComponent,
    StepGroupComponent,
    TableComponent,
    TabGroupComponent,
    TabComponent,
    TimelineComponent,
    SwitchComponent,
    TooltipComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
