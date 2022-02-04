import {Injectable} from '@angular/core';

@Injectable()
export class TableService {
    /**
     * Method used to  process filters
     * @param filters
     * @param processData
     * @param operatorsList
     */
    applyFilters(filters: any, processData: any[], operatorsList: any[]) {
        let formattedFilters: any[] = [];

        filters.forEach((filter: { filterColumn: string; filterValue: string; filterOperator: string; }) => {
            const column: string = filter.filterColumn;
            const columnValue: string = filter.filterValue;
            const operator: string = filter.filterOperator;

            switch (operator) {
                case 'lte':
                    processData = processData
                        .filter(data => data[column] <= columnValue);
                    break;
                case 'gte':
                    processData = processData
                        .filter(data => data[column] >= columnValue);
                    break;
                case 'eq':
                    processData = processData
                        .filter(data => data[column] == columnValue);
                    break;
                case 'neq':
                    processData = processData
                        .filter(data => data[column] != columnValue);
                    break;
                case 'ctn':
                    processData = processData
                        .filter(data => (data[column] + "").indexOf(columnValue) !== -1);
                    break;
                case 'nctn':
                    processData = processData
                        .filter(data => (data[column] + "").indexOf(columnValue) === -1);
                    break;
            }

            formattedFilters.push({
                filterColumn: this.formatHeader(column),
                filterValue: columnValue,
                filterOperator: this.formatOperator(operator, operatorsList)
            });
        })

        return {
            data: processData,
            filters: formattedFilters
        };
    }

    /**
     * Formatting table head names, removing underscores and transforming first character to uppercase
     * @param item
     */
    formatHeader(item: string) {
        item = item.replace(/_/g, ' ');
        return item.charAt(0).toUpperCase() + item.slice(1);
    }

    /**
     * Method used to get operator name out of operator code
     * @param operator
     * @param operatorList
     */
    formatOperator(operator: string, operatorList: any[]) {
        let operatorName: string = '';

        operatorList.forEach(filterOperator => {
            if (filterOperator.code === operator) {
                operatorName = filterOperator.name;
            }
        })

        return operatorName;
    }
}
