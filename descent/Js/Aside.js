const AsideChevronDown = document.getElementById("Aside_ChevronDown");
const AsideChevronUp = document.getElementById("Aside_ChevronUp");
const heroList = document.getElementById("heroList");



herosFind = []


function HeroesToFind() {
    for( hero of heroes ){
        if(!herosFind.includes(hero.Name)){
            herosFind.push(hero.Name)
        }
        console.log(herosFind)
    }
}

HeroesToFind()

AsideChevronDown.addEventListener("click", ShowheroList);

function ShowheroList() {
    heroList.classList.remove("hidden");
    AsideChevronUp.classList.remove("hidden");
    AsideChevronDown.classList.add("hidden");
    
    for( hero of heroes ){
        var oneHero = document.createElement("a")
        var heroName = hero.Name
        heroList.appendChild(oneHero)
        oneHero.classList.add("heroLink")
        oneHero.innerText = heroName
        oneHero.href = "heros/"+ heroName +".html"
}}

AsideChevronUp.addEventListener("click", NoShowheroList);

function NoShowheroList(){
    heroList.classList.add("hidden");
    AsideChevronDown.classList.remove("hidden");
    AsideChevronUp.classList.add("hidden");
    while (heroList.firstChild) {
        heroList.removeChild(heroList.firstChild);
    }
}