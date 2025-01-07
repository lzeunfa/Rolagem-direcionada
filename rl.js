document.querySelectorAll(`a[href^="#"]`)/*serve para encontrar todos os links que começam com #, que são os de navegação*/.forEach(anchor/*âncora*/ => {
    anchor.addEventListener(`click`, function (e)/*diz para o navegador fazer algo quando clicar em um link*/ {
        e.preventDefault();//impede de fazer a ação padrão
        const targetId = this.getAttribute(`href`);
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});