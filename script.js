const PROJECTS = [
  //1
  {
    title: "v • able",
    image: "./images/vablescreenshot.jpg",
    imageAlt: "v-able Website Screenshot",
    languages: "PostgreSQL | Express | React | Node",
    description:
      "v•able is a platform for connecting experienced volunteers to non-profit organizations that have a specific need for skilled labor or professional services and are having a hard time finding them on the open market. This project was built in three weeks and includes scratch built design and css. Also features JSON web tokens and bCrypt for authentication and authorization.",
    code: "https://github.com/JoshuaAYoung/v-able-client",
    demo: "https://vable.dev",
    class: "projectImage",
  },
  //2
  {
    title: "npmm",
    image: "./images/npmmscreenshot.jpg",
    imageAlt: "npmm Website Screenshot",
    languages: "PostgreSQL | Express | React | Node | Redux",
    description:
      "Node Package Manager Manager (npmm) is an app designed to help users keep track of their favorite npm packages. With the addition of the Node CLI package, npmm allows a user to seamlessly integrate their collections into their project’s workflow. This project was built in three weeks by a team of five (including myself). The design and CSS were scratch built.",
    code: "https://github.com/JoshuaAYoung/npmm-client",
    demo: "https://npmm.dev",
    class: "projectImage",
  },
  //3
  {
    title: "PUBcrawlHUB",
    image: "./images/pchscreenshot.jpg",
    imageAlt: "Pub Crawl Hub Website Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "PUBcrawlHUB is an app designed to help users plan a bar crawl and map their path from one destination to the next. It takes a location as input and makes fetch requests to the OpenBrewery api to find bars in the user's area. It then takes the latitude and longitude of each bar and queries the MapBox api to populate the map plugin with the location of each bar with the ability to get directions between them. The design and CSS were scratch built.",
    code: "https://github.com/JoshuaAYoung/PUBCrawlHub",
    demo: "https://pubcrawlhub.dev",
    class: "projectImage",
  },
  //4
  {
    title: "Portfolio",
    image: "./images/portscreenshot.jpg",
    imageAlt: "Josh's Portfolio Website Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "Well, this is kind of meta... Afterall, though, this website is a project in and of itself. Built in two weeks for a very discerning client, this portfolio app showcases web development projects. The site features scratch built design and CSS.",
    code: "https://github.com/JoshuaAYoung/PUBCrawlHub",
    demo: "https://joshyoung.net",
    class: "projectImage",
  },
  //5
  {
    title: "Harry Potter and the Quiz of Ages",
    image: "./images/hpscreenshot.jpg",
    imageAlt: "Harry Potter Quiz App Screenshot",
    languages: "jQuery | JavaScript | HTML | CSS",
    description:
      "This quiz app uses a view that's refreshed using jQuery event handlers to replace content on the page. A json-like object handles the data and keeps track of the user's progress. Design and CSS were scratch built.",
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
        <p class="projectLinks"><a href="${PROJECTS[index].code}" target="_blank" class="projectLinks">CODE</a><span class="projectBullet"><img src="./images/gearlogo.svg" alt="gear logo" class="logoBreak"></span><a href="${PROJECTS[index].demo}" target="_blank" class="projectLinks">DEMO</a>
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

//Need empty divs in order to make the flexbox work properly - number of empty divs depends on the width of the window (responsive) and the number of items in the portfolio
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

//CODE DEMO - functions to support the form that demos the json-esque data array

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
  let formLanguages = DEMO.languages || "Akkadian | Sanskrit | Old Norse";
  console.log("cat descr", DEMO.descriptionCat);
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

//HANDLERS

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
    if ($(".expandedBio").hasClass("hidden") && $(window).width() < 980) {
      event.preventDefault();
      $(".expandBio").css("display", "none");
      $(".expandedBio").css("display", "initial");
      moveHelloUp();
      $(".expandedBio").removeClass("hidden");
    } else if (
      !$(".expandedBio").hasClass("hidden") &&
      $(window).width() < 980
    ) {
      event.preventDefault();
      $(".expandedBio").css("display", "none");
      $(".expandBio").css("display", "initial");
      moveHelloDown();
      $(".expandedBio").addClass("hidden");
    }
  });
}

function handleHamburger() {
  $(".cross").hide();
  $(".navMenuMobile").hide();
  $(".hamburger").click(function () {
    $(".navMenuMobile").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $(".cross").click(function () {
    $(".navMenuMobile").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
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
});
