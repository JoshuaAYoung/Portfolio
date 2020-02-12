const PROJECTS = [
    //1
    {
        title: "Harry Potter and the Quiz of Ages",
        image: "./images/onescreenshot.jpg",
        imageAlt: "Harry Potter Quiz App Screenshot",
        languages: "HTML | CSS | JavaScript | jQuery",
        description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
        code: "https://github.com/JoshuaAYoung/QuizApp",
        demo: "https://joshyoung.net/hpquizofages/",
        class: "projectImage"
    },
    //2
    {
        title: "PUBcrawlHUB",
        image: "./images/twoscreenshot.jpg",
        imageAlt: "Pub Crawl Hub Website Screenshot",
        languages: "HTML | CSS | JavaScript | jQuery",
        description: "is an app that takes a city as input and makes calls to the OpenBrewery api to find bars. It then takes those bars and makes another call to the MapBox api and populates the MapBox map plugin on the site based on the results. The Sortable jQuery plugin provides users with an easy way to sort the list of bars to map their final pub crawl route.",
        code: "https://github.com/JoshuaAYoung/PUBCrawlHub",
        demo: "https://joshyoung.net/pubcrawlhub",
        class: "projectImage"
    }
]

const demoData = {
    title: "",
    image: "",
    languages: "",
    description: ""
}

////// HELPER FUNCTIONS ///////
//moves the giant hello up a little responsively
function moveHelloUp() {
    if ($(window).width() >= 780 && $(window).width() < 960) {
        $(".titleTextContainer").css("top", "-70px");
    }
}

function moveHelloDown() {
    if ($(window).width() >= 780 && $(window).width() < 960) {
        $(".titleTextContainer").css("top", "");
    }
}

function buttonScroll() {
    mybutton = document.getElementById("scrollTop");
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// GENERATORS

function generateCopyright() {
    let d = new Date();
    let year = d.getFullYear();
    return `Copyright © ${year} Josh Young`
}

function generateProject(index) {
    return `<div class="project" id="project">
    <div class="projectImageContainer"><img src="${PROJECTS[index].image}" alt="${PROJECTS[index].imageAlt}" aria-controls="project" class="${PROJECTS[index].class}"></div>
    <h3 class="projectTitle">${PROJECTS[index].title}</h3>
    <div class="projectDescription">
        <p>${PROJECTS[index].description}</p>
        <p class="projectLinks"><a href="${PROJECTS[index].code}" target="_blank" class="projectLinks">CODE</a><span class="projectBullet"><img src="./images/gearlogo.svg" alt="gear logo" class="logoBreak"></span><a href="${PROJECTS[index].demo}" target="_blank" class="projectLinks">DEMO</a>
    </div>
    <p class="projectLanguages">${PROJECTS[index].languages}</p>
</div>`}

function generateProjectHtml() {
    let projectHtml = "";
    for (i = 0; i < PROJECTS.length; i++) {
        projectHtml += generateProject(i);
    };
    return projectHtml;
}

//Need empty divs in order to make the flexbox work properly - number of empty divs depends on the width of the window (responsive) and the number of items in the portfolio
function generateEmpty() {
    let projectContainer = $(".projectsContainer");
    projectContainer.empty;
    if (PROJECTS.length % 2 != 0) {
        projectContainer.append('<div class="project fake800"></div>');
    };
    if (PROJECTS.length % 3 == 1) {
        projectContainer.append('<div class="project fake980"></div>');
        projectContainer.append('<div class="project fake980"></div>');
    }
    else if (PROJECTS.length % 3 == 2) {
        projectContainer.append('<div class="project fake980"></div>');
    };
    if (PROJECTS.length % 4 == 1) {
        projectContainer.append('<div class="project fake1200"></div>');
        projectContainer.append('<div class="project fake1200"></div>');
        projectContainer.append('<div class="project fake1200"></div>');
    }
    else if (PROJECTS.length % 4 == 2) {
        projectContainer.append('<div class="project fake1200"></div>');
        projectContainer.append('<div class="project fake1200"></div>');
    }
    else if (PROJECTS.length % 4 == 3) {
        projectContainer.append('<div class="project fake1200"></div>');
    };
}

//CODE DEMO - functions to support the form that demo the json-esque data array

function displayResults(responseJson) {
    let catImage = responseJson[0].url;
    let formTitle = demoData.title || "A Cool Project";
    let formLink = demoData.image || catImage;
    let formLanguages = demoData.languages || "Akkadian | Sanskrit | Old Norse";
    let formDescription = demoData.description || "This was by far the hardest project I ever worked on. It changed who I am. I walked into the flames and what came out of the other side was unrecognizable. Like a phoenix. Rising from the ashes of this project's code permanently altered.";
    generateDemoProject(formTitle, formLink, formLanguages, formDescription);
}

function getImage() {
    let url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
            alert(`Something went wrong: ${err.message}`);
        });
}

