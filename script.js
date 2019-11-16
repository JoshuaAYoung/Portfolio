const PROJECTS = [
        //1
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        },
        //2
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        },
        //3
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        },
        //4
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        },
        //5
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        },
        //6
        {
            title: "Harry Potter and the Quiz of Ages",
            image: "./images/onescreenshot.jpg",
            imageAlt: "Harry Potter Quiz App Screenshot",
            languages: "HTML | CSS | JavaScript | jQuery",
            description: "is a quiz app built in HTML, CSS, JavaScript, and jQuery. The single page of HTML is refreshed using jQuery event handlers to replace content on the page. A multidimensional array handles the data and keeps track of the users progress.",
            code: "https://github.com/JoshuaAYoung/QuizApp",
            demo: "https://joshuaayoung.github.io/QuizApp/"
        }
    ]

//RANDOM

function moveHelloUp() {
    if ($(window).width() >= 800) {
        $(".titleTextContainer").css("top", "-10px");
    }
}

function moveHelloDown() {
    if ($(window).width() >= 800) {
        $(".titleTextContainer").css("top", "");
    }
}

function buttonScroll() {
    mybutton = document.getElementById("scrollTop");
    window.onscroll = function() {scrollFunction()};
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
    <div class="projectImageContainer"><img src="${PROJECTS[index].image}" alt="${PROJECTS[index].imageAlt}" aria-controls="project" class="projectImage image${PROJECTS[index]+1}"></div>
    <h3 class="projectTitle">${PROJECTS[index].title}</h3>
    <div class="projectDescription">
        <p>${PROJECTS[index].description}</p>
        <p class="projectLinks"><a href="${PROJECTS[index].code}" target="_blank" class="projectLinks">CODE</a><span class="projectBullet"><img src="./images/gearlogo.svg" alt="gear logo" class="logoBreak"></span><a href="${PROJECTS[index].demo}" target="_blank" class="projectLinks">DEMO</a>
    </div>
    <p class="projectLanguages">${PROJECTS[index].languages}</p>
    <hr class="projectLine">
</div>`}

function generateProjectHtml() {
    let projectHtml = "";
    for (i=0; i < PROJECTS.length; i++) {
        projectHtml += generateProject(i);
    };
    return projectHtml;
}

function generateEmpty() {
    $(".projectsContainer").empty;
    if (PROJECTS.length % 2 != 0) {
        $(".projectsContainer").append('<div class="project fake800"></div>');
    };
    if (PROJECTS.length % 3 == 1) {
        $(".projectsContainer").append('<div class="project fake980"></div>');
        $(".projectsContainer").append('<div class="project fake980"></div>');
    }
    else if (PROJECTS.length % 3 == 2) {
        $(".projectsContainer").append('<div class="project fake980"></div>');
    };
    if (PROJECTS.length % 4 == 1) {
        $(".projectsContainer").append('<div class="project fake1200"></div>');
        $(".projectsContainer").append('<div class="project fake1200"></div>');
        $(".projectsContainer").append('<div class="project fake1200"></div>');
    }
    else if (PROJECTS.length % 4 == 2) {
        $(".projectsContainer").append('<div class="project fake1200"></div>');
        $(".projectsContainer").append('<div class="project fake1200"></div>');
    }
    else if (PROJECTS.length % 4 == 3) {
        $(".projectsContainer").append('<div class="project fake1200"></div>');
    };
}


//CODE DEMO

// function displayResults (responseJson) {
//     let catImage = responseJson[0].url;
// }

// function getImage() {
//     let url="https://api.thecatapi.com/v1/images/search";
//     fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => getInput(responseJson))
//     .catch(err => {
//       console.log(`Something went wrong: ${err.message}`);
//     });
// }

function generateDemoProject(title, link, languages, description) {   
    PROJECTS.push(
        {title: title,
        image: link,
        imageAlt: "Probably an image of a cat",
        languages: languages,
        description: description,
        code: "https://github.com/JoshuaAYoung",
        demo: "index.html"
        }
    );
}


//HANDLERS

// function getInput(responseJson) {
function getInput() {
    // getImage();
    let catImage = "https://loremflickr.com/400/325/";
    // let catImage = responseJson[0].url;
    $('.portfolioDemo').on('submit', function(event){
        event.preventDefault();
        let formTitle = $(this).find('input[name="projecttitle"]').val() || "A Cool Project";
        let formLink = $(this).find('input[name="imagelink"]').val() || catImage;
        let formLanguages = $(this).find('input[name="languagesused"]').val() || "Akkadian | Sanskrit | Old Norse"
        let formDescription = $(this).find('input[name="description"]').val() || "This was by far the hardest project I ever worked on. It changed who I am. I walked into the flames and what came out of the other side was unrecognizable. Like a phoenix. Rising from the ashes of this project's code permanently altered.";
        generateDemoProject(formTitle, formLink, formLanguages, formDescription);
        $(".projectsContainer").empty();
        pushProjects();
        generateEmpty();
})
}

function handleStart() {
    $(".copyright").html(generateCopyright())
    handleDescription();
    generateEmpty();
}

function pushProjects() {
    $(".projectsContainer").append(generateProjectHtml());
}

function handleDescription() {
    $(".projectDescription").hide();
    $(".project").click(function(event) {
        if (!$(this).find(".projectDescription").hasClass("shown")) {
            event.stopPropagation();
            event.preventDefault();
            $(this).find(".projectLanguages").hide();
            $(this).find(".projectDescription").slideDown("slow", "swing");
            $(this).find(".projectDescription").addClass("shown");
        }
        else {
            $(this).find(".projectDescription").slideUp("slow", "swing");
            $(this).find(".projectLanguages").show("slow");
        }
    })
    $(document).click(function() { 
        if ($(".projectDescription").hasClass("shown")) {
            $(".projectDescription").slideUp("slow", "swing");
            $(".projectLanguages").show();
            $(".projectDescription").removeClass("shown");
        }
    })
}

function handleBio() {
    $(".bioText").click(function() {
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
    $(".hamburger").click(function() {
        $(".navMenuMobile").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    })
    $(".cross").click(function() {
        $(".navMenuMobile").slideToggle("slow", function() {
        $(".cross").hide();
        $(".hamburger").show();
        });
        })
}

$(function(){
    handleStart();
    pushProjects();
    handleHamburger();
    handleBio();
    buttonScroll();
    getInput();
})
