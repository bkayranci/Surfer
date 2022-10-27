let saveButtons = document.getElementsByClassName("save-button");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  

for (let button of saveButtons) {
    button.addEventListener("click", () => {
      let title = document.getElementById(`${button.id.split("~")[0]}ctitle`)
      let description = document.getElementById(`${button.id.split("~")[0]}csummary`)
      fetch(`/bookmark?title=${title.innerHTML}&content=${description.innerHTML}&url=${button.id.split("~")[1]}&typ=site`, { method: "POST" })
      .then(() => {
        button.innerHTML = `<i class="fa fa-check"></i>`
        delay(500).then(() => {
          button.innerHTML = `<i class="fa fa-bookmark"></i>`
        })
      })
    })
  }