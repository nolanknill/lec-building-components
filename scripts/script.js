class PuppyPalace {
    // what components make up ou
    /*
    HeroBanner (src, alt)
    Title (text)
    ArticleList ([]Article)
        Article (Article)
    Button (text, isHighlighted)
        Button
        Button--highlighted
    */
    constructor() {
        this.heroBanner = new HeroBanner("/assets/images/dog-banner.jpg", "5 puppies looking sad, needing a home");
        this.title = new Title("Welcome to the Puppy Palace");
        // this.articleList
        // this.signUpButton
        // this.loginButton
    }

    render() {
        return `
            ${this.heroBanner.render()}
            ${this.title.render()}
        `;
    }
}

class Title {
    constructor(text) {
        this.text = text;
    }
    
    render() {
        return `
            <h1>${this.text}</h1>
        `;
    }
}

class HeroBanner {
    constructor(imageSrc, imageAlt) {
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
    }

    // method that returns HTML, so that we can
    // later append it to the DOM!
    render() {
        return `
            <header class="hero-banner">
                <img 
                    class="hero-banner__image" 
                    src="${this.imageSrc}"
                    alt="${this.imageAlt}" />
            </header>
        `;
    }
}

const appEl = document.getElementById("app");
const puppyPalace = new PuppyPalace();

appEl.innerHTML = puppyPalace.render();