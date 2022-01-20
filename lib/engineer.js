

class Engineer {
    constructor(github){
    this.github = github;
    };

    getGithub(){
        inquirer.prompt(
          {
            type: 'input',
            name: 'github',
            message: 'What is your github address?'
          })
        };


}




module.exports = Engineer()