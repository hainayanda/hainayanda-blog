import * as $ from 'jquery'

export class BaseComponent {
    formatDate(date: Date): string {
        if (date == null) return "Present";
        else {
            var month: string = monthNames[date.getMonth()];
            var year: string = date.getFullYear().toString()
            return month + " " + year
        }
    }
}

export class PageComponent extends BaseComponent {
    activateContactMe() {
        $("#contact-me").click(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
    }
}

const monthNames: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"
]