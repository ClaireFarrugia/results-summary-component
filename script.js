document.addEventListener("DOMContentLoaded", async function(){
    
    let rawData = await fetch("data.json");
    let parsedData = await rawData.json();

    let rightBox = document.getElementById("rightbox")

    let totalScore = 0

    for (let i = 0; i < parsedData.length; i++){
        let barData = parsedData[i]
        let bar = document.createElement("div")
        bar.setAttribute("id", barData.category.toLowerCase())
        bar.setAttribute("class","bars")
        let color = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src",barData.icon)
        color.appendChild(image)

        bar.appendChild(color)

        let title = document.createElement("span")
        title.innerText = barData.category
        color.appendChild(title)



        let fraction = document.createElement("div")
        fraction.setAttribute("style","margin-left: auto;")
        let score = document.createElement("span")
        score.setAttribute("class","numerator")
        score.innerText = barData.score

        totalScore += barData.score 

        let denominator = document.createElement("span")
        denominator.setAttribute("class","denominator")
        denominator.innerText = (" / 100")

        fraction.appendChild(score)
        fraction.appendChild(denominator)
        bar.appendChild(fraction);

        let button = this.getElementById("button")
        rightBox.insertBefore(bar, button)
    }

   let avgTotalScore = Math.round(totalScore / parsedData.length)


   let visibleScore = this.getElementById("score")
   visibleScore.innerText = avgTotalScore
    
})