var bio = {
  "name" : "Lucas Leite",
  "role" : "Estudante",
  "contacts" : {
    "mobile" : "(27)99811-5086",
    "email" : "lbl.lucasleite@gmail.com",
    "github" : "lucasleite01",
    "twitter" : "none",
    "location" : "Cariacica-ES, Brasil"
  },
  "welcomeMessage" : "Welcome to my resume!",
  "skills" : [
    "Linguagem C (+++)", "Algorithms (+++)", "MySQL (+++)", "Java (++)", "SQL (++)", "Microsoft Windows (++)", "Linux", "C++", "PHP"
  ],
  "biopic" : "images/profile.jpg",
  "displayContacts" : function(contact, id) { /*resolvi fazer essa função pois utilizo esse trecho de código duas vezes na display do objeto bio*/
    Object.getOwnPropertyNames(contact).forEach(function(val) {
      $(id).append(HTMLcontactGeneric.replace("%contact%", val).replace("%data%", contact[val]));
    });
  },
  "display" : function() {
    var header = $("#header");

    header.prepend(HTMLheaderRole.replace("%data%", this.role));
    header.prepend(HTMLheaderName.replace("%data%", this.name));
    header.append(HTMLbioPic.replace("%data%", this.biopic));
    header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    this.displayContacts(this.contacts, "#topContacts");

    header.append(HTMLskillsStart);
    this.skills.forEach(function(val) {
      $("#skills").append(HTMLskills.replace("%data%", val));
    });

    this.displayContacts(this.contacts, "#footerContacts");
  }
};

