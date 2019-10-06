import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  imports: [
    ToastModule,
    MessagesModule,
    MessageModule,
    TabViewModule,
    ButtonModule,
    ChipsModule,
    InputTextareaModule,
    CalendarModule,
    ConfirmDialogModule,
    MenubarModule,
    SidebarModule,
    FieldsetModule
  ],
  exports: [
    ToastModule,
    MessagesModule,
    MessageModule,
    TabViewModule,
    ButtonModule,
    ChipsModule,
    InputTextareaModule,
    CalendarModule,
    ConfirmDialogModule,
    MenubarModule,
    SidebarModule,
    FieldsetModule
  ]
})
export class PrimengModule {}
