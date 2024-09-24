const toggleButton = document.getElementById("language-toggle");

// Creating a dictionary object
var dict = {
  en: {
    summaryTitle: `Summary`,
    summaryContent: `
        Full-Stack web developer, I am passionate about crafting efficient
        web-based applications. I am a quick learner with a proactive mindset, I
        am always eager to explore and adopt cutting-edge technologies and
        architectures.`,
    educationTitle: `Education`,
    educationContent: `
        <div style="display: flex; justify-content: space-between">
          <h3>
            Beni-Suef University -
            <small>( Bachelor of Computers and Artificial Intelligence )</small>
          </h3>
          <p>Sep.2018 - May.2022</p>
        </div>
        <p><strong>Major:</strong> (IT)</p>
        <p><strong>Total Grade:</strong> (Very Good)</p>`,
    experienceTitle: `Experience`,
    experienceContent: `
        <div class="experience-item">
          <div style="display: flex; justify-content: space-between">
            <h3>
              Store Business Center - Freelance
              <small>( Storage Management Application )</small>
            </h3>
            <p>Sep.2024 - Okt.2024</p>
          </div>
          <ul>
            <li>
              Developed a responsive, pixel-perfect user interface using Angular
              and Angular Material, resulting in a 30% increase in user
              engagement by ensuring a seamless user experience across devices.
            </li>
            <li>
              Implemented a robust backend API using .NET, which enhanced the
              application's reliability and reduced downtime by 15%.
            </li>
            <li>
              Improved overall user satisfaction, as reflected in user feedback
              surveys, due to optimized performance and smoother navigation
              experiences.
            </li>
          </ul>
        </div>
      </div>`,
    projectsTitle: `Projects`,
    projectsContent: `

    <ul>
    <li style="margin-left: 10px">
      <div style="display: flex; justify-content: space-between">
        <h4>
          <a href="#" style="text-decoration: none">
            <strong style="color: var(--main-color)">Chat App</strong>
          </a>
        </h4>
        <p>Sep.2024</p>
      </div>
      <ul style="list-style-type: circle; padding-left: 30px">
        <li style="margin-left: 10px">
          Built a basket system and implemented caching using Redis and
          Docker, resulting in a 50% reduction in server load and a 30%
          improvement in response times during high-traffic periods.
        </li>
        <li style="margin-left: 10px">
          Developed advanced pagination, sorting, searching, and filtering
          features using Angular and Bootstrap, leading to a 40% reduction
          in page load times and improving data management efficiency.
        </li>
      </ul>
    </li>
    <li style="margin-left: 10px">
      <div style="display: flex; justify-content: space-between">
        <h4>
          <strong style="color: var(--main-color)">FreshCart</strong>
        </h4>
        <p>Sep.2024</p>
      </div>
      <ul style="list-style-type: circle; padding-left: 30px">
        <li style="margin-left: 10px">
          <a href="https://beshoywill.github.io/angular-ecommerce/"
            ><strong>Angular Version</strong></a
          >
          - An Angular-based eCommerce website | Angular, Angular Material
          , RxJS, Typescript.
        </li>
        <li style="margin-left: 10px">
          <a href="https://link-to-react-version"
            ><strong>React Version</strong></a
          >
          - A React-based eCommerce website | ReactJS, Redux Toolkit,
          Axios, JavaScript, ES6+.
        </li>
      </ul>
    </li>
  </ul>
`,
    skillsTitle: `Skills`,
    skillsContent: `
        <ul>
            <li><strong>Languages: </strong>C#, JavaScript, Typescript, SVG</li>
            <li>
              <strong>Libraries: </strong>React, Redux Toolkit, Redux, HTML5
              Canvas, Tailwind CSS, Bootstrap
            </li>
            <li><strong>Frameworks: </strong>Angular, ASP.NET Core</li>
            <li><strong>Databases: </strong>SQL Server, SQLite</li>
            <li>
              <strong>Technologies: </strong>Git, Github, Docker, Kubernetes
            </li>
          </ul>`,
    languagesTitle: `Languages`,
    languagesContent: `
          <ul>
            <li><strong>English:</strong> B2</li>
            <li><strong>German:</strong> A2</li>
            <li><strong>Arabic:</strong> Native</li>
          </ul>
      `,
  },
  de: {
    summaryTitle: `Zusammenfassung`,
    summaryContent: `Als Full-Stack-Webentwickler bin ich leidenschaftlich daran interessiert, effiziente webbasierte Anwendungen zu entwickeln. Ich lerne schnell und habe eine proaktive Einstellung; ich bin stets bestrebt, neueste Technologien und Architekturen zu erkunden und anzunehmen.`,
    educationTitle: `Bildung`,
    educationContent: `
        <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3>
          Beni-Suef Universität - 
          <small>(Bachelor in Computer und Künstlicher Intelligenz)</small>
        </h3>
        <p>Sep. 2018 - Mai. 2022</p>
        </div>
        <p><strong>Hauptfach:</strong> (IT)</p>
        <p><strong>Gesamtnote:</strong> Sehr gut</p>`,
    experienceTitle: `Erfahrung`,
    experienceContent: `
        <div class="experience-item">
        <div style="display: flex; justify-content: space-between">
          <h3>
            Store Business Center - Freiberuflich
            <small>(Lagerverwaltungsanwendung)</small>
          </h3>
          <p>Sep.2024 - Okt.2024</p>
        </div>
        <ul>
          <li>
          Entwickelte eine responsive, pixelgenaue Benutzeroberfläche mit Angular und Angular Material, was das Benutzerengagement um 30% steigerte.
          </li>
          <li>
            Implementierte eine robuste Backend-API mit .NET, die die Zuverlässigkeit der Anwendung verbesserte und die Ausfallzeiten um 15% reduzierte.
          </li>
        </ul>
      </div>
`,
    projectsTitle: `Projekte`,
    projectsContent: `
       
       <ul>
  <li style="margin-left: 10px">
    <div style="display: flex; justify-content: space-between">
      <h4>
        <a href="#" style="text-decoration: none">
          <strong style="color: var(--main-color)">Chat-App</strong>
        </a>
      </h4>
      <p>Sep. 2024</p>
    </div>
    <ul style="list-style-type: circle; padding-left: 30px">
      <li style="margin-left: 10px">
        Entwickelte ein Warenkorbsystem und implementierte Caching mit Redis und Docker, was die Serverlast um 50% und die Antwortzeiten um 30% verringerte.
      </li>
      <li style="margin-left: 10px">
        Implementierte Paginierung, Sortierung, Suche und Filterung mit Angular und Bootstrap, was die Seitenladezeiten um 40% verkürzte und die Datenverwaltung effizienter machte.
      </li>
    </ul>
  </li>
  <li style="margin-left: 10px">
    <div style="display: flex; justify-content: space-between">
      <h4>
        <strong style="color: var(--main-color)">FreshCart</strong>
      </h4>
      <p>Sep. 2024</p>
    </div>
    <ul style="list-style-type: circle; padding-left: 30px">
      <li style="margin-left: 10px">
        <a href="https://beshoywill.github.io/angular-ecommerce/"
          ><strong>Angular Version</strong></a
        >
        – Eine E-Commerce-Website basierend auf Angular | Angular, Angular Material, RxJS, Typescript.
      </li>
      <li style="margin-left: 10px">
        <a href="https://link-to-react-version"
          ><strong>React Version</strong></a
        >
        – Eine E-Commerce-Website basierend auf React | ReactJS, Redux Toolkit, Axios, JavaScript, ES6+.
      </li>
    </ul>
  </li>
</ul>`,
    skillsTitle: `Fähigkeiten`,
    skillsContent: `
        <ul>
        <li><strong>Programmiersprachen: </strong>C#, JavaScript, TypeScript, SVG</li>
        <li>
          <strong>Bibliotheken: </strong>React, Redux Toolkit, Redux, HTML5 Canvas, Tailwind CSS, Bootstrap
        </li>
        <li><strong>Frameworks: </strong>Angular, ASP.NET Core</li>
        <li><strong>Datenbanken: </strong>SQL Server, SQLite</li>
        <li>
          <strong>Technologien: </strong>Git, GitHub, Docker, Kubernetes
        </li>
      </ul>
`,
    languagesTitle: `Sprachen`,
    languagesContent: `
    <ul>
    <li><strong>Englisch:</strong> B2</li>
    <li><strong>Deutsch:</strong> A2</li>
    <li><strong>Arabisch:</strong> Muttersprache</li>
    </ul>
`,
  },
};

