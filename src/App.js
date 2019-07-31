import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import Body from "./Body/Body";

class App extends Component {
    state = {
        header: {
            name: 'Elder Patten Ferreira',
            title: 'Software Developer',
            profileImageUrl: 'http://cdn.elderf.com/assets/images/elder.jpg',
            metadata: [
                {
                    class: 'mb-2',
                    icon: 'far fa-envelope fa-fw mr-2',
                    transform: 'grow-3',
                    value: 'steve.Doe@website.com'
                },
                {
                    icon: 'fas fa-mobile-alt fa-fw mr-2',
                    transform: 'grow-6',
                    value: '0123 456 78900'
                }
            ],
            socialMedia: [
                {
                    class: 'fab fa-linkedin-in fa-fw',
                    url: 'linkedin.com/in/stevedoe'
                },
                {
                    class: 'fab fa-github-alt fa-fw',
                    url: 'github.com/username'
                },
                {
                    class: 'fab fa-codepen fa-fw',
                    url: 'codepen.io/username/'
                },
                {
                    class: 'fas fa-globe',
                    url: 'yourwebsite.com'
                }

            ]
        },
        body: {
            careerSummary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.',
            workExperiences: [
                {
                    title: 'Lead Developer',
                    company: 'Startup Hub',
                    beginDate: '2018',
                    endDate: 'Present',
                    description: 'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.',
                    technologies: ['Angular', 'Python', 'jQuery', 'Webpack', 'HTML/SASS', 'PostgresSQL']
                },
                {
                    title: 'Senior Software Developer',
                    company: 'Google',
                    beginDate: '2014',
                    endDate: '2018',
                    description: 'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.',
                    technologies: ['React', 'Redux', 'Django', 'Webpack', 'HTML/SASS', 'MySQL']
                },
                {
                    title: 'Web Developer',
                    subtitle: 'Intern',
                    company: 'Amazon',
                    beginDate: '2011',
                    endDate: '2012',
                    description: 'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.',
                    technologies: ['Ruby on Rails', 'jQuery', 'HTML/LESS', 'MongoDB']
                }
            ]
        },
        sections: {
            skills:
                [
                    {
                        type: 'Frontend',
                        skills: [
                            {name: 'Angular', percent: 98},
                            {name: 'React', percent: 94},
                            {name: 'JavaScript', percent: 96},
                            {name: 'Node.js', percent: 92},
                            {name: 'HTML/CSS/SASS/LESS', percent: 96}
                        ]
                    },
                    {
                        type: 'Backend',
                        skills: [
                            {name: 'Python/Django', percent: 95},
                            {name: 'Ruby/Rails', percent: 92},
                            {name: 'PHP', percent: 86},
                            {name: 'WordPress/Shopify', percent: 82}
                        ]
                    },
                    {
                        type: 'Others',
                        skills: ['DevOps', 'Code Review', 'Git', 'Unit Testing', 'Wireframing', 'Sketch', 'Balsamiq', 'WordPress', 'Shopify']
                    }
                ],
            education: [
                {
                    degree: 'MSc in Computer Science',
                    university: 'University College London',
                    beginDate: '2010',
                    endDate: '2011'
                },
                {
                    degree: 'BSc Maths and Physics',
                    university: 'Imperial College London',
                    beginDate: '2007',
                    endDate: '2010'
                },
            ]

        }
    };

    render() {
        return (
            <article className="resume-wrapper text-center position-relative">
                <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                    <Header header={this.state.header}/>
                    <Body body={this.state.body} sections={this.state.sections}/>
                </div>
            </article>
        );
    }
}

export default App;
