class connectTemplate {
    constructor(data) {
        this.type = data.type;
        this.title = null;
        this.icon = null;
        this.url = data.url;
        this.setIcon();
    }

    setIcon() {
        if (this.type === "github") {
            this.icon = "connect-img fa fa-github";
            this.title = ["Github", "Github"];
        } else if (this.type === "linkedin") {
            this.icon = "connect-img fa fa-linkedin";
            this.title = ["LinkedIn", "LinkedIn"];
        } else if (this.type === "instagram") {
            this.icon = "connect-img fa fa-instagram";
            this.title = ["Instagram", "Instagram"];
        } else if (this.type === "facebook") {
            this.icon = "connect-img fa fa-facebook";
            this.title = ["Facebook", "Facebook"];
        } else if (this.type === "email") {
            this.icon = "connect-img fa fa-at";
            this.title = ["Email", "Email"];
        } else if (this.type === "address") {
            this.icon = "connect-img fa fa-address";
            this.title = ["Address", "Address"];
        } else if (this.type === "skype") {
            this.icon = "connect-img fa fa-skype";
            this.title = ["Skype", "Skype"];
        } else if (this.type === "bitbucket") {
            this.icon = "connect-img fa fa-bitbucket";
            this.title = ["Bitbucket", "Bitbucket"];
        } else if (this.type === "youtube") {
            this.icon = "connect-img fa fa-youtube";
            this.title = ["Youtube", "Youtube"];
        }
    }
}