let translator;
let headingLine = document.querySelectorAll("h2");
const body = document.querySelector("body");
// Changing the language from the language toggle button
toggleButton.addEventListener("change", () => {
  if (toggleButton.checked) {
    console.log("Selected Language: DE"); // German
    translator = new EOTranslator(dict, "de");
    // Translating the element
    translator.translateElement(summaryTitle);
    translator.translateElement(summaryContent);
    translator.translateElement(educationTitle);
    translator.translateElement(educationContent);
    translator.translateElement(experienceTitle);
    translator.translateElement(experienceContent);
    translator.translateElement(projectsTitle);
    translator.translateElement(projectsContent);
    translator.translateElement(skillsTitle);
    translator.translateElement(skillsContent);
    translator.translateElement(languagesTitle);
    translator.translateElement(languagesContent);

    body.classList.add("de");

    for (let h of headingLine) {
      h.classList.add("change");
    }
  } else {
    console.log("Selected Language: EN"); // English
    translator = new EOTranslator(dict, "en");

    // Translating the element
    translator.translateElement(summaryTitle);
    translator.translateElement(summaryContent);
    translator.translateElement(educationTitle);
    translator.translateElement(educationContent);
    translator.translateElement(experienceTitle);
    translator.translateElement(experienceContent);
    translator.translateElement(projectsTitle);
    translator.translateElement(projectsContent);
    translator.translateElement(skillsTitle);
    translator.translateElement(skillsContent);
    translator.translateElement(languagesTitle);
    translator.translateElement(languagesContent);

    body.classList.remove("de");

    for (let h of headingLine) {
      h.classList.remove("change");
    }
  }
});
