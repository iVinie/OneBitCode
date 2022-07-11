let olderName, olderAge, youngName, youngAge, diffAge

olderName = prompt ("Qual nome da pessoa mais velha?\n")
olderAge = prompt ("Qual a idade de " + olderName + "?\n")
youngName = prompt ("Qual nome da pessoa mais nova?\n")
youngAge = prompt ("Qual a idade de " + youngName+ "?\n")
diffAge = olderAge - youngAge
alert("A pessoa " + olderName + " tem " + olderAge + " anos\n A pessoa " + youngName + " tem " + youngAge + " anos\n A difereça de idade é: " + diffAge )