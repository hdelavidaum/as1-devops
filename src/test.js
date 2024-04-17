const year = new Date()

console.log(`Estamos no ano de 2024? ${year.getFullYear() == 2024 ?
    'Sim, estamos em 2024' :
    'Não, estamos em ' + year.getFullYear()}!`
);