window.onload = function () {
    const borderYes = document.getElementById('border-yes');
    const borderNo = document.getElementById('border-no');
    const borderColor = document.getElementById('border-color');
    const createBtn = document.getElementById('create-table-btn');

    borderYes.checked = true;
    borderColor.style.display = 'block';

    borderYes.onchange = function () {
        borderYes.checked = true;
        borderNo.checked = false;
        borderColor.style.display = 'block';
    };

    borderNo.onchange = function () {
        borderYes.checked = false;
        borderNo.checked = true;
        borderColor.style.display = 'none';
    };

    createBtn.onclick = () => {
        const width = document.getElementById('table-width').value;
        const height = document.getElementById('table-height').value;
        const columns = document.getElementById('table-columns').value;
        const rows = document.getElementById('table-rows').value;

        if (!width || !height || !columns || !rows) {
            alert("Please enter all values!");
            return;
        }

        const table = document.createElement('table');
        table.style.margin = '20px auto';
        table.style.borderCollapse = 'collapse';

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.style.width = width + 'px';
                td.style.height = height + 'px';
                td.style.border = '2px solid black';

                td.onmouseover = () => {
                    const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
                    td.style.backgroundColor = randomColor;
                    setTimeout(() => {
                        td.style.backgroundColor = 'transparent';
                    }, 300);
                };

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        if (borderYes.checked) {
            table.style.border = `5px solid ${borderColor.value}`;
        }

        const existingTable = document.querySelector('table');
        if (existingTable) {
            existingTable.remove();
        }

        document.body.appendChild(table);
    };
};
