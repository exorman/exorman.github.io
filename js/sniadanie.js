
let last_bite = 0;
let eat_timer = 0;
let slides = ["intro_slide", "menu_slide", "tost_slide", "musli_slide", "english_slide", "grats_slide", "about_slide"];
let current_slide = "intro_slide";

function switch_slide(slide_id)
{
    current_slide = slide_id;
    slides.forEach(element => {
        if(element != current_slide)
        {
            let slide = document.getElementById(element);
            if(slide != null)
                slide.style.display = "none";
        }
    });

    let slide = document.getElementById(slide_id);
    slide.style.display = "block";
}

function next_bite()
{
    if(last_bite > 4)
    {
        if(eat_timer != 0)
            clearInterval(eat_timer);
        window.location.href = "gratulacje.html";
        return false;
    }
    let bite_id = "bite_"+last_bite;
    
    let bite = document.getElementById(bite_id);
    bite.style.display = "block";
    last_bite++;
    return true;
}

function reset_eating()
{
    for(let i=0; i<5; i++)
    {
        let bite_id = "bite_"+i;
        let bite = document.getElementById(bite_id);
        bite.style.display = "none";
    }
    last_bite = 0;
    if(eat_timer != 0)
        clearInterval(eat_timer);
}

function run_eating()
{
    reset_eating();
    eat_timer = setInterval(next_bite, 750);
}