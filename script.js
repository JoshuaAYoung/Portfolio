const PROJECTS = [
  // 1
  {
    title: "v • able",
    image: "./images/vablescreenshot.png",
    imageAlt: "v-able Website Screenshot",
    languages: "PostgreSQL | Express | React | Node",
    description:
      "v•able is a platform for connecting experienced volunteers to non-profit organizations. A lot of non-profits have a specific need for skilled labor or professional services and have a hard time finding volunteers on the open market. The backbone of the v•able app is the Opportunity Board - a job board that's specifically catered to skilled volunteers.",
    code: "https://github.com/JoshuaAYoung/v-able-client",
    demo: "https://vable.dev",
    class: "projectImage",
  },
  // 2
  {
    title: "npmm",
    image: "./images/npmmscreenshot.png",
    imageAlt: "npmm Website Screenshot",
    languages: "PostgreSQL | Express | React | Node | Redux",
    description:
      "Node Package Manager Manager (npmm) is an app designed to help developers keep track of their favorite npm (node.js) packages. Npmm also includes a companion command line tool that syncs with the npmm database. It allows users to add a collection of packages to a project they're working on, or save packages from an existing package.json file to a new collection.",
    code: "https://github.com/JoshuaAYoung/npmm-client",
    demo: "https://npmm.dev",
    class: "projectImage",
  },
  // 3
  {
    title: "PUBcrawlHUB",
    image: "./images/pchscreenshot.png",
    imageAlt: "Pub Crawl Hub Website Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "PUBcrawlHUB makes it easy to plan out a bar crawl. Enter the desired location, and PUBcrawlHUB shows you a list of bars in the area. Sort the bars in the order you want to visit them, remove the ones you don't want and then follow the turn by turn directions to get from one bar to the next.",
    code: "https://github.com/JoshuaAYoung/PUBCrawlHub",
    demo: "https://pubcrawlhub.dev",
    class: "projectImage",
  },
  // 4
  {
    title: "Portfolio",
    image: "./images/portscreenshot.png",
    imageAlt: "Josh's Portfolio Website Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "I know, pretty meta, right? Afterall, though, this website is a project in and of itself. Built in two weeks for a very discerning client, this portfolio app showcases web development projects. The site features scratch built design and CSS.",
    code: "https://github.com/JoshuaAYoung/Portfolio",
    demo: "https://joshyoung.net",
    class: "projectImage",
  },
  // 5
  {
    title: "Harry Potter and the Quiz of Ages",
    image: "./images/hpscreenshot.png",
    imageAlt: "Harry Potter Quiz App Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "Harry Potter and the Quiz of Ages is the ultimate Harry Potter quiz app. It keeps track of your progress and your score. When you're finished, the app reveals your rank, from Muggle to Auror, respectively.",
    code: "https://github.com/JoshuaAYoung/QuizApp",
    demo: "https://joshyoung.net/hpquizofages/",
    class: "projectImage",
  },
];

const DEMO = {
  title: "",
  image: "",
  languages: "",
  descriptionInput: "",
  descriptionCat: "",
};

////// HELPER FUNCTIONS ///////

function buttonScroll() {
  mybutton = document.getElementById("scrollTop");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
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
  return `Copyright © ${year} Josh Young`;
}

function generateProject(index) {
  return `<div class="project" id="project">
    <div class="projectImageContainer"><img src="${PROJECTS[index].image}" alt="${PROJECTS[index].imageAlt}" aria-controls="project" class="${PROJECTS[index].class}"></div>
    <h3 class="projectTitle">${PROJECTS[index].title}</h3>
    <div class="projectDescription">
        <p class="descriptionText">${PROJECTS[index].description}</p>
        <p class="projectLinkContainer"><a href="${PROJECTS[index].code}" target="_blank" class="projectLinks" rel="noopener">CODE</a><span class="projectBullet"><img src="./images/hexagon.svg" alt="gear logo" class="logoBreak"></span><a href="${PROJECTS[index].demo}" target="_blank" class="projectLinks" rel="noopener">DEMO</a>
    </div>
    <p class="projectLanguages">${PROJECTS[index].languages}</p>
</div>`;
}

function generateProjectHtml() {
  let projectHtml = "";
  for (i = 0; i < PROJECTS.length; i++) {
    projectHtml += generateProject(i);
  }
  return projectHtml;
}

