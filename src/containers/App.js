import React, {Component} from 'react';
import './App.scss';
import Common from "../components/Common/Common";

class App extends Component {
    s3Url = 'https://elder-patten-ferreira-resume.s3-us-west-2.amazonaws.com/';
    
    state = {
        header: {
            name: 'Elder Patten Ferreira',
            title: 'Software Developer',
            profileImageUrl: this.s3Url + 'assets/images/elder.jpg',
            metadata: [
                {
                    class: 'mb-2',
                    icon: 'far fa-envelope fa-fw mr-2',
                    transform: 'grow-3',
                    value: 'elderpattenferreira@gmail.com'
                },
                {
                    icon: 'fas fa-mobile-alt fa-fw mr-2',
                    transform: 'grow-6',
                    value: '(406) 598-9201'
                }
            ],
            socialMedia: [
                {
                    class: 'fab fa-linkedin-in fa-fw',
                    url: 'linkedin.com/in/elder-patten-ferreira'
                },
                {
                    class: 'fab fa-github-alt fa-fw',
                    url: 'github.com/elderferreiras'
                },
                {
                    class: 'fab fa-youtube fa-fw',
                    url: 'channel.thenextlevel.dev'
                }

            ]
        },
        body: {
            careerSummary: [
                'I currently work as a software developer in Billings, MT, where I create solutions in PHP and JavaScript to enhance WebBuy, an application for online car buying. On top of that, I work on designing and developing small systems using Lumen/PHP and Angular/JavaScript/TypeScript. I am always looking to expand my knowledge, to find new problems to solve, and to get to the next level by dedicating a bit of time everyday to improve my craft.'
            ],
            workExperiences: [
                {
                    title: 'Lead Software Developer',
                    company: 'Webgrain Inc.',
                    companyUrl: 'https://webgrain.net/',
                    beginDate: '2017',
                    endDate: 'Present',
                    description: [
                        'Develops systems in PHP and JavaScript by working with clients to create software that can maximize performance and maintainability, by mentoring development team members on understanding the business rules, and by making high-level design choices on database design and refactoring.'
                    ],
                    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Lumen', 'Angular', 'TypeScript', 'CSS', 'SASS']
                },
                {
                    title: 'Software Developer',
                    company: 'Acception Tecnologia',
                    companyUrl: 'https://www.linkedin.com/company/acception-tecnologia/',
                    beginDate: '2015',
                    endDate: '2017',
                    description: [
                        'Created solutions in Groovy/Grails to support financial operations of the second largest cosmetic company in Brazil, O Boticário; by writing software to meet our clients’ needs and help our developing team on addressing those needs.',
                        'Developed a system in Groovy/Grails for a NGO to manage and monitor rural developing projects by selecting four new interns, mentoring them through the software process, managing time, and meeting with our client routinely to deliver new features.'
                    ],
                    technologies: ['Groovy', 'Grails', 'Java', 'Javascript', 'jQuery', 'PostgreSQL']
                },
                {
                    title: 'Software Engineer',
                    subtitle: 'Intern',
                    company: 'Lexis Nexis Risk Solutions',
                    companyUrl: 'risk.lexisnexis.com',
                    beginDate: '2014',
                    endDate: '2014',
                    description: [
                        'Decreased the processing time of the algorithm in charge of treating repeated data in the eCrash system by 85% by replacing a PHP script for a solution in Java that used parallel computing.'
                    ],
                    technologies: ['Java', 'BlockingQueue', 'Thread', 'MySQL']
                }
            ],
            researchExperiences: [
                {
                    title: 'Research Assistant',
                    subtitle: 'Undergraduate Student',
                    company: 'SPIDER',
                    companyUrl: 'http://spider.ufpa.br/',
                    beginDate: '2011',
                    endDate: '2013',
                    description: [
                        {
                            description: 'Provided open-source solutions in JAVA for small software development companies by developing the tool Spider-PE for software process execution, and a module for software process evaluation in the software process modeling tool Spider-PM using Java for desktop.',
                            details: [
                                {
                                    title: 'Spider-PE: Enacment Tool',
                                    download: 'https://drive.google.com/file/d/0B42oav4rfJMaTHA4bXAzU0JNckE/view',
                                    source: 'https://github.com/elderferreiras/Spider-PE',
                                    more: {
                                        title: 'Tutorial',
                                        link: 'https://www.youtube.com/watch?v=Cs4P69oYp2c'
                                    }
                                }
                            ]
                        },
                        {
                            description: 'Published five academic papers in workshops and magazines, and co-wrote chapter 23 on software process enactment in the book "Abordagens para Apoio à Implementação da Melhoria do Processo de Software," published by the University of Pernambuco (UFPE).',
                            details: [
                                {
                                    title: 'Spider-PE: Uma Ferramenta de Apoio à Execução de Processos de Software Aderente ao CMMI-DEV e MR-MPS (2012)',
                                    download: 'http://people.softwarelivre.org/wsl/2012/0003/5.pdf',
                                    more: {
                                        title: 'Workshop de Software Livre',
                                        link: 'http://wsl.softwarelivre.org/2012/'
                                    }
                                },
                                {
                                    title: 'Spider-PE: Uma Ferramenta de Apoio à Implementação da Capacidade do MR-MPS Nível F e CMMI-DEV Nível 2 (2012)',
                                    download: 'http://www.lbd.dcc.ufmg.br/colecoes/wamps/2012/016.pdf',
                                    more: {
                                        title: 'Workshop Anual do MPS.BR',
                                        link: 'http://www.softex.br/mpsbr/wamps/'
                                    }
                                },
                                {
                                    title: 'xSPIDER_ML: Proposal of a Software Process Enactment Language Compliant with SPEM 2.0 (2012)',
                                    download: 'http://file.scirp.org/pdf/JSEA20120600001_65459752.pdf',
                                    more: {
                                        title: 'Journal of Software Engineering and Applications',
                                        link: 'http://www.scirp.org/journal/jsea/',
                                    }
                                },
                                {
                                    title: 'A Comparative Analysis between BPMN and SPEM Modeling Standards in the Software Process Context (2012)',
                                    download: 'http://file.scirp.org/pdf/JSEA20120500004_49614105.pdf',
                                    more: {
                                        title: 'Journal of Software Engineering and Applications',
                                        link: 'http://www.scirp.org/journal/jsea/',
                                    }
                                },
                                {
                                    title: 'Spider-PE: A Set of Support Tools to Software Process Enactment (2014)',
                                    download: 'http://www.thinkmind.org/download.php?articleid=icsea_2014_20_10_10134',
                                    more: {
                                        title: 'International Conference on Software Engineering Advances',
                                        link: 'https://www.iaria.org/conferences2014/ICSEA14.html'
                                    }
                                },
                                {
                                    title: 'Abordagens para Apoio à Implementação da Melhoria do Processo de Software (2016)',
                                    download: 'http://www.loja.edufpe.com.br/portal/spring/livro/detalhe/436',
                                    more: {
                                        title: 'Universidade Federal de Pernambuco (UFPE)',
                                        link: 'https://www.ufpe.br/ufpenova/'
                                    },
                                }
                            ]
                        }
                    ],
                    technologies: ['Java', 'MySQL', 'Hibernate', 'Swing', 'WindowBuilder']
                }
            ],
            personalProjects: [
                {
                    title: 'Elder Patten Ferreira\'s Resume',
                    company: '',
                    beginDate: '2019',
                    endDate: '2019',

                    description: [
                        {
                            description: 'Converted the resume template designed by Xiaoying Riley at 3rd Wave Media into a React application by creating components to reuse code.',
                            details: [
                                {
                                    source: 'https://github.com/elderferreiras/resume'
                                }
                            ]
                        },
                    ],
                    technologies: ['React', 'JavaScript', 'React Bootstrap', 'CSS/SASS', 'AWS Amplify', 'Amazon S3']
                }
            ],
            volunteerExperiences: [
                {
                    title: 'English Teacher, Photographer, Multimedia Producer',
                    company: 'AMAPEM',
                    companyUrl: 'https://www.facebook.com/amapem/',
                    beginDate: '2015',
                    endDate: '2016',
                    description: [
                        'While volunteering for the Women\'s Association of the Marudá Fishing Area (AMAPEM), engaged in social issues in the city of Marudá by providing free English classes to at-risk youth and producing multimedia material to highlight the social and political needs of women and children in the region.'
                    ],
                    media: [
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_3.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_4.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_5.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_2.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_6.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/amapem/amapem_1.jpg'
                        }
                    ],
                    technologies: []
                },
                {
                    title: 'Photographer',
                    company: 'LASIG',
                    companyUrl: 'http://lasig.ufpa.br/',
                    beginDate: '2016',
                    endDate: '2016',
                    description: [
                        'While partnering with the Information and Georeferencing System Laboratory(LASIG) at the University of Pará, visited eight quilombos in rural Pará, which are historical Brazilian communities founded by people of African origin, and registered the culture, music, dance, sports and everyday issues faced by the quilombolas through photographing. A collection of the best photographs will be included in a book on the Quilombolas communities to be published by the Universidade Federal do Pará (UFPA).'
                    ],
                    media: [
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_1.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_2.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_3.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_4.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_5.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_6.jpg'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/lasig/salvaterra_7.jpg'
                        }
                    ],
                    technologies: []
                },
                {
                    title: 'Content Creator',
                    company: 'Art House Cinema & Pub',
                    companyUrl: 'http://arthousebillings.com/',
                    beginDate: '2017',
                    endDate: '2018',
                    description: [
                        'Supports the local independent art house by writing weekly reviews for the featured movies. The reviews can be found on the Art House Cinema & Pub\'s blog: http://arthousebillings.com/author/elderferreirass/. On top of that, helps with non-profit events hosted at the cinema by managing orders behind the bar.'
                    ],

                    media: [
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/arthouse/arthouse_1.png'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/arthouse/arthouse_2.png'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/arthouse/arthouse_3.png'
                        },
                        {
                            url: this.s3Url + 'assets/images/experience/volunteeer/arthouse/arthouse_4.png'
                        }
                    ],
                    technologies: []
                },
                {
                    title: 'Ticket Counter Register',
                    company: 'MINT - Montana International Film Festival',
                    companyUrl: 'https://www.mintfilmfestival.org/',
                    beginDate: '2018',
                    endDate: '2018',
                    description: [
                        'Helped with the very first Montana International Film Festival by selling tickets and merchandise at one of the event\'s venues.'
                    ],
                    media:[],
                    technologies: []
                }
            ]
        },
        sections: {
            skills:
                [
                    {
                        type: 'Frontend',
                        skills: [
                            {name: 'JavaScript', percent: 100},
                            {name: 'Node.js', percent: 100},
                            {name: 'Angular', percent: 100},
                            {name: 'React', percent: 90},
                            {name: 'HTML/CSS/SASS', percent: 100}
                        ]
                    },
                    {
                        type: 'Backend',
                        skills: [
                            {name: 'Java', percent: 100},
                            {name: 'PHP', percent: 100},
                            {name: 'Groovy/Grails', percent: 90},
                            {name: 'Python', percent: 70}
                        ]
                    },
                    {
                        type: 'Others',
                        skills: [
                            'Agile Methodologies',
                            'Design Patterns',
                            'Programming',
                            'Problem Solving',
                            'Leadership',
                            'SQL',
                            'MySQL',
                            'PostgreSQL',
                            'Relational Database Design',
                            'EER diagrams',
                            'UML',
                            'Bootstrap',
                            'Materialize',
                            'Lumen',
                        ]
                    }
                ],
            education: [
                {
                    degree: 'Bachelor of Science in Computer Science',
                    university: 'Universidade Federal do Pará',
                    beginDate: '2010',
                    endDate: '2016'
                },
                {
                    degree: 'Computer Science (Non-degree International Student)',
                    university: 'State University of New York, Geneseo',
                    beginDate: '2014',
                    endDate: '2014'
                },
                {
                    degree: 'Computer Science (Non-degree International Student)',
                    university: 'University of Montana',
                    beginDate: '2014',
                    endDate: '2014'
                },
                {
                    degree: 'English as a Second Language',
                    university: 'Genesee Community College',
                    beginDate: '2013',
                    endDate: '2013'
                },
            ],
            awards: [
                {
                    title: 'BSMP scholarship recipient 2014',
                    description: 'The Brazil Scientific Mobility Program (BSMP) was part of the Brazilian government\'s larger initiative to grant Brazilian university students the opportunity to study abroad at the world\'s best colleges and universities.'
                },
                {
                    title: 'Third Place at Best Paper Award - 13th International Free Software Workshop',
                    description: 'Award desc goes here, ultricies nec, pellentesque.'
                }
            ],
            languages: [
                {
                    language: 'English',
                    proficiency: 'Bilingual Proficiency'
                },
                {
                    language: 'Portuguese',
                    proficiency: 'Native'
                },
                {
                    language: 'Spanish',
                    proficiency: 'Advanced'
                },
                {
                    language: 'French',
                    proficiency: 'Elementary'
                }
            ],
            interests: [
                {
                    interest: 'Photography'
                },
                {
                    interest: 'Cinema'
                },
                {
                    interest: 'Reading'
                }
            ]

        }
    };

    render() {
        return (
            <Common state={this.state}/>
        );
    }
}

export default App;
