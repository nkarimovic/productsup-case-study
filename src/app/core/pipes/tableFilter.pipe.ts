import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

    transform(item: any) {
        return item.filterColumn + ' ' + item.filterOperator + ' ' + item.filterValue;
    }

}