// Need empty divs in order to make the flexbox work properly - number of empty divs depends on the width of the window (responsive) and the number of items in the portfolio
function generateEmpty() {
  let projectContainer = $(".projectsContainer");
  projectContainer.empty;
  if (PROJECTS.length % 2 != 0) {
    projectContainer.append('<div class="project fake800"></div>');
  }
  if (PROJECTS.length % 3 == 1) {
    projectContainer.append('<div class="project fake980"></div>');
    projectContainer.append('<div class="project fake980"></div>');
  } else if (PROJECTS.length % 3 == 2) {
    projectContainer.append('<div class="project fake980"></div>');
  }
  if (PROJECTS.length % 4 == 1) {
    projectContainer.append('<div class="project fake1200"></div>');
    projectContainer.append('<div class="project fake1200"></div>');
    projectContainer.append('<div class="project fake1200"></div>');
  } else if (PROJECTS.length % 4 == 2) {
    projectContainer.append('<div class="project fake1200"></div>');
    projectContainer.append('<div class="project fake1200"></div>');
  } else if (PROJECTS.length % 4 == 3) {
    projectContainer.append('<div class="project fake1200"></div>');
  }
}

// CODE DEMO - functions to support the form that demos the json-esque data array
// Get a random fact about cats to populate the demo project
function getFact() {
  let url = "https://catfact.ninja/fact?max_length=140";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((responseJson) => (DEMO.descriptionCat = responseJson.fact))
    .catch((err) => {
      alert(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  let catImage = responseJson[0].url;
  let formTitle = DEMO.title || "Categorically Purrfect";
  let formLink = DEMO.image || catImage;
  let formLanguages = DEMO.languages || "Meow | Hiss | Yowl | Purr";
  let formDescription = DEMO.descriptionInput || DEMO.descriptionCat;
  generateDemoProject(formTitle, formLink, formLanguages, formDescription);
}

function getImage() {
  let url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(getFact())
    .then((responseJson) => displayResults(responseJson))
    .catch((err) => {
      alert(`Something went wrong: ${err.message}`);
    });
}

function generateDemoProject(title, link, languages, description) {
  PROJECTS.push({
    title: title,
    image: link,
    imageAlt: "Probably an image of a cat",
    languages: languages,
    description: description,
    code: "https://github.com/JoshuaAYoung",
    demo: "index.html",
    class: "projectImage demoProjectImage",
  });
  $(".projectsContainer").empty();
  pushProjects();
  generateEmpty();
  handleDescription();
}

// HANDLERS

function getInput() {
  $(".portfolioDemo").on("submit", function (event) {
    event.preventDefault();
    DEMO.title = $(this).find('input[name="projecttitle"]').val();
    DEMO.image = $(this).find('input[name="imagelink"]').val();
    DEMO.languages = $(this).find('input[name="languagesused"]').val();
    DEMO.descriptionInput = $(this).find('input[name="description"]').val();
    getImage();
  });
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
    } else {
      $(this).find(".projectDescription").slideUp("slow", "swing");
      $(this).find(".projectLanguages").show();
    }
  });
  $(document).click(function () {
    if ($(".projectDescription").hasClass("shown")) {
      $(".projectDescription").slideUp("slow", "swing");
      $(".projectLanguages").show();
      $(".projectDescription").removeClass("shown");
    }
  });
}

function handleBio() {
  $(".bioText").click(function () {
    if ($(".expandedBio").hasClass("hidden") && $(window).width() < 800) {
      event.preventDefault();
      $(".expandBio").css("display", "none");
      $(".expandedBio").css("display", "initial");
      $(".expandedBio").removeClass("hidden");
    } else if (
      !$(".expandedBio").hasClass("hidden") &&
      $(window).width() < 800
    ) {
      event.preventDefault();
      $(".expandedBio").css("display", "none");
      $(".expandBio").css("display", "initial");
      $(".expandedBio").addClass("hidden");
    }
  });
}

function handleHamburger() {
  $(".navMenuMobile").hide();
  $(".burgerButton").click(function () {
    $(".burgerButton").toggleClass("burgerOpen");
    $(".navMenuMobile").slideToggle("slow");
  });
}

$(function () {
  handleStart();
  pushProjects();
  handleHamburger();
  handleBio();
  buttonScroll();
  handleDescription();
  getInput();
  getFact();
});
