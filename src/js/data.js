const Data = {
    instruction: 'Enter command or type \'help\' to see list of commands.',

    help: `Enter a command here and something will be output.
  Valid options are:
    help - this help text
    clear - clear the screen
    about - everything about me
    experience - expirience and job titles
    contacts - my contacts and links`,

    about: `I am a solution architect and senior software developer based in Vilnius, Lithuania, currently working at Telia Global Services.

I am known for my meticulous attention to detail, dedication, passion, quick learning ability, and creativity.

Enter what you want to know more. 
  Valid options: 
    soft-skills - my soft skills
    tech-skills - my tech skills
    work - me at work`,

    softSkills: `Ownership - I take responsibility for completing tasks on time and ensuring the best possible outcomes.

Support and coach - I share my knowledge with teammates and newcomers, providing guidance and support.

Team focus - I strive to create a positive atmosphere within the team and assist others in their daily work.

Creativity - I strive to create a positive atmosphere within the team and assist others in their daily work.

Fast learning - I quickly grasp new concepts and skills.

Collaborative - I engage effectively with team members, other teams, managers, business analysts, and architects.`,

    techSkills: `I possess extensive knowledge of various development technologies and tools, with significant experience in both front-end and back-end frameworks such as Angular, React, Spring, Kafka, and REST. I am well-versed in SQL and NoSQL databases, including Oracle, PostgreSQL, MongoDB, and Firebase. Additionally, I am proficient in setting up CI/CD tools like Jenkins, Kubernetes, and GitHub Actions.

Leveraging my broad technical expertise, I recommend frameworks and architectural solutions that enhance system stability and performance.

I am passionate about coding standards, best practices, and clean code principles. I consistently advocate for these practices, drawing from insights gained through conferences and video training sessions.`,

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

    experience: `I have wide development experience which I gathered working in different areas such as banking, healthcare, and telecommunications.

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