function generateDemoProject(title, link, languages, description) {
    PROJECTS.push(
        {
            title: title,
            image: link,
            imageAlt: "Probably an image of a cat",
            languages: languages,
            description: description,
            code: "https://github.com/JoshuaAYoung",
            demo: "index.html",
            class: "projectImage demoProjectImage"
        }
    )
    $(".projectsContainer").empty();
    pushProjects();
    generateEmpty();
    handleDescription();
}


//HANDLERS

function getInput() {
    $('.portfolioDemo').on('submit', function (event) {
        event.preventDefault();
        demoData.title = $(this).find('input[name="projecttitle"]').val();
        demoData.image = $(this).find('input[name="imagelink"]').val();
        demoData.languages = $(this).find('input[name="languagesused"]').val()
        demoData.description = $(this).find('input[name="description"]').val();
        getImage();
    })
}

function handleStart() {
    $(".copyright").html(generateCopyright());
    generateEmpty();
}

function pushProjects() {
    $(".projectsContainer").prepend(generateProjectHtml());
}

function handleDescription() {
    $(".projectDescription").hide();
    $(".project").click(function (event) {
        if (!$(this).find(".projectDescription").hasClass("shown")) {
            event.stopPropagation();
            event.preventDefault();
            $(this).find(".projectLanguages").hide();
            $(this).find(".projectDescription").slideDown("slow", "swing");
            $(this).find(".projectDescription").addClass("shown");
        }
        else {
            $(this).find(".projectDescription").slideUp("slow", "swing");
            $(this).find(".projectLanguages").show();
        }
    })
    $(document).click(function () {
        if ($(".projectDescription").hasClass("shown")) {
            $(".projectDescription").slideUp("slow", "swing");
            $(".projectLanguages").show();
            $(".projectDescription").removeClass("shown");
        }
    })
}

function handleBio() {
    $(".bioText").click(function () {
        if ($(".expandedBio").hasClass("hidden") && $(window).width() < 980) {
            event.preventDefault();
            $(".expandBio").css("display", "none");
            $(".expandedBio").css("display", "initial");
            moveHelloUp();
            $(".expandedBio").removeClass("hidden");
        }
        else if (!$(".expandedBio").hasClass("hidden") && $(window).width() < 980) {
            event.preventDefault();
            $(".expandedBio").css("display", "none");
            $(".expandBio").css("display", "initial");
            moveHelloDown();
            $(".expandedBio").addClass("hidden");
        }
    })
}

function handleHamburger() {
    $(".cross").hide();
    $(".navMenuMobile").hide();
    $(".hamburger").click(function () {
        $(".navMenuMobile").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    })
    $(".cross").click(function () {
        $(".navMenuMobile").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    })
}

$(function () {
    handleStart();
    pushProjects();
    handleHamburger();
    handleBio();
    buttonScroll();
    handleDescription();
    getInput();
})
