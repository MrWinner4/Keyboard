document.addEventListener('DOMContentLoaded', function() {
    const columns = document.querySelectorAll('.question-column');
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');
    const block3 = document.getElementById('block3');

    columns.forEach(column => {
        const buttons = column.querySelectorAll('.btn-shadow');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove the 'active' class from all buttons in the column
                buttons.forEach(btn => btn.classList.remove('active'));

                // Add the 'active' class to the clicked button
                button.classList.add('active');

                const text = button.getAttribute('data-text');
                if (button.getAttribute('id') == 'C')
                    block1.textContent = text;
                else if (button.getAttribute('id') == 'B')
                    block2.textContent = text;
                else
                    block3.textContent = text;
            });
        });
    });
});
