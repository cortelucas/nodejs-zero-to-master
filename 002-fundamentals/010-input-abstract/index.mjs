import inquirer from "inquirer";

inquirer.prompt([{
  name: 'p1',
  message: 'Qual a primeira nota?'
}, {
  name: 'p2',
  message: 'Qual a segunda nota?'
}])
  .then(answers => {
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2
    console.log(
      media < 5 ? `Sua média é ${media}, você está REPROVADO!`
        : media >= 5 && media < 7 ? `Sua média é ${media}, você está de RECUPERAÇÃO!`
          : `Sua média é ${media}, você está APROVADO!`
    )
  })
  .catch(error => console.log(error))
