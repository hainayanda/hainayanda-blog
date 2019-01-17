import * as $ from 'jquery'

export class PageComponent {
    activateContactMe() {
        $("#contact-me").click(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
    }
}