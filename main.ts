import { JQeuryHelper } from "./jquery-helper";
class Main {
    public component() {
        console.info("init component");
        JQeuryHelper.getByTag("h1").css("color", "blue");
        const element = (document as any).createElement('div');

        // Lodash, currently included via a script, is required for this line to work
        element.innerHTML = "Welkom wereld!";

        return element;
    }

    public clickMe() {
        const button = JQeuryHelper.getById("click-me");
        console.info(button);
        button.on("click", (e: Event) => this.doSomething());
    }

    private doSomething() {
        console.info("I am executed!")
    }
}

new Main().component();
new Main().clickMe();

console.info("This a test");