const Data = {
    instruction: 'Enter command or type \'help\' to see list of commands.',

    help: `Enter a command here and something will be output.
  Valid options are:
    help - this help text
    clear - clear the screen
    about - everything about me
    experience - expirience and job titles
    contacts - my contacts and links`,

    about: `I am solution architect and senior software developer
living in Vilnius, Lithuania. I am working at Telia
Global Services.

People know me as a person who is highly attentive to
detail, dedicated, passionate, a fast learner and
creative.

Enter what you want to know more. 
  Valid options: 
    soft-skills - my soft skills
    tech-skills - my tech skills
    work - me at work`,

    softSkills: `Ownership - feeling responsible to complete tasks on 
time with the best outcome.

Support and coach - teammates, newcomers by sharing
knowledge.

Team focus - making everything I can to make good
atmosphere in the team. Do something that
helps other team members to do their
daily work.

Creativity - having lot of ideas and suggestions
to improve team way of working, development flow,
UX design and system architecture solutions/ideas.

Fast learning - understanding things quick.

Collaborative - interactions with team members, other
teams, other managers, business analysts, architects`,

    techSkills: `I have wide knowledge of development technologies and
tools. I have lot of experiance working with front-end
and back-end technologies/frameworks. In example -
Angular, React, Spring, Kafka, REST, etc. I have good
knoledge about SQL and NOSQL databases, such an Oracle,
PostgreSQL, MongoDB, Firebase. I know how to setup
system CI/CD tools, such a Jenkins, Kubernetes or
GitHub Actions. Using wide knowledge of technologies,
I am suggesting to use frameworks or architectural
solutions that can increase system stability and
performance.

When talking about coding standards, best practices
and clean code principles I can say that I am
addictive to that. I always promoting best practices
and clean code designs that I've learned from
Conferences and video trainings.`,

    work: `+-----------------------------------------------------+
| MOTIVATES ME             | DEMOTIVATES ME           |
+-------------------------------------------------------
| -Friendly and helpful    | -Disrespectful people    |
|  teammates with          | -Not responsible people  |
|  experienced background  | -Underestimation of what |
| -Close collaboration with|  I do                    |
|  product owners business | -Monotony                |
|  analysts and managers   | -Team members who's doing| 
| -Availability to suggest |  things inconsistently   |
|  new ideas and           | -The need of overtime    |
|  improvements            | -Working with very old   |
| -Teammates who can teach |  technologies            |
|  and wants to learn      | -Strictness of things    |
| -Continues learning      |  should be done          |
| -Tasks variety           | -Unclear final product   |
| -Consistent adherence to |                          |
|  workflow                |                          |
| -Successful deliveries   |                          |
| -Evaluation of what I do,|                          |
|  my competence and       |                          |
|  experience (verbal and  |                          |
|  monitary)               |                          |
+--------------------------+--------------------------+`,

    contacts: `Enter what you want to get. QR-code will be generated.
  Valid options:
    linkedin
    github
    stackoverflow`,

    experience: `I have wide development experiance which I gathered
working in different areas such a banking, health care and 
telecommunications.

Places where I was working:
2024-08 - now    : Telia Global Services;
                   Solution Architect
2022-05 - 2024-08: Telia Global Services;
                   Senior Developer (FS)
2022-03 - 2022-05: Accenture; 
                   Senior Developer (BE)
2018-07 - 2022-03: SEB Global Services;
                   Developer (FS)
2017-08 - 2018-07: Dekbera;
                   Developer (BE)
2016-09 - 2017-08: BS/2;
                   Junior Developer
2015-08 - 2015-10: Skylink;
                   Trainee`,

    qrLinkedin: `
********************************************************
********************************************************
***              ****  ********  **  **              ***
***  **********  **    **        ******  **********  ***
***  **      **  ****      ************  **      **  ***
***  **      **  **    **  **  **    **  **      **  ***
***  **      **  ******  **  ****    **  **      **  ***
***  **********  **  **  ****      ****  **********  ***
***              **  **  **  **  **  **              ***
***************************  ******  *******************
***          **          **        **  **  **  **  *****
*****  **  **  **      **********      **    ******  ***
*****    ******  ****  **          **    **  **  *******
***    ****    ******      **  ****    *****************
***    **    **        **  **  **  ****        **    ***
***  **  ****  ****  **  **  **  **          ***********
***  **    **        ********  ******    **  **      ***
***  **    **  ********  **  **  ****  **********    ***
***  **          ****  ****  ****              ****  ***
*******************    ************  ******  ******  ***
***              **  **      **  **  **  **  **      ***
***  **********  ******    ****  **  ******    *********
***  **      **  **    **      ****            *********
***  **      **  **  **  **  **      **  **  ****    ***
***  **      **  **      **  **  **********  **  **  ***
***  **********  **  ******    ****            **  *****
***              **    ****  **    ************      ***
********************************************************
********************************************************`,

    qrGitHub: `
********************************************************
********************************************************
***              **    ********  **  **              ***
***  **********  ************  **  ****  **********  ***
***  **      **  **  ****      **    **  **      **  ***
***  **      **  **    **  **  **    **  **      **  ***
***  **      **  **        ****  **  **  **      **  ***
***  **********  ****  ****  **  **  **  **********  ***
***              **  **  **  **  **  **              ***
*********************  **  ****      *******************
***        ****  **  **********  **    ****      **  ***
*******        ******  **********      **    ******  ***
*****    **          ********  **************        ***
***      **  ****  ******    ****  **      **    **  ***
*****  **        **    **  **  **  ****        **    ***
*******  **  **********    ******    ****  **  **    ***
*****      **    ******  **  ****      **      **  *****
***  ****  **  ******  ****  **  ****  **********    ***
*******    ****  **  **    ****  **          ****  *****
*******************      **    **    ******      *******
***              ****        **  **  **  **  **      ***
***  **********  ****    **  ****    ******  ****    ***
***  **      **  ******    ****              **  **  ***
***  **      **  **  ******  **      **  **  ****    ***
***  **      **  **  ****  **  **  **    ****      *****
***  **********  **      ****  **  **  ****  **      ***
***              **  **  ******    ************      ***
********************************************************
********************************************************`,

    qrStackOverflow: `
********************************************************
********************************************************
***              **    ********  **  **              ***
***  **********  ************  **  ****  **********  ***
***  **      **  **  ****      **    **  **      **  ***
***  **      **  **    **  **  **    **  **      **  ***
***  **      **  **        ****  **  **  **      **  ***
***  **********  ****  ****  **  **  **  **********  ***
***              **  **  **  **  **  **              ***
*********************  **  ****      *******************
***        ****  **  **********  **    ****      **  ***
*******        ****    **********      **    ******  ***
*******  ******      ********  **************        ***
*******      ******  ****    ****  **      **    **  ***
***  ******      **    **  **  **  ****        **    ***
*******      ******        ******    ****  **  **    ***
*****  **  ****          **  ****      **      **  *****
***  ****      ****    ****  **  ****  **********    ***
*******    ****  ******    ****  **          ****  *****
*******************  ******    **    ******      *******
***              ******      **  **  **  **  **      ***
***  **********  ******  **    **    ******  ****    ***
***  **      **  ********  **  **            **  **  ***
***  **      **  **  **  **  ****    **  **  ****    ***
***  **      **  **  ****  **  **  **    ****      *****
***  **********  **    ******      **  ****  **      ***
***              **  **  **  **    ************      ***
********************************************************
********************************************************`,

    unknown: "Unknown command",
}


