import React from "react";
import './Product.css';

const Product = () => {
    let projects = [
        {
            id: 1,
            title: 'Meeting Room Booking Web App',
            description: "The Impact Metrics for this project encompass several critical aspects that define its success and effectiveness.Efficiency stands at the forefront, denoting the project's ability to streamline processes, reduce turnaround times, and ensure tasks are completed swiftly and accurately. Resource utilization is another vital metric, emphasizing the optimal allocation of resources such as manpower, technology, and finances to maximize productivity and minimize waste.User satisfaction plays a pivotal role, measuring the project's success in meeting user needs and expectations, enhancing the overall user experience, and fostering customer loyalty. Additionally, Booking data analysis delves into the project's utilization of data analytics to gain insights into booking patterns, customer preferences, market trends, and competitor strategies, guiding strategic decision- making and enhancing business intelligence.Market adoption evaluates the project's acceptance and penetration within the target market, assessing its competitiveness, market share, and customer acquisition strategies. Furthermore, Calendar Integration with Google Calendar API underscores the project's ability to facilitate seamless scheduling, event management, and task coordination, enhancing organizational efficiency, collaboration, and time management practices.Overall, these impact metrics serve as essential benchmarks to monitor and evaluate the project's performance, effectiveness, and alignment with strategic objectives, ultimately driving continuous improvement, innovation, and business growth.",
            tech: 'Technologies Used : React JS (Typescript), CSS, Postgresql, Java (Spring Boot), Figma (UI Design)'
        },
    {
        id:2,
        title:'Meeting Room Booking Web App',
        description:"Social media platforms serve as digital hubs for users globally, enabling seamless content sharing, interactive engagement, and extensive networking opportunities. Through user profiles, newsfeeds, messaging functionalities, and targeted advertising capabilities, these platforms create vibrant online communities where individuals and businesses can connect, share information, and build relationships. Whether it's staying updated with friends and family, discovering new interests, or promoting products and services, social media platforms play a pivotal role in fostering digital connectivity and facilitating meaningful interactions across diverse audiences.",
        tech:'Technologies Used : React JS (Typescript), CSS, Postgresql, Java (Spring Boot).'    
        },
    {
        id:3,
        title:'Meeting Room Booking Web App',
        description:"The development of a blockchain-based voting system aims to revolutionize traditional voting processes by leveraging Ethereum blockchain technology. This innovative approach simplifies the voting system by allowing voters to cast their votes securely and conveniently from remote locations. Through blockchain integration, the system ensures high levels of security and transparency, mitigating risks associated with tampering or fraud. Each vote is securely recorded on the blockchain, creating an immutable and transparent ledger that enhances trust in the voting process. By harnessing the power of blockchain, this voting system not only streamlines the voting experience for voters but also enhances the integrity and credibility of the entire voting system.",
        tech:'Technologies Used : Ethereum Blockchain, Danga, Mysql.'
            
        }
    ]
return (
    <>
        <div className="projects">
            <h1>My Projects</h1>
        </div>
        <div className="project-title">
                {projects.map(project => {
                    return <div className="cards" key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.tech}
                    </div>
                })}
            </div>
    </>
)
}

export default Product