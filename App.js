let boxex = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let newbtn = document.querySelector("#newbtn")
let body = document.querySelector("body")
let Darkt = document.querySelector("#Ctheme")
let Theme = "Light";

let turnO = true;
const winPatternn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [6, 4, 2]
]

const reset_btn = () => {
    turnO = true;
    Enable_btn_Afret_new_game()
    msgcontainer.classList.add("hide")
}

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkwinner_after_Winning();

    })
})
let Show_msg_After_winning_ = (winner) => {
    msg.innerText = `Congratulation you winner ${winner}`;
    msgcontainer.classList.remove("hide")
    disable_btn_After_winning();

}

const disable_btn_After_winning = () => {
    for (const box of boxex) {
        box.disabled = true;
    }
}

const Enable_btn_Afret_new_game = () => {
    for (const box of boxex) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkwinner_after_Winning = () => {
    for (const pattern of winPatternn) {
        let posi1 = boxex[pattern[0]].innerText
        let posi2 = boxex[pattern[1]].innerText
        let posi3 = boxex[pattern[2]].innerText
        if (posi1 != "" && posi2 != "" && posi3 != "") {
            if (posi1 === posi2 && posi2 === posi3) {
                console.log("Winner", posi1)
                Show_msg_After_winning_(posi1)
            }

        }
    }
};
newbtn.addEventListener("click", reset_btn);
reset.addEventListener("click", reset_btn);

Darkt.addEventListener("click", () => {
    if (Theme === "Light") {
        Theme = "Dark";
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white";


    }
    else if (Theme === "Dark") {
        Theme = "green";
        document.body.style.backgroundColor = "green"
        document.body.style.color = "black";


    }

    else {
        Theme = "Light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});