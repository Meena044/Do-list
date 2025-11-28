export function highlightBG(targetLi){
    const legendOptions = document.getElementById('projects')
    const projectsOptions = document.getElementById('lists');
    let items = legendOptions.querySelectorAll('li');
    const projOpt = projectsOptions.querySelectorAll("li");
    
    // remove background from all tabs
    projOpt.forEach(opt => {
        opt.style.backgroundColor = "";
        opt.style.borderRadius = "";
    });

    items.forEach(item => {
        item.style.backgroundColor = "";
        item.style.borderRadius = "";
    });

    targetLi.style.backgroundColor = ' rgba(164, 56, 236, 0.4)';
    targetLi.style.borderRadius = '1.3rem';
}