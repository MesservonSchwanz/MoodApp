module App

open Feliz

let view =
    Html.div [
        prop.style [ style.padding 20; style.textAlign.center ]
        prop.children [
            Html.h1 "Mood App Deployed!"
            Html.p "If you're seeing this, deployment is working perfectly."
        ]
    ]

open Browser.Dom

ReactDOM.render(view, document.getElementById "root")