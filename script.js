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
    <img src="${PROJECTS[index].image}" alt="${PROJECTS[index].imageAlt}" aria-controls="project" class="projectImage image${PROJECTS[index]+1}">
    <h3 class="projectTitle">${PROJECTS[index].title}</h3>
    <div class="projectDescription">
        <p>${PROJECTS[index].description}</p>
        <p class="projectLinks"><a href="${PROJECTS[index].code}" target="_blank" class="projectLinks">CODE</a><span class="projectBullet"><img src="./images/gearlogo.svg" alt="gear logo" class="logoBreak"><a href="${PROJECTS[index].demo}" target="_blank" class="projectLinks">DEMO</a>
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


//HANDLERS

function handleStart() {
    $(".portfolioContainer").append(generateProjectHtml());
    $(".copyright").html(generateCopyright())
    handleDescription();
}


function handleDescription() {
    $(".projectDescription").hide();
    $(".project").click(function() {
        event.preventDefault();
        $(this).find(".projectLanguages").toggle();
        $(this).find(".projectDescription").slideToggle("slow", "swing");
    })
}
        
 

// function handleDescription() {
//     $(".projectDescription").hide();
//     let descriptionVisible = false;
//     if (descriptionVisible === false) {
//             $(".projectImage").click(function() {
//             event.preventDefault();
//             $(this).parent().find(".projectLanguages").hide();
//             $(this).parent().find(".projectDescription").slideDown(1000, "swing", function() {
//             descriptionVisible = true;
//             })
//         })
//     }
//     else {
//         $('body').click(function() {
//             $(".projectDescription").slideUp(1000, "swing");
//             $(".projectLanguages").show();
//             descriptionVisible = false;
//         })
//     }
// }

function handleBio() {
    $(".expandedBio").hide();
    $(".bioText").click(function() {
        event.preventDefault();
        $(".expandBio").toggle();
        $(".expandedBio").toggle();
    });
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
    handleHamburger();
    handleBio();
    buttonScroll();
})
