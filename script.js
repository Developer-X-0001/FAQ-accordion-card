function q1_click() {
    let arrow = document.getElementById('q1_arrow');
    let q = document.getElementById('q1');
    let ans = document.getElementById('ans1')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        q.style.fontWeight = '700';
        ans.style.display = 'block';
        arrow.style.rotate = '180deg';
    } else if (arrow.style.rotate == '180deg') {
        q.style.fontWeight = '400';
        ans.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}

function q2_click() {
    let arrow = document.getElementById('q2_arrow');
    let q = document.getElementById('q2');
    let ans = document.getElementById('ans2')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        q.style.fontWeight = '700';
        ans.style.display = 'block';
        arrow.style.rotate = '180deg';
    } else if (arrow.style.rotate == '180deg') {
        q.style.fontWeight = '400';
        ans.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}

function q3_click() {
    let arrow = document.getElementById('q3_arrow');
    let q = document.getElementById('q3');
    let ans = document.getElementById('ans3')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        q.style.fontWeight = '700';
        ans.style.display = 'block';
        arrow.style.rotate = '180deg';
    } else if (arrow.style.rotate == '180deg') {
        q.style.fontWeight = '400';
        ans.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}


function q4_click() {
    let arrow = document.getElementById('q4_arrow');
    let q = document.getElementById('q4');
    let ans = document.getElementById('ans4')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        q.style.fontWeight = '700';
        ans.style.display = 'block';
        arrow.style.rotate = '180deg';
    } else if (arrow.style.rotate == '180deg') {
        q.style.fontWeight = '400';
        ans.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}


function q5_click() {
    let arrow = document.getElementById('q5_arrow');
    let q = document.getElementById('q5');
    let ans = document.getElementById('ans5')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        q.style.fontWeight = '700';
        ans.style.display = 'block';
        arrow.style.rotate = '180deg';
    } else if (arrow.style.rotate == '180deg') {
        q.style.fontWeight = '400';
        ans.style.display = 'none';
        arrow.style.rotate = '0deg';
    }
}

function footer() {
    let arrow = document.getElementById('arrow')
    let section = document.getElementById('foot')
    if (arrow.style.rotate == 0 || arrow.style.rotate == '0deg') {
        arrow.style.rotate = '180deg';
        section.style.marginBottom = '1em';
    } else if (arrow.style.rotate == '180deg') {
        arrow.style.rotate = '0deg';
        section.style.marginBottom = '-3.5em';
    } else {
        arrow.style.rotate = '180deg';
        section.style.marginBottom = '1em';
    }
}