function toggle_style()
{
    var newStyle = get_style() == "style1.css" ? "style2.css" : "style1.css";
    localStorage.setItem("style", newStyle);
    set_style();
}

function get_style()
{
    return localStorage['style'] || "style2.css";
}

function set_style()
{
    var style = get_style();
    document.getElementById('page_style').setAttribute("href", style);
}

window.addEventListener('DOMContentLoaded', () => {
    set_style();
});