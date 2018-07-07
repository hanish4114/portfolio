const menuBtn = document.getElementById('menu-btn');
    const menuBox = document.getElementById('menu-box');
    const xBtn = document.getElementById('x-btn');

    menuBtn.addEventListener('click',()=>{
        console.log(menuBox);
        
        menuBox.classList.add('show-menu-btn');
        
    });

    menuBox.addEventListener('click' ,(e)=>{
        // if(e.target==menuBox)
            menuBox.classList.remove('show-menu-btn');
    })
    xBtn.addEventListener('click' ,()=>{
        menuBox.classList.remove('show-menu-btn');
    });