var education = {
  "schools" : [
    {
      "name" : "EEEF Luiz Baptista",
      "location" : "Serra-ES, Brasil",
      "degree" : "Ensino Fundamental",
      "majors" : ["Português", "Matemática", "Ciências", "História", "Geografia"],
      "dates" : 2008,
      "url" : "http://example.com"
    },
    {
      "name" : "Escola Estadual de Ensino Médio Arnulpho Mattos",
      "location" : "Vitória-ES, Brasil",
      "degree" : "Ensino Médio",
      "majors" : ["Português", "Matemática", "Química", "Física", "História", "Geografia", "Sociologia", "Filosofia"],
      "dates" : 2012,
      "url" : "http://example.com"
    },
    {
      "name" : "SENAI - Centro de Educação Profissional Jones dos Santos Neves",
      "location" : "Serra-ES, Brasil",
      "degree" : "Mantenedor de Infra-estrutura de Redes de Dados",
      "majors" : ["Redes de Computadores"],
      "dates" : 2012,
      "url" : "http://www.senai-es.org.br/"
    },
    {
      "name" : "Universidade Federal do Espírito Santo",
      "location" : "Vitória-ES, Brasil",
      "degree" : "Engenheiro de Computação",
      "majors" : ["Engenharia Elétrica", "Ciência da Computação"],
      "dates" : "2013 - até o momento",
      "url" : "http://www.ufes.br/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Nanodegree",
      "school" : "Udacity",
      "dates" : 2017,
      "url" : "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display" : function() {
    var education = $("#education");
    education.append(HTMLschoolStart);
    var educationEntry = $(".education-entry");

    this.schools.forEach(function(school) {
      educationEntry.append(HTMLschoolName.replace("%data%", school.name).replace("%url%", school.url));
      educationEntry.append(HTMLschoolDates.replace("%data%", school.dates));
      educationEntry.append(HTMLschoolLocation.replace("%data%", school.location));
      educationEntry.append(HTMLschoolDegree.replace("%data%", school.degree));

      school.majors.forEach(function(val) {
        educationEntry.append(HTMLschoolMajor.replace("%data%", val));
      });

    });

    education.append(HTMLonlineClasses);
    education.append(HTMLschoolStart);
    var educationOnline = educationEntry.next().next();
    this.onlineCourses.forEach(function(course) {
      educationOnline.append(HTMLonlineTitle.replace("%data%", course.title));
      educationOnline.append(HTMLonlineSchool.replace("%data%", course.school));
      educationOnline.append(HTMLonlineDates.replace("%data%", course.dates));
      educationOnline.append(HTMLonlineURL.replace("%data%", course.url).replace("%url%", course.url));
    });
  }
};

var work = {
  "jobs" : [ /*adicionei o campo URL aos jobs. Na parte de Detalhes do Projeto não é informado que não se pode adicionar campos. Hahaha*/
    {
      "employer" : "Introcomp",
      "title" : "Professor",
      "location" : "Vitória-ES, Brasil",
      "dates" : "agosto de 2003 - o momento",
      "description" : "Atuação como docente, abordando conteúdos como Lógica de Programação, Arquitetura de Computadores, Conceitos Básicos da Linguagem C, Estrutura de Dados. Além de algoritmos de ordenação, busca em grafos, como preparação dos alunos para a Olimpíada Brasileira de Informática.",
      "url" : "http://introcomp.ufes.br/"
    },
    {
      "employer" : "Departamento de Informática e Processamento da Pró-reitoria de Graduação da UFES",
      "title" : "Bolsista",
      "location" : "Vitória-ES, Brasil",
      "dates" : "março de 2015 - julho de 2016",
      "description" : "Suporte aos colaboradores da Prograd no uso de recursos de informática e aos alunos da UFES em ferramentas digitais destinadas a estes.",
      "url" : "http://www.prograd.ufes.br/"
    },
    {
      "employer" : "Núcleo de Tecnologia da Informação da Universidade Federal do Espírito Santo (NTI - UFES)",
      "title" : "Bolsista",
      "location" : "Vitória-ES, Brasil",
      "dates" : "junho de 2014 - março de 2015",
      "description" : "Atuação na área de desenvolvimento do núcleo, na implementação e manutenção de sistemas específicos para o desenvolvimento de processos internos.",
      "url" : "http://www.nti.ufes.br/"
    }
  ],
  "display" : function() {
    $("#workExperience").append(HTMLworkStart);
    var workEntry = $(".work-entry");

    this.jobs.forEach(function(job) {
      workEntry.append(HTMLworkEmployer.replace("%data%", job.employer).replace("%url%", job.url));
      workEntry.append(HTMLworkTitle.replace("%data%", job.title));
      workEntry.append(HTMLworkDates.replace("%data%", job.dates));
      workEntry.append(HTMLworkLocation.replace("%data%", job.location));
      workEntry.append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Campeão do Topcom 11",
      "dates" : "junho de 2013",
      "description" : "Torneio de programação de computadores promovido pelo PET Engenharia de Computação. O Topcom proporciona a oportunidade de testar a habilidade em programação, além de promover a criatividade e o espírito de equipe. Cada equipe é composta por três alunos e dispõe de um computador para a resolução dos problemas propostos.",
      "images" : [
        "http://www.petengcomp.url.ph/photos/eventos/2013/topcom11/48.jpg",
        "http://www.petengcomp.url.ph/photos/eventos/2013/topcom11/62.jpg",
        "http://www.petengcomp.url.ph/photos/eventos/2013/topcom11/67.jpg"
      ]
    },
    {
      "title" : "Vice-campeão do I Torneio de Robótica da Universidade Federal do Espírito Santo",
      "dates" : "maio de 2013",
      "description" : "O Torneio de Robótica da UFES – TRUFES é um evento que visa difundir a prática de robótica em âmbito nacional, oferecer uma oportunidade para os estudantes aprimorarem e aplicarem os conhecimentos adquiridos nas áreas de programação e sistemas embarcados, divulgar competições tradicionais de robótica (CBR – Competição Brasileira de Robótica e LARC-Latin American Robotics Competition) entre os estudantes de engenharia e divulgar o trabalho da ERUS dentro da universidade.<br>O torneio é organizado pela equipe de robótica da UFES – ERUS – com apoio dos alunos do PET da Engenharia de Computação, dos Departamentos de Informática e Engenharia Elétrica e apoiado pela UFES.",
      "images" : [
        "images/trufes-1.jpg",
        "images/trufes-2.jpg",
        "images/trufes-3.jpg"
      ]
    }
  ],
  "display" : function() {
    $("#projects").append(HTMLprojectStart);
    var projectEntry = $(".project-entry");

    this.projects.forEach(function(project) {
      projectEntry.append(HTMLprojectTitle.replace("%data%", project.title));
      projectEntry.append(HTMLprojectDates.replace("%data%", project.dates));
      projectEntry.append(HTMLprojectDescription.replace("%data%", project.description));

      project.images.forEach(function(val) {
        projectEntry.append(HTMLprojectImage.replace("%data%", val));
      });

    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
