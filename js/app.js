let colors = [];
let playing = true;
let count = 0;
let interval;
function push() {
    switch (playing) {
        case true :
            colors.push('#' + r.value + g.value + b.value);
            console.table(colors);
            r.disabled = true; g.disabled = true; b.disabled = true; clearBtn.disabled = true;
            btn.innerText = 'Stop'
            interval = setInterval(() => {
                if (count < colors.length) {
                    body.style.backgroundColor = colors[count];
                    count++;
                };
                if (count >= colors.length) {
                    count = 0;
                };
            }, 250);
            playing = false;
            break;
        case false :
            r.disabled = false; g.disabled = false; b.disabled = false; clearBtn.disabled = false;
            btn.innerText = 'Resume';
            clearInterval(interval)
            btn.innerText = 'Play';
            playing = true;
            break;
    };
};
function clear() {
    colors = []
    console.log(colors)
};
clearBtn.addEventListener('click', clear)
