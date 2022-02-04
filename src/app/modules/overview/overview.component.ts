import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OperatorsInterface} from "../../core/interfaces/operators.interface";
import {TableService} from "../../core/services/table.service";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
    private _jsonURL = '../../../assets/table_data.json';

    results: any[] = [];
    columns: any[] = [];
    filters: any[] = [];
    headers: string[] = [];
    filteredResults: any[] = [];
    selectedColumns: any[] = [];
    formattedFilters: any[] = [];
    first: number = 0;
    rows: number = 10;
    visibleColumns: number = 6;
    loading: boolean = true;
    productName: string = '';

    filterForm = new FormGroup({
        column: new FormControl('', [Validators.required]),
        columnValue: new FormControl('', Validators.required),
        operator: new FormControl('', Validators.required),
    });

    operators: OperatorsInterface[] = [
        {
            code: 'lte',
            name: 'Less than or equal to'
        },
        {
            code: 'gte',
            name: 'Greater than or equal to'
        },
        {
            code: 'eq',
            name: 'Equals'
        },
        {
            code: 'neq',
            name: 'Does not equal'
        },
        {
            code: 'ctn',
            name: 'Contains'
        },
        {
            code: 'nctn',
            name: 'Does not contain'
        }
    ]

    constructor(
        private http: HttpClient,
        private tableService: TableService
    ) {
    }

    ngOnInit(): void {
        this.http.get(this._jsonURL).subscribe((data) => {
            for (const [key, value] of Object.entries(data)) {
                this.results.push(value);
            }

            this.headers = Object.keys(this.results[0]);
            this.setColumns();
            this.selectedColumns = this.columns.slice(0, this.visibleColumns);
            this.loading = false;
        });

        this.filteredResults = this.results;
    }

    /**
     * Method for creating table columns out of JSON keys
     */
    setColumns() {
        this.headers.forEach((head) => {
            this.columns.push({
                code: head,
                name: this.tableService.formatHeader(head)
            });
        });
    }

    /**
     * Method that handles filter submission
     */
    onSubmit() {
        const form = this.filterForm.value;

        this.filters.push({
            filterColumn: form.column.code,
            filterValue: form.columnValue,
            filterOperator: form.operator.code
        });

        this.processData();
    }

    /**
     * Method that removes selected filter from list of filters
     * @param index
     */
    removeFilter(index: number) {
        this.filters.splice(index, 1);
        this.formattedFilters.splice(index, 1);
        this.processData();
    }

    /**
     * Method that sets data after filters have been applied
     */
    processData() {
        const processedData = this.tableService.applyFilters(this.filters, this.results, this.operators);

        if (processedData.filters) {
            this.formattedFilters = processedData.filters;
            console.log(this.formattedFilters);
        }

        if (processedData.data) {
            this.filteredResults = processedData.data;
        }
    }

    /**
     * Method that removes all added filters
     */
    resetFilters() {
        this.filters = [];
        this.formattedFilters = [];
        this.filteredResults = this.results;
    }
}
