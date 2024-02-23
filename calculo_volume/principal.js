let calcularr = document.getElementById('calcularr')
    calcularr.addEventListener('click',()=>{
        let select = document.getElementById("select").value

        console.log(select)
        const calcular = new volumes(comprimento,altura,largura,raio)
        let x = 0
        console.log(x)
        if (select = "esfera")
        {
            x = calcular.calcularesfera()
        } else if (select = "cilindro")
        {
            x = calcular.calcularcilindro()
        } else if (select = "prisma")
        {
            x = calcular.calcularprisma()
        } else if (select = "piramide")
        {
           x = calcular.calcularpiramide()
        } else if (select = "cone")
        {
            x = calcular.calcularcone()
        }      
    })