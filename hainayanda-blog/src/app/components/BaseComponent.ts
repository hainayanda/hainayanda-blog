import * as $ from 'jquery'

export class BaseComponent {
    formatDate(dateInNumber: number): string {
        if (dateInNumber == null) return "Present";
        else { 
            let date = new Date(dateInNumber)
            var month: string = monthNames[date.getMonth()];
            var year: string = date.getFullYear().toString()
            return month + " " + year
        }
    }
}

export class PageComponent extends BaseComponent {

    onContactMeClicked(){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }
}

const monthNames: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"
]