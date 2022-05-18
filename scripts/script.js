/**
 * PuppyPalace page component comprised of
 * HeroBanner
 * Title
 * ArticleList (and 3 Articles)
 * Button (x2 - one highlighted)
*/
class PuppyPalace {
    articles = [
        "I'm baby truffaut bitters skateboard pickled freegan brooklyn +1 unicorn coloring book art party fam godard tumblr. Tofu lomo loko farm-to-table jean shorts gentrify tumblr plaid praxis VHS salvia. Yes plz DSA umami street art semiotics.",
        'lo-fi selvage tote bag sustainable bitters cardigan VHS portland master cleanse plaid. Bitters air plant gastropub helvetica, marfa distillery poke.',
        'PBR&B copper mug semiotics blog iPhone poutine umami butcher. Mustache aesthetic swag lomo, actually af kombucha waistcoat taiyaki blog selvage.'
    ];

    constructor() {
        this.heroBanner = new HeroBanner("/assets/images/dog-banner.jpg", "5 puppies looking sad, needing a home");
        this.title = new Title("Welcome to the Puppy Palace");
        this.articleList = new ArticleList(this.articles);
        this.signUpButton = new Button("Sign up 😎", true);
        this.loginButton = new Button("Log in", false);
    }

    render() {
        return `
            ${this.heroBanner.render()}
            ${this.title.render()}
            ${this.articleList.render()}
            ${this.signUpButton.render()}
            ${this.loginButton.render()}
        `;
    }
}

class Button{
    constructor(text, isHighlighted) {
        this.text = text;
        this.isHighlighted = isHighlighted;
    }

    render() {
        let className = "";
        if (this.isHighlighted) {
            className = "button--highlighted";
        }

        return `
            <a href="#" class="button ${className}">${this.text}</button>
        `;
    }
}

class Article {
    constructor(text) {
        this.text = text;
    }

    render() {
        return `
            <p>${this.text}</p>
        `;
    }
}

class ArticleList {
    constructor(articles) {
        this.articles = articles;
    }

    render() {
        let articlesHtml = '';

        this.articles.forEach(articleText => {
            const article = new Article(articleText);

            articlesHtml += article.render();
        });
        
        articlesHtml += "";

        return articlesHtml;
    }
}


class Title {
    constructor(text) {
        this.text = text;
    }
    
    render() {
        return `
            <h1 class="title">${this.text}</h1>
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