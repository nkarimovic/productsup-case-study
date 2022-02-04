import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {OverviewRoutingModule} from "./overview-routing.module";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SkeletonModule} from "primeng/skeleton";
import {TableFilterPipe} from "../../core/pipes/tableFilter.pipe";
import {ChipModule} from "primeng/chip";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
    declarations: [
        OverviewComponent,
        TableFilterPipe
    ],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        HttpClientModule,
        MatTableModule,
        TableModule,
        MultiSelectModule,
        FormsModule,
        SkeletonModule,
        ReactiveFormsModule,
        ChipModule,
        InputTextModule,
        DropdownModule
    ],
    exports: [
        OverviewComponent
    ]
})
export class OverviewModule {
}
