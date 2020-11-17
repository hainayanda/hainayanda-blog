import * as $ from 'jquery';

const monthNames: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'
];

export class BaseComponent {
    formatDate(dateInNumber: number): string {
        if (dateInNumber == null) {
            return 'Present';
        } else {
            const date = new Date(dateInNumber);
            const month: string = monthNames[date.getMonth()];
            const year: string = date.getFullYear().toString();
            return month + ' ' + year;
        }
    }
}

export class PageComponent extends BaseComponent {

    onContactMeClicked() {
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    }
}